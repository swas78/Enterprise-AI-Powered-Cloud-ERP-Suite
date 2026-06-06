export const mockS3Client = {
  send: jest.fn().mockResolvedValue({}),
};

export const mockSESClient = {
  send: jest.fn().mockResolvedValue({ MessageId: 'mock-message-id' }),
};

jest.mock('@aws-sdk/client-s3', () => ({
  S3Client: jest.fn().mockImplementation(() => mockS3Client),
  PutObjectCommand: jest.fn().mockImplementation((args) => args),
  DeleteObjectCommand: jest.fn().mockImplementation((args) => args),
}));

jest.mock('@aws-sdk/client-ses', () => ({
  SESClient: jest.fn().mockImplementation(() => mockSESClient),
  SendEmailCommand: jest.fn().mockImplementation((args) => args),
}));
