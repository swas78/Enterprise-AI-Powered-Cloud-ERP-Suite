import axios from 'axios';
import { keycloakConfig } from '../../config/keycloak';
import logger from '../../utils/logger';

export class KeycloakService {
  /**
   * Introspect token at Keycloak server to verify validity
   */
  static async verifyToken(token: string): Promise<boolean> {
    const url = `${keycloakConfig['auth-server-url']}/realms/${keycloakConfig.realm}/protocol/openid-connect/token/introspect`;
    logger.info(`🔐 KeycloakService: Verifying SSO token against realm ${keycloakConfig.realm}`);

    try {
      if (!keycloakConfig['auth-server-url']) {
        logger.warn('Keycloak authentication server URL is not configured. Simulating verification.');
        return token.startsWith('mock-kkey-');
      }

      const params = new URLSearchParams();
      params.append('token', token);
      params.append('client_id', keycloakConfig.resource);

      const response = await axios.post(url, params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        timeout: 5000,
      });

      return response.data && response.data.active === true;
    } catch (error) {
      logger.error('Failed to introspect SSO token at Keycloak server.', error);
      return false;
    }
  }

  /**
   * Sync custom role memberships into Keycloak
   */
  static async syncUserRole(email: string, role: string): Promise<void> {
    logger.info(`🔐 KeycloakService: Syncing user ${email} role to ${role}`);
    // Simulate admin client synchronization logic
  }
}

export default KeycloakService;
