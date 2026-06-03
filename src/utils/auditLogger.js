const pool = require('../config/db');

/**
 * Logs an audit entry to the audit_logs table.
 * Silently fails so it never crashes the main request.
 */
const auditLog = async (userId, action, tableName, recordId) => {
  try {
    await pool.query(
      `INSERT INTO audit_log (user_id, action, table_name, record_id, timestamp)
       VALUES ($1, $2, $3, $4, NOW())`,
      [userId, action, tableName, recordId]
    );
  } catch (err) {
    // Do not let audit failure crash the request
    console.error('[AuditLog Error]', err.message);
  }
};

module.exports = auditLog;
