export type NotificationChannel = 'email' | 'sms' | 'in_app' | 'push' | 'webhook';
export type NotificationStatus = 'pending' | 'sent' | 'delivered' | 'failed' | 'read';
export type NotificationPriority = 'low' | 'normal' | 'high' | 'critical';
export type WebhookMethod = 'POST' | 'PUT' | 'PATCH';
export type WebhookStatus = 'active' | 'inactive' | 'failed';

export interface SendNotificationDTO {
  userId?: string;
  tenantId: string;
  channel: NotificationChannel;
  subject: string;
  body: string;
  priority?: NotificationPriority;
  metadata?: Record<string, any>;
  scheduledAt?: Date;
}

export interface BulkNotificationDTO {
  userIds: string[];
  tenantId: string;
  channel: NotificationChannel;
  subject: string;
  body: string;
  priority?: NotificationPriority;
}

export interface EmailPayload {
  to: string | string[];
  cc?: string | string[];
  bcc?: string | string[];
  subject: string;
  html?: string;
  text?: string;
  attachments?: EmailAttachment[];
  templateId?: string;
  templateData?: Record<string, any>;
}

export interface EmailAttachment {
  filename: string;
  content: Buffer | string;
  contentType?: string;
}

export interface SmsPayload {
  to: string;
  body: string;
  from?: string;
}

export interface WebhookPayload {
  url: string;
  method: WebhookMethod;
  headers?: Record<string, string>;
  body: Record<string, any>;
  secret?: string;
}

export interface CreateWebhookSubscriptionDTO {
  name: string;
  url: string;
  events: string[];
  secret?: string;
  tenantId: string;
  createdBy: string;
}

export interface EventPayload {
  eventType: string;
  tenantId: string;
  sourceId?: string;
  sourceModel?: string;
  data: Record<string, any>;
  triggeredBy?: string;
  timestamp: Date;
}

export interface NotificationPreferenceDTO {
  userId: string;
  channels: {
    email: boolean;
    sms: boolean;
    in_app: boolean;
    push: boolean;
  };
  eventTypes: string[];
  tenantId: string;
}
