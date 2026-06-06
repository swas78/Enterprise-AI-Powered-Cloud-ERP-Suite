export * from './auth';
export * from './finance';
export * from './hr';
export * from './supplyChain';
export * from './project';
export * from './dashboard';
export interface ApiError {
  status: string;
  statusCode: number;
  message: string;
  errors?: Array<{ field: string; message: string }>;
}
