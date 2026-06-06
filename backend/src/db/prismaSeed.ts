import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding PostgreSQL Database...');

  // Create default tenant
  const tenant = await prisma.tenant.upsert({
    where: { domain: 'amdox.internal' },
    update: {},
    create: {
      name: 'AMDOX HQ',
      domain: 'amdox.internal'
    }
  });

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10);
  
  await prisma.user.upsert({
    where: { email: 'admin@amdox.internal' },
    update: {},
    create: {
      email: 'admin@amdox.internal',
      password: hashedPassword,
      firstName: 'System',
      lastName: 'Administrator',
      role: 'ADMIN',
      tenantId: tenant.id
    }
  });

  console.log('Seed complete! Created tenant AMDOX HQ and admin@amdox.internal');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
