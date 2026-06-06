import { attendanceRepository } from '../../repositories/hr/attendanceRepository';
import { IAttendance } from '../../models/hr/Attendance';
import { MarkAttendanceDTO } from '../../types/hr';

export class AttendanceService {
  static async markAttendance(dto: MarkAttendanceDTO): Promise<IAttendance> {
    // Prevent duplicate attendance for same employee on same date
    const existing = await attendanceRepository.findOne({
      employeeId: dto.employeeId,
      tenantId: dto.tenantId,
      date: dto.date,
    });
    if (existing) {
      // Update instead of creating duplicate
      return (await attendanceRepository.update(
        { _id: existing._id },
        { $set: dto }
      )) as IAttendance;
    }
    return attendanceRepository.create(dto);
  }

  static async getAttendanceByEmployee(
    employeeId: string,
    tenantId: string,
    from?: Date,
    to?: Date
  ): Promise<IAttendance[]> {
    const filter: any = { employeeId, tenantId };
    if (from || to) {
      filter.date = {};
      if (from) filter.date.$gte = from;
      if (to) filter.date.$lte = to;
    }
    return attendanceRepository.find(filter);
  }

  static async getAttendanceByDate(tenantId: string, date: Date): Promise<IAttendance[]> {
    return attendanceRepository.find({ tenantId, date });
  }

  static async getMonthlyAttendanceSummary(employeeId: string, tenantId: string, month: number, year: number) {
    const from = new Date(year, month - 1, 1);
    const to = new Date(year, month, 0);

    const records = await this.getAttendanceByEmployee(employeeId, tenantId, from, to);

    const summary = records.reduce(
      (acc, record) => {
        acc[record.status] = (acc[record.status] ?? 0) + 1;
        return acc;
      },
      {} as Record<string, number>
    );

    return { employeeId, month, year, summary, totalDays: records.length };
  }

  static async clockIn(employeeId: string, tenantId: string): Promise<IAttendance> {
    return this.markAttendance({
      employeeId,
      tenantId,
      date: new Date(),
      checkIn: new Date(),
      status: 'present',
    });
  }

  static async clockOut(employeeId: string, tenantId: string): Promise<IAttendance | null> {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const record = await attendanceRepository.findOne({ employeeId, tenantId, date: today });
    if (!record) throw new Error('No clock-in record found for today.');
    return attendanceRepository.update({ _id: record._id }, { $set: { checkOut: new Date() } });
  }
}

export default AttendanceService;
