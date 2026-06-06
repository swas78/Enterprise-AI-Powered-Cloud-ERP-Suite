import { Schema, model, Document } from 'mongoose';

export interface IPayroll extends Document {
  tenantId: Schema.Types.ObjectId;
  batchNumber: string; // e.g. "PR-2026-06"
  status: 'Draft' | 'Processing' | 'Completed' | 'Failed';
  processedDate?: Date;
  totalGross: number;
  totalDeductions: number;
  totalNet: number;
  createdAt: Date;
  updatedAt: Date;
}

const PayrollSchema = new Schema<IPayroll>(
  {
    tenantId: {
      type: Schema.Types.ObjectId,
      ref: 'Tenant',
      required: true,
    },
    batchNumber: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ['Draft', 'Processing', 'Completed', 'Failed'],
      default: 'Draft',
    },
    processedDate: {
      type: Date,
    },
    totalGross: {
      type: Number,
      default: 0,
    },
    totalDeductions: {
      type: Number,
      default: 0,
    },
    totalNet: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
PayrollSchema.index({ tenantId: 1 });
PayrollSchema.index({ tenantId: 1, batchNumber: 1 }, { unique: true });

export const Payroll = model<IPayroll>('Payroll', PayrollSchema);
export default Payroll;
