import { poRepository } from '../../repositories/supplyChain/poRepository';
import { IPurchaseOrder } from '../../models/supplyChain/PurchaseOrder';
import { CreatePurchaseOrderDTO, ApprovePODTO } from '../../types/supplyChain';

export class POService {
  static async getAllPOs(tenantId: string, filters: any = {}): Promise<IPurchaseOrder[]> {
    return poRepository.find({ tenantId, ...filters });
  }

  static async getPOById(id: string, tenantId: string): Promise<IPurchaseOrder | null> {
    return poRepository.findOne({ _id: id, tenantId });
  }

  static async createPO(dto: CreatePurchaseOrderDTO): Promise<IPurchaseOrder> {
    // Generate PO number
    const count = await poRepository.countDocuments({ tenantId: dto.tenantId });
    const poNumber = `PO-${dto.tenantId.toString().slice(-4).toUpperCase()}-${String(count + 1).padStart(5, '0')}`;
    return poRepository.create({ ...dto, poNumber, status: 'draft' });
  }

  static async submitPO(id: string, tenantId: string): Promise<IPurchaseOrder | null> {
    return poRepository.update(
      { _id: id, tenantId, status: 'draft' },
      { $set: { status: 'submitted', submittedAt: new Date() } }
    );
  }

  static async approvePO(dto: ApprovePODTO): Promise<IPurchaseOrder | null> {
    return poRepository.update(
      { _id: dto.poId, status: 'submitted' },
      {
        $set: {
          status: dto.status === 'approved' ? 'approved' : 'cancelled',
          approverId: dto.approverId,
          approvalRemarks: dto.remarks,
          actionedAt: new Date(),
        },
      }
    );
  }

  static async cancelPO(id: string, tenantId: string, reason: string): Promise<IPurchaseOrder | null> {
    return poRepository.update(
      { _id: id, tenantId, status: { $in: ['draft', 'submitted'] } },
      { $set: { status: 'cancelled', cancellationReason: reason } }
    );
  }

  static async getPOsByVendor(vendorId: string, tenantId: string): Promise<IPurchaseOrder[]> {
    return poRepository.find({ vendorId, tenantId });
  }

  static async getPendingApprovals(tenantId: string): Promise<IPurchaseOrder[]> {
    return poRepository.find({ tenantId, status: 'submitted' });
  }

  static async getPOSummary(tenantId: string) {
    const data = await poRepository.aggregate([
      { $match: { tenantId } },
      { $group: { _id: '$status', count: { $sum: 1 }, totalValue: { $sum: '$totalAmount' } } },
    ]);
    return data;
  }
}

export default POService;
