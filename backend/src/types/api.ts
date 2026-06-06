/** Standard API success response envelope */
export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  meta?: ApiMeta;
}

/** Standard API error response */
export interface ApiErrorResponse {
  success: false;
  message: string;
  error?: string;
  code?: string;
  details?: any;
}

/** Pagination metadata */
export interface ApiMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}

/** Generic paginated API response */
export interface PaginatedApiResponse<T = any> extends ApiResponse<T[]> {
  meta: ApiMeta;
}

/** Standard sort/filter options for list queries */
export interface ListQueryOptions {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  search?: string;
  tenantId?: string;
  startDate?: string;
  endDate?: string;
  status?: string;
}

/** Health check response */
export interface HealthCheckResponse {
  status: 'ok' | 'degraded' | 'error';
  uptime: number;
  timestamp: Date;
  services: {
    database: 'connected' | 'disconnected';
    redis: 'connected' | 'disconnected';
    queue: 'running' | 'stopped';
  };
}

/** Export format options */
export type ExportFormat = 'csv' | 'xlsx' | 'pdf' | 'json';

export interface ExportRequestDTO {
  format: ExportFormat;
  module: string;
  filters?: Record<string, any>;
  columns?: string[];
  tenantId: string;
  requestedBy: string;
}

/** Webhook delivery attempt log */
export interface WebhookDeliveryLog {
  webhookId: string;
  eventType: string;
  statusCode: number;
  success: boolean;
  responseBody?: string;
  attemptNumber: number;
  deliveredAt: Date;
}
