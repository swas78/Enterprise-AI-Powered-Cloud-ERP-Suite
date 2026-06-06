import { Response, NextFunction } from 'express';
import { redisClient } from '../config/redis';
import { TenantRequest } from '../types';
import logger from '../utils/logger';

interface RateLimiterOptions {
  maxRequests: number;      // Maximum number of requests allowed in the window
  windowSeconds: number;    // Time window in seconds
  keyPrefix: string;        // Prefix to distinguish rate limit categories (e.g. 'auth', 'api')
}

export const createRateLimiter = (options: RateLimiterOptions) => {
  const { maxRequests, windowSeconds, keyPrefix } = options;

  return async (req: TenantRequest, res: Response, next: NextFunction) => {
    try {
      // 1. Identify client: use tenantId if authenticated, fall back to IP address
      const identifier = req.tenantId || req.user?.userId || req.ip;
      const key = `ratelimit:${keyPrefix}:${identifier}`;

      // 2. Increment request count in Redis
      const current = await redisClient.incr(key);

      // 3. Set expiration TTL on first request in the window
      if (current === 1) {
        await redisClient.expire(key, windowSeconds);
      }

      // 4. Retrieve Remaining Time to Live (TTL) for headers
      const ttl = await redisClient.ttl(key);

      // 5. Append standard rate limiting headers
      res.setHeader('X-RateLimit-Limit', maxRequests);
      res.setHeader('X-RateLimit-Remaining', Math.max(0, maxRequests - current));
      res.setHeader('X-RateLimit-Reset', new Date(Date.now() + (ttl > 0 ? ttl : windowSeconds) * 1000).toISOString());

      // 6. Check if client has exceeded the limit
      if (current > maxRequests) {
        logger.warn(`⚠️ Rate limit exceeded for identifier: ${identifier} on ${keyPrefix}`);
        return res.status(429).json({
          status: 'error',
          statusCode: 429,
          message: `Too many requests. Please try again after ${ttl > 0 ? ttl : windowSeconds} seconds.`,
        });
      }

      next();
    } catch (error: any) {
      // Fail open: log rate limiter error but do not block request processing
      logger.error(`❌ Rate limiter error: ${error.message}`);
      next();
    }
  };
};

// Preset rate limiters
export const authRateLimiter = createRateLimiter({
  maxRequests: 10,
  windowSeconds: 60, // 10 requests/min
  keyPrefix: 'auth',
});

export const apiRateLimiter = createRateLimiter({
  maxRequests: 100,
  windowSeconds: 60, // 100 requests/min
  keyPrefix: 'api',
});
