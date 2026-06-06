import { z } from 'zod';
import { objectIdSchema } from './common.validator';

export const employeeCreateSchema = z.object({
  name: z.string().trim().min(1),
  email: z.string().trim().toLowerCase().email(),
  department: z.string().trim().min(1),
  role: z.string().trim().min(1),
  salary: z.number().positive(),
  managerId: objectIdSchema.optional()
});
