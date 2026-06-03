const router    = require('express').Router();
const ctrl      = require('../../controllers/hr/leaveController');
const auth      = require('../../middleware/auth.middleware');
const roleGuard = require('../../middleware/roleGuard.middleware');

router.use(auth);

// Get all leave requests — admin and manager only
router.get('/',      roleGuard('admin', 'manager'), ctrl.getAll);

// Get single leave request by id
router.get('/:id',   roleGuard('admin', 'manager'), ctrl.getOne);

// Apply for leave — any logged in employee
router.post('/',     ctrl.apply);

// Approve or reject a leave — admin and manager only
router.patch('/:id/status', roleGuard('admin', 'manager'), ctrl.updateStatus);

module.exports = router;