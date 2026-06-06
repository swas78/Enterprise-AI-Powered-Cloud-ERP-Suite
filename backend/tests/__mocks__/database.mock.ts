import mongoose from 'mongoose';

export const connectMockDb = async (): Promise<void> => {
  const url = process.env.DATABASE_URL_TEST || 'mongodb://localhost:27017/amdox-erp-test';
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(url);
  }
};

export const disconnectMockDb = async (): Promise<void> => {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.connection.close();
  }
};

export const clearCollections = async (): Promise<void> => {
  if (mongoose.connection.readyState !== 1) return;
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany({});
  }
};
