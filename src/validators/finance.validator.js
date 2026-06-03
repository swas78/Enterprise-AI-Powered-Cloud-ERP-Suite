const { body } = require('express-validator');

exports.createTransactionRules = [
  body('amount').isFloat({ min: 0.01 }).withMessage('Amount must be greater than 0'),
  body('type').isIn(['credit', 'debit']).withMessage('Type must be credit or debit'),
  body('category').trim().notEmpty().withMessage('Category required'),
  body('description').optional().trim(),
];

exports.createInvoiceRules = [
  body('invoice_no').trim().notEmpty().withMessage('Invoice number required'),
  body('client_name').trim().notEmpty().withMessage('Client name required'),
  body('amount').isFloat({ min: 0.01 }).withMessage('Amount must be greater than 0'),
  body('due_date').isDate().withMessage('Valid due_date required'),
];

exports.updateInvoiceStatusRules = [
  body('status')
    .isIn(['unpaid', 'paid', 'overdue'])
    .withMessage('Status must be unpaid, paid, or overdue'),
];
