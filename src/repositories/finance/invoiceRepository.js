const BaseRepository = require('../baseRepository');

class InvoiceRepository extends BaseRepository {
  constructor() { super('invoices'); }

  async create({ invoice_no, client_name, amount, due_date, created_by }) {
    const { rows } = await this.pool.query(`
      INSERT INTO invoices (invoice_no, client_name, amount, due_date, created_by)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `, [invoice_no, client_name, amount, due_date, created_by]);
    return rows[0];
  }

  async updateStatus(id, status) {
    const { rows } = await this.pool.query(
      'UPDATE invoices SET status = $1 WHERE id = $2 RETURNING *',
      [status, id]
    );
    return rows[0] || null;
  }

  async findByStatus(status) {
    const { rows } = await this.pool.query(
      'SELECT * FROM invoices WHERE status = $1 ORDER BY created_at DESC',
      [status]
    );
    return rows;
  }

  async getSummary() {
    const { rows } = await this.pool.query(`
      SELECT
        COUNT(*) AS total_invoices,
        COALESCE(SUM(CASE WHEN status = 'unpaid'  THEN amount END), 0) AS total_unpaid,
        COALESCE(SUM(CASE WHEN status = 'paid'    THEN amount END), 0) AS total_paid,
        COALESCE(SUM(CASE WHEN status = 'overdue' THEN amount END), 0) AS total_overdue
      FROM invoices
    `);
    return rows[0];
  }
}

module.exports = new InvoiceRepository();