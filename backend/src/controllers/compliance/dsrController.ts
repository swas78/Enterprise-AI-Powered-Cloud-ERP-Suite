import { Response, NextFunction } from 'express';
import { TenantRequest } from '../../types';
import logger from '../../utils/logger';
import AuditLogger from '../../utils/auditLogger';
import { userRepository } from '../../repositories/userRepository';

export class DsrController {
  
  // F-09: Submit a new GDPR Data Subject Request (DSR)
  public static async submitDSR(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      const { requestType } = req.body; // 'EXPORT' or 'DELETE'
      const userId = req.user?.userId;

      if (!tenantId || !userId) {
        return res.status(400).json({ status: 'error', message: 'Tenant or User context missing.' });
      }

      if (!['EXPORT', 'DELETE'].includes(requestType)) {
        return res.status(400).json({ status: 'error', message: 'Invalid DSR requestType' });
      }

      // In a real app we would save this to a DSR Tracker collection with a 72h SLA timer
      // Here we simulate the processing.
      logger.info(`🚨 GDPR DSR [${requestType}] submitted by user ${userId}. SLA 72h started.`);
      
      await AuditLogger.log(req, 'DSR_SUBMITTED', 'User', userId, { requestType });

      return res.status(202).json({
        status: 'success',
        message: 'GDPR Request acknowledged. SLA 72 hours.',
        dsrId: `DSR-${Date.now()}`
      });
    } catch (error: any) {
      next(error);
    }
  }

  // Admin endpoint to process DSRs manually or verify SLA compliance
  public static async processDSR(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      const { dsrId, targetUserId, action } = req.body;

      if (!tenantId || !targetUserId) {
        return res.status(400).json({ status: 'error', message: 'Missing target user ID' });
      }

      const user = await userRepository.findById(targetUserId);
      if (!user) {
        return res.status(404).json({ status: 'error', message: 'User not found' });
      }

      if (action === 'EXPORT') {
        // Compile all PII for export (mock compilation)
        const exportData = {
          profile: user,
          // (Would fetch related payroll, performance, etc. in real system)
        };
        await AuditLogger.log(req, 'DSR_PROCESSED_EXPORT', 'User', targetUserId);
        return res.status(200).json({ status: 'success', data: exportData });
      } else if (action === 'DELETE') {
        // Anonymize user (Soft delete + PII scramble)
        user.email = `anonymized-${Date.now()}@deleted.com`;
        user.name = 'Deleted User';
        user.isActive = false;
        await user.save();
        await AuditLogger.log(req, 'DSR_PROCESSED_DELETE', 'User', targetUserId);
        return res.status(200).json({ status: 'success', message: 'User PII successfully anonymized.' });
      }

      return res.status(400).json({ status: 'error', message: 'Invalid action' });
    } catch (error: any) {
      next(error);
    }
  }
}

export default DsrController;
