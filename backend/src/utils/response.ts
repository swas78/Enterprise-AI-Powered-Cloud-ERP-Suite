import { Response } from 'express';

export class ResponseFormatter {
  public static success(res: Response, data: any, statusCode: number = 200, message?: string) {
    return res.status(statusCode).json({
      status: 'success',
      statusCode,
      message,
      data,
    });
  }

  public static error(res: Response, message: string, statusCode: number = 500, errors?: any) {
    return res.status(statusCode).json({
      status: 'error',
      statusCode,
      message,
      errors,
    });
  }
}

export default ResponseFormatter;
