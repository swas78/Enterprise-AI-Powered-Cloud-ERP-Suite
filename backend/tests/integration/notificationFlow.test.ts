import request from 'supertest';
import mongoose from 'mongoose';
import http from 'http';
import crypto from 'crypto';
import app from '../../src/index';
import { Tenant } from '../../src/models/Tenant';
import { User } from '../../src/models/User';
import { NotificationPreference } from '../../src/models/notification/NotificationPreference';
import { WebhookSubscription } from '../../src/models/notification/WebhookSubscription';
import { redisClient } from '../../src/config/redis';
import { eventBus } from '../../src/utils/eventBus';

describe('🚀 Amdox ERP Notification Engine Integration Flow Test', () => {
  let token: string;
  let tenantId: string;
  let userId: string;
  let mockWebhookServer: http.Server;
  let receivedWebhookHeaders: http.IncomingHttpHeaders;
  let receivedWebhookBody: any;
  const WEBHOOK_PORT = 9999;
  const WEBHOOK_SECRET = 'my-webhook-secret';

  beforeAll(async () => {
    // Wait for database connection to be established
    if (mongoose.connection.readyState !== 1) {
      await new Promise((resolve) => mongoose.connection.once('open', resolve));
    }

    // 1. Reset Database Collections and Redis
    await Tenant.deleteMany({});
    await User.deleteMany({});
    await NotificationPreference.deleteMany({});
    await WebhookSubscription.deleteMany({});
    await redisClient.flushall();

    // 2. Initialize active Tenant
    const tenant = await Tenant.create({
      name: 'Notifications Test Corp',
      subdomain: 'notifcorp',
    });
    tenantId = tenant._id.toString();

    // 3. Create TenantAdmin User & authenticate to get JWT token
    const user = await User.create({
      name: 'Notifications Admin',
      email: 'notif.admin@amdox.com',
      password: 'notifadminpassword',
      role: 'TenantAdmin',
      tenantId,
    });
    userId = user._id.toString();

    const loginRes = await request(app)
      .post('/api/v1/auth/login')
      .send({ email: 'notif.admin@amdox.com', password: 'notifadminpassword' });

    token = loginRes.body.data.accessToken;

    // 4. Setup mock webhook receiver server
    mockWebhookServer = http.createServer((req, res) => {
      let body = '';
      req.on('data', (chunk) => {
        body += chunk;
      });
      req.on('end', () => {
        receivedWebhookHeaders = req.headers;
        try {
          receivedWebhookBody = JSON.parse(body);
        } catch (e) {
          receivedWebhookBody = body;
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ received: true }));
      });
    });

    await new Promise<void>((resolve) => {
      mockWebhookServer.listen(WEBHOOK_PORT, resolve);
    });
  });

  afterAll(async () => {
    // Close servers and connections
    await new Promise<void>((resolve) => {
      mockWebhookServer.close(() => resolve());
    });
    await mongoose.connection.close();
    await redisClient.quit();
  });

  it('Step 1: Should retrieve empty default preferences configuration', async () => {
    const res = await request(app)
      .get('/api/v1/notifications/preferences')
      .set('Authorization', `Bearer ${token}`)
      .set('X-Tenant-ID', tenantId);

    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('success');
    expect(res.body.data.userId).toBe(userId);
    expect(res.body.data.preferences).toBeDefined();
  });

  it('Step 2: Should create or update notification preference overrides', async () => {
    const res = await request(app)
      .put('/api/v1/notifications/preferences')
      .set('Authorization', `Bearer ${token}`)
      .set('X-Tenant-ID', tenantId)
      .send({
        preferences: {
          finance: { inApp: true, email: false, webhook: true },
          scm: { inApp: false, email: true, webhook: true }
        }
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('success');
    expect(res.body.data.preferences.finance.email).toBe(false);
    expect(res.body.data.preferences.scm.inApp).toBe(false);
  });

  it('Step 3: Should register a new Webhook Subscription', async () => {
    const res = await request(app)
      .post('/api/v1/notifications/webhooks')
      .set('Authorization', `Bearer ${token}`)
      .set('X-Tenant-ID', tenantId)
      .send({
        url: `http://127.0.0.1:${WEBHOOK_PORT}/webhook`,
        secret: WEBHOOK_SECRET,
        events: ['finance.*']
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.status).toBe('success');
    expect(res.body.data.url).toBe(`http://127.0.0.1:${WEBHOOK_PORT}/webhook`);
    expect(res.body.data.events).toContain('finance.*');
  });

  it('Step 4: Should retrieve tenant webhook subscriptions list', async () => {
    const res = await request(app)
      .get('/api/v1/notifications/webhooks')
      .set('Authorization', `Bearer ${token}`)
      .set('X-Tenant-ID', tenantId);

    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('success');
    expect(res.body.data.length).toBe(1);
    expect(res.body.data[0].url).toBe(`http://127.0.0.1:${WEBHOOK_PORT}/webhook`);
  });

  it('Step 5: Should trigger Webhook Dispatch via Domain Event Bus and verify HMAC signature security', async () => {
    // Reset received parameters
    receivedWebhookHeaders = {};
    receivedWebhookBody = null;

    const testPayload = {
      tenantId,
      ref: 'JE-TEST-NOTIF-01',
      description: 'Webhook testing entry',
      amount: 5000,
      message: 'Test journal entry logged successfully.'
    };

    // Emit event on EventBus
    eventBus.emit('finance.journal_entry.posted', testPayload);

    // Wait short period for background BullMQ Queue worker processing and HTTP delivery
    await new Promise(resolve => setTimeout(resolve, 2500));

    // Verify webhook was received by our mock local server
    expect(receivedWebhookBody).toBeDefined();
    expect(receivedWebhookBody.ref).toBe('JE-TEST-NOTIF-01');

    // Verify HMAC-SHA256 headers
    const signatureHeader = receivedWebhookHeaders['x-hub-signature-256'] as string;
    expect(signatureHeader).toBeDefined();
    expect(signatureHeader.startsWith('sha256=')).toBe(true);

    const extractedHex = signatureHeader.substring(7);
    const expectedHex = crypto
      .createHmac('sha256', WEBHOOK_SECRET)
      .update(JSON.stringify(testPayload))
      .digest('hex');

    expect(extractedHex).toBe(expectedHex); // Signature matches! Secret is verified.
  });

  it('Step 6: Should allow administrators to access the Bull Board queues dashboard route', async () => {
    const res = await request(app)
      .get('/api/v1/admin/queues')
      .set('Authorization', `Bearer ${token}`)
      .set('X-Tenant-ID', tenantId);

    // Express adapter will return 200 OK dashboard page or redirect to index
    expect([200, 302]).toContain(res.statusCode);
  });
});
