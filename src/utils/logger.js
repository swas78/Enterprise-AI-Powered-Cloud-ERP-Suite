const env = require('../config/env');

const logger = {
  info:  (...args) => console.log('[INFO]',  ...args),
  error: (...args) => console.error('[ERROR]', ...args),
  warn:  (...args) => console.warn('[WARN]',  ...args),
  debug: (...args) =>
    env.nodeEnv === 'development' && console.log('[DEBUG]', ...args),
};

module.exports = logger;