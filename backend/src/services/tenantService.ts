import { tenantRepository } from '../repositories/tenantRepository';
import { ITenant } from '../models/Tenant';

export class TenantService {
  /** Get all tenants (SuperAdmin only) */
  static async getAllTenants(): Promise<ITenant[]> {
    return tenantRepository.find({});
  }

  /** Get a tenant by ID */
  static async getTenantById(tenantId: string): Promise<ITenant | null> {
    return tenantRepository.findById(tenantId);
  }

  /** Get a tenant by name */
  static async getTenantByName(name: string): Promise<ITenant | null> {
    return tenantRepository.findOne({ name });
  }

  /** Create a new tenant */
  static async createTenant(data: { name: string; domain?: string; plan?: string }): Promise<ITenant> {
    return tenantRepository.create(data);
  }

  /** Update tenant information */
  static async updateTenant(tenantId: string, data: Partial<ITenant>): Promise<ITenant | null> {
    return tenantRepository.update({ _id: tenantId }, { $set: data });
  }

  /** Suspend a tenant */
  static async suspendTenant(tenantId: string): Promise<ITenant | null> {
    return tenantRepository.update({ _id: tenantId }, { $set: { status: 'suspended' } });
  }

  /** Activate a suspended tenant */
  static async activateTenant(tenantId: string): Promise<ITenant | null> {
    return tenantRepository.update({ _id: tenantId }, { $set: { status: 'active' } });
  }

  /** Delete a tenant permanently */
  static async deleteTenant(tenantId: string): Promise<boolean> {
    const result = await tenantRepository.delete({ _id: tenantId });
    return result.deletedCount > 0;
  }

  /** Count total tenants */
  static async countTenants(): Promise<number> {
    return tenantRepository.countDocuments({});
  }
}

export default TenantService;
