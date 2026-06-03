const BaseRepository = require('../baseRepository');
const pool = require('../../config/db');

class InventoryRepository extends BaseRepository {
  constructor() {
    super('inventory');
  }

  async create(data) {
    const { item_name, sku, quantity, reorder_level, unit_price, vendor_id } = data;
    const { rows } = await pool.query(
      `INSERT INTO inventory (item_name, sku, quantity, reorder_level, unit_price, vendor_id, created_at)
       VALUES ($1, $2, $3, $4, $5, $6, NOW()) RETURNING *`,
      [item_name, sku, quantity, reorder_level, unit_price, vendor_id]
    );
    return rows[0];
  }

  async getLowStock() {
    const { rows } = await pool.query(
      `SELECT * FROM inventory WHERE quantity <= reorder_level ORDER BY quantity ASC`
    );
    return rows;
  }
}

module.exports = new InventoryRepository();
