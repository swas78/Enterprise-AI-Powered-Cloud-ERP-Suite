const express         = require('express');
const cors            = require('cors');
const helmet          = require('helmet');
const rateLimit       = require('express-rate-limit');
const env             = require('./src/config/env');
const logger          = require('./src/utils/logger');
const routes          = require('./src/routes/index');
const errorHandler    = require('./src/middleware/errorHandler.middleware');
const requestLogger   = require('./src/middleware/requestLogger.middleware');

const app = express();

// ── Security: Helmet headers ──────────────
app.use(helmet());

// ── Rate Limiting ─────────────────────────
// Global: 100 requests per 15 minutes per IP
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, error: 'Too many requests, please try again later.' },
});

// Strict: 10 requests per 15 minutes on auth routes
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, error: 'Too many login attempts, please try again later.' },
});

app.use('/api', globalLimiter);
app.use('/api/auth', authLimiter);

// ── Global Middleware ─────────────────────
app.use(cors({
  origin: ['http://localhost:8080', 'http://localhost:3000'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ── Log every request (method + path + status + duration) ────────────
app.use(requestLogger);

// ── All API routes under /api ─────────────────
app.use('/api', routes);

// ── Health check ──────────────────────────────
app.get('/health', (_req, res) =>
  res.json({ status: 'ok', env: env.nodeEnv, time: new Date() })
);

// ── 404 ───────────────────────────────────────
app.use((_req, res) =>
  res.status(404).json({ success: false, error: 'Route not found' })
);

// ── Global error handler (always last) ────────
app.use(errorHandler);

app.listen(env.port, () =>
  logger.info(`ERP backend running on port ${env.port}`)
);