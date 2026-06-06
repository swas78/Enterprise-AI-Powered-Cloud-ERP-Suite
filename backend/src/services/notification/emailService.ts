import nodemailer from 'nodemailer';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { EmailPayload } from '../../types/notification';
import logger from '../../utils/logger';

const useAWS = process.env.EMAIL_PROVIDER === 'aws_ses';

const sesClient = useAWS
  ? new SESClient({
      region: process.env.AWS_REGION || 'us-east-1',
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
      },
    })
  : null;

const smtpTransport = !useAWS
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.mailtrap.io',
      port: parseInt(process.env.SMTP_PORT || '587'),
      auth: {
        user: process.env.SMTP_USER || '',
        pass: process.env.SMTP_PASS || '',
      },
    })
  : null;

export class EmailService {
  /** Send email via configured provider (AWS SES or SMTP) */
  static async send(payload: EmailPayload): Promise<void> {
    if (useAWS && sesClient) {
      await this.sendViaSES(payload);
    } else {
      await this.sendViaSMTP(payload);
    }
  }

  /** Convenience wrapper for raw sends */
  static async sendRaw(opts: { to: string; subject: string; html?: string; text?: string }): Promise<void> {
    return this.send({
      to: opts.to,
      subject: opts.subject,
      html: opts.html,
      text: opts.text,
    });
  }

  private static async sendViaSES(payload: EmailPayload): Promise<void> {
    const toAddresses = Array.isArray(payload.to) ? payload.to : [payload.to];
    const command = new SendEmailCommand({
      Source: process.env.EMAIL_FROM || 'noreply@milex.app',
      Destination: { ToAddresses: toAddresses },
      Message: {
        Subject: { Data: payload.subject },
        Body: {
          Html: payload.html ? { Data: payload.html } : undefined,
          Text: payload.text ? { Data: payload.text } : undefined,
        },
      },
    });

    try {
      await sesClient!.send(command);
      logger.info(`Email sent via SES to ${toAddresses.join(', ')}`);
    } catch (err) {
      logger.error('SES email send failed:', err);
      throw err;
    }
  }

  private static async sendViaSMTP(payload: EmailPayload): Promise<void> {
    try {
      await smtpTransport!.sendMail({
        from: process.env.EMAIL_FROM || 'noreply@milex.app',
        to: payload.to,
        cc: payload.cc,
        bcc: payload.bcc,
        subject: payload.subject,
        html: payload.html,
        text: payload.text,
        attachments: payload.attachments?.map((a) => ({
          filename: a.filename,
          content: a.content,
          contentType: a.contentType,
        })),
      });
      logger.info(`Email sent via SMTP to ${payload.to}`);
    } catch (err) {
      logger.error('SMTP email send failed:', err);
      throw err;
    }
  }
}

export default EmailService;
