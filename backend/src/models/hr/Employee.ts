import { Schema, model, Document } from 'mongoose';

export interface IEmployee extends Document {
  tenantId: Schema.Types.ObjectId;
  name: string;
  email: string;
  department: string;
  role: string;
  salary: number;
  managerId?: Schema.Types.ObjectId; // Hierarchical mapping
  status: 'Active' | 'OnLeave' | 'Terminated';
  createdAt: Date;
  updatedAt: Date;
}

const EmployeeSchema = new Schema<IEmployee>(
  {
    tenantId: {
      type: Schema.Types.ObjectId,
      ref: 'Tenant',
      required: true,
    },
    name: {
      type: String,
      required: [true, 'Employee name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Employee email address is required'],
      trim: true,
      lowercase: true,
    },
    department: {
      type: String,
      required: [true, 'Department assignment is required'],
      trim: true,
    },
    role: {
      type: String,
      required: [true, 'Role/Title assignment is required'],
      trim: true,
    },
    salary: {
      type: Number,
      required: [true, 'Employee salary rate is required'],
      min: [0, 'Salary cannot be negative'],
    },
    managerId: {
      type: Schema.Types.ObjectId,
      ref: 'Employee',
      default: null,
    },
    status: {
      type: String,
      enum: ['Active', 'OnLeave', 'Terminated'],
      default: 'Active',
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
EmployeeSchema.index({ tenantId: 1 });
EmployeeSchema.index({ tenantId: 1, email: 1 }, { unique: true });
EmployeeSchema.index({ managerId: 1 });

export const Employee = model<IEmployee>('Employee', EmployeeSchema);
export default Employee;
