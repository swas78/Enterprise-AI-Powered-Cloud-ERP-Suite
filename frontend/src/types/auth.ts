export interface User {
  id: string;
  name: string;
  email: string;
  role: 'SuperAdmin' | 'TenantAdmin' | 'Manager' | 'Viewer';
  tenantId: string;
  tenantName?: string;
}

export interface Tenant {
  id: string;
  name: string;
  subdomain: string;
}
