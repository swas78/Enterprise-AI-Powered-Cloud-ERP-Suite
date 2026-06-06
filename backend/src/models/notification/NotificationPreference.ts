import { Schema, model, Document } from 'mongoose';

export interface IChannelPreference {
  inApp: boolean;
  email: boolean;
  webhook: boolean;
}

export interface INotificationPreference extends Document {
  tenantId: Schema.Types.ObjectId;
  userId: Schema.Types.ObjectId;
  preferences: Map<string, IChannelPreference>; // key: event prefix or namespace, e.g. "finance" or "scm"
  createdAt: Date;
  updatedAt: Date;
}

const NotificationPreferenceSchema = new Schema<INotificationPreference>(
  {
    tenantId: {
      type: Schema.Types.ObjectId,
      ref: 'Tenant',
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    preferences: {
      type: Map,
      of: new Schema({
        inApp: { type: Boolean, default: true },
        email: { type: Boolean, default: true },
        webhook: { type: Boolean, default: true },
      }, { _id: false }),
      default: new Map(),
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
NotificationPreferenceSchema.index({ tenantId: 1, userId: 1 }, { unique: true });

export const NotificationPreference = model<INotificationPreference>('NotificationPreference', NotificationPreferenceSchema);
export default NotificationPreference;
