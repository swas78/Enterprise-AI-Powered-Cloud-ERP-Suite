import { Router } from 'express';
import { PermissionController } from '../../controllers/settings/permissionController';
import { authGuard } from '../../middleware/auth.middleware';

const router = Router();

router.use(authGuard);

router.get('/', PermissionController.getPermissions);
router.post('/check', PermissionController.checkPermission);

export default router;
