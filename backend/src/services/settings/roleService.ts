import { roleRepository } from '../../repositories/settings/roleRepository';
import { IRole } from '../../models/Role';
import logger from '../../utils/logger';

export class RoleService {
  static async getRolesByTenant(tenantId: string): Promise<IRole[]> {
    logger.info(`👥 RoleService: Fetching roles for Tenant: ${tenantId}`);
    return roleRepository.find({ tenantId });
  }

  static async getRoleByName(tenantId: string, name: string): Promise<IRole | null> {
    return roleRepository.findOne({ tenantId, name });
  }

  static async createRole(tenantId: string, data: { name: string; description?: string; permissions: string[] }): Promise<IRole> {
    logger.info(`👥 RoleService: Creating role ${data.name} for Tenant: ${tenantId}`);
    return roleRepository.create({
      ...data,
      tenantId,
      isSystemRole: false,
    });
  }

  static async updateRole(tenantId: string, roleId: string, updates: Partial<IRole>): Promise<IRole | null> {
    logger.info(`👥 RoleService: Updating role ${roleId} for Tenant: ${tenantId}`);
    // Don't allow changing system roles or tenantId
    return roleRepository.update(
      { _id: roleId, tenantId, isSystemRole: false },
      { $set: updates }
    );
  }

  static async deleteRole(tenantId: string, roleId: string): Promise<boolean> {
    logger.info(`👥 RoleService: Deleting role ${roleId} for Tenant: ${tenantId}`);
    const result = await roleRepository.delete({ _id: roleId, tenantId, isSystemRole: false });
    return result.deletedCount > 0;
  }
}

export default RoleService;
