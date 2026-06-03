const router  = require('express').Router();
const ctrl    = require('../controllers/authController');
const authMw  = require('../middleware/auth.middleware');
const { signupRules, loginRules, validate } =
  require('../validators/auth.validator');

router.post('/signup', signupRules, validate, ctrl.signup);
router.post('/login',  loginRules,  validate, ctrl.login);
router.get ('/me',     authMw,              ctrl.getMe);

module.exports = router;