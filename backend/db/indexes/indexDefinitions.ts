export interface IndexConfig {
  collection: string;
  fields: Record<string, 1 | -1>;
  options?: {
    unique?: boolean;
    sparse?: boolean;
  };
}

export const indexDefinitions: IndexConfig[] = [
  {
    collection: 'users',
    fields: { email: 1, tenantId: 1 },
    options: { unique: true },
  },
  {
    collection: 'tenants',
    fields: { subdomain: 1 },
    options: { unique: true, sparse: true },
  },
  {
    collection: 'journalentries',
    fields: { tenantId: 1, ref: 1 },
    options: { unique: true },
  },
  {
    collection: 'employees',
    fields: { tenantId: 1, email: 1 },
    options: { unique: true },
  },
  {
    collection: 'purchaseorders',
    fields: { tenantId: 1, poNumber: 1 },
    options: { unique: true },
  },
  {
    collection: 'inventories',
    fields: { tenantId: 1, sku: 1 },
    options: { unique: true },
  },
  {
    collection: 'notifications',
    fields: { tenantId: 1, userId: 1, status: 1 },
  },
  {
    collection: 'auditlogs',
    fields: { tenantId: 1, timestamp: -1 },
  },
];

export default indexDefinitions;
