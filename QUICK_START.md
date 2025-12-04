# 🎯 Resumo da Configuração - Banco de Dados PostgreSQL

## ✅ O que foi criado:

### 📁 Arquivos principais:
- **`server.js`** - Servidor Node.js/Express com endpoints para o banco
- **`services/dbService.ts`** - Funções para chamar a API do backend
- **`.env`** - Variáveis de ambiente (suas credenciais)
- **`database_schema.sql`** - Script para criar tabelas no PostgreSQL
- **`package-server.json`** - Dependências do servidor
- **`test-db.js`** - Script para testar conexão

### 📚 Documentação:
- **`DATABASE_SETUP.md`** - Guia completo de setup
- **`setup.bat`** - Script de setup automático (Windows)

---

## 🚀 PRÓXIMOS PASSOS (importante!):

### 1. **Instalar dependências do servidor:**
```bash
npm install express pg cors dotenv
```

### 2. **Criar as tabelas no PostgreSQL:**

Opção A (Recomendado - pgAdmin):
- Abra http://localhost:5050 (pgAdmin)
- Conecte ao servidor 84.46.246.201:5433 (user: admin)
- Abra database "checkin"
- Query Tool → copie todo o conteúdo de `database_schema.sql` → Execute

Opção B (Terminal):
```bash
psql -h 84.46.246.201 -p 5433 -U admin -d checkin -f database_schema.sql
```

### 3. **Testar a conexão:**
```bash
node test-db.js
```

Deve mostrar ✅ Conexão bem-sucedida!

### 4. **Iniciar o servidor:**
```bash
node server.js
# ou em desenvolvimento:
node --watch server.js
```

### 5. **Em outro terminal, iniciar o frontend:**
```bash
npm run dev
```

---

## 📊 Estrutura do Banco de Dados:

```
📦 checkin (database)
├── lawyers (advogados)
│   ├── id
│   ├── name
│   └── avatarUrl
├── check_ins (check-ins)
│   ├── id
│   ├── lawyer_id (FK)
│   ├── date
│   ├── status (done/pending/late)
├── processes (processos)
│   ├── id
│   ├── number
│   ├── lawyer_id (FK)
│   └── status
└── hearings (audiências)
    ├── id
    ├── lawyer_id (FK)
    ├── date
    ├── time
    ├── location
    └── confirmation
```

---

## 🔌 Endpoints da API:

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/test-connection` | Testa conexão com BD |
| GET | `/api/lawyers` | Lista advogados |
| GET | `/api/check-ins` | Estatísticas de check-ins |
| GET | `/api/hearings` | Audiências do dia |
| GET | `/api/processes` | Processos |
| GET | `/api/weekly-data` | Dados semanais |
| GET | `/api/evolution-data` | Evolução mensal |
| GET | `/api/audience-summary` | Resumo audiências |

---

## 💡 Como usar nos componentes React:

```tsx
import { fetchLawyers, fetchCheckInStats } from '../services/dbService';

useEffect(() => {
  fetchLawyers().then(setLawyers);
  fetchCheckInStats().then(setStats);
}, []);
```

---

## ❓ Troubleshooting:

**❌ Erro: "Cannot connect to 84.46.246.201:5433"**
- Verificar firewall/VPN
- Confirmar que banco está online

**❌ Erro: "FATAL: password authentication failed"**
- Confirmar credenciais no `.env`
- Verificar permissões do usuário "admin"

**❌ Erro: "database 'checkin' does not exist"**
- Criar database: `CREATE DATABASE checkin;`
- Ou colocar dados em database existente

---

## 📞 Suporte:

Qualquer dúvida, execute:
```bash
node test-db.js
```

Isso mostrará exatamente o que está funcionando e o que não está!

---

**Pronto para começar? Bora lá!** 🎉
