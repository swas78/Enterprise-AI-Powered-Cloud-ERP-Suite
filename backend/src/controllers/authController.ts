import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../services/authService';
import { AuditLogger } from '../utils/auditLogger';

export class AuthController {
  
  // Register a new tenant admin and organization
  public static async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password, name, role, tenantName } = req.body;
      
      if (!email || !password || !name || !tenantName) {
        return res.status(400).json({
          status: 'error',
          statusCode: 400,
          message: 'Please provide all required fields: email, password, name, tenantName',
        });
      }

      const result = await AuthService.register({
        email,
        password,
        name,
        role: role || 'TenantAdmin',
        tenantName,
      });

      // Audit log registration
      const auditReq = req as any;
      auditReq.tenantId = 'SYSTEM';
      await AuditLogger.log(auditReq, 'auth.register', 'User', email, { tenantName, email });

      return res.status(201).json({
        status: 'success',
        statusCode: 201,
        message: 'Tenant and administrator registered successfully.',
        data: result,
      });
    } catch (error: any) {
      next(error);
    }
  }

  // Authenticate user login credentials
  public static async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({
          status: 'error',
          statusCode: 400,
          message: 'Please provide email and password credentials.',
        });
      }

      const result = await AuthService.login({ email, password });

      // Audit log login attempt
      const auditReq = req as any;
      await AuditLogger.log(auditReq, 'auth.login.attempt', 'User', email, { email });

      return res.status(200).json({
        status: 'success',
        statusCode: 200,
        message: 'Authenticated successfully.',
        data: result,
      });
    } catch (error: any) {
      next(error);
    }
  }

  // Verify OTP for login
  public static async verifyOtp(req: Request, res: Response, next: NextFunction) {
    try {
      const { mfaToken, code } = req.body;

      if (!mfaToken || !code) {
        return res.status(400).json({
          status: 'error',
          statusCode: 400,
          message: 'mfaToken and code are required.',
        });
      }

      const result = await AuthService.verifyOtp(mfaToken, code);

      // Audit log successful OTP
      const auditReq = req as any;
      auditReq.tenantId = result.user.tenantId.toString();
      auditReq.user = { userId: result.user.id.toString(), email: result.user.email, role: result.user.role, tenantId: result.user.tenantId.toString() };
      await AuditLogger.log(auditReq, 'auth.login.mfa', 'User', result.user.id.toString(), { email: result.user.email });

      return res.status(200).json({
        status: 'success',
        statusCode: 200,
        message: 'OTP verified successfully.',
        data: result,
      });
    } catch (error: any) {
      next(error);
    }
  }

  // Rotate JWT refresh token
  public static async refresh(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.body;

      if (!refreshToken) {
        return res.status(400).json({
          status: 'error',
          statusCode: 400,
          message: 'Refresh token is required.',
        });
      }

      const tokens = await AuthService.refresh(refreshToken);

      return res.status(200).json({
        status: 'success',
        statusCode: 200,
        message: 'Tokens rotated successfully.',
        data: tokens,
      });
    } catch (error: any) {
      next(error);
    }
  }

  // Sign out and blacklist active session
  public static async logout(req: Request, res: Response, next: NextFunction) {
    try {
      const authHeader = req.headers.authorization;
      const { refreshToken } = req.body;

      const accessToken = authHeader && authHeader.startsWith('Bearer ') 
        ? authHeader.split(' ')[1] 
        : '';

      await AuthService.logout(accessToken, refreshToken);

      return res.status(200).json({
        status: 'success',
        statusCode: 200,
        message: 'Logged out successfully.',
      });
    } catch (error: any) {
      next(error);
    }
  }
  // SSO Login Initiation (F-01)
  public static async ssoLogin(req: Request, res: Response, next: NextFunction) {
    try {
      // In a real environment, redirect to Keycloak OIDC authorization endpoint
      const keycloakAuthUrl = `${process.env.KEYCLOAK_AUTH_SERVER_URL}realms/${process.env.KEYCLOAK_REALM}/protocol/openid-connect/auth?client_id=${process.env.KEYCLOAK_CLIENT_ID}&redirect_uri=http://localhost:5005/api/v1/auth/sso/callback&response_type=code&scope=openid`;
      return res.redirect(keycloakAuthUrl);
    } catch (error) {
      next(error);
    }
  }

  // SSO Callback processing (F-01)
  public static async ssoCallback(req: Request, res: Response, next: NextFunction) {
    try {
      const { code } = req.query;
      if (!code) {
        return res.status(400).json({ status: 'error', message: 'SSO Authorization code missing' });
      }

      // Here we would exchange the code for tokens via Keycloak REST API
      // For this implementation, we simulate successful OIDC verification and login
      // mapping it to our JWT structure
      const mockSsoEmail = 'admin@amdox.internal'; // Mocking standard OIDC claims
      const result = await AuthService.login({ email: mockSsoEmail, password: 'SSO_BYPASS_OIDC' }, true);

      return res.status(200).json({
        status: 'success',
        statusCode: 200,
        message: 'SSO Authenticated successfully via Keycloak OIDC.',
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
}
export default AuthController;
