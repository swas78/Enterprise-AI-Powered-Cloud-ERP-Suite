import { Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';
import { TenantRequest } from '../types';

export const validateSchema = (schema: ZodSchema) => {
  return (req: TenantRequest, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      const formattedErrors = result.error.errors.map((err) => ({
        field: err.path.join('.'),
        message: err.message,
      }));

      return res.status(400).json({
        status: 'error',
        statusCode: 400,
        message: 'Validation failed: Invalid request payload.',
        errors: formattedErrors,
      });
    }

    // Overwrite req.body with the sanitized and parsed value (strips out extra parameters)
    req.body = result.data;
    next();
  };
};

export default validateSchema;
