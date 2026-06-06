export type POStatus = 'draft' | 'submitted' | 'approved' | 'partial' | 'received' | 'closed' | 'cancelled';
export type VendorStatus = 'active' | 'inactive' | 'blacklisted';
export type InventoryMovementType = 'receipt' | 'issue' | 'transfer' | 'adjustment' | 'return';
export type ForecastMethod = 'moving_average' | 'exponential_smoothing' | 'linear_regression' | 'ml';

export interface CreatePurchaseOrderDTO {
  vendorId: string;
  orderDate: Date;
  expectedDelivery: Date;
  lineItems: POLineItemDTO[];
  currency?: string;
  notes?: string;
  tenantId: string;
  createdBy: string;
}

export interface POLineItemDTO {
  itemId: string;
  description: string;
  quantity: number;
  unitPrice: number;
  taxRate?: number;
  unit?: string;
}

export interface ApprovePODTO {
  poId: string;
  approverId: string;
  status: 'approved' | 'rejected';
  remarks?: string;
}

export interface CreateVendorDTO {
  name: string;
  email: string;
  phone?: string;
  address?: string;
  taxId?: string;
  paymentTerms?: number;
  currency?: string;
  tenantId: string;
}

export interface InventoryAdjustmentDTO {
  itemId: string;
  quantity: number;
  type: InventoryMovementType;
  reason: string;
  warehouseId?: string;
  tenantId: string;
  createdBy: string;
}

export interface ThreeWayMatchResult {
  poId: string;
  goodsReceiptId: string;
  invoiceId: string;
  matched: boolean;
  discrepancies: string[];
  totalPO: number;
  totalReceived: number;
  totalInvoiced: number;
}

export interface ReorderAlert {
  itemId: string;
  itemName: string;
  currentStock: number;
  reorderPoint: number;
  reorderQuantity: number;
  preferredVendorId?: string;
}

export interface ForecastResult {
  itemId: string;
  period: string;
  predictedDemand: number;
  confidence: number;
  method: ForecastMethod;
}
