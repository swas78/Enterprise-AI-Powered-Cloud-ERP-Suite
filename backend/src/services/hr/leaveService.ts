import { leaveRepository } from '../../repositories/hr/leaveRepository';
import { ILeave } from '../../models/hr/Leave';
import { CreateLeaveRequestDTO, ApproveLeaveDTO } from '../../types/hr';

export class LeaveService {
  static async getLeavesByEmployee(employeeId: string, tenantId: string): Promise<ILeave[]> {
    return leaveRepository.find({ employeeId, tenantId });
  }

  static async getLeaveById(id: string, tenantId: string): Promise<ILeave | null> {
    return leaveRepository.findOne({ _id: id, tenantId });
  }

  static async getPendingLeaves(tenantId: string): Promise<ILeave[]> {
    return leaveRepository.find({ tenantId, status: 'pending' });
  }

  static async requestLeave(dto: CreateLeaveRequestDTO): Promise<ILeave> {
    const overlapping = await leaveRepository.findOne({
      employeeId: dto.employeeId,
      tenantId: dto.tenantId,
      status: { $in: ['pending', 'approved'] },
      $or: [
        { startDate: { $lte: dto.endDate }, endDate: { $gte: dto.startDate } },
      ],
    });

    if (overlapping) {
      throw new Error('Overlapping leave request already exists for this period.');
    }

    return leaveRepository.create({ ...dto, status: 'pending' });
  }

  static async approveOrRejectLeave(dto: ApproveLeaveDTO): Promise<ILeave | null> {
    return leaveRepository.update(
      { _id: dto.leaveId },
      {
        $set: {
          status: dto.status,
          approverId: dto.approverId,
          remarks: dto.remarks,
          actionedAt: new Date(),
        },
      }
    );
  }

  static async cancelLeave(leaveId: string, tenantId: string): Promise<ILeave | null> {
    return leaveRepository.update(
      { _id: leaveId, tenantId, status: 'pending' },
      { $set: { status: 'cancelled' } }
    );
  }

  static async getLeaveBalance(employeeId: string, tenantId: string, year: number) {
    const startDate = new Date(`${year}-01-01`);
    const endDate = new Date(`${year}-12-31`);

    const approved = await leaveRepository.find({
      employeeId,
      tenantId,
      status: 'approved',
      startDate: { $gte: startDate, $lte: endDate },
    });

    const usedDays = approved.reduce((total, leave) => {
      const diff = Math.ceil(
        (leave.endDate.getTime() - leave.startDate.getTime()) / (1000 * 60 * 60 * 24)
      ) + 1;
      return total + diff;
    }, 0);

    return { year, usedDays, remainingDays: 30 - usedDays };
  }
}

export default LeaveService;
