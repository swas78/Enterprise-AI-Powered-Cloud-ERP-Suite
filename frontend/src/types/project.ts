import { Employee } from './hr';

export interface Project {
  _id: string;
  name: string;
  description?: string;
  budget: number;
  spent: number;
  startDate: string | Date;
  alarmActive?: boolean;
}

export interface Task {
  _id: string;
  projectId: string;
  name: string;
  assignedTo: string | Employee | null;
  status: 'To Do' | 'In Progress' | 'Blocked' | 'Done';
  dependencies: string[];
  startDay?: number;
  durationDays?: number;
}

export interface HeatmapItem {
  employeeId: string;
  employeeName: string;
  taskCount: number;
  status: 'Optimal' | 'Overallocated';
}
