import { Response, NextFunction } from 'express';
import { TenantRequest } from '../types';
import { tenantRepository } from '../repositories/tenantRepository';
import { Controller, Get, Param, Body, Put, UseGuards, Req } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

export class TenantController {
  
  // List all tenants (SuperAdmin only)
  public static async getTenants(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenants = await tenantRepository.find({});
      return res.status(200).json({
        status: 'success',
        data: tenants,
      });
    } catch (error) {
      next(error);
    }
  }

  // Get active tenant details
  public static async getTenantDetails(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      const tenant = await tenantRepository.findById(tenantId);
      if (!tenant) {
        return res.status(404).json({ status: 'error', message: 'Tenant not found.' });
      }

      return res.status(200).json({
        status: 'success',
        data: tenant,
      });
    } catch (error) {
      next(error);
    }
  }

  // Update tenant details
  public static async updateTenant(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.params.id || req.tenantId;
      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant ID or context is missing.' });
      }

      const { name, subdomain } = req.body;
      const updates: any = {};
      if (name) updates.name = name;
      if (subdomain) updates.subdomain = subdomain;

      const updatedTenant = await tenantRepository.update({ _id: tenantId }, { $set: updates });
      if (!updatedTenant) {
        return res.status(404).json({ status: 'error', message: 'Tenant not found.' });
      }

      return res.status(200).json({
        status: 'success',
        message: 'Tenant updated successfully.',
        data: updatedTenant,
      });
    } catch (error) {
      next(error);
    }
  }

  // Suspend tenant (SuperAdmin only)
  public static async suspendTenant(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ status: 'error', message: 'Tenant ID parameter is required.' });
      }

      const updatedTenant = await tenantRepository.update({ _id: id }, { $set: { status: 'suspended' } });
      if (!updatedTenant) {
        return res.status(404).json({ status: 'error', message: 'Tenant not found.' });
      }

      return res.status(200).json({
        status: 'success',
        message: 'Tenant has been suspended.',
        data: updatedTenant,
      });
    } catch (error) {
      next(error);
    }
  }
}

// PRD Strict NestJS Implementation
@Controller('tenants')
export class TenantNestController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async getTenants() {
    return {
      status: 'success',
      data: await this.prisma.tenant.findMany(),
    };
  }

  @Get(':id')
  async getTenantDetails(@Param('id') id: string) {
    return {
      status: 'success',
      data: await this.prisma.tenant.findUnique({ where: { id } }),
    };
  }
}

export default TenantController;
