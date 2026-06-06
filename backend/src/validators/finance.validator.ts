import { z } from 'zod';
import { objectIdSchema } from './common.validator';

const apInvoiceItemSchema = z.object({
  sku: z.string().trim().min(1, { message: 'SKU is required' }),
  description: z.string().trim().optional(),
  quantity: z.number().int().positive({ message: 'Quantity must be a positive integer' }),
  unitPrice: z.number().positive({ message: 'Unit price must be a positive number' }),
});

export const apInvoiceSchema = z.object({
  invoiceNumber: z.string().trim().min(1, { message: 'Invoice number is required' }),
  supplierName: z.string().trim().min(1, { message: 'Supplier name is required' }),
  dueDate: z.string().min(1, { message: 'Due date is required' }),
  poId: objectIdSchema,
  grId: objectIdSchema,
  items: z.array(apInvoiceItemSchema).min(1, { message: 'At least one invoice item is required' }),
});
