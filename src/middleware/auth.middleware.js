const jwt = require('jsonwebtoken');
const env = require('../config/env');

module.exports = (req, res, next) => {
  const auth = req.headers['authorization'];
  if (!auth?.startsWith('Bearer '))
    return res.status(401).json({ success: false, error: 'No token' });
  try {
    req.user = jwt.verify(auth.split(' ')[1], env.jwt.secret);
    next();
  } catch {
    res.status(401).json({ success: false, error: 'Token invalid or expired' });
  }
};