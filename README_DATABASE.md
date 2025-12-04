# 📚 DOCUMENTAÇÃO - CONEXÃO COM BANCO DE DADOS

Bem-vindo! Este é seu guia completo para conectar o dashboard ao PostgreSQL.

---

## 🎯 COMECE AQUI

### 1️⃣ **Para setup rápido (5-10 min)**
→ Leia: [`CHECKLIST.md`](./CHECKLIST.md)

### 2️⃣ **Para entender a arquitetura**
→ Leia: [`ARQUITETURA.md`](./ARQUITETURA.md)

### 3️⃣ **Para setup detalhado**
→ Leia: [`DATABASE_SETUP.md`](./DATABASE_SETUP.md)

### 4️⃣ **Para começar rápido**
→ Leia: [`QUICK_START.md`](./QUICK_START.md)

---

## 📋 SEUS ARQUIVOS

### 🗂️ Configuração
- **`.env`** - Credenciais do banco (já pronto!)
  ```
  Host: 84.46.246.201:5433
  Database: checkin
  Usuario: admin
  ```

- **`database_schema.sql`** - Script para criar tabelas
  - Execute este arquivo no PostgreSQL

### 💻 Servidor Backend
- **`server.js`** - API Express com endpoints
  - Conecta ao PostgreSQL
  - 8 endpoints prontos
  - Roda em localhost:3001

- **`package-server.json`** - Dependências do servidor
  - express, pg, cors, dotenv

### 🔗 Conexão com Frontend
- **`services/dbService.ts`** - Funções para chamar API
  - fetchLawyers()
  - fetchCheckInStats()
  - fetchWeeklyData()
  - ... e mais!

- **`components/ExampleDatabaseUsage.tsx`** - Exemplo de uso
  - Mostra como usar os dados em componentes

### 🧪 Teste & Deploy
- **`test-db.js`** - Testa conexão com banco
  - Execute: `node test-db.js`

- **`setup.bat`** - Setup automático (Windows)
  - Execute: `setup.bat`

- **`setup.sh`** - Setup automático (Linux/Mac)
  - Execute: `bash setup.sh`

### 📖 Documentação
- **`CHECKLIST.md`** - Checklist de configuração ⭐
- **`ARQUITETURA.md`** - Diagrama e fluxo de dados
- **`DATABASE_SETUP.md`** - Guia detalhado
- **`QUICK_START.md`** - Guia rápido
- **`EXEMPLO_MIGRACAO.md`** - Como migrar componentes

---

## 🚀 QUICKSTART (Copie e Cole)

### Passo 1: Instalar
```bash
npm install express pg cors dotenv
```

### Passo 2: Setup banco (no PostgreSQL)
```sql
-- Copie o conteúdo de database_schema.sql
-- E execute no seu PostgreSQL
```

### Passo 3: Testar
```bash
node test-db.js
```

### Passo 4: Iniciar (2 terminais)
```bash
# Terminal 1
npm run dev:server

# Terminal 2
npm run dev
```

### Passo 5: Abrir
```
Frontend: http://localhost:5173
Backend:  http://localhost:3001/api/lawyers
```

---

## 🔌 ENDPOINTS

| Endpoint | O que retorna |
|----------|---------------|
| `/api/lawyers` | Lista de advogados |
| `/api/check-ins` | Estatísticas de check-ins |
| `/api/hearings` | Audiências do dia |
| `/api/processes` | Processos jurídicos |
| `/api/weekly-data` | Dados dos últimos 7 dias |
| `/api/evolution-data` | Dados dos últimos 6 meses |
| `/api/audience-summary` | Resumo de audiências hoje |
| `/api/test-connection` | Testa conexão com BD |

---

## 💡 COMO USAR NOS COMPONENTES

```typescript
import { fetchLawyers } from '../services/dbService';

export function MyComponent() {
  const [lawyers, setLawyers] = useState([]);

  useEffect(() => {
    fetchLawyers().then(setLawyers);
  }, []);

  return (
    <div>
      {lawyers.map(lawyer => (
        <p key={lawyer.id}>{lawyer.name}</p>
      ))}
    </div>
  );
}
```

---

## ❓ PROBLEMAS?

Execute este comando para diagnosticar:
```bash
node test-db.js
```

Isso mostrará:
- ✅ Se consegue conectar ao PostgreSQL
- ✅ Quais tabelas existem
- ✅ Quantos registros cada tabela tem
- ❌ Qual é o erro (se houver)

---

## 📊 ESTRUTURA DO BANCO

```
checkin (database)
├── lawyers
│   ├── id
│   ├── name
│   └── avatarUrl
├── check_ins
│   ├── id, lawyer_id, date, status
├── processes
│   ├── id, number, lawyer_id
└── hearings
    ├── id, lawyer_id, date, time, confirmation
```

---

## 🔑 SUAS CREDENCIAIS

```
Host: 84.46.246.201
Porta: 5433
Database: checkin
Usuário: admin
Senha: (verifique no .env)
```

---

## 📞 SUPORTE

### Erro de Conexão?
- Verificar firewall/VPN
- Testar: `node test-db.js`
- Ver `.env` para credenciais

### Erro de Autenticação?
- Verificar usuário/senha em `.env`
- Confirmar permissões do usuário no PostgreSQL

### Tabelas não existem?
- Executar `database_schema.sql` no PostgreSQL
- Verificar se estou na database "checkin"

### Frontend não vê dados?
- Verificar se backend está rodando
- Testar: `curl http://localhost:3001/api/lawyers`
- Verificar console (F12) por erros

---

## 🎯 PRÓXIMOS PASSOS

1. ✅ Ler `CHECKLIST.md`
2. ✅ Executar setup
3. ✅ Testar conexão
4. ✅ Iniciar servidores
5. ✅ Modificar componentes (ver `EXEMPLO_MIGRACAO.md`)

---

## 📚 ÍNDICE COMPLETO

```
📖 Documentação
├── README.md (este arquivo)
├── CHECKLIST.md ⭐ (comece aqui!)
├── QUICK_START.md (5 min)
├── ARQUITETURA.md (entenda o fluxo)
├── DATABASE_SETUP.md (setup detalhado)
├── EXEMPLO_MIGRACAO.md (adaptar componentes)
│
💾 Configuração
├── .env ← suas credenciais
├── database_schema.sql ← criar tabelas
├── server.js ← API Express
├── package-server.json ← deps servidor
│
🔗 Integração Frontend
├── services/
│   └── dbService.ts ← funções API
├── components/
│   └── ExampleDatabaseUsage.tsx ← exemplo
│
🧪 Testes
├── test-db.js ← diagnosticar
├── setup.bat ← setup Windows
└── setup.sh ← setup Linux/Mac
```

---

## ✨ CHECKLIST RÁPIDO

- [ ] Ler `CHECKLIST.md`
- [ ] Instalar: `npm install express pg cors dotenv`
- [ ] Executar: `database_schema.sql` no PostgreSQL
- [ ] Testar: `node test-db.js` (deve passar)
- [ ] Terminal 1: `npm run dev:server`
- [ ] Terminal 2: `npm run dev`
- [ ] Abrir: http://localhost:5173
- [ ] ✅ Dados aparecem no dashboard!

---

## 🎉 PRONTO!

Tudo está configurado. Siga o `CHECKLIST.md` e você estará rodando em 15 minutos!

**Sucesso!** 🚀

---

*Criado em 04/12/2025*
*Para suporte: Execute `node test-db.js`*
