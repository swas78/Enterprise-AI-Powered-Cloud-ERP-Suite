import { BaseRepository } from '../baseRepository';
import { AuditLog, IAuditLog } from '../../models/compliance/AuditLog';

export class AuditLogRepository extends BaseRepository<IAuditLog> {
  constructor() {
    super(AuditLog);
  }
}

export const auditLogRepository = new AuditLogRepository();
export default auditLogRepository;
