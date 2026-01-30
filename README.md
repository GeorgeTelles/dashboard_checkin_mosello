# Dashboard de Check-in de Audiências

## Visão Geral

O Dashboard de Check-in de Audiências é uma aplicação web desenvolvida em React com TypeScript que permite aos gestores de pauta monitorar em tempo real o status de confirmação de presença dos advogados em audiências judiciais. 

O sistema fornece uma interface intuitiva e responsiva para visualização centralizada de todas as audiências, seus status de check-in e check-out, métricas de confirmação e ferramentas de filtro por data e grupo/área.

### Propósito

- **Monitoramento em Tempo Real**: Acompanhar confirmações de presença dos advogados
- **Gestão Proativa**: Identificar rapidamente audiências sem confirmação
- **Análise de Performance**: Avaliar taxa de confirmação e efetividade do processo
- **Organização por Área**: Filtrar e visualizar audiências por grupo de trabalho

### Público-Alvo

- **Gestores de Pauta**: Supervisores responsáveis por monitorar audiências de áreas específicas
- **Desenvolvedores**: Equipe técnica responsável pela manutenção e evolução do sistema
- **Administradores**: Equipe de TI responsável pelo deploy e infraestrutura

## Arquitetura

O sistema segue uma arquitetura cliente-servidor com três camadas principais:

```
┌─────────────────────────────────────────────────────────────┐
│                        FRONTEND                              │
│  React 19 + TypeScript + Vite + TailwindCSS                │
│  - Dashboard (componente principal)                         │
│  - CheckInPanel (métricas)                                  │
│  - DatabaseProcessList (lista de audiências)               │
│  - Filtros de data e grupo                                  │
└────────────────────┬────────────────────────────────────────┘
                     │ HTTP/REST
                     │ /api/audiencias
┌────────────────────┴────────────────────────────────────────┐
│                        BACKEND                               │
│  Node.js + Express                                          │
│  - API REST para consulta de audiências                    │
│  - Filtros por período (startDate, endDate)                │
│  - Conexão com PostgreSQL                                   │
└────────────────────┬────────────────────────────────────────┘
                     │ PostgreSQL Protocol
                     │ SSL Connection
┌────────────────────┴────────────────────────────────────────┐
│                    BANCO DE DADOS                            │
│  PostgreSQL 14+                                             │
│  - Tabela: audiencias_check                                 │
│  - Dados de audiências, advogados e status                 │
└─────────────────────────────────────────────────────────────┘
```


### Integração com Sistema de Mensagens

O dashboard integra-se com um sistema backend separado que gerencia:
- Envio automatizado de mensagens de check-in via WhatsApp (30 min antes da audiência)
- Envio automatizado de mensagens de check-out via WhatsApp (30 min após o início)
- Processamento de respostas dos advogados
- Atualização de status no banco de dados

O dashboard **consome** esses dados para exibição, mas **não gerencia** o envio de mensagens.

## Tecnologias Utilizadas

### Frontend

| Tecnologia | Versão | Propósito |
|-----------|--------|-----------|
| **React** | 19.2.1 | Biblioteca para construção da interface de usuário |
| **TypeScript** | 5.8.2 | Superset JavaScript com tipagem estática |
| **Vite** | 6.2.0 | Build tool e dev server de alta performance |
| **TailwindCSS** | - | Framework CSS utility-first para estilização |
| **Recharts** | 3.5.1 | Biblioteca de gráficos para visualização de dados |

### Backend

| Tecnologia | Versão | Propósito |
|-----------|--------|-----------|
| **Node.js** | 18+ | Runtime JavaScript server-side |
| **Express** | 5.2.1 | Framework web minimalista para Node.js |
| **pg** | 8.16.3 | Cliente PostgreSQL para Node.js |
| **cors** | 2.8.5 | Middleware para habilitar CORS |
| **dotenv** | 17.2.3 | Carregamento de variáveis de ambiente |

### Infraestrutura

| Tecnologia | Propósito |
|-----------|-----------|
| **PostgreSQL** | Banco de dados relacional |
| **Docker** | Containerização da aplicação |
| **Docker Compose** | Orquestração de containers |
| **Nginx/Traefik** | Proxy reverso e balanceamento de carga |


## Estrutura do Projeto

