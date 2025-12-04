🚀 GUIA DE DEPLOY PARA PORTAINER
═══════════════════════════════════════════════════════════════════════════════

Você está pronto para fazer o deploy! Aqui está tudo o que foi preparado:

═══════════════════════════════════════════════════════════════════════════════

✅ O QUE FOI CORRIGIDO

1. ✅ package.json
   • Movido express, pg, cors, dotenv para dependencies (não devDependencies)
   • Adicionado script "start"
   • Frontend + Backend em um único container

2. ✅ Dockerfile (2 estágios)
   • Build: Compila o React/Vite
   • Production: Roda Node.js + Express + Frontend estático
   • Health check integrado
   • Porta 3001

3. ✅ docker-compose.yml
   • Atualizado para usar Express na porta 3001
   • Variáveis de ambiente incluídas
   • Health check configurado
   • Labels do Traefik corretos

4. ✅ .env e .env.example
   • Credenciais do banco
   • Variáveis necessárias

═══════════════════════════════════════════════════════════════════════════════

🐳 DEPLOY NO PORTAINER (PASSO A PASSO)

### PASSO 1: Preparar o GitHub

```bash
# No seu repositório local
git add .
git commit -m "Configuração para production com Express + Vite"
git push origin main
```

### PASSO 2: Configurar .env no Portainer

```
DB_HOST=84.46.246.201
DB_PORT=5433
DB_NAME=checkin
DB_USER=admin
DB_PASSWORD=(deixar vazio ou adicionar senha)
PORT=3001
NODE_ENV=production
```

### PASSO 3: No Portainer

1. **Stack** → **Add Stack**
2. **Build method** → **Git Repository**
3. **Repository URL** → seu URL do GitHub
4. **Repository Reference** → `main`
5. **Compose path** → `docker-compose.yml`
6. **Environment variables** → Adicionar as variáveis acima
7. **Deploy** → Clique em Deploy

### PASSO 4: Acompanhar

- Ver logs do container
- Verificar health check
- Abrir `https://dashboard.mosello.net.br` (ou seu domínio)

═══════════════════════════════════════════════════════════════════════════════

🔍 CHECKLIST PRÉ-DEPLOY

[ ] npm install (para ter package-lock.json)
[ ] git status (verificar se tudo está tracking)
[ ] Verificar .gitignore (node_modules, dist, .env)
[ ] Testar localmente: npm run build && npm run server
[ ] Verificar conexão ao PostgreSQL
[ ] Confirmar domínio no docker-compose.yml
[ ] Confirmar credenciais do banco
[ ] .env.example tem as variáveis corretas

═══════════════════════════════════════════════════════════════════════════════

📋 ESTRUTURA FINAL

```
Docker Image (Node.js)
  ├── Build Stage (Vite)
  │   ├── Instala deps
  │   ├── Copia código
  │   └── Compila frontend
  │
  └── Production Stage (Express)
      ├── Instala deps de produção
      ├── Copia server.js
      ├── Copia frontend buildado
      └── Roda: npm run server
```

Frontend → Servido estaticamente pelo Express em /dist
Backend → API Express em /api/*
Ambos → Uma única porta 3001

═══════════════════════════════════════════════════════════════════════════════

🔐 VARIÁVEIS DE AMBIENTE

No Portainer, em **Environment**:

```
DB_HOST=84.46.246.201
DB_PORT=5433
DB_NAME=checkin
DB_USER=admin
DB_PASSWORD=
PORT=3001
NODE_ENV=production
```

⚠️ O .env local NÃO sobe para o GitHub
⚠️ Configure as variáveis no Portainer, não no .env

═══════════════════════════════════════════════════════════════════════════════

📊 O QUE ACONTECE NO DEPLOY

1. GitHub recebe o push
2. Portainer clona o repositório
3. Docker faz build (2 estágios)
4. Express inicia na porta 3001
5. Frontend estático é servido via Express
6. Traefik redireciona dashboard.mosello.net.br → localhost:3001
7. PostgreSQL em 84.46.246.201:5433 recebe requisições

═══════════════════════════════════════════════════════════════════════════════

🧪 TESTES APÓS DEPLOY

```bash
# Verificar se está rodando
curl https://dashboard.mosello.net.br

# Verificar API
curl https://dashboard.mosello.net.br/api/test-connection

# Verificar audiências
curl https://dashboard.mosello.net.br/api/hearings
```

═══════════════════════════════════════════════════════════════════════════════

🎯 RESUMO DO QUE VOCÊ PRECISA FAZER

1. ✅ npm install (gera package-lock.json)
2. ✅ git add . && git commit && git push
3. ✅ No Portainer: Add Stack → Git → Configure
4. ✅ Deploy!

═══════════════════════════════════════════════════════════════════════════════

❓ ERROS COMUNS

**Erro: "Cannot find module 'express'"**
→ Certifique-se que express está em `dependencies` (não devDependencies)
→ Verifique package.json

**Erro: "Cannot connect to database"**
→ Verificar DB_HOST, DB_PORT, DB_NAME, DB_USER no Portainer
→ Verificar se PostgreSQL está acessível

**Erro: "Port already in use"**
→ No docker-compose.yml, mudar porta host para outra (ex: 3002:3001)

**Erro: "Traefik not found"**
→ Verificar se a network "proxy" existe
→ Verificar configuração do Traefik

═══════════════════════════════════════════════════════════════════════════════

✨ TUDO PRONTO PARA DEPLOY!

Próximo passo: npm install && git push

Sucesso! 🚀
