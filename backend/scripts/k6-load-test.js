import http from 'k6/http';
import { check, sleep } from 'k6';

// k6 Load Test Configuration Options
export const options = {
  stages: [
    { duration: '5s', target: 20 },  // Ramp-up to 20 users
    { duration: '10s', target: 50 }, // Sustain 50 users (peak load)
    { duration: '5s', target: 0 },   // Cool-down to 0 users
  ],
  thresholds: {
    http_req_duration: ['p(95)<150'], // 95% of requests must complete within 150ms
    http_req_failed: ['rate<0.01'],    // Error rate must be less than 1%
  },
};

const BASE_URL = 'http://localhost:5000/api/v1';

export default function () {
  // Scenario 1: Standard health-check ping (GET /health/live)
  const healthRes = http.get('http://localhost:5000/health/live');
  check(healthRes, {
    'health status is 200': (r) => r.status === 200,
  });
  sleep(0.5);

  // Scenario 2: Request a new CSRF Token (GET /auth/csrf-token)
  const csrfRes = http.get(`${BASE_URL}/auth/csrf-token`);
  check(csrfRes, {
    'csrf status is 200': (r) => r.status === 200,
    'has csrfToken': (r) => JSON.parse(r.body).csrfToken !== undefined,
  });
  sleep(0.5);

  // Scenario 3: Attempt Login (POST /auth/login) - testing rate limits
  const payload = JSON.stringify({
    email: 'sec.admin@amdox.com',
    password: 'secadminpassword',
  });
  const params = {
    headers: { 'Content-Type': 'application/json' },
  };

  const loginRes = http.post(`${BASE_URL}/auth/login`, payload, params);
  
  // Rate-limiting check: either 200 OK or 429 Too Many Requests are acceptable for login loops
  check(loginRes, {
    'login status is 200 or 429': (r) => [200, 429].includes(r.status),
  });

  sleep(1);
}
