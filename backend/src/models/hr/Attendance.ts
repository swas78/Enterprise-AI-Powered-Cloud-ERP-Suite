import { Schema, model, Document } from 'mongoose';

export interface IAttendance extends Document {
  tenantId: Schema.Types.ObjectId;
  employeeId: Schema.Types.ObjectId;
  date: Date;
  clockIn: Date;
  clockOut?: Date;
  workHours?: number;
  overtimeHours?: number;
  status: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const AttendanceSchema = new Schema<IAttendance>(
  {
    tenantId: {
      type: Schema.Types.ObjectId,
      ref: 'Tenant',
      required: true,
    },
    employeeId: {
      type: Schema.Types.ObjectId,
      ref: 'Employee',
      required: true,
    },
    date: {
      type: Date,
      required: true,
      default: () => {
        const d = new Date();
        d.setUTCHours(0, 0, 0, 0); // Standardize to midnight for indexing daily records
        return d;
      },
    },
    clockIn: {
      type: Date,
      required: true,
      default: Date.now,
    },
    clockOut: {
      type: Date,
    },
    workHours: {
      type: Number,
    },
    overtimeHours: {
      type: Number,
    },
    status: {
      type: String,
      required: true,
      enum: ['present', 'absent', 'late', 'half_day', 'holiday', 'weekend'],
      default: 'present',
    },
    notes: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
AttendanceSchema.index({ tenantId: 1 });
AttendanceSchema.index({ tenantId: 1, employeeId: 1, date: 1 }, { unique: true }); // Prevent duplicate punch card entries on the same day

export const Attendance = model<IAttendance>('Attendance', AttendanceSchema);
export default Attendance;
