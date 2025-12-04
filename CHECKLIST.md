✅ CHECKLIST DE CONFIGURAÇÃO

## 📋 PASSO A PASSO FINAL

### FASE 1: PREPARAÇÃO (5 minutos)

- [ ] Ler este arquivo até o final
- [ ] Ler `QUICK_START.md` 
- [ ] Copiar credenciais para `.env` (já está pronto!)

### FASE 2: DEPENDÊNCIAS (5 minutos)

```bash
# Instalar dependências do servidor
npm install express pg cors dotenv
```

- [ ] Verificar se instalou sem erros

### FASE 3: BANCO DE DADOS (10 minutos)

- [ ] Abrir pgAdmin: http://localhost:5050
  - Ou usar: psql no terminal
  
- [ ] Conectar ao servidor PostgreSQL
  - Host: 84.46.246.201
  - Porta: 5433
  - Usuário: admin
  
- [ ] Abrir database "checkin"
  
- [ ] Executar arquivo `database_schema.sql`
  - Copiar todo o conteúdo
  - Colar em Query Tool
  - Executar (F5)

### FASE 4: TESTES (5 minutos)

```bash
# Terminal 1: Testar conexão
node test-db.js
```

- [ ] Deve mostrar ✅ Conexão bem-sucedida!
- [ ] Deve listar tabelas: lawyers, processes, check_ins, hearings

### FASE 5: INICIAR SERVIDORES (2 minutos)

```bash
# Terminal 1: Backend
npm run dev:server

# Terminal 2: Frontend  
npm run dev
```

- [ ] Backend rodando em: http://localhost:3001
- [ ] Frontend rodando em: http://localhost:5173

### FASE 6: VERIFICAÇÃO FINAL (2 minutos)

- [ ] Abrir http://localhost:3001/api/lawyers
  - Deve retornar JSON com advogados

- [ ] Abrir http://localhost:5173
  - Dashboard deve carregar com dados reais

- [ ] Verificar console (F12) - não deve ter erros

---

## 📁 ARQUIVOS CRIADOS

```
User Dashboard/
├── .env                          ← Credenciais ⭐
├── server.js                     ← Backend ⭐
├── test-db.js                    ← Teste conexão
├── database_schema.sql           ← Script BD ⭐
├── package-server.json           ← Deps servidor
├── setup.bat                      ← Setup Windows
├── setup.sh                       ← Setup Linux/Mac
├── services/
│   └── dbService.ts              ← Funções API ⭐
├── components/
│   ├── ExampleDatabaseUsage.tsx   ← Exemplo código
├── QUICK_START.md                ← Guia rápido ⭐
├── DATABASE_SETUP.md             ← Setup detalhado ⭐
├── ARQUITETURA.md                ← Diagrama
└── EXEMPLO_MIGRACAO.md           ← Como migrar
```

⭐ = Arquivos mais importantes

---

## 🔗 ENDPOINTS DA API

**Base URL:** `http://localhost:3001/api`

| Endpoint | Dados | Exemplo |
|----------|-------|---------|
| `/test-connection` | Testa BD | `{"success":true,"timestamp":"..."}`  |
| `/lawyers` | Advogados | `[{"id":1,"name":"Dr. Carlos",...}]` |
| `/check-ins` | Estatísticas | `{"done":127,"pending":18,...}` |
| `/hearings` | Audiências | `[{"id":1,"date":"2024-12-04",...}]` |
| `/processes` | Processos | `[{"id":1,"number":"0001234-56",...}]` |
| `/weekly-data` | Semanal | `[{"day":"Seg","Feito":15,...}]` |
| `/evolution-data` | Mensal | `[{"month":"Jul","total":220,...}]` |
| `/audience-summary` | Resumo hoje | `{"total_today":32,"confirmed":27,...}` |

---

## 💻 COMANDOS IMPORTANTES

```bash
# Frontend
npm run dev           # Iniciar Vite
npm run build         # Build produção
npm run preview       # Preview build

# Backend
npm run dev:server    # Iniciar com watch
npm run server        # Iniciar normal
node test-db.js       # Testar conexão
node server.js        # Iniciar server

# Setup
npm install           # Instalar deps
npm install express pg cors dotenv  # Instalar servidor
bash setup.sh         # Setup (Linux/Mac)
setup.bat             # Setup (Windows)
```

---

## 🚨 ERROS COMUNS & SOLUÇÕES

### ❌ "Cannot find module 'express'"
```bash
npm install express pg cors dotenv
```

### ❌ "ECONNREFUSED 84.46.246.201:5433"
- Testar firewall/VPN
- Confirmar host/porta no `.env`
- Confirmar que BD está online

### ❌ "FATAL: password authentication failed"
- Confirmar credenciais no `.env`
- Tentar BD sem senha (DB_PASSWORD vazio)

### ❌ "database 'checkin' does not exist"
- Criar: `CREATE DATABASE checkin;`
- Ou verificar se database já existe

### ❌ "Tabelas não encontradas"
- Executar `database_schema.sql` no PostgreSQL
- Verificar se estou na database correta

### ❌ "Frontend não vê dados do backend"
- Verificar se backend está rodando: http://localhost:3001/api/lawyers
- Verificar console (F12) por erros CORS
- Confirmar que URL no .env está correta

---

## 📊 ESTRUTURA DO BANCO

```
Database: checkin

TABLES:
  ├── lawyers
  │   ├── id (INT PK)
  │   ├── name (VARCHAR)
  │   └── avatarUrl (VARCHAR)
  │
  ├── check_ins
  │   ├── id (INT PK)
  │   ├── lawyer_id (INT FK)
  │   ├── date (DATE)
  │   └── status (VARCHAR) [done|pending|late]
  │
  ├── processes
  │   ├── id (INT PK)
  │   ├── number (VARCHAR UNIQUE)
  │   └── lawyer_id (INT FK)
  │
  └── hearings
      ├── id (INT PK)
      ├── lawyer_id (INT FK)
      ├── date (DATE)
      ├── time (TIME)
      ├── location (VARCHAR)
      └── confirmation (VARCHAR)
```

---

## 📞 VERIFICAÇÃO RÁPIDA

Executar em ordem:

```bash
# 1. Testar conexão BD
node test-db.js
# ✅ Deve mostrar: Conexão bem-sucedida!

# 2. Iniciar backend
npm run dev:server
# ✅ Deve mostrar: "Servidor rodando na porta 3001"

# 3. Em outro terminal, testar API
curl http://localhost:3001/api/lawyers
# ✅ Deve retornar JSON com advogados

# 4. Iniciar frontend
npm run dev
# ✅ Deve mostrar: "VITE v6.2.0 ready in XX ms"

# 5. Abrir no navegador
# ✅ http://localhost:5173 com dados do banco
```

---

## ✨ PRÓXIMOS PASSOS (Opcional)

1. **Modificar componentes** para usar dados reais
   - Ver `EXEMPLO_MIGRACAO.md`

2. **Adicionar mais endpoints** no servidor
   - Exemplo em `server.js`

3. **Deploy em produção**
   - Docker já está configurado
   - Ver `docker-compose.yml`

4. **Adicionar autenticação**
   - JWT tokens
   - Express middleware

---

## 🎉 PRONTO PARA COMEÇAR!

Se chegou até aqui, você tem tudo configurado!

**Dúvidas?** Execute: `node test-db.js`

**Sucesso!** 🚀
