const BaseRepository = require('../baseRepository');

class TransactionRepository extends BaseRepository {
  constructor() { super('transactions'); }

  async create({ amount, type, category, description, created_by }) {
    const { rows } = await this.pool.query(`
      INSERT INTO transactions (amount,type,category,description,created_by)
      VALUES ($1,$2,$3,$4,$5) RETURNING *
    `, [amount, type, category, description, created_by]);
    return rows[0];
  }

  async getSummary() {
    const { rows } = await this.pool.query(`
      SELECT
        COALESCE(SUM(CASE WHEN type='credit' THEN amount END),0) AS total_credit,
        COALESCE(SUM(CASE WHEN type='debit'  THEN amount END),0) AS total_debit,
        COUNT(*) AS total
      FROM transactions
    `);
    return rows[0];
  }
}
module.exports = new TransactionRepository();