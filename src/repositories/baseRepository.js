const pool = require('../config/db');

class BaseRepository {
  constructor(tableName) {
    this.table = tableName;
    this.pool  = pool;
  }

  async findAll(orderBy = 'id DESC') {
    const { rows } = await this.pool.query(
      `SELECT * FROM ${this.table} ORDER BY ${orderBy}`
    );
    return rows;
  }

  async findById(id) {
    const { rows } = await this.pool.query(
      `SELECT * FROM ${this.table} WHERE id = $1`, [id]
    );
    return rows[0] || null;
  }

  async deleteById(id) {
    const { rowCount } = await this.pool.query(
      `DELETE FROM ${this.table} WHERE id = $1`, [id]
    );
    return rowCount > 0;
  }

  async count() {
    const { rows } = await this.pool.query(
      `SELECT COUNT(*) AS total FROM ${this.table}`
    );
    return Number(rows[0].total);
  }
}

module.exports = BaseRepository;