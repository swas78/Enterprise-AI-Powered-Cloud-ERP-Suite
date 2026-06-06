import { Schema, model, Document } from 'mongoose';

export interface ITenant extends Document {
  name: string;
  subdomain?: string;
  status: 'active' | 'suspended';
  createdAt: Date;
  updatedAt: Date;
}

const TenantSchema = new Schema<ITenant>(
  {
    name: {
      type: String,
      required: [true, 'Tenant name is required'],
      trim: true,
    },
    subdomain: {
      type: String,
      unique: true,
      sparse: true, // Allows multiple null/undefined values
      trim: true,
      lowercase: true,
    },
    status: {
      type: String,
      enum: ['active', 'suspended'],
      default: 'active',
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
TenantSchema.index({ subdomain: 1 });

export const Tenant = model<ITenant>('Tenant', TenantSchema);
export default Tenant;
