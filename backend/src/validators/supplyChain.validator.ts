import { z } from 'zod';
import { objectIdSchema } from './common.validator';

export const purchaseOrderSchema = z.object({
  vendorId: objectIdSchema,
  items: z.array(
    z.object({
      sku: z.string().trim().min(1),
      quantity: z.number().positive(),
      price: z.number().positive()
    })
  ).min(1)
});
