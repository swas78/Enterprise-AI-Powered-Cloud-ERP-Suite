import { BaseRepository } from '../baseRepository';
import { PurchaseOrder, IPurchaseOrder } from '../../models/supplyChain/PurchaseOrder';

export class PORepository extends BaseRepository<IPurchaseOrder> {
  constructor() {
    super(PurchaseOrder);
  }
}

export const poRepository = new PORepository();
export default poRepository;
