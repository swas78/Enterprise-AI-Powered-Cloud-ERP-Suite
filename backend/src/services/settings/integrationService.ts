import { integrationRepository } from '../../repositories/settings/integrationRepository';
import { IIntegration } from '../../models/settings/Integration';
import logger from '../../utils/logger';

export class IntegrationService {
  static async getIntegrationsByTenant(tenantId: string): Promise<IIntegration[]> {
    logger.info(`🔌 IntegrationService: Fetching integrations for Tenant: ${tenantId}`);
    return integrationRepository.find({ tenantId });
  }

  static async getIntegrationByName(tenantId: string, name: string): Promise<IIntegration | null> {
    return integrationRepository.findOne({ tenantId, name });
  }

  static async configureIntegration(
    tenantId: string,
    name: string,
    data: { config: Record<string, any>; enabled: boolean }
  ): Promise<IIntegration | null> {
    logger.info(`🔌 IntegrationService: Configuring integration ${name} for Tenant: ${tenantId}`);
    return integrationRepository.update(
      { tenantId, name },
      { $set: data },
      { new: true, upsert: true }
    );
  }
}

export default IntegrationService;
