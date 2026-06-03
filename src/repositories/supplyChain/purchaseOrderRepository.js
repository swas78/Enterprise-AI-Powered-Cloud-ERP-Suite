const BaseRepository = require('../baseRepository');
const pool = require('../../config/db');

class PurchaseOrderRepository extends BaseRepository {
  constructor() {
    super('purchase_orders');
  }

  async create(data) {
    const { vendor_id, po_number, total_amount, created_by } = data;
    const { rows } = await pool.query(
      `INSERT INTO purchase_orders (vendor_id, po_number, total_amount, status, created_by, created_at)
       VALUES ($1, $2, $3, 'pending', $4, NOW()) RETURNING *`,
      [vendor_id, po_number, total_amount, created_by]
    );
    return rows[0];
  }

  async updateStatus(id, status) {
    const { rows } = await pool.query(
      `UPDATE purchase_orders SET status = $1, updated_at = NOW()
       WHERE id = $2 RETURNING *`,
      [status, id]
    );
    return rows[0] || null;
  }
}

module.exports = new PurchaseOrderRepository();
