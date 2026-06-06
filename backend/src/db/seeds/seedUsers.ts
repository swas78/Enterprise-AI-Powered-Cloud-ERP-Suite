import mongoose from 'mongoose';
import { User } from '../../models/User';
import logger from '../../utils/logger';

export const seedUsers = async (tenantId: mongoose.Types.ObjectId): Promise<Record<string, mongoose.Types.ObjectId>> => {
  logger.info('👤 Seeding Users...');
  await User.deleteMany({});

  const admin = await User.create({
    name: 'Swastik Mishra',
    email: 'admin@amdox.com',
    password: 'adminpassword', // Salted in pre-save hook
    role: 'TenantAdmin',
    tenantId,
  });

  const manager = await User.create({
    name: 'Sarah Manager',
    email: 'manager@amdox.com',
    password: 'managerpassword',
    role: 'Manager',
    tenantId,
  });

  const viewer = await User.create({
    name: 'Sophie Viewer',
    email: 'viewer@amdox.com',
    password: 'viewerpassword',
    role: 'Viewer',
    tenantId,
  });

  logger.info('Users seeded successfully.');
  return {
    adminId: admin._id as mongoose.Types.ObjectId,
    managerId: manager._id as mongoose.Types.ObjectId,
    viewerId: viewer._id as mongoose.Types.ObjectId,
  };
};

export default seedUsers;
