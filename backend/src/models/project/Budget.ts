import { Schema, model, Document } from 'mongoose';

export type BudgetStatus = 'draft' | 'approved' | 'active' | 'overrun' | 'closed';

export interface IBudgetCategory {
  name: string;
  allocatedAmount: number;
  spentAmount: number;
  description?: string;
}

export interface IBudget extends Document {
  projectId: Schema.Types.ObjectId;
  tenantId: Schema.Types.ObjectId;
  totalBudget: number;
  totalSpent: number;
  currency: string;
  status: BudgetStatus;
  categories: IBudgetCategory[];
  approvedBy?: Schema.Types.ObjectId;
  approvedAt?: Date;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const BudgetCategorySchema = new Schema<IBudgetCategory>(
  {
    name: { type: String, required: true, trim: true },
    allocatedAmount: { type: Number, required: true, min: 0 },
    spentAmount: { type: Number, default: 0, min: 0 },
    description: { type: String, trim: true },
  },
  { _id: false }
);

const BudgetSchema = new Schema<IBudget>(
  {
    projectId: {
      type: Schema.Types.ObjectId,
      ref: 'Project',
      required: [true, 'Project reference is required'],
      unique: true,
    },
    tenantId: {
      type: Schema.Types.ObjectId,
      ref: 'Tenant',
      required: true,
    },
    totalBudget: {
      type: Number,
      required: [true, 'Total budget is required'],
      min: 0,
    },
    totalSpent: {
      type: Number,
      default: 0,
      min: 0,
    },
    currency: {
      type: String,
      required: true,
      default: 'USD',
      uppercase: true,
    },
    status: {
      type: String,
      enum: ['draft', 'approved', 'active', 'overrun', 'closed'],
      default: 'draft',
    },
    categories: [BudgetCategorySchema],
    approvedBy: { type: Schema.Types.ObjectId, ref: 'User' },
    approvedAt: { type: Date },
    notes: { type: String, trim: true },
  },
  { timestamps: true }
);

BudgetSchema.index({ tenantId: 1 });
BudgetSchema.index({ projectId: 1 });
BudgetSchema.index({ status: 1, tenantId: 1 });

export const Budget = model<IBudget>('Budget', BudgetSchema);
export default Budget;
