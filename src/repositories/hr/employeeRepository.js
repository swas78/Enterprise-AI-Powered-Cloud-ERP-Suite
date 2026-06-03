const BaseRepository = require('../baseRepository');

class EmployeeRepository extends BaseRepository {
  constructor() { super('employees'); }

  async findAllWithUser() {
    const { rows } = await this.pool.query(`
      SELECT e.*, u.name, u.email, u.role
      FROM   employees e
      JOIN   users u ON e.user_id = u.id
      ORDER BY e.id DESC
    `);
    return rows;
  }

  async create({ user_id, department, position, salary }) {
    const { rows } = await this.pool.query(`
      INSERT INTO employees (user_id, department, position, salary)
      VALUES ($1,$2,$3,$4) RETURNING *
    `, [user_id, department, position, salary]);
    return rows[0];
  }

  async update(id, { department, position, salary, status }) {
    const { rows } = await this.pool.query(`
      UPDATE employees
      SET    department=$1, position=$2, salary=$3, status=$4
      WHERE  id=$5 RETURNING *
    `, [department, position, salary, status, id]);
    return rows[0] || null;
  }
}
module.exports = new EmployeeRepository();