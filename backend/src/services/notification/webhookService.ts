import crypto from 'crypto';
import axios from 'axios';
import { webhookSubscriptionRepository } from '../../repositories/notification/webhookSubscriptionRepository';
import { WebhookPayload } from '../../types/notification';
import logger from '../../utils/logger';

export class WebhookService {
  /**
   * Deliver event data to all active webhook subscriptions for a tenant
   */
  static async deliverToTenant(tenantId: string, event: string, data: any): Promise<void> {
    logger.info(`🔍 Fetching webhook subscriptions for Tenant: ${tenantId}, Event: ${event}`);
    const subscriptions = await webhookSubscriptionRepository.find({
      tenantId,
      status: 'Active',
    });

    const matchingSubs = subscriptions.filter(sub => {
      // Check if event matches registered events (supporting wildcard or specific match)
      return sub.events.some(pattern => {
        if (pattern === '*' || pattern === event) return true;
        if (pattern.endsWith('.*')) {
          const prefix = pattern.slice(0, -2);
          return event.startsWith(prefix);
        }
        return false;
      });
    });

    logger.info(`Found ${matchingSubs.length} matching webhook subscriptions for Tenant: ${tenantId}`);

    for (const sub of matchingSubs) {
      try {
        await this.send({
          url: sub.url,
          method: 'POST',
          body: {
            event,
            tenantId,
            timestamp: new Date(),
            data,
          },
          secret: sub.secret,
        });
      } catch (err) {
        logger.error(`Failed to dispatch webhook to URL: ${sub.url}`, err);
      }
    }
  }

  /**
   * Send a webhook request with HMAC SHA-256 signature
   */
  static async send(payload: WebhookPayload): Promise<void> {
    const { url, method = 'POST', body, secret } = payload;

    const stringifiedBody = JSON.stringify(body);
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'User-Agent': 'Amdox-Webhook-Dispatcher/1.0',
      ...payload.headers,
    };

    if (secret) {
      const signature = crypto
        .createHmac('sha256', secret)
        .update(stringifiedBody)
        .digest('hex');
      headers['X-Amdox-Signature'] = signature;
    }

    logger.info(`🚀 Dispatching webhook: [${method}] -> ${url}`);

    await axios({
      method,
      url,
      data: stringifiedBody,
      headers,
      timeout: 10000, // 10s timeout
    });
  }
}

export default WebhookService;
