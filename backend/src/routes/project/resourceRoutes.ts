import { Router } from 'express';
import { ResourceController } from '../../controllers/project/resourceController';
import { authGuard } from '../../middleware/auth.middleware';

const router = Router();

// Secure all resource routes
router.use(authGuard);

// Resource heatmap
router.get('/heatmap', ResourceController.getResourceHeatmap);

export default router;
