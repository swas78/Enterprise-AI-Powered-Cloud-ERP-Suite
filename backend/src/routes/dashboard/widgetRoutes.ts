import { Router } from 'express';
import { WidgetController } from '../../controllers/dashboard/widgetController';
import { authGuard, roleGuard } from '../../middleware/auth.middleware';

const router = Router();

// Real-time telemetry (SSE requires keep-alive)
router.get('/realtime', WidgetController.streamRealTimeMetrics);

// Secured widget layout controls
router.get('/layout', authGuard, WidgetController.getLayout);
router.post('/layout', authGuard, roleGuard(['SuperAdmin', 'TenantAdmin', 'Manager']), WidgetController.saveLayout);

export default router;
