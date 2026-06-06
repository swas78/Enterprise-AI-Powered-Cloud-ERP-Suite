import { Schema, model, Document } from 'mongoose';

export interface IVendor extends Document {
  tenantId: Schema.Types.ObjectId;
  name: string;
  email: string;
  code: string; // e.g. "VND-1002"
  status: 'Active' | 'Inactive';
  createdAt: Date;
  updatedAt: Date;
}

const VendorSchema = new Schema<IVendor>(
  {
    tenantId: {
      type: Schema.Types.ObjectId,
      ref: 'Tenant',
      required: true,
    },
    name: {
      type: String,
      required: [true, 'Vendor supplier name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Vendor email contact address is required'],
      trim: true,
      lowercase: true,
    },
    code: {
      type: String,
      required: [true, 'Unique Vendor code is required'],
      trim: true,
      uppercase: true,
    },
    status: {
      type: String,
      enum: ['Active', 'Inactive'],
      default: 'Active',
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
VendorSchema.index({ tenantId: 1 });
VendorSchema.index({ tenantId: 1, code: 1 }, { unique: true });

export const Vendor = model<IVendor>('Vendor', VendorSchema);
export default Vendor;
