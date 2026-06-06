import { notificationPreferenceRepository } from '../../repositories/notification/notificationPreferenceRepository';
import { SendNotificationDTO, BulkNotificationDTO, NotificationChannel } from '../../types/notification';
import logger from '../../utils/logger';

export class NotificationService {
  /** Send a notification through the appropriate channel */
  static async sendNotification(dto: SendNotificationDTO): Promise<void> {
    const { channel } = dto;
    logger.info(`Sending ${channel} notification to user ${dto.userId}`);

    switch (channel) {
      case 'email':
        // Dynamically import to avoid circular deps
        const { EmailService } = await import('./emailService');
        await EmailService.sendRaw({
          to: dto.userId ?? '',
          subject: dto.subject,
          html: dto.body,
        });
        break;
      case 'sms':
        const { SmsService } = await import('./smsService');
        await SmsService.send({ to: dto.userId ?? '', body: dto.body });
        break;
      case 'webhook':
        const { WebhookService } = await import('./webhookService');
        await WebhookService.deliverToTenant(dto.tenantId, dto.subject, { body: dto.body, ...dto.metadata });
        break;
      case 'in_app':
        // SSE via sseConnectionManager
        logger.info('In-app notification queued for SSE delivery');
        break;
      default:
        logger.warn(`Unknown notification channel: ${channel}`);
    }
  }

  /** Send bulk notifications to multiple users */
  static async sendBulkNotification(dto: BulkNotificationDTO): Promise<void> {
    await Promise.allSettled(
      dto.userIds.map((userId) =>
        this.sendNotification({ ...dto, userId })
      )
    );
  }

  /** Get notification preferences for a user */
  static async getPreferences(userId: string, tenantId: string) {
    return notificationPreferenceRepository.findOne({ userId, tenantId });
  }

  /** Update notification preferences */
  static async updatePreferences(userId: string, tenantId: string, prefs: any) {
    return notificationPreferenceRepository.update(
      { userId, tenantId },
      { $set: prefs },
      { new: true, upsert: true }
    );
  }

  /** Get preferred channels for a user */
  static async getUserChannels(userId: string, tenantId: string): Promise<NotificationChannel[]> {
    const prefs = await this.getPreferences(userId, tenantId);
    if (!prefs) return ['in_app'];

    const channels: NotificationChannel[] = [];
    // Default to email, SMS, and in_app enabled if no specific settings
    const generalPrefs = prefs.preferences ? prefs.preferences.get('general') : null;
    
    if (!generalPrefs) {
      return ['email', 'sms', 'in_app'];
    }

    if (generalPrefs.email) channels.push('email');
    if (generalPrefs.inApp) channels.push('in_app');
    // For general settings, let's keep sms option or custom check
    return channels;
  }
}

export default NotificationService;
