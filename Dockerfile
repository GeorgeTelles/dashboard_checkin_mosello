FROM node:20-alpine AS build

WORKDIR /app

# Copiar package.json
COPY package*.json ./

# Instalar todas as dependências (inclui devDependencies para build)
RUN npm install

# Copiar código fonte
COPY . .

# Build do frontend Vite
RUN npm run build

# Estágio de produção - roda Node.js com Express + Frontend estático
FROM node:20-alpine

WORKDIR /app

# Copiar package.json
COPY package*.json ./

# Instalar apenas dependências de produção
RUN npm install --only=production

# Copiar código do servidor
COPY server.js .

# Copiar frontend buildado do estágio anterior
COPY --from=build /app/dist ./dist

# Expor portas
EXPOSE 3001

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3001/api/test-connection', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})" || exit 1

# Rodar servidor
CMD ["node", "server.js"]
