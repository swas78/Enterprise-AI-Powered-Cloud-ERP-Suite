export const mockKeycloakService = {
  verifyToken: jest.fn().mockResolvedValue(true),
  syncUserRole: jest.fn().mockResolvedValue(undefined),
};

jest.mock('../../src/services/external/keycloakService', () => ({
  KeycloakService: mockKeycloakService,
  default: mockKeycloakService,
}));
