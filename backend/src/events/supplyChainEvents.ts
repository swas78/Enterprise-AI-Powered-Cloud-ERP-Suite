import { eventEmitter } from './eventEmitter';

export class SupplyChainEvents {
  public static emitPoCreated(payload: {
    tenantId: string;
    poId: string;
    vendorId: string;
    totalAmount: number;
    message: string;
  }) {
    eventEmitter.emit('scm.po.created', payload);
  }
}

export default SupplyChainEvents;
