export interface Widget {
  _id: string;
  type: 'metrics' | 'forecast' | 'ledger' | 'hr';
  title: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface DashboardLayout {
  _id?: string;
  tenantId: string;
  userId: string;
  layoutName: string;
  widgets: Widget[];
}
