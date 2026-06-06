import { SmsService as NotificationSmsService } from '../notification/smsService';
import { SmsPayload } from '../../types/notification';

export class SmsService {
  /** Send SMS delegating to notification's SMS service */
  static async send(payload: SmsPayload): Promise<void> {
    return NotificationSmsService.send(payload);
  }

  /** Send bulk SMS delegating to notification's SMS service */
  static async sendBulk(payloads: SmsPayload[]): Promise<void> {
    return NotificationSmsService.sendBulk(payloads);
  }
}

export default SmsService;
