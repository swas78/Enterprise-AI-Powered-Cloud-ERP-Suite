import { eventEmitter } from './eventEmitter';

export class AuditEvents {
  public static emitAuditLog(payload: {
    tenantId: string;
    action: string;
    entity: string;
    entityId: string;
    metadata: any;
  }) {
    eventEmitter.emit('audit.logged', payload);
  }
}

export default AuditEvents;
