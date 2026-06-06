import eventBus from '../../utils/eventBus';
import { userRepository } from '../../repositories/userRepository';
import { notificationPreferenceRepository } from '../../repositories/notification/notificationPreferenceRepository';
import { webhookSubscriptionRepository } from '../../repositories/notification/webhookSubscriptionRepository';
import { SseConnectionManager } from './sseConnectionManager';
import { emailQueue } from '../../jobs/emailJob';
import { webhookQueue } from '../../jobs/webhookJob';
import logger from '../../utils/logger';

export class NotificationMulticaster {
  // Listen and bind to process-wide Domain EventBus
  public static init() {
    logger.info('📢 Initializing Domain Notification Multicaster Event Listeners...');

    eventBus.onAny(async (event: string | string[], payload: any) => {
      const eventName = Array.isArray(event) ? event.join('.') : event;
      const tenantId = payload?.tenantId;
      if (!tenantId) return;

      logger.info(`📢 NotificationMulticaster matched event: "${eventName}" | Tenant: ${tenantId}`);

      // Extract namespace (e.g. "finance.journal.posted" -> namespace is "finance")
      const namespace = eventName.split('.')[0] || 'general';

      try {
        // 1. Query all users registered for the tenant to process user preference channels
        const users = await userRepository.find({ tenantId });

        for (const user of users) {
          const userIdStr = user._id.toString();
          
          // Fetch settings (if no preference document exists, default all channels to enabled)
          const pref = await notificationPreferenceRepository.findOne({ tenantId, userId: user._id });
          
          let inAppEnabled = true;
          let emailEnabled = true;

          if (pref && pref.preferences) {
            // Check direct namespace or global wildcard configuration
            const prefConfig = pref.preferences.get(namespace) || pref.preferences.get('*');
            if (prefConfig) {
              inAppEnabled = prefConfig.inApp;
              emailEnabled = prefConfig.email;
            }
          }

          // Push to In-App SSE channel if enabled
          if (inAppEnabled) {
            SseConnectionManager.emitToUser(tenantId, userIdStr, eventName, {
              message: payload?.message || `Event ${eventName} triggered.`,
              timestamp: new Date(),
              data: payload,
            });
          }

          // Push email dispatch task to BullMQ queue if enabled
          if (emailEnabled && user.email) {
            await emailQueue.add('send-email', {
              to: user.email,
              subject: `[Amdox ERP Alert] ${payload?.message || eventName}`,
              body: `Hello ${user.name},\n\nWe are notifying you about a new activity on your Amdox tenant:\nEvent: ${eventName}\nDetails: ${payload?.message || JSON.stringify(payload)}\n\nBest regards,\nAmdox ERP Suite`,
            });
          }
        }

        // 2. Query active Webhook Subscriptions for outbound notifications
        const subscriptions = await webhookSubscriptionRepository.find({ tenantId, status: 'Active' });

        for (const sub of subscriptions) {
          const isMatch = sub.events.some((pattern) => this.matchEvent(pattern, eventName));

          if (isMatch) {
            logger.info(`🔗 Webhook matches subscription pattern. Queueing dispatch for URL: ${sub.url}`);
            
            await webhookQueue.add('dispatch-webhook', {
              tenantId,
              url: sub.url,
              secret: sub.secret,
              eventName,
              payload,
            });
          }
        }
      } catch (err: any) {
        logger.error(`❌ Multicaster failed processing event "${eventName}": ${err.message}`);
      }
    });
  }

  // Helper matching event wildcards (e.g., match scm.* against scm.po.created)
  private static matchEvent(pattern: string, eventName: string): boolean {
    if (pattern === '*') return true;
    const regexStr = '^' + pattern.replace(/\./g, '\\.').replace(/\*/g, '.*') + '$';
    const regex = new RegExp(regexStr);
    return regex.test(eventName);
  }
}

export default NotificationMulticaster;
