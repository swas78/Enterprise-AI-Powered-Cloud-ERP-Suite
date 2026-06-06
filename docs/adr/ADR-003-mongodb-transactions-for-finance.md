# ADR-003: MongoDB ACID Transactions for Financial Ledgers

## Status
Accepted

## Context
ERPs must guarantee absolute transaction integrity, especially in the General Ledger (Finance) module. Double-entry bookkeeping dictates that for every posted entry, the total debits must strictly equal total credits. If any database write fails (e.g. writing the second ledger line fails due to network loss), the database state is corrupt unless atomic rollbacks are executed.

Although MongoDB historically lacked transactional support, version 4.0+ introduced multi-document ACID transactions across replica sets.

## Decision
We mandate the usage of **MongoDB ACID Sessions & Transactions** for all write sequences involving multi-document modifications, notably within:
1.  `accountingEngine.ts` (writing journal lines and adjusting ledger account balances concurrently).
2.  `payrollEngine.ts` (scheduling batch runs, creating payslip records, and executing payment balances).

### Mechanics
```typescript
const session = await mongoose.startSession();
session.startTransaction();
try {
  // Execute multi-document database operations with the session context
  await JournalEntry.create([entryData], { session });
  await ChartOfAccounts.updateOne({ _id: debitAccId }, { $inc: { balance: debitAmount } }, { session });
  await ChartOfAccounts.updateOne({ _id: creditAccId }, { $inc: { balance: -creditAmount } }, { session });

  await session.commitTransaction();
} catch (error) {
  await session.abortTransaction();
  throw error;
} finally {
  session.endSession();
}
```

## Consequences
### Positive
*   **Absolute Data Integrity**: Guarantees that the Chart of Accounts is never left out-of-sync with posted Journal Entries.
*   **Standard Safe API design**: Eliminates manual rollback code blocks.

### Negative
*   **Replica Set Requirement**: Standalone local MongoDB instances cannot execute transactions. Developers must run a replica set (configured in our standard `docker-compose.yml` via `--replSet rs0`).
*   **Performance Overhead**: Transactions introduce locking and logging overhead, which we mitigate by wrapping only essential financial updates in sessions.
