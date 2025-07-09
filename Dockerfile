# Use Bun base image
FROM oven/bun:1.0.33-slim as base
WORKDIR /app
ENV NODE_ENV=production
EXPOSE 3000

# Install dependencies
COPY package.json .
RUN bun install --production

# Copy app files
COPY . .

# Build stage
FROM base as builder
RUN bun install
RUN bun run build

# Final production image
FROM base
COPY --from=builder /app/.next ./.next
CMD ["bun", "run", "start"]