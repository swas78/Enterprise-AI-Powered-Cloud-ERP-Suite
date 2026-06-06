import { apiFetch } from './api';

export const supplyChainService = {
  getPurchaseOrders: async (): Promise<any[]> => {
    const res = await apiFetch('/api/v1/supply-chain/po');
    if (!res.ok) throw new Error('Failed to fetch purchase orders');
    const json = await res.json();
    return json.data;
  },

  createPurchaseOrder: async (po: any): Promise<any> => {
    const res = await apiFetch('/api/v1/supply-chain/po', {
      method: 'POST',
      body: JSON.stringify(po),
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.message || 'Failed to create PO');
    return json.data;
  },

  getVendors: async (): Promise<any[]> => {
    const res = await apiFetch('/api/v1/supply-chain/vendors');
    if (!res.ok) throw new Error('Failed to fetch vendors');
    const json = await res.json();
    return json.data;
  },

  getInventory: async (): Promise<any[]> => {
    const res = await apiFetch('/api/v1/supply-chain/inventory');
    if (!res.ok) throw new Error('Failed to fetch inventory');
    const json = await res.json();
    return json.data;
  },

  getForecasting: async (): Promise<any> => {
    const res = await apiFetch('/api/v1/supply-chain/forecasting');
    if (!res.ok) throw new Error('Failed to fetch forecasting data');
    const json = await res.json();
    return json.data;
  },
  registerVendor: async (vendor: any): Promise<any> => {
    const res = await apiFetch('/api/v1/supply-chain/vendors', {
      method: 'POST',
      body: JSON.stringify(vendor),
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.message || 'Failed to register vendor');
    return json.data;
  },

  receiveGoods: async (receipt: any): Promise<any> => {
    const res = await apiFetch('/api/v1/supply-chain/inventory/receive', {
      method: 'POST',
      body: JSON.stringify(receipt),
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.message || 'Failed to receive goods');
    return json.data;
  }
};

export default supplyChainService;
