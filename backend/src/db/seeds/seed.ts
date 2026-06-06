import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Tenant } from '../../models/Tenant';
import { seedRolesAndPermissions } from './seedRoles';
import { seedUsers } from './seedUsers';
import { seedFinanceData } from './seedFinanceData';
import { seedMasterData } from './seedMasterData';

dotenv.config();

const DATABASE_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/amdox-erp?replicaSet=rs0';

const seedDatabase = async () => {
  try {
    console.log('🔄 Central Seeding started...');
    await mongoose.connect(DATABASE_URL);
    console.log('🟢 Connected to MongoDB for seeding.');

    // 1. Clear Tenant
    await Tenant.deleteMany({});
    
    // 2. Create Tenant
    console.log('🏢 Creating sample Tenant: Amdox Technologies...');
    const tenant = await Tenant.create({
      name: 'Amdox Technologies',
      subdomain: 'amdox',
      status: 'active',
    });

    const tenantId = tenant._id as mongoose.Types.ObjectId;

    // 3. Seed Roles & Permissions
    await seedRolesAndPermissions(tenantId);

    // 4. Seed Users
    const usersMap = await seedUsers(tenantId);

    // 5. Seed Finance Data
    await seedFinanceData(tenantId, usersMap.adminId);

    // 6. Seed Master Data
    await seedMasterData(tenantId, usersMap.adminId);

    console.log('🎉 Seeding successfully completed!');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding failed with error:', error);
    process.exit(1);
  }
};

seedDatabase();
export default seedDatabase;
