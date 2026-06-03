require('dotenv').config({ path: '../../.env' });
const bcrypt = require('bcrypt');
const pool   = require('../../src/config/db');


const seed = async () => {
  console.log('🌱 Seeding users...');

  const users = [
    { name: 'Admin User',    email: 'admin@erp.com',    password: 'admin123',    role: 'admin' },
    { name: 'HR Manager',    email: 'hr@erp.com',       password: 'hr123456',    role: 'hr' },
    { name: 'Finance Lead',  email: 'finance@erp.com',  password: 'finance123',  role: 'finance' },
    { name: 'John Employee', email: 'john@erp.com',     password: 'john1234',    role: 'employee' },
  ];

  for (const user of users) {
    const hashed = await bcrypt.hash(user.password, 12);
    await pool.query(
      `INSERT INTO users (name, email, password, role)
       VALUES ($1, $2, $3, $4)
       ON CONFLICT (email) DO NOTHING`,
      [user.name, user.email, hashed, user.role]
    );
    console.log(`  ✅ Seeded: ${user.email}`);
  }

  console.log('✅ Seed complete!');
  process.exit(0);
};

seed().catch((err) => {
  console.error('❌ Seed failed:', err.message);
  process.exit(1);
});
