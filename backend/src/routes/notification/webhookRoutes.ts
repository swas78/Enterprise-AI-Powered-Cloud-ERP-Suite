import { Router } from 'express';
import { WebhookController } from '../../controllers/notification/webhookController';
import { authGuard, roleGuard } from '../../middleware/auth.middleware';
import { validateSchema } from '../../middleware/validation.middleware';
import { webhookSubscriptionSchema } from '../../validators/notification.validator';


const router = Router();

// Secure all webhook configuration endpoints under authGuard
router.use(authGuard);

router.get('/', WebhookController.getWebhookSubscriptions);
router.post('/', roleGuard(['SuperAdmin', 'TenantAdmin']), validateSchema(webhookSubscriptionSchema), WebhookController.createWebhookSubscription);

export default router;
