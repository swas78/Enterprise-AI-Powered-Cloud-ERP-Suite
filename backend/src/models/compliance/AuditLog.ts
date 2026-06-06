import { Schema, model, Document } from 'mongoose';

export interface IAuditLog extends Document {
  tenantId: string;
  userId?: Schema.Types.ObjectId;
  userEmail: string;
  action: string;
  entityType?: string;
  entityId?: string;
  details?: any;
  ipAddress?: string;
  chainHash?: string;
  previousHash?: string;
  timestamp: Date;
}

const AuditLogSchema = new Schema<IAuditLog>(
  {
    tenantId: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    userEmail: {
      type: String,
      required: true,
      trim: true,
    },
    action: {
      type: String,
      required: true,
      trim: true,
    },
    entityType: {
      type: String,
      trim: true,
    },
    entityId: {
      type: String,
      trim: true,
    },
    details: {
      type: Schema.Types.Mixed,
    },
    ipAddress: {
      type: String,
      trim: true,
    },
    chainHash: {
      type: String,
    },
    previousHash: {
      type: String,
    },
    timestamp: {
      type: Date,
      default: Date.now,
      required: true,
    },
  },
  {
    // Define as capped collection to make it immutable (no deletions or updates allowed)
    capped: {
      size: 10 * 1024 * 1024, // 10MB
      max: 100000,           // Maximum 100k logs
    },
  }
);

AuditLogSchema.index({ tenantId: 1, timestamp: -1 });
AuditLogSchema.index({ userId: 1, timestamp: -1 });

export const AuditLog = model<IAuditLog>('AuditLog', AuditLogSchema);
export default AuditLog;
