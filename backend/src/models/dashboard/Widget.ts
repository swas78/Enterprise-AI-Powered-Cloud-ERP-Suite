import { Schema, model, Document } from 'mongoose';

export type WidgetType =
  | 'kpi_card'
  | 'bar_chart'
  | 'line_chart'
  | 'pie_chart'
  | 'donut_chart'
  | 'table'
  | 'heatmap'
  | 'gauge'
  | 'map';

export interface IWidgetConfig {
  dataSource: string;    // service or API endpoint
  filters?: Record<string, any>;
  groupBy?: string;
  aggregation?: 'sum' | 'avg' | 'count' | 'min' | 'max';
  period?: 'today' | 'week' | 'month' | 'quarter' | 'year' | 'custom';
  refreshIntervalSeconds?: number;
}

export interface IWidget extends Document {
  name: string;
  description?: string;
  type: WidgetType;
  dashboardId: Schema.Types.ObjectId;
  tenantId: Schema.Types.ObjectId;
  config: IWidgetConfig;
  position: { x: number; y: number; w: number; h: number };
  isVisible: boolean;
  createdBy: Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const WidgetSchema = new Schema<IWidget>(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    type: {
      type: String,
      required: true,
      enum: ['kpi_card', 'bar_chart', 'line_chart', 'pie_chart', 'donut_chart', 'table', 'heatmap', 'gauge', 'map'],
    },
    dashboardId: {
      type: Schema.Types.ObjectId,
      ref: 'Dashboard',
      required: true,
    },
    tenantId: {
      type: Schema.Types.ObjectId,
      ref: 'Tenant',
      required: true,
    },
    config: {
      dataSource: { type: String, required: true },
      filters: { type: Schema.Types.Mixed },
      groupBy: { type: String },
      aggregation: { type: String, enum: ['sum', 'avg', 'count', 'min', 'max'] },
      period: { type: String },
      refreshIntervalSeconds: { type: Number, default: 300 },
    },
    position: {
      x: { type: Number, default: 0 },
      y: { type: Number, default: 0 },
      w: { type: Number, default: 4 },
      h: { type: Number, default: 3 },
    },
    isVisible: { type: Boolean, default: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

WidgetSchema.index({ dashboardId: 1 });
WidgetSchema.index({ tenantId: 1 });

export const Widget = model<IWidget>('Widget', WidgetSchema);
export default Widget;
