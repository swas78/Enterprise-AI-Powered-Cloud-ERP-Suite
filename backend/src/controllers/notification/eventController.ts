import { Response, NextFunction } from 'express';
import { TenantRequest } from '../../types';
import logger from '../../utils/logger';

export class EventController {
  
  // List general domain events log (mock query from audit/notifications)
  public static async queryEvents(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      logger.info(`📢 Querying recent domain events for Tenant: ${tenantId}`);

      return res.status(200).json({
        status: 'success',
        data: [
          { event: 'auth.login', tenantId, timestamp: new Date(Date.now() - 5000) },
          { event: 'finance.journal_entry.posted', tenantId, ref: 'JE-MOCK-999', timestamp: new Date(Date.now() - 3600000) },
          { event: 'scm.po.created', tenantId, poId: 'PO-MOCK-111', timestamp: new Date(Date.now() - 7200000) },
        ],
      });
    } catch (error) {
      next(error);
    }
  }
}

export default EventController;
