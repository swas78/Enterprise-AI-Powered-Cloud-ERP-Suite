const BaseRepository = require('../baseRepository');
const pool = require('../../config/db');

class VendorRepository extends BaseRepository {
  constructor() {
    super('vendors');
  }

  async create(data) {
    const { name, email, phone, address } = data;
    const { rows } = await pool.query(
      `INSERT INTO vendors (name, email, phone, address, created_at)
       VALUES ($1, $2, $3, $4, NOW()) RETURNING *`,
      [name, email, phone, address]
    );
    return rows[0];
  }
}

module.exports = new VendorRepository();
