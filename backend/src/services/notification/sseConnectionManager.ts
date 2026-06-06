import { Response } from 'express';
import logger from '../../utils/logger';

export class SseConnectionManager {
  // Key format: `${tenantId}:${userId}`
  private static connections = new Map<string, Response[]>();

  // Add client socket stream connection
  public static addConnection(tenantId: string, userId: string, res: Response) {
    const key = `${tenantId}:${userId}`;
    const active = this.connections.get(key) || [];
    active.push(res);
    this.connections.set(key, active);
    logger.info(`🔌 Registered SSE client socket for User key: ${key} | Active sockets: ${active.length}`);
  }

  // Terminate and remove client socket stream connection
  public static removeConnection(tenantId: string, userId: string, res: Response) {
    const key = `${tenantId}:${userId}`;
    const active = this.connections.get(key) || [];
    const idx = active.indexOf(res);
    if (idx !== -1) {
      active.splice(idx, 1);
    }
    if (active.length === 0) {
      this.connections.delete(key);
    } else {
      this.connections.set(key, active);
    }
    logger.info(`🔌 Terminated SSE client socket for User key: ${key} | Active sockets remaining: ${active.length}`);
  }

  // Push event data to a specific user
  public static emitToUser(tenantId: string, userId: string, eventName: string, data: any) {
    const key = `${tenantId}:${userId}`;
    const active = this.connections.get(key) || [];
    
    active.forEach((res) => {
      res.write(`event: ${eventName}\n`);
      res.write(`data: ${JSON.stringify(data)}\n\n`);
    });
    
    if (active.length > 0) {
      logger.info(`📡 Dispatched SSE event [${eventName}] to ${active.length} active sockets for user: ${userId}`);
    }
  }

  // Push event data to all connected users under a tenant
  public static emitToTenant(tenantId: string, eventName: string, data: any) {
    const prefix = `${tenantId}:`;
    let count = 0;
    
    for (const [key, active] of this.connections.entries()) {
      if (key.startsWith(prefix)) {
        active.forEach((res) => {
          res.write(`event: ${eventName}\n`);
          res.write(`data: ${JSON.stringify(data)}\n\n`);
          count++;
        });
      }
    }
    
    if (count > 0) {
      logger.info(`📡 Dispatched SSE event [${eventName}] to ${count} active sockets under Tenant: ${tenantId}`);
    }
  }
}

export default SseConnectionManager;
