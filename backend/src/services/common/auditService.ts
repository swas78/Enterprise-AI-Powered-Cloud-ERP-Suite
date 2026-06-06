import { AuditLog } from '../../models/compliance/AuditLog';
import logger from '../../utils/logger';

export class AuditService {
  /**
   * Log an administrative or sensitive mutation action to the audit trail collection.
   */
  static async logAction(opts: {
    tenantId: string;
    userId?: string;
    userEmail: string;
    action: string;
    entityType?: string;
    entityId?: string;
    details?: any;
    ipAddress?: string;
  }): Promise<void> {
    logger.info(`📝 AuditService: Logging action "${opts.action}" for Tenant: ${opts.tenantId}`);
    try {
      await AuditLog.create({
        tenantId: opts.tenantId,
        userId: opts.userId,
        userEmail: opts.userEmail,
        action: opts.action,
        entityType: opts.entityType,
        entityId: opts.entityId,
        details: opts.details,
        ipAddress: opts.ipAddress,
        timestamp: new Date(),
      });
    } catch (err) {
      logger.error('Failed to create audit log entry in database:', err);
    }
  }
}

export default AuditService;
