import { BaseRepository } from '../baseRepository';
import { Vendor, IVendor } from '../../models/supplyChain/Vendor';

export class VendorRepository extends BaseRepository<IVendor> {
  constructor() {
    super(Vendor);
  }
}

export const vendorRepository = new VendorRepository();
export default vendorRepository;
