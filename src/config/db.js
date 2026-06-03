const { Pool } = require('pg');
const env = require('./env');

const pool = new Pool({
  ...env.db,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

pool.on('connect', () =>
  console.log('New DB client connected')
);
pool.on('error', (err) =>
  console.error('Unexpected DB error', err)
);

module.exports = pool;