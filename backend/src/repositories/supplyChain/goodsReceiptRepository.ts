import { BaseRepository } from '../baseRepository';
import { GoodsReceipt, IGoodsReceipt } from '../../models/supplyChain/GoodsReceipt';

export class GoodsReceiptRepository extends BaseRepository<IGoodsReceipt> {
  constructor() {
    super(GoodsReceipt);
  }
}

export const goodsReceiptRepository = new GoodsReceiptRepository();
export default goodsReceiptRepository;
