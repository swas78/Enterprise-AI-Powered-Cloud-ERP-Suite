import { z } from 'zod';

export const objectIdRegex = /^[0-9a-fA-F]{24}$/;
export const objectIdSchema = z.string().regex(objectIdRegex, { message: 'Must be a valid 24-character hexadecimal ObjectId' });
