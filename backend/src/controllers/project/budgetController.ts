import { Response, NextFunction } from 'express';
import { TenantRequest } from '../../types';
import { ProjectService } from '../../services/project/projectService';

export class BudgetController {
  
  // Retrieve budget variance & over-budget alarms
  public static async getBudgetVariance(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      const { id } = req.params; // Project ID

      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      const variance = await ProjectService.getProjectBudgetVariance(tenantId, id);
      return res.status(200).json({ status: 'success', data: variance });
    } catch (error: any) {
      next(error);
    }
  }
}

export default BudgetController;
