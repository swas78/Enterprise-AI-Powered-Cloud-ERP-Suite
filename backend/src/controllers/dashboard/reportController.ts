import { Response, NextFunction } from 'express';
import { TenantRequest } from '../../types';
import { DashboardService } from '../../services/dashboard/dashboardService';

export class ReportController {
  
  // Export General Ledger to CSV
  public static async exportLedger(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      const csvContent = await DashboardService.exportLedgerToCsv(tenantId);
      
      const fileName = `General_Ledger_Export_${Date.now()}.csv`;

      // Set headers for download piping
      res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
      res.setHeader('Content-Type', 'text/csv');
      
      return res.status(200).send(csvContent);
    } catch (error: any) {
      next(error);
    }
  }
}

export default ReportController;
