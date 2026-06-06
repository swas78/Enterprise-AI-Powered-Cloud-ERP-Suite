# ==================================================
# Stage 1: Build & Compile TypeScript
# ==================================================
FROM node:20-alpine AS builder

WORKDIR /usr/src/app

# Copy dependency configuration files
COPY package*.json tsconfig.json ./

# Install all dependencies (including devDependencies for TS compilation)
RUN npm install --no-audit --no-fund

# Copy application source code
COPY src ./src

# Compile TypeScript to production-ready JS in /dist directory
RUN npm run build

# Prune devDependencies to keep container size lightweight
RUN npm prune --production

# ==================================================
# Stage 2: Distroless Secure Production Runner
# ==================================================
FROM gcr.io/distroless/nodejs20-debian12:latest

WORKDIR /app

# Set production environment variables
ENV NODE_ENV=production
ENV PORT=5000

# Copy compiled files and pruned node_modules from builder stage
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package.json ./package.json

# Expose Express application port
EXPOSE 5000

# Start Express server via distroless entrypoint
CMD ["dist/index.js"]
