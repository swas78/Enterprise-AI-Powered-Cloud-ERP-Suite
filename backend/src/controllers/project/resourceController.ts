import { Response, NextFunction } from 'express';
import { TenantRequest } from '../../types';
import { ProjectService } from '../../services/project/projectService';

export class ResourceController {
  
  // Compile resource utilization heatmaps
  public static async getResourceHeatmap(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      const heatmap = await ProjectService.getResourceHeatmap(tenantId);
      return res.status(200).json({ status: 'success', data: heatmap });
    } catch (error: any) {
      next(error);
    }
  }
}

export default ResourceController;
