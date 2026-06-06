import { Schema, model, Document } from 'mongoose';

export type PaymentMethod = 'bank_transfer' | 'cash' | 'cheque' | 'card' | 'crypto';
export type PaymentStatus = 'pending' | 'completed' | 'failed' | 'refunded';

export interface IPayment extends Document {
  invoiceId: Schema.Types.ObjectId;
  tenantId: Schema.Types.ObjectId;
  amount: number;
  currency: string;
  exchangeRate?: number;
  baseAmount?: number;       // amount in base currency
  method: PaymentMethod;
  status: PaymentStatus;
  paymentDate: Date;
  reference?: string;
  bankAccount?: string;
  chequeNumber?: string;
  createdBy: Schema.Types.ObjectId;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const PaymentSchema = new Schema<IPayment>(
  {
    invoiceId: {
      type: Schema.Types.ObjectId,
      ref: 'Invoice',
      required: [true, 'Invoice reference is required'],
    },
    tenantId: {
      type: Schema.Types.ObjectId,
      ref: 'Tenant',
      required: true,
    },
    amount: {
      type: Number,
      required: [true, 'Payment amount is required'],
      min: [0.01, 'Amount must be greater than 0'],
    },
    currency: {
      type: String,
      required: true,
      default: 'USD',
      uppercase: true,
      maxlength: 3,
    },
    exchangeRate: { type: Number, default: 1 },
    baseAmount: { type: Number },
    method: {
      type: String,
      required: true,
      enum: ['bank_transfer', 'cash', 'cheque', 'card', 'crypto'],
    },
    status: {
      type: String,
      enum: ['pending', 'completed', 'failed', 'refunded'],
      default: 'pending',
    },
    paymentDate: { type: Date, required: true },
    reference: { type: String, trim: true },
    bankAccount: { type: String, trim: true },
    chequeNumber: { type: String, trim: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    notes: { type: String, trim: true },
  },
  { timestamps: true }
);

PaymentSchema.index({ tenantId: 1 });
PaymentSchema.index({ invoiceId: 1 });
PaymentSchema.index({ status: 1, tenantId: 1 });
PaymentSchema.index({ paymentDate: -1, tenantId: 1 });

export const Payment = model<IPayment>('Payment', PaymentSchema);
export default Payment;