```
projeto/
├── components/                      # Componentes React
│   ├── Dashboard.tsx               # Componente principal do dashboard
│   ├── CheckInPanel.tsx            # Painel de métricas (4 cards)
│   ├── DatabaseProcessList.tsx     # Lista de audiências com filtros
│   ├── AudienceSummary.tsx         # Resumo de audiências
│   ├── WeeklyStatusChart.tsx       # Gráfico de status semanal
│   ├── AudienceEvolutionChart.tsx  # Gráfico de evolução
│   ├── HappeningNow.tsx            # Audiências acontecendo agora
│   ├── Header.tsx                  # Cabeçalho da aplicação
│   ├── Sidebar.tsx                 # Menu lateral
│   ├── LoginPage.tsx               # Página de login
│   ├── UserDropdown.tsx            # Dropdown de usuário
│   ├── ReminderModal.tsx           # Modal de lembretes
│   ├── ProcessList.tsx             # Lista de processos
│   └── OnePage.tsx                 # Página única
├── data/
│   └── mockData.ts                 # Dados mock para desenvolvimento
├── server/                         # Backend Node.js
│   ├── index.js                    # Servidor Express e rotas da API
│   ├── package.json                # Dependências do backend
│   └── Dockerfile                  # Dockerfile do backend
├── doc/                            # Documentação
│   └── manual_backend.md           # Manual do sistema de mensagens
├── types.ts                        # Definições de tipos TypeScript
├── App.tsx                         # Componente raiz da aplicação
├── index.tsx                       # Entry point do React
├── vite.config.ts                  # Configuração do Vite
├── tsconfig.json                   # Configuração do TypeScript
├── package.json                    # Dependências do frontend
├── Dockerfile                      # Dockerfile do frontend
├── docker-compose.yml              # Orquestração de containers
├── nginx.conf                      # Configuração do Nginx
├── .env.example                    # Exemplo de variáveis de ambiente
└── README.md                       # Este arquivo
```


## Componentes React

### Dashboard

**Arquivo**: `components/Dashboard.tsx`

**Responsabilidades**:
- Componente principal que orquestra toda a aplicação
- Gerencia estado global de audiências, datas e grupos selecionados
- Busca dados da API a cada 2 minutos (atualização automática)
- Distribui dados e callbacks para componentes filhos

**Props**: Nenhuma (componente raiz)

**Estados**:
- `audiences: Audience[]` - Lista de audiências carregadas da API
- `error: string | null` - Mensagem de erro em caso de falha
- `startDate: Date` - Data inicial do filtro (padrão: hoje)
- `endDate: Date` - Data final do filtro (padrão: hoje)
- `selectedGroups: string[]` - Grupos selecionados no filtro (padrão: todos)

**Constantes**:
- `USER_GROUPS` - Array com os 6 grupos disponíveis:
  - Controle Contencioso Imobiliário/Agrário
  - Controle Cível
  - Controle Criminal
  - Controle Tributário e Empresarial
  - Controle Trabalhista
  - Controle Contencioso Ambiental

**Fluxo de Dados**:
1. Monta o componente e inicia busca de dados
2. Configura intervalo de 2 minutos para atualização automática
3. Passa dados e callbacks para componentes filhos
4. Limpa intervalo ao desmontar


### CheckInPanel

**Arquivo**: `components/CheckInPanel.tsx`

**Responsabilidades**:
- Exibir 4 cards de métricas principais
- Calcular estatísticas baseadas nos dados filtrados
- Aplicar filtro de grupo nas métricas

**Props**:
- `audiences: any[]` - Lista de audiências
- `startDate: Date` - Data inicial do período
- `endDate: Date` - Data final do período
- `onStartDateChange: (date: Date) => void` - Callback para mudar data inicial
- `onEndDateChange: (date: Date) => void` - Callback para mudar data final
- `selectedGroups: string[]` - Grupos selecionados

**Métricas Calculadas**:
1. **Check-in Feito** (Verde): Conta audiências com status "CONFIRMADO", "FEITO" ou "REALIZADO"
2. **Check-in A Confirmar** (Laranja): Conta audiências com status "A CONFIRMAR" ou "ENVIADO"
3. **Check-ins Não Realizados** (Vermelho): Conta audiências com status "NÃO REALIZADO"
4. **Taxa de Confirmação** (Azul): Calcula `(Check-ins Feitos / Total) × 100`

**Mapeamento de Grupos**:
- Consolida variações de nomes: "Controle Cível - PF" e "Controle Cível Select" → "Controle Cível"

**Comportamento**:
- Se `selectedGroups` está vazio, não exibe nenhuma audiência
- Recalcula métricas automaticamente quando `audiences` ou `selectedGroups` mudam (via `useMemo`)


### DatabaseProcessList

**Arquivo**: `components/DatabaseProcessList.tsx`

**Responsabilidades**:
- Exibir lista completa de audiências em formato de tabela (desktop) ou cards (mobile)
- Fornecer filtros de data e grupo
- Formatar dados da API para exibição
- Ordenar audiências por horário

**Props**:
- `audiences: any[]` - Lista de audiências da API
- `startDate: Date | null` - Data inicial do filtro
- `endDate: Date | null` - Data final do filtro
- `onStartDateChange: (date: Date) => void` - Callback para mudar data inicial
- `onEndDateChange: (date: Date) => void` - Callback para mudar data final
- `selectedGroups?: string[]` - Grupos selecionados (opcional)
- `onSelectedGroupsChange?: (groups: string[]) => void` - Callback para mudar grupos (opcional)

**Estados Internos**:
- `processList: Process[]` - Lista formatada de processos
- `showDatePicker: boolean` - Controla visibilidade do dropdown de data
- `showGroupFilter: boolean` - Controla visibilidade do dropdown de grupo
- `isReminderModalOpen: boolean` - Controla modal de lembretes

**Filtros de Data (Atalhos)**:
- **Ontem**: Define período para o dia anterior
- **Hoje**: Define período para o dia atual (padrão)
- **Amanhã**: Define período para o próximo dia
- **Esta Semana**: Define período de domingo a sábado da semana atual
- **Este Mês**: Define período do primeiro ao último dia do mês atual
- **Período Personalizado**: Permite selecionar data inicial e final manualmente

