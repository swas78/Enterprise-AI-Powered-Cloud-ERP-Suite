import env from './env';

export const keycloakConfig = {
  realm: env.keycloak.realm,
  'auth-server-url': env.keycloak.authServerUrl,
  resource: env.keycloak.clientId,
  'confidential-port': 0,
  'ssl-required': 'external',
};

export default keycloakConfig;
