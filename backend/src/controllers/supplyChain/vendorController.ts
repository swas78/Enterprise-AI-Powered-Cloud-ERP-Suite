import { Response, NextFunction } from 'express';
import { TenantRequest } from '../../types';
import { vendorRepository } from '../../repositories/supplyChain/vendorRepository';

export class VendorController {
  
  // Register a new Vendor supplier
  public static async createVendor(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      const { name, email, code } = req.body;

      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      if (!name || !email || !code) {
        return res.status(400).json({ status: 'error', message: 'Missing parameters: name, email, code' });
      }

      const existing = await vendorRepository.findOne({ tenantId, code });
      if (existing) {
        return res.status(400).json({ status: 'error', message: `Vendor with code [${code}] already exists.` });
      }

      const vendor = await vendorRepository.create({
        tenantId,
        name,
        email,
        code,
      });

      return res.status(201).json({
        status: 'success',
        statusCode: 201,
        message: 'Vendor profile created.',
        data: vendor,
      });
    } catch (error: any) {
      next(error);
    }
  }

  // Get active Vendor rosters
  public static async getVendors(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      const vendors = await vendorRepository.find({ tenantId });
      return res.status(200).json({ status: 'success', data: vendors });
    } catch (error: any) {
      next(error);
    }
  }
}

export default VendorController;
