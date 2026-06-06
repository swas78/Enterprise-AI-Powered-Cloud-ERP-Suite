import mongoose from 'mongoose';
import indexDefinitions from './indexDefinitions';
import logger from '../../src/utils/logger';

const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017/amdox-erp?replicaSet=rs0';

export const createDatabaseIndexes = async () => {
  try {
    logger.info('🔄 Initiating programmatic MongoDB index compilation...');
    await mongoose.connect(DATABASE_URL);
    const db = mongoose.connection.db;

    for (const definition of indexDefinitions) {
      logger.info(`🔨 Compiling index on collection [${definition.collection}] for fields: ${JSON.stringify(definition.fields)}`);
      await db.collection(definition.collection).createIndex(definition.fields, definition.options || {});
    }

    logger.info('💚 Successfully compiled all database compound indexes.');
    await mongoose.connection.close();
  } catch (err: any) {
    logger.error(`❌ Failed compiling database indexes: ${err.message}`);
    process.exit(1);
  }
};

if (require.main === module) {
  createDatabaseIndexes();
}

export default createDatabaseIndexes;
