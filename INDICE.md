📚 ÍNDICE DE DOCUMENTAÇÃO
═══════════════════════════════════════════════════════════════════════════════

👇 COMECE POR AQUI 👇

┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  1. START_HERE.txt ou COMECE_AQUI.md                                        │
│     └─ Resumo visual e 4 passos para começar (5 min)                        │
│                                                                             │
│  2. CHECKLIST.md                                                            │
│     └─ Passo a passo com checklist (10 min)                                │
│                                                                             │
│  3. Testar: node test-db.js                                                │
│     └─ Diagnosticar qualquer problema                                     │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════════════════════════

📖 DOCUMENTAÇÃO POR NÍVEL

🟢 INICIANTE (começa aqui!)
─────────────────────────────────────────────────────────────────────────────
  • START_HERE.txt ................. Resumo super rápido
  • COMECE_AQUI.md ................. 4 passos simples
  • QUICK_REFERENCE.txt ............ Referência rápida
  • ROADMAP.md ..................... Visão geral do projeto

🟡 INTERMEDIÁRIO (quando precisa de mais detalhes)
─────────────────────────────────────────────────────────────────────────────
  • CHECKLIST.md ................... Passo a passo completo
  • QUICK_START.md ................. Setup em 15 minutos
  • ARQUITETURA.md ................. Diagrama e fluxo de dados

🔴 AVANÇADO (quando precisa de tudo)
─────────────────────────────────────────────────────────────────────────────
  • DATABASE_SETUP.md .............. Setup super detalhado
  • EXEMPLO_MIGRACAO.md ............ Como adaptar componentes React
  • README_DATABASE.md ............. Índice completo com links

═══════════════════════════════════════════════════════════════════════════════

🎯 ENCONTRAR O QUE PRECISA

Quero...                          Leia...
─────────────────────────────────────────────────────────────────────────────
Começar rápido                    START_HERE.txt ou COMECE_AQUI.md
Ver 4 passos simples              COMECE_AQUI.md
Seguir um checklist               CHECKLIST.md
Entender a arquitetura            ARQUITETURA.md
Setup detalhado do banco          DATABASE_SETUP.md
Adaptar meus componentes          EXEMPLO_MIGRACAO.md
Ver todos os arquivos criados     FILES_CREATED.md
Ter referência rápida             QUICK_REFERENCE.txt
Visão geral do projeto            ROADMAP.md
Index com tudo                    README_DATABASE.md

═══════════════════════════════════════════════════════════════════════════════

⚡ COMANDOS ESSENCIAIS

npm install express pg cors dotenv
  → Instalar dependências do servidor

node test-db.js
  → Testar conexão com banco

npm run dev:server
  → Rodar servidor backend (localhost:3001)

npm run dev
  → Rodar frontend (localhost:5173)

═══════════════════════════════════════════════════════════════════════════════

🔗 ENDPOINTS

http://localhost:3001/api/lawyers
http://localhost:3001/api/check-ins
http://localhost:3001/api/hearings
http://localhost:3001/api/processes
http://localhost:3001/api/weekly-data
http://localhost:3001/api/evolution-data
http://localhost:3001/api/audience-summary
http://localhost:3001/api/test-connection

═══════════════════════════════════════════════════════════════════════════════

💾 ARQUIVOS PRINCIPAIS

Configuração:
  .env ............................ Credenciais (já pronto!)
  database_schema.sql ............. Criar tabelas
  package-server.json ............. Dependências servidor

Backend:
  server.js ....................... API Express

Frontend:
  services/dbService.ts ........... Funções para API
  components/ExampleDatabaseUsage.tsx ... Exemplo

Testes:
  test-db.js ...................... Diagnosticar

═══════════════════════════════════════════════════════════════════════════════

🚨 PROBLEMAS COMUNS

ECONNREFUSED
  → Verificar firewall/VPN
  → Verificar host/porta em .env
  → Executar: node test-db.js

password authentication failed
  → Verificar usuário/senha em .env
  → Tentar sem senha (DB_PASSWORD=)

database 'checkin' does not exist
  → Criar database no PostgreSQL
  → Executar: CREATE DATABASE checkin;

Table not found
  → Executar database_schema.sql
  → Verificar se estou na database "checkin"

CORS error
  → Verificar se backend está rodando
  → Testar: http://localhost:3001/api/lawyers

═══════════════════════════════════════════════════════════════════════════════

✅ CHECKLIST DE SETUP

[ ] 1. Ler COMECE_AQUI.md
[ ] 2. npm install express pg cors dotenv
[ ] 3. Executar database_schema.sql no PostgreSQL
[ ] 4. node test-db.js (deve passar)
[ ] 5. npm run dev:server (terminal 1)
[ ] 6. npm run dev (terminal 2)
[ ] 7. http://localhost:5173 (abrir no navegador)
[ ] 8. Dados aparecendo! ✨

═══════════════════════════════════════════════════════════════════════════════

📊 ESTRUTURA DO BANCO

Database: checkin

Tables:
  • lawyers (id, name, avatarUrl)
  • check_ins (id, lawyer_id, date, status)
  • processes (id, number, lawyer_id)
  • hearings (id, lawyer_id, date, time, confirmation)

═══════════════════════════════════════════════════════════════════════════════

🎯 SEUS DADOS DE CONEXÃO

Host: 84.46.246.201
Porta: 5433
Database: checkin
Usuário: admin
Senha: (vazia - confirmada em .env)

═══════════════════════════════════════════════════════════════════════════════

🚀 PRÓXIMO PASSO

Abra: COMECE_AQUI.md

E siga os 4 passos!

═══════════════════════════════════════════════════════════════════════════════

Sucesso! 🎉
