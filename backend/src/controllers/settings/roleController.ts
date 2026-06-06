import { Response, NextFunction } from 'express';
import { TenantRequest } from '../../types';
import logger from '../../utils/logger';

export class RoleController {
  
  // List all RBAC roles in the ERP platform
  public static async getRoles(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      logger.info('👥 Querying active system RBAC roles');
      const roles = [
        { name: 'SuperAdmin', description: 'Platform-wide administrator with full system-level permissions.' },
        { name: 'TenantAdmin', description: 'Tenant organization administrator with full control over their tenant.' },
        { name: 'Manager', description: 'Department manager with read/write access to specific modules.' },
        { name: 'Viewer', description: 'Read-only access to tenant workspace resources.' },
      ];

      return res.status(200).json({
        status: 'success',
        data: roles,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get details of a specific role
  public static async getRoleDetails(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const { name } = req.params;
      const validRoles = ['SuperAdmin', 'TenantAdmin', 'Manager', 'Viewer'];

      if (!validRoles.includes(name)) {
        return res.status(404).json({ status: 'error', message: 'Role does not exist in the system.' });
      }

      return res.status(200).json({
        status: 'success',
        data: {
          name,
          permissions: name === 'SuperAdmin' || name === 'TenantAdmin' ? ['*'] : name === 'Manager' ? ['read', 'write'] : ['read'],
        },
      });
    } catch (error) {
      next(error);
    }
  }
}

export default RoleController;
