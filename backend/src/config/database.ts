import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { multiTenantPlugin } from '../utils/multiTenantPlugin';

dotenv.config();

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/amdox-erp?replicaSet=rs0';

export const connectDatabase = async (): Promise<void> => {
  try {
    mongoose.set('strictQuery', true);
    
    // Register the global multi-tenancy query scoping plugin
    mongoose.plugin(multiTenantPlugin);
    
    console.log('🔄 Connecting to MongoDB at:', MONGO_URL.split('@').pop()); // Log URL safely without credentials
    
    await mongoose.connect(MONGO_URL, {
      autoIndex: true, // Auto-build indexes in development; can be disabled in production
    });

    console.log('💚 MongoDB connected successfully.');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    throw error;
  }
};

// Event handlers
mongoose.connection.on('disconnected', () => {
  console.warn('⚠️ MongoDB connection lost. Attempting to reconnect...');
});

mongoose.connection.on('error', (err) => {
  console.error('❌ Mongoose connection error event:', err);
});
