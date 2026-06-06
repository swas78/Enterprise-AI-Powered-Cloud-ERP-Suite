import { Router } from 'express';
import { SettingsController } from '../../controllers/settings/settingsController';
import { authGuard, roleGuard } from '../../middleware/auth.middleware';

const router = Router();

router.use(authGuard);

router.get('/', SettingsController.getSettings);
router.put('/', roleGuard(['SuperAdmin', 'TenantAdmin']), SettingsController.updateSettings);

export default router;
