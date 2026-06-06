#!/bin/bash
echo "🔄 Running programmatic index sync..."
npm run build
node dist/db/indexes/createIndexes.js
echo "💚 Indexes synchronized successfully."
