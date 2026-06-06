import { BaseRepository } from '../baseRepository';
import { Attendance, IAttendance } from '../../models/hr/Attendance';

export class AttendanceRepository extends BaseRepository<IAttendance> {
  constructor() {
    super(Attendance);
  }
}

export const attendanceRepository = new AttendanceRepository();
export default attendanceRepository;
