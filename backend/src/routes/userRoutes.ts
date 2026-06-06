import { Router } from 'express';
import { UserController } from '../controllers/userController';
import { authGuard, roleGuard } from '../middleware/auth.middleware';

const router = Router();

// Secure all endpoints under authGuard
router.use(authGuard);

router.get('/profile', UserController.getProfile);
router.put('/profile', UserController.updateProfile);

// Admin-only endpoints
router.get('/', roleGuard(['SuperAdmin', 'TenantAdmin']), UserController.getUsers);
router.put('/:id', roleGuard(['SuperAdmin', 'TenantAdmin']), UserController.updateProfile);

export default router;
