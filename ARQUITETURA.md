# 🏗️ Arquitetura da Aplicação

## Diagrama de Fluxo de Dados

```
┌─────────────────────────────────────────────────────────────────┐
│                     NAVEGADOR (React App)                        │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ Components (Dashboard, Header, etc)                      │   │
│  │ - useFetch() hooks                                       │   │
│  │ - useState() para dados                                  │   │
│  └──────────────────────────┬───────────────────────────────┘   │
│                             │                                     │
│  localhost:5173            │ HTTP GET/POST                       │
└─────────────────────────────┼─────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────┐
│         SERVIDOR Node.js/Express (localhost:3001)            │
│  ┌──────────────────────────────────────────────────────┐    │
│  │ server.js                                            │    │
│  │ - GET /api/lawyers                                   │    │
│  │ - GET /api/check-ins                                 │    │
│  │ - GET /api/hearings                                  │    │
│  │ - GET /api/processes                                 │    │
│  │ - GET /api/weekly-data                               │    │
│  │ - GET /api/evolution-data                            │    │
│  │ - GET /api/audience-summary                          │    │
│  └──────────────────┬───────────────────────────────────┘    │
│                     │                                          │
│  3001               │ pg.Pool.query()                         │
└─────────────────────┼──────────────────────────────────────────┘
                      │
                      ▼
┌──────────────────────────────────────────────────────────────┐
│     PostgreSQL Database (84.46.246.201:5433)                 │
│  Database: checkin                                           │
│  ┌──────────────────────────────────────────────────────┐    │
│  │ ┌──────────────┐   ┌──────────────┐                │    │
│  │ │   lawyers    │   │  check_ins   │                │    │
│  │ ├──────────────┤   ├──────────────┤                │    │
│  │ │ id (PK)      │   │ id (PK)      │                │    │
│  │ │ name         │   │ lawyer_id(FK)├──┐             │    │
│  │ │ avatarUrl    │   │ date         │  │             │    │
│  │ │ email        │   │ status       │  │             │    │
│  │ │ phone        │   └──────────────┘  │             │    │
│  │ └──────────────┘                     │             │    │
│  │                                      │             │    │
│  │ ┌──────────────┐   ┌──────────────┐ │             │    │
│  │ │ processes    │   │  hearings    │ │             │    │
│  │ ├──────────────┤   ├──────────────┤ │             │    │
│  │ │ id (PK)      │   │ id (PK)      │ │             │    │
│  │ │ number       │   │ lawyer_id(FK)├─┘             │    │
│  │ │ lawyer_id(FK)├───┤ date         │                │    │
│  │ │ status       │   │ time         │                │    │
│  │ └──────────────┘   │ location     │                │    │
│  │                    │ confirmation │                │    │
│  │                    └──────────────┘                │    │
│  └──────────────────────────────────────────────────────┘    │
│                                                               │
│  User: admin                                                 │
│  Host: 84.46.246.201:5433                                    │
└──────────────────────────────────────────────────────────────┘
```

---

## Fluxo de Dados Detalhado

### 1️⃣ **Componente React precisa de dados**

```typescript
// Em qualquer componente
useEffect(() => {
  fetchLawyers().then(setLawyers);
}, []);
```

### 2️⃣ **Função faz requisição HTTP**

```typescript
// services/dbService.ts
export async function fetchLawyers() {
  const response = await fetch('http://localhost:3001/api/lawyers');
  return await response.json();
}
```

### 3️⃣ **Express recebe e consulta BD**

```javascript
// server.js
app.get('/api/lawyers', async (req, res) => {
  const result = await pool.query('SELECT * FROM lawyers ORDER BY name');
  res.json(result.rows);
});
```

### 4️⃣ **PostgreSQL retorna dados**

```sql
-- Resultado da query
SELECT * FROM lawyers WHERE id > 0;
```

### 5️⃣ **Dados voltam ao componente**

```typescript
// Dados aparecem no estado React
setLawyers([
  { id: 1, name: 'Dr. Carlos Silva', avatarUrl: '...' },
  { id: 2, name: 'Dra. Ana Paula', avatarUrl: '...' }
]);
```

### 6️⃣ **Componente renderiza**

```tsx
{lawyers.map(lawyer => <p key={lawyer.id}>{lawyer.name}</p>)}
```

---

## Requisitos

```
┌─────────────────┬────────────────┬──────────────────┐
│   Frontend      │    Backend     │      BD          │
├─────────────────┼────────────────┼──────────────────┤
│ Node.js         │ Node.js        │ PostgreSQL       │
│ npm 8+          │ npm 8+         │ 12+              │
│ React 19        │ Express 4.18   │ 84.46.246.201    │
│ TypeScript      │ pg 8.11        │ Port: 5433       │
│ localhost:5173  │ localhost:3001 │ DB: checkin      │
└─────────────────┴────────────────┴──────────────────┘
```

---

## Ciclo de Vida da Aplicação

```
1. npm install              → Instala dependências
2. npm run dev              → Inicia Vite (localhost:5173)
3. node --watch server.js   → Inicia Express (localhost:3001)
4. Componente React monta   → useEffect executa
5. fetchLawyers()           → Requisição HTTP GET
6. Express recebe request   → /api/lawyers
7. pool.query()             → SELECT * FROM lawyers
8. PostgreSQL processa      → Retorna dados
9. res.json()               → Express envia JSON
10. .then(setLawyers)       → React atualiza estado
11. Component re-renders    → UI mostra dados
12. (Repetir a cada change) → Atualização em tempo real
```

---

## Variáveis de Ambiente

```
.env
├── DB_HOST=84.46.246.201    ← Host do banco
├── DB_PORT=5433            ← Porta do PostgreSQL
├── DB_NAME=checkin          ← Nome da database
├── DB_USER=admin            ← Usuário
├── DB_PASSWORD=             ← Senha (vazia se não houver)
└── PORT=3001                ← Porta do servidor Express
```

---

## Testes de Conectividade

```bash
# 1. Testar banco de dados
node test-db.js

# 2. Testar servidor
curl http://localhost:3001/api/test-connection

# 3. Testar frontend
npm run dev  # Abra http://localhost:5173

# 4. Ver logs do servidor
npm run dev:server  # Mostra todas as requisições
```

---

## 🎯 Resumo

- **Frontend** (React) → faz requisições HTTP
- **Backend** (Node.js) → recebe requisições e consulta banco
- **Database** (PostgreSQL) → armazena e retorna dados
- **Conexão** → TCP/IP via Express + pg driver

Simples! 🚀
