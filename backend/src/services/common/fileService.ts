import crypto from 'crypto';
import path from 'path';
import { AwsService } from '../external/awsService';
import logger from '../../utils/logger';

export class FileService {
  private static ALLOWED_EXTENSIONS = ['.png', '.jpg', '.jpeg', '.pdf', '.csv', '.xlsx'];
  private static MAX_SIZE_BYTES = 5 * 1024 * 1024; // 5MB

  /**
   * Validate and upload a file to S3
   */
  static async upload(
    file: { buffer: Buffer; originalname: string; mimetype: string },
    folder: string = 'general'
  ): Promise<string> {
    logger.info(`📁 FileService: Processing file upload for: ${file.originalname}`);

    // Check size limit
    if (file.buffer.length > this.MAX_SIZE_BYTES) {
      throw new Error(`File size exceeds limit of ${this.MAX_SIZE_BYTES / (1024 * 1024)}MB`);
    }

    // Check file extension
    const ext = path.extname(file.originalname).toLowerCase();
    if (!this.ALLOWED_EXTENSIONS.includes(ext)) {
      throw new Error(`File type ${ext} is not allowed. Supported types: ${this.ALLOWED_EXTENSIONS.join(', ')}`);
    }

    // Generate unique name
    const randomName = crypto.randomBytes(16).toString('hex');
    const key = `${folder}/${randomName}${ext}`;

    const url = await AwsService.uploadFile(key, file.buffer, file.mimetype);
    logger.info(`📁 FileService: File uploaded successfully: ${url}`);
    return url;
  }

  /**
   * Parse a file URL to delete the object from S3
   */
  static async delete(fileUrl: string): Promise<void> {
    logger.info(`📁 FileService: Deleting file at URL: ${fileUrl}`);
    try {
      // Extract key from standard S3 URL format
      const urlObj = new URL(fileUrl);
      const key = decodeURIComponent(urlObj.pathname.substring(1));
      await AwsService.deleteFile(key);
    } catch (error) {
      logger.error(`Failed to delete file from S3: ${fileUrl}`, error);
      throw error;
    }
  }
}

export default FileService;
