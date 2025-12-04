# 🚀 Deploy no Portainer - Dashboard Mosello

Este guia descreve como fazer o deploy do Dashboard Check-in no Portainer usando Traefik como reverse proxy e PostgreSQL.

## 📋 Pré-requisitos

- Servidor VPS com Ubuntu 22.04 (IP: 84.46.246.201)
- Docker e Portainer instalados
- Traefik configurado na rede `proxy`
- PostgreSQL rodando na porta 5433
- Domínio: dashboard.mosello.net.br apontando para o servidor

## 🗄️ Banco de Dados PostgreSQL

### Informações de Conexão

```
Host: localhost (ou host.docker.internal dentro do container)
Porta: 5433 → 5432 (mapeamento)
Database: checkin
Usuário: admin
Senha: ${MOSELLO_PG_ADMIN_PASSWORD}
Timezone: America/Bahia
```

### Estrutura da Tabela `audiencias`

A aplicação espera uma tabela com a seguinte estrutura:

```sql
CREATE TABLE audiencias (
    checkin_id SERIAL PRIMARY KEY,
    status VARCHAR,
    processo VARCHAR,
    telefone VARCHAR,
    ts_sent TIMESTAMP,
    data_evento DATE,
    hora_evento TIME,
    processo_pasta VARCHAR,
    assunto VARCHAR,
    encarregado_nome VARCHAR,
    pessoa_nome VARCHAR,
    local_evento VARCHAR,
    presencial BOOLEAN,
    videoconferencia BOOLEAN,
    whatsapp_destino VARCHAR,
    encontrado_na_lista BOOLEAN,
    hora_checkin TIME
);
```

## 🐳 Deploy via Portainer

### Passo 1: Subir o Código no GitHub

```bash
# Inicializar repositório Git (se ainda não estiver)
git init
git add .
git commit -m "Initial commit - Dashboard Check-in"

# Adicionar repositório remoto
git remote add origin https://github.com/GeorgeTelles/dashboard_checkin_mosello.git
git branch -M main
git push -u origin main
```

### Passo 2: Criar Stack no Portainer

1. Acesse o Portainer
2. Vá em **Stacks** → **Add Stack**
3. Nome: `mosello-dashboard`
4. Build method: **Repository**
5. Configure:
   - Repository URL: `https://github.com/GeorgeTelles/dashboard_checkin_mosello`
   - Repository reference: `refs/heads/main`
   - Compose path: `docker-compose.yml`

### Passo 3: Configurar Variáveis de Ambiente

Na seção **Environment variables**, adicione:

```
MOSELLO_PG_ADMIN_PASSWORD=<senha_do_postgres>
GEMINI_API_KEY=<sua_chave_gemini>
```

### Passo 4: Deploy

1. Clique em **Deploy the stack**
2. Aguarde o build e deploy completar
3. Verifique os logs para garantir que não há erros

## 🌐 Acesso

Após o deploy, o dashboard estará disponível em:

**https://dashboard.mosello.net.br**

O Traefik automaticamente:
- Provisionará certificado SSL via Let's Encrypt
- Redirecionará HTTP para HTTPS
- Fará proxy reverso para o container

## 🔧 Configuração do Traefik

O `docker-compose.yml` já inclui as labels necessárias:

```yaml
labels:
  - "traefik.enable=true"
  - "traefik.http.routers.dashboard.rule=Host(`dashboard.mosello.net.br`)"
  - "traefik.http.routers.dashboard.entrypoints=websecure"
  - "traefik.http.routers.dashboard.tls=true"
  - "traefik.http.services.dashboard.loadbalancer.server.port=80"
```

## 🔍 Verificações

### 1. Verificar Container

```bash
docker ps | grep mosello-dashboard
```

### 2. Verificar Logs

```bash
docker logs mosello-dashboard
```

### 3. Testar Health Check

```bash
curl http://localhost/health
```

### 4. Verificar DNS

```bash
nslookup dashboard.mosello.net.br
```

## 🔄 Atualizar a Aplicação

### Via Portainer:

1. Vá em **Stacks**
2. Selecione `mosello-dashboard`
3. Clique em **Pull and redeploy**

### Via Webhook (opcional):

Configure um webhook no GitHub para auto-deploy em push.

## 🐛 Troubleshooting

### Container não inicia

```bash
# Verificar logs detalhados
docker logs --tail 100 mosello-dashboard

# Verificar se a rede proxy existe
docker network ls | grep proxy

# Testar build local
docker-compose build
```

### Erro de conexão com banco de dados

1. Verifique se o PostgreSQL está rodando:
```bash
docker ps | grep postgres
```

2. Teste conexão do host:
```bash
psql -h localhost -p 5433 -U admin -d checkin
```

3. Dentro do container, use `host.docker.internal:5433`

### Certificado SSL não provisiona

1. Verifique se o DNS está apontando corretamente
2. Verifique logs do Traefik:
```bash
docker logs traefik
```

3. Certifique-se que a porta 80 está acessível (para HTTP challenge)

## 📦 Estrutura de Arquivos

```
.
├── Dockerfile              # Imagem multi-stage com Node e Nginx
├── docker-compose.yml      # Orquestração com labels Traefik
├── nginx.conf             # Configuração Nginx para SPA
├── .dockerignore          # Arquivos a ignorar no build
├── .env.example           # Template de variáveis
└── DEPLOY.md              # Este arquivo
```

## 🔒 Segurança

- ✅ HTTPS com certificado Let's Encrypt
- ✅ Headers de segurança configurados no Nginx
- ✅ Senhas via variáveis de ambiente
- ✅ Rede Docker isolada (`proxy`)
- ✅ Sem exposição direta de portas

## 📞 Suporte

Para problemas ou dúvidas:
- Email: georgesmattos@gmail.com
- Repositório: https://github.com/GeorgeTelles/dashboard_checkin_mosello

---

**Desenvolvido para Mosello Advocacia** 🏛️
