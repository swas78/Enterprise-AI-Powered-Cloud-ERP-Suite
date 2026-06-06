import { vendorRepository } from '../../repositories/supplyChain/vendorRepository';
import { IVendor } from '../../models/supplyChain/Vendor';
import { CreateVendorDTO } from '../../types/supplyChain';

export class VendorService {
  static async getAllVendors(tenantId: string, filters: any = {}): Promise<IVendor[]> {
    return vendorRepository.find({ tenantId, ...filters });
  }

  static async getVendorById(id: string, tenantId: string): Promise<IVendor | null> {
    return vendorRepository.findOne({ _id: id, tenantId });
  }

  static async createVendor(dto: CreateVendorDTO): Promise<IVendor> {
    const existing = await vendorRepository.findOne({ email: dto.email, tenantId: dto.tenantId });
    if (existing) throw new Error('A vendor with this email already exists.');
    return vendorRepository.create({ ...dto, status: 'active' });
  }

  static async updateVendor(id: string, tenantId: string, data: Partial<CreateVendorDTO>): Promise<IVendor | null> {
    return vendorRepository.update({ _id: id, tenantId }, { $set: data });
  }

  static async blacklistVendor(id: string, tenantId: string, reason: string): Promise<IVendor | null> {
    return vendorRepository.update(
      { _id: id, tenantId },
      { $set: { status: 'blacklisted', blacklistReason: reason } }
    );
  }

  static async deleteVendor(id: string, tenantId: string): Promise<boolean> {
    const result = await vendorRepository.delete({ _id: id, tenantId });
    return result.deletedCount > 0;
  }

  static async searchVendors(tenantId: string, query: string): Promise<IVendor[]> {
    return vendorRepository.find({
      tenantId,
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { email: { $regex: query, $options: 'i' } },
      ],
    });
  }

  static async getVendorPerformance(vendorId: string, tenantId: string) {
    // Placeholder: aggregate PO completion rate, lead times, etc.
    return {
      vendorId,
      totalOrders: 0,
      onTimeDeliveries: 0,
      avgLeadTimeDays: 0,
      rating: 0,
    };
  }

  static async countVendors(tenantId: string): Promise<number> {
    return vendorRepository.countDocuments({ tenantId });
  }
}

export default VendorService;
