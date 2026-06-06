import { Router } from 'express';
import { AuthController } from '../controllers/authController';
import { CsrfProtection } from '../middleware/csrf.middleware';
import { validateSchema } from '../middleware/validation.middleware';
import { loginSchema } from '../validators/auth.validator';
import { authRateLimiter } from '../middleware/rateLimiter.middleware';

const router = Router();

// Public routes for session establishment
router.get('/csrf-token', CsrfProtection.getCsrfToken);
router.post('/register', authRateLimiter, AuthController.register);
router.post('/login', authRateLimiter, validateSchema(loginSchema), AuthController.login);
router.post('/verify-otp', authRateLimiter, AuthController.verifyOtp);
router.post('/refresh', authRateLimiter, AuthController.refresh);

// Protected routes (handled internally inside logout for blacklist verification)
router.post('/logout', AuthController.logout);

// F-01 SSO Endpoints
router.get('/sso/login', AuthController.ssoLogin);
router.get('/sso/callback', AuthController.ssoCallback);

export default router;
