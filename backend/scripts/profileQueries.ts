import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Invoice } from '../src/models/finance/Invoice';
import logger from '../src/utils/logger';

dotenv.config();

const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017/amdox-erp?replicaSet=rs0';

const runQueryProfile = async () => {
  try {
    logger.info('🔄 Initializing MongoDB Query Profiling...');
    await mongoose.connect(DATABASE_URL);
    logger.info('🟢 Connected to MongoDB for profiling.');

    // 1. Define dummy tenant ID
    const dummyTenantId = new mongoose.Types.ObjectId();

    // 2. Profile a query utilizing our compound indices: find invoices by tenantId & status
    logger.info('🔍 Profiling query: Invoice.find({ tenantId, status: "Unpaid" })');
    
    // We execute .explain('executionStats') on Mongoose/MongoDB query cursor
    const query = Invoice.find({ tenantId: dummyTenantId, status: 'Unpaid' });
    const explainResult = await query.explain('executionStats');

    // 3. Extract executionStats details
    const executionStats = explainResult.executionStats;
    const stage = explainResult.queryPlanner.winningPlan.stage;

    console.log('\n==================================================');
    console.log('📊 QUERY PLANNER SUMMARY:');
    console.log('--------------------------------------------------');
    console.log(`Winning Plan Stage:     ${stage}`);
    console.log(`Execution Success:      ${executionStats.executionSuccess}`);
    console.log(`Docs Returned:          ${executionStats.nReturned}`);
    console.log(`Docs Examined:          ${executionStats.totalDocsExamined}`);
    console.log(`Keys Examined:          ${executionStats.totalKeysExamined}`);
    console.log(`Execution Time (ms):    ${executionStats.executionTimeMillis}ms`);
    console.log('==================================================\n');

    if (stage === 'FETCH' || stage === 'IXSCAN') {
      logger.info('💚 Query Optimizer Validation: Index Scan (IXSCAN) utilized successfully. Performance is optimized.');
    } else {
      logger.warn('⚠️ Query Optimizer Warning: Collection Scan (COLLSCAN) utilized. Consider adding compound indexes.');
    }

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    logger.error('❌ Query profiling failed with error:', error);
    process.exit(1);
  }
};

runQueryProfile();
