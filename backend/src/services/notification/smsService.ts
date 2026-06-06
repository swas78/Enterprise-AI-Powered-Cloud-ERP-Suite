import { SmsPayload } from '../../types/notification';
import logger from '../../utils/logger';

export class SmsService {
  /** Send SMS via Twilio or other provider */
  static async send(payload: SmsPayload): Promise<void> {
    const provider = process.env.SMS_PROVIDER || 'twilio';

    if (provider === 'twilio') {
      await this.sendViaTwilio(payload);
    } else {
      logger.warn(`Unknown SMS provider: ${provider}. Logging only.`);
      logger.info(`[SMS MOCK] To: ${payload.to} | Body: ${payload.body}`);
    }
  }

  /** Send bulk SMS to multiple recipients */
  static async sendBulk(payloads: SmsPayload[]): Promise<void> {
    await Promise.allSettled(payloads.map((p) => this.send(p)));
  }

  private static async sendViaTwilio(payload: SmsPayload): Promise<void> {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const from = payload.from || process.env.TWILIO_PHONE_NUMBER;

    if (!accountSid || !authToken || !from) {
      logger.warn('Twilio credentials not configured. SMS not sent.');
      return;
    }

    try {
      // Lazy import to avoid loading twilio SDK if not needed
      const twilio = await import('twilio').then((m) => m.default);
      const client = twilio(accountSid, authToken);

      await client.messages.create({
        to: payload.to,
        from,
        body: payload.body,
      });

      logger.info(`SMS sent via Twilio to ${payload.to}`);
    } catch (err) {
      logger.error(`Twilio SMS failed to ${payload.to}:`, err);
      throw err;
    }
  }
}

export default SmsService;
