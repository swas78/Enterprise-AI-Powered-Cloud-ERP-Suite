import { Schema, model, Document } from 'mongoose';

export interface IPermission extends Document {
  action: string;        // e.g. 'read', 'create', 'update', 'delete', 'approve'
  resource: string;      // e.g. 'invoice', 'employee', 'payroll'
  module: string;        // e.g. 'finance', 'hr', 'supplyChain'
  description?: string;
  tenantId: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const PermissionSchema = new Schema<IPermission>(
  {
    action: {
      type: String,
      required: [true, 'Action is required'],
      enum: ['read', 'create', 'update', 'delete', 'approve', 'export', 'admin'],
      trim: true,
    },
    resource: {
      type: String,
      required: [true, 'Resource is required'],
      trim: true,
    },
    module: {
      type: String,
      required: [true, 'Module is required'],
      enum: ['auth', 'finance', 'hr', 'supplyChain', 'project', 'dashboard', 'notification', 'settings'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    tenantId: {
      type: Schema.Types.ObjectId,
      ref: 'Tenant',
      required: [true, 'Permission must belong to a tenant'],
    },
  },
  { timestamps: true }
);

PermissionSchema.index({ tenantId: 1 });
PermissionSchema.index({ module: 1, resource: 1, action: 1, tenantId: 1 }, { unique: true });

export const Permission = model<IPermission>('Permission', PermissionSchema);
export default Permission;
