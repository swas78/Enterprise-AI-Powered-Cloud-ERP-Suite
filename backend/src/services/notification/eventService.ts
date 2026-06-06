import { eventEmitter } from '../../events/eventEmitter';
import { EventPayload } from '../../types/notification';
import { WebhookService } from './webhookService';
import logger from '../../utils/logger';

export class EventService {
  /**
   * Publish a system-wide event. Emits internally and dispatches webhooks to the tenant's subscriptions.
   */
  static async publishEvent(payload: EventPayload): Promise<void> {
    const { eventType, tenantId, data } = payload;
    logger.info(`📢 EventService [Publish]: "${eventType}" for Tenant: ${tenantId}`);

    // 1. Emit internally on process event emitter
    eventEmitter.emit(eventType, payload);

    // 2. Dispatch externally via webhook subscriptions
    try {
      await WebhookService.deliverToTenant(tenantId, eventType, data);
    } catch (error) {
      logger.error(`Error delivering webhook for event: ${eventType}`, error);
    }
  }
}

export default EventService;
