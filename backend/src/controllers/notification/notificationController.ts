import { Response, NextFunction } from 'express';
import { TenantRequest } from '../../types';
import { notificationPreferenceRepository } from '../../repositories/notification/notificationPreferenceRepository';
import { SseConnectionManager } from '../../services/notification/sseConnectionManager';
import logger from '../../utils/logger';

export class NotificationController {
  
  // Expose Server-Sent Events (SSE) channel for real-time notifications stream
  public static async streamNotifications(req: TenantRequest, res: Response, next: NextFunction) {
    const tenantId = req.tenantId;
    const userId = req.user?.userId; // Populated from JWT token middleware

    if (!tenantId || !userId) {
      return res.status(400).json({ status: 'error', message: 'Missing tenant or user context.' });
    }

    // Set headers for keeping HTTP socket connection alive
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Access-Control-Allow-Origin', '*');

    logger.info(`🔌 Establishing live notifications stream for User: ${userId} | Tenant: ${tenantId}`);

    // Register active SSE client
    SseConnectionManager.addConnection(tenantId, userId, res);

    // Write initial connection success confirmation packet
    res.write(`data: ${JSON.stringify({ connected: true, userId, timestamp: new Date() })}\n\n`);

    // Setup periodic heartbeats to prevent proxy time-outs
    const heartbeatInterval = setInterval(() => {
      res.write(': heartbeat\n\n'); // SSE comment heartbeat
    }, 15000);

    // Safe socket cleanup on disconnect
    req.on('close', () => {
      clearInterval(heartbeatInterval);
      SseConnectionManager.removeConnection(tenantId, userId, res);
      res.end();
    });
  }

  // Retrieve user-level notification preferences settings
  public static async getPreferences(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      const userId = req.user?.userId;

      if (!tenantId || !userId) {
        return res.status(400).json({ status: 'error', message: 'Missing tenant or user context.' });
      }

      let pref = await notificationPreferenceRepository.findOne({ tenantId, userId });
      if (!pref) {
        // Initialize default empty preferences record
        pref = await notificationPreferenceRepository.create({
          tenantId,
          userId,
          preferences: new Map(),
        });
      }

      return res.status(200).json({ status: 'success', data: pref });
    } catch (error: any) {
      next(error);
    }
  }

  // Create or Update user-level notification channel preferences
  public static async updatePreferences(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      const userId = req.user?.userId;
      const { preferences } = req.body; // Map format expected

      if (!tenantId || !userId) {
        return res.status(400).json({ status: 'error', message: 'Missing tenant or user context.' });
      }

      if (!preferences) {
        return res.status(400).json({ status: 'error', message: 'Preferences map parameter is required.' });
      }

      const pref = await notificationPreferenceRepository.update(
        { tenantId, userId },
        { $set: { preferences } },
        { new: true, upsert: true }
      );

      return res.status(200).json({
        status: 'success',
        message: 'Notification preferences updated successfully.',
        data: pref,
      });
    } catch (error: any) {
      next(error);
    }
  }
}

export default NotificationController;
