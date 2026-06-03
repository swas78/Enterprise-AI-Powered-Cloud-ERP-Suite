require('dotenv').config();

module.exports = {
  db: {
    user:     process.env.DB_USER,
    host:     process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port:     Number(process.env.DB_PORT) || 5432,
  },
  jwt: {
    secret:    process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN || '24h',
  },
  port:    Number(process.env.PORT) || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
};