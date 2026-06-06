import { Schema, model, Document } from 'mongoose';

export interface IChartOfAccounts extends Document {
  tenantId: Schema.Types.ObjectId;
  code: string; // e.g. "1000" for cash, "2000" for accounts payable
  name: string;
  type: 'Asset' | 'Liability' | 'Equity' | 'Revenue' | 'Expense';
  balance: number;
  currency: string;
  createdAt: Date;
  updatedAt: Date;
}

const ChartOfAccountsSchema = new Schema<IChartOfAccounts>(
  {
    tenantId: {
      type: Schema.Types.ObjectId,
      ref: 'Tenant',
      required: true,
    },
    code: {
      type: String,
      required: [true, 'Account code is required'],
      trim: true,
    },
    name: {
      type: String,
      required: [true, 'Account name is required'],
      trim: true,
    },
    type: {
      type: String,
      enum: ['Asset', 'Liability', 'Equity', 'Revenue', 'Expense'],
      required: true,
    },
    balance: {
      type: Number,
      default: 0,
    },
    currency: {
      type: String,
      default: 'USD',
      trim: true,
      uppercase: true,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
ChartOfAccountsSchema.index({ tenantId: 1 });
ChartOfAccountsSchema.index({ tenantId: 1, code: 1 }, { unique: true });

export const ChartOfAccounts = model<IChartOfAccounts>('ChartOfAccounts', ChartOfAccountsSchema);
export default ChartOfAccounts;
