import { eventEmitter } from './eventEmitter';

export class NotificationEvents {
  public static emitNotificationSent(payload: {
    tenantId: string;
    userId: string;
    type: string;
    message: string;
  }) {
    eventEmitter.emit('notification.sent', payload);
  }
}

export default NotificationEvents;
