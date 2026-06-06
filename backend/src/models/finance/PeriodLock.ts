import { Schema, model, Document } from 'mongoose';

export interface IPeriodLock extends Document {
  tenantId: Schema.Types.ObjectId;
  lockedDate: Date;
  lockedBy: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const PeriodLockSchema = new Schema<IPeriodLock>(
  {
    tenantId: {
      type: Schema.Types.ObjectId,
      ref: 'Tenant',
      required: true,
      unique: true, // Only one lock date per tenant
    },
    lockedDate: {
      type: Date,
      required: true,
    },
    lockedBy: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

PeriodLockSchema.index({ tenantId: 1 });

export const PeriodLock = model<IPeriodLock>('PeriodLock', PeriodLockSchema);
export default PeriodLock;
