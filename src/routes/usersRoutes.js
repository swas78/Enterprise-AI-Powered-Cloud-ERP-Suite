const router    = require('express').Router();
const pool      = require('../config/db');
const auth      = require('../middleware/auth.middleware');
const roleGuard = require('../middleware/roleGuard.middleware');

router.get('/', auth, roleGuard('admin'), async (req, res) => {
  try {
    const { rows } = await pool.query(
      'SELECT id, name, email, role, is_active, created_at FROM users ORDER BY id DESC'
    );
    res.json({ success: true, data: rows });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;