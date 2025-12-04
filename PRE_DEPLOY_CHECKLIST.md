✅ CHECKLIST PRÉ-DEPLOY FINAL
═══════════════════════════════════════════════════════════════════════════════

Antes de subir para GitHub e Portainer, verifique:

═══════════════════════════════════════════════════════════════════════════════

📦 PACKAGE.JSON

[ ] ✅ express, pg, cors, dotenv estão em "dependencies"
[ ] ✅ Scripts contêm: dev, build, preview, server, dev:server, start
[ ] ✅ "start" script executa: "npm run build && npm run server"

═══════════════════════════════════════════════════════════════════════════════

🐳 DOCKERFILE

[ ] ✅ Tem 2 estágios: build e production
[ ] ✅ Build stage compila Vite (npm run build)
[ ] ✅ Production stage copia dist para ./public
[ ] ✅ Expõe porta 3001
[ ] ✅ Tem HEALTHCHECK
[ ] ✅ CMD é "npm run server"

═══════════════════════════════════════════════════════════════════════════════

🐋 DOCKER-COMPOSE.YML

[ ] ✅ Service chamado "dashboard" (ou seu nome)
[ ] ✅ Container name é "mosello-dashboard"
[ ] ✅ Porta 3001:3001 exposta
[ ] ✅ Environment variables definidas:
    - DB_HOST=84.46.246.201
    - DB_PORT=5433
    - DB_NAME=checkin
    - DB_USER=admin
    - PORT=3001
    - NODE_ENV=production
[ ] ✅ Health check configurado
[ ] ✅ Labels do Traefik corretos
[ ] ✅ Network "proxy" (external: true)

═══════════════════════════════════════════════════════════════════════════════

📝 .ENV E .ENV.EXAMPLE

[ ] ✅ .env.example existe com as variáveis
[ ] ✅ .env local tem credenciais (não vai pro GitHub)
[ ] ✅ .gitignore tem ".env" (arquivo não vai para Git)

═══════════════════════════════════════════════════════════════════════════════

💻 SERVER.JS

[ ] ✅ Conecta ao PostgreSQL via environment variables
[ ] ✅ Temos 8 endpoints (/api/*)
[ ] ✅ Usa tabela 'audiencias' com as 17 colunas corretas
[ ] ✅ CORS configurado
[ ] ✅ Escuta na porta definida por process.env.PORT

═══════════════════════════════════════════════════════════════════════════════

📱 FRONTEND (REACT)

[ ] ✅ services/dbService.ts tem todas as funções
[ ] ✅ Components chamam os serviços (fetchHearings, etc)
[ ] ✅ API_URL aponta para http://localhost:3001/api (local)
[ ] ✅ vite.config.ts está configurado

═══════════════════════════════════════════════════════════════════════════════

📚 DATA/MOCKDATA.TS

[ ] ✅ Dados estão vazios ou como fallback
[ ] ✅ Tipos correspondem à estrutura real
[ ] ✅ Comentário indica que dados reais vêm da API

═══════════════════════════════════════════════════════════════════════════════

🔧 CONFIGURAÇÕES

[ ] ✅ .gitignore tem:
    - node_modules/
    - dist/
    - .env
    - .env.local
    - *.log

[ ] ✅ .gitignore NÃO tem .env.example

[ ] ✅ package-lock.json será criado ao fazer npm install

═══════════════════════════════════════════════════════════════════════════════

🧪 TESTES LOCAIS

[ ] npm install - sem erros
[ ] npm run build - sem erros, cria /dist
[ ] npm run server - inicia em localhost:3001
[ ] curl http://localhost:3001/api/test-connection - retorna JSON

═══════════════════════════════════════════════════════════════════════════════

📤 GITHUB

[ ] git status - mostra arquivos certos
[ ] git add . - adiciona mudanças
[ ] git commit -m "Setup production..." - commita
[ ] git push origin main - sobe para GitHub
[ ] Verificar no GitHub que os arquivos estão lá

═══════════════════════════════════════════════════════════════════════════════

🚀 PORTAINER

[ ] Stack criada com git do seu repo
[ ] Environment variables adicionadas
[ ] docker-compose.yml encontrado
[ ] Deploy bem-sucedido
[ ] Container rodando e saudável

═══════════════════════════════════════════════════════════════════════════════

✨ TUDO CHECADO?

Se marcou todas as caixas ☑️, você está pronto!

npm install && git push && Deploy no Portainer! 🎉

═══════════════════════════════════════════════════════════════════════════════
