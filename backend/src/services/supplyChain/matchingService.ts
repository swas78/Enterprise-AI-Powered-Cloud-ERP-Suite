import { poRepository } from '../../repositories/supplyChain/poRepository';
import { goodsReceiptRepository } from '../../repositories/supplyChain/goodsReceiptRepository';
import logger from '../../utils/logger';

export interface IInvoiceItemToMatch {
  sku: string;
  quantityBilled: number;
  unitPriceBilled: number;
}

export class MatchingService {
  
  // Executes 3-way matching validation
  public static async executeThreeWayMatch(
    tenantId: string,
    poId: string,
    grId: string,
    invoiceItems: IInvoiceItemToMatch[]
  ): Promise<{
    success: boolean;
    status: 'Matched' | 'Mismatch';
    errors: string[];
  }> {
    const errors: string[] = [];
    logger.info(`🔍 Starting 3-way matching check for PO: ${poId} | GR: ${grId} | Tenant: ${tenantId}`);

    // 1. Fetch source documents
    const po = await poRepository.findOne({ _id: poId, tenantId });
    if (!po) {
      throw new Error(`3-Way Match Error: Purchase Order not found.`);
    }

    const gr = await goodsReceiptRepository.findOne({ _id: grId, tenantId });
    if (!gr) {
      throw new Error(`3-Way Match Error: Goods Receipt document not found.`);
    }

    // Map items for easy lookup
    const poItemsMap = new Map(po.items.map(item => [item.sku, item]));
    const grItemsMap = new Map(gr.receivedItems.map(item => [item.sku, item]));

    // 2. Validate Invoice lines against PO and GR lines
    for (const invItem of invoiceItems) {
      const poItem = poItemsMap.get(invItem.sku);
      const grItem = grItemsMap.get(invItem.sku);

      // Check 1: Existence of item in PO
      if (!poItem) {
        errors.push(`SKU [${invItem.sku}] billed on invoice does not exist on initial Purchase Order.`);
        continue;
      }

      // Check 2: Quantity Match (Billed vs Received in Goods Receipt)
      if (!grItem) {
        errors.push(`SKU [${invItem.sku}] billed on invoice was never registered as delivered in Goods Receipt.`);
        continue;
      }

      if (invItem.quantityBilled > grItem.quantityReceived) {
        errors.push(`Quantity Mismatch on SKU [${invItem.sku}]: Billed (${invItem.quantityBilled}) exceeds Delivered (${grItem.quantityReceived}).`);
      }

      // Check 3: Pricing Match (Billed Unit Price vs PO Contract Price)
      if (invItem.unitPriceBilled !== poItem.unitPrice) {
        errors.push(`Unit Price Mismatch on SKU [${invItem.sku}]: Billed ($${invItem.unitPriceBilled.toFixed(2)}) deviates from PO Contract rate ($${poItem.unitPrice.toFixed(2)}).`);
      }
    }

    const isMatchSuccess = errors.length === 0;
    
    if (isMatchSuccess) {
      logger.info(`💚 3-Way Match Successful for PO: ${po.poNumber}. Auto-approving AP Invoice processing.`);
    } else {
      logger.warn(`⚠️ 3-Way Match Mismatch detected on PO: ${po.poNumber}. Errors: [${errors.join(' | ')}]`);
    }

    return {
      success: isMatchSuccess,
      status: isMatchSuccess ? 'Matched' : 'Mismatch',
      errors,
    };
  }
}
export default MatchingService;
