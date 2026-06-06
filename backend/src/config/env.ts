import dotenv from 'dotenv';
dotenv.config();

export const env = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT) || 5000,
  databaseUrl: process.env.DATABASE_URL || 'mongodb://localhost:27017/amdox-erp?replicaSet=rs0',
  redisUrl: process.env.REDIS_URL || 'redis://localhost:6379',
  jwtSecret: process.env.JWT_SECRET || 'super-secret-jwt-key-replace-in-production',
  jwtAccessExpiration: process.env.JWT_ACCESS_EXPIRATION || '15m',
  jwtRefreshExpiration: process.env.JWT_REFRESH_EXPIRATION || '7d',
  keycloak: {
    realm: process.env.KEYCLOAK_REALM || 'amdox-realm',
    authServerUrl: process.env.KEYCLOAK_AUTH_SERVER_URL || 'http://localhost:8080',
    clientId: process.env.KEYCLOAK_CLIENT_ID || 'amdox-client',
  },
  aws: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
    region: process.env.AWS_REGION || 'us-east-1',
    s3Bucket: process.env.AWS_S3_BUCKET || 'amdox-erp-assets',
  },
  email: {
    fromAddress: process.env.EMAIL_FROM || 'no-reply@amdox.com',
  }
};

export default env;
