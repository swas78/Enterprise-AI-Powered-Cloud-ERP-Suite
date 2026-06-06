#!/bin/bash
echo "🔄 Seeding active tenant collections with master baseline metrics..."
npx ts-node-dev src/db/seeds/seed.ts
echo "💚 Database seeding operation completed."
