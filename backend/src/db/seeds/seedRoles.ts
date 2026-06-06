import mongoose from 'mongoose';
import { Role } from '../../models/Role';
import { Permission } from '../../models/Permission';
import logger from '../../utils/logger';

export const seedRolesAndPermissions = async (tenantId: mongoose.Types.ObjectId): Promise<Record<string, mongoose.Types.ObjectId[]>> => {
  logger.info('🔑 Seeding Roles and Permissions...');

  // Clean old ones
  await Role.deleteMany({ tenantId });
  await Permission.deleteMany({ tenantId });

  // 1. Create permissions
  const modules = ['auth', 'finance', 'hr', 'supplyChain', 'project', 'dashboard', 'notification', 'settings'];
  const actions = ['read', 'create', 'update', 'delete', 'approve', 'export', 'admin'];
  
  const permissionDocs: any[] = [];
  
  for (const module of modules) {
    for (const action of actions) {
      permissionDocs.push({
        action,
        resource: '*',
        module,
        description: `${action.toUpperCase()} permission for module ${module}`,
        tenantId,
      });
    }
  }

  const createdPermissions = await Permission.insertMany(permissionDocs);
  logger.info(`Initialized ${createdPermissions.length} permissions.`);

  // Group permission IDs by actions/modules for role assignment
  const readPermIds = createdPermissions.filter(p => p.action === 'read').map(p => p._id as mongoose.Types.ObjectId);
  const writePermIds = createdPermissions.filter(p => ['read', 'create', 'update'].includes(p.action)).map(p => p._id as mongoose.Types.ObjectId);
  const adminPermIds = createdPermissions.map(p => p._id as mongoose.Types.ObjectId);

  // 2. Create roles
  const superAdminRole = await Role.create({
    name: 'SuperAdmin',
    description: 'Platform-wide administrator with full system-level permissions.',
    permissions: adminPermIds,
    tenantId,
    isSystemRole: true,
  });

  const tenantAdminRole = await Role.create({
    name: 'TenantAdmin',
    description: 'Tenant organization administrator with full control over their tenant.',
    permissions: adminPermIds,
    tenantId,
    isSystemRole: true,
  });

  const managerRole = await Role.create({
    name: 'Manager',
    description: 'Department manager with read/write access to specific modules.',
    permissions: writePermIds,
    tenantId,
    isSystemRole: false,
  });

  const viewerRole = await Role.create({
    name: 'Viewer',
    description: 'Read-only access to tenant workspace resources.',
    permissions: readPermIds,
    tenantId,
    isSystemRole: false,
  });

  logger.info('Roles and Permissions seeded successfully.');

  return {
    SuperAdmin: [superAdminRole._id as mongoose.Types.ObjectId],
    TenantAdmin: [tenantAdminRole._id as mongoose.Types.ObjectId],
    Manager: [managerRole._id as mongoose.Types.ObjectId],
    Viewer: [viewerRole._id as mongoose.Types.ObjectId],
  };
};

export default seedRolesAndPermissions;
