import { Schema, model, Document } from 'mongoose';

export interface IInventory extends Document {
  tenantId: Schema.Types.ObjectId;
  vendorId?: Schema.Types.ObjectId;
  sku: string; // Stock Keeping Unit e.g. "ITEM-CORE-CPU-09"
  description: string;
  quantity: number;
  safetyStock: number;
  unitPrice?: number;
  costingMethod: 'AVCO' | 'FIFO';
  warehouseLocation: string;
  createdAt: Date;
  updatedAt: Date;
}

const InventorySchema = new Schema<IInventory>(
  {
    tenantId: {
      type: Schema.Types.ObjectId,
      ref: 'Tenant',
      required: true,
    },
    vendorId: {
      type: Schema.Types.ObjectId,
      ref: 'Vendor',
    },
    sku: {
      type: String,
      required: [true, 'SKU identifier is required'],
      trim: true,
      uppercase: true,
    },
    description: {
      type: String,
      required: [true, 'Item description is required'],
      trim: true,
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
      min: [0, 'Quantity cannot fall below zero'],
    },
    safetyStock: {
      type: Number,
      required: true,
      default: 10,
      min: [0, 'Safety stock threshold cannot be negative'],
    },
    unitPrice: {
      type: Number,
      default: 0,
      min: [0, 'Unit price cannot be negative'],
    },
    costingMethod: {
      type: String,
      enum: ['AVCO', 'FIFO'],
      default: 'AVCO',
    },
    warehouseLocation: {
      type: String,
      required: [true, 'Warehouse shelf/aisle location is required'],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
InventorySchema.index({ tenantId: 1 });
InventorySchema.index({ tenantId: 1, sku: 1 }, { unique: true });

export const Inventory = model<IInventory>('Inventory', InventorySchema);
export default Inventory;
