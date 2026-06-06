import { EmailService as NotificationEmailService } from '../notification/emailService';
import { EmailPayload } from '../../types/notification';

export class EmailService {
  /** Send an email delegating to the core notification email service */
  static async send(payload: EmailPayload): Promise<void> {
    return NotificationEmailService.send(payload);
  }

  /** Send raw email helper */
  static async sendRaw(opts: { to: string; subject: string; html?: string; text?: string }): Promise<void> {
    return NotificationEmailService.sendRaw(opts);
  }
}

export default EmailService;
