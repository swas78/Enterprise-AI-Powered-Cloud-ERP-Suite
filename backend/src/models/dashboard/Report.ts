import { Schema, model, Document } from 'mongoose';

export type ReportType = 'financial' | 'hr' | 'supply_chain' | 'project' | 'custom';
export type ReportFormat = 'pdf' | 'xlsx' | 'csv' | 'json';
export type ReportStatus = 'pending' | 'generating' | 'ready' | 'failed';
export type ReportSchedule = 'once' | 'daily' | 'weekly' | 'monthly';

export interface IReport extends Document {
  name: string;
  description?: string;
  type: ReportType;
  tenantId: Schema.Types.ObjectId;
  format: ReportFormat;
  status: ReportStatus;
  filters: Record<string, any>;
  columns?: string[];
  schedule?: ReportSchedule;
  nextRunAt?: Date;
  lastRunAt?: Date;
  fileUrl?: string;
  fileSize?: number;
  generationTimeMs?: number;
  createdBy: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const ReportSchema = new Schema<IReport>(
  {
    name: { type: String, required: [true, 'Report name is required'], trim: true },
    description: { type: String, trim: true },
    type: {
      type: String,
      required: true,
      enum: ['financial', 'hr', 'supply_chain', 'project', 'custom'],
    },
    tenantId: {
      type: Schema.Types.ObjectId,
      ref: 'Tenant',
      required: true,
    },
    format: {
      type: String,
      required: true,
      enum: ['pdf', 'xlsx', 'csv', 'json'],
      default: 'pdf',
    },
    status: {
      type: String,
      enum: ['pending', 'generating', 'ready', 'failed'],
      default: 'pending',
    },
    filters: { type: Schema.Types.Mixed, default: {} },
    columns: [{ type: String }],
    schedule: {
      type: String,
      enum: ['once', 'daily', 'weekly', 'monthly'],
      default: 'once',
    },
    nextRunAt: { type: Date },
    lastRunAt: { type: Date },
    fileUrl: { type: String },
    fileSize: { type: Number },
    generationTimeMs: { type: Number },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

ReportSchema.index({ tenantId: 1 });
ReportSchema.index({ status: 1, tenantId: 1 });
ReportSchema.index({ type: 1, tenantId: 1 });
ReportSchema.index({ nextRunAt: 1, schedule: 1 });

export const Report = model<IReport>('Report', ReportSchema);
export default Report;
