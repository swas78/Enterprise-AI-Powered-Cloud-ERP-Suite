import { Schema, model, Document } from 'mongoose';

export interface IGridConfig {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface IWidget {
  title: string;
  type: 'Line' | 'Bar' | 'Pie' | 'Metric';
  dataSource: string; // Endpoint to pull data from
  gridConfig: IGridConfig;
}

export interface IDashboard extends Document {
  tenantId: Schema.Types.ObjectId;
  name: string;
  isDefault: boolean;
  widgets: IWidget[];
  createdAt: Date;
  updatedAt: Date;
}

const GridConfigSchema = new Schema<IGridConfig>({
  x: { type: Number, required: true },
  y: { type: Number, required: true },
  w: { type: Number, required: true },
  h: { type: Number, required: true },
});

const WidgetSchema = new Schema<IWidget>({
  title: { type: String, required: true, trim: true },
  type: {
    type: String,
    enum: ['Line', 'Bar', 'Pie', 'Metric'],
    required: true,
  },
  dataSource: { type: String, required: true, trim: true },
  gridConfig: { type: GridConfigSchema, required: true },
});

const DashboardSchema = new Schema<IDashboard>(
  {
    tenantId: {
      type: Schema.Types.ObjectId,
      ref: 'Tenant',
      required: true,
    },
    name: {
      type: String,
      required: [true, 'Dashboard name is required'],
      trim: true,
    },
    isDefault: {
      type: Boolean,
      default: false,
    },
    widgets: [WidgetSchema],
  },
  {
    timestamps: true,
  }
);

// Indexes
DashboardSchema.index({ tenantId: 1 });
DashboardSchema.index({ tenantId: 1, name: 1 }, { unique: true });

export const Dashboard = model<IDashboard>('Dashboard', DashboardSchema);
export default Dashboard;
