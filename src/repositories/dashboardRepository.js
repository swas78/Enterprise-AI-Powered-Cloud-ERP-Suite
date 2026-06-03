const pool = require('../config/db');

exports.getSummary = async () => {
  const [employees, finance, leaves, inventory, vendors, orders] =
    await Promise.all([
      pool.query(`
        SELECT
          COUNT(*) AS total_employees,
          COUNT(CASE WHEN status='active' THEN 1 END) AS active_employees
        FROM employees
      `),
      pool.query(`
        SELECT
          COALESCE(SUM(CASE WHEN type='credit' THEN amount END),0) AS total_revenue,
          COALESCE(SUM(CASE WHEN type='debit'  THEN amount END),0) AS total_expenses,
          COUNT(*) AS total_transactions
        FROM transactions
      `),
      pool.query(`
        SELECT
          COUNT(*) AS total_leaves,
          COUNT(CASE WHEN status='pending' THEN 1 END) AS pending_leaves
        FROM leave_requests
      `),
      pool.query(`
        SELECT
          COUNT(*) AS total_items,
          COUNT(CASE WHEN quantity <= reorder_level THEN 1 END) AS low_stock_items
        FROM inventory
      `),
      pool.query(`SELECT COUNT(*) AS total_vendors FROM vendors`),
      pool.query(`
        SELECT
          COUNT(*) AS total_orders,
          COUNT(CASE WHEN status='pending' THEN 1 END) AS pending_orders
        FROM purchase_orders
      `),
    ]);

  return {
    employees: employees.rows[0],
    finance: finance.rows[0],
    leaves: leaves.rows[0],
    inventory: inventory.rows[0],
    vendors: vendors.rows[0],
    orders: orders.rows[0],
  };
};