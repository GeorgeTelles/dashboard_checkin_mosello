# 🔗 Guia de Conexão com Banco de Dados

## Configuração do Backend (Node.js + Express + PostgreSQL)

### 1️⃣ **Instalar Dependências do Servidor**

```bash
npm install express pg cors dotenv
npm install --save-dev @types/express @types/node
```

### 2️⃣ **Configurar Variáveis de Ambiente**

O arquivo `.env` já foi criado com seus dados:

```
DB_HOST=84.46.246.201
DB_PORT=5433
DB_NAME=checkin
DB_USER=admin
DB_PASSWORD=
PORT=3001
```

⚠️ **Se a senha não for vazia**, adicione:
```
DB_PASSWORD=sua_senha_aqui
```

### 3️⃣ **Criar Estrutura do Banco de Dados**

Execute o arquivo `database_schema.sql` no seu PostgreSQL:

**Via pgAdmin:**
1. Abra http://localhost:5050 (pgAdmin)
2. Conecte ao servidor `84.46.246.201:5433`
3. Usuario: `admin`
4. Abra a database `checkin`
5. Abra a ferramenta Query
6. Cole o conteúdo de `database_schema.sql`
7. Execute (F5)

**Ou via terminal psql:**
```bash
psql -h 84.46.246.201 -p 5433 -U admin -d checkin -f database_schema.sql
```

### 4️⃣ **Executar o Servidor**

**Em desenvolvimento:**
```bash
npm run dev:server
```

**Em produção:**
```bash
npm run server
```

O servidor rodará em `http://localhost:3001`

### 5️⃣ **Testar a Conexão**

```bash
curl http://localhost:3001/api/test-connection
```

Deve retornar:
```json
{
  "success": true,
  "timestamp": "2025-12-04T10:30:45.123Z"
}
```

### 6️⃣ **Endpoints Disponíveis**

| Endpoint | Descrição |
|----------|-----------|
| `GET /api/test-connection` | Testa conexão com BD |
| `GET /api/lawyers` | Lista todos os advogados |
| `GET /api/check-ins` | Estatísticas de check-ins |
| `GET /api/hearings` | Lista de audiências |
| `GET /api/processes` | Lista de processos |
| `GET /api/weekly-data` | Dados semanais |
| `GET /api/evolution-data` | Dados de evolução |
| `GET /api/audience-summary` | Resumo de audiências |

---

## 🚀 Próximos Passos

1. **Abra dois terminais:**
   - Terminal 1: `npm run dev` (React frontend)
   - Terminal 2: `npm run dev:server` (Node.js backend)

2. **Verifique se está funcionando:**
   - Frontend: http://localhost:5173
   - Backend: http://localhost:3001/api/lawyers

3. **Os dados do banco aparecem automaticamente no dashboard!**

---

## ⚠️ Troubleshooting

**Erro: "ECONNREFUSED"**
- Verifique se o host/porta está correto no `.env`
- Verifique se sua VPN/Firewall permite a conexão

**Erro: "FATAL: password authentication failed"**
- Confirme o usuário e senha no `.env`
- Verifique permissões do usuário `admin` no PostgreSQL

**Erro: "database 'checkin' does not exist"**
- Crie o database: `CREATE DATABASE checkin;`
- Ou copie dados de outro database para `checkin`

---

## 📝 Inserir Dados Manualmente (Opcional)

Se quiser adicionar dados de teste:

```sql
INSERT INTO lawyers (name, "avatarUrl") 
VALUES ('Dr. João Silva', 'https://i.pravatar.cc/150?u=joao');

INSERT INTO check_ins (lawyer_id, date, status) 
VALUES (1, CURRENT_DATE, 'done');

INSERT INTO hearings (lawyer_id, date, time, location, confirmation)
VALUES (1, CURRENT_DATE, '09:30', 'Fórum Central - Sala 201', 'Confirmado');
```
