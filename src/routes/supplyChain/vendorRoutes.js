const router = require('express').Router();
const ctrl = require('../../controllers/supplyChain/vendorController');
const auth = require('../../middleware/auth.middleware');
const roleGuard = require('../../middleware/roleGuard.middleware');

router.use(auth);
router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getOne);
router.post('/', roleGuard('admin', 'manager'), ctrl.create);
router.delete('/:id', roleGuard('admin'), ctrl.remove);

module.exports = router;