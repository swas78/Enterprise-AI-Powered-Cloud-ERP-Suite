import { Schema, model, Document } from 'mongoose';

export interface ISettings extends Document {
  tenantId: Schema.Types.ObjectId | string;
  timezone: string;
  baseCurrency: string;
  supportedCurrencies: string[];
  fiscalYearStart: string;
  notificationChannels: {
    email: boolean;
    inApp: boolean;
    webhook: boolean;
  };
  features: {
    aiForecasting: boolean;
    automatedAPAR: boolean;
  };
  createdAt: Date;
  updatedAt: Date;
}

const SettingsSchema = new Schema<ISettings>(
  {
    tenantId: { type: Schema.Types.ObjectId, ref: 'Tenant', required: true, unique: true },
    timezone: { type: String, default: 'UTC' },
    baseCurrency: { type: String, default: 'USD' },
    supportedCurrencies: { type: [String], default: ['USD', 'EUR', 'GBP', 'INR'] },
    fiscalYearStart: { type: String, default: '01-01' },
    notificationChannels: {
      email: { type: Boolean, default: true },
      inApp: { type: Boolean, default: true },
      webhook: { type: Boolean, default: true },
    },
    features: {
      aiForecasting: { type: Boolean, default: true },
      automatedAPAR: { type: Boolean, default: true },
    },
  },
  { timestamps: true }
);

export const Settings = model<ISettings>('Settings', SettingsSchema);
export default Settings;
