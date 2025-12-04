FROM node:20-alpine AS build

WORKDIR /app

# Copiar package.json e instalar dependências
COPY package.json package-lock.json* ./
RUN npm ci --only=production && npm ci --save-dev @types/node @vitejs/plugin-react typescript ~5.8.2 vite

# Copiar código fonte
COPY . .

# Build do frontend Vite
RUN npm run build

# Estágio de produção - roda Node.js com Express + Frontend estático
FROM node:20-alpine

WORKDIR /app

# Instalar apenas dependências de produção
COPY package.json package-lock.json* ./
RUN npm ci --only=production

# Copiar código do servidor
COPY server.js .
COPY .env* ./

# Copiar frontend buildado do estágio anterior
COPY --from=build /app/dist ./public

# Expor portas
EXPOSE 3001

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3001/api/test-connection', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# Rodar servidor
CMD ["npm", "run", "server"]
