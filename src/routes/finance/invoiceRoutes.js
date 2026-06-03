const router    = require('express').Router();
const ctrl      = require('../../controllers/finance/invoiceController');
const auth      = require('../../middleware/auth.middleware');
const roleGuard = require('../../middleware/roleGuard.middleware');

router.use(auth);

router.get   ('/',           ctrl.getAll);
router.get   ('/summary',    ctrl.getSummary);
router.get   ('/status/:status', ctrl.getByStatus);
router.get   ('/:id',        ctrl.getOne);
router.post  ('/',           roleGuard('admin', 'manager'), ctrl.create);
router.patch ('/:id/status', roleGuard('admin'),            ctrl.updateStatus);

module.exports = router;