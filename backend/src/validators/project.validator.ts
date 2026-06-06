import { z } from 'zod';
import { objectIdSchema } from './common.validator';

export const projectSchema = z.object({
  name: z.string().trim().min(1, { message: 'Project name is required' }),
  description: z.string().trim().optional(),
  budget: z.number().nonnegative({ message: 'Budget must be a non-negative number' }),
  startDate: z.string().min(1, { message: 'Start date is required' }),
});

export const taskSchema = z.object({
  projectId: objectIdSchema,
  name: z.string().trim().min(1, { message: 'Task name is required' }),
  assignedTo: z.union([objectIdSchema, z.null()]).optional(),
  status: z.enum(['To Do', 'In Progress', 'Blocked', 'Done']).optional(),
});
