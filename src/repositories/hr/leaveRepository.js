const BaseRepository = require('../baseRepository');

class LeaveRepository extends BaseRepository {
  constructor() { super('leave_requests'); }

  async create({ employee_id, leave_type, start_date, end_date, reason }) {
    const { rows } = await this.pool.query(`
      INSERT INTO leave_requests
        (employee_id, leave_type, start_date, end_date, reason)
      VALUES ($1,$2,$3,$4,$5) RETURNING *
    `, [employee_id, leave_type, start_date, end_date, reason]);
    return rows[0];
  }

  async updateStatus(id, status) {
    const { rows } = await this.pool.query(
      'UPDATE leave_requests SET status=$1 WHERE id=$2 RETURNING *',
      [status, id]
    );
    return rows[0] || null;
  }
}
module.exports = new LeaveRepository();