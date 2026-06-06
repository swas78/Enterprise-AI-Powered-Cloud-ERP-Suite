import { Response, NextFunction } from 'express';
import { TenantRequest } from '../../types';
import logger from '../../utils/logger';

export class SettingsController {
  
  // Get active system settings for a tenant
  public static async getSettings(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      logger.info(`⚙️ Fetching system settings for Tenant: ${tenantId}`);

      // Returns system configuration settings
      return res.status(200).json({
        status: 'success',
        data: {
          tenantId,
          timezone: 'UTC',
          baseCurrency: 'USD',
          supportedCurrencies: ['USD', 'EUR', 'GBP', 'INR'],
          fiscalYearStart: '01-01',
          notificationChannels: {
            email: true,
            inApp: true,
            webhook: true,
          },
          features: {
            aiForecasting: true,
            automatedAPAR: true,
          },
        },
      });
    } catch (error) {
      next(error);
    }
  }

  // Update tenant system settings
  public static async updateSettings(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      const updates = req.body;
      logger.info(`⚙️ Updating system settings for Tenant: ${tenantId}`);

      return res.status(200).json({
        status: 'success',
        message: 'System settings updated successfully.',
        data: {
          tenantId,
          ...updates,
        },
      });
    } catch (error) {
      next(error);
    }
  }
}

export default SettingsController;
