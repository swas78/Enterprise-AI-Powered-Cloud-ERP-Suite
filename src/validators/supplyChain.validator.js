const { body } = require('express-validator');

exports.createVendorRules = [
  body('name').trim().notEmpty().withMessage('Vendor name required'),
  body('email').optional().isEmail().withMessage('Valid email required'),
  body('phone').optional().trim(),
  body('address').optional().trim(),
];

exports.createInventoryRules = [
  body('item_name').trim().notEmpty().withMessage('Item name required'),
  body('sku').trim().notEmpty().withMessage('SKU required'),
  body('quantity').isInt({ min: 0 }).withMessage('Quantity must be 0 or more'),
  body('reorder_level').isInt({ min: 0 }).withMessage('Reorder level required'),
  body('unit_price').isFloat({ min: 0 }).withMessage('Valid unit price required'),
  body('vendor_id').optional().isInt(),
];

exports.createPORules = [
  body('vendor_id').notEmpty().isInt().withMessage('Valid vendor_id required'),
  body('po_number').trim().notEmpty().withMessage('PO number required'),
  body('total_amount').isFloat({ min: 0.01 }).withMessage('Total amount required'),
];

exports.updatePOStatusRules = [
  body('status')
    .isIn(['pending', 'approved', 'delivered', 'cancelled'])
    .withMessage('Invalid status'),
];