const pool = require('../config/db');

async function createAuditLog(data) {
  const query = `
    INSERT INTO audit_logs
    (user_id, action, module, record_id, details)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;

  const values = [
    data.user_id,
    data.action,
    data.module,
    data.record_id,
    data.details
  ];

  const result = await pool.query(query, values);
  return result.rows[0];
}

module.exports = {
  createAuditLog
};