**Filtro de Grupo**:
- Checkboxes para cada um dos 6 grupos
- Botões "Marcar Todos" e "Desmarcar Todos"
- Seleção múltipla permitida

**Formatação de Dados**:
- Converte dados da API para interface `Process`
- Gera avatar automático usando `ui-avatars.com`
- Formata datas de DD/MM/YYYY para formato legível
- Normaliza status usando mapeamento
- Ordena por horário da audiência (mais cedo primeiro)

**Responsividade**:
- Desktop: Tabela completa com todas as colunas
- Mobile: Cards individuais com informações organizadas


### Outros Componentes

#### AudienceSummary
**Arquivo**: `components/AudienceSummary.tsx`  
**Propósito**: Exibe resumo consolidado das audiências com filtro por grupo

#### WeeklyStatusChart
**Arquivo**: `components/WeeklyStatusChart.tsx`  
**Propósito**: Gráfico de barras mostrando status de check-in por dia da semana

#### AudienceEvolutionChart
**Arquivo**: `components/AudienceEvolutionChart.tsx`  
**Propósito**: Gráfico de linha mostrando evolução de audiências ao longo do tempo

#### HappeningNow
**Arquivo**: `components/HappeningNow.tsx`  
**Propósito**: Lista de audiências acontecendo no momento atual

#### Header
**Arquivo**: `components/Header.tsx`  
**Propósito**: Cabeçalho da aplicação com logo e navegação

#### Sidebar
**Arquivo**: `components/Sidebar.tsx`  
**Propósito**: Menu lateral de navegação

#### LoginPage
**Arquivo**: `components/LoginPage.tsx`  
**Propósito**: Página de autenticação de usuários

#### UserDropdown
**Arquivo**: `components/UserDropdown.tsx`  
**Propósito**: Dropdown com opções de usuário (perfil, logout)

#### ReminderModal
**Arquivo**: `components/ReminderModal.tsx`  
**Propósito**: Modal para configuração de lembretes

#### ProcessList
**Arquivo**: `components/ProcessList.tsx`  
**Propósito**: Lista alternativa de processos

#### OnePage
**Arquivo**: `components/OnePage.tsx`  
**Propósito**: Visualização em página única


## API Endpoints

### GET /api/audiencias

Busca audiências do banco de dados com filtros opcionais de data.

**URL**: `/api/audiencias`

**Método**: `GET`

**Parâmetros de Query**:

| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `startDate` | string | Não | Data inicial no formato YYYY-MM-DD |
| `endDate` | string | Não | Data final no formato YYYY-MM-DD |

**Comportamento**:
- Se `startDate` e `endDate` fornecidos: Retorna audiências no intervalo
- Se apenas `startDate` fornecido: Retorna audiências daquela data específica
- Se nenhum parâmetro fornecido: Retorna TODAS as audiências

**Formato de Resposta**: `application/json`

**Exemplo de Requisição**:
```bash
# Buscar audiências de hoje
GET /api/audiencias?startDate=2024-01-15&endDate=2024-01-15

# Buscar audiências de um período
GET /api/audiencias?startDate=2024-01-10&endDate=2024-01-15

# Buscar todas as audiências
GET /api/audiencias
```

**Exemplo de Resposta** (200 OK):
```json
[
  {
    "id": "123",
    "processo.pasta": "0001234-56.2023.8.26.0100 - Ação Civil",
    "processo_numero": "0001234-56.2023.8.26.0100",
    "data": "15/01/2024",
    "hora": "14:00",
    "encarregado.nome": "João Silva",
    "status_checkin": "CONFIRMADO",
    "hora_checkin": "13:45",
    "status_checkout": "A CONFIRMAR",
    "hora_checkout": null,
    "processo.faseatual.vara": "1ª Vara Cível",
    "grupousuarioid": "Controle Cível"
  }
]
```

**Códigos de Status**:
- `200 OK`: Requisição bem-sucedida
- `500 Internal Server Error`: Erro no servidor ou banco de dados

**Tratamento de Erros**:
```json
{
  "error": "Erro interno do servidor"
}
```


### GET /api/db-test

Testa a conexão com o banco de dados PostgreSQL.

**URL**: `/api/db-test`

**Método**: `GET`

**Parâmetros**: Nenhum

**Formato de Resposta**: `application/json`

**Exemplo de Resposta** (200 OK):
```json
{
  "success": true,
  "dbTime": "2024-01-15T14:30:00.000Z"
}
```

**Exemplo de Resposta** (500 Error):
```json
{
  "success": false,
  "error": "connection timeout"
}
```

**Propósito**: Verificar se o backend consegue conectar ao PostgreSQL

### GET /api/health

Health check do servidor.

**URL**: `/api/health`

**Método**: `GET`

**Parâmetros**: Nenhum

**Formato de Resposta**: `text/plain`

**Exemplo de Resposta** (200 OK):
```
OK
```

**Propósito**: Verificar se o servidor está rodando (usado por load balancers e monitoramento)


## Estrutura de Dados

