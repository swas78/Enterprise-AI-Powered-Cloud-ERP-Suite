import { BaseRepository } from '../baseRepository';
import { Payment, IPayment } from '../../models/finance/Payment';

class PaymentRepository extends BaseRepository<IPayment> {
  constructor() {
    super(Payment);
  }

  async findByInvoice(invoiceId: string): Promise<IPayment[]> {
    return this.find({ invoiceId });
  }

  async findByTenant(tenantId: string, options: any = {}): Promise<IPayment[]> {
    return this.find({ tenantId }, undefined, options);
  }

  async getTotalPaidForInvoice(invoiceId: string): Promise<number> {
    const result = await this.aggregate([
      { $match: { invoiceId, status: 'completed' } },
      { $group: { _id: null, total: { $sum: '$amount' } } },
    ]);
    return result[0]?.total ?? 0;
  }

  async findByStatus(tenantId: string, status: string): Promise<IPayment[]> {
    return this.find({ tenantId, status });
  }

  async findByDateRange(tenantId: string, from: Date, to: Date): Promise<IPayment[]> {
    return this.find({ tenantId, paymentDate: { $gte: from, $lte: to } });
  }
}

export const paymentRepository = new PaymentRepository();
export default paymentRepository;
