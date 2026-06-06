import { Schema, model, Document } from 'mongoose';

export interface ITask extends Document {
  tenantId: Schema.Types.ObjectId;
  projectId: Schema.Types.ObjectId;
  name: string;
  dependencies: Schema.Types.ObjectId[]; // Task predecessors
  assignedTo?: Schema.Types.ObjectId; // Employee reference
  status: 'To Do' | 'In Progress' | 'Blocked' | 'Done';
  startDay: number;
  durationDays: number;
  createdAt: Date;
  updatedAt: Date;
}

const TaskSchema = new Schema<ITask>(
  {
    tenantId: {
      type: Schema.Types.ObjectId,
      ref: 'Tenant',
      required: true,
    },
    projectId: {
      type: Schema.Types.ObjectId,
      ref: 'Project',
      required: true,
    },
    name: {
      type: String,
      required: [true, 'Task name is required'],
      trim: true,
    },
    dependencies: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Task',
      },
    ],
    assignedTo: {
      type: Schema.Types.ObjectId,
      ref: 'Employee',
      default: null,
    },
    status: {
      type: String,
      enum: ['To Do', 'In Progress', 'Blocked', 'Done'],
      default: 'To Do',
    },
    startDay: {
      type: Number,
      default: 1,
    },
    durationDays: {
      type: Number,
      default: 3,
    },
  },
  {
    timestamps: true,
  }
);

// Indexes
TaskSchema.index({ tenantId: 1 });
TaskSchema.index({ projectId: 1 });
TaskSchema.index({ assignedTo: 1 });

export const Task = model<ITask>('Task', TaskSchema);
export default Task;
