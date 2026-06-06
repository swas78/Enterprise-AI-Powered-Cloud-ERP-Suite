import { auditLogRepository } from '../repositories/compliance/auditLogRepository';
import { TenantRequest } from '../types';
import logger from './logger';

export class AuditLogger {
  public static async log(
    req: TenantRequest | any,
    action: string,
    entityType?: string,
    entityId?: string,
    details?: any
  ) {
    try {
      const tenantId = req.tenantId || req.user?.tenantId || 'SYSTEM';
      const userId = req.user?.userId;
      const userEmail = req.user?.email || 'system@amdox.com';
      const ipAddress = req.ip || req.headers?.['x-forwarded-for'] || '';

      // F-09: Cryptographic Hash Chaining for compliance logs
      const crypto = require('crypto');
      const lastLog = await auditLogRepository.findOne({ tenantId }, null, { sort: { createdAt: -1 } });
      const previousHash = lastLog?.chainHash || 'GENESIS_HASH';

      const payloadString = JSON.stringify({ tenantId, userId, action, entityId, previousHash, timestamp: new Date().toISOString() });
      const currentHash = crypto.createHash('sha256').update(payloadString).digest('hex');

      await auditLogRepository.create({
        tenantId,
        userId,
        userEmail,
        action,
        entityType,
        entityId,
        details,
        chainHash: currentHash, // F-09 Implemented
        previousHash: previousHash,
      });

      logger.info(`🛡️ Audit Log recorded: ${action} | User: ${userEmail} | Tenant: ${tenantId}`);
    } catch (err: any) {
      logger.error(`❌ Failed to record audit log: ${err.message}`);
    }
  }
}

export default AuditLogger;
