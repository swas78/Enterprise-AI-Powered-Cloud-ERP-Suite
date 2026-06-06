export type ProjectStatus = 'planning' | 'active' | 'on_hold' | 'completed' | 'cancelled';
export type TaskStatus = 'todo' | 'in_progress' | 'review' | 'done' | 'blocked';
export type TaskPriority = 'low' | 'medium' | 'high' | 'critical';
export type ResourceType = 'human' | 'equipment' | 'material' | 'software';
export type BudgetStatus = 'draft' | 'approved' | 'active' | 'overrun' | 'closed';

export interface CreateProjectDTO {
  name: string;
  description?: string;
  startDate: Date;
  endDate: Date;
  budget?: number;
  currency?: string;
  managerId: string;
  memberIds?: string[];
  tenantId: string;
}

export interface UpdateProjectDTO extends Partial<CreateProjectDTO> {
  status?: ProjectStatus;
  completionPercentage?: number;
}

export interface CreateTaskDTO {
  projectId: string;
  title: string;
  description?: string;
  assigneeId?: string;
  priority: TaskPriority;
  dueDate?: Date;
  estimatedHours?: number;
  parentTaskId?: string;
  tags?: string[];
  tenantId: string;
}

export interface UpdateTaskDTO extends Partial<CreateTaskDTO> {
  status?: TaskStatus;
  actualHours?: number;
  completedAt?: Date;
}

export interface AllocateResourceDTO {
  projectId: string;
  resourceType: ResourceType;
  resourceId: string;
  allocationPercentage: number;
  startDate: Date;
  endDate: Date;
  hourlyRate?: number;
  tenantId: string;
}

export interface CreateBudgetDTO {
  projectId: string;
  totalBudget: number;
  currency: string;
  categories: BudgetCategoryDTO[];
  tenantId: string;
  approvedBy?: string;
}

export interface BudgetCategoryDTO {
  name: string;
  allocatedAmount: number;
  description?: string;
}

export interface BudgetVarianceReport {
  projectId: string;
  totalBudget: number;
  totalSpent: number;
  variance: number;
  variancePercentage: number;
  categories: {
    name: string;
    allocated: number;
    spent: number;
    variance: number;
  }[];
}

export interface GanttChartData {
  projectId: string;
  tasks: {
    id: string;
    title: string;
    startDate: Date;
    endDate: Date;
    status: TaskStatus;
    dependencies?: string[];
    assignee?: string;
  }[];
}
