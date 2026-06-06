import { permissionRepository } from '../../repositories/settings/permissionRepository';
import { IPermission } from '../../models/Permission';
import { userRepository } from '../../repositories/userRepository';
import { roleRepository } from '../../repositories/settings/roleRepository';
import logger from '../../utils/logger';

export class PermissionService {
  static async getPermissionsByTenant(tenantId: string): Promise<IPermission[]> {
    logger.info(`🔑 PermissionService: Fetching permissions for Tenant: ${tenantId}`);
    return permissionRepository.find({ tenantId });
  }

  static async createPermission(
    tenantId: string,
    data: { action: string; resource: string; module: string; description?: string }
  ): Promise<IPermission> {
    logger.info(`🔑 PermissionService: Creating permission ${data.action} on ${data.resource} for Tenant: ${tenantId}`);
    return permissionRepository.create({
      ...data,
      tenantId,
    });
  }

  /**
   * Checks if a user has permission to execute an action on a resource
   */
  static async hasPermission(
    tenantId: string,
    userId: string,
    module: string,
    resource: string,
    action: string
  ): Promise<boolean> {
    logger.info(`🔑 Checking permission for User: ${userId}, Tenant: ${tenantId}, Target: ${module}:${resource}:${action}`);
    
    const user = await userRepository.findOne({ _id: userId, tenantId });
    if (!user) return false;

    // SuperAdmin has global permission bypass
    if (user.role === 'SuperAdmin' || user.role === 'TenantAdmin') return true;

    // Look up the role for the user
    const roleDoc = await roleRepository.findOne({ tenantId, name: user.role });
    if (!roleDoc) return false;

    // Fetch details of all permissions assigned to the role
    const permissions = await permissionRepository.find({
      _id: { $in: roleDoc.permissions },
      tenantId,
    });

    // Check if any permission matches the required action and resource
    return permissions.some(
      (p) =>
        p.module === module &&
        (p.resource === '*' || p.resource === resource) &&
        (p.action === '*' || p.action === action || p.action === 'admin')
    );
  }
}

export default PermissionService;
