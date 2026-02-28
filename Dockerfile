# Stage 1: Dependencies
FROM node:lts-alpine AS deps
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --omit=dev --no-fund --no-audit && \
    npm cache clean --force

# Stage 2: Builder
FROM node:lts-alpine AS builder
WORKDIR /app

# Copy all dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY package.json package-lock.json ./

COPY . .
RUN npm run build

# Stage 3: Runner with Nginx
FROM nginx:alpine-slim AS runner

# Create non-root user and setup in single layer
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001 -G nodejs && \
    mkdir -p /tmp/client_temp /tmp/proxy_temp /tmp/fastcgi_temp /tmp/uwsgi_temp /tmp/scgi_temp && \
    chown -R nextjs:nodejs /tmp /usr/share/nginx/html && \
    chmod -R 755 /tmp /usr/share/nginx/html

# Copy nginx configuration and static files in one layer
COPY --chown=nextjs:nodejs nginx.conf /etc/nginx/nginx.conf
COPY --from=builder --chown=nextjs:nodejs /app/out /usr/share/nginx/html

USER nextjs

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
