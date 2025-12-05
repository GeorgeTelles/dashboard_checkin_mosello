# Estágio de produção
FROM node:20-alpine

WORKDIR /app

# Copia o package.json e package-lock.json
COPY package*.json ./

# Instala as dependências de produção
RUN npm install --production

# Copia o restante dos arquivos da aplicação
COPY . .

# Expõe a porta que a API vai usar
EXPOSE 3001

# Comando para iniciar o servidor
CMD ["node", "index.js"]
