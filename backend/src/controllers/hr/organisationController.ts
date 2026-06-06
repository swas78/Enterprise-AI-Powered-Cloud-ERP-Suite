import { Response, NextFunction } from 'express';
import { TenantRequest } from '../../types';
import { HrService } from '../../services/hr/hrService';

export class OrganisationController {
  
  // Get recursive Org Chart reporting lines
  public static async getOrgChart(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      const chart = await HrService.getOrgChart(tenantId);

      return res.status(200).json({
        status: 'success',
        data: chart,
      });
    } catch (error: any) {
      next(error);
    }
  }
}

export default OrganisationController;
