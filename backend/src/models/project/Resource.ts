import { Schema, model, Document } from 'mongoose';

export type ResourceType = 'human' | 'equipment' | 'material' | 'software';

export interface IResource extends Document {
  name: string;
  type: ResourceType;
  projectId: Schema.Types.ObjectId;
  userId?: Schema.Types.ObjectId;      // for human resources
  tenantId: Schema.Types.ObjectId;
  allocationPercentage: number;        // 0-100%
  startDate: Date;
  endDate: Date;
  hourlyRate?: number;
  currency?: string;
  totalCost?: number;
  skills?: string[];
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ResourceSchema = new Schema<IResource>(
  {
    name: {
      type: String,
      required: [true, 'Resource name is required'],
      trim: true,
    },
    type: {
      type: String,
      enum: ['human', 'equipment', 'material', 'software'],
      required: [true, 'Resource type is required'],
    },
    projectId: {
      type: Schema.Types.ObjectId,
      ref: 'Project',
      required: [true, 'Project reference is required'],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    tenantId: {
      type: Schema.Types.ObjectId,
      ref: 'Tenant',
      required: true,
    },
    allocationPercentage: {
      type: Number,
      required: true,
      min: 1,
      max: 100,
      default: 100,
    },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    hourlyRate: { type: Number, min: 0 },
    currency: { type: String, default: 'USD', uppercase: true },
    totalCost: { type: Number, min: 0 },
    skills: [{ type: String, trim: true }],
    notes: { type: String, trim: true },
  },
  { timestamps: true }
);

ResourceSchema.index({ projectId: 1 });
ResourceSchema.index({ tenantId: 1 });
ResourceSchema.index({ userId: 1, projectId: 1 });

export const Resource = model<IResource>('Resource', ResourceSchema);
export default Resource;
