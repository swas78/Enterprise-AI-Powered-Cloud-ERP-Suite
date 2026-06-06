import { Schema, model, Document } from 'mongoose';

export interface IPayslip extends Document {
  tenantId: Schema.Types.ObjectId;
  payrollId: Schema.Types.ObjectId;
  employeeId: Schema.Types.ObjectId;
  grossPay: number;
  deductions: number;
  taxAmount: number;
  netPay: number;
  pdfUrl?: string; // S3 storage link or local file path
  createdAt: Date;
  updatedAt: Date;
}

const PayslipSchema = new Schema<IPayslip>(
  {
    tenantId: {
      type: Schema.Types.ObjectId,
      ref: 'Tenant',
      required: true,
    },
    payrollId: {
      type: Schema.Types.ObjectId,
      ref: 'Payroll',
      required: true,
    },
    employeeId: {
      type: Schema.Types.ObjectId,
      ref: 'Employee',
      required: true,
    },
    grossPay: {
      type: Number,
      required: true,
      min: 0,
    },
    deductions: {
      type: Number,
      required: true,
      min: 0,
    },
    taxAmount: {
      type: Number,
      required: true,
      min: 0,
    },
    netPay: {
      type: Number,
      required: true,
      min: 0,
    },
    pdfUrl: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
PayslipSchema.index({ tenantId: 1 });
PayslipSchema.index({ payrollId: 1 });
PayslipSchema.index({ employeeId: 1 });
PayslipSchema.index({ payrollId: 1, employeeId: 1 }, { unique: true }); // Prevent duplicate payslips for same employee in single run

export const Payslip = model<IPayslip>('Payslip', PayslipSchema);
export default Payslip;
