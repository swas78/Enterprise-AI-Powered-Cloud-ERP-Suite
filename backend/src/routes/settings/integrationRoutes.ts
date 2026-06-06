import { Router } from 'express';
import { IntegrationController } from '../../controllers/settings/integrationController';
import { authGuard, roleGuard } from '../../middleware/auth.middleware';

const router = Router();

router.use(authGuard);

router.get('/', IntegrationController.getIntegrations);
router.post('/configure', roleGuard(['SuperAdmin', 'TenantAdmin']), IntegrationController.configureIntegration);

export default router;
