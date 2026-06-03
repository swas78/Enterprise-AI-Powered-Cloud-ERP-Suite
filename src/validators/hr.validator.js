const { body } = require('express-validator');

exports.createEmployeeRules = [
  body('user_id').notEmpty().isInt().withMessage('Valid user_id required'),
  body('department').trim().notEmpty().withMessage('Department required'),
  body('position').trim().notEmpty().withMessage('Position required'),
  body('salary').isFloat({ min: 0 }).withMessage('Valid salary required'),
];

exports.updateEmployeeRules = [
  body('department').optional().trim().notEmpty(),
  body('position').optional().trim().notEmpty(),
  body('salary').optional().isFloat({ min: 0 }),
  body('status').optional().isIn(['active', 'inactive', 'terminated'])
    .withMessage('Status must be active, inactive, or terminated'),
];

exports.applyLeaveRules = [
  body('employee_id').notEmpty().isInt().withMessage('Valid employee_id required'),
  body('leave_type').isIn(['sick', 'casual', 'annual', 'maternity'])
    .withMessage('Invalid leave type'),
  body('start_date').isDate().withMessage('Valid start_date required'),
  body('end_date').isDate().withMessage('Valid end_date required'),
  body('reason').optional().trim(),
];

exports.updateLeaveStatusRules = [
  body('status').isIn(['approved', 'rejected'])
    .withMessage('Status must be approved or rejected'),
];