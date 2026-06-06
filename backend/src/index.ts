import express from 'express';
import corsMiddleware from './middleware/cors.middleware';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { connectDatabase } from './config/database';
import errorHandler from './middleware/errorHandler.middleware';
import requestLogger from './middleware/requestLogger.middleware';
import { tenantContextMiddleware } from './middleware/tenantContext.middleware';
import logger from './utils/logger';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5005;

// Enable security headers and CORS
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"], // Allow Swagger UI scripts
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:"],
    }
  },
  crossOriginEmbedderPolicy: false,
  xFrameOptions: { action: 'deny' },
  referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
}));

app.use(corsMiddleware);

// Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// HTTP Request logging
app.use(morgan('dev'));
app.use(requestLogger);
app.use(tenantContextMiddleware);

// Import and mount master api router
import mainRouter from './routes';
import mongoose from 'mongoose';
import { redisClient } from './config/redis';
import { getApiDocsHtml } from './utils/apiDocs';
import { apiRateLimiter } from './middleware/rateLimiter.middleware';
import { CsrfProtection } from './middleware/csrf.middleware';

app.use('/api/v1', apiRateLimiter, CsrfProtection.verify, mainRouter);

// Interactive API Documentation endpoint
app.get('/api-docs', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(getApiDocsHtml());
});

// Health Check Endpoints
app.get('/health/live', (req, res) => {
  res.status(200).json({ status: 'UP', timestamp: new Date() });
});

app.get('/health/ready', async (req, res) => {
  const dbConnected = mongoose.connection.readyState === 1;
  const cacheConnected = redisClient.status === 'ready';

  const isReady = dbConnected && cacheConnected;

  res.status(isReady ? 200 : 503).json({
    status: isReady ? 'READY' : 'DOWN',
    timestamp: new Date(),
    services: {
      database: dbConnected ? 'UP' : 'DOWN',
      cache: cacheConnected ? 'UP' : 'DOWN',
    },
  });
});

// Centralized error handler
app.use(errorHandler);

import { startPayrollWorker } from './jobs/payrollJob';
import { startEmailWorker } from './jobs/emailJob';
import { startWebhookWorker } from './jobs/webhookJob';
import { startForecastingWorker } from './jobs/forecastingJob';
import { startReportGenerationWorker } from './jobs/reportGenerationJob';
import { startDataCleanupWorker } from './jobs/dataCleanupJob';
import { startCurrencyUpdateWorker } from './jobs/currencyUpdateJob';
import { startNotificationWorker } from './jobs/notificationJob';
import { startInventoryReorderWorker } from './jobs/inventoryReorderJob';
import { NotificationMulticaster } from './services/notification/notificationMulticaster';

import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

// Bootstrap
const bootstrap = async () => {
  try {
    // Keep legacy MongoDB connection active until full data migration
    await connectDatabase();
    
    // Start background queue workers
    startPayrollWorker();
    startEmailWorker();
    startWebhookWorker();
    startForecastingWorker();
    startReportGenerationWorker();
    startDataCleanupWorker();
    startCurrencyUpdateWorker();
    startNotificationWorker();
    startInventoryReorderWorker();

    // Start process-wide domain event multicaster listeners
    NotificationMulticaster.init();

    // Initialize NestJS and mount it onto the existing Express app
    const adapter = new ExpressAdapter(app);
    // Monkey patch to fix Express 4.x app.router deprecation error in NestJS 11
    (adapter as any).isMiddlewareApplied = function(middleware: any) {
      const router = app._router;
      return router?.stack?.some((layer: any) => layer.handle === middleware) || false;
    };

    const nestApp = await NestFactory.create(
      AppModule,
      adapter,
    );
    nestApp.setGlobalPrefix('api/v2'); // New strict PRD endpoints will live under v2

    // F-11: OpenAPI 3.1 Swagger Setup
    const config = new DocumentBuilder()
      .setTitle('AMDOX ERP API')
      .setDescription('OpenAPI 3.1 Documentation for AMDOX ERP Enterprise APIs')
      .setVersion('1.0')
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(nestApp, config);
    SwaggerModule.setup('api/v2/docs', nestApp, document);

    await nestApp.init();

    if (process.env.NODE_ENV !== 'test') {
      app.listen(PORT, () => {
        logger.info(`Amdox ERP Backend service running on port ${PORT} (Express v1 + NestJS v2)`);
        logger.info(`OpenAPI Docs available at http://localhost:${PORT}/api/v2/docs`);
      });
    }
  } catch (error) {
    logger.error('Failed to bootstrap the server:', error);
    process.exit(1);
  }
};

bootstrap();

export default app;
