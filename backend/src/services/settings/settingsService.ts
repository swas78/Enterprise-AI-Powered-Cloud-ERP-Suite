import { settingsRepository } from '../../repositories/settings/settingsRepository';
import { ISettings } from '../../models/settings/Settings';
import logger from '../../utils/logger';

export class SettingsService {
  /**
   * Get settings for a tenant, initializing with defaults if none exists
   */
  static async getSettings(tenantId: string): Promise<ISettings> {
    logger.info(`⚙️ SettingsService: Fetching settings for Tenant: ${tenantId}`);
    let settings = await settingsRepository.findOne({ tenantId });
    if (!settings) {
      logger.info(`⚙️ SettingsService: Settings not found. Creating default settings for Tenant: ${tenantId}`);
      settings = await settingsRepository.create({
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
      });
    }
    return settings;
  }

  /**
   * Update settings for a tenant
   */
  static async updateSettings(tenantId: string, updates: Partial<ISettings>): Promise<ISettings | null> {
    logger.info(`⚙️ SettingsService: Updating settings for Tenant: ${tenantId}`);
    // Use upsert to guarantee that settings exist
    return settingsRepository.update(
      { tenantId },
      { $set: updates },
      { new: true, upsert: true }
    );
  }
}

export default SettingsService;