### Interface Audience

Representa uma audiência retornada pela API.

```typescript
interface Audience {
  id: string;                         // ID único da audiência
  'processo.pasta': string;           // Número completo do processo
  processo_numero: string;            // Número do processo (tratado)
  data: string;                       // Data no formato DD/MM/YYYY
  hora: string;                       // Horário no formato HH:MM
  'encarregado.nome': string;         // Nome do advogado responsável
  status_checkin: string;             // Status do check-in
  hora_checkin?: string;              // Horário da confirmação de check-in
  status_checkout?: string;           // Status do check-out
  hora_checkout?: string;             // Horário da confirmação de check-out
  'processo.faseatual.vara'?: string; // Local da audiência (vara)
  grupousuarioid: string;             // ID do grupo/área do advogado
}
```

### Enum CheckInStatus

Define os status possíveis de check-in e check-out.

```typescript
enum CheckInStatus {
  Feito = "Feito",              // Confirmado/Realizado
  Pendente = "A Confirmar",     // Aguardando resposta
  Atrasado = "Não Realizado",   // Não respondeu ou cancelou
  Nulo = "-"                    // Mensagem ainda não enviada
}
```

### Mapeamento de Status

O sistema normaliza diferentes variações de status para os valores do enum:

| Status no Banco | Status Normalizado | Cor | Significado |
|----------------|-------------------|-----|-------------|
| CONFIRMADO, FEITO, REALIZADO | Feito | Verde | Advogado confirmou presença |
| A CONFIRMAR, ENVIADO | Pendente | Laranja | Mensagem enviada, aguardando resposta |
| NÃO REALIZADO, ATRASADO, NEGATIVA, CANCELADO | Atrasado | Vermelho | Não respondeu ou informou que não vai |
| null, -, (vazio) | Nulo | Cinza | Mensagem ainda não foi enviada |


### Interface Process

Representa um processo formatado para exibição no frontend.

```typescript
interface Process {
  id: string;                    // ID único
  processNumber: string;         // Número do processo
  hearingDate: string;           // Data formatada (ex: "15 jan 2024")
  hearingTime: string;           // Horário (ex: "14:00")
  location?: string;             // Local da audiência
  mainLawyer: Lawyer;            // Advogado responsável
  checkInStatus: CheckInStatus;  // Status do check-in
  confirmationTime: string | null; // Horário da confirmação
  checkOutStatus: CheckInStatus;   // Status do check-out
  checkOutTime: string | null;     // Horário do check-out
}
```

### Interface Lawyer

Representa um advogado.

```typescript
interface Lawyer {
  id: string;        // ID único (gerado a partir do nome)
  name: string;      // Nome completo
  avatarUrl: string; // URL do avatar (gerado via ui-avatars.com)
}
```

### Grupos de Usuário

Array constante com os 6 grupos disponíveis:

```typescript
const USER_GROUPS = [
  'Controle Contencioso Imobiliário/Agrário',
  'Controle Cível',
  'Controle Criminal',
  'Controle Tributário e Empresarial',
  'Controle Trabalhista',
  'Controle Contencioso Ambiental'
];
```

### Mapeamento de Grupos

Alguns grupos no banco de dados são consolidados para simplificar a interface:

```typescript
const GROUP_MAPPING = {
  'Controle Cível - PF': 'Controle Cível',
  'Controle Cível Select': 'Controle Cível'
};
```


## Executar Localmente

### Pré-requisitos

- **Node.js**: Versão 18 ou superior
- **npm**: Versão 9 ou superior (incluído com Node.js)
- **PostgreSQL**: Versão 14 ou superior (ou acesso a um servidor PostgreSQL)
- **Git**: Para clonar o repositório

### Instalação

#### 1. Clone o Repositório

```bash
git clone <url-do-repositorio>
cd <nome-do-projeto>
```

#### 2. Instale as Dependências do Frontend

```bash
npm install
```

#### 3. Instale as Dependências do Backend

```bash
cd server
npm install
cd ..
```

### Configuração

#### 1. Configure as Variáveis de Ambiente do Backend

Crie um arquivo `.env` na pasta `server/`:

```bash
cd server
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações:

```env
# Porta do servidor
PORT=3001

