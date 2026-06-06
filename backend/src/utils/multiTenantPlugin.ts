import { Schema, Query } from 'mongoose';
import { getTenantContext } from './context';

export function multiTenantPlugin(schema: Schema) {
  // Ensure tenantId exists on the schema by default if not already specified
  if (!schema.paths['tenantId']) {
    schema.add({
      tenantId: {
        type: Schema.Types.ObjectId,
        ref: 'Tenant',
        required: true,
      },
    });
  }

  // Hook into query operations to automatically filter by tenantId
  const queryHooks = [
    'find',
    'findOne',
    'count',
    'countDocuments',
    'updateOne',
    'updateMany',
    'deleteOne',
    'deleteMany',
    'findOneAndUpdate',
    'findOneAndDelete',
  ];

  queryHooks.forEach((hook) => {
    schema.pre(hook as any, function (this: Query<any, any>, next) {
      const tenantId = getTenantContext();
      
      if (tenantId) {
        const filter = this.getFilter();
        // Merge the active tenantId into the query filters, preserving existing values if explicitly set
        if (!filter.tenantId) {
          this.setQuery({ ...filter, tenantId });
        }
      }
      next();
    });
  });

  // Pre-save hook to ensure the active tenant context is mapped to new documents
  schema.pre('save', function (next) {
    const tenantId = getTenantContext();
    if (tenantId && !this.tenantId) {
      this.tenantId = tenantId as any;
    }
    next();
  });
}

export default multiTenantPlugin;
