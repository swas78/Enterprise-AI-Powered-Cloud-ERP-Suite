import { Schema, model, Document } from 'mongoose';

export type ForecastMethod = 'moving_average' | 'exponential_smoothing' | 'linear_regression' | 'ml';

export interface IForecast extends Document {
  itemId: Schema.Types.ObjectId;
  tenantId: Schema.Types.ObjectId;
  period: string;               // e.g. '2025-Q3' or '2025-07'
  periodType: 'monthly' | 'quarterly' | 'weekly';
  predictedDemand: number;
  actualDemand?: number;
  confidence: number;           // 0-1 confidence score
  method: ForecastMethod;
  modelVersion?: string;
  inputFeatures?: Record<string, any>;
  generatedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

const ForecastSchema = new Schema<IForecast>(
  {
    itemId: {
      type: Schema.Types.ObjectId,
      ref: 'Inventory',
      required: [true, 'Item reference is required'],
    },
    tenantId: {
      type: Schema.Types.ObjectId,
      ref: 'Tenant',
      required: true,
    },
    period: {
      type: String,
      required: [true, 'Forecast period is required'],
      trim: true,
    },
    periodType: {
      type: String,
      enum: ['monthly', 'quarterly', 'weekly'],
      default: 'monthly',
    },
    predictedDemand: {
      type: Number,
      required: true,
      min: 0,
    },
    actualDemand: {
      type: Number,
      min: 0,
    },
    confidence: {
      type: Number,
      required: true,
      min: 0,
      max: 1,
    },
    method: {
      type: String,
      enum: ['moving_average', 'exponential_smoothing', 'linear_regression', 'ml'],
      default: 'moving_average',
    },
    modelVersion: { type: String },
    inputFeatures: { type: Schema.Types.Mixed },
    generatedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

ForecastSchema.index({ tenantId: 1 });
ForecastSchema.index({ itemId: 1, period: 1, tenantId: 1 }, { unique: true });

export const Forecast = model<IForecast>('Forecast', ForecastSchema);
export default Forecast;
