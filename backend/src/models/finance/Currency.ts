import { Schema, model, Document } from 'mongoose';

export interface ICurrency extends Document {
  code: string;          // ISO 4217 — e.g. USD, EUR, GBP
  name: string;          // e.g. US Dollar
  symbol: string;        // e.g. $
  exchangeRate: number;  // Rate relative to base currency (USD)
  isBase: boolean;       // Is this the base currency?
  isActive: boolean;
  lastUpdated: Date;
  tenantId: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const CurrencySchema = new Schema<ICurrency>(
  {
    code: {
      type: String,
      required: [true, 'Currency code is required'],
      uppercase: true,
      trim: true,
      maxlength: 3,
    },
    name: {
      type: String,
      required: [true, 'Currency name is required'],
      trim: true,
    },
    symbol: {
      type: String,
      required: [true, 'Currency symbol is required'],
      trim: true,
    },
    exchangeRate: {
      type: Number,
      required: [true, 'Exchange rate is required'],
      default: 1,
      min: 0,
    },
    isBase: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    lastUpdated: {
      type: Date,
      default: Date.now,
    },
    tenantId: {
      type: Schema.Types.ObjectId,
      ref: 'Tenant',
      required: true,
    },
  },
  { timestamps: true }
);

CurrencySchema.index({ tenantId: 1 });
CurrencySchema.index({ code: 1, tenantId: 1 }, { unique: true });
CurrencySchema.index({ isBase: 1, tenantId: 1 });

export const Currency = model<ICurrency>('Currency', CurrencySchema);
export default Currency;
