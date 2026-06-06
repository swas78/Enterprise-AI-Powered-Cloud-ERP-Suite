import { Schema, model, Document } from 'mongoose';

export interface IWebhookSubscription extends Document {
  tenantId: Schema.Types.ObjectId;
  url: string;
  secret: string; // HMAC SHA-256 signing secret key
  events: string[]; // Subscribed event namespaces (wildcards supported, e.g., ["finance.*"])
  status: 'Active' | 'Suspended';
  createdAt: Date;
  updatedAt: Date;
}

const WebhookSubscriptionSchema = new Schema<IWebhookSubscription>(
  {
    tenantId: {
      type: Schema.Types.ObjectId,
      ref: 'Tenant',
      required: true,
    },
    url: {
      type: String,
      required: [true, 'Webhook endpoint URL is required'],
      trim: true,
    },
    secret: {
      type: String,
      required: [true, 'Webhook signing secret key is required'],
    },
    events: {
      type: [String],
      default: ['*'], // Default to all events
    },
    status: {
      type: String,
      enum: ['Active', 'Suspended'],
      default: 'Active',
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
WebhookSubscriptionSchema.index({ tenantId: 1 });
WebhookSubscriptionSchema.index({ tenantId: 1, url: 1 }, { unique: true });

export const WebhookSubscription = model<IWebhookSubscription>('WebhookSubscription', WebhookSubscriptionSchema);
export default WebhookSubscription;
