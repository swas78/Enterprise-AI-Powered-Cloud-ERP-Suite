import { Response, NextFunction } from 'express';
import { TenantRequest } from '../../types';
import { DashboardService } from '../../services/dashboard/dashboardService';
import logger from '../../utils/logger';

export class WidgetController {
  
  // Retrieve default dashboard widget configs
  public static async getLayout(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      const layout = await DashboardService.getDashboardLayout(tenantId);
      return res.status(200).json({ status: 'success', data: layout });
    } catch (error: any) {
      next(error);
    }
  }

  // Save custom dashboard layouts configuration
  public static async saveLayout(req: TenantRequest, res: Response, next: NextFunction) {
    try {
      const tenantId = req.tenantId;
      const { name, widgets } = req.body;

      if (!tenantId) {
        return res.status(400).json({ status: 'error', message: 'Tenant context is missing.' });
      }

      if (!name || !widgets || !Array.isArray(widgets)) {
        return res.status(400).json({ status: 'error', message: 'Please provide dashboard name and widgets array.' });
      }

      const layout = await DashboardService.saveDashboardLayout(tenantId, name, widgets);
      return res.status(200).json({ status: 'success', data: layout });
    } catch (error: any) {
      next(error);
    }
  }

  // Expose real-time dashboard updates via Server-Sent Events (SSE)
  public static async streamRealTimeMetrics(req: TenantRequest, res: Response, next: NextFunction) {
    const tenantId = req.tenantId || (req.query.tenantId as string);

    if (!tenantId) {
      return res.status(400).json({ status: 'error', message: 'Tenant identifier is required for SSE telemetry.' });
    }

    // Set HTTP headers for SSE stream connection
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Access-Control-Allow-Origin', '*'); // Prevent CORS blocks on browser listeners

    logger.info(`🔌 Established SSE telemetry stream connection for Tenant: ${tenantId}`);

    // Send initial packet immediately
    try {
      const initialMetrics = await DashboardService.compileRealTimeMetrics(tenantId);
      res.write(`data: ${JSON.stringify(initialMetrics)}\n\n`);
    } catch (err: any) {
      logger.error(`❌ SSE initial send failed: ${err.message}`);
    }

    // Set up repeating task to dispatch metrics every 5 seconds
    const intervalId = setInterval(async () => {
      try {
        const metrics = await DashboardService.compileRealTimeMetrics(tenantId);
        res.write(`data: ${JSON.stringify(metrics)}\n\n`);
      } catch (err: any) {
        logger.error(`❌ SSE repeat query failed: ${err.message}`);
      }
    }, 5000);

    // Safely clear intervals on client disconnects to prevent memory leaks
    req.on('close', () => {
      clearInterval(intervalId);
      logger.info(`🔌 Terminated SSE telemetry stream connection for Tenant: ${tenantId}`);
      res.end();
    });
  }
}

export default WidgetController;
