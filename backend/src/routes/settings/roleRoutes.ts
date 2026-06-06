import { Router } from 'express';
import { RoleController } from '../../controllers/settings/roleController';
import { authGuard, roleGuard } from '../../middleware/auth.middleware';

const router = Router();

router.use(authGuard);

router.get('/', RoleController.getRoles);
router.get('/:name', RoleController.getRoleDetails);

export default router;
