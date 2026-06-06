import { Response, NextFunction } from 'express';
import crypto from 'crypto';
import { TenantRequest } from '../types';
import logger from '../utils/logger';

const CSRF_SECRET = process.env.CSRF_SECRET || 'super-secret-csrf-key-replace-in-production';

// Helper to parse cookies from headers
const parseCookies = (cookieHeader: string | undefined): Record<string, string> => {
  if (!cookieHeader) return {};
  const list: Record<string, string> = {};
  cookieHeader.split(';').forEach((cookie) => {
    const parts = cookie.split('=');
    const name = parts[0]?.trim();
    const val = parts.slice(1).join('=')?.trim();
    if (name) {
      list[name] = decodeURIComponent(val || '');
    }
  });
  return list;
};

/**
 * Express Middleware to generate and verify CSRF tokens.
 */
export class CsrfProtection {
  // Expose endpoint method to get a new token
  public static getCsrfToken(req: TenantRequest, res: Response) {
    const nonce = crypto.randomBytes(32).toString('hex');
    
    // Create an HMAC signature of the nonce
    const signature = crypto
      .createHmac('sha256', CSRF_SECRET)
      .update(nonce)
      .digest('hex');

    // Store signature in cookie
    res.cookie('_csrf', signature, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: process.env.NODE_ENV === 'production' ? 'strict' : 'lax',
      maxAge: 3600 * 1000, // 1 hour
    });

    return res.status(200).json({
      status: 'success',
      csrfToken: nonce,
    });
  }

  // Middleware validator for state-mutating requests
  public static verify(req: TenantRequest, res: Response, next: NextFunction) {
    const safeMethods = ['GET', 'HEAD', 'OPTIONS'];
    if (safeMethods.includes(req.method)) {
      return next();
    }

    // Bypass CSRF checks for Bearer header-authenticated REST requests
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
      return next();
    }

    // Bypass CSRF checks for public authentication endpoints
    if (req.originalUrl && req.originalUrl.includes('/auth/')) {
      return next();
    }

    try {
      // 1. Extract nonce from custom header or request body
      const nonce = (req.headers['x-csrf-token'] as string) || req.body?.csrfToken;
      
      // 2. Extract signature from HTTPOnly cookies
      const cookies = parseCookies(req.headers.cookie);
      const signature = cookies['_csrf'];

      if (!nonce || !signature) {
        logger.warn(`🛡️ CSRF Blocked: Missing token (nonce: ${!!nonce}, cookie: ${!!signature})`);
        return res.status(403).json({
          status: 'error',
          statusCode: 403,
          message: 'CSRF token verification failed: Token missing.',
        });
      }

      // 3. Recalculate signature of nonce
      const expectedSignature = crypto
        .createHmac('sha256', CSRF_SECRET)
        .update(nonce)
        .digest('hex');

      // 4. Cryptographic comparison to prevent timing attacks
      const matches = crypto.timingSafeEqual(
        Buffer.from(signature, 'hex'),
        Buffer.from(expectedSignature, 'hex')
      );

      if (!matches) {
        logger.warn('🛡️ CSRF Blocked: Cryptographic signature mismatch.');
        return res.status(403).json({
          status: 'error',
          statusCode: 403,
          message: 'CSRF token verification failed: Token invalid.',
        });
      }

      // Successfully validated
      next();
    } catch (error: any) {
      logger.error(`🛡️ CSRF verification error: ${error.message}`);
      return res.status(403).json({
        status: 'error',
        statusCode: 403,
        message: 'CSRF validation error.',
      });
    }
  }
}

export default CsrfProtection;
