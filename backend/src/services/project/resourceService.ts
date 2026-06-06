import { BaseRepository } from '../../repositories/baseRepository';
import { Resource, IResource } from '../../models/project/Resource';
import { AllocateResourceDTO } from '../../types/project';

const resourceRepo = new BaseRepository<IResource>(Resource);

export class ResourceService {
  static async getResourcesByProject(projectId: string, tenantId: string): Promise<IResource[]> {
    return resourceRepo.find({ projectId, tenantId });
  }

  static async getResourceById(id: string, tenantId: string): Promise<IResource | null> {
    return resourceRepo.findOne({ _id: id, tenantId });
  }

  static async allocateResource(dto: AllocateResourceDTO): Promise<IResource> {
    // Check for over-allocation of human resources
    if (dto.resourceType === 'human' && dto.resourceId) {
      const existing = await resourceRepo.find({
        userId: dto.resourceId,
        tenantId: dto.tenantId,
        startDate: { $lte: dto.endDate },
        endDate: { $gte: dto.startDate },
      });

      const totalAllocation = existing.reduce((sum, r) => sum + r.allocationPercentage, 0);
      if (totalAllocation + dto.allocationPercentage > 100) {
        throw new Error(
          `Resource would be over-allocated (${totalAllocation + dto.allocationPercentage}% > 100%)`
        );
      }
    }

    return resourceRepo.create({
      name: dto.resourceId,
      type: dto.resourceType,
      projectId: dto.projectId,
      userId: dto.resourceType === 'human' ? dto.resourceId : undefined,
      tenantId: dto.tenantId,
      allocationPercentage: dto.allocationPercentage,
      startDate: dto.startDate,
      endDate: dto.endDate,
      hourlyRate: dto.hourlyRate,
    });
  }

  static async updateResourceAllocation(
    id: string,
    tenantId: string,
    data: Partial<AllocateResourceDTO>
  ): Promise<IResource | null> {
    return resourceRepo.update({ _id: id, tenantId }, { $set: data });
  }

  static async deallocateResource(id: string, tenantId: string): Promise<boolean> {
    const result = await resourceRepo.delete({ _id: id, tenantId });
    return result.deletedCount > 0;
  }

  static async getResourceUtilization(tenantId: string) {
    return resourceRepo.aggregate([
      { $match: { tenantId, type: 'human' } },
      { $group: { _id: '$userId', avgAllocation: { $avg: '$allocationPercentage' }, projects: { $sum: 1 } } },
    ]);
  }
}

export default ResourceService;
