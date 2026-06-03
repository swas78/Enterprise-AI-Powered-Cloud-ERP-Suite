const BaseRepository = require('./baseRepository');

class UserRepository extends BaseRepository {
  constructor() { super('users'); }

  async findByEmail(email) {
    const { rows } = await this.pool.query(
      'SELECT * FROM users WHERE email = $1 AND is_active = true', [email]
    );
    return rows[0] || null;
  }

  async create({ name, email, password, role }) {
    const { rows } = await this.pool.query(
      `INSERT INTO users (name, email, password, role)
       VALUES ($1,$2,$3,$4)
       RETURNING id, name, email, role, created_at`,
      [name, email, password, role || 'employee']
    );
    return rows[0];
  }
}

module.exports = new UserRepository();