export interface Vendor {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
}

export interface PurchaseOrder {
  _id: string;
  poNumber: string;
  vendorId: string | Vendor;
  items: Array<{
    sku: string;
    description?: string;
    quantity: number;
    unitPrice: number;
  }>;
  totalAmount: number;
  status: 'Draft' | 'Approved' | 'Closed';
}

export interface InventoryItem {
  _id: string;
  sku: string;
  description?: string;
  quantity: number;
  safetyStock: number;
}
