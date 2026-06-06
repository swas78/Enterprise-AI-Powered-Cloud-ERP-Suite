import { apiFetch } from './api';

export const reportService = {
  getAuditLogs: async (): Promise<any[]> => {
    const res = await apiFetch('/api/v1/compliance/audit-logs');
    if (!res.ok) throw new Error('Failed to fetch audit logs');
    const json = await res.json();
    return json.data;
  },

  executeGdprErasure: async (email: string): Promise<any> => {
    const res = await apiFetch('/api/v1/compliance/erasure', {
      method: 'POST',
      body: JSON.stringify({ email }),
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.message || 'GDPR Erasure request failed');
    return json;
  },

  downloadDsrExport: async (email: string): Promise<Blob> => {
    const res = await apiFetch(`/api/v1/compliance/dsr-export?email=${email}`);
    if (!res.ok) {
      const json = await res.json();
      throw new Error(json.message || 'DSR Export failed');
    }
    return res.blob();
  },
};

export default reportService;
