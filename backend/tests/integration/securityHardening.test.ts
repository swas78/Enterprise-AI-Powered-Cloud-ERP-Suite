import request from 'supertest';
import mongoose from 'mongoose';
import app from '../../src/index';
import { Tenant } from '../../src/models/Tenant';
import { User } from '../../src/models/User';
import { redisClient } from '../../src/config/redis';

describe('🛡️ Amdox ERP Security Hardening Integration Flow Test', () => {
  let token: string;
  let tenantId: string;
  let userId: string;

  beforeAll(async () => {
    // Wait for database connection
    if (mongoose.connection.readyState !== 1) {
      await new Promise((resolve) => mongoose.connection.once('open', resolve));
    }

    // 1. Reset Database collections
    await Tenant.deleteMany({});
    await User.deleteMany({});

    // 2. Initialize active Tenant
    const tenant = await Tenant.create({
      name: 'Security Hardening Corp',
      subdomain: 'seccorp',
    });
    tenantId = tenant._id.toString();

    // 3. Create TenantAdmin User
    const user = await User.create({
      name: 'Security Admin',
      email: 'sec.admin@amdox.com',
      password: 'secadminpassword',
      role: 'TenantAdmin',
      tenantId,
    });
    userId = user._id.toString();

    const loginRes = await request(app)
      .post('/api/v1/auth/login')
      .send({ email: 'sec.admin@amdox.com', password: 'secadminpassword' });

    token = loginRes.body.data.accessToken;
  });

  beforeEach(async () => {
    // Clear rate limits in Redis before each test to ensure a clean window
    const keys = await redisClient.keys('ratelimit:*');
    if (keys.length > 0) {
      await redisClient.del(...keys);
    }
  });

  afterAll(async () => {
    // Clear rate limits in Redis so subsequent test suites aren't blocked
    const keys = await redisClient.keys('ratelimit:*');
    if (keys.length > 0) {
      await redisClient.del(...keys);
    }
    // Cleanup databases
    await mongoose.connection.close();
    await redisClient.quit();
  });

  describe('1. Zod Schema Payloads Validation', () => {
    it('Should reject invalid email format in auth login request', async () => {
      const res = await request(app)
        .post('/api/v1/auth/login')
        .send({ email: 'bademailformat', password: 'secadminpassword' });

      expect(res.statusCode).toBe(400);
      expect(res.body.status).toBe('error');
      expect(res.body.message).toContain('Validation failed');
      expect(res.body.errors[0].field).toBe('email');
      expect(res.body.errors[0].message).toBe('Must be a valid email address');
    });

    it('Should reject short passwords in auth login request', async () => {
      const res = await request(app)
        .post('/api/v1/auth/login')
        .send({ email: 'sec.admin@amdox.com', password: '123' });

      expect(res.statusCode).toBe(400);
      expect(res.body.status).toBe('error');
      expect(res.body.message).toContain('Validation failed');
      expect(res.body.errors[0].field).toBe('password');
      expect(res.body.errors[0].message).toContain('at least 6 characters');
    });

    it('Should reject invalid inputs for creating AP Invoice', async () => {
      const res = await request(app)
        .post('/api/v1/finance/ap/invoice')
        .set('Authorization', `Bearer ${token}`)
        .set('X-Tenant-ID', tenantId)
        .send({
          poId: 'invalid-object-id',
          grId: 'invalid-grid-id',
          invoiceNumber: '',
          supplierName: '',
          dueDate: '',
          items: [],
        });

      expect(res.statusCode).toBe(400);
      expect(res.body.status).toBe('error');
      
      const fields = res.body.errors.map((e: any) => e.field);
      expect(fields).toContain('poId');
      expect(fields).toContain('grId');
      expect(fields).toContain('invoiceNumber');
      expect(fields).toContain('supplierName');
      expect(fields).toContain('dueDate');
      expect(fields).toContain('items');
    });

    it('Should reject invalid formats for Project creation', async () => {
      const res = await request(app)
        .post('/api/v1/projects')
        .set('Authorization', `Bearer ${token}`)
        .set('X-Tenant-ID', tenantId)
        .send({
          name: '',
          budget: -10,
          startDate: '',
        });

      expect(res.statusCode).toBe(400);
      expect(res.body.status).toBe('error');
      
      const fields = res.body.errors.map((e: any) => e.field);
      expect(fields).toContain('name');
      expect(fields).toContain('budget');
      expect(fields).toContain('startDate');
    });
  });

  describe('2. Custom Redis-Based Rate Limiting', () => {
    it('Should trigger 429 Too Many Requests after exceeding limit on Login route', async () => {
      // Auth limit is set to 10 requests per minute
      // Loop to issue 10 requests successfully
      for (let i = 0; i < 10; i++) {
        const res = await request(app)
          .post('/api/v1/auth/login')
          .send({ email: 'sec.admin@amdox.com', password: 'secadminpassword' });
        
        expect(res.statusCode).toBe(200);
        expect(res.headers['x-ratelimit-remaining']).toBeDefined();
      }

      // 11th request must be rate limited (429)
      const res429 = await request(app)
        .post('/api/v1/auth/login')
        .send({ email: 'sec.admin@amdox.com', password: 'secadminpassword' });

      expect(res429.statusCode).toBe(429);
      expect(res429.body.status).toBe('error');
      expect(res429.body.message).toContain('Too many requests');
    });
  });

  describe('3. Double-Submit Cookie CSRF Guards', () => {
    it('Should allow safe HTTP methods (like GET /api/v1/projects) to bypass CSRF validation', async () => {
      const res = await request(app)
        .get('/api/v1/projects')
        .set('Authorization', `Bearer ${token}`)
        .set('X-Tenant-ID', tenantId);

      expect(res.statusCode).toBe(200);
    });

    it('Should allow Bearer token authenticated POST requests to bypass CSRF validation', async () => {
      // Create Project with Bearer token, no CSRF token header/cookie
      const res = await request(app)
        .post('/api/v1/projects')
        .set('Authorization', `Bearer ${token}`)
        .set('X-Tenant-ID', tenantId)
        .send({
          name: 'Bypass CSRF Project',
          budget: 50000,
          startDate: '2026-06-01',
        });

      expect(res.statusCode).toBe(201);
    });

    it('Should reject POST requests without Bearer token AND without CSRF headers/cookies', async () => {
      // Try to create a project without Authorization header and without CSRF
      const res = await request(app)
        .post('/api/v1/projects')
        .set('X-Tenant-ID', tenantId)
        .send({
          name: 'No Auth No CSRF Project',
          budget: 50000,
          startDate: '2026-06-01',
        });

      // Bypasses JWT validation check because CSRF is checked FIRST on the router layer
      // Verify CSRF blocks it before authentication checks run
      expect(res.statusCode).toBe(403);
      expect(res.body.message).toContain('CSRF token verification failed');
    });

    it('Should accept POST requests with matching CSRF cookie and x-csrf-token header', async () => {
      // 1. Retrieve a new CSRF token and the signed signature cookie
      const tokenRes = await request(app)
        .get('/api/v1/auth/csrf-token');

      expect(tokenRes.statusCode).toBe(200);
      const csrfToken = tokenRes.body.csrfToken;
      const cookieHeader = tokenRes.headers['set-cookie']?.[0];
      expect(csrfToken).toBeDefined();
      expect(cookieHeader).toContain('_csrf=');

      // Extract cookie string
      const csrfCookie = cookieHeader ? cookieHeader.split(';')[0] : '';

      // 2. Submit POST request attaching CSRF header and cookie (without Bearer token to trigger CSRF validation path)
      const res = await request(app)
        .post('/api/v1/projects')
        .set('X-Tenant-ID', tenantId)
        .set('Cookie', csrfCookie)
        .set('X-CSRF-Token', csrfToken)
        .send({
          name: 'With CSRF Project',
          budget: 50000,
          startDate: '2026-06-01',
        });

      // Should bypass CSRF, then fail with 401 Unauthorized because Bearer token is missing,
      // which confirms CSRF verification passed and let it proceed to authGuard!
      expect(res.statusCode).toBe(401);
      expect(res.body.message).toContain('Authentication token missing');
    });
  });
});
