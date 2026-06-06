import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';

const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  const tenantId = req.headers['x-tenant-id'] || 'no-tenant';

  res.on('finish', () => {
    const duration = Date.now() - start;
    logger.info(
      `${req.method} ${req.originalUrl} | Status: ${res.statusCode} | Tenant: ${tenantId} | Duration: ${duration}ms`
    );
  });

  next();
};

export default requestLogger;
