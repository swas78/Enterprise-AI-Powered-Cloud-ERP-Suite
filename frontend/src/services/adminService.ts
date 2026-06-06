import { apiFetch } from './api';

export const adminService = {
  getRoles: async (): Promise<any[]> => {
    const res = await apiFetch('/api/v1/settings/roles');
    if (!res.ok) throw new Error('Failed to fetch roles');
    const json = await res.json();
    return json.data;
  },

  getPermissions: async (): Promise<any[]> => {
    const res = await apiFetch('/api/v1/settings/permissions');
    if (!res.ok) throw new Error('Failed to fetch permissions');
    const json = await res.json();
    return json.data;
  },

  getIntegrations: async (): Promise<any[]> => {
    const res = await apiFetch('/api/v1/settings/integrations');
    if (!res.ok) throw new Error('Failed to fetch integrations');
    const json = await res.json();
    return json.data;
  },

  getComplianceLogs: async (): Promise<any[]> => {
    const res = await apiFetch('/api/v1/compliance');
    if (!res.ok) throw new Error('Failed to fetch compliance logs');
    const json = await res.json();
    return json.data;
  }
};

export default adminService;