# Configuração do PostgreSQL
PG_HOST=db.mosello.net.br
PG_PORT=5433
PG_DATABASE=checkin
PG_USER=admin
MOSELLO_PG_ADMIN_PASSWORD=sua_senha_aqui
```

**Importante**: Nunca commite o arquivo `.env` com credenciais reais!


#### 2. Configure o Proxy do Frontend (Desenvolvimento)

O frontend usa proxy para redirecionar chamadas `/api/*` para o backend.

Verifique o arquivo `vite.config.ts`:

```typescript
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});
```

### Execução

#### 1. Inicie o Backend

Em um terminal:

```bash
cd server
npm start
```

O servidor iniciará na porta 3001 (ou a porta definida em `PORT`).

Você verá:
```
Servidor da API rodando na porta 3001
```

#### 2. Inicie o Frontend

Em outro terminal (na raiz do projeto):

```bash
npm run dev
```

O Vite iniciará o servidor de desenvolvimento, geralmente na porta 5173.

Você verá:
```
  VITE v6.2.0  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

#### 3. Acesse a Aplicação

Abra seu navegador em: `http://localhost:5173`

### Verificação

Para verificar se tudo está funcionando:

1. **Teste o Backend**:
   ```bash
   curl http://localhost:3001/health
   # Deve retornar: OK
   ```

2. **Teste a Conexão com o Banco**:
   ```bash
   curl http://localhost:3001/db-test
   # Deve retornar: {"success":true,"dbTime":"..."}
   ```

3. **Teste a API de Audiências**:
   ```bash
   curl "http://localhost:3001/audiencias?startDate=2024-01-15&endDate=2024-01-15"
   # Deve retornar um array JSON com audiências
   ```


## Deploy

### Usando Docker

O projeto inclui configuração completa para deploy com Docker e Docker Compose.

#### Estrutura de Containers

```
┌─────────────────────────────────────────┐
│  Nginx/Traefik (Proxy Reverso)         │
│  - Porta 80/443                         │
│  - SSL/TLS                              │
└──────────┬──────────────────────────────┘
           │
           ├─────────────────┬─────────────────┐
           │                 │                 │
    ┌──────▼──────┐   ┌─────▼──────┐   ┌─────▼──────┐
    │  Frontend   │   │  Backend   │   │ PostgreSQL │
    │  (React)    │   │  (Node.js) │   │            │
    │  Porta 80   │   │  Porta 3001│   │  Porta 5432│
    └─────────────┘   └────────────┘   └────────────┘
```

#### 1. Dockerfile do Frontend

O `Dockerfile` na raiz do projeto constrói a imagem do frontend:

```dockerfile
# Build stage
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Características**:
- Multi-stage build para otimizar tamanho da imagem
- Usa Nginx para servir arquivos estáticos
- Copia configuração customizada do Nginx

#### 2. Dockerfile do Backend

O `server/Dockerfile` constrói a imagem do backend:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3001
CMD ["node", "index.js"]
```


#### 3. Docker Compose

O `docker-compose.yml` orquestra todos os serviços:

```yaml
version: '3.8'

services:
  frontend:
    build: .
    ports:
      - "80:80"
    depends_on:
      - backend
    networks:
      - app-network

  backend:
    build: ./server
    ports:
      - "3001:3001"
    environment:
      - PORT=3001
      - PG_HOST=${PG_HOST}
      - PG_PORT=${PG_PORT}
      - PG_DATABASE=${PG_DATABASE}
      - PG_USER=${PG_USER}
      - MOSELLO_PG_ADMIN_PASSWORD=${MOSELLO_PG_ADMIN_PASSWORD}
    networks:
      - app-network

networks:
  app-network:
    driver: bridge
```

#### 4. Configuração do Nginx

O `nginx.conf` configura o proxy reverso:

```nginx
server {
    listen 80;
    server_name localhost;

    # Frontend
    location / {
        root /usr/share/nginx/html;
        try_files $uri $uri/ /index.html;
    }

    # API Proxy
    location /api/ {
        proxy_pass http://backend:3001/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```


### Processo de Deploy

#### 1. Preparação

Crie um arquivo `.env` na raiz do projeto com as variáveis de produção:

```env
PG_HOST=seu-servidor-postgres.com
PG_PORT=5432
PG_DATABASE=checkin
PG_USER=admin
MOSELLO_PG_ADMIN_PASSWORD=senha_segura_aqui
```

#### 2. Build das Imagens

```bash
# Build de todas as imagens
docker-compose build

# Ou build individual
docker build -t dashboard-frontend .
docker build -t dashboard-backend ./server
```

#### 3. Deploy Local (Teste)

```bash
# Inicia todos os serviços
docker-compose up -d

# Verifica logs
docker-compose logs -f

# Para os serviços
docker-compose down
```

#### 4. Deploy em Servidor

**Opção A: Docker Compose no Servidor**

```bash
# 1. Copie os arquivos para o servidor
scp -r . usuario@servidor:/caminho/do/projeto

# 2. SSH no servidor
ssh usuario@servidor

# 3. Entre no diretório
cd /caminho/do/projeto

# 4. Inicie os containers
docker-compose up -d
```

**Opção B: Registry Docker**

```bash
# 1. Tag das imagens
docker tag dashboard-frontend registry.exemplo.com/dashboard-frontend:latest
docker tag dashboard-backend registry.exemplo.com/dashboard-backend:latest

# 2. Push para registry
docker push registry.exemplo.com/dashboard-frontend:latest
docker push registry.exemplo.com/dashboard-backend:latest

# 3. No servidor, pull e execute
docker pull registry.exemplo.com/dashboard-frontend:latest
docker pull registry.exemplo.com/dashboard-backend:latest
docker-compose up -d
```


### Configuração de Produção

#### SSL/TLS com Traefik

Se estiver usando Traefik como proxy reverso, adicione labels ao `docker-compose.yml`:

```yaml
services:
  frontend:
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.dashboard.rule=Host(`dashboard.exemplo.com`)"
      - "traefik.http.routers.dashboard.entrypoints=websecure"
      - "traefik.http.routers.dashboard.tls.certresolver=letsencrypt"
```

#### SSL/TLS com Nginx

Para usar certificados SSL com Nginx:

1. Obtenha certificados (Let's Encrypt recomendado):
   ```bash
   certbot certonly --standalone -d dashboard.exemplo.com
   ```

2. Atualize `nginx.conf`:
   ```nginx
   server {
       listen 443 ssl;
       server_name dashboard.exemplo.com;
       
       ssl_certificate /etc/letsencrypt/live/dashboard.exemplo.com/fullchain.pem;
       ssl_certificate_key /etc/letsencrypt/live/dashboard.exemplo.com/privkey.pem;
       
       # ... resto da configuração
   }
   ```

#### Variáveis de Ambiente de Produção

Recomendações para produção:

```env
# Backend
PORT=3001
NODE_ENV=production

# PostgreSQL
PG_HOST=db.producao.com
PG_PORT=5432
PG_DATABASE=checkin
PG_USER=checkin_user
MOSELLO_PG_ADMIN_PASSWORD=senha_muito_segura_aqui

# CORS (restrinja para seu domínio)
CORS_ORIGIN=https://dashboard.exemplo.com
```

Atualize `server/index.js` para usar a variável CORS_ORIGIN:

```javascript
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*'
}));
```


### Monitoramento e Logs

#### Visualizar Logs

```bash
# Todos os serviços
docker-compose logs -f

# Apenas frontend
docker-compose logs -f frontend

# Apenas backend
docker-compose logs -f backend

# Últimas 100 linhas
docker-compose logs --tail=100
```

#### Health Checks

Configure health checks no `docker-compose.yml`:

```yaml
services:
  backend:
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:3001/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
```

#### Restart Automático

Os containers são configurados para reiniciar automaticamente:

```yaml
services:
  frontend:
    restart: unless-stopped
  backend:
    restart: unless-stopped
```

### Backup e Manutenção

#### Backup do Banco de Dados

```bash
# Backup manual
docker exec postgres pg_dump -U admin checkin > backup_$(date +%Y%m%d).sql

# Restaurar backup
docker exec -i postgres psql -U admin checkin < backup_20240115.sql
```

#### Atualização da Aplicação

```bash
# 1. Pull das últimas mudanças
git pull origin main

# 2. Rebuild das imagens
docker-compose build

# 3. Restart dos serviços (zero downtime)
docker-compose up -d --no-deps --build frontend
docker-compose up -d --no-deps --build backend
```


## Troubleshooting

### Problemas Comuns

#### 1. Dashboard não carrega dados

**Sintomas**: Página carrega mas não exibe audiências

**Diagnóstico**:
```bash
# 1. Verifique se o backend está rodando
curl http://localhost:3001/health

# 2. Teste a conexão com o banco
curl http://localhost:3001/db-test

# 3. Teste a API de audiências
curl "http://localhost:3001/audiencias?startDate=2024-01-15&endDate=2024-01-15"
```

**Soluções**:
- Verifique se o backend está rodando na porta correta
- Verifique as credenciais do PostgreSQL no `.env`
- Verifique se o firewall permite conexão com o banco
- Verifique os logs do backend: `docker-compose logs backend`

#### 2. Erro de CORS

**Sintomas**: Console do navegador mostra erro "CORS policy"

**Solução**:
- Verifique a configuração de CORS no `server/index.js`
- Em desenvolvimento, use `origin: '*'`
- Em produção, especifique o domínio: `origin: 'https://dashboard.exemplo.com'`

#### 3. Filtros não funcionam

**Sintomas**: Selecionar filtros não atualiza os dados

**Diagnóstico**:
- Abra o console do navegador (F12)
- Verifique se há erros JavaScript
- Verifique se os callbacks estão sendo chamados

**Solução**:
- Limpe o cache do navegador (Ctrl+Shift+Delete)
- Verifique se `selectedGroups` e `onSelectedGroupsChange` estão sendo passados corretamente
- Verifique os logs do console para mensagens de debug


#### 4. Métricas parecem incorretas

**Sintomas**: Números nos cards não batem com a lista

**Diagnóstico**:
- Verifique quais filtros estão aplicados (data e grupo)
- Métricas consideram APENAS audiências filtradas
- Verifique se há grupos desmarcados

**Solução**:
- Clique em "Marcar Todos" no filtro de grupo
- Verifique o período selecionado no filtro de data
- Recarregue a página (F5)

#### 5. Atualização automática não funciona

**Sintomas**: Dados não atualizam a cada 2 minutos

**Diagnóstico**:
- Verifique o console do navegador
- Procure por mensagens "🔄 Atualizando dados..."

**Solução**:
- Verifique se há erros de rede no console
- Verifique se o backend está acessível
- Recarregue a página

#### 6. Erro ao conectar ao PostgreSQL

**Sintomas**: Backend não inicia ou retorna erro 500

**Diagnóstico**:
```bash
# Teste a conexão manualmente
psql -h db.mosello.net.br -p 5433 -U admin -d checkin
```

**Soluções**:
- Verifique as credenciais no `.env`
- Verifique se o servidor PostgreSQL está acessível
- Verifique se SSL está habilitado (se necessário)
- Verifique se o usuário tem permissões na tabela `audiencias_check`

#### 7. Build do Docker falha

**Sintomas**: `docker-compose build` retorna erro

**Soluções**:
- Verifique se há espaço em disco suficiente
- Limpe imagens antigas: `docker system prune -a`
- Verifique se os Dockerfiles estão corretos
- Verifique se todas as dependências estão no `package.json`


### Logs e Debugging

#### Habilitar Logs Detalhados

O código já inclui vários `console.log` para debugging. Para ver todos os logs:

**Frontend** (Console do Navegador - F12):
- `🔄` - Atualização de dados
- `✅` - Operação bem-sucedida
- `⚠️` - Aviso
- `🔍` - Debug de props e estados
- `🔧` - Inicialização
- `📝` - Mudanças de estado

**Backend** (Terminal ou Docker Logs):
```bash
# Logs do servidor
docker-compose logs -f backend

# Ou se rodando localmente
cd server && npm start
```

#### Ferramentas de Debug

**React DevTools**:
- Instale a extensão React DevTools no navegador
- Inspecione componentes e seus estados
- Verifique props passadas entre componentes

**Network Tab**:
- Abra DevTools (F12) → Network
- Filtre por "Fetch/XHR"
- Verifique requisições para `/api/audiencias`
- Inspecione payloads e respostas

### Contato para Suporte

#### Suporte Técnico

- **E-mail**: suporte@mosello.net.br
- **Telefone**: (XX) XXXX-XXXX
- **Horário**: Segunda a sexta, 9h às 18h

#### Reportar Bugs

Ao reportar um problema, inclua:
1. Descrição detalhada do problema
2. Passos para reproduzir
3. Screenshots (se aplicável)
4. Logs do console (F12)
5. Versão do navegador
6. Sistema operacional

#### Sugestões de Melhoria

Envie sugestões para: melhorias@mosello.net.br


## Desenvolvimento

### Estrutura de Desenvolvimento

#### Adicionar Novo Componente

1. Crie o arquivo em `components/`:
   ```typescript
   // components/MeuComponente.tsx
   import React from 'react';
   
   interface MeuComponenteProps {
     // Defina as props
   }
   
   const MeuComponente: React.FC<MeuComponenteProps> = (props) => {
     return (
       <div>
         {/* Seu componente */}
       </div>
     );
   };
   
   export default MeuComponente;
   ```

2. Importe e use no componente pai:
   ```typescript
   import MeuComponente from './components/MeuComponente';
   ```

#### Adicionar Novo Endpoint

1. Edite `server/index.js`:
   ```javascript
   app.get('/novo-endpoint', async (req, res) => {
     try {
       // Sua lógica aqui
       res.json({ success: true });
     } catch (err) {
       console.error('Erro:', err);
       res.status(500).json({ error: 'Erro interno' });
     }
   });
   ```

2. Use no frontend:
   ```typescript
   const response = await fetch('/api/novo-endpoint');
   const data = await response.json();
   ```

### Boas Práticas

#### TypeScript

- Sempre defina interfaces para props e estados
- Use tipos explícitos em vez de `any`
- Aproveite a inferência de tipos quando possível

#### React

- Use componentes funcionais com hooks
- Extraia lógica complexa para custom hooks
- Use `useMemo` e `useCallback` para otimização
- Mantenha componentes pequenos e focados

#### Estilização

- Use classes do TailwindCSS
- Mantenha consistência com o design system
- Use dark mode classes quando apropriado: `dark:bg-slate-800`

#### API

- Sempre trate erros com try/catch
- Retorne códigos de status HTTP apropriados
- Valide parâmetros de entrada
- Use prepared statements para prevenir SQL injection


### Scripts Disponíveis

#### Frontend

```bash
# Desenvolvimento (com hot reload)
npm run dev

