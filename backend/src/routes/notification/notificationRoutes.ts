import { Router } from 'express';
import { NotificationController } from '../../controllers/notification/notificationController';
import { authGuard } from '../../middleware/auth.middleware';

const router = Router();

// Secure all notification endpoints
router.use(authGuard);

// SSE stream real-time channel
router.get('/stream', NotificationController.streamNotifications);

// User notification Preferences CRUD
router.get('/preferences', NotificationController.getPreferences);
router.put('/preferences', NotificationController.updatePreferences);

export default router;

