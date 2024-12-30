FROM node:22-alpine AS base
RUN npm install -g pnpm
WORKDIR /usr/src/app

FROM base AS install
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --ignore-scripts

FROM base AS builder
COPY --from=install /usr/src/app/node_modules ./node_modules
COPY . .
ENV NODE_ENV=production
RUN pnpm build

FROM --platform=linux/amd64 nginx:1.25-alpine as release
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
