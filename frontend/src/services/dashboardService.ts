import { apiFetch } from './api';

export const dashboardService = {
  // BI stubs (layouts and realtime metrics fetched via API)
  getDashboardLayout: async (layoutId: string): Promise<any> => {
    const res = await apiFetch(`/api/v1/dashboard/layouts/${layoutId}`);
    if (!res.ok) throw new Error('Failed to fetch dashboard layout');
    const json = await res.json();
    return json.data;
  },

  saveDashboardLayout: async (layout: any): Promise<any> => {
    const res = await apiFetch('/api/v1/dashboard/layouts', {
      method: 'POST',
      body: JSON.stringify(layout),
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.message || 'Failed to save dashboard layout');
    return json.data;
  },

  getWidgets: async (): Promise<any[]> => {
    const res = await apiFetch('/api/v1/dashboard/widgets');
    if (!res.ok) throw new Error('Failed to fetch widgets');
    const json = await res.json();
    return json.data;
  },

  getReports: async (): Promise<any[]> => {
    const res = await apiFetch('/api/v1/dashboard/reports');
    if (!res.ok) throw new Error('Failed to fetch reports');
    const json = await res.json();
    return json.data;
  }
};

export default dashboardService;
