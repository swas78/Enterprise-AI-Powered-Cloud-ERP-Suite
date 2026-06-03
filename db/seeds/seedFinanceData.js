require('dotenv').config({ path: '../../.env' });
const pool = require('../../src/config/db');

const seed = async () => {
  console.log('🌱 Seeding finance data...');

  // Get first admin user
  const userResult = await pool.query(
    "SELECT id FROM users WHERE role = 'admin' LIMIT 1"
  );
  if (!userResult.rows.length) {
    console.error('❌ No admin user found. Run seedUsers.js first.');
    process.exit(1);
  }
  const userId = userResult.rows[0].id;

  // Seed transactions
  const transactions = [
    { amount: 50000, type: 'credit', category: 'Sales',     description: 'Q1 client payment'  },
    { amount: 15000, type: 'debit',  category: 'Expenses',  description: 'Office rent'         },
    { amount: 30000, type: 'credit', category: 'Sales',     description: 'Q2 client payment'   },
    { amount: 5000,  type: 'debit',  category: 'Utilities', description: 'Electricity bill'    },
    { amount: 20000, type: 'credit', category: 'Services',  description: 'Consulting fee'      },
  ];

  for (const tx of transactions) {
    await pool.query(
      `INSERT INTO transactions (amount, type, category, description, created_by)
       VALUES ($1, $2, $3, $4, $5)`,
      [tx.amount, tx.type, tx.category, tx.description, userId]
    );
  }
  console.log('  ✅ Transactions seeded.');

  // Seed invoices
  const invoices = [
    { invoice_no: 'INV-001', client_name: 'ABC Corp', amount: 25000, status: 'paid',    due_date: '2026-04-30' },
    { invoice_no: 'INV-002', client_name: 'XYZ Ltd',  amount: 40000, status: 'unpaid',  due_date: '2026-05-31' },
    { invoice_no: 'INV-003', client_name: 'Tech Pvt', amount: 15000, status: 'overdue', due_date: '2026-03-31' },
  ];

  for (const inv of invoices) {
    await pool.query(
      `INSERT INTO invoices (invoice_no, client_name, amount, status, due_date, created_by)
       VALUES ($1, $2, $3, $4, $5, $6)
       ON CONFLICT (invoice_no) DO NOTHING`,
      [inv.invoice_no, inv.client_name, inv.amount, inv.status, inv.due_date, userId]
    );
  }
  console.log('  ✅ Invoices seeded.');

  console.log('✅ Finance seed complete!');
  process.exit(0);
};

seed().catch((err) => {
  console.error('❌ Finance seed failed:', err.message);
  process.exit(1);
});
