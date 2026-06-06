import { EventEmitter2 } from 'eventemitter2';
import logger from './logger';

export const eventBus = new EventEmitter2({
  wildcard: true, // Allow wildcard listeners (e.g. "finance.*")
  delimiter: '.',
  newListener: false,
  maxListeners: 30,
});

// Trace all events broadcasted over the process event bus
eventBus.onAny((event: string | string[], value: any) => {
  const eventName = Array.isArray(event) ? event.join('.') : event;
  logger.info(`📢 EventBus [Broadcast]: "${eventName}" | Tenant: ${value?.tenantId || 'global'}`);
});

export default eventBus;
