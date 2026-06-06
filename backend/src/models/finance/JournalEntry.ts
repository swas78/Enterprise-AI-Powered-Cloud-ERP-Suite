import { Schema, model, Document } from 'mongoose';

export interface IJournalLine {
  accountId: Schema.Types.ObjectId;
  type: 'Debit' | 'Credit';
  amount: number;
}

export interface IJournalEntry extends Document {
  tenantId: Schema.Types.ObjectId;
  ref: string; // e.g. "JE-2026-06-001"
  description: string;
  date: Date;
  status: 'Pending' | 'Balanced' | 'Posted';
  lines: IJournalLine[];
  createdAt: Date;
  updatedAt: Date;
}

const JournalLineSchema = new Schema<IJournalLine>({
  accountId: {
    type: Schema.Types.ObjectId,
    ref: 'ChartOfAccounts',
    required: true,
  },
  type: {
    type: String,
    enum: ['Debit', 'Credit'],
    required: true,
  },
  amount: {
    type: Number,
    required: [true, 'Transaction amount is required'],
    min: [0.01, 'Amount must be greater than zero'],
  },
});

const JournalEntrySchema = new Schema<IJournalEntry>(
  {
    tenantId: {
      type: Schema.Types.ObjectId,
      ref: 'Tenant',
      required: true,
    },
    ref: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ['Pending', 'Balanced', 'Posted'],
      default: 'Pending',
    },
    lines: {
      type: [JournalLineSchema],
      validate: [
        (val: IJournalLine[]) => val.length >= 2,
        'A journal entry must contain at least two transactional lines.',
      ],
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
JournalEntrySchema.index({ tenantId: 1 });
JournalEntrySchema.index({ tenantId: 1, ref: 1 }, { unique: true });

export const JournalEntry = model<IJournalEntry>('JournalEntry', JournalEntrySchema);
export default JournalEntry;
