import { AuthController } from '../../../src/controllers/authController';
import { AuthService } from '../../../src/services/authService';
import { AuditLogger } from '../../../src/utils/auditLogger';

jest.mock('../../../src/services/authService');
jest.mock('../../../src/utils/auditLogger', () => ({
  AuditLogger: {
    log: jest.fn().mockResolvedValue(undefined),
  },
}));

describe('Unit Test: AuthController', () => {
  let mockRequest: any;
  let mockResponse: any;
  let nextFunction: any;

  beforeEach(() => {
    jest.clearAllMocks();
    mockRequest = {
      body: {},
      headers: {},
    };
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    nextFunction = jest.fn();
  });

  describe('register', () => {
    it('should return 400 if any required field is missing', async () => {
      mockRequest.body = { email: 'test@amdox.com' }; // missing password, name, tenantName

      await AuthController.register(mockRequest, mockResponse, nextFunction);

      expect(mockResponse.status).toHaveBeenCalledWith(400);
      expect(mockResponse.json).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 'error',
          message: expect.stringContaining('Please provide all required fields'),
        })
      );
    });

    it('should call AuthService.register and return 201 on success', async () => {
      const mockResult = {
        user: {
          id: 'user-id',
          email: 'test@amdox.com',
          name: 'Test Admin',
          role: 'TenantAdmin',
          tenantId: 'tenant-id',
        },
        accessToken: 'access-token',
        refreshToken: 'refresh-token',
      };

      mockRequest.body = {
        email: 'test@amdox.com',
        password: 'password123',
        name: 'Test Admin',
        tenantName: 'Test Tenant',
      };

      (AuthService.register as jest.Mock).mockResolvedValue(mockResult);

      await AuthController.register(mockRequest, mockResponse, nextFunction);

      expect(AuthService.register).toHaveBeenCalledWith({
        email: 'test@amdox.com',
        password: 'password123',
        name: 'Test Admin',
        role: 'TenantAdmin',
        tenantName: 'Test Tenant',
      });
      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(
        expect.objectContaining({
          status: 'success',
          data: mockResult,
        })
      );
    });
  });
});
