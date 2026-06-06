import { Response, NextFunction } from 'express';
import { TenantRequest } from '../../types';
import logger from '../../utils/logger';

export class PermissionController {
  
  // List all system permission nodes
  public static async getPermissions(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      logger.info('🔑 Listing system permission schema nodes.');
      const permissions = {
        finance: ['finance.ledger.read', 'finance.ledger.write', 'finance.period.lock', 'finance.invoice.process'],
        hr: ['hr.employee.read', 'hr.employee.write', 'hr.payroll.run', 'hr.leaves.evaluate'],
        scm: ['scm.po.create', 'scm.po.approve', 'scm.inventory.read', 'scm.inventory.write'],
        projects: ['projects.create', 'projects.write', 'projects.read'],
        settings: ['settings.read', 'settings.write'],
      };

      return res.status(200).json({
        status: 'success',
        data: permissions,
      });
    } catch (error) {
      next(error);
    }
  }

  // Check if current user has a specific permission
  public static async checkPermission(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const userRole = req.user?.role;
      const { node } = req.body;

      if (!node) {
        return res.status(400).json({ status: 'error', message: 'Permission node parameter is required.' });
      }

      // Simple mock check
      let hasAccess = false;
      if (userRole === 'SuperAdmin' || userRole === 'TenantAdmin') {
        hasAccess = true;
      } else if (userRole === 'Manager' && !node.endsWith('.lock') && !node.endsWith('.run')) {
        hasAccess = true;
      } else if (userRole === 'Viewer' && node.endsWith('.read')) {
        hasAccess = true;
      }

      return res.status(200).json({
        status: 'success',
        data: {
          role: userRole,
          node,
          authorized: hasAccess,
        },
      });
    } catch (error) {
      next(error);
    }
  }
}

export default PermissionController;
