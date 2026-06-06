import env from './env';

export const awsConfig = {
  accessKeyId: env.aws.accessKeyId,
  secretAccessKey: env.aws.secretAccessKey,
  region: env.aws.region,
  s3Bucket: env.aws.s3Bucket,
};

export default awsConfig;
