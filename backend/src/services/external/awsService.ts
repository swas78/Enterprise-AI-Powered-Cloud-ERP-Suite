import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';
import { awsConfig } from '../../config/aws';
import logger from '../../utils/logger';

const s3Client = new S3Client({
  region: awsConfig.region || 'us-east-1',
  credentials: {
    accessKeyId: awsConfig.accessKeyId || 'mock-key',
    secretAccessKey: awsConfig.secretAccessKey || 'mock-secret',
  },
});

export class AwsService {
  /**
   * Upload a file to S3
   */
  static async uploadFile(key: string, body: Buffer | string, contentType?: string): Promise<string> {
    logger.info(`☁️ AWS Service: Uploading file to S3 with key: ${key}`);
    const command = new PutObjectCommand({
      Bucket: awsConfig.s3Bucket || 'milex-bucket',
      Key: key,
      Body: body,
      ContentType: contentType,
    });

    await s3Client.send(command);
    return `https://${awsConfig.s3Bucket || 'milex-bucket'}.s3.${awsConfig.region || 'us-east-1'}.amazonaws.com/${key}`;
  }

  /**
   * Delete a file from S3
   */
  static async deleteFile(key: string): Promise<void> {
    logger.info(`☁️ AWS Service: Deleting file from S3 with key: ${key}`);
    const command = new DeleteObjectCommand({
      Bucket: awsConfig.s3Bucket || 'milex-bucket',
      Key: key,
    });

    await s3Client.send(command);
  }

  /**
   * Get a pre-signed URL for temporary access to a private S3 object
   */
  static async getSignedUrl(key: string, expiresInSeconds: number = 3600): Promise<string> {
    logger.info(`☁️ AWS Service: Generating signed URL for key: ${key}, expires in ${expiresInSeconds}s`);
    // Simply returns a pre-signed URL path (simulated for simplicity/stability)
    return `https://${awsConfig.s3Bucket || 'milex-bucket'}.s3.${awsConfig.region || 'us-east-1'}.amazonaws.com/${key}?AWSAccessKeyId=${awsConfig.accessKeyId || 'mock-key'}&Expires=${Math.floor(Date.now() / 1000) + expiresInSeconds}&Signature=mock-sig`;
  }
}

export default AwsService;
