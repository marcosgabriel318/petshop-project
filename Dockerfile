#define a imagem do node que será utilizada
# 1. FASE BASE
FROM node:24-alpine AS base
WORKDIR /api
COPY package*.json ./

# 2. FASE DE DESENVOLVIMENTO
FROM base AS development
RUN npm install
COPY . . 
CMD ["npm", "run", "start:dev"]

# 3. FASE DE BUILD
FROM base AS builder
RUN npm install
COPY . .
RUN npm run build

# 4. FASE DE PRODUÇÃO
FROM node:24-alpine AS production
WORKDIR /api
COPY --from=builder /api/dist ./dist
COPY package*.json ./
RUN npm install --omit=dev
CMD ["npm", "run", "start:prod"]



