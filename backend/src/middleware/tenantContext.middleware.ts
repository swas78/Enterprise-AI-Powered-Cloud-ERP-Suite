import { Response, NextFunction } from 'express';
import { TenantRequest } from '../types';
import { saasContextStore } from '../utils/context';

export const tenantContextMiddleware = (
  req: TenantRequest,
  res: Response,
  next: NextFunction
) => {
  // Extract tenant ID from headers
  const tenantIdHeader = req.headers['x-tenant-id'] as string;
  let tenantId = tenantIdHeader;
  
  if (!tenantId && req.user && req.user.tenantId) {
    // Fallback to JWT payload tenant context
    tenantId = req.user.tenantId;
  }

  req.tenantId = tenantId;

  // Wrap request chain execution in our thread-local storage channel
  const context = {
    tenantId,
    userId: req.user?.userId,
    role: req.user?.role,
  };

  saasContextStore.run(context, () => {
    next();
  });
};

export default tenantContextMiddleware;
