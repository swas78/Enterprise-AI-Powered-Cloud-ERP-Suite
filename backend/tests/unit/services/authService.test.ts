import { AuthService } from '../../../src/services/authService';
import { userRepository } from '../../../src/repositories/userRepository';
import { tenantRepository } from '../../../src/repositories/tenantRepository';
import redisClient from '../../../src/config/redis';
import jwt from 'jsonwebtoken';

jest.mock('../../../src/repositories/userRepository');
jest.mock('../../../src/repositories/tenantRepository');
jest.mock('../../../src/config/redis', () => ({
  redisClient: {
    get: jest.fn(),
    setex: jest.fn(),
  },
  default: {
    get: jest.fn(),
    setex: jest.fn(),
  },
}));

describe('Unit Test: AuthService', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('generateTokens', () => {
    it('should correctly generate access and refresh tokens', async () => {
      const mockUser: any = {
        _id: 'mock-user-id',
        email: 'test@amdox.com',
        role: 'TenantAdmin',
        tenantId: { toString: () => 'mock-tenant-id' },
      };

      const spy = jest.spyOn(AuthService as any, 'generateTokens');
      const tokens = (AuthService as any).generateTokens(mockUser);

      expect(tokens).toHaveProperty('accessToken');
      expect(tokens).toHaveProperty('refreshToken');

      const decodedAccess = jwt.decode(tokens.accessToken) as any;
      expect(decodedAccess.userId).toBe('mock-user-id');
      expect(decodedAccess.email).toBe('test@amdox.com');
      expect(decodedAccess.role).toBe('TenantAdmin');
      expect(decodedAccess.tenantId).toBe('mock-tenant-id');
    });
  });

  describe('register', () => {
    it('should register a new tenant and admin user', async () => {
      const mockTenant: any = { _id: 'mock-tenant-id', name: 'Mock Tenant' };
      const mockUser: any = {
        _id: 'mock-user-id',
        email: 'test@amdox.com',
        name: 'Test Admin',
        role: 'TenantAdmin',
        tenantId: 'mock-tenant-id',
      };

      (tenantRepository.findOne as jest.Mock).mockResolvedValue(null);
      (tenantRepository.create as jest.Mock).mockResolvedValue(mockTenant);
      (userRepository.findOne as jest.Mock).mockResolvedValue(null);
      (userRepository.create as jest.Mock).mockResolvedValue(mockUser);

      const result = await AuthService.register({
        email: 'test@amdox.com',
        password: 'password123',
        name: 'Test Admin',
        role: 'TenantAdmin',
        tenantName: 'Mock Tenant',
      });

      expect(result.user.email).toBe('test@amdox.com');
      expect(result.user.tenantName).toBe('Mock Tenant');
      expect(result).toHaveProperty('accessToken');
      expect(result).toHaveProperty('refreshToken');
    });

    it('should throw error if email is already registered', async () => {
      (tenantRepository.findOne as jest.Mock).mockResolvedValue({ _id: 'tenant-id' });
      (userRepository.findOne as jest.Mock).mockResolvedValue({ email: 'test@amdox.com' });

      await expect(
        AuthService.register({
          email: 'test@amdox.com',
          password: 'password123',
          name: 'Test Admin',
          role: 'TenantAdmin',
          tenantName: 'Mock Tenant',
        })
      ).rejects.toThrow('Email address already registered.');
    });
  });
});
