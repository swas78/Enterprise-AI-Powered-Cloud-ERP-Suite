import { BaseRepository } from './baseRepository';
import { Tenant, ITenant } from '../models/Tenant';

export class TenantRepository extends BaseRepository<ITenant> {
  constructor() {
    super(Tenant);
  }
}

export const tenantRepository = new TenantRepository();
export default tenantRepository;
