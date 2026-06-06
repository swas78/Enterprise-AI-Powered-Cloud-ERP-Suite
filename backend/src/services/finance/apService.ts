import { invoiceRepository } from '../../repositories/finance/invoiceRepository';
import { MatchingService } from '../supplyChain/matchingService';
import { AccountingEngine } from './accountingEngine';
import { chartOfAccountsRepository } from '../../repositories/finance/chartOfAccountsRepository';
import logger from '../../utils/logger';
import { IInvoiceItem } from '../../models/finance/Invoice';

export class ApService {
  
  // Process incoming AP Invoice, execute 3-way match, and post ledger liabilities
  public static async processApInvoice(
    tenantId: string,
    data: {
      invoiceNumber: string;
      supplierName: string;
      dueDate: Date;
      poId: string;
      grId: string;
      items: IInvoiceItem[];
    }
  ) {
    logger.info(`💸 Processing AP Invoice ${data.invoiceNumber} from Supplier: ${data.supplierName} | Tenant: ${tenantId}`);

    // 1. Run 3-Way Match (PO vs Goods Receipt vs Invoice items)
    const matchResult = await MatchingService.executeThreeWayMatch(
      tenantId,
      data.poId,
      data.grId,
      data.items.map(item => ({
        sku: item.sku,
        quantityBilled: item.quantity,
        unitPriceBilled: item.unitPrice,
      }))
    );

    // 2. Create the Invoice document
    const totalAmount = data.items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);

    const invoice = await invoiceRepository.create({
      tenantId,
      invoiceNumber: data.invoiceNumber,
      type: 'AP',
      partyName: data.supplierName,
      dueDate: data.dueDate,
      items: data.items,
      totalAmount,
      balanceDue: totalAmount,
      status: matchResult.success ? 'Unpaid' : 'Draft',
      poId: data.poId,
      grId: data.grId,
    });

    logger.info(`💸 Created AP Invoice record: ${invoice.invoiceNumber}. Status: ${invoice.status}`);

    // 3. If matched successfully, automatically post liability in General Ledger
    if (matchResult.success) {
      logger.info('⚖️ 3-Way Match passed. Posting standard ledger entries (Debit Expense/Inventory, Credit AP Liability)...');

      // Find Accounts Payable Liability Account
      const apAccount = await chartOfAccountsRepository.findOne({ tenantId, code: '2000' });
      // Find Operating Expense Account (or Inventory Asset)
      const expenseAccount = await chartOfAccountsRepository.findOne({ tenantId, code: '5000' });

      if (apAccount && expenseAccount) {
        await AccountingEngine.postJournalEntry(tenantId, {
          ref: `JE-AP-${invoice.invoiceNumber}`,
          description: `Accrued liability for Invoice ${invoice.invoiceNumber} | Supplier: ${data.supplierName}`,
          lines: [
            {
              accountId: expenseAccount._id as string,
              type: 'Debit',
              amount: totalAmount,
            },
            {
              accountId: apAccount._id as string,
              type: 'Credit',
              amount: totalAmount,
            },
          ],
        });
      } else {
        logger.error('❌ Failed to auto-post ledger journal. Accounts "2000" or "5000" are missing in Chart of Accounts.');
      }
    }

    return {
      invoice,
      matchResult,
    };
  }

  // Execute payment runs (paying supplier bills, updating ledger Debit AP, Credit Cash)
  public static async executePaymentRun(tenantId: string, invoiceIds: string[]) {
    logger.info(`💸 Executing batch payment run for ${invoiceIds.length} AP Invoices | Tenant: ${tenantId}`);
    
    let totalPaid = 0;
    const paidInvoices: string[] = [];

    for (const invId of invoiceIds) {
      const invoice = await invoiceRepository.findOne({ _id: invId, tenantId, type: 'AP', status: { $in: ['Unpaid', 'Overdue'] } });
      if (!invoice) continue;

      const amountToPay = invoice.balanceDue;
      
      // Update invoice status
      invoice.balanceDue = 0;
      invoice.status = 'Paid';
      await invoice.save();

      totalPaid += amountToPay;
      paidInvoices.push(invoice.invoiceNumber);

      // Post Ledger entries: Debit Accounts Payable (2000), Credit Cash (1000)
      const apAccount = await chartOfAccountsRepository.findOne({ tenantId, code: '2000' });
      const cashAccount = await chartOfAccountsRepository.findOne({ tenantId, code: '1000' });

      if (apAccount && cashAccount) {
        await AccountingEngine.postJournalEntry(tenantId, {
          ref: `JE-PAY-${invoice.invoiceNumber}`,
          description: `Disbursed supplier payment for Invoice ${invoice.invoiceNumber} | Supplier: ${invoice.partyName}`,
          lines: [
            {
              accountId: apAccount._id as string,
              type: 'Debit',
              amount: amountToPay,
            },
            {
              accountId: cashAccount._id as string,
              type: 'Credit',
              amount: amountToPay,
            },
          ],
        });
      }
    }

    return {
      totalPaid: Number(totalPaid.toFixed(2)),
      paidInvoices,
    };
  }
}
export default ApService;
