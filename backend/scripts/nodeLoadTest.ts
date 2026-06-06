import logger from '../src/utils/logger';

const BASE_URL = 'http://127.0.0.1:5000';
const CONCURRENCY = 15;
const TOTAL_REQUESTS = 120;

interface RequestMetric {
  latency: number;
  status: number;
  success: boolean;
}

const runRequest = async (): Promise<RequestMetric> => {
  const start = performance.now();
  
  // Decide which endpoint to hit based on probability
  const rand = Math.random();
  let url = `${BASE_URL}/health/live`;
  let method = 'GET';
  let body: string | null = null;
  let headers: Record<string, string> = {};

  if (rand < 0.35) {
    // GET /health/live
    url = `${BASE_URL}/health/live`;
  } else if (rand < 0.70) {
    // GET /api/v1/auth/csrf-token
    url = `${BASE_URL}/api/v1/auth/csrf-token`;
  } else {
    // POST /api/v1/auth/login (Zod validation / rate limiting endpoint)
    url = `${BASE_URL}/api/v1/auth/login`;
    method = 'POST';
    body = JSON.stringify({
      email: Math.random() < 0.5 ? 'sec.admin@amdox.com' : 'invalid-email',
      password: Math.random() < 0.5 ? 'secadminpassword' : '123', // Triggers both successful inputs and Zod validation errors
    });
    headers['Content-Type'] = 'application/json';
  }

  try {
    const res = await fetch(url, {
      method,
      headers,
      body,
    });

    const latency = performance.now() - start;
    return {
      latency,
      status: res.status,
      success: res.ok || res.status === 429 || res.status === 400, // 429 and 400 are valid app-level security responses
    };
  } catch (err: any) {
    const latency = performance.now() - start;
    return {
      latency,
      status: 0,
      success: false,
    };
  }
};

const executeLoadTest = async () => {
  console.log('\n==================================================');
  console.log('🚀 INITIALIZING AMDDOX ENTERPRISE LOAD TEST ENGINE');
  console.log('==================================================');
  console.log(`Target URL:      ${BASE_URL}`);
  console.log(`Concurrency:     ${CONCURRENCY} active threads`);
  console.log(`Total Requests:  ${TOTAL_REQUESTS} runs`);
  console.log('--------------------------------------------------');

  // Verify server is alive before starting
  try {
    const healthCheck = await fetch(`${BASE_URL}/health/live`);
    if (!healthCheck.ok) throw new Error();
    console.log('🟢 Server state verified: UP. Initiating traffic...');
  } catch {
    console.error('❌ CRITICAL: Target server is offline! Please start it using "npm run dev" first.');
    process.exit(1);
  }

  const startTime = performance.now();
  const metrics: RequestMetric[] = [];
  let completed = 0;

  // Spawning concurrency queue workers
  const runWorker = async () => {
    while (completed < TOTAL_REQUESTS) {
      completed++;
      const metric = await runRequest();
      metrics.push(metric);
    }
  };

  const workers = Array.from({ length: CONCURRENCY }, () => runWorker());
  await Promise.all(workers);

  const totalTime = (performance.now() - startTime) / 1000; // in seconds

  // 1. Process Telemetry Latencies
  const latencies = metrics.map((m) => m.latency).sort((a, b) => a - b);
  const sum = latencies.reduce((acc, val) => acc + val, 0);
  const avg = sum / latencies.length;
  const min = latencies[0] || 0;
  const max = latencies[latencies.length - 1] || 0;
  const p50 = latencies[Math.floor(latencies.length * 0.50)] || 0;
  const p90 = latencies[Math.floor(latencies.length * 0.90)] || 0;
  const p95 = latencies[Math.floor(latencies.length * 0.95)] || 0;

  // 2. Count Status Distributions
  let okCount = 0;
  let validationFailCount = 0;
  let rateLimitCount = 0;
  let networkFailCount = 0;

  metrics.forEach((m) => {
    if (m.status >= 200 && m.status < 300) okCount++;
    else if (m.status === 400) validationFailCount++;
    else if (m.status === 429) rateLimitCount++;
    else networkFailCount++;
  });

  // 3. Yield detailed metrics logs
  console.log('\n📊 LOAD TEST PERFORMANCE TELEMETRY SUMMARY:');
  console.log('--------------------------------------------------');
  console.log(`Throughput Rate:       ${(TOTAL_REQUESTS / totalTime).toFixed(2)} req/sec`);
  console.log(`Total Elapsed Time:    ${totalTime.toFixed(3)}s`);
  console.log(`Completed Requests:    ${metrics.length}`);
  console.log('--------------------------------------------------');
  console.log('⏱️ LATENCY SPECTRUM:');
  console.log(`  Minimum Latency:     ${min.toFixed(2)}ms`);
  console.log(`  Average Latency:     ${avg.toFixed(2)}ms`);
  console.log(`  Median Latency (p50): ${p50.toFixed(2)}ms`);
  console.log(`  90th Percentile:     ${p90.toFixed(2)}ms`);
  console.log(`  95th Percentile:     ${p95.toFixed(2)}ms`);
  console.log(`  Maximum Latency:     ${max.toFixed(2)}ms`);
  console.log('--------------------------------------------------');
  console.log('🚥 HTTP STATUS DISTRIBUTION:');
  console.log(`  2xx Success:         ${okCount} (${((okCount / TOTAL_REQUESTS) * 100).toFixed(1)}%)`);
  console.log(`  400 Zod Blocked:     ${validationFailCount} (${((validationFailCount / TOTAL_REQUESTS) * 100).toFixed(1)}%)`);
  console.log(`  429 Rate Limited:    ${rateLimitCount} (${((rateLimitCount / TOTAL_REQUESTS) * 100).toFixed(1)}%)`);
  console.log(`  Other Failures:      ${networkFailCount} (${((networkFailCount / TOTAL_REQUESTS) * 100).toFixed(1)}%)`);
  console.log('==================================================\n');

  process.exit(0);
};

executeLoadTest();
