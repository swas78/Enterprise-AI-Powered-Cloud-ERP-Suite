import { z } from 'zod';

export const webhookSubscriptionSchema = z.object({
  url: z.string().url({ message: 'Must be a valid web target URL' }),
  secret: z.string().trim().min(5, { message: 'HMAC Secret must be at least 5 characters long' }),
  events: z.array(z.string().min(1)).min(1, { message: 'At least one event subscription string is required' }),
});
