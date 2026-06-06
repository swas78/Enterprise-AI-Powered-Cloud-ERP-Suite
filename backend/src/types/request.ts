import { Request } from 'express';
import { UserPayload } from './auth';

/** Express Request extended with authenticated user context */
export interface AuthRequest extends Request {
  user?: UserPayload;
  tenantId?: string;
}

/** Express Request extended with tenant context only */
export interface TenantRequest extends Request {
  tenantId?: string;
  user?: UserPayload;
}

/** Pagination query params */
export interface PaginationQuery {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

/** Generic list response wrapper */
export interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

/** Generic filter query */
export interface FilterQuery {
  search?: string;
  startDate?: Date | string;
  endDate?: Date | string;
  status?: string;
  [key: string]: any;
}

/** File upload info (from multer) */
export interface UploadedFile {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  buffer: Buffer;
  path?: string;
  filename?: string;
}
