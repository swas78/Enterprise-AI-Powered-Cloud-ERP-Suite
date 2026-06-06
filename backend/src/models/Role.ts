import { Schema, model, Document } from 'mongoose';

export interface IRole extends Document {
  name: string;
  description?: string;
  permissions: Schema.Types.ObjectId[];
  tenantId: Schema.Types.ObjectId;
  isSystemRole: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const RoleSchema = new Schema<IRole>(
  {
    name: {
      type: String,
      required: [true, 'Role name is required'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    permissions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Permission',
      },
    ],
    tenantId: {
      type: Schema.Types.ObjectId,
      ref: 'Tenant',
      required: [true, 'Role must belong to a tenant'],
    },
    isSystemRole: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

RoleSchema.index({ tenantId: 1 });
RoleSchema.index({ name: 1, tenantId: 1 }, { unique: true });

export const Role = model<IRole>('Role', RoleSchema);
export default Role;
