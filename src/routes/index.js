const router = require('express').Router();

router.use('/auth',                 require('./authRoutes'));
router.use('/hr/employees',         require('./hr/employeeRoutes'));
router.use('/hr/leaves',            require('./hr/leaveRoutes'));
router.use('/finance/transactions', require('./finance/transactionRoutes'));
router.use('/finance/invoices',     require('./finance/invoiceRoutes'));
router.use('/supply/vendors',       require('./supplyChain/vendorRoutes'));
router.use('/supply/inventory',     require('./supplyChain/inventoryRoutes'));
router.use('/supply/orders',        require('./supplyChain/poRoutes'));
router.use('/users', require('./usersRoutes'));
router.use('/dashboard',            require('./dashboardRoutes'));

module.exports = router;