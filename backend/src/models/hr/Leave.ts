import { Schema, model, Document } from 'mongoose';

export interface ILeave extends Document {
  tenantId: Schema.Types.ObjectId;
  employeeId: Schema.Types.ObjectId;
  type: 'Sick' | 'Vacation' | 'Maternity' | 'Paternity' | 'Unpaid';
  startDate: Date;
  endDate: Date;
  status: 'Pending' | 'Approved' | 'Rejected';
  approvedBy?: Schema.Types.ObjectId; // Reference to Employee who approved
  reason?: string;
  createdAt: Date;
  updatedAt: Date;
}

const LeaveSchema = new Schema<ILeave>(
  {
    tenantId: {
      type: Schema.Types.ObjectId,
      ref: 'Tenant',
      required: true,
    },
    employeeId: {
      type: Schema.Types.ObjectId,
      ref: 'Employee',
      required: true,
    },
    type: {
      type: String,
      enum: ['Sick', 'Vacation', 'Maternity', 'Paternity', 'Unpaid'],
      required: [true, 'Leave type is required'],
    },
    startDate: {
      type: Date,
      required: [true, 'Start date is required'],
    },
    endDate: {
      type: Date,
      required: [true, 'End date is required'],
    },
    status: {
      type: String,
      enum: ['Pending', 'Approved', 'Rejected'],
      default: 'Pending',
    },
    approvedBy: {
      type: Schema.Types.ObjectId,
      ref: 'Employee',
      default: null,
    },
    reason: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Pre-save validation: End date cannot be before start date
LeaveSchema.pre<ILeave>('save', function (next) {
  if (this.startDate > this.endDate) {
    return next(new Error('Validation Error: Leave end date cannot precede start date.'));
  }
  next();
});

// Indexes
LeaveSchema.index({ tenantId: 1 });
LeaveSchema.index({ employeeId: 1 });
LeaveSchema.index({ status: 1 });

export const Leave = model<ILeave>('Leave', LeaveSchema);
export default Leave;