# Build para produção
npm run build

# Preview do build de produção
npm run preview
```

#### Backend

```bash
# Iniciar servidor
npm start

# Desenvolvimento com nodemon (auto-restart)
npm run dev  # (se configurado)
```

### Convenções de Código

#### Nomenclatura

- **Componentes**: PascalCase (`Dashboard.tsx`, `CheckInPanel.tsx`)
- **Funções**: camelCase (`fetchAudiences`, `formatDate`)
- **Constantes**: UPPER_SNAKE_CASE (`USER_GROUPS`, `GROUP_MAPPING`)
- **Interfaces**: PascalCase com prefixo I opcional (`Audience`, `Process`)

#### Organização de Imports

```typescript
// 1. Imports externos
import React, { useState, useEffect } from 'react';

// 2. Imports de componentes
import CheckInPanel from './CheckInPanel';
import DatabaseProcessList from './DatabaseProcessList';

// 3. Imports de tipos
import { Audience, Process } from '../types';

// 4. Imports de dados/utils
import { mockData } from '../data/mockData';
```

#### Comentários

- Use comentários para explicar **por que**, não **o que**
- Documente funções complexas
- Use JSDoc para funções públicas

```typescript
/**
 * Calcula a taxa de confirmação de check-ins
 * @param done - Número de check-ins confirmados
 * @param total - Total de audiências
 * @returns Taxa de confirmação em porcentagem (0-100)
 */
