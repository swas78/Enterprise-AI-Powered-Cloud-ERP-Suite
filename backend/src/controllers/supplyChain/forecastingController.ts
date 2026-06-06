import { Response, NextFunction } from 'express';
import { TenantRequest } from '../../types';
import { ForecastingService } from '../../services/supplyChain/forecastingService';

export class ForecastingController {
  
  // Retrieve demand forecast predictions for a SKU
  public static async getForecast(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      const { sku } = req.params;
      const horizonDays = req.query.horizon ? parseInt(req.query.horizon as string) : 90;

      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      if (!sku) {
        return res.status(400).json({ status: 'error', message: 'SKU parameter is required.' });
      }

      const predictions = await ForecastingService.getSkuDemandForecast(tenantId, sku, horizonDays);

      return res.status(200).json({
        status: 'success',
        sku,
        horizon_days: horizonDays,
        data: predictions,
      });
    } catch (error: any) {
      next(error);
    }
  }
}
export default ForecastingController;
