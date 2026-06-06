import { Response, NextFunction } from 'express';
import { TenantRequest } from '../../types';
import { ArService } from '../../services/finance/arService';

export class ArController {
  
  // Retrieve Aged Receivables Report
  public static async getAgingReport(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      const report = await ArService.calculateReceivableAging(tenantId);

      return res.status(200).json({
        status: 'success',
        data: report,
      });
    } catch (error: any) {
      next(error);
    }
  }
}
export default ArController;
