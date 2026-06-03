const router    = require('express').Router();
const ctrl      = require('../../controllers/hr/employeeController');
const auth      = require('../../middleware/auth.middleware');
const roleGuard = require('../../middleware/roleGuard.middleware');

router.use(auth);
router.get   ('/',    roleGuard('admin','manager'), ctrl.getAll);
router.get   ('/:id',roleGuard('admin','manager'), ctrl.getOne);
router.post  ('/',    roleGuard('admin'),           ctrl.create);
router.put   ('/:id',roleGuard('admin','manager'), ctrl.update);
router.delete('/:id',roleGuard('admin'),           ctrl.remove);

module.exports = router;