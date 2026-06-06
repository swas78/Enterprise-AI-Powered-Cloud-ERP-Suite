import { Router } from 'express';
import widgetRoutes from './widgetRoutes';
import reportRoutes from './reportRoutes';

const router = Router();

// Sub-route mounts for dashboard modules
router.use('/widgets', widgetRoutes);
router.use('/reports', reportRoutes);

export default router;
