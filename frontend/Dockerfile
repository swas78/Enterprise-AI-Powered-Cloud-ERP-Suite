# ==================================================
# Stage 1: Build React App static assets
# ==================================================
FROM node:20-alpine AS builder

WORKDIR /usr/src/app

# Copy dependency configuration files
COPY package*.json ./

# Install dependencies
RUN npm install --no-audit --no-fund

# Copy application files (including TS config and source)
COPY . .

# Compile TS and build React bundle using Vite (outputs to /dist)
RUN npm run build

# ==================================================
# Stage 2: Distroless Nginx Production Web Server
# ==================================================
FROM gcr.io/distroless/nginx-debian12:latest

# Copy compiled static assets from builder stage
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

# Copy custom Nginx configuration for client-side routing and cache controls
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose web traffic port
EXPOSE 80
