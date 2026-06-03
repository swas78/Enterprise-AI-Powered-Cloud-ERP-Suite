const { body, validationResult } = require('express-validator');

exports.signupRules = [
  body('name').trim().notEmpty().withMessage('Name required'),
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 6 }).withMessage('Min 6 chars'),
  body('role').optional().isIn(['admin','manager','employee']),
];
exports.loginRules = [
  body('email').isEmail(),
  body('password').notEmpty(),
];
exports.validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ success: false, errors: errors.array() });
  next();
};