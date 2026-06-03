const router = require('express').Router();
const ctrl   = require('../controllers/dashboardController');
const auth   = require('../middleware/auth.middleware');

router.get('/summary', auth, ctrl.getSummary);

module.exports = router;