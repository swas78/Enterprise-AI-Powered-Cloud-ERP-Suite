import { Response, NextFunction } from 'express';
import { TenantRequest } from '../../types';
import logger from '../../utils/logger';

export class IntegrationController {
  
  // List current third-party integrations
  public static async getIntegrations(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      logger.info(`🔌 Fetching integrations config for Tenant: ${tenantId}`);

      return res.status(200).json({
        status: 'success',
        data: [
          { name: 'Keycloak SSO', status: 'enabled', type: 'OIDC / SAML Identity Provider' },
          { name: 'AWS Simple Email Service (SES)', status: 'enabled', type: 'SMTP Dispatcher' },
          { name: 'AWS S3', status: 'enabled', type: 'File Storage' },
          { name: 'OpenExchangeRates API', status: 'enabled', type: 'FX Market Feed' },
        ],
      });
    } catch (error) {
      next(error);
    }
  }

  // Toggle/configure an integration
  public static async configureIntegration(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      const { name, enabled, config } = req.body;

      if (!tenantId || !name) {
        return res.status(400).json({ status: 'error', message: 'Tenant or integration name is missing.' });
      }

      logger.info(`🔌 Configuring integration [${name}] for Tenant: ${tenantId}`);

      return res.status(200).json({
        status: 'success',
        message: `Integration ${name} configured successfully.`,
        data: {
          name,
          enabled: !!enabled,
          config: config || {},
        },
      });
    } catch (error) {
      next(error);
    }
  }
}

export default IntegrationController;
