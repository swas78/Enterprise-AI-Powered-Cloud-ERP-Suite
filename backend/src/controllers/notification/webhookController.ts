import { Response, NextFunction } from 'express';
import { TenantRequest } from '../../types';
import { webhookSubscriptionRepository } from '../../repositories/notification/webhookSubscriptionRepository';
import logger from '../../utils/logger';

export class WebhookController {
  
  // Register a new outbound Webhook Subscription endpoint
  public static async createWebhookSubscription(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      const { url, secret, events } = req.body;

      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      if (!url || !secret) {
        return res.status(400).json({ status: 'error', message: 'Missing parameters: url, secret' });
      }

      const subscription = await webhookSubscriptionRepository.create({
        tenantId,
        url,
        secret,
        events: events || ['*'],
      });

      return res.status(201).json({
        status: 'success',
        statusCode: 201,
        message: 'Webhook subscription registered successfully.',
        data: subscription,
      });
    } catch (error: any) {
      next(error);
    }
  }

  // Retrieve list of webhook endpoints registered for active tenant context
  public static async getWebhookSubscriptions(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      const subs = await webhookSubscriptionRepository.find({ tenantId });
      return res.status(200).json({ status: 'success', data: subs });
    } catch (error: any) {
      next(error);
    }
  }
}

export default WebhookController;
