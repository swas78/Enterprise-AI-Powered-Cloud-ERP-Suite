import { Schema, model, Document } from 'mongoose';

export interface IIntegration extends Document {
  tenantId: Schema.Types.ObjectId | string;
  name: string;
  enabled: boolean;
  config: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

const IntegrationSchema = new Schema<IIntegration>(
  {
    tenantId: { type: Schema.Types.ObjectId, ref: 'Tenant', required: true },
    name: { type: String, required: true },
    enabled: { type: Boolean, default: false },
    config: { type: Schema.Types.Mixed, default: {} },
  },
  { timestamps: true }
);

IntegrationSchema.index({ tenantId: 1, name: 1 }, { unique: true });

export const Integration = model<IIntegration>('Integration', IntegrationSchema);
export default Integration;
