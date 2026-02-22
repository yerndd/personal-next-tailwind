# Stage 1: Dependencies
FROM node:lts-alpine AS deps
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --only=production && \
    npm cache clean --force

# Stage 2: Builder
FROM node:lts-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 3: Runner with Nginx
FROM nginx:alpine-slim AS runner

# Create non-root user
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001 -G nodejs

# Copy nginx configuration
COPY --chown=nextjs:nodejs nginx.conf /etc/nginx/nginx.conf

# Copy built Next.js static files
COPY --from=builder --chown=nextjs:nodejs /app/out /usr/share/nginx/html

# Create necessary directories with proper permissions
RUN mkdir -p /tmp/client_temp /tmp/proxy_temp /tmp/fastcgi_temp /tmp/uwsgi_temp /tmp/scgi_temp && \
    chown -R nextjs:nodejs /tmp /usr/share/nginx/html && \
    chmod -R 755 /tmp /usr/share/nginx/html

# Switch to non-root user
USER nextjs

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
