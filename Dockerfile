# --------------------------
# 1) Build stage
# --------------------------
FROM oven/bun:alpine AS builder

# Set working dir
WORKDIR /app

# Copy everything and install deps + build
COPY . .

# Install dependencies and build Next.js
RUN bun install \
 && bun run build

# --------------------------
# 2) Runtime stage
# --------------------------
FROM oven/bun:alpine

WORKDIR /app

# Copy built output and package artifacts
COPY --from=builder /app ./

# Production ENV
ENV NODE_ENV=production
EXPOSE 3000

# Start Next.js in production
CMD ["bun", "run", "start"]