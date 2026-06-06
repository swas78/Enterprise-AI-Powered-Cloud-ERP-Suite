import { Connection } from 'mongoose';

/** MongoDB connection state */
export type DatabaseStatus = 'connected' | 'disconnected' | 'connecting' | 'error';

/** Database connection info */
export interface DatabaseInfo {
  status: DatabaseStatus;
  host: string;
  name: string;
  readyState: number;
}

/** Mongoose connection instance wrapper */
export interface DatabaseConnection {
  connection: Connection;
  isConnected: boolean;
}

/** Redis connection info */
export interface RedisInfo {
  status: 'connected' | 'disconnected';
  host: string;
  port: number;
}

/** Generic MongoDB document with timestamps */
export interface BaseDocument {
  _id: string;
  tenantId: string;
  createdAt: Date;
  updatedAt: Date;
}

/** Audit trail entry */
export interface AuditEntry {
  _id?: string;
  action: 'create' | 'update' | 'delete' | 'login' | 'logout' | 'export' | string;
  model: string;
  documentId?: string;
  userId: string;
  tenantId: string;
  before?: Record<string, any>;
  after?: Record<string, any>;
  ipAddress?: string;
  userAgent?: string;
  timestamp: Date;
}

/** Repository query options */
export interface RepositoryOptions {
  session?: any;
  lean?: boolean;
  populate?: string | string[];
  projection?: Record<string, 0 | 1>;
}

/** Aggregation pipeline stage helper */
export type AggregatePipeline = Record<string, any>[];

/** Index definition for MongoDB collections */
export interface IndexDefinition {
  collection: string;
  fields: Record<string, 1 | -1 | 'text'>;
  options?: {
    unique?: boolean;
    sparse?: boolean;
    background?: boolean;
    expireAfterSeconds?: number;
  };
}
