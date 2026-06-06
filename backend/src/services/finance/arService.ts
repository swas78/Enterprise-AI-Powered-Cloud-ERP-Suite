import { invoiceRepository } from '../../repositories/finance/invoiceRepository';
import logger from '../../utils/logger';

export class ArService {
  
  // Calculate Accounts Receivable Aging Report
  public static async calculateReceivableAging(tenantId: string) {
    logger.info(`📊 Compiling Accounts Receivable Aging Report | Tenant: ${tenantId}`);

    // Fetch all unpaid or overdue AR Invoices
    const invoices = await invoiceRepository.find({
      tenantId,
      type: 'AR',
      status: { $in: ['Unpaid', 'Overdue'] },
      balanceDue: { $gt: 0 },
    });

    const now = new Date();
    
    // Define initial aging buckets
    const report = {
      current: 0,      // 0 - 30 days overdue (or not yet due)
      overdue30: 0,    // 31 - 60 days overdue
      overdue60: 0,    // 61 - 90 days overdue
      overdue90: 0,    // 90+ days overdue
      totalOutstanding: 0,
      invoiceCount: invoices.length,
    };

    for (const inv of invoices) {
      const timeDiff = now.getTime() - inv.dueDate.getTime();
      const daysOverdue = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

      report.totalOutstanding += inv.balanceDue;

      if (daysOverdue <= 30) {
        report.current += inv.balanceDue;
      } else if (daysOverdue <= 60) {
        report.overdue30 += inv.balanceDue;
      } else if (daysOverdue <= 90) {
        report.overdue60 += inv.balanceDue;
      } else {
        report.overdue90 += inv.balanceDue;
      }
    }

    // Round values to prevent float decimals issues
    report.current = Number(report.current.toFixed(2));
    report.overdue30 = Number(report.overdue30.toFixed(2));
    report.overdue60 = Number(report.overdue60.toFixed(2));
    report.overdue90 = Number(report.overdue90.toFixed(2));
    report.totalOutstanding = Number(report.totalOutstanding.toFixed(2));

    logger.debug(`📊 AR Aging compiled: Current $${report.current} | 31-60 $${report.overdue30} | 61-90 $${report.overdue60} | 90+ $${report.overdue90}`);
    return report;
  }
}
export default ArService;