function calculateConfirmationRate(done: number, total: number): number {
  return total > 0 ? Math.round((done / total) * 100 * 10) / 10 : 0;
}
```


## Segurança

### Considerações de Segurança

#### Variáveis de Ambiente

- **NUNCA** commite arquivos `.env` com credenciais reais
- Use `.env.example` como template
- Adicione `.env` ao `.gitignore`
- Use secrets management em produção (AWS Secrets Manager, Azure Key Vault, etc.)

#### CORS

- Em produção, **sempre** restrinja CORS para seu domínio específico
- Nunca use `origin: '*'` em produção

```javascript
// ❌ Não faça isso em produção
app.use(cors({ origin: '*' }));

// ✅ Faça isso
app.use(cors({ origin: 'https://dashboard.exemplo.com' }));
```

#### SQL Injection

- O código atual usa prepared statements do `pg`
- **Sempre** use parameterized queries
- **Nunca** concatene strings SQL com input do usuário

```javascript
// ✅ Correto (prepared statement)
const { rows } = await pool.query(
  'SELECT * FROM audiencias_check WHERE data = $1',
  [date]
);

// ❌ NUNCA faça isso
const { rows } = await pool.query(
  `SELECT * FROM audiencias_check WHERE data = '${date}'`
);
```

#### Conexão PostgreSQL

- Use SSL em produção: `ssl: true`
- Use credenciais fortes
- Limite permissões do usuário do banco
- Use firewall para restringir acesso ao banco

#### Headers de Segurança

Adicione headers de segurança no Nginx:

```nginx
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "no-referrer-when-downgrade" always;
```


## Performance

### Otimizações Implementadas

#### Frontend

1. **Atualização Automática Inteligente**
   - Intervalo de 2 minutos (não sobrecarrega o servidor)
   - Mantém filtros aplicados após atualização
   - Usa `useEffect` com cleanup para evitar memory leaks

2. **Memoização**
   - `useMemo` para cálculo de métricas (evita recálculos desnecessários)
   - `useCallback` para callbacks estáveis

3. **Lazy Loading**
   - Componentes podem ser carregados sob demanda com `React.lazy()`

4. **Responsividade**
   - Views diferentes para mobile e desktop
   - Otimizado para diferentes tamanhos de tela

#### Backend

1. **Connection Pooling**
   - Usa `pg.Pool` para reutilizar conexões
   - Reduz overhead de criar novas conexões

2. **Queries Otimizadas**
   - Usa índices no banco de dados
   - Filtra dados no banco (não no código)
   - Retorna apenas campos necessários

3. **Caching**
   - Considere adicionar Redis para cache de queries frequentes

### Recomendações de Performance

#### Para Grandes Volumes de Dados

Se o sistema crescer significativamente:

1. **Paginação**
   ```typescript
   // Adicione parâmetros de paginação
   GET /api/audiencias?page=1&limit=50
   ```

2. **Índices no Banco**
   ```sql
   CREATE INDEX idx_audiencias_data ON audiencias_check(data);
   CREATE INDEX idx_audiencias_grupo ON audiencias_check(grupousuarioid);
   ```

3. **Lazy Loading de Componentes**
   ```typescript
   const DatabaseProcessList = React.lazy(() => import('./DatabaseProcessList'));
   ```

4. **Virtual Scrolling**
   - Use bibliotecas como `react-window` para listas muito grandes


## Roadmap

### Funcionalidades Futuras

#### Curto Prazo

- [ ] Autenticação de usuários
- [ ] Exportação de relatórios (PDF, Excel)
- [ ] Notificações push para gestores
- [ ] Filtro por advogado específico
- [ ] Busca por número de processo

#### Médio Prazo

- [ ] Dashboard personalizado por usuário
- [ ] Histórico de alterações de status
- [ ] Integração com calendário (Google Calendar, Outlook)
- [ ] App mobile nativo
- [ ] Modo offline

#### Longo Prazo

- [ ] Machine Learning para prever ausências
- [ ] Análise preditiva de performance
- [ ] Integração com outros sistemas jurídicos
- [ ] API pública para integrações

## Contribuindo

### Como Contribuir

1. Fork o repositório
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

### Guidelines

- Siga as convenções de código estabelecidas
- Adicione testes para novas funcionalidades
- Atualize a documentação
- Mantenha commits pequenos e focados
- Escreva mensagens de commit descritivas

## Licença

[Especifique a licença do projeto]

## Changelog

### Versão 1.0.0 (Data Atual)

- ✅ Dashboard de monitoramento em tempo real
- ✅ Painel de métricas com 4 indicadores
- ✅ Lista de audiências com filtros
- ✅ Filtro por data (atalhos e período personalizado)
- ✅ Filtro por grupo/área
- ✅ Atualização automática a cada 2 minutos
- ✅ Interface responsiva (mobile e desktop)
- ✅ Integração com PostgreSQL
- ✅ API REST para consulta de audiências
- ✅ Deploy com Docker e Docker Compose

---

**Última atualização**: Janeiro 2024  
**Versão**: 1.0.0  
**Mantido por**: Equipe de Desenvolvimento Mosello Advocacia

