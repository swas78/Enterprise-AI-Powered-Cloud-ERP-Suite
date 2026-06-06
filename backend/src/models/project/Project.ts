import { Schema, model, Document } from 'mongoose';

export interface IProject extends Document {
  tenantId: Schema.Types.ObjectId;
  name: string;
  description?: string;
  budget: number;
  spent: number;
  startDate: Date;
  endDate?: Date;
  status: 'Planning' | 'Active' | 'OnHold' | 'Completed' | 'OverBudget';
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema<IProject>(
  {
    tenantId: {
      type: Schema.Types.ObjectId,
      ref: 'Tenant',
      required: true,
    },
    name: {
      type: String,
      required: [true, 'Project name is required'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    budget: {
      type: Number,
      required: [true, 'Project budget allocation is required'],
      min: [0, 'Budget cannot be negative'],
    },
    spent: {
      type: Number,
      default: 0,
      min: [0, 'Spent amount cannot be negative'],
    },
    startDate: {
      type: Date,
      default: Date.now,
    },
    endDate: {
      type: Date,
    },
    status: {
      type: String,
      enum: ['Planning', 'Active', 'OnHold', 'Completed', 'OverBudget'],
      default: 'Planning',
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
ProjectSchema.index({ tenantId: 1 });
ProjectSchema.index({ tenantId: 1, name: 1 }, { unique: true });

export const Project = model<IProject>('Project', ProjectSchema);
export default Project;
