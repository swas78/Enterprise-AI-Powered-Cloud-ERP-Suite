const router = require('express').Router();
const ctrl = require('../../controllers/supplyChain/inventoryController');
const auth = require('../../middleware/auth.middleware');
const roleGuard = require('../../middleware/roleGuard.middleware');

router.use(auth);
router.get('/', ctrl.getAll);
router.get('/low-stock', ctrl.getLowStock);
router.get('/:id', ctrl.getOne);
router.post('/', roleGuard('admin', 'manager'), ctrl.create);

module.exports = router;