import { Schema, model, Document } from 'mongoose';

export interface IPOItem {
  sku: string;
  description: string;
  quantity: number;
  unitPrice: number;
}

export interface IPurchaseOrder extends Document {
  tenantId: Schema.Types.ObjectId;
  vendorId: Schema.Types.ObjectId;
  poNumber: string; // e.g. "PO-001"
  items: IPOItem[];
  totalAmount: number;
  status: 'Draft' | 'Sent' | 'Received' | 'Approved' | 'Invoiced';
  createdAt: Date;
  updatedAt: Date;
}

const POItemSchema = new Schema<IPOItem>({
  sku: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: [1, 'Quantity must be at least 1'],
  },
  unitPrice: {
    type: Number,
    required: true,
    min: [0.01, 'Unit price must be greater than zero'],
  },
});

const PurchaseOrderSchema = new Schema<IPurchaseOrder>(
  {
    tenantId: {
      type: Schema.Types.ObjectId,
      ref: 'Tenant',
      required: true,
    },
    vendorId: {
      type: Schema.Types.ObjectId,
      ref: 'Vendor',
      required: true,
    },
    poNumber: {
      type: String,
      required: true,
      trim: true,
    },
    items: {
      type: [POItemSchema],
      validate: [(val: IPOItem[]) => val.length >= 1, 'Purchase Order must contain at least one line item.'],
    },
    totalAmount: {
      type: Number,
      required: true,
      default: 0,
    },
    status: {
      type: String,
      enum: ['Draft', 'Sent', 'Received', 'Approved', 'Invoiced'],
      default: 'Draft',
    },
  },
  {
    timestamps: true,
  }
);

// Auto-calculate totalAmount from lines on pre-save hook
PurchaseOrderSchema.pre<IPurchaseOrder>('save', function (next) {
  this.totalAmount = this.items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
  next();
});

// Indexes
PurchaseOrderSchema.index({ tenantId: 1 });
PurchaseOrderSchema.index({ tenantId: 1, poNumber: 1 }, { unique: true });
PurchaseOrderSchema.index({ vendorId: 1 });

export const PurchaseOrder = model<IPurchaseOrder>('PurchaseOrder', PurchaseOrderSchema);
export default PurchaseOrder;
