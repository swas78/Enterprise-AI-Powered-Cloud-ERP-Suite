import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { TenantRequest, UserPayload, UserRole } from '../types';
import redisClient from '../config/redis';

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-jwt-key-replace-in-production';

// Guard to enforce valid authentication token
export const authGuard = async (
  req: TenantRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        status: 'error',
        statusCode: 401,
        message: 'Authentication token missing or invalid.',
      });
    }

    const token = authHeader.split(' ')[1];
    
    // Check if token is blacklisted in Redis (e.g., after user logout)
    const isBlacklisted = await redisClient.get(`blacklist:${token}`);
    if (isBlacklisted) {
      return res.status(401).json({
        status: 'error',
        statusCode: 401,
        message: 'Token has been invalidated. Please sign in again.',
      });
    }

    // Verify token signature & payload
    const decoded = jwt.verify(token, JWT_SECRET) as UserPayload;
    
    // Inject decoded user details and active tenant ID into the request context
    req.user = decoded;
    req.tenantId = decoded.tenantId;

    next();
  } catch (error: any) {
    console.error('❌ Token validation failed:', error.message);
    return res.status(401).json({
      status: 'error',
      statusCode: 401,
      message: 'Session expired or token invalid.',
    });
  }
};

// Guard to enforce Role-Based Access Control (RBAC)
export const roleGuard = (allowedRoles: UserRole[]) => {
  return (req: TenantRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({
        status: 'error',
        statusCode: 401,
        message: 'Authentication context missing.',
      });
    }

    const hasRole = allowedRoles.includes(req.user.role);
    if (!hasRole) {
      return res.status(403).json({
        status: 'error',
        statusCode: 403,
        message: `Forbidden: Access restricted. Required role: [${allowedRoles.join(', ')}]. Current role: [${req.user.role}].`,
      });
    }

    next();
  };
};
