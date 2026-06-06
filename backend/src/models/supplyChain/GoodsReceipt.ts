import { Schema, model, Document } from 'mongoose';

export interface IGoodsReceiptItem {
  sku: string;
  quantityReceived: number;
}

export interface IGoodsReceipt extends Document {
  tenantId: Schema.Types.ObjectId;
  poId: Schema.Types.ObjectId;
  grNumber: string; // e.g. "GR-10029"
  receivedItems: IGoodsReceiptItem[];
  receivedDate: Date;
  status: 'Pending' | 'Verified' | 'Mismatch';
  createdAt: Date;
  updatedAt: Date;
}

const GoodsReceiptItemSchema = new Schema<IGoodsReceiptItem>({
  sku: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
  },
  quantityReceived: {
    type: Number,
    required: true,
    min: [0, 'Received quantity cannot be negative'],
  },
});

const GoodsReceiptSchema = new Schema<IGoodsReceipt>(
  {
    tenantId: {
      type: Schema.Types.ObjectId,
      ref: 'Tenant',
      required: true,
    },
    poId: {
      type: Schema.Types.ObjectId,
      ref: 'PurchaseOrder',
      required: true,
    },
    grNumber: {
      type: String,
      required: true,
      trim: true,
    },
    receivedItems: [GoodsReceiptItemSchema],
    receivedDate: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ['Pending', 'Verified', 'Mismatch'],
      default: 'Pending',
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
GoodsReceiptSchema.index({ tenantId: 1 });
GoodsReceiptSchema.index({ tenantId: 1, grNumber: 1 }, { unique: true });
GoodsReceiptSchema.index({ poId: 1 });

export const GoodsReceipt = model<IGoodsReceipt>('GoodsReceipt', GoodsReceiptSchema);
export default GoodsReceipt;
