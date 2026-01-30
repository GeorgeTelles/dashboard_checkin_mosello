# Manual do Gestor de Pauta - Dashboard de Check-in de Audiências 📊

## Índice

1. [Introdução](#1-introdução)
2. [Como Acessar o Dashboard](#2-como-acessar-o-dashboard)
3. [Visão Geral da Interface](#3-visão-geral-da-interface)
4. [Entendendo os Status](#4-entendendo-os-status)
5. [Como Usar os Filtros de Data](#5-como-usar-os-filtros-de-data)
6. [Como Usar os Filtros de Grupo/Área](#6-como-usar-os-filtros-de-grupoárea)
7. [Como Interpretar as Métricas](#7-como-interpretar-as-métricas)
8. [Como as Métricas se Ajustam aos Filtros](#8-como-as-métricas-se-ajustam-aos-filtros)
9. [Casos de Uso Práticos](#9-casos-de-uso-práticos)
10. [Perguntas Frequentes (FAQ)](#10-perguntas-frequentes-faq)
11. [Dicas de Uso](#11-dicas-de-uso)
12. [Contato para Suporte](#12-contato-para-suporte)
13. [Resumo Rápido](#13-resumo-rápido)

---

## 1. Introdução

### 📊 O que é o Dashboard?

O **Dashboard de Check-in de Audiências** é uma interface web que permite aos gestores de pauta monitorar em tempo real o status de confirmação de presença dos advogados em audiências judiciais.

Pense no dashboard como o **centro de controle** do sistema de check-in: enquanto o sistema automatizado cuida de enviar mensagens e coletar respostas dos advogados, o dashboard apresenta todas essas informações de forma visual, organizada e fácil de entender.

### 🔄 Como o Dashboard se Encaixa no Fluxo de Check-in?

O sistema de check-in funciona de forma integrada. Veja como tudo se conecta:

#### **Passo 1: Sistema Envia Mensagens Automaticamente** 📱

O sistema backend (servidor) envia automaticamente duas mensagens para cada advogado:

- **Check-in**: 30 minutos antes da audiência
  - Exemplo: Audiência às 14:00 → Mensagem às 13:30
  - Pergunta: "Você confirma a realização da audiência?"

- **Check-out**: 30 minutos após o início da audiência
  - Exemplo: Audiência às 14:00 → Mensagem às 14:30
  - Pergunta: "Você participou da audiência?"

#### **Passo 2: Advogado Responde** ✅

O advogado recebe a mensagem no WhatsApp e responde:

- **1** = Confirmo / Participei
- **2** = Não vou comparecer / Não participei

#### **Passo 3: Sistema Registra a Resposta** 💾

O sistema backend:
- Recebe a resposta do advogado
- Atualiza o status no banco de dados
- Envia alertas para supervisores quando necessário

#### **Passo 4: Dashboard Exibe as Informações** 📊

O dashboard (onde você está agora!) mostra:
- ✅ Quais advogados confirmaram presença
- 🟠 Quais ainda não responderam
- 🔴 Quais não vão comparecer ou não responderam
- 📈 Métricas e estatísticas consolidadas

#### **Diagrama Visual do Fluxo**

```
┌─────────────────────────────────────────────────────────────┐
│                    FLUXO DE CHECK-IN                        │
└─────────────────────────────────────────────────────────────┘

30 min antes da audiência
        ↓
┌───────────────────┐
│  Sistema Backend  │ ──→ Envia mensagem de check-in
│   (Automático)    │     via WhatsApp
└───────────────────┘
        ↓
┌───────────────────┐
│    Advogado       │ ──→ Responde "1" (confirmo)
│                   │     ou "2" (não vou)
└───────────────────┘
        ↓
┌───────────────────┐
│  Sistema Backend  │ ──→ Registra resposta
│   (Automático)    │     no banco de dados
└───────────────────┘
        ↓
┌───────────────────┐
│    DASHBOARD      │ ──→ Você visualiza o status
│  (Você está aqui) │     atualizado em tempo real
└───────────────────┘
        ↓
Se não responder em 15 min
        ↓
┌───────────────────┐
│    Supervisor     │ ──→ Recebe alerta para
│   (Você também!)  │     tomar ação
└───────────────────┘
```

### 👨‍💼 Seu Papel como Gestor de Pauta

Como **gestor de pauta**, você tem um papel fundamental no acompanhamento das audiências. O dashboard foi criado especialmente para você!

#### **Suas Responsabilidades** 📋

1. **Monitorar Confirmações** 👀
   - Acompanhar quais advogados confirmaram presença
   - Identificar rapidamente quem ainda não respondeu
   - Verificar se há audiências em risco

2. **Identificar Problemas** 🔍
   - Detectar advogados que não estão respondendo
   - Identificar padrões de não confirmação
   - Antecipar possíveis ausências

3. **Tomar Ações Quando Necessário** ⚡
   - Entrar em contato com advogados que não responderam
   - Providenciar substitutos quando necessário
   - Reagendar audiências se preciso
   - Informar clientes sobre mudanças

4. **Analisar Performance** 📈
   - Avaliar taxa de confirmação da sua área
   - Identificar advogados com baixa taxa de resposta
   - Gerar insights para melhorar o processo

#### **Por que o Dashboard é Importante para Você?** 💡

Antes do dashboard, você precisava:
- ❌ Consultar o banco de dados manualmente
- ❌ Fazer planilhas para acompanhar status
- ❌ Ligar para cada advogado para confirmar
- ❌ Não tinha visão consolidada das audiências

Com o dashboard, você pode:
- ✅ Ver todas as audiências em um só lugar
- ✅ Filtrar por data e área de interesse
- ✅ Acompanhar métricas em tempo real
- ✅ Identificar problemas rapidamente
- ✅ Tomar decisões baseadas em dados
- ✅ Economizar tempo e esforço

#### **Diferença entre Supervisor e Gestor de Pauta** 🤔

Você pode estar se perguntando: "Qual a diferença entre supervisor e gestor de pauta?"

**Supervisor de Pauta** (do manual do backend):
- Recebe **alertas automáticos** quando advogados não respondem
- Foco em **ação imediata** para resolver problemas
- Trabalha de forma **reativa** (age quando há problema)

**Gestor de Pauta** (você, usando o dashboard):
- Tem **visão completa** de todas as audiências
- Foco em **monitoramento contínuo** e análise
- Trabalha de forma **proativa** (previne problemas)
- Pode ser a mesma pessoa que o supervisor, mas com ferramentas diferentes

💡 **Em resumo**: O supervisor age quando há problema. O gestor monitora para evitar que problemas aconteçam!

#### **Como o Dashboard Ajuda no Seu Dia a Dia** 🌟

**Cenário 1: Início do Expediente** ☀️
- Você abre o dashboard
- Filtra "Hoje" para ver audiências do dia
- Identifica quais já estão confirmadas
- Vê quais ainda precisam de atenção
- Planeja seu dia com base nisso

**Cenário 2: Durante o Dia** 🕐
- Dashboard atualiza automaticamente a cada 2 minutos
- Você vê em tempo real quando advogados confirmam
- Identifica rapidamente quem não está respondendo
- Toma ação antes que vire problema

**Cenário 3: Análise Semanal** 📅
- Você filtra "Esta Semana"
- Analisa taxa de confirmação da sua área
- Identifica advogados com baixa taxa de resposta
- Planeja ações de melhoria

**Cenário 4: Relatórios Mensais** 📊
- Você filtra "Este Mês"
- Gera insights sobre performance
- Apresenta dados para a gestão
- Propõe melhorias no processo

### 🎯 O que Você Vai Aprender Neste Manual

Este manual foi criado especialmente para você, gestor de pauta, e vai te ensinar:

1. ✅ Como acessar e navegar no dashboard
2. ✅ Como entender cada status de check-in e check-out
3. ✅ Como usar filtros para ver exatamente o que precisa
4. ✅ Como interpretar as métricas e números
5. ✅ Como usar o dashboard no seu dia a dia
6. ✅ Como resolver problemas comuns
7. ✅ Dicas e truques para otimizar seu trabalho

### 📱 Requisitos para Usar o Dashboard

Para usar o dashboard, você precisa apenas de:

- ✅ Computador, tablet ou celular
- ✅ Navegador web (Chrome, Firefox, Safari, Edge)
- ✅ Conexão com a internet
- ✅ Credenciais de acesso (fornecidas pela TI)

**Não precisa instalar nada!** O dashboard funciona direto no navegador. 🎉

### 🚀 Vamos Começar!

Agora que você entendeu o que é o dashboard e como ele se encaixa no sistema de check-in, vamos para a próxima seção onde você vai aprender como acessar o dashboard pela primeira vez.

---

## 2. Como Acessar o Dashboard

### 🌐 URL de Acesso

O Dashboard de Check-in de Audiências é uma aplicação web, o que significa que você acessa diretamente pelo navegador do seu computador, tablet ou celular. **Não precisa instalar nenhum programa!**

#### **Endereço do Dashboard**

Para acessar o dashboard, abra seu navegador e digite o seguinte endereço:

```
https://dashboard.mosello.net.br
```

💡 **Dica**: Adicione esta página aos seus favoritos para acessar rapidamente!

#### **Navegadores Compatíveis** 🌐

O dashboard funciona em todos os navegadores modernos:

- ✅ **Google Chrome** (recomendado)
- ✅ **Mozilla Firefox**
- ✅ **Microsoft Edge**
- ✅ **Safari** (Mac e iOS)
- ✅ **Opera**

**Versões Mínimas**:
- Chrome 90+
- Firefox 88+
- Edge 90+
- Safari 14+

⚠️ **Atenção**: Navegadores muito antigos podem não funcionar corretamente. Se tiver problemas, atualize seu navegador para a versão mais recente.

### 🔐 Login e Autenticação

#### **Acesso Atual (Versão 1.0)**

Na versão atual do dashboard, **não há sistema de login**. Isso significa que:

- ✅ Você acessa diretamente digitando a URL
- ✅ Não precisa de usuário e senha
- ✅ O dashboard carrega imediatamente

**Por que não tem login?**

O dashboard foi projetado para uso interno da equipe, em uma rede segura. O acesso é controlado pela infraestrutura de rede da empresa.

#### **Acesso Futuro (Próximas Versões)** 🔮

Nas próximas versões, será implementado um sistema de autenticação completo com:

- 🔐 Login com usuário e senha
- 👤 Perfis de usuário personalizados
- 🔒 Controle de acesso por área
- 📊 Dashboards personalizados por gestor

Quando isso for implementado, você receberá:
- **Usuário**: Seu e-mail corporativo
- **Senha inicial**: Enviada por e-mail
- **Instruções**: Manual de primeiro acesso

### 📱 Acessando de Diferentes Dispositivos

O dashboard é **totalmente responsivo**, ou seja, se adapta automaticamente ao tamanho da tela do seu dispositivo.

#### **No Computador (Desktop)** 💻

**Vantagens**:
- ✅ Visualização completa de todas as informações
- ✅ Tabela detalhada com todas as colunas
- ✅ Melhor para análise de grandes volumes de dados
- ✅ Ideal para trabalho prolongado

**Como acessar**:
1. Abra seu navegador (Chrome, Firefox, Edge, etc.)
2. Digite: `https://dashboard.mosello.net.br`
3. Pressione Enter
4. O dashboard carrega automaticamente

**Resolução recomendada**: 1366x768 ou superior

#### **No Tablet** 📱

**Vantagens**:
- ✅ Portabilidade
- ✅ Boa visualização de dados
- ✅ Ideal para reuniões e apresentações
- ✅ Touch screen facilita navegação

**Como acessar**:
1. Abra o navegador (Safari no iPad, Chrome no Android)
2. Digite: `https://dashboard.mosello.net.br`
3. Toque em "Ir" ou "Enter"
4. O dashboard se adapta automaticamente ao tamanho da tela

**Orientação recomendada**: Paisagem (horizontal) para melhor visualização

#### **No Celular** 📱

**Vantagens**:
- ✅ Acesso em qualquer lugar
- ✅ Ideal para consultas rápidas
- ✅ Notificações em tempo real (futuro)
- ✅ Sempre à mão

**Como acessar**:
1. Abra o navegador (Chrome, Safari, Firefox)
2. Digite: `https://dashboard.mosello.net.br`
3. Toque em "Ir"
4. O dashboard exibe uma versão otimizada para mobile

**Diferenças na versão mobile**:
- 📋 Lista em formato de cards (em vez de tabela)
- 📊 Métricas empilhadas verticalmente
- 🔽 Filtros em menus dropdown compactos
- 👆 Navegação otimizada para toque

💡 **Dica**: No celular, use o modo paisagem (horizontal) para ver mais informações de uma vez!

### 🏠 Adicionando à Tela Inicial (Mobile)

Para acesso ainda mais rápido no celular ou tablet, você pode adicionar o dashboard à tela inicial:

#### **No iPhone/iPad (Safari)**

1. Abra o dashboard no Safari
2. Toque no ícone de **Compartilhar** (quadrado com seta para cima)
3. Role para baixo e toque em **"Adicionar à Tela de Início"**
4. Dê um nome (ex: "Dashboard Audiências")
5. Toque em **"Adicionar"**

Agora você tem um ícone na tela inicial que abre o dashboard diretamente! 🎉

#### **No Android (Chrome)**

1. Abra o dashboard no Chrome
2. Toque no menu (três pontos no canto superior direito)
3. Toque em **"Adicionar à tela inicial"**
4. Dê um nome (ex: "Dashboard Audiências")
5. Toque em **"Adicionar"**

O ícone aparecerá na sua tela inicial! 🎉

### 🔧 Requisitos Técnicos

Para usar o dashboard, você precisa apenas de:

#### **Hardware Mínimo**

- **Computador**: Qualquer PC ou Mac dos últimos 5 anos
- **Tablet**: iPad (2017+) ou Android tablet (2018+)
- **Celular**: iPhone 8+ ou Android 8.0+
- **Memória RAM**: 2GB ou mais

#### **Conexão com a Internet**

- **Velocidade mínima**: 1 Mbps
- **Recomendado**: 5 Mbps ou mais
- **Tipo**: Wi-Fi ou dados móveis (3G, 4G, 5G)

⚠️ **Importante**: O dashboard precisa de conexão com a internet para funcionar. Ele não funciona offline (por enquanto).

#### **Permissões Necessárias**

O dashboard precisa das seguintes permissões no navegador:

- ✅ **JavaScript habilitado** (geralmente já está)
- ✅ **Cookies habilitados** (para manter preferências)
- ✅ **Acesso à rede** (para buscar dados)

Essas permissões geralmente já estão habilitadas por padrão. Se o dashboard não carregar, verifique as configurações do seu navegador.

### ⚠️ Problemas Comuns ao Acessar

#### **Problema 1: "Não consigo acessar o site"**

**Possíveis causas e soluções**:

1. **URL digitada incorretamente**
   - ✅ Verifique se digitou: `https://dashboard.mosello.net.br`
   - ✅ Não esqueça o "https://"
   - ✅ Não adicione espaços antes ou depois

2. **Sem conexão com a internet**
   - ✅ Verifique se seu Wi-Fi está conectado
   - ✅ Teste abrindo outro site (ex: google.com)
   - ✅ Reinicie seu roteador se necessário

3. **Firewall ou bloqueio de rede**
   - ✅ Se estiver em rede corporativa, verifique com a TI
   - ✅ Alguns firewalls podem bloquear o acesso
   - ✅ Entre em contato com o suporte técnico

#### **Problema 2: "Página carrega mas fica em branco"**

**Soluções**:

1. **Limpe o cache do navegador**
   - Chrome/Edge: Ctrl+Shift+Delete (Windows) ou Cmd+Shift+Delete (Mac)
   - Selecione "Imagens e arquivos em cache"
   - Clique em "Limpar dados"

2. **Desabilite extensões do navegador**
   - Algumas extensões podem interferir
   - Teste em modo anônimo/privado (Ctrl+Shift+N)

3. **Atualize o navegador**
   - Verifique se está usando a versão mais recente
   - Atualize se necessário

4. **Tente outro navegador**
   - Se funcionar em outro navegador, o problema é específico do navegador atual

#### **Problema 3: "Dashboard está muito lento"**

**Soluções**:

1. **Verifique sua conexão**
   - Teste a velocidade em: fast.com
   - Se estiver lenta, reinicie o roteador

2. **Feche outras abas e programas**
   - Muitas abas abertas consomem memória
   - Feche programas que não está usando

3. **Limpe o cache**
   - Cache muito cheio pode deixar o navegador lento
   - Siga as instruções do Problema 2

#### **Problema 4: "Não vejo nenhum dado"**

**Soluções**:

1. **Verifique os filtros**
   - Pode estar filtrando um período sem audiências
   - Tente selecionar "Hoje" ou "Esta Semana"
   - Verifique se há grupos selecionados

2. **Aguarde o carregamento**
   - O dashboard pode levar alguns segundos para carregar
   - Procure por indicador de carregamento

3. **Recarregue a página**
   - Pressione F5 (Windows) ou Cmd+R (Mac)
   - Ou clique no botão de recarregar do navegador

### 📞 Precisa de Ajuda?

Se você tentou todas as soluções acima e ainda não consegue acessar o dashboard, entre em contato com o suporte técnico:

- **E-mail**: suporte@mosello.net.br
- **Telefone**: (XX) XXXX-XXXX
- **WhatsApp**: (XX) XXXXX-XXXX
- **Horário**: Segunda a sexta, 9h às 18h

**Ao entrar em contato, informe**:
- 📱 Dispositivo que está usando (computador, tablet, celular)
- 🌐 Navegador e versão
- 📸 Screenshot do erro (se houver)
- 📝 Descrição do problema

### ✅ Checklist de Primeiro Acesso

Use este checklist para garantir que está tudo pronto:

- [ ] Tenho um dispositivo compatível (computador, tablet ou celular)
- [ ] Tenho conexão com a internet
- [ ] Meu navegador está atualizado
- [ ] Sei a URL do dashboard: `https://dashboard.mosello.net.br`
- [ ] Adicionei o dashboard aos favoritos
- [ ] (Opcional) Adicionei à tela inicial do celular
- [ ] Testei o acesso e o dashboard carregou corretamente

### 🎯 Próximos Passos

Agora que você já sabe como acessar o dashboard, vamos para a próxima seção onde você vai conhecer a interface e entender cada parte da tela!

---

## 3. Visão Geral da Interface

### 📱 Primeira Impressão

Quando você abre o dashboard pela primeira vez, você verá uma interface limpa e organizada, dividida em três áreas principais:

```
┌─────────────────────────────────────────────────────────────┐
│                    DASHBOARD DE CHECK-IN                    │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  📊 PAINEL DE MÉTRICAS (4 cards coloridos)                 │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐                  │
│  │Verde │  │Laranja│  │Vermelho│ │Azul │                  │
│  └──────┘  └──────┘  └──────┘  └──────┘                  │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  📋 LISTA DE PROCESSOS (tabela detalhada)                  │
│  ┌─────────────────────────────────────────────────────┐  │
│  │ Processo | Data | Hora | Advogado | Status | ...    │  │
│  │ ─────────────────────────────────────────────────── │  │
│  │ 1234567  | 15/01| 14:00| João Silva| ✅ Confirmado │  │
│  │ 7654321  | 15/01| 15:30| Maria Souza| 🟠 A Confirmar│  │
│  │ ...      | ...  | ...  | ...       | ...           │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                    🔍 FILTROS (canto superior direito)
                    📅 Data    👥 Grupos
```

Vamos explorar cada uma dessas áreas em detalhes!

---

### 📊 Painel de Métricas (Topo da Página)

O **Painel de Métricas** é a primeira coisa que você vê ao abrir o dashboard. São **4 cards coloridos** que mostram um resumo rápido da situação atual das audiências.

#### **Localização**

O painel fica no **topo da página**, logo abaixo do título "Painel de Check-In".

#### **Estrutura Visual**

Cada card tem:
- 🎨 **Cor de fundo** (indica o tipo de métrica)
- 🔢 **Número grande** (valor da métrica)
- 📝 **Título** (nome da métrica)
- 🎯 **Ícone** (representação visual)

#### **Os 4 Cards de Métricas**

##### **1. Check-in Feito** 🟢

**Cor**: Verde claro com ícone verde escuro  
**Ícone**: ✅ (check mark)  
**O que mostra**: Número de audiências com check-in confirmado

**Exemplo Visual**:
```
┌─────────────────────────┐
│  ✅                     │
│  Check-in Feito         │
│  8                      │
└─────────────────────────┘
```

**Interpretação**:
- ✅ **Número alto**: Ótimo! Muitos advogados confirmaram presença
- ⚠️ **Número baixo**: Atenção! Poucos advogados confirmaram

##### **2. Check-in A Confirmar** 🟠

**Cor**: Laranja claro com ícone laranja escuro  
**Ícone**: 🕐 (relógio)  
**O que mostra**: Número de audiências aguardando confirmação

**Exemplo Visual**:
```
┌─────────────────────────┐
│  🕐                     │
│  Check-in A Confirmar   │
│  3                      │
└─────────────────────────┘
```

**Interpretação**:
- ✅ **Número baixo**: Bom! Poucos advogados pendentes
- ⚠️ **Número alto**: Atenção! Muitos advogados ainda não responderam

##### **3. Check-ins Não Realizados** 🔴

**Cor**: Vermelho claro com ícone vermelho escuro  
**Ícone**: ⚠️ (triângulo de alerta)  
**O que mostra**: Número de audiências sem confirmação

**Exemplo Visual**:
```
┌─────────────────────────┐
│  ⚠️                     │
│  Check-ins Não Realizados│
│  2                      │
└─────────────────────────┘
```

**Interpretação**:
- ✅ **Número zero**: Perfeito! Nenhum problema
- ⚠️ **Número alto**: Alerta! Muitos advogados não confirmaram

##### **4. Taxa de Confirmação** 🔵

**Cor**: Azul claro com ícone azul escuro  
**Ícone**: 📊 (gráfico de barras)  
**O que mostra**: Percentual de audiências confirmadas

**Exemplo Visual**:
```
┌─────────────────────────┐
│  📊                     │
│  Taxa de Confirmação    │
│  80%                    │
└─────────────────────────┘
```

**Interpretação**:
- ✅ **80% ou mais**: Excelente! Processo funcionando bem
- ⚠️ **70-79%**: Bom, mas pode melhorar
- 🔴 **Abaixo de 70%**: Atenção! Há problemas no processo

#### **Como Ler o Painel de Métricas**

**Cenário 1: Tudo Certo** ✅
```
Check-in Feito: 10    |  A Confirmar: 0  |  Não Realizados: 0  |  Taxa: 100%
```
**Interpretação**: Perfeito! Todos os advogados confirmaram presença.

**Cenário 2: Situação Normal** 🟡
```
Check-in Feito: 8     |  A Confirmar: 2  |  Não Realizados: 0  |  Taxa: 80%
```
**Interpretação**: Bom! Maioria confirmou, alguns ainda pendentes.

**Cenário 3: Atenção Necessária** 🔴
```
Check-in Feito: 5     |  A Confirmar: 2  |  Não Realizados: 3  |  Taxa: 50%
```
**Interpretação**: Alerta! Metade não confirmou. Ação necessária!

#### **Dicas de Uso do Painel de Métricas**

💡 **Dica 1**: Olhe o painel primeiro ao abrir o dashboard  
Ele dá uma visão geral instantânea da situação.

💡 **Dica 2**: Foque no card vermelho (Não Realizados)  
Se esse número for alto, priorize ações para essas audiências.

💡 **Dica 3**: Use a Taxa de Confirmação como indicador de saúde  
Se estiver caindo ao longo do tempo, há um problema sistêmico.

💡 **Dica 4**: Compare com dias anteriores  
Filtre "Ontem" e "Hoje" para comparar performance.

---

### 📋 Lista de Processos (Área Principal)

A **Lista de Processos** é o coração do dashboard. É aqui que você vê **todos os detalhes** de cada audiência individualmente.

#### **Localização**

A lista fica na **área central da página**, abaixo do painel de métricas.

#### **Formato da Lista**

A lista se adapta ao dispositivo que você está usando:

##### **No Computador (Desktop)** 💻

A lista aparece como uma **tabela completa** com todas as colunas:

```
┌──────────┬──────────┬──────┬────────────┬──────────────┬──────────┬──────────┐
│ Processo │   Data   │ Hora │   Local    │  Advogado    │ Check-in │ Check-out│
├──────────┼──────────┼──────┼────────────┼──────────────┼──────────┼──────────┤
│ 1234567  │ 15/01/24 │14:00 │ 1ª Vara    │ João Silva   │ ✅ Feito │ 🟠 Enviado│
│ 7654321  │ 15/01/24 │15:30 │ 2ª Vara    │ Maria Souza  │🟠 Enviado│ ⚪ Nulo   │
│ 9876543  │ 15/01/24 │16:00 │ 3ª Vara    │ Pedro Santos │🔴 Não Fez│ ⚪ Nulo   │
└──────────┴──────────┴──────┴────────────┴──────────────┴──────────┴──────────┘
```

##### **No Celular/Tablet (Mobile)** 📱

A lista aparece como **cards empilhados** para facilitar a visualização:

```
┌─────────────────────────────────────┐
│ Processo: 1234567                   │
│ ✅ Feito                            │
│                                     │
│ 👤 João Silva                       │
│    Encarregado Principal            │
│                                     │
│ 📅 Audiência: 15/01/24 - 14:00     │
│ 📍 Status Checkin: ✅ Feito (13:25)│
│ 📍 Status Checkout: 🟠 Enviado     │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│ Processo: 7654321                   │
│ 🟠 A Confirmar                      │
│ ...                                 │
└─────────────────────────────────────┘
```

#### **Colunas da Tabela (Versão Desktop)**

A tabela tem **8 colunas** com informações detalhadas:

##### **1. Processo** 📄

**O que mostra**: Número do processo judicial

**Exemplo**: `1234567-89.2024.8.26.0100`

**Para que serve**: Identificar unicamente cada audiência

##### **2. Data da Audiência** 📅

**O que mostra**: Data em que a audiência está agendada

**Formato**: `DD/MMM/AAAA` (ex: `15 jan. 2024`)

**Para que serve**: Saber quando a audiência vai acontecer

##### **3. Hora da Audiência** 🕐

**O que mostra**: Horário em que a audiência está agendada

**Formato**: `HH:MM` (ex: `14:00`)

**Para que serve**: Saber o horário exato da audiência

**Ordenação**: A lista é ordenada por hora (mais cedo primeiro)

##### **4. Local** 📍

**O que mostra**: Vara ou local onde a audiência será realizada

**Exemplo**: `1ª Vara Cível`, `2ª Vara Trabalhista`

**Para que serve**: Saber onde a audiência acontecerá

##### **5. Encarregado Principal** 👤

**O que mostra**: Nome do advogado responsável pela audiência

**Formato**: Nome completo + foto (avatar)

**Exemplo**: 
```
[👤] João Silva
```

**Para que serve**: Identificar quem é o responsável

##### **6. Status Checkin** ✅🟠🔴⚪

**O que mostra**: Status da confirmação prévia (30 min antes)

**Possíveis valores**:
- ✅ **Confirmado/Feito** (verde)
- 🟠 **A Confirmar/Enviado** (laranja)
- 🔴 **Não Realizado** (vermelho)
- ⚪ **Nulo/-** (cinza)

**Horário**: Quando o status não é "Nulo", mostra o horário da confirmação

**Exemplo**: 
```
✅ Confirmado
   13:25
```

##### **7. Status Checkout** ✅🟠🔴⚪

**O que mostra**: Status da confirmação posterior (30 min depois)

**Possíveis valores**: Mesmos do check-in

**Horário**: Quando o status não é "Nulo", mostra o horário da confirmação

**Exemplo**: 
```
🟠 Enviado
   14:35
```

##### **8. Ações** ⋮

**O que mostra**: Menu de ações (três pontos verticais)

**Para que serve**: Acessar ações adicionais (futuro)

**Nota**: Na versão atual, este menu ainda não tem funcionalidades implementadas.

#### **Como Ler a Lista de Processos**

**Exemplo de Linha Completa**:

```
┌──────────┬──────────┬──────┬────────────┬──────────────┬──────────────┬──────────────┐
│ 1234567  │ 15 jan.  │14:00 │ 1ª Vara    │ João Silva   │ ✅ Confirmado│ 🟠 Enviado   │
│          │   2024   │      │   Cível    │              │    13:25     │    14:35     │
└──────────┴──────────┴──────┴────────────┴──────────────┴──────────────┴──────────────┘
```

**Interpretação**:
- 📄 **Processo**: 1234567
- 📅 **Quando**: 15 de janeiro de 2024, às 14:00
- 📍 **Onde**: 1ª Vara Cível
- 👤 **Quem**: João Silva (advogado responsável)
- ✅ **Check-in**: Confirmado às 13:25 (30 min antes)
- 🟠 **Check-out**: Mensagem enviada às 14:35, aguardando resposta

**O que isso significa?**  
João Silva confirmou que vai comparecer à audiência (check-in feito), mas ainda não confirmou se participou (check-out pendente).

#### **Recursos da Lista**

##### **Rolagem Vertical** 📜

A lista tem **rolagem independente**, ou seja:
- Você pode rolar a lista sem mover o resto da página
- O cabeçalho da tabela fica fixo no topo
- Ideal para listas longas com muitas audiências

**Como usar**:
- **Mouse**: Use a roda do mouse sobre a lista
- **Touchpad**: Deslize dois dedos
- **Touch screen**: Deslize o dedo para cima/baixo

##### **Ordenação Automática** 🔢

A lista é **automaticamente ordenada** por horário da audiência:
- Audiências mais cedo aparecem primeiro
- Audiências mais tarde aparecem depois
- Facilita o acompanhamento cronológico

**Exemplo**:
```
14:00 - Processo 1234567
15:30 - Processo 7654321
16:00 - Processo 9876543
```

##### **Atualização Automática** 🔄

A lista **atualiza sozinha a cada 2 minutos**:
- Busca novos dados do servidor
- Atualiza status de check-in e check-out
- Mantém os filtros aplicados
- Não precisa recarregar a página

**Indicador**: Você verá os dados mudarem automaticamente quando houver atualizações.

#### **Dicas de Uso da Lista**

💡 **Dica 1**: Procure por status vermelhos (🔴)  
Essas são as audiências que precisam de atenção imediata.

💡 **Dica 2**: Verifique os horários de confirmação  
Se um check-in foi feito muito em cima da hora, pode indicar desorganização.

💡 **Dica 3**: Use a lista para identificar padrões  
Se um advogado específico sempre tem status vermelho, há um problema.

💡 **Dica 4**: No celular, role devagar  
Os cards têm muita informação, leia com calma.

💡 **Dica 5**: Deixe a lista aberta durante o dia  
Com atualização automática, você monitora em tempo real.

---

### 🔍 Área de Filtros (Canto Superior Direito)

A **Área de Filtros** permite que você **personalize** o que vê no dashboard, filtrando por data e por grupo de usuários.

#### **Localização**

Os filtros ficam no **canto superior direito** da seção "Lista de Processos", logo acima da tabela.

#### **Estrutura Visual**

```
┌─────────────────────────────────────────────────────────┐
│ Lista de Processos                    [👥 Grupos] [📅 Data] │
└─────────────────────────────────────────────────────────┘
```

Há **2 botões de filtro**:
1. **Filtro de Grupos** (ícone de pessoas 👥)
2. **Filtro de Data** (ícone de calendário 📅)

#### **Filtro de Grupos** 👥

##### **Aparência do Botão**

```
┌─────────────────────┐
│ 👥 Todos os Grupos  │
└─────────────────────┘
```

O texto do botão muda conforme a seleção:
- `Nenhum Grupo` - Nenhum grupo selecionado
- `Todos os Grupos` - Todos os 6 grupos selecionados
- `Controle Cível` - Apenas 1 grupo selecionado
- `3 Grupos` - 3 grupos selecionados

##### **Dropdown de Grupos**

Quando você clica no botão, abre um **menu dropdown** com:

```
┌─────────────────────────────────────────┐
│ Filtrar por Grupo    [Marcar Todos]    │
├─────────────────────────────────────────┤
│ ☑ Contencioso Imobiliário/Agrário      │
│ ☑ Cível                                 │
│ ☑ Criminal                              │
│ ☑ Tributário e Empresarial             │
│ ☑ Trabalhista                           │
│ ☑ Contencioso Ambiental                │
└─────────────────────────────────────────┘
```

**Elementos do dropdown**:
- ✅ **Checkboxes**: Marque/desmarque grupos
- 🔘 **Botão "Marcar Todos"**: Seleciona todos os grupos de uma vez
- 🔘 **Botão "Desmarcar Todos"**: Remove todos os grupos de uma vez
- 📜 **Lista de grupos**: Os 6 grupos disponíveis

##### **Como Funciona**

1. **Clique no botão** 👥 para abrir o dropdown
2. **Marque/desmarque** os grupos que deseja ver
3. **O dashboard atualiza automaticamente** conforme você seleciona
4. **Clique fora** do dropdown para fechar

**Comportamento**:
- ✅ Grupos marcados: Audiências desses grupos aparecem
- ❌ Grupos desmarcados: Audiências desses grupos são ocultadas
- ⚠️ Nenhum grupo marcado: Nenhuma audiência aparece

##### **Grupos Disponíveis**

Os 6 grupos são:

1. **Controle Contencioso Imobiliário/Agrário**
2. **Controle Cível**
3. **Controle Criminal**
4. **Controle Tributário e Empresarial**
5. **Controle Trabalhista**
6. **Controle Contencioso Ambiental**

**Nota**: Alguns grupos do banco de dados são consolidados automaticamente. Por exemplo, "Controle Cível - PF" e "Controle Cível Select" aparecem como "Controle Cível".

#### **Filtro de Data** 📅

##### **Aparência do Botão**

```
┌─────────────────────┐
│ 📅 15 jan. - 15 jan.│
└─────────────────────┘
```

O texto do botão mostra o **período selecionado**:
- `15 jan.` - Um único dia
- `15 jan. - 21 jan.` - Um intervalo de datas
- `Selecione o período` - Nenhuma data selecionada

##### **Dropdown de Data**

Quando você clica no botão, abre um **menu dropdown** com:

```
┌─────────────────────────────────────────┐
│ [Ontem]      [Hoje]                     │
│ [Amanhã]     [Esta Semana]              │
│ [Este Mês]                              │
├─────────────────────────────────────────┤
│ Data Inicial: [__/__/____]              │
│ Data Final:   [__/__/____]              │
└─────────────────────────────────────────┘
```

**Elementos do dropdown**:
- 🔘 **Atalhos rápidos**: 5 botões para períodos comuns
- 📅 **Data Inicial**: Campo para selecionar data de início
- 📅 **Data Final**: Campo para selecionar data de fim

##### **Atalhos Rápidos**

Os 5 atalhos são:

1. **Ontem** 📅  
   Mostra audiências do dia anterior

2. **Hoje** 📅  
   Mostra audiências do dia atual (padrão)

3. **Amanhã** 📅  
   Mostra audiências do próximo dia

4. **Esta Semana** 📅  
   Mostra audiências de domingo a sábado da semana atual

5. **Este Mês** 📅  
   Mostra audiências do primeiro ao último dia do mês atual

##### **Como Funciona**

**Usando Atalhos**:
1. **Clique no botão** 📅 para abrir o dropdown
2. **Clique em um atalho** (ex: "Hoje")
3. **O dashboard atualiza automaticamente**
4. **O dropdown fecha sozinho**

**Usando Datas Personalizadas**:
1. **Clique no botão** 📅 para abrir o dropdown
2. **Clique no campo "Data Inicial"**
3. **Selecione a data** no calendário que aparece
4. **Clique no campo "Data Final"**
5. **Selecione a data** no calendário
6. **O dashboard atualiza automaticamente**

**Validação Automática**:
- Se você selecionar Data Final antes da Data Inicial, o sistema ajusta automaticamente
- Não é possível selecionar datas inválidas

#### **Como os Filtros Trabalham Juntos**

Os filtros de **Grupo** e **Data** funcionam em **conjunto**:

**Exemplo 1**: Ver apenas audiências de hoje da área Trabalhista
1. Filtro de Data: Selecione "Hoje"
2. Filtro de Grupos: Desmarque todos, marque apenas "Controle Trabalhista"
3. Resultado: Apenas audiências de hoje da área Trabalhista

**Exemplo 2**: Ver audiências desta semana de Cível e Criminal
1. Filtro de Data: Selecione "Esta Semana"
2. Filtro de Grupos: Desmarque todos, marque "Controle Cível" e "Controle Criminal"
3. Resultado: Audiências desta semana dessas duas áreas

**Exemplo 3**: Ver todas as audiências de janeiro
1. Filtro de Data: Data Inicial = 01/01/2024, Data Final = 31/01/2024
2. Filtro de Grupos: Marque "Todos os Grupos"
3. Resultado: Todas as audiências de janeiro de todas as áreas

#### **Impacto dos Filtros**

Quando você aplica filtros, **TUDO no dashboard é afetado**:

✅ **Painel de Métricas**: Recalcula os números baseado nos filtros  
✅ **Lista de Processos**: Mostra apenas audiências que passam pelos filtros  
✅ **Atualização Automática**: Mantém os filtros aplicados

**Exemplo**:

**Antes do Filtro** (Todos os Grupos, Hoje):
```
Check-in Feito: 10  |  A Confirmar: 5  |  Não Realizados: 2  |  Taxa: 59%
Lista: 17 audiências
```

**Depois do Filtro** (Apenas Trabalhista, Hoje):
```
Check-in Feito: 3   |  A Confirmar: 1  |  Não Realizados: 1  |  Taxa: 60%
Lista: 5 audiências
```

**Interpretação**: Das 17 audiências totais de hoje, 5 são da área Trabalhista.

#### **Dicas de Uso dos Filtros**

💡 **Dica 1**: Use "Hoje" como padrão  
É o filtro mais útil para monitoramento diário.

💡 **Dica 2**: Filtre apenas sua área  
Se você gerencia apenas uma área, desmarque as outras para focar.

💡 **Dica 3**: Use "Esta Semana" para planejamento  
No início da semana, veja todas as audiências para se organizar.

💡 **Dica 4**: Use "Este Mês" para relatórios  
No fim do mês, analise a performance mensal.

💡 **Dica 5**: Combine filtros estrategicamente  
Exemplo: "Amanhã" + "Controle Cível" para preparar o dia seguinte.

💡 **Dica 6**: Experimente diferentes combinações  
Os filtros são instantâneos, teste à vontade!

---

### 🎨 Código de Cores do Dashboard

O dashboard usa **cores consistentes** para facilitar a identificação rápida:

| Cor | Significado | Onde Aparece |
|-----|-------------|--------------|
| 🟢 **Verde** | Confirmado / Feito / Sucesso | Card de métricas, badges de status |
| 🟠 **Laranja** | Pendente / A Confirmar / Aguardando | Card de métricas, badges de status |
| 🔴 **Vermelho** | Não Realizado / Problema / Alerta | Card de métricas, badges de status |
| ⚪ **Cinza** | Nulo / Não Aplicável / Aguardando Envio | Badges de status |
| 🔵 **Azul** | Informação / Métrica Calculada | Card de taxa de confirmação |

**Dica**: Aprenda a associar cores com significados. Com o tempo, você identificará problemas apenas pelas cores!

---

### 📐 Layout Responsivo

O dashboard se **adapta automaticamente** ao tamanho da tela:

#### **Desktop (Computador)** 💻

- ✅ Painel de métricas: 4 cards em 2 linhas (2x2)
- ✅ Lista: Tabela completa com todas as colunas
- ✅ Filtros: Lado a lado no canto superior direito
- ✅ Melhor para: Análise detalhada e trabalho prolongado

#### **Tablet** 📱

- ✅ Painel de métricas: 4 cards em 2 linhas (2x2)
- ✅ Lista: Tabela completa (pode precisar rolar horizontalmente)
- ✅ Filtros: Lado a lado ou empilhados (depende da orientação)
- ✅ Melhor para: Reuniões e apresentações

#### **Celular** 📱

- ✅ Painel de métricas: 4 cards empilhados verticalmente (1x4)
- ✅ Lista: Cards empilhados (não é tabela)
- ✅ Filtros: Empilhados verticalmente
- ✅ Melhor para: Consultas rápidas e monitoramento móvel

**Dica**: No celular, use o modo paisagem (horizontal) para ver mais informações de uma vez!

---

### ✅ Checklist de Familiarização com a Interface

Use este checklist para garantir que você entendeu todas as partes da interface:

- [ ] Identifiquei o Painel de Métricas no topo
- [ ] Entendi o significado de cada um dos 4 cards coloridos
- [ ] Localizei a Lista de Processos na área central
- [ ] Entendi as colunas da tabela (ou cards no mobile)
- [ ] Encontrei os botões de filtro no canto superior direito
- [ ] Abri e fechei o dropdown de Grupos
- [ ] Abri e fechei o dropdown de Data
- [ ] Testei um atalho de data (ex: "Hoje")
- [ ] Testei filtrar por um grupo específico
- [ ] Observei como as métricas mudam quando aplico filtros
- [ ] Entendi o código de cores (verde, laranja, vermelho, cinza, azul)
- [ ] Testei a rolagem da lista de processos
- [ ] (Opcional) Testei o dashboard no celular

### 🎯 Próximos Passos

Agora que você conhece toda a interface do dashboard, vamos para a próxima seção onde você vai aprender em detalhes o que cada **status** significa e como interpretá-los!

---


## 4. Entendendo os Status

### 📊 Visão Geral dos Status

O sistema de check-in trabalha com **dois tipos de confirmação** para cada audiência:

1. **Check-in** 📥: Confirmação **prévia** de presença (30 minutos antes da audiência)
2. **Check-out** 📤: Confirmação **posterior** de participação (30 minutos após o início da audiência)

Cada tipo de confirmação pode ter **4 status diferentes**, identificados por cores e ícones específicos:

| Status | Cor | Ícone | Significado Geral |
|--------|-----|-------|-------------------|
| **Confirmado/Feito/Realizado** | 🟢 Verde | ✅ | Advogado confirmou |
| **A Confirmar/Enviado** | 🟠 Laranja | 🕐 | Aguardando resposta |
| **Não Realizado/Atrasado/Negativa/Cancelado** | 🔴 Vermelho | ❌ | Não confirmou ou informou que não vai |
| **Nulo/-** | ⚪ Cinza | ⚪ | Mensagem ainda não foi enviada |

💡 **Importante**: Os status de **check-in** e **check-out** seguem a **mesma lógica**, mas se referem a momentos diferentes do processo.

---

### 📥 Status de Check-in (Confirmação Prévia)

O **check-in** é a confirmação que o advogado faz **antes** da audiência, quando recebe a mensagem 30 minutos antes do horário marcado.

#### ✅ Confirmado / Feito / Realizado (Verde)

**O que significa**: O advogado confirmou que **vai comparecer** à audiência.

**Como acontece**:
1. Sistema envia mensagem **30 minutos antes** da audiência
2. Advogado recebe a mensagem no WhatsApp
3. Advogado responde **"1"** (confirmo)
4. Sistema registra a confirmação
5. Status muda para **"Confirmado"**
6. Dashboard exibe ✅ em verde

**Exemplo de Linha do Tempo**:
```
13:30 - Sistema envia: "Você confirma a realização da audiência às 14:00?"
13:35 - Advogado responde: "1"
13:35 - Status: ✅ Confirmado (13:35)
14:00 - Audiência acontece
```

**O que fazer**: ✅ **Nada!** Está tudo certo. O advogado confirmou presença.

**Interpretação no Dashboard**:
```
Status Checkin: ✅ Confirmado
                   13:35
```

**Significado**: O advogado confirmou às 13:35 que vai comparecer à audiência das 14:00.

**Indicadores de Qualidade**:
- ✅ **Ótimo**: Confirmação feita logo após receber a mensagem (5-10 minutos)
- ⚠️ **Atenção**: Confirmação feita muito em cima da hora (menos de 5 minutos antes)

---

#### 🟠 A Confirmar / Enviado (Laranja)

**O que significa**: A mensagem foi enviada mas o advogado **ainda não respondeu**.

**Como acontece**:
1. Sistema envia mensagem **30 minutos antes** da audiência
2. Advogado recebe a mensagem no WhatsApp
3. Advogado **ainda não respondeu**
4. Status permanece **"A Confirmar"** ou **"Enviado"**
5. Dashboard exibe 🟠 em laranja

**Exemplo de Linha do Tempo**:
```
13:30 - Sistema envia: "Você confirma a realização da audiência às 14:00?"
13:35 - Advogado ainda não respondeu
13:40 - Status: 🟠 A Confirmar
13:45 - Supervisor recebe alerta (15 min antes da audiência)
14:00 - Audiência acontece
```

**O que fazer**: 
- ⏰ **Aguardar resposta**: Se ainda há tempo (mais de 15 minutos)
- 📞 **Entrar em contato**: Se faltam menos de 15 minutos
- 🚨 **Ação urgente**: Se você recebeu alerta do supervisor

**Interpretação no Dashboard**:
```
Status Checkin: 🟠 A Confirmar
```

**Significado**: A mensagem foi enviada mas o advogado ainda não confirmou presença.

**Quando se Preocupar**:
- ⚠️ **15 minutos antes**: Sistema envia alerta ao supervisor
- 🔴 **5 minutos antes**: Situação crítica - ação imediata necessária
- ❌ **No horário da audiência**: Se não respondeu, vira "Não Realizado"

**Ações Recomendadas**:

1. **Se faltam mais de 15 minutos**:
   - ✅ Aguarde - o advogado pode estar ocupado
   - ✅ Monitore o dashboard (atualiza a cada 2 minutos)

2. **Se faltam 15 minutos ou menos**:
   - 📞 Ligue para o advogado imediatamente
   - 💬 Envie mensagem no WhatsApp
   - 📧 Envie e-mail se não conseguir contato telefônico

3. **Se faltam 5 minutos ou menos**:
   - 🚨 Ação urgente! Ligue insistentemente
   - 🆘 Escale para a gestão
   - 🔄 Prepare plano B (substituto, reagendamento)

---

#### 🔴 Não Realizado / Atrasado / Negativa / Cancelado (Vermelho)

**O que significa**: O advogado **não respondeu** até o horário da audiência **OU** informou que **não vai comparecer**.

**Como acontece - Cenário 1: Não Respondeu**:
1. Sistema envia mensagem **30 minutos antes** da audiência
2. Advogado recebe mas **não responde**
3. Horário da audiência chega
4. Sistema marca como **"Não Realizado"**
5. Dashboard exibe 🔴 em vermelho

**Exemplo de Linha do Tempo (Não Respondeu)**:
```
13:30 - Sistema envia: "Você confirma a realização da audiência às 14:00?"
13:45 - Supervisor recebe alerta (advogado não respondeu)
14:00 - Horário da audiência chegou, advogado não respondeu
14:00 - Status: 🔴 Não Realizado
```

**Como acontece - Cenário 2: Informou que Não Vai**:
1. Sistema envia mensagem **30 minutos antes** da audiência
2. Advogado recebe e responde **"2"** (não vou comparecer)
3. Sistema registra a negativa
4. Status muda para **"Não vai comparecer"** ou **"Negativa"**
5. Dashboard exibe 🔴 em vermelho
6. Supervisor é notificado automaticamente

**Exemplo de Linha do Tempo (Informou que Não Vai)**:
```
13:30 - Sistema envia: "Você confirma a realização da audiência às 14:00?"
13:35 - Advogado responde: "2" (não vou comparecer)
13:35 - Status: 🔴 Não vai comparecer
13:35 - Supervisor recebe notificação automática
```

**O que fazer**:

**Se o advogado não respondeu**:
1. 📞 **Entre em contato imediatamente** com o advogado
2. 🔍 **Verifique o que aconteceu**:
   - Advogado não viu a mensagem?
   - Advogado esqueceu de responder?
   - Advogado teve um imprevisto?
3. ✅ **Confirme se ele compareceu** (mesmo sem responder)
4. 📝 **Registre a ocorrência** internamente
5. 🔄 **Tome providências** se necessário

**Se o advogado informou que não vai**:
1. 🚨 **Ação urgente!** Você tem pouco tempo
2. 🔄 **Providencie substituto** se possível
3. 📅 **Reagende a audiência** se necessário
4. 📞 **Informe o cliente** sobre a situação
5. 📝 **Documente o motivo** da ausência
6. 🆘 **Escale para gestão** se for caso crítico

**Interpretação no Dashboard**:
```
Status Checkin: 🔴 Não Realizado
```
**Significado**: Advogado não confirmou presença ou informou que não vai comparecer.

**Gravidade da Situação**:
- 🔴 **Crítica**: Se for processo VIP ou audiência importante
- 🟠 **Alta**: Se não há substituto disponível
- 🟡 **Média**: Se há tempo para reagendar
- 🟢 **Baixa**: Se audiência já foi cancelada (verificar no DataJuri)

**Prevenção**:
- 📊 Monitore advogados com histórico de não resposta
- 📞 Entre em contato preventivo com advogados problemáticos
- 🔔 Configure alertas personalizados (futuro)

---

#### ⚪ Nulo / - (Cinza)

**O que significa**: A mensagem de check-in **ainda não foi enviada** pelo sistema.

**Como acontece**:
1. Audiência está agendada no sistema
2. Ainda **não chegou o momento** de enviar a mensagem (30 min antes)
3. Status permanece **"Nulo"** ou **"-"**
4. Dashboard exibe ⚪ em cinza

**Exemplo de Linha do Tempo**:
```
12:00 - Audiência agendada para 14:00
12:30 - Status: ⚪ Nulo (mensagem ainda não foi enviada)
13:00 - Status: ⚪ Nulo (ainda faltam 30 minutos)
13:30 - Sistema envia mensagem de check-in
13:30 - Status muda para: 🟠 A Confirmar
```

**O que fazer**: ⏰ **Aguardar!** O sistema enviará a mensagem automaticamente no momento certo.

**Interpretação no Dashboard**:
```
Status Checkin: ⚪ Nulo
```
**Significado**: A mensagem de check-in ainda não foi enviada. Aguarde até 30 minutos antes da audiência.

**Quando se Preocupar**:
- ⚠️ **Se já passou de 30 min antes** e ainda está "Nulo": Pode ser um problema técnico
- 🔧 **Ação**: Entre em contato com o suporte técnico

**Verificação**:
- ✅ Audiência está cadastrada corretamente no sistema?
- ✅ Data e hora estão corretas?
- ✅ Advogado tem telefone cadastrado?

---

### 📤 Status de Check-out (Confirmação Posterior)

O **check-out** é a confirmação que o advogado faz **depois** da audiência, quando recebe a mensagem 30 minutos após o início do horário marcado.

💡 **Importante**: Os status de check-out seguem **exatamente a mesma lógica** dos status de check-in, mas se referem à confirmação **após** a audiência.

#### ✅ Confirmado / Feito / Realizado (Verde)

**O que significa**: O advogado confirmou que **participou** da audiência.

**Como acontece**:
1. Sistema envia mensagem **30 minutos após** o início da audiência
2. Advogado recebe a mensagem no WhatsApp
3. Advogado responde **"1"** (participei)
4. Sistema registra a confirmação
5. Status muda para **"Confirmado"**
6. Dashboard exibe ✅ em verde

**Exemplo de Linha do Tempo**:
```
14:00 - Audiência começa
14:30 - Sistema envia: "Você participou da audiência das 14:00?"
14:35 - Advogado responde: "1"
14:35 - Status: ✅ Confirmado (14:35)
```

**O que fazer**: ✅ **Nada!** Está tudo certo. O advogado confirmou que participou.

**Interpretação no Dashboard**:
```
Status Checkout: ✅ Confirmado
                    14:35
```
**Significado**: O advogado confirmou às 14:35 que participou da audiência das 14:00.

**Diferença entre Check-in e Check-out Confirmados**:
- ✅ **Check-in Confirmado**: Advogado **disse que ia** comparecer
- ✅ **Check-out Confirmado**: Advogado **confirmou que compareceu**
- 🎯 **Ideal**: Ambos confirmados = processo completo e bem-sucedido

---

#### 🟠 A Confirmar / Enviado (Laranja)

**O que significa**: A mensagem foi enviada mas o advogado **ainda não respondeu**.

**Como acontece**:
1. Sistema envia mensagem **30 minutos após** o início da audiência
2. Advogado recebe a mensagem no WhatsApp
3. Advogado **ainda não respondeu**
4. Status permanece **"A Confirmar"** ou **"Enviado"**
5. Dashboard exibe 🟠 em laranja

**Exemplo de Linha do Tempo**:
```
14:00 - Audiência começa
14:30 - Sistema envia: "Você participou da audiência das 14:00?"
14:35 - Advogado ainda não respondeu
14:40 - Status: 🟠 A Confirmar
15:15 - Supervisor recebe alerta (45 min após o início)
```

**O que fazer**:
- ⏰ **Aguardar resposta**: Se ainda há pouco tempo (menos de 30 minutos)
- 📞 **Entrar em contato**: Se já passou 45 minutos (você receberá alerta)
- 🔍 **Verificar**: Se a audiência realmente aconteceu

**Interpretação no Dashboard**:
```
Status Checkout: 🟠 A Confirmar
```
**Significado**: A mensagem foi enviada mas o advogado ainda não confirmou se participou.

**Quando se Preocupar**:
- ⚠️ **45 minutos após**: Sistema envia alerta ao supervisor
- 🔴 **2 horas após**: Situação anormal - verificar urgentemente

**Ações Recomendadas**:

1. **Se passou menos de 45 minutos**:
   - ✅ Aguarde - o advogado pode estar ocupado com a audiência
   - ✅ Monitore o dashboard

2. **Se passou 45 minutos ou mais**:
   - 📞 Entre em contato com o advogado
   - 💬 Pergunte se a audiência ocorreu
   - 💬 Pergunte se está tudo bem
   - 📝 Oriente a responder a mensagem do sistema

3. **Se passou 2 horas ou mais**:
   - 🔍 Verifique no sistema DataJuri se a audiência aconteceu
   - 📞 Tente contato insistente
   - 📝 Registre a ocorrência
   - 🆘 Escale para gestão se não conseguir contato

**Diferença de Urgência**:
- 🟠 **Check-in A Confirmar**: URGENTE (audiência vai acontecer)
- 🟡 **Check-out A Confirmar**: MENOS URGENTE (audiência já passou)

---

#### 🔴 Não Realizado / Atrasado / Negativa / Cancelado (Vermelho)

**O que significa**: O advogado **não respondeu** após tempo razoável **OU** informou que **não participou**.

**Como acontece - Cenário 1: Não Respondeu**:
1. Sistema envia mensagem **30 minutos após** o início da audiência
2. Advogado recebe mas **não responde**
3. Passa tempo considerável (geralmente após alerta ao supervisor)
4. Sistema marca como **"Não Realizado"**
5. Dashboard exibe 🔴 em vermelho

**Exemplo de Linha do Tempo (Não Respondeu)**:
```
14:00 - Audiência começa
14:30 - Sistema envia: "Você participou da audiência das 14:00?"
15:15 - Supervisor recebe alerta (advogado não respondeu)
16:00 - Advogado ainda não respondeu
16:00 - Status: 🔴 Não Realizado
```

**Como acontece - Cenário 2: Informou que Não Participou**:
1. Sistema envia mensagem **30 minutos após** o início da audiência
2. Advogado recebe e responde **"2"** (não participei)
3. Sistema registra a negativa
4. Status muda para **"Não participou"** ou **"Negativa"**
5. Dashboard exibe 🔴 em vermelho
6. Supervisor é notificado automaticamente

**Exemplo de Linha do Tempo (Informou que Não Participou)**:
```
14:00 - Audiência começa
14:30 - Sistema envia: "Você participou da audiência das 14:00?"
14:35 - Advogado responde: "2" (não participei)
14:35 - Status: 🔴 Não participou
14:35 - Supervisor recebe notificação automática
```

**O que fazer**:

**Se o advogado não respondeu**:
1. 📞 **Entre em contato** com o advogado
2. 🔍 **Verifique o que aconteceu**:
   - Audiência foi cancelada?
   - Advogado esqueceu de responder?
   - Advogado teve problema técnico?
3. 🔍 **Consulte o DataJuri** para confirmar se audiência ocorreu
4. ✅ **Confirme se ele participou** (mesmo sem responder)
5. 📝 **Registre a ocorrência** internamente
6. 💬 **Oriente o advogado** a responder as mensagens

**Se o advogado informou que não participou**:
1. 🚨 **Situação crítica!** Investigue imediatamente
2. 🔍 **Descubra o motivo**:
   - Audiência foi cancelada de última hora?
   - Advogado teve imprevisto?
   - Houve erro de comunicação?
3. 📝 **Documente tudo** detalhadamente
4. 📞 **Informe o cliente** sobre a situação
5. 🔄 **Tome providências** (reagendar, justificar ausência)
6. 🆘 **Escale para gestão** imediatamente

**Interpretação no Dashboard**:
```
Status Checkout: 🔴 Não Realizado
```
**Significado**: Advogado não confirmou participação ou informou que não participou da audiência.

**Gravidade da Situação**:
- 🔴 **Crítica**: Se advogado tinha confirmado check-in mas não fez check-out
- 🟠 **Alta**: Se não há justificativa clara
- 🟡 **Média**: Se audiência foi cancelada (verificar)
- 🟢 **Baixa**: Se foi erro de comunicação resolvível

**Análise Cruzada com Check-in**:

| Check-in | Check-out | Interpretação | Ação |
|----------|-----------|---------------|------|
| ✅ Confirmado | 🔴 Não Realizado | Advogado disse que ia mas não confirmou participação | 🚨 Investigar urgentemente |
| 🔴 Não Realizado | 🔴 Não Realizado | Advogado não confirmou nem antes nem depois | 🔴 Situação esperada, mas grave |
| ✅ Confirmado | ✅ Confirmado | Processo completo | ✅ Tudo certo! |
| 🟠 A Confirmar | ⚪ Nulo | Aguardando check-in, check-out ainda não enviado | ⏰ Aguardar |

---

#### ⚪ Nulo / - (Cinza)

**O que significa**: A mensagem de check-out **ainda não foi enviada** pelo sistema.

**Como acontece**:
1. Audiência está agendada no sistema
2. Ainda **não chegou o momento** de enviar a mensagem (30 min após início)
3. Status permanece **"Nulo"** ou **"-"**
4. Dashboard exibe ⚪ em cinza

**Exemplo de Linha do Tempo**:
```
12:00 - Audiência agendada para 14:00
13:30 - Check-in enviado
14:00 - Audiência começa
14:15 - Status Checkout: ⚪ Nulo (ainda não passou 30 min)
14:30 - Sistema envia mensagem de check-out
14:30 - Status muda para: 🟠 A Confirmar
```

**O que fazer**: ⏰ **Aguardar!** O sistema enviará a mensagem automaticamente no momento certo.

**Interpretação no Dashboard**:
```
Status Checkout: ⚪ Nulo
```
**Significado**: A mensagem de check-out ainda não foi enviada. Aguarde até 30 minutos após o início da audiência.

**Quando se Preocupar**:
- ⚠️ **Se já passou de 30 min após** e ainda está "Nulo": Pode ser um problema técnico
- 🔧 **Ação**: Entre em contato com o suporte técnico

**Situação Normal**:
- ✅ Antes da audiência: Check-in pode estar em qualquer status, Check-out sempre "Nulo"
- ✅ Durante a audiência (primeiros 30 min): Check-out ainda "Nulo" é normal
- ✅ Após 30 min do início: Check-out deve mudar para "A Confirmar"

---

### 🔄 Relação Temporal entre Status

Entender **quando** cada status aparece é fundamental para interpretar corretamente o dashboard.

#### **Linha do Tempo Completa de uma Audiência**

```
┌─────────────────────────────────────────────────────────────┐
│              LINHA DO TEMPO - AUDIÊNCIA ÀS 14:00            │
└─────────────────────────────────────────────────────────────┘

12:00 ─────────────────────────────────────────────────────────
      Check-in: ⚪ Nulo
      Check-out: ⚪ Nulo
      (Aguardando momento de enviar check-in)

13:30 ─────────────────────────────────────────────────────────
      📱 SISTEMA ENVIA CHECK-IN
      Check-in: 🟠 A Confirmar
      Check-out: ⚪ Nulo

13:35 ─────────────────────────────────────────────────────────
      ✅ ADVOGADO RESPONDE "1" AO CHECK-IN
      Check-in: ✅ Confirmado (13:35)
      Check-out: ⚪ Nulo

14:00 ─────────────────────────────────────────────────────────
      🏛️ AUDIÊNCIA COMEÇA
      Check-in: ✅ Confirmado (13:35)
      Check-out: ⚪ Nulo
      (Aguardando 30 min para enviar check-out)

14:30 ─────────────────────────────────────────────────────────
      📱 SISTEMA ENVIA CHECK-OUT
      Check-in: ✅ Confirmado (13:35)
      Check-out: 🟠 A Confirmar

14:35 ─────────────────────────────────────────────────────────
      ✅ ADVOGADO RESPONDE "1" AO CHECK-OUT
      Check-in: ✅ Confirmado (13:35)
      Check-out: ✅ Confirmado (14:35)
      
      🎉 PROCESSO COMPLETO!
```

#### **Momentos-Chave para Monitoramento**

| Momento | O que Verificar | Status Esperado |
|---------|-----------------|-----------------|
| **30 min antes** | Check-in foi enviado? | Check-in: 🟠 A Confirmar |
| **15 min antes** | Advogado confirmou? | Check-in: ✅ Confirmado |
| **No horário** | Tudo confirmado? | Check-in: ✅ Confirmado |
| **30 min após** | Check-out foi enviado? | Check-out: 🟠 A Confirmar |
| **45 min após** | Advogado confirmou participação? | Check-out: ✅ Confirmado |

💡 **Dica**: Use esses momentos-chave para criar uma rotina de monitoramento!

---

### 📊 Tabela Resumo de Todos os Status

Para consulta rápida, aqui está uma tabela consolidada com todos os status:

| Status | Cor | Check-in | Check-out | Quando Acontece | O que Fazer |
|--------|-----|----------|-----------|-----------------|-------------|
| **✅ Confirmado** | 🟢 Verde | Advogado confirmou presença | Advogado confirmou participação | Após responder "1" | ✅ Nada - está tudo certo |
| **🟠 A Confirmar** | 🟠 Laranja | Mensagem enviada, aguardando | Mensagem enviada, aguardando | Após envio, antes de responder | ⏰ Aguardar ou 📞 Contatar (se urgente) |
| **🔴 Não Realizado** | 🔴 Vermelho | Não confirmou ou disse que não vai | Não confirmou ou disse que não participou | Não respondeu ou respondeu "2" | 🚨 Investigar e tomar providências |
| **⚪ Nulo** | ⚪ Cinza | Mensagem ainda não enviada | Mensagem ainda não enviada | Antes do momento de envio | ⏰ Aguardar envio automático |

---

### 🎯 Como Usar os Status no Dia a Dia

#### **Cenário 1: Monitoramento Matinal** ☀️

**Situação**: Você abre o dashboard às 8h para ver as audiências do dia.

**O que fazer**:
1. Filtre "Hoje" no filtro de data
2. Olhe o painel de métricas:
   - Quantos check-ins já foram feitos?
   - Quantos estão "A Confirmar"?
   - Quantos "Não Realizados"?
3. Na lista, procure por:
   - 🔴 Status vermelhos (prioridade máxima)
   - 🟠 Status laranjas próximos do horário (atenção)
   - ⚪ Status nulos (normal, aguardar)

**Exemplo de Análise**:
```
Painel de Métricas:
- Check-in Feito: 5
- A Confirmar: 3
- Não Realizados: 1
- Taxa: 56%

Interpretação:
- 5 audiências já confirmadas ✅
- 3 aguardando resposta (monitorar) 🟠
- 1 não confirmou (ação urgente!) 🔴
- Taxa de 56% está baixa (meta: 80%+)

Ação: Focar no 1 "Não Realizado" primeiro!
```

---

#### **Cenário 2: Monitoramento em Tempo Real** 🕐

**Situação**: Você deixa o dashboard aberto durante o dia.

**O que fazer**:
1. Observe as mudanças automáticas (a cada 2 minutos)
2. Fique atento a:
   - Status mudando de ⚪ Nulo para 🟠 A Confirmar (mensagem enviada)
   - Status mudando de 🟠 A Confirmar para ✅ Confirmado (advogado respondeu)
   - Status mudando de 🟠 A Confirmar para 🔴 Não Realizado (não respondeu)
3. Aja imediatamente quando ver status vermelho aparecer

**Dica**: Configure o dashboard em uma segunda tela ou aba separada para monitoramento contínuo.

---

#### **Cenário 3: Análise de Final de Dia** 🌙

**Situação**: Fim do expediente, você quer revisar o dia.

**O que fazer**:
1. Filtre "Hoje" no filtro de data
2. Analise a taxa de confirmação:
   - ✅ 80%+ = Dia excelente
   - 🟡 70-79% = Dia bom, mas pode melhorar
   - 🔴 <70% = Dia problemático, investigar
3. Identifique padrões:
   - Algum advogado específico não respondeu?
   - Alguma área teve mais problemas?
   - Houve horários com mais "Não Realizados"?
4. Registre ocorrências para relatório semanal

---

#### **Cenário 4: Identificando Advogados Problemáticos** 🔍

**Situação**: Você quer identificar advogados que não respondem frequentemente.

**O que fazer**:
1. Filtre "Esta Semana" ou "Este Mês"
2. Na lista, procure pelo nome do advogado
3. Observe o padrão de status:
   - Muitos 🔴 Não Realizados? Problema!
   - Sempre responde em cima da hora? Atenção!
   - Sempre ✅ Confirmado rapidamente? Ótimo!
4. Tome ações preventivas:
   - Converse com advogados problemáticos
   - Ofereça treinamento sobre o sistema
   - Verifique se há problemas técnicos (telefone, WhatsApp)

**Exemplo de Análise**:
```
Advogado: João Silva
Período: Esta Semana (5 audiências)

Status:
- 2 audiências: ✅ Confirmado (bom!)
- 2 audiências: 🔴 Não Realizado (problema!)
- 1 audiência: 🟠 A Confirmar (pendente)

Taxa de confirmação: 40% (muito baixa!)

Ação: Conversar com João Silva sobre importância de responder.
```

---

### 💡 Dicas Avançadas de Interpretação

#### **Dica 1: Correlação entre Check-in e Check-out**

Analise os dois status juntos para entender melhor a situação:

```
✅ Check-in + ✅ Check-out = 🎉 Perfeito!
✅ Check-in + 🟠 Check-out = ⏰ Aguardar (pode estar na audiência)
✅ Check-in + 🔴 Check-out = 🚨 Investigar (disse que ia mas não confirmou participação)
🔴 Check-in + 🔴 Check-out = 🔴 Esperado (não confirmou em nenhum momento)
🔴 Check-in + ✅ Check-out = 🤔 Estranho (não confirmou antes mas participou?)
```

#### **Dica 2: Horário da Confirmação**

Preste atenção no horário mostrado ao lado do status:

```
✅ Confirmado (13:31) - Audiência às 14:00
Interpretação: Respondeu 1 minuto após receber (13:30) = Ótimo!

✅ Confirmado (13:58) - Audiência às 14:00
Interpretação: Respondeu 2 minutos antes da audiência = Em cima da hora!
```

#### **Dica 3: Padrões de Cores na Lista**

Ao olhar a lista, você pode identificar rapidamente a situação geral:

```
Lista com muitos ✅ verdes = Dia tranquilo
Lista com muitos 🟠 laranjas = Dia normal, monitorar
Lista com muitos 🔴 vermelhos = Dia problemático, ação necessária
Lista com muitos ⚪ cinzas = Audiências futuras, aguardar
```

#### **Dica 4: Use Filtros para Focar**

Combine filtros para análises específicas:

```
Filtro: Hoje + Apenas Trabalhista + Ordenar por Status
Resultado: Ver rapidamente problemas da sua área

Filtro: Esta Semana + Todos os Grupos + Buscar por advogado
Resultado: Analisar performance de um advogado específico
```

---

### ⚠️ Situações Especiais e Como Interpretar

#### **Situação 1: Check-in Confirmado mas Check-out Não Realizado**

```
Status Checkin: ✅ Confirmado (13:35)
Status Checkout: 🔴 Não Realizado
```

**Possíveis Causas**:
1. Advogado esqueceu de responder o check-out
2. Audiência foi cancelada de última hora
3. Advogado teve imprevisto e não compareceu
4. Problema técnico (WhatsApp, telefone)

**O que fazer**:
1. 📞 Entre em contato com o advogado
2. 🔍 Verifique no DataJuri se audiência ocorreu
3. 📝 Registre o que aconteceu
4. 💬 Oriente sobre importância do check-out

---

#### **Situação 2: Check-in Não Realizado mas Check-out Confirmado**

```
Status Checkin: 🔴 Não Realizado
Status Checkout: ✅ Confirmado (14:35)
```

**Possíveis Causas**:
1. Advogado não viu mensagem de check-in mas viu a de check-out
2. Advogado estava ocupado antes mas respondeu depois
3. Problema técnico no envio do check-in

**O que fazer**:
1. ✅ Boa notícia: Advogado participou da audiência!
2. 💬 Oriente sobre importância de responder ambas as mensagens
3. 🔧 Verifique se houve problema técnico no check-in

---

#### **Situação 3: Ambos os Status Nulos Após Horário da Audiência**

```
Horário atual: 15:00
Audiência era às: 14:00

Status Checkin: ⚪ Nulo
Status Checkout: ⚪ Nulo
```

**Possíveis Causas**:
1. 🔧 Problema técnico grave no sistema
2. 📱 Advogado sem telefone cadastrado
3. 📅 Audiência foi cancelada e removida do sistema
4. 🗓️ Erro de data/hora no cadastro

**O que fazer**:
1. 🚨 Situação anormal! Investigar imediatamente
2. 🔍 Verificar no DataJuri se audiência existe
3. 📞 Entrar em contato com suporte técnico
4. 📝 Verificar cadastro do advogado

---

#### **Situação 4: Status Mudando Rapidamente**

**Observação**: Você vê o status mudar de 🟠 para ✅ enquanto observa o dashboard.

**O que significa**:
- ✅ Sistema funcionando perfeitamente!
- ✅ Advogado respondeu em tempo real
- ✅ Atualização automática funcionando

**O que fazer**:
- 🎉 Nada! Apenas observe e aprecie o sistema funcionando

---

### 📋 Checklist de Compreensão dos Status

Use este checklist para garantir que você entendeu todos os status:

**Status de Check-in**:
- [ ] Entendi o que significa ✅ Confirmado (verde)
- [ ] Entendi o que significa 🟠 A Confirmar (laranja)
- [ ] Entendi o que significa 🔴 Não Realizado (vermelho)
- [ ] Entendi o que significa ⚪ Nulo (cinza)
- [ ] Sei quando cada status aparece
- [ ] Sei o que fazer em cada situação

**Status de Check-out**:
- [ ] Entendi que segue a mesma lógica do check-in
- [ ] Entendi a diferença de timing (30 min após vs 30 min antes)
- [ ] Sei interpretar a combinação de check-in + check-out
- [ ] Sei quando me preocupar com cada status

**Linha do Tempo**:
- [ ] Entendi quando mensagens são enviadas (30 min antes e 30 min após)
- [ ] Entendi quando alertas são enviados (15 min antes e 45 min após)
- [ ] Sei interpretar os horários mostrados ao lado dos status

**Ações Recomendadas**:
- [ ] Sei o que fazer quando vejo status verde (nada)
- [ ] Sei o que fazer quando vejo status laranja (aguardar ou contatar)
- [ ] Sei o que fazer quando vejo status vermelho (investigar e agir)
- [ ] Sei o que fazer quando vejo status cinza (aguardar)

**Análise Avançada**:
- [ ] Sei correlacionar check-in e check-out
- [ ] Sei identificar padrões de advogados problemáticos
- [ ] Sei usar filtros para análises específicas
- [ ] Sei interpretar situações especiais

---

### 🎯 Próximos Passos

Agora que você domina completamente o significado de cada status, vamos para a próxima seção onde você vai aprender como usar os **filtros de data** para visualizar exatamente as audiências que precisa monitorar!

**Prévia da Próxima Seção**:
- 📅 Como usar os atalhos rápidos (Ontem, Hoje, Amanhã)
- 📅 Como selecionar períodos personalizados
- 📅 Quando usar cada tipo de filtro
- 📅 Exemplos práticos de uso

---

## 5. Como Usar os Filtros de Data

### 📅 Visão Geral do Filtro de Data

O **Filtro de Data** é uma das ferramentas mais importantes do dashboard. Ele permite que você escolha **qual período de tempo** deseja visualizar, desde um único dia até meses inteiros.

**Por que o filtro de data é importante?**
- 🎯 **Foco**: Veja apenas as audiências relevantes para o momento
- ⚡ **Rapidez**: Atalhos rápidos para períodos comuns
- 📊 **Análise**: Compare diferentes períodos facilmente
- 🔍 **Flexibilidade**: Escolha qualquer intervalo de datas

**Localização**: O filtro de data fica no **canto superior direito** da seção "Lista de Processos", ao lado do filtro de grupos.

```
┌─────────────────────────────────────────────────────────┐
│ Lista de Processos            [👥 Grupos] [📅 Data]     │
└─────────────────────────────────────────────────────────┘
```

---

### 🔍 Como Acessar o Filtro de Data

#### **Passo 1: Localize o Botão**

Procure pelo botão com o **ícone de calendário** 📅 no canto superior direito da lista de processos.

**Aparência do botão**:
```
┌─────────────────────┐
│ 📅 15 jan. - 15 jan.│
└─────────────────────┘
```

O texto do botão mostra o **período atualmente selecionado**:
- `15 jan.` - Um único dia (15 de janeiro)
- `15 jan. - 21 jan.` - Um intervalo de datas
- `Hoje` - Atalho ativo
- `Esta Semana` - Atalho ativo

#### **Passo 2: Clique no Botão**

Clique uma vez no botão para abrir o **menu dropdown** de filtros de data.


#### **Passo 3: Veja o Menu Dropdown**

Quando você clica no botão, um menu se abre mostrando:

```
┌─────────────────────────────────────────┐
│ Filtro de Data                          │
├─────────────────────────────────────────┤
│ [Ontem]      [Hoje]                     │
│ [Amanhã]     [Esta Semana]              │
│ [Este Mês]                              │
├─────────────────────────────────────────┤
│ Data Inicial: [__/__/____]              │
│ Data Final:   [__/__/____]              │
└─────────────────────────────────────────┘
```

**Elementos do menu**:
1. **5 Atalhos Rápidos**: Botões para períodos comuns
2. **Data Inicial**: Campo para selecionar data de início personalizada
3. **Data Final**: Campo para selecionar data de fim personalizada

---

### ⚡ Atalhos Rápidos de Data

Os **atalhos rápidos** são botões que selecionam automaticamente períodos de tempo comuns. Basta clicar em um deles e o dashboard atualiza instantaneamente!

#### 📅 **Atalho 1: Ontem**

**O que mostra**: Todas as audiências do **dia anterior** ao dia atual.

**Quando usar**:
- ✅ Para revisar o que aconteceu ontem
- ✅ Para verificar audiências que não foram confirmadas
- ✅ Para análise de final de dia (no dia seguinte)
- ✅ Para preparar relatórios do dia anterior

**Exemplo Prático**:

```
Hoje é: 16 de janeiro de 2024 (terça-feira)
Você clica em: [Ontem]
Dashboard mostra: Audiências de 15 de janeiro de 2024 (segunda-feira)
```

**Caso de Uso Real**:

*Cenário*: É terça-feira, 9h da manhã. Você quer revisar como foi o dia de ontem.

*Ação*:
1. Abra o dashboard
2. Clique no filtro de data 📅
3. Clique em **[Ontem]**
4. Analise as métricas:
   - Quantos check-ins foram feitos?
   - Quantos não foram realizados?
   - Qual foi a taxa de confirmação?


*Resultado*:
```
Painel de Métricas (Ontem - 15/01):
- Check-in Feito: 12
- A Confirmar: 0 (normal, dia já passou)
- Não Realizados: 3
- Taxa de Confirmação: 80%

Interpretação:
✅ Taxa de 80% é boa!
🔴 3 audiências não confirmadas - investigar o que aconteceu
📝 Registrar ocorrências para relatório semanal
```

**Dica**: Use "Ontem" toda manhã para fazer uma revisão rápida do dia anterior antes de começar a monitorar o dia atual.

---

#### 📅 **Atalho 2: Hoje**

**O que mostra**: Todas as audiências do **dia atual**.

**Quando usar**:
- ✅ Para monitoramento em tempo real (uso mais comum!)
- ✅ Para acompanhar confirmações ao longo do dia
- ✅ Para identificar problemas urgentes
- ✅ Para verificar audiências que vão acontecer ainda hoje

**Exemplo Prático**:

```
Hoje é: 16 de janeiro de 2024 (terça-feira)
Você clica em: [Hoje]
Dashboard mostra: Audiências de 16 de janeiro de 2024 (terça-feira)
```

**Caso de Uso Real**:

*Cenário*: É terça-feira, 10h da manhã. Você quer monitorar as audiências do dia.

*Ação*:
1. Abra o dashboard
2. Clique no filtro de data 📅
3. Clique em **[Hoje]**
4. Deixe o dashboard aberto durante o dia
5. Observe as atualizações automáticas a cada 2 minutos


*Resultado*:
```
Painel de Métricas (Hoje - 16/01, 10h):
- Check-in Feito: 5 (audiências da manhã já confirmadas)
- A Confirmar: 3 (audiências da tarde, mensagens ainda não enviadas)
- Não Realizados: 1 (atenção! audiência às 10:30 não confirmada)
- Taxa de Confirmação: 56%

Interpretação:
🟠 1 audiência não confirmada às 10:30 - AÇÃO URGENTE!
✅ 5 audiências da manhã já confirmadas
⚪ 3 audiências da tarde ainda com status "Nulo" (normal)
📞 Ligar imediatamente para advogado da audiência das 10:30
```

**Dica**: "Hoje" é o filtro padrão e mais usado. Deixe-o ativo durante todo o expediente para monitoramento contínuo.

---

#### 📅 **Atalho 3: Amanhã**

**O que mostra**: Todas as audiências do **próximo dia**.

**Quando usar**:
- ✅ Para planejamento antecipado
- ✅ Para verificar a agenda do dia seguinte
- ✅ Para preparar ações preventivas
- ✅ Para identificar audiências críticas com antecedência

**Exemplo Prático**:

```
Hoje é: 16 de janeiro de 2024 (terça-feira)
Você clica em: [Amanhã]
Dashboard mostra: Audiências de 17 de janeiro de 2024 (quarta-feira)
```

**Caso de Uso Real**:

*Cenário*: É terça-feira, 17h (fim do expediente). Você quer se preparar para amanhã.

*Ação*:
1. Abra o dashboard
2. Clique no filtro de data 📅
3. Clique em **[Amanhã]**
4. Analise a carga de trabalho do dia seguinte


*Resultado*:
```
Painel de Métricas (Amanhã - 17/01):
- Check-in Feito: 0 (normal, mensagens ainda não foram enviadas)
- A Confirmar: 0 (normal, mensagens ainda não foram enviadas)
- Não Realizados: 0 (normal, mensagens ainda não foram enviadas)
- Taxa de Confirmação: 0% (normal para dia futuro)

Lista de Processos:
- 8 audiências agendadas para amanhã
- Horários: 9h, 10h, 11h, 14h, 14h, 15h, 16h, 17h
- Todos com status ⚪ Nulo (normal)

Interpretação:
📊 8 audiências amanhã - dia moderado
⏰ 3 audiências de manhã, 5 à tarde
✅ Tudo cadastrado corretamente (status Nulo é esperado)
📝 Planejar monitoramento para amanhã
```

**Dica**: Use "Amanhã" no final do expediente para se preparar mentalmente para o dia seguinte e identificar possíveis desafios.

---

#### 📅 **Atalho 4: Esta Semana**

**O que mostra**: Todas as audiências da **semana atual** (de domingo a sábado).

**Quando usar**:
- ✅ Para visão geral semanal
- ✅ Para planejamento de início de semana
- ✅ Para análise de performance semanal
- ✅ Para identificar padrões ao longo da semana

**Exemplo Prático**:

```
Hoje é: 16 de janeiro de 2024 (terça-feira)
Semana atual: 14/01 (domingo) a 20/01 (sábado)
Você clica em: [Esta Semana]
Dashboard mostra: Audiências de 14/01 a 20/01
```

**Caso de Uso Real**:

*Cenário*: É segunda-feira, 8h da manhã. Você quer ter uma visão geral da semana.

*Ação*:
1. Abra o dashboard
2. Clique no filtro de data 📅
3. Clique em **[Esta Semana]**
4. Analise a distribuição de audiências


*Resultado*:
```
Painel de Métricas (Esta Semana - 14/01 a 20/01):
- Check-in Feito: 15 (audiências de segunda e terça já confirmadas)
- A Confirmar: 5 (audiências de hoje ainda pendentes)
- Não Realizados: 3 (audiências de segunda que não foram confirmadas)
- Taxa de Confirmação: 65%

Lista de Processos:
- 45 audiências na semana toda
- Segunda: 12 audiências (já passaram)
- Terça: 10 audiências (hoje)
- Quarta: 8 audiências (futuro)
- Quinta: 9 audiências (futuro)
- Sexta: 6 audiências (futuro)

Interpretação:
📊 45 audiências na semana - carga alta
🔴 Taxa de 65% está abaixo da meta (80%)
⚠️ 3 não realizados na segunda - investigar
📈 Quarta tem menos audiências - dia mais tranquilo
📝 Planejar ações para melhorar taxa de confirmação
```

**Dica**: Use "Esta Semana" toda segunda-feira de manhã para ter uma visão estratégica da semana e planejar suas ações.

---

#### 📅 **Atalho 5: Este Mês**

**O que mostra**: Todas as audiências do **mês atual** (do dia 1 ao último dia do mês).

**Quando usar**:
- ✅ Para análise mensal de performance
- ✅ Para preparar relatórios mensais
- ✅ Para identificar tendências de longo prazo
- ✅ Para comparar com meses anteriores

**Exemplo Prático**:

```
Hoje é: 16 de janeiro de 2024
Mês atual: Janeiro de 2024 (01/01 a 31/01)
Você clica em: [Este Mês]
Dashboard mostra: Audiências de 01/01 a 31/01
```

**Caso de Uso Real**:

*Cenário*: É dia 25 de janeiro. Você precisa preparar o relatório mensal.

*Ação*:
1. Abra o dashboard
2. Clique no filtro de data 📅
3. Clique em **[Este Mês]**
4. Analise as métricas consolidadas do mês


*Resultado*:
```
Painel de Métricas (Este Mês - Janeiro/2024):
- Check-in Feito: 156
- A Confirmar: 12 (audiências futuras ainda este mês)
- Não Realizados: 24
- Taxa de Confirmação: 81%

Lista de Processos:
- 192 audiências no mês todo
- Dias com mais audiências: 10/01 (18), 15/01 (16), 22/01 (15)
- Dias com menos audiências: 01/01 (2), 07/01 (3), 14/01 (4)

Interpretação:
📊 192 audiências em janeiro - volume alto
✅ Taxa de 81% está acima da meta (80%)
🔴 24 não realizados - identificar causas
📈 Tendência positiva comparado a dezembro (78%)
📝 Dados prontos para relatório mensal
```

**Dica**: Use "Este Mês" no final do mês para consolidar dados e preparar relatórios. Compare com meses anteriores para identificar melhorias ou problemas.

---

### 🎯 Tabela Resumo dos Atalhos

Para consulta rápida, aqui está uma tabela com todos os atalhos:

| Atalho | Período | Quando Usar | Exemplo |
|--------|---------|-------------|---------|
| **Ontem** | Dia anterior | Revisar o que aconteceu | Segunda-feira mostra domingo |
| **Hoje** | Dia atual | Monitoramento em tempo real | Terça-feira mostra terça-feira |
| **Amanhã** | Próximo dia | Planejamento antecipado | Terça-feira mostra quarta-feira |
| **Esta Semana** | Domingo a sábado | Visão semanal | Mostra semana atual completa |
| **Este Mês** | Dia 1 ao último dia | Análise mensal | Mostra mês atual completo |

---


### 📆 Período Personalizado

Além dos atalhos rápidos, você pode selecionar **qualquer período de datas** que desejar usando os campos de **Data Inicial** e **Data Final**.

#### **Quando Usar Período Personalizado**

Use período personalizado quando:
- 🔍 Precisa analisar um intervalo específico (ex: 10/01 a 15/01)
- 📊 Quer comparar semanas específicas (ex: primeira semana vs segunda semana)
- 📅 Precisa de dados para relatórios customizados
- 🔎 Quer investigar um período problemático específico
- 📈 Quer analisar tendências em períodos não convencionais

#### **Como Selecionar Período Personalizado**

**Passo 1: Abra o Filtro de Data**

Clique no botão 📅 no canto superior direito.

**Passo 2: Localize os Campos de Data**

No menu dropdown, você verá:

```
┌─────────────────────────────────────────┐
│ Data Inicial: [__/__/____]              │
│ Data Final:   [__/__/____]              │
└─────────────────────────────────────────┘
```

**Passo 3: Selecione a Data Inicial**

1. Clique no campo **"Data Inicial"**
2. Um **calendário** aparece
3. Navegue pelos meses usando as setas ◀ ▶
4. Clique no **dia desejado**
5. O campo é preenchido automaticamente

**Passo 4: Selecione a Data Final**

1. Clique no campo **"Data Final"**
2. Um **calendário** aparece
3. Navegue pelos meses usando as setas ◀ ▶
4. Clique no **dia desejado**
5. O campo é preenchido automaticamente

**Passo 5: Dashboard Atualiza Automaticamente**

Assim que você seleciona ambas as datas, o dashboard **atualiza instantaneamente** mostrando apenas as audiências do período escolhido.


#### **Exemplo Prático 1: Analisar Uma Semana Específica**

*Cenário*: Você quer analisar a primeira semana de janeiro (01/01 a 07/01).

*Ação*:
1. Clique no filtro de data 📅
2. Clique em "Data Inicial"
3. Selecione **01/01/2024**
4. Clique em "Data Final"
5. Selecione **07/01/2024**
6. Dashboard atualiza automaticamente

*Resultado*:
```
Painel de Métricas (01/01 a 07/01):
- Check-in Feito: 28
- A Confirmar: 0 (período já passou)
- Não Realizados: 7
- Taxa de Confirmação: 80%

Interpretação:
✅ Taxa de 80% na primeira semana - ótimo início!
📊 35 audiências na primeira semana
🔴 7 não realizados - dentro do esperado
```

---

#### **Exemplo Prático 2: Comparar Duas Semanas**

*Cenário*: Você quer comparar a primeira semana (01/01 a 07/01) com a segunda semana (08/01 a 14/01).

*Ação*:

**Primeira Semana**:
1. Selecione Data Inicial: **01/01/2024**
2. Selecione Data Final: **07/01/2024**
3. Anote as métricas

**Segunda Semana**:
1. Selecione Data Inicial: **08/01/2024**
2. Selecione Data Final: **14/01/2024**
3. Compare as métricas

*Resultado*:
```
Primeira Semana (01/01 a 07/01):
- Taxa de Confirmação: 80%
- Não Realizados: 7

Segunda Semana (08/01 a 14/01):
- Taxa de Confirmação: 75%
- Não Realizados: 12

Interpretação:
📉 Taxa caiu de 80% para 75%
🔴 Não realizados aumentaram de 7 para 12
⚠️ Tendência negativa - investigar causas
💡 Possível causa: Volta do recesso, advogados desorganizados
```


#### **Exemplo Prático 3: Analisar Um Mês Anterior**

*Cenário*: Você quer analisar dezembro de 2023 para comparar com janeiro de 2024.

*Ação*:
1. Clique no filtro de data 📅
2. Clique em "Data Inicial"
3. Use as setas ◀ para voltar para dezembro
4. Selecione **01/12/2023**
5. Clique em "Data Final"
6. Selecione **31/12/2023**
7. Dashboard atualiza automaticamente

*Resultado*:
```
Painel de Métricas (Dezembro/2023):
- Check-in Feito: 142
- A Confirmar: 0
- Não Realizados: 28
- Taxa de Confirmação: 78%

Comparação com Janeiro/2024:
- Dezembro: 78% | Janeiro: 81%
- Melhoria de 3 pontos percentuais! ✅
```

---

#### **Validação Automática de Datas**

O sistema tem **validações automáticas** para evitar erros:

**Validação 1: Data Final Antes da Data Inicial**

Se você selecionar:
- Data Inicial: 15/01/2024
- Data Final: 10/01/2024 (antes da inicial!)

O sistema **ajusta automaticamente**:
- Data Inicial: 10/01/2024
- Data Final: 15/01/2024

**Validação 2: Datas Inválidas**

O calendário não permite selecionar:
- ❌ Datas que não existem (ex: 31/02)
- ❌ Datas muito no futuro (mais de 1 ano)
- ❌ Datas muito no passado (mais de 2 anos)

**Validação 3: Formato de Data**

O sistema aceita apenas o formato:
- ✅ DD/MM/AAAA (ex: 15/01/2024)
- ❌ MM/DD/AAAA (formato americano não aceito)
- ❌ AAAA-MM-DD (formato ISO não aceito)


---

### 💡 Exemplos Práticos de Uso dos Filtros de Data

Aqui estão cenários reais de como usar os filtros de data no seu dia a dia:

#### **Exemplo 1: Rotina Diária de Monitoramento**

**Objetivo**: Monitorar audiências do dia em tempo real.

**Passo a Passo**:
1. **8h00** - Chegada ao trabalho
   - Abra o dashboard
   - Clique em **[Hoje]**
   - Veja quantas audiências há hoje
   - Identifique horários críticos

2. **Durante o dia** - Monitoramento contínuo
   - Deixe o dashboard aberto
   - Observe atualizações automáticas (a cada 2 minutos)
   - Aja quando ver status vermelho 🔴

3. **17h00** - Fim do expediente
   - Revise o dia: ainda em **[Hoje]**
   - Anote taxa de confirmação
   - Registre ocorrências

4. **17h15** - Preparação para amanhã
   - Mude para **[Amanhã]**
   - Veja quantas audiências há amanhã
   - Identifique possíveis desafios

**Resultado**: Você tem controle total do dia atual e está preparado para o dia seguinte.

---

#### **Exemplo 2: Análise Semanal (Segunda-feira de Manhã)**

**Objetivo**: Ter visão estratégica da semana.

**Passo a Passo**:
1. **Segunda, 8h00** - Visão geral
   - Abra o dashboard
   - Clique em **[Esta Semana]**
   - Veja total de audiências da semana
   - Identifique dias com mais carga

2. **Análise por dia**
   - Segunda: Quantas audiências?
   - Terça: Quantas audiências?
   - Quarta: Quantas audiências?
   - Quinta: Quantas audiências?
   - Sexta: Quantas audiências?

3. **Planejamento**
   - Identifique dias críticos (muitas audiências)
   - Planeje ações preventivas
   - Aloque recursos se necessário

**Resultado**: Você sabe exatamente o que esperar da semana e pode se planejar adequadamente.


---

#### **Exemplo 3: Investigação de Problema Específico**

**Objetivo**: Investigar por que a taxa de confirmação caiu na semana passada.

**Passo a Passo**:
1. **Identifique o período problemático**
   - Você sabe que semana passada teve problemas
   - Semana passada foi: 08/01 a 14/01

2. **Selecione o período**
   - Clique no filtro de data 📅
   - Data Inicial: **08/01/2024**
   - Data Final: **14/01/2024**

3. **Analise as métricas**
   - Taxa de Confirmação: 65% (baixa!)
   - Não Realizados: 18 (alto!)

4. **Investigue por dia**
   - Mude para cada dia individualmente
   - 08/01: Taxa 70%
   - 09/01: Taxa 60% ⚠️ (problema aqui!)
   - 10/01: Taxa 75%
   - ...

5. **Identifique a causa**
   - Dia 09/01 teve taxa muito baixa
   - Verifique: Foi feriado? Houve problema técnico?
   - Consulte logs do sistema

**Resultado**: Você identificou que o problema foi específico do dia 09/01 e pode investigar a causa raiz.

---

#### **Exemplo 4: Preparação de Relatório Mensal**

**Objetivo**: Preparar relatório de performance de janeiro.

**Passo a Passo**:
1. **Último dia útil do mês**
   - Abra o dashboard
   - Clique em **[Este Mês]**

2. **Colete as métricas**
   - Total de audiências: 192
   - Check-ins feitos: 156
   - Não realizados: 24
   - Taxa de confirmação: 81%

3. **Compare com mês anterior**
   - Mude para dezembro (período personalizado)
   - Data Inicial: 01/12/2023
   - Data Final: 31/12/2023
   - Taxa dezembro: 78%

4. **Prepare o relatório**
   ```
   RELATÓRIO MENSAL - JANEIRO 2024
   
   Métricas Gerais:
   - Total de audiências: 192
   - Taxa de confirmação: 81% ✅
   - Não realizados: 24
   
   Comparação com Dezembro:
   - Dezembro: 78%
   - Janeiro: 81%
   - Melhoria: +3% ✅
   
   Análise:
   - Performance melhorou em relação ao mês anterior
   - Meta de 80% foi atingida
   - Continuar monitoramento para manter padrão
   ```

**Resultado**: Relatório completo e fundamentado em dados reais do dashboard.


---

#### **Exemplo 5: Análise de Tendência (Últimos 3 Meses)**

**Objetivo**: Identificar tendências de longo prazo.

**Passo a Passo**:
1. **Analise cada mês separadamente**

   **Novembro 2023**:
   - Data Inicial: 01/11/2023
   - Data Final: 30/11/2023
   - Taxa: 75%

   **Dezembro 2023**:
   - Data Inicial: 01/12/2023
   - Data Final: 31/12/2023
   - Taxa: 78%

   **Janeiro 2024**:
   - Data Inicial: 01/01/2024
   - Data Final: 31/01/2024
   - Taxa: 81%

2. **Identifique a tendência**
   ```
   Novembro: 75%
   Dezembro: 78% (+3%)
   Janeiro:  81% (+3%)
   
   Tendência: POSITIVA ✅
   Crescimento constante de 3% ao mês
   ```

3. **Projete o futuro**
   - Se tendência continuar: Fevereiro pode chegar a 84%
   - Meta: Manter crescimento ou estabilizar em 80%+

**Resultado**: Você tem visão de longo prazo e pode tomar decisões estratégicas baseadas em tendências.

---

### 🎯 Dicas de Uso dos Filtros de Data

#### **Dica 1: Use "Hoje" como Padrão** ⭐

O filtro **"Hoje"** deve ser seu filtro padrão durante o expediente:
- ✅ Monitoramento em tempo real
- ✅ Foco no que é urgente
- ✅ Atualização automática funciona perfeitamente
- ✅ Você vê apenas o que importa agora

**Como fazer**: Sempre que abrir o dashboard, clique em **[Hoje]** primeiro.

---

#### **Dica 2: Combine com Filtro de Grupos** 🔗

Os filtros de **Data** e **Grupos** trabalham juntos:

**Exemplo**:
- Filtro de Data: **[Hoje]**
- Filtro de Grupos: **Apenas Controle Trabalhista**
- Resultado: Audiências de hoje da área Trabalhista

**Benefício**: Você vê apenas o que é relevante para você, sem distrações.


---

#### **Dica 3: Use Atalhos para Rapidez** ⚡

Os **atalhos rápidos** são muito mais rápidos que selecionar datas manualmente:

**Rápido** ✅:
- Clique em **[Hoje]** → Instantâneo!

**Lento** ❌:
- Clique em Data Inicial → Selecione dia → Clique em Data Final → Selecione dia

**Quando usar cada um**:
- Atalhos: Para períodos comuns (90% dos casos)
- Período personalizado: Para análises específicas (10% dos casos)

---

#### **Dica 4: Crie Uma Rotina de Filtros** 📅

Estabeleça uma rotina diária de uso dos filtros:

**8h00 - Início do Dia**:
1. **[Ontem]** - Revisar o dia anterior (5 minutos)
2. **[Hoje]** - Ver o dia atual (deixar aberto)

**12h00 - Meio do Dia**:
1. **[Hoje]** - Verificar status (já deve estar aberto)
2. Ação em status vermelhos

**17h00 - Fim do Dia**:
1. **[Hoje]** - Revisar o dia (5 minutos)
2. **[Amanhã]** - Preparar o dia seguinte (5 minutos)

**Segunda-feira, 8h00**:
1. **[Esta Semana]** - Visão geral da semana (10 minutos)
2. **[Hoje]** - Focar no dia (deixar aberto)

**Último dia do mês**:
1. **[Este Mês]** - Coletar dados para relatório (15 minutos)

---

#### **Dica 5: Experimente Diferentes Períodos** 🔍

Não tenha medo de experimentar diferentes combinações:

**Exemplos de análises interessantes**:
- Primeira quinzena vs Segunda quinzena
- Segundas-feiras vs Sextas-feiras (selecione apenas essas datas)
- Semana antes do feriado vs Semana depois do feriado
- Mês com mais audiências vs Mês com menos audiências

**Benefício**: Você descobre padrões que não são óbvios à primeira vista.


---

#### **Dica 6: Entenda o Impacto nos Dados** 📊

Lembre-se sempre: **O filtro de data afeta TUDO no dashboard**:

✅ **Painel de Métricas**: Recalcula baseado no período  
✅ **Lista de Processos**: Mostra apenas audiências do período  
✅ **Taxa de Confirmação**: Calculada apenas para o período  

**Exemplo**:

**Filtro: [Hoje]**
```
Taxa de Confirmação: 80%
Interpretação: 80% das audiências DE HOJE foram confirmadas
```

**Filtro: [Este Mês]**
```
Taxa de Confirmação: 80%
Interpretação: 80% das audiências DO MÊS TODO foram confirmadas
```

**Importante**: A mesma taxa (80%) tem significados diferentes dependendo do filtro!

---

#### **Dica 7: Use Período Personalizado para Comparações** 📈

Quando quiser comparar períodos específicos, use período personalizado:

**Exemplo: Comparar Primeira Semana de Janeiro com Primeira Semana de Fevereiro**

**Janeiro - Semana 1**:
- Data Inicial: 01/01/2024
- Data Final: 07/01/2024
- Taxa: 80%

**Fevereiro - Semana 1**:
- Data Inicial: 01/02/2024
- Data Final: 07/02/2024
- Taxa: 85%

**Conclusão**: Primeira semana de fevereiro foi melhor que primeira semana de janeiro (+5%).

---

### ⚠️ Problemas Comuns e Soluções

#### **Problema 1: "Não vejo nenhuma audiência"**

**Possíveis causas**:
1. Período selecionado não tem audiências
2. Filtro de grupos está vazio (nenhum grupo selecionado)
3. Data selecionada está muito no futuro ou muito no passado

**Soluções**:
1. ✅ Mude para **[Hoje]** ou **[Esta Semana]**
2. ✅ Verifique se há grupos selecionados no filtro de grupos
3. ✅ Verifique se as datas estão corretas


---

#### **Problema 2: "Filtro não está funcionando"**

**Sintomas**:
- Você clica em um atalho mas nada muda
- Você seleciona datas mas dashboard não atualiza

**Soluções**:
1. ✅ Aguarde 2-3 segundos (pode haver delay de rede)
2. ✅ Recarregue a página (F5 ou Cmd+R)
3. ✅ Limpe o cache do navegador
4. ✅ Tente outro navegador
5. ✅ Entre em contato com suporte se persistir

---

#### **Problema 3: "Datas estão confusas"**

**Sintomas**:
- Você selecionou 15/01 mas aparece 01/15
- Formato de data parece errado

**Causa**: Configuração de região do navegador

**Solução**:
1. ✅ Verifique configurações de idioma do navegador
2. ✅ Configure para Português (Brasil)
3. ✅ Recarregue a página

---

#### **Problema 4: "Não consigo selecionar data muito antiga"**

**Sintomas**:
- Você quer ver dados de 2022 mas não consegue

**Causa**: Sistema limita a 2 anos no passado

**Solução**:
1. ✅ Sistema mantém dados apenas dos últimos 2 anos
2. ✅ Para dados mais antigos, entre em contato com TI
3. ✅ Dados antigos podem estar em backup

---

### 📋 Checklist de Domínio dos Filtros de Data

Use este checklist para garantir que você domina os filtros de data:

**Atalhos Rápidos**:
- [ ] Sei usar o atalho **[Ontem]**
- [ ] Sei usar o atalho **[Hoje]**
- [ ] Sei usar o atalho **[Amanhã]**
- [ ] Sei usar o atalho **[Esta Semana]**
- [ ] Sei usar o atalho **[Este Mês]**
- [ ] Entendo quando usar cada atalho

**Período Personalizado**:
- [ ] Sei selecionar Data Inicial
- [ ] Sei selecionar Data Final
- [ ] Sei navegar pelo calendário (setas ◀ ▶)
- [ ] Entendo quando usar período personalizado

**Uso Prático**:
- [ ] Sei combinar filtro de data com filtro de grupos
- [ ] Entendo que o filtro afeta todas as métricas
- [ ] Sei usar filtros para análises comparativas
- [ ] Criei uma rotina diária de uso dos filtros

**Resolução de Problemas**:
- [ ] Sei o que fazer quando não vejo audiências
- [ ] Sei recarregar o dashboard se necessário
- [ ] Sei quando entrar em contato com suporte


---

### 🎯 Próximos Passos

Agora que você domina completamente os **filtros de data**, vamos para a próxima seção onde você vai aprender como usar os **filtros de grupo/área** para visualizar audiências de áreas específicas!

**Prévia da Próxima Seção**:
- 👥 Como selecionar grupos específicos
- 👥 Como usar seleção múltipla
- 👥 Botões "Marcar Todos" e "Desmarcar Todos"
- 👥 Exemplos práticos de filtragem por área

---

## 6. Como Usar os Filtros de Grupo/Área

### 👥 Visão Geral do Filtro de Grupos

O **Filtro de Grupos** é uma ferramenta essencial que permite visualizar audiências de **áreas específicas** do escritório. Cada grupo representa uma especialidade jurídica diferente, e você pode selecionar um ou vários grupos para focar apenas nas audiências que são relevantes para você.

**Por que o filtro de grupos é importante?**
- 🎯 **Foco**: Veja apenas audiências da sua área de responsabilidade
- 🔍 **Clareza**: Elimine informações irrelevantes
- 📊 **Análise**: Compare performance entre diferentes áreas
- ⚡ **Eficiência**: Economize tempo focando no que importa

**Localização**: O filtro de grupos fica no **canto superior direito** da seção "Lista de Processos", ao lado do filtro de data.

```
┌─────────────────────────────────────────────────────────┐
│ Lista de Processos            [👥 Grupos] [📅 Data]     │
└─────────────────────────────────────────────────────────┘
```

---

### 📋 Os 6 Grupos Disponíveis

O sistema organiza os advogados e suas audiências em **6 grupos principais**, cada um representando uma área de atuação jurídica:

#### **1. Controle Contencioso Imobiliário/Agrário** 🏘️

**Área de atuação**: Processos relacionados a imóveis e questões agrárias
- Disputas de propriedade
- Questões de posse
- Contratos de compra e venda
- Usucapião
- Questões rurais e agrícolas

**Quando filtrar**: Se você gerencia a área imobiliária/agrária

---

#### **2. Controle Cível** ⚖️

**Área de atuação**: Processos cíveis gerais
- Ações de cobrança
- Indenizações
- Contratos em geral
- Responsabilidade civil
- Direito do consumidor

**Quando filtrar**: Se você gerencia a área cível

**Nota**: Este grupo consolida automaticamente:
- Controle Cível - PF (Pessoa Física)
- Controle Cível Select
- Controle Cível (geral)

---

#### **3. Controle Criminal** 🚔

**Área de atuação**: Processos criminais
- Defesas criminais
- Ações penais
- Habeas corpus
- Recursos criminais

**Quando filtrar**: Se você gerencia a área criminal

---

#### **4. Controle Tributário e Empresarial** 💼

**Área de atuação**: Questões tributárias e empresariais
- Execuções fiscais
- Mandados de segurança tributários
- Recuperação judicial
- Direito societário
- Questões empresariais

**Quando filtrar**: Se você gerencia a área tributária/empresarial

---

#### **5. Controle Trabalhista** 👷

**Área de atuação**: Processos trabalhistas
- Reclamações trabalhistas
- Ações de empregados
- Ações de empregadores
- Questões sindicais

**Quando filtrar**: Se você gerencia a área trabalhista

---

#### **6. Controle Contencioso Ambiental** 🌳

**Área de atuação**: Questões ambientais
- Licenciamento ambiental
- Infrações ambientais
- Ações civis públicas ambientais
- Compensações ambientais

**Quando filtrar**: Se você gerencia a área ambiental

---

### 🎯 Tabela Resumo dos Grupos

Para consulta rápida:

| # | Grupo | Ícone | Área de Atuação |
|---|-------|-------|-----------------|
| 1 | Controle Contencioso Imobiliário/Agrário | 🏘️ | Imóveis e questões rurais |
| 2 | Controle Cível | ⚖️ | Processos cíveis gerais |
| 3 | Controle Criminal | 🚔 | Processos criminais |
| 4 | Controle Tributário e Empresarial | 💼 | Tributos e empresas |
| 5 | Controle Trabalhista | 👷 | Relações de trabalho |
| 6 | Controle Contencioso Ambiental | 🌳 | Questões ambientais |

---
### 🔍 Como Acessar o Filtro de Grupos

#### **Passo 1: Localize o Botão**

Procure pelo botão com o **ícone de pessoas** 👥 no canto superior direito da lista de processos, ao lado do filtro de data.

**Aparência do botão**:
```
┌─────────────────────┐
│ 👥 Todos os Grupos  │
└─────────────────────┘
```

O texto do botão **muda dinamicamente** conforme sua seleção:
- `Nenhum Grupo` - Nenhum grupo está selecionado
- `Todos os Grupos` - Todos os 6 grupos estão selecionados
- `Controle Cível` - Apenas 1 grupo específico está selecionado
- `3 Grupos` - 3 grupos estão selecionados
- `Controle Cível e mais 2` - Múltiplos grupos selecionados

#### **Passo 2: Clique no Botão**

Clique uma vez no botão para abrir o **menu dropdown** de filtros de grupos.

#### **Passo 3: Veja o Menu Dropdown**

Quando você clica no botão, um menu se abre mostrando:

```
┌─────────────────────────────────────────┐
│ Filtrar por Grupo                       │
│                                         │
│ [Marcar Todos]  [Desmarcar Todos]      │
├─────────────────────────────────────────┤
│ ☑ Controle Contencioso Imobiliário/... │
│ ☑ Controle Cível                        │
│ ☑ Controle Criminal                     │
│ ☑ Controle Tributário e Empresarial    │
│ ☑ Controle Trabalhista                  │
│ ☑ Controle Contencioso Ambiental       │
└─────────────────────────────────────────┘
```

**Elementos do menu**:
1. **Título**: "Filtrar por Grupo"
2. **Botões de ação rápida**: "Marcar Todos" e "Desmarcar Todos"
3. **Lista de checkboxes**: Os 6 grupos com caixas de seleção
4. **Indicadores visuais**: ☑ (marcado) ou ☐ (desmarcado)

---

### ✅ Como Marcar e Desmarcar Grupos

#### **Marcar um Grupo Individual**

**Como fazer**:
1. Abra o dropdown de grupos (clique no botão 👥)
2. Clique na **checkbox** do grupo desejado
3. A checkbox fica marcada: ☑
4. O dashboard **atualiza automaticamente**
5. O menu permanece aberto para mais seleções

**Exemplo Visual**:

**Antes de clicar**:
```
☐ Controle Trabalhista
```

**Depois de clicar**:
```
☑ Controle Trabalhista
```

**Resultado no Dashboard**:
- Métricas recalculadas para incluir apenas audiências do grupo Trabalhista
- Lista mostra apenas processos do grupo Trabalhista
- Botão do filtro muda para: `👥 Controle Trabalhista`

---

#### **Desmarcar um Grupo Individual**

**Como fazer**:
1. Abra o dropdown de grupos
2. Clique na **checkbox** do grupo que deseja remover
3. A checkbox fica desmarcada: ☐
4. O dashboard **atualiza automaticamente**
5. O menu permanece aberto

**Exemplo Visual**:

**Antes de clicar**:
```
☑ Controle Trabalhista
```

**Depois de clicar**:
```
☐ Controle Trabalhista
```

**Resultado no Dashboard**:
- Audiências do grupo Trabalhista são removidas da visualização
- Métricas recalculadas sem esse grupo
- Se nenhum grupo ficar marcado: Nenhuma audiência aparece

---
### 🔘 Botões "Marcar Todos" e "Desmarcar Todos"

Para facilitar a seleção rápida, o filtro de grupos oferece dois botões de ação rápida no topo do menu dropdown.

#### **Botão "Marcar Todos"** ✅

**O que faz**: Seleciona **todos os 6 grupos** de uma só vez.

**Como usar**:
1. Abra o dropdown de grupos
2. Clique no botão **[Marcar Todos]**
3. Todas as checkboxes ficam marcadas: ☑
4. Dashboard atualiza mostrando audiências de **todas as áreas**

**Quando usar**:
- ✅ Quando você quer ver **todas as audiências** do escritório
- ✅ Quando você acabou de filtrar por área específica e quer voltar à visão completa
- ✅ Para análise geral de performance de todas as áreas
- ✅ Para relatórios consolidados

**Exemplo Visual**:

**Antes de clicar em "Marcar Todos"**:
```
☐ Controle Contencioso Imobiliário/Agrário
☑ Controle Cível
☐ Controle Criminal
☐ Controle Tributário e Empresarial
☐ Controle Trabalhista
☐ Controle Contencioso Ambiental
```

**Depois de clicar em "Marcar Todos"**:
```
☑ Controle Contencioso Imobiliário/Agrário
☑ Controle Cível
☑ Controle Criminal
☑ Controle Tributário e Empresarial
☑ Controle Trabalhista
☑ Controle Contencioso Ambiental
```

**Resultado**:
- Botão do filtro muda para: `👥 Todos os Grupos`
- Dashboard mostra audiências de todas as 6 áreas
- Métricas calculadas considerando todas as audiências

**Atalho de Teclado** (futuro): Ctrl + A (selecionar todos)

---

#### **Botão "Desmarcar Todos"** ❌

**O que faz**: Remove a seleção de **todos os grupos** de uma só vez.

**Como usar**:
1. Abra o dropdown de grupos
2. Clique no botão **[Desmarcar Todos]**
3. Todas as checkboxes ficam desmarcadas: ☐
4. Dashboard fica **vazio** (nenhuma audiência aparece)

**Quando usar**:
- ✅ Quando você quer **começar do zero** uma nova seleção
- ✅ Quando você quer selecionar apenas 1 ou 2 grupos específicos (mais fácil desmarcar todos e marcar os desejados)
- ✅ Para "limpar" a seleção atual rapidamente

**Exemplo Visual**:

**Antes de clicar em "Desmarcar Todos"**:
```
☑ Controle Contencioso Imobiliário/Agrário
☑ Controle Cível
☑ Controle Criminal
☑ Controle Tributário e Empresarial
☑ Controle Trabalhista
☑ Controle Contencioso Ambiental
```

**Depois de clicar em "Desmarcar Todos"**:
```
☐ Controle Contencioso Imobiliário/Agrário
☐ Controle Cível
☐ Controle Criminal
☐ Controle Tributário e Empresarial
☐ Controle Trabalhista
☐ Controle Contencioso Ambiental
```

**Resultado**:
- Botão do filtro muda para: `👥 Nenhum Grupo`
- Dashboard fica vazio (nenhuma audiência aparece)
- Métricas mostram zeros:
  ```
  Check-in Feito: 0
  A Confirmar: 0
  Não Realizados: 0
  Taxa de Confirmação: 0%
  ```

**Atenção**: ⚠️ Se você desmarcar todos os grupos, **nenhuma audiência será exibida**. Isso é normal! Basta marcar os grupos que deseja visualizar.

**Atalho de Teclado** (futuro): Ctrl + D (desmarcar todos)

---

### 🔄 Fluxo de Trabalho com os Botões

**Cenário Comum**: Você quer ver apenas 2 áreas específicas (Cível e Trabalhista).

**Método 1: Desmarcar manualmente** (mais demorado):
1. Abra o dropdown
2. Desmarque Imobiliário/Agrário
3. Mantenha Cível marcado
4. Desmarque Criminal
5. Desmarque Tributário e Empresarial
6. Mantenha Trabalhista marcado
7. Desmarque Ambiental

**Método 2: Usar "Desmarcar Todos"** (mais rápido) ✅:
1. Abra o dropdown
2. Clique em **[Desmarcar Todos]**
3. Marque apenas **Controle Cível**
4. Marque apenas **Controle Trabalhista**
5. Pronto!

**Resultado**: Método 2 é muito mais rápido e eficiente! 🚀

---
### 💡 Exemplos Práticos de Uso dos Filtros de Grupo

Aqui estão cenários reais de como usar os filtros de grupo no seu dia a dia:

#### **Exemplo 1: Ver Apenas Sua Área** 🎯

**Cenário**: Você é gestor da área Trabalhista e quer ver apenas as audiências da sua área.

**Objetivo**: Focar exclusivamente nas audiências que você gerencia.

**Passo a Passo**:
1. Abra o dashboard
2. Clique no filtro de grupos 👥
3. Clique em **[Desmarcar Todos]**
4. Marque apenas **☑ Controle Trabalhista**
5. Clique fora do menu para fechar (ou deixe aberto)

**Resultado**:
```
Botão do filtro: 👥 Controle Trabalhista

Painel de Métricas (apenas Trabalhista):
- Check-in Feito: 5
- A Confirmar: 2
- Não Realizados: 1
- Taxa de Confirmação: 62%

Lista de Processos:
- Mostra apenas 8 audiências da área Trabalhista
- Todas as outras áreas estão ocultas
```

**Benefícios**:
- ✅ Foco total na sua área
- ✅ Sem distrações de outras áreas
- ✅ Métricas específicas da sua responsabilidade
- ✅ Mais fácil de monitorar

**Dica**: Se você gerencia apenas uma área, configure este filtro logo ao abrir o dashboard e deixe assim durante todo o expediente.

---

#### **Exemplo 2: Ver Múltiplas Áreas** 🔀

**Cenário**: Você gerencia tanto a área Cível quanto a área Criminal e quer ver ambas ao mesmo tempo.

**Objetivo**: Monitorar duas áreas simultaneamente.

**Passo a Passo**:
1. Abra o dashboard
2. Clique no filtro de grupos 👥
3. Clique em **[Desmarcar Todos]**
4. Marque **☑ Controle Cível**
5. Marque **☑ Controle Criminal**
6. Clique fora do menu para fechar

**Resultado**:
```
Botão do filtro: 👥 Controle Cível e mais 1

Painel de Métricas (Cível + Criminal):
- Check-in Feito: 12
- A Confirmar: 4
- Não Realizados: 2
- Taxa de Confirmação: 67%

Lista de Processos:
- Mostra 18 audiências (Cível + Criminal)
- Audiências das duas áreas aparecem misturadas
- Ordenadas por horário
```

**Benefícios**:
- ✅ Visão consolidada de múltiplas áreas
- ✅ Útil se você gerencia mais de uma área
- ✅ Permite comparação entre áreas
- ✅ Métricas combinadas

**Dica**: Você pode selecionar quantos grupos quiser! Não há limite.

---

#### **Exemplo 3: Comparar Performance Entre Áreas** 📊

**Cenário**: Você quer comparar a taxa de confirmação da área Trabalhista com a área Cível.

**Objetivo**: Identificar qual área tem melhor performance.

**Passo a Passo**:

**Etapa 1: Analisar Área Trabalhista**
1. Abra o dashboard
2. Clique no filtro de grupos 👥
3. Clique em **[Desmarcar Todos]**
4. Marque apenas **☑ Controle Trabalhista**
5. Anote as métricas:
   ```
   Taxa de Confirmação: 75%
   Check-in Feito: 15
   Não Realizados: 5
   ```

**Etapa 2: Analisar Área Cível**
1. Clique no filtro de grupos 👥 (ainda aberto)
2. Desmarque **☐ Controle Trabalhista**
3. Marque **☑ Controle Cível**
4. Anote as métricas:
   ```
   Taxa de Confirmação: 85%
   Check-in Feito: 17
   Não Realizados: 3
   ```

**Etapa 3: Comparar**
```
COMPARAÇÃO DE PERFORMANCE

Área Trabalhista:
- Taxa: 75%
- Não Realizados: 5

Área Cível:
- Taxa: 85%
- Não Realizados: 3

Conclusão:
✅ Área Cível tem melhor performance (+10%)
🔴 Área Trabalhista precisa de atenção
💡 Investigar: Por que Trabalhista tem mais não realizados?
```

**Ações Recomendadas**:
- 📞 Conversar com gestores da área Trabalhista
- 🔍 Identificar advogados problemáticos
- 📝 Implementar ações de melhoria
- 📊 Monitorar evolução nas próximas semanas

---

#### **Exemplo 4: Análise Geral de Todas as Áreas** 🌐

**Cenário**: Você é o gestor geral e quer ter uma visão completa de todas as áreas do escritório.

**Objetivo**: Monitorar performance global.

**Passo a Passo**:
1. Abra o dashboard
2. Clique no filtro de grupos 👥
3. Clique em **[Marcar Todos]**
4. Analise as métricas consolidadas

**Resultado**:
```
Botão do filtro: 👥 Todos os Grupos

Painel de Métricas (Todas as Áreas):
- Check-in Feito: 45
- A Confirmar: 12
- Não Realizados: 8
- Taxa de Confirmação: 69%

Lista de Processos:
- Mostra todas as 65 audiências do dia
- Todas as 6 áreas incluídas
- Visão completa do escritório
```

**Análise**:
```
VISÃO GERAL DO ESCRITÓRIO

Total de Audiências: 65
Taxa de Confirmação: 69%

Status:
⚠️ Taxa abaixo da meta (80%)
🔴 8 audiências não realizadas
🟠 12 ainda aguardando confirmação

Ação Necessária:
- Identificar áreas problemáticas
- Filtrar por área para investigar
- Tomar ações corretivas
```

**Quando usar**:
- ✅ Reuniões gerais de gestão
- ✅ Relatórios consolidados
- ✅ Visão estratégica do escritório
- ✅ Identificação de problemas sistêmicos

---

#### **Exemplo 5: Monitorar Área Crítica** 🚨

**Cenário**: A área Criminal tem uma audiência muito importante hoje e você quer monitorar apenas essa área.

**Objetivo**: Foco total em uma área crítica.

**Passo a Passo**:
1. Abra o dashboard
2. Clique no filtro de grupos 👥
3. Clique em **[Desmarcar Todos]**
4. Marque apenas **☑ Controle Criminal**
5. Combine com filtro de data: **[Hoje]**
6. Deixe o dashboard aberto

**Resultado**:
```
Filtros Aplicados:
- Data: Hoje
- Grupo: Controle Criminal

Painel de Métricas (Criminal - Hoje):
- Check-in Feito: 3
- A Confirmar: 1 ⚠️ (audiência importante!)
- Não Realizados: 0
- Taxa de Confirmação: 75%

Lista de Processos:
- 4 audiências da área Criminal hoje
- 1 ainda não confirmada (a importante!)
- Horário: 15:00
```

**Ação Imediata**:
- 📞 Ligar para o advogado da audiência das 15:00
- ✅ Confirmar que ele vai comparecer
- 📝 Registrar confirmação
- 👀 Monitorar até a audiência acontecer

**Benefício**: Foco absoluto na área crítica, sem distrações.

---
#### **Exemplo 6: Preparar Relatório por Área** 📋

**Cenário**: Fim do mês. Você precisa preparar relatórios individuais para cada área.

**Objetivo**: Coletar métricas específicas de cada área para relatórios mensais.

**Passo a Passo**:

**Preparação**:
1. Abra o dashboard
2. Configure filtro de data: **[Este Mês]**
3. Prepare uma planilha ou documento para anotar

**Para cada área**:

**Área 1: Imobiliário/Agrário**
1. Filtro de grupos: Apenas **Controle Contencioso Imobiliário/Agrário**
2. Anote:
   ```
   Imobiliário/Agrário - Janeiro 2024
   - Total de audiências: 25
   - Check-ins feitos: 20
   - Não realizados: 3
   - Taxa: 80%
   ```

**Área 2: Cível**
1. Filtro de grupos: Apenas **Controle Cível**
2. Anote:
   ```
   Cível - Janeiro 2024
   - Total de audiências: 45
   - Check-ins feitos: 38
   - Não realizados: 5
   - Taxa: 84%
   ```

**Área 3: Criminal**
1. Filtro de grupos: Apenas **Controle Criminal**
2. Anote:
   ```
   Criminal - Janeiro 2024
   - Total de audiências: 18
   - Check-ins feitos: 14
   - Não realizados: 3
   - Taxa: 78%
   ```

**Área 4: Tributário e Empresarial**
1. Filtro de grupos: Apenas **Controle Tributário e Empresarial**
2. Anote:
   ```
   Tributário/Empresarial - Janeiro 2024
   - Total de audiências: 32
   - Check-ins feitos: 28
   - Não realizados: 2
   - Taxa: 88% ✅ (melhor!)
   ```

**Área 5: Trabalhista**
1. Filtro de grupos: Apenas **Controle Trabalhista**
2. Anote:
   ```
   Trabalhista - Janeiro 2024
   - Total de audiências: 52
   - Check-ins feitos: 39
   - Não realizados: 9
   - Taxa: 75% ⚠️ (pior)
   ```

**Área 6: Ambiental**
1. Filtro de grupos: Apenas **Controle Contencioso Ambiental**
2. Anote:
   ```
   Ambiental - Janeiro 2024
   - Total de audiências: 12
   - Check-ins feitos: 10
   - Não realizados: 1
   - Taxa: 83%
   ```

**Consolidação**:
```
RELATÓRIO MENSAL POR ÁREA - JANEIRO 2024

┌──────────────────────┬───────┬──────┬──────────┬──────┐
│ Área                 │ Total │ Feito│ Não Fez  │ Taxa │
├──────────────────────┼───────┼──────┼──────────┼──────┤
│ Imobiliário/Agrário  │  25   │  20  │    3     │ 80%  │
│ Cível                │  45   │  38  │    5     │ 84%  │
│ Criminal             │  18   │  14  │    3     │ 78%  │
│ Tributário/Empresar. │  32   │  28  │    2     │ 88%✅│
│ Trabalhista          │  52   │  39  │    9     │ 75%⚠️│
│ Ambiental            │  12   │  10  │    1     │ 83%  │
├──────────────────────┼───────┼──────┼──────────┼──────┤
│ TOTAL GERAL          │ 184   │ 149  │   23     │ 81%  │
└──────────────────────┴───────┴──────┴──────────┴──────┘

Destaques:
✅ Melhor área: Tributário/Empresarial (88%)
⚠️ Área que precisa atenção: Trabalhista (75%)
📊 Meta geral atingida: 81% (meta: 80%)

Recomendações:
1. Parabenizar equipe Tributário/Empresarial
2. Investigar problemas na área Trabalhista
3. Implementar melhorias na área Criminal (78%)
```

**Benefício**: Relatórios detalhados por área em poucos minutos! 🚀

---

### 🔗 Como os Filtros de Grupo e Data Trabalham Juntos

Os filtros de **Grupo** e **Data** são **independentes** mas trabalham **em conjunto** para refinar sua visualização.

#### **Princípio Fundamental**

O dashboard mostra apenas audiências que atendem **AMBOS** os critérios:
- ✅ Está no **período de data** selecionado **E**
- ✅ Pertence a um dos **grupos** selecionados

**Fórmula**:
```
Audiências Exibidas = (Filtro de Data) ∩ (Filtro de Grupos)
```

#### **Exemplo de Combinação 1**

**Filtros**:
- Data: **[Hoje]** (16/01/2024)
- Grupos: **Controle Trabalhista**

**Resultado**: Apenas audiências de **hoje** (16/01) da área **Trabalhista**

```
Total de audiências no sistema: 200
Audiências de hoje: 50
Audiências da área Trabalhista: 80
Audiências de hoje E da área Trabalhista: 8 ✅

Dashboard mostra: 8 audiências
```

---

#### **Exemplo de Combinação 2**

**Filtros**:
- Data: **[Esta Semana]** (14/01 a 20/01)
- Grupos: **Controle Cível** + **Controle Criminal**

**Resultado**: Audiências desta semana das áreas Cível e Criminal

```
Total de audiências no sistema: 200
Audiências desta semana: 85
Audiências de Cível: 60
Audiências de Criminal: 30
Audiências desta semana E (Cível OU Criminal): 35 ✅

Dashboard mostra: 35 audiências
```

---

#### **Exemplo de Combinação 3**

**Filtros**:
- Data: **[Este Mês]** (01/01 a 31/01)
- Grupos: **Todos os Grupos**

**Resultado**: Todas as audiências do mês de todas as áreas

```
Total de audiências no sistema: 200
Audiências deste mês: 184
Audiências de todos os grupos: 200
Audiências deste mês E de todos os grupos: 184 ✅

Dashboard mostra: 184 audiências
```

---

### 🎯 Estratégias de Filtragem

#### **Estratégia 1: Funil Progressivo** 🔽

Comece amplo e vá refinando:

1. **Passo 1**: Marque todos os grupos
   - Veja visão geral

2. **Passo 2**: Filtre por data (ex: Hoje)
   - Reduza para período relevante

3. **Passo 3**: Selecione apenas sua área
   - Foco total

**Exemplo**:
```
Início: 200 audiências (todas)
↓ Filtro de data (Hoje)
50 audiências
↓ Filtro de grupo (Trabalhista)
8 audiências ✅ (foco final)
```

---

#### **Estratégia 2: Foco Imediato** 🎯

Vá direto ao ponto:

1. **Passo 1**: Desmarque todos os grupos
2. **Passo 2**: Marque apenas sua área
3. **Passo 3**: Selecione período (Hoje)

**Exemplo**:
```
Início: 200 audiências
↓ Desmarcar todos
0 audiências
↓ Marcar Trabalhista
80 audiências
↓ Filtro Hoje
8 audiências ✅ (foco imediato)
```

---

#### **Estratégia 3: Comparação Rápida** ⚖️

Compare áreas rapidamente:

1. **Passo 1**: Configure data (ex: Esta Semana)
2. **Passo 2**: Alterne entre grupos
   - Veja Cível
   - Veja Trabalhista
   - Veja Criminal
3. **Passo 3**: Compare métricas

**Benefício**: Identificação rápida de áreas problemáticas

---
### 💡 Dicas Avançadas de Uso dos Filtros de Grupo

#### **Dica 1: Crie Sua Configuração Padrão** ⭐

Estabeleça uma configuração padrão para seu dia a dia:

**Se você gerencia UMA área**:
```
Configuração Padrão:
- Data: [Hoje]
- Grupo: [Sua Área]

Exemplo:
- Data: [Hoje]
- Grupo: [Controle Trabalhista]
```

**Benefício**: Sempre que abrir o dashboard, configure assim primeiro.

---

**Se você gerencia MÚLTIPLAS áreas**:
```
Configuração Padrão:
- Data: [Hoje]
- Grupos: [Suas Áreas]

Exemplo:
- Data: [Hoje]
- Grupos: [Controle Cível] + [Controle Criminal]
```

**Benefício**: Foco nas suas responsabilidades, sem distrações.

---

**Se você é GESTOR GERAL**:
```
Configuração Padrão:
- Data: [Hoje]
- Grupos: [Todos os Grupos]
```

**Benefício**: Visão completa do escritório.

---

#### **Dica 2: Use Filtros para Identificar Padrões** 🔍

**Padrão 1: Área Problemática**

Teste cada área individualmente:
```
Área Cível: Taxa 85% ✅
Área Criminal: Taxa 82% ✅
Área Trabalhista: Taxa 65% ⚠️ (problema!)
```

**Ação**: Foque na área Trabalhista para investigar.

---

**Padrão 2: Dia da Semana**

Combine filtro de grupo com datas específicas:
```
Segundas-feiras: Taxa 70%
Terças-feiras: Taxa 80%
Quartas-feiras: Taxa 85%
```

**Insight**: Segundas-feiras têm performance pior (volta do fim de semana).

---

**Padrão 3: Advogado Específico**

Filtre por área e analise a lista:
```
Área Trabalhista:
- João Silva: 5 audiências, 5 confirmadas ✅
- Maria Santos: 8 audiências, 4 confirmadas ⚠️
- Pedro Costa: 3 audiências, 3 confirmadas ✅
```

**Insight**: Maria Santos precisa de atenção.

---

#### **Dica 3: Combine com Anotações** 📝

Mantenha um caderno ou planilha com suas observações:

**Exemplo de Anotação Diária**:
```
16/01/2024 - Terça-feira

Área Trabalhista (minha área):
- 8 audiências hoje
- 6 confirmadas ✅
- 1 não confirmada 🔴 (Processo 1234567 - João Silva)
- 1 pendente 🟠 (Processo 7654321 - Maria Santos)

Ações tomadas:
- 10:30 - Liguei para João Silva (não atendeu)
- 11:00 - Liguei novamente (confirmou por telefone)
- 14:00 - Maria Santos confirmou via sistema

Resultado final:
- 8 audiências, 8 confirmadas ✅
- Taxa: 100% 🎉
```

**Benefício**: Histórico de ações e resultados.

---

#### **Dica 4: Use Filtros para Treinamento** 👨‍🏫

Se você está treinando um novo gestor:

**Passo 1: Mostre a Visão Geral**
```
Filtros: [Todos os Grupos] + [Hoje]
Explicação: "Veja, temos 50 audiências hoje em todas as áreas"
```

**Passo 2: Mostre Cada Área**
```
Filtros: [Controle Cível] + [Hoje]
Explicação: "A área Cível tem 12 audiências hoje"

Filtros: [Controle Trabalhista] + [Hoje]
Explicação: "A área Trabalhista tem 8 audiências hoje"
```

**Passo 3: Mostre Como Focar**
```
Filtros: [Área do Trainee] + [Hoje]
Explicação: "Esta é a sua área. Foque aqui."
```

**Benefício**: Treinamento visual e prático.

---

#### **Dica 5: Monitore Áreas Críticas** 🚨

Se uma área está com problemas, monitore-a de perto:

**Semana 1: Identificação**
```
Filtros: [Controle Trabalhista] + [Esta Semana]
Resultado: Taxa 65% ⚠️ (abaixo da meta)
```

**Semana 2: Monitoramento Intensivo**
```
Filtros: [Controle Trabalhista] + [Hoje]
Ação: Monitorar TODOS OS DIAS
Objetivo: Identificar causas
```

**Semana 3: Implementação de Melhorias**
```
Filtros: [Controle Trabalhista] + [Esta Semana]
Resultado: Taxa 72% (melhorou +7%)
```

**Semana 4: Verificação**
```
Filtros: [Controle Trabalhista] + [Esta Semana]
Resultado: Taxa 78% (melhorou +13%)
Conclusão: Melhorias funcionaram! ✅
```

---

#### **Dica 6: Use Filtros para Reuniões** 👥

**Reunião Individual com Gestor de Área**:
```
Preparação:
- Filtro: [Área do Gestor] + [Esta Semana]
- Imprima ou compartilhe tela
- Discuta métricas específicas
```

**Reunião Geral de Gestão**:
```
Preparação:
- Filtro: [Todos os Grupos] + [Este Mês]
- Prepare slides com métricas de cada área
- Compare performance entre áreas
```

**Benefício**: Reuniões baseadas em dados reais.

---

### ⚠️ Problemas Comuns e Soluções

#### **Problema 1: "Não vejo nenhuma audiência"**

**Possíveis causas**:
1. Nenhum grupo está selecionado
2. Período de data não tem audiências
3. Combinação de filtros muito restritiva

**Soluções**:
1. ✅ Clique em **[Marcar Todos]** no filtro de grupos
2. ✅ Mude para **[Hoje]** ou **[Esta Semana]** no filtro de data
3. ✅ Verifique se há audiências no período selecionado

**Como verificar**:
```
Passo 1: Marque todos os grupos
Passo 2: Selecione "Este Mês"
Passo 3: Se ainda não aparecer nada, não há audiências cadastradas
```

---

#### **Problema 2: "Não sei qual grupo selecionar"**

**Sintoma**: Você não sabe a qual grupo uma audiência pertence.

**Solução**:
1. ✅ Marque **[Todos os Grupos]**
2. ✅ Procure a audiência na lista
3. ✅ Veja o nome do advogado
4. ✅ Consulte a lista de advogados por área (com RH ou TI)

**Alternativa**: Pergunte ao advogado ou ao gestor da área.

---

#### **Problema 3: "Filtro não está salvando"**

**Sintoma**: Você configura os filtros, fecha o navegador, e quando volta os filtros estão resetados.

**Causa**: Filtros não são salvos entre sessões (por design).

**Solução**:
1. ✅ Configure os filtros toda vez que abrir o dashboard
2. ✅ Use a "Configuração Padrão" (Dica 1)
3. ✅ Futuro: Sistema salvará preferências automaticamente

**Workaround**: Deixe o dashboard aberto em uma aba durante todo o expediente.

---

#### **Problema 4: "Grupos consolidados confusos"**

**Sintoma**: Você procura "Controle Cível - PF" mas só vê "Controle Cível".

**Causa**: Sistema consolida automaticamente subgrupos.

**Explicação**:
```
Grupos no banco de dados:
- Controle Cível
- Controle Cível - PF
- Controle Cível Select

Grupo no dashboard:
- Controle Cível (inclui todos os acima)
```

**Solução**: ✅ Marque "Controle Cível" para ver todos os subgrupos.

**Benefício**: Simplifica a interface, menos opções para escolher.

---

#### **Problema 5: "Métricas não batem"**

**Sintoma**: Você soma as métricas de cada área individualmente e o total não bate com "Todos os Grupos".

**Exemplo**:
```
Cível: 10 audiências
Trabalhista: 8 audiências
Criminal: 5 audiências
Soma: 23 audiências

Todos os Grupos: 25 audiências ❓
```

**Causa**: Há audiências de outras áreas que você não somou (Imobiliário, Tributário, Ambiental).

**Solução**:
1. ✅ Verifique TODAS as 6 áreas
2. ✅ Some novamente
3. ✅ O total deve bater

**Verificação**:
```
Imobiliário: 3 audiências
Cível: 10 audiências
Criminal: 5 audiências
Tributário: 4 audiências
Trabalhista: 8 audiências
Ambiental: 2 audiências
─────────────────────────
TOTAL: 32 audiências ✅
```

---

### 📋 Checklist de Domínio dos Filtros de Grupo

Use este checklist para garantir que você domina os filtros de grupo:

**Conhecimento Básico**:
- [ ] Sei onde fica o botão de filtro de grupos (👥)
- [ ] Sei abrir o menu dropdown
- [ ] Conheço os 6 grupos disponíveis
- [ ] Sei o que cada grupo representa

**Operações Básicas**:
- [ ] Sei marcar um grupo individual
- [ ] Sei desmarcar um grupo individual
- [ ] Sei usar o botão "Marcar Todos"
- [ ] Sei usar o botão "Desmarcar Todos"

**Uso Prático**:
- [ ] Sei filtrar apenas minha área
- [ ] Sei filtrar múltiplas áreas
- [ ] Sei combinar filtro de grupo com filtro de data
- [ ] Entendo como os filtros afetam as métricas

**Uso Avançado**:
- [ ] Sei comparar performance entre áreas
- [ ] Sei usar filtros para análises específicas
- [ ] Sei identificar padrões usando filtros
- [ ] Criei minha configuração padrão

**Resolução de Problemas**:
- [ ] Sei o que fazer quando não vejo audiências
- [ ] Entendo por que grupos são consolidados
- [ ] Sei verificar se métricas estão corretas

---

### 🎯 Próximos Passos

Agora que você domina completamente os **filtros de grupo/área**, vamos para a próxima seção onde você vai aprender como **interpretar as métricas** do dashboard em detalhes!

**Prévia da Próxima Seção**:
- 📊 Como cada métrica é calculada
- 📊 O que cada número significa
- 📊 Como usar métricas para tomar decisões
- 📊 Exemplos de análise de métricas

---
## 7. Como Interpretar as Métricas

### 📊 Visão Geral das Métricas

As **métricas** são os números que você vê nos **4 cards coloridos** no topo do dashboard. Elas fornecem um **resumo instantâneo** da situação atual das audiências, permitindo que você avalie rapidamente a performance do processo de check-in.

**Por que as métricas são importantes?**
- 📈 **Visão rápida**: Entenda a situação em segundos
- 🎯 **Tomada de decisão**: Identifique onde focar sua atenção
- 📊 **Análise de performance**: Avalie a efetividade do processo
- 🚨 **Identificação de problemas**: Detecte situações críticas rapidamente

**As 4 Métricas Principais**:
1. 🟢 **Check-in Feito** - Quantos advogados confirmaram presença
2. 🟠 **Check-in A Confirmar** - Quantos ainda não responderam
3. 🔴 **Check-ins Não Realizados** - Quantos não confirmaram
4. 🔵 **Taxa de Confirmação** - Percentual de sucesso

💡 **Dica**: Aprenda a ler as métricas de relance. Com prática, você identificará problemas instantaneamente apenas olhando as cores e números!

---

### 🟢 Métrica 1: Check-in Feito (Verde)

#### **O que Mostra**

Esta métrica exibe o **número total de audiências** cujos advogados **confirmaram presença** através do check-in.

**Exemplo Visual**:
```
┌─────────────────────────┐
│  ✅                     │
│  Check-in Feito         │
│  8                      │
└─────────────────────────┘
```

**Interpretação**: 8 advogados confirmaram que vão comparecer às suas audiências.

---

#### **Como é Calculado**

O sistema conta **todas as audiências** que têm status de check-in igual a:
- ✅ **"Confirmado"**
- ✅ **"Feito"**
- ✅ **"Realizado"**

**Fórmula**:
```
Check-in Feito = Número de audiências com status "Confirmado/Feito/Realizado"
```

**Exemplo de Cálculo**:

Imagine que você tem as seguintes audiências hoje:

| Processo | Advogado | Status Check-in |
|----------|----------|-----------------|
| 1234567 | João Silva | ✅ Confirmado |
| 2345678 | Maria Santos | ✅ Feito |
| 3456789 | Pedro Costa | 🟠 A Confirmar |
| 4567890 | Ana Lima | ✅ Realizado |
| 5678901 | Carlos Souza | 🔴 Não Realizado |
| 6789012 | Julia Oliveira | ✅ Confirmado |
| 7890123 | Roberto Alves | 🟠 A Confirmar |
| 8901234 | Fernanda Dias | ✅ Feito |

**Cálculo**:
- Audiências com status "Confirmado": 2 (João, Julia)
- Audiências com status "Feito": 2 (Maria, Fernanda)
- Audiências com status "Realizado": 1 (Ana)
- **Total de Check-ins Feitos**: 2 + 2 + 1 = **5**

**Resultado no Dashboard**:
```
┌─────────────────────────┐
│  ✅                     │
│  Check-in Feito         │
│  5                      │
└─────────────────────────┘
```

---

#### **O que Significa**

**Significado Geral**: Esses advogados **confirmaram que vão comparecer** às suas audiências. Eles receberam a mensagem de check-in (30 minutos antes) e responderam "1" (confirmo).

**Interpretação Positiva**:
- ✅ Advogados estão atentos às mensagens
- ✅ Processo de check-in está funcionando
- ✅ Audiências têm alta probabilidade de acontecer
- ✅ Menos risco de ausências inesperadas

**O que NÃO significa**:
- ❌ Não garante que o advogado vai comparecer (pode ter imprevisto)
- ❌ Não significa que a audiência já aconteceu
- ❌ Não indica a qualidade da participação

---
#### **Interpretação dos Valores**

| Valor | Interpretação | O que Fazer |
|-------|---------------|-------------|
| **Alto** (próximo ao total) | 🎉 **Excelente!** Maioria confirmou | ✅ Continue monitorando |
| **Médio** (50-70% do total) | ⚠️ **Atenção!** Muitos pendentes | 📞 Acompanhe os pendentes |
| **Baixo** (menos de 50%) | 🚨 **Crítico!** Poucos confirmaram | 🆘 Ação urgente necessária |
| **Zero** | 🔴 **Problema grave!** Ninguém confirmou | 🚨 Verifique o sistema |

**Exemplos Práticos**:

**Cenário 1: Situação Ideal** ✅
```
Total de audiências: 10
Check-in Feito: 9
Interpretação: 90% confirmaram - Excelente!
```

**Cenário 2: Situação de Atenção** ⚠️
```
Total de audiências: 10
Check-in Feito: 5
Interpretação: 50% confirmaram - Precisa melhorar
```

**Cenário 3: Situação Crítica** 🚨
```
Total de audiências: 10
Check-in Feito: 2
Interpretação: 20% confirmaram - Problema sério!
```

---

#### **Como Usar Esta Métrica**

**No Início do Dia** ☀️:
1. Veja quantos check-ins já foram feitos
2. Compare com o total de audiências do dia
3. Identifique se há problemas gerais

**Durante o Dia** 🕐:
1. Monitore o número aumentando conforme advogados respondem
2. Se o número não aumenta, investigue
3. Foque nos que ainda não confirmaram

**No Fim do Dia** 🌙:
1. Analise o total final
2. Compare com dias anteriores
3. Identifique tendências (melhorando ou piorando?)

**Para Análises** 📊:
1. Compare entre diferentes áreas (use filtro de grupos)
2. Compare entre diferentes períodos (use filtro de data)
3. Identifique áreas ou advogados com baixa confirmação

---
### 🟠 Métrica 2: Check-in A Confirmar (Laranja)

#### **O que Mostra**

Esta métrica exibe o **número total de audiências** cujas mensagens de check-in foram enviadas mas os advogados **ainda não responderam**.

**Exemplo Visual**:
```
┌─────────────────────────┐
│  🕐                     │
│  Check-in A Confirmar   │
│  3                      │
└─────────────────────────┘
```

**Interpretação**: 3 advogados receberam a mensagem mas ainda não confirmaram presença.

---

#### **Como é Calculado**

O sistema conta **todas as audiências** que têm status de check-in igual a:
- 🟠 **"A Confirmar"**
- 🟠 **"Enviado"**

**Fórmula**:
```
Check-in A Confirmar = Número de audiências com status "A Confirmar/Enviado"
```

**Exemplo de Cálculo**:

Usando o mesmo exemplo anterior:

| Processo | Advogado | Status Check-in |
|----------|----------|-----------------|
| 1234567 | João Silva | ✅ Confirmado |
| 2345678 | Maria Santos | ✅ Feito |
| 3456789 | Pedro Costa | 🟠 A Confirmar |
| 4567890 | Ana Lima | ✅ Realizado |
| 5678901 | Carlos Souza | 🔴 Não Realizado |
| 6789012 | Julia Oliveira | ✅ Confirmado |
| 7890123 | Roberto Alves | 🟠 A Confirmar |
| 8901234 | Fernanda Dias | ✅ Feito |

**Cálculo**:
- Audiências com status "A Confirmar": 2 (Pedro, Roberto)
- **Total de Check-ins A Confirmar**: **2**

**Resultado no Dashboard**:
```
┌─────────────────────────┐
│  🕐                     │
│  Check-in A Confirmar   │
│  2                      │
└─────────────────────────┘
```

---
#### **O que Significa**

**Significado Geral**: Esses advogados **receberam a mensagem** de check-in mas **ainda não responderam**. Eles podem estar:
- 📱 Ocupados e vão responder em breve
- 👀 Não viram a mensagem ainda
- 🤔 Esqueceram de responder
- ⚠️ Tendo problemas técnicos

**Interpretação**:
- 🟡 **Situação de espera**: Normal ter alguns pendentes
- ⚠️ **Requer atenção**: Se o número for alto ou se faltar pouco tempo
- 🚨 **Urgente**: Se faltam menos de 15 minutos para a audiência

**O que NÃO significa**:
- ❌ Não significa que o advogado não vai comparecer
- ❌ Não significa que há problema (ainda)
- ❌ Não significa que você deve agir imediatamente (depende do tempo)

---

#### **Interpretação dos Valores**

| Valor | Interpretação | O que Fazer |
|-------|---------------|-------------|
| **Zero** | 🎉 **Perfeito!** Todos responderam | ✅ Continue monitorando |
| **Baixo** (1-2) | ✅ **Normal** - Poucos pendentes | ⏰ Aguarde, monitore |
| **Médio** (3-5) | ⚠️ **Atenção** - Vários pendentes | 📞 Prepare-se para contatar |
| **Alto** (6+) | 🚨 **Crítico** - Muitos pendentes | 🆘 Ação necessária |

**Importante**: A interpretação depende também do **tempo restante** até as audiências!

**Exemplos Contextualizados**:

**Cenário 1: Manhã Cedo (Audiências à Tarde)** ✅
```
Hora atual: 09:00
Audiências: 14:00 - 16:00
Check-in A Confirmar: 5
Interpretação: Normal - Ainda há tempo
Ação: Aguardar, monitorar
```

**Cenário 2: Próximo da Audiência** ⚠️
```
Hora atual: 13:50
Audiências: 14:00 - 14:30
Check-in A Confirmar: 3
Interpretação: Urgente - Faltam 10 minutos!
Ação: Ligar imediatamente
```

#### **Como Usar Esta Métrica**

**Regra de Ouro**: ⏰ **Tempo é tudo!**

**Mais de 30 minutos antes das audiências**:
- ✅ Situação normal
- ✅ Aguarde - advogados vão responder
- ✅ Monitore o dashboard (atualiza a cada 2 minutos)

**Entre 30 e 15 minutos antes**:
- ⚠️ Comece a prestar atenção
- 📋 Identifique quais audiências estão pendentes
- 🎯 Prepare-se para agir se necessário

**Menos de 15 minutos antes**:
- 🚨 Ação urgente!
- 📞 Entre em contato com os advogados imediatamente
- 🆘 Você receberá alerta do sistema

**Dica Prática**: 💡
```
Se "Check-in A Confirmar" > 0 e faltam menos de 15 minutos:
→ Abra a lista de processos
→ Identifique quais estão "A Confirmar"
→ Ligue para esses advogados
```

---

### 🔴 Métrica 3: Check-ins Não Realizados (Vermelho)

#### **O que Mostra**

Esta métrica exibe o **número total de audiências** cujos advogados **não confirmaram presença** ou **informaram que não vão comparecer**.

**Exemplo Visual**:
```
┌─────────────────────────┐
│  ⚠️                     │
│  Check-ins Não Realizados│
│  2                      │
└─────────────────────────┘
```

**Interpretação**: 2 advogados não confirmaram presença ou disseram que não vão comparecer.

---

#### **Como é Calculado**

O sistema conta **todas as audiências** que têm status de check-in igual a:
- 🔴 **"Não Realizado"**
- 🔴 **"Atrasado"**
- 🔴 **"Negativa"**
- 🔴 **"Cancelado"**

**Fórmula**:
```
Check-ins Não Realizados = Número de audiências com status "Não Realizado/Atrasado/Negativa/Cancelado"
```

**Exemplo de Cálculo**:

Usando o mesmo exemplo:

| Processo | Advogado | Status Check-in |
|----------|----------|-----------------|
| 1234567 | João Silva | ✅ Confirmado |
| 2345678 | Maria Santos | ✅ Feito |
| 3456789 | Pedro Costa | 🟠 A Confirmar |
| 4567890 | Ana Lima | ✅ Realizado |
| 5678901 | Carlos Souza | 🔴 Não Realizado |
| 6789012 | Julia Oliveira | ✅ Confirmado |
| 7890123 | Roberto Alves | 🟠 A Confirmar |
| 8901234 | Fernanda Dias | ✅ Feito |

**Cálculo**:
- Audiências com status "Não Realizado": 1 (Carlos)
- **Total de Check-ins Não Realizados**: **1**

**Resultado no Dashboard**:
```
┌─────────────────────────┐
│  ⚠️                     │
│  Check-ins Não Realizados│
│  1                      │
└─────────────────────────┘
```

---

#### **O que Significa**

**Significado Geral**: Esses advogados **não confirmaram presença**. Isso pode acontecer por dois motivos:

**Motivo 1: Não Respondeu** 🔴
- Advogado recebeu a mensagem mas não respondeu
- Horário da audiência chegou sem resposta
- Sistema marcou como "Não Realizado"

**Motivo 2: Informou que Não Vai** 🔴
- Advogado respondeu "2" (não vou comparecer)
- Sistema marcou como "Negativa" ou "Cancelado"
- Supervisor foi notificado automaticamente

**Interpretação**:
- 🚨 **Situação crítica**: Requer ação imediata
- ⚠️ **Risco alto**: Audiência pode não acontecer
- 📞 **Contato urgente**: Necessário verificar o que aconteceu
- 🔄 **Providências**: Pode precisar reagendar ou enviar substituto

**O que NÃO significa**:
- ❌ Não significa necessariamente que o advogado faltou (pode ter comparecido sem responder)
- ❌ Não significa que a audiência foi cancelada (verificar no DataJuri)
- ❌ Não significa que é culpa do advogado (pode ter havido problema técnico)

---
#### **Interpretação dos Valores**

| Valor | Interpretação | O que Fazer |
|-------|---------------|-------------|
| **Zero** | 🎉 **Perfeito!** Nenhum problema | ✅ Continue monitorando |
| **1-2** | ⚠️ **Atenção** - Poucos problemas | 🔍 Investigar cada caso |
| **3-5** | 🚨 **Crítico** - Vários problemas | 🆘 Ação urgente em todos |
| **6+** | 🔴 **Grave** - Problema sistêmico | 🚨 Escalar para gestão |

**Meta Ideal**: 🎯 **Zero** check-ins não realizados!

**Exemplos Práticos**:

**Cenário 1: Situação Ideal** ✅
```
Total de audiências: 10
Check-ins Não Realizados: 0
Interpretação: Perfeito! Todos confirmaram ou estão pendentes
```

**Cenário 2: Situação de Atenção** ⚠️
```
Total de audiências: 10
Check-ins Não Realizados: 2
Interpretação: 20% não confirmaram - Investigar
```

**Cenário 3: Situação Crítica** 🚨
```
Total de audiências: 10
Check-ins Não Realizados: 5
Interpretação: 50% não confirmaram - Problema grave!
```

---

#### **Como Usar Esta Métrica**

**Prioridade Máxima**: 🚨 Esta é a métrica mais crítica!

**Quando Ver Número > 0**:
1. 🔴 **Pare tudo** - Esta é sua prioridade
2. 📋 **Abra a lista** - Identifique quais audiências
3. 📞 **Entre em contato** - Ligue para cada advogado
4. 🔍 **Investigue** - Descubra o que aconteceu
5. 🔄 **Tome providências** - Reagende, envie substituto, etc.
6. 📝 **Documente** - Registre tudo

**Análise de Padrões**:
- 📊 Se sempre os mesmos advogados: Problema de comportamento
- 📊 Se sempre a mesma área: Problema de processo
- 📊 Se sempre no mesmo horário: Problema de timing
- 📊 Se aumentando ao longo do tempo: Problema sistêmico

**Ações Preventivas**:
- 📞 Entre em contato preventivo com advogados problemáticos
- 📋 Crie lista de advogados que precisam de atenção especial
- 🔔 Configure alertas personalizados (futuro)
- 📊 Analise causas raiz e proponha melhorias

---
### 🔵 Métrica 4: Taxa de Confirmação (Azul)

#### **O que Mostra**

Esta métrica exibe o **percentual de audiências** cujos advogados **confirmaram presença** em relação ao **total de audiências**.

**Exemplo Visual**:
```
┌─────────────────────────┐
│  📊                     │
│  Taxa de Confirmação    │
│  80%                    │
└─────────────────────────┘
```

**Interpretação**: 80% das audiências tiveram check-in confirmado.

---

#### **Como é Calculado**

A Taxa de Confirmação é calculada dividindo o número de check-ins feitos pelo total de audiências e multiplicando por 100 para obter a porcentagem.

**Fórmula**:
```
Taxa de Confirmação = (Check-ins Feitos ÷ Total de Audiências) × 100
```

**Onde**:
- **Check-ins Feitos**: Número de audiências com status "Confirmado/Feito/Realizado"
- **Total de Audiências**: Soma de todas as audiências (Feitos + A Confirmar + Não Realizados)

**Nota Importante**: ⚪ Audiências com status "Nulo" (mensagem ainda não enviada) **NÃO** são contadas no total.

---

#### **Exemplo de Cálculo Detalhado**

Vamos usar um exemplo completo:

| Processo | Advogado | Status Check-in |
|----------|----------|-----------------|
| 1234567 | João Silva | ✅ Confirmado |
| 2345678 | Maria Santos | ✅ Feito |
| 3456789 | Pedro Costa | 🟠 A Confirmar |
| 4567890 | Ana Lima | ✅ Realizado |
| 5678901 | Carlos Souza | 🔴 Não Realizado |
| 6789012 | Julia Oliveira | ✅ Confirmado |
| 7890123 | Roberto Alves | 🟠 A Confirmar |
| 8901234 | Fernanda Dias | ✅ Feito |
| 9012345 | Lucas Martins | ⚪ Nulo |
| 0123456 | Patricia Rocha | ⚪ Nulo |

**Passo 1: Contar Check-ins Feitos**
- ✅ Confirmado: 2 (João, Julia)
- ✅ Feito: 2 (Maria, Fernanda)
- ✅ Realizado: 1 (Ana)
- **Total Check-ins Feitos**: 5

**Passo 2: Contar Total de Audiências**
- ✅ Check-ins Feitos: 5
- 🟠 A Confirmar: 2 (Pedro, Roberto)
- 🔴 Não Realizados: 1 (Carlos)
- ⚪ Nulos: 2 (Lucas, Patricia) - **NÃO CONTAM**
- **Total de Audiências**: 5 + 2 + 1 = 8

**Passo 3: Calcular a Taxa**
```
Taxa = (5 ÷ 8) × 100
Taxa = 0,625 × 100
Taxa = 62,5%
```

**Resultado no Dashboard**:
```
┌─────────────────────────┐
│  📊                     │
│  Taxa de Confirmação    │
│  62.5%                  │
└─────────────────────────┘
```

**Exemplo Numérico Simples**:

**Situação 1**:
- Check-ins Feitos: 8
- Total de Audiências: 10
- Taxa = (8 ÷ 10) × 100 = **80%**

**Situação 2**:
- Check-ins Feitos: 6
- Total de Audiências: 10
- Taxa = (6 ÷ 10) × 100 = **60%**

**Situação 3**:
- Check-ins Feitos: 10
- Total de Audiências: 10
- Taxa = (10 ÷ 10) × 100 = **100%** 🎉

---

#### **O que Significa**

**Significado Geral**: A Taxa de Confirmação é um **indicador de efetividade** do processo de check-in. Ela mostra qual porcentagem das audiências teve confirmação de presença.

**Interpretação por Faixa**:

| Taxa | Classificação | Significado | Ação |
|------|---------------|-------------|------|
| **90-100%** | 🟢 **Excelente** | Processo funcionando perfeitamente | ✅ Manter o padrão |
| **80-89%** | 🟢 **Muito Bom** | Processo funcionando bem | ✅ Pequenos ajustes |
| **70-79%** | 🟡 **Bom** | Processo aceitável, mas pode melhorar | ⚠️ Investigar causas |
| **60-69%** | 🟠 **Regular** | Processo com problemas | 🔍 Ação necessária |
| **50-59%** | 🔴 **Ruim** | Processo com problemas sérios | 🚨 Intervenção urgente |
| **Abaixo de 50%** | 🔴 **Crítico** | Processo falho | 🆘 Revisão completa |

**Meta Recomendada**: 🎯 **80% ou mais**

---

#### **Interpretação Contextual**

A interpretação da taxa também depende do **momento do dia**:

**Manhã Cedo** (8h-10h):
```
Taxa: 40%
Interpretação: ⏰ Normal - Muitas audiências ainda não tiveram check-in enviado
Ação: Aguardar
```

**Meio do Dia** (12h-14h):
```
Taxa: 40%
Interpretação: ⚠️ Baixa - Deveria estar mais alta
Ação: Investigar
```

**Fim do Dia** (17h-18h):
```
Taxa: 40%
Interpretação: 🚨 Crítica - Dia com muitos problemas
Ação: Análise completa necessária
```

---
#### **Como Usar Esta Métrica**

**Como Indicador de Saúde do Processo**:

A Taxa de Confirmação é o **termômetro** do seu processo de check-in. Use-a para:

1. **Avaliação Diária** 📅
   - Compare a taxa de hoje com dias anteriores
   - Identifique se está melhorando ou piorando
   - Estabeleça metas diárias (ex: manter acima de 80%)

2. **Comparação entre Áreas** 👥
   - Use filtro de grupos para ver taxa de cada área
   - Identifique áreas com melhor/pior performance
   - Compartilhe boas práticas das áreas com alta taxa

3. **Análise de Tendências** 📊
   - Monitore a taxa ao longo da semana/mês
   - Identifique padrões (ex: segundas-feiras têm taxa mais baixa?)
   - Tome ações preventivas baseadas em tendências

4. **Definição de Metas** 🎯
   - Estabeleça meta mínima (ex: 80%)
   - Crie plano de ação quando ficar abaixo da meta
   - Celebre quando atingir 90%+ consistentemente

**Exemplos de Análise**:

**Análise Semanal**:
```
Segunda: 75%
Terça: 82%
Quarta: 85%
Quinta: 88%
Sexta: 80%

Média Semanal: 82%
Interpretação: ✅ Boa semana! Acima da meta de 80%
Observação: Segundas têm taxa mais baixa - investigar
```

**Comparação entre Áreas**:
```
Cível: 90%
Trabalhista: 85%
Criminal: 70%
Tributário: 95%

Interpretação: 
- ✅ Tributário está excelente
- ⚠️ Criminal precisa de atenção
- 💡 Descobrir o que Tributário faz de diferente
```

---

#### **O que Fazer Quando a Taxa Está Baixa**

**Taxa abaixo de 80%**: 🔍 **Investigação Necessária**

**Passo 1: Identifique a Causa**
- 📊 Muitos "A Confirmar"? → Advogados não estão respondendo rápido
- 📊 Muitos "Não Realizados"? → Advogados não estão respondendo
- 📊 Problema em área específica? → Foque nessa área
- 📊 Problema com advogados específicos? → Converse com eles

**Passo 2: Tome Ações Corretivas**
- 📞 Entre em contato com advogados problemáticos
- 📋 Reforce a importância de responder às mensagens
- 🔔 Configure lembretes adicionais (se possível)
- 📊 Monitore mais de perto

**Passo 3: Previna Recorrência**
- 📚 Treine advogados sobre o processo
- 📝 Crie procedimentos claros
- 🎯 Estabeleça metas individuais
- 🏆 Reconheça advogados com alta taxa de resposta

---
### 📊 Como as Métricas se Relacionam

As 4 métricas estão **matematicamente conectadas**. Entender essa relação ajuda a interpretar o dashboard como um todo.

#### **Relação Matemática**

```
Total de Audiências = Check-ins Feitos + A Confirmar + Não Realizados

Taxa de Confirmação = (Check-ins Feitos ÷ Total de Audiências) × 100
```

**Exemplo Visual**:
```
┌─────────────────────────────────────────────────────────┐
│  Check-in Feito: 8    A Confirmar: 2    Não Realizados: 0  │
│                                                         │
│  Total = 8 + 2 + 0 = 10 audiências                     │
│  Taxa = (8 ÷ 10) × 100 = 80%                           │
└─────────────────────────────────────────────────────────┘
```

#### **Leitura Integrada das Métricas**

**Cenário 1: Situação Ideal** 🎉
```
Check-in Feito: 10    |  A Confirmar: 0  |  Não Realizados: 0  |  Taxa: 100%
```
**Interpretação**: Perfeito! Todos confirmaram, nenhum problema.

**Cenário 2: Situação Normal** ✅
```
Check-in Feito: 8     |  A Confirmar: 2  |  Não Realizados: 0  |  Taxa: 80%
```
**Interpretação**: Bom! Maioria confirmou, alguns pendentes, nenhum problema grave.

**Cenário 3: Situação de Atenção** ⚠️
```
Check-in Feito: 6     |  A Confirmar: 2  |  Não Realizados: 2  |  Taxa: 60%
```
**Interpretação**: Atenção! Taxa baixa, há problemas que precisam de ação.

**Cenário 4: Situação Crítica** 🚨
```
Check-in Feito: 3     |  A Confirmar: 2  |  Não Realizados: 5  |  Taxa: 30%
```
**Interpretação**: Crítico! Metade não confirmou, ação urgente necessária!

---

### 🎯 Como os Filtros Afetam as Métricas

**Regra Fundamental**: 📌 **Todas as métricas consideram APENAS as audiências que passam pelos filtros aplicados.**

Isso significa que quando você aplica filtros de data ou grupo, **TUDO** é recalculado:
- ✅ Check-in Feito
- ✅ A Confirmar
- ✅ Não Realizados
- ✅ Taxa de Confirmação
- ✅ Lista de Processos

#### **Exemplo Prático: Filtro de Data**

**Situação Inicial** (Sem Filtros - Todas as Datas):
```
Check-in Feito: 50    |  A Confirmar: 10  |  Não Realizados: 5  |  Taxa: 77%
Total: 65 audiências
```

**Aplicando Filtro "Hoje"**:
```
Check-in Feito: 8     |  A Confirmar: 2   |  Não Realizados: 0  |  Taxa: 80%
Total: 10 audiências (apenas de hoje)
```

**Interpretação**: Das 65 audiências totais, 10 são de hoje. Dessas 10, 8 confirmaram (80%).

---
#### **Exemplo Prático: Filtro de Grupo**

**Situação Inicial** (Todos os Grupos):
```
Check-in Feito: 50    |  A Confirmar: 10  |  Não Realizados: 5  |  Taxa: 77%
Total: 65 audiências (todas as áreas)
```

**Aplicando Filtro "Apenas Trabalhista"**:
```
Check-in Feito: 12    |  A Confirmar: 3   |  Não Realizados: 0  |  Taxa: 80%
Total: 15 audiências (apenas Trabalhista)
```

**Interpretação**: Das 65 audiências totais, 15 são da área Trabalhista. Dessas 15, 12 confirmaram (80%).

---

#### **Exemplo Prático: Múltiplos Filtros**

**Situação Inicial** (Sem Filtros):
```
Check-in Feito: 50    |  A Confirmar: 10  |  Não Realizados: 5  |  Taxa: 77%
Total: 65 audiências
```

**Aplicando Filtros "Hoje" + "Trabalhista e Cível"**:
```
Check-in Feito: 5     |  A Confirmar: 1   |  Não Realizados: 0  |  Taxa: 83%
Total: 6 audiências (hoje, Trabalhista e Cível)
```

**Interpretação**: Das 65 audiências totais, apenas 6 são de hoje E das áreas Trabalhista ou Cível. Dessas 6, 5 confirmaram (83%).

---

### 💡 Dicas de Uso das Métricas

#### **Dica 1: Crie uma Rotina de Monitoramento** 📅

**Manhã (8h-9h)**:
1. Abra o dashboard
2. Filtre "Hoje"
3. Veja a taxa de confirmação
4. Identifique "Não Realizados" (se houver)
5. Planeje ações do dia

**Meio do Dia (12h-13h)**:
1. Verifique se a taxa aumentou
2. Monitore "A Confirmar"
3. Entre em contato se necessário

**Fim do Dia (17h-18h)**:
1. Revise a taxa final do dia
2. Compare com dias anteriores
3. Registre ocorrências
4. Planeje melhorias

---

#### **Dica 2: Use Métricas para Comparações** 📊

**Compare Áreas**:
```
1. Filtre "Esta Semana"
2. Filtre apenas "Cível" → Veja a taxa
3. Filtre apenas "Trabalhista" → Veja a taxa
4. Filtre apenas "Criminal" → Veja a taxa
5. Compare as taxas entre áreas
```

**Compare Períodos**:
```
1. Filtre "Semana Passada" → Anote a taxa
2. Filtre "Esta Semana" → Anote a taxa
3. Compare: Melhorou ou piorou?
```

---
#### **Dica 3: Estabeleça Metas e Acompanhe** 🎯

**Meta Diária**:
- 🎯 Taxa de Confirmação: Mínimo 80%
- 🎯 Check-ins Não Realizados: Máximo 2
- 🎯 A Confirmar no fim do dia: Zero

**Meta Semanal**:
- 🎯 Taxa média da semana: 85%+
- 🎯 Pelo menos 3 dias com 90%+
- 🎯 Nenhum dia abaixo de 70%

**Meta Mensal**:
- 🎯 Taxa média do mês: 85%+
- 🎯 Tendência crescente
- 🎯 Redução de "Não Realizados"

---

#### **Dica 4: Identifique Padrões** 🔍

**Padrões Temporais**:
- 📊 Segundas-feiras têm taxa mais baixa?
- 📊 Sextas-feiras têm mais "Não Realizados"?
- 📊 Horários específicos têm mais problemas?

**Padrões por Área**:
- 📊 Alguma área sempre tem taxa baixa?
- 📊 Alguma área sempre tem taxa alta?
- 📊 O que as áreas de sucesso fazem diferente?

**Padrões por Advogado**:
- 📊 Mesmos advogados sempre não respondem?
- 📊 Alguns advogados sempre confirmam rápido?
- 📊 Há correlação com tipo de processo?

---

#### **Dica 5: Aja Baseado em Dados** 📈

**Se Taxa Está Caindo**:
1. 🔍 Identifique a causa (área? advogado? horário?)
2. 📞 Entre em contato com os envolvidos
3. 📋 Reforce procedimentos
4. 📊 Monitore de perto até melhorar

**Se Taxa Está Alta**:
1. 🎉 Celebre o sucesso!
2. 📝 Documente o que está funcionando
3. 📢 Compartilhe boas práticas
4. 🎯 Mantenha o padrão

**Se Há Muitos "Não Realizados"**:
1. 🚨 Prioridade máxima!
2. 📞 Contate cada advogado
3. 🔍 Investigue causas
4. 🔄 Implemente ações corretivas

---

### ✅ Checklist de Domínio das Métricas

Use este checklist para garantir que você domina a interpretação das métricas:

**Conhecimento Básico**:
- [ ] Sei onde ficam as 4 métricas no dashboard
- [ ] Entendo o que cada cor significa (verde, laranja, vermelho, azul)
- [ ] Sei o que cada métrica mostra

**Cálculos**:
- [ ] Entendo como "Check-in Feito" é calculado
- [ ] Entendo como "A Confirmar" é calculado
- [ ] Entendo como "Não Realizados" é calculado
- [ ] Entendo como "Taxa de Confirmação" é calculada
- [ ] Sei que audiências "Nulas" não contam no total

**Interpretação**:
- [ ] Sei interpretar valores altos e baixos de cada métrica
- [ ] Sei quando uma taxa é boa, regular ou ruim
- [ ] Entendo a relação entre as 4 métricas
- [ ] Sei ler as métricas de forma integrada

**Uso Prático**:
- [ ] Sei usar métricas para monitoramento diário
- [ ] Sei comparar métricas entre áreas
- [ ] Sei comparar métricas entre períodos
- [ ] Sei identificar padrões nas métricas

**Ação**:
- [ ] Sei o que fazer quando taxa está baixa
- [ ] Sei o que fazer quando há muitos "Não Realizados"
- [ ] Sei estabelecer metas baseadas em métricas
- [ ] Sei tomar decisões baseadas em dados

**Filtros**:
- [ ] Entendo que filtros afetam todas as métricas
- [ ] Sei usar filtros para análises específicas
- [ ] Sei combinar filtros para insights detalhados

---

### 🎯 Próximos Passos

Agora que você domina completamente a **interpretação das métricas**, vamos para a próxima seção onde você vai aprender **casos de uso práticos** do dashboard no seu dia a dia!

**Prévia da Próxima Seção**:
- 🌟 Como monitorar audiências do dia
- 🌟 Como identificar advogados problemáticos
- 🌟 Como fazer análises semanais e mensais
- 🌟 Como usar o dashboard para planejamento

---
## 8. Como as Métricas se Ajustam aos Filtros

### 🎯 Regra Fundamental: Filtros Afetam Tudo

**A regra mais importante que você precisa entender sobre o dashboard**:

> 📌 **Todas as métricas e a lista de processos consideram APENAS as audiências que passam pelos filtros aplicados.**

Isso significa que quando você aplica um filtro (de data ou de grupo), **TUDO** no dashboard é recalculado instantaneamente:

- ✅ **Check-in Feito** - Recalculado
- ✅ **Check-in A Confirmar** - Recalculado
- ✅ **Check-ins Não Realizados** - Recalculado
- ✅ **Taxa de Confirmação** - Recalculada
- ✅ **Lista de Processos** - Recarregada

**Por que isso é importante?**

Porque você pode estar vendo números que **não representam a realidade completa**, mas sim **apenas o subconjunto filtrado**. Isso é útil para análises específicas, mas você precisa estar ciente!

---

### 📅 Como o Filtro de Data Afeta as Métricas

#### **Conceito**

Quando você seleciona um período no filtro de data, o dashboard mostra **apenas as audiências daquele período**.

**Exemplo Visual**:


```
BANCO DE DADOS (Todas as Audiências):
┌────────────────────────────────────────────────────┐
│ 14/01 - 5 audiências                               │
│ 15/01 - 10 audiências (HOJE)                      │
│ 16/01 - 8 audiências                               │
│ 17/01 - 12 audiências                              │
│ 18/01 - 7 audiências                               │
│ Total: 42 audiências                               │
└────────────────────────────────────────────────────┘

FILTRO APLICADO: "Hoje" (15/01)
        ↓
DASHBOARD MOSTRA:
┌────────────────────────────────────────────────────┐
│ Apenas 15/01 - 10 audiências                       │
│                                                    │
│ Check-in Feito: 8                                  │
│ A Confirmar: 2                                     │
│ Não Realizados: 0                                  │
│ Taxa: 80%                                          │
└────────────────────────────────────────────────────┘
```

**Interpretação**: Das 42 audiências totais no banco de dados, o dashboard está mostrando apenas as 10 de hoje.

---

#### **Exemplo Prático 1: Comparando "Hoje" vs "Esta Semana"**

**Situação**: Você quer entender a diferença entre ver apenas hoje ou a semana toda.

**Passo 1: Filtrar "Hoje"**


1. Clique no filtro de data 📅
2. Selecione "Hoje"
3. Observe as métricas:

```
┌─────────────────────────────────────────────────────────┐
│  Check-in Feito: 8    A Confirmar: 2    Não Realizados: 0  │
│  Taxa de Confirmação: 80%                               │
│  Total: 10 audiências                                   │
└─────────────────────────────────────────────────────────┘
```

**Passo 2: Filtrar "Esta Semana"**

1. Clique no filtro de data 📅
2. Selecione "Esta Semana"
3. Observe as métricas:

```
┌─────────────────────────────────────────────────────────┐
│  Check-in Feito: 30   A Confirmar: 8    Não Realizados: 4  │
│  Taxa de Confirmação: 71%                               │
│  Total: 42 audiências                                   │
└─────────────────────────────────────────────────────────┘
```

**Comparação**:

| Filtro | Total | Feitos | Taxa | Interpretação |
|--------|-------|--------|------|---------------|
| Hoje | 10 | 8 | 80% | ✅ Dia bom! |
| Esta Semana | 42 | 30 | 71% | ⚠️ Semana regular |



**Insight**: Hoje está melhor que a média da semana! Isso pode significar que os dias anteriores tiveram problemas.

---

#### **Exemplo Prático 2: Analisando Ontem para Entender Problemas**

**Situação**: Você recebeu um relatório de que ontem houve muitos problemas. Quer investigar.

**Passo 1: Filtrar "Ontem"**

1. Clique no filtro de data 📅
2. Selecione "Ontem"
3. Observe as métricas:

```
┌─────────────────────────────────────────────────────────┐
│  Check-in Feito: 5    A Confirmar: 0    Não Realizados: 7  │
│  Taxa de Confirmação: 42%                               │
│  Total: 12 audiências                                   │
└─────────────────────────────────────────────────────────┘
```

**Análise**:
- 🔴 Taxa de 42% é **crítica**
- 🔴 7 audiências não realizadas é **muito alto**
- ✅ Nenhum "A Confirmar" (todos já foram processados)

**Passo 2: Investigar na Lista**


1. Role para baixo até a lista de processos
2. Procure por status 🔴 (vermelho)
3. Identifique quais advogados não confirmaram
4. Anote os nomes para conversa posterior

**Ação**: Entre em contato com os 7 advogados que não confirmaram para entender o que aconteceu.

---

#### **Exemplo Prático 3: Planejando com "Amanhã"**

**Situação**: É fim de tarde e você quer se preparar para amanhã.

**Passo 1: Filtrar "Amanhã"**

1. Clique no filtro de data 📅
2. Selecione "Amanhã"
3. Observe as métricas:

```
┌─────────────────────────────────────────────────────────┐
│  Check-in Feito: 0    A Confirmar: 0    Não Realizados: 0  │
│  Taxa de Confirmação: 0%                                │
│  Total: 8 audiências                                    │
└─────────────────────────────────────────────────────────┘
```

**Interpretação**:
- ⚪ Todos os status estão "Nulo" (mensagens ainda não foram enviadas)
- ✅ Isso é **normal** - mensagens só são enviadas 30 min antes
- 📋 Você pode ver **quantas audiências** terá amanhã (8)



**Passo 2: Revisar a Lista**

1. Role para baixo até a lista
2. Veja os horários das audiências
3. Identifique se há horários conflitantes
4. Verifique se os advogados corretos estão alocados

**Benefício**: Você se prepara mentalmente para o dia seguinte e pode antecipar problemas.

---

### 👥 Como o Filtro de Grupo Afeta as Métricas

#### **Conceito**

Quando você seleciona grupos específicos no filtro, o dashboard mostra **apenas as audiências daqueles grupos**.

**Exemplo Visual**:

```
BANCO DE DADOS (Todos os Grupos):
┌────────────────────────────────────────────────────┐
│ Cível: 15 audiências                               │
│ Trabalhista: 12 audiências                         │
│ Criminal: 8 audiências                             │
│ Tributário: 10 audiências                          │
│ Imobiliário: 6 audiências                          │
│ Ambiental: 4 audiências                            │
│ Total: 55 audiências                               │
└────────────────────────────────────────────────────┘

FILTRO APLICADO: Apenas "Trabalhista"
        ↓
DASHBOARD MOSTRA:
┌────────────────────────────────────────────────────┐
│ Apenas Trabalhista - 12 audiências                 │
│                                                    │
│ Check-in Feito: 10                                 │
│ A Confirmar: 2                                     │
│ Não Realizados: 0                                  │
│ Taxa: 83%                                          │
└────────────────────────────────────────────────────┘
```



**Interpretação**: Das 55 audiências totais, o dashboard está mostrando apenas as 12 da área Trabalhista.

---

#### **Exemplo Prático 4: Comparando Performance entre Áreas**

**Situação**: Você é gestor de múltiplas áreas e quer comparar a performance de cada uma.

**Passo 1: Filtrar Apenas "Cível"**

1. Clique no filtro de grupos 👥
2. Desmarque todos
3. Marque apenas "Controle Cível"
4. Observe as métricas:

```
┌─────────────────────────────────────────────────────────┐
│  ÁREA: CÍVEL                                            │
│  Check-in Feito: 12   A Confirmar: 2    Não Realizados: 1  │
│  Taxa de Confirmação: 80%                               │
│  Total: 15 audiências                                   │
└─────────────────────────────────────────────────────────┘
```

**Passo 2: Filtrar Apenas "Trabalhista"**

1. Clique no filtro de grupos 👥
2. Desmarque "Cível"
3. Marque apenas "Controle Trabalhista"
4. Observe as métricas:



```
┌─────────────────────────────────────────────────────────┐
│  ÁREA: TRABALHISTA                                      │
│  Check-in Feito: 10   A Confirmar: 2    Não Realizados: 0  │
│  Taxa de Confirmação: 83%                               │
│  Total: 12 audiências                                   │
└─────────────────────────────────────────────────────────┘
```

**Passo 3: Filtrar Apenas "Criminal"**

1. Clique no filtro de grupos 👥
2. Desmarque "Trabalhista"
3. Marque apenas "Controle Criminal"
4. Observe as métricas:

```
┌─────────────────────────────────────────────────────────┐
│  ÁREA: CRIMINAL                                         │
│  Check-in Feito: 5    A Confirmar: 1    Não Realizados: 2  │
│  Taxa de Confirmação: 62%                               │
│  Total: 8 audiências                                    │
└─────────────────────────────────────────────────────────┘
```

**Comparação**:

| Área | Total | Taxa | Não Realizados | Avaliação |
|------|-------|------|----------------|-----------|
| Trabalhista | 12 | 83% | 0 | 🟢 Excelente |
| Cível | 15 | 80% | 1 | 🟢 Muito Bom |
| Criminal | 8 | 62% | 2 | 🟠 Regular |



**Insights**:
- ✅ Trabalhista está com performance excelente
- ✅ Cível está indo bem
- ⚠️ Criminal precisa de atenção (taxa baixa, 2 não realizados)

**Ação**: Investigar o que está acontecendo na área Criminal. Conversar com os advogados dessa área.

---

#### **Exemplo Prático 5: Focando na Sua Área Específica**

**Situação**: Você é gestor apenas da área Trabalhista e não quer se distrair com outras áreas.

**Configuração Permanente**:

1. Clique no filtro de grupos 👥
2. Clique em "Desmarcar Todos"
3. Marque apenas "Controle Trabalhista"
4. Deixe assim durante todo o dia

**Resultado**:
- ✅ Você vê **apenas** audiências da sua área
- ✅ Métricas refletem **apenas** sua área
- ✅ Lista mostra **apenas** seus advogados
- ✅ Você não se distrai com outras áreas

**Benefício**: Foco total na sua responsabilidade!

---

### 🔄 Combinando Filtros de Data e Grupo

#### **Conceito**

Você pode aplicar **ambos os filtros simultaneamente** para análises ainda mais específicas.



**Fórmula**:
```
Audiências Exibidas = Audiências que atendem AMBOS os critérios
                    = (Data no período selecionado) E (Grupo selecionado)
```

**Exemplo Visual**:

```
BANCO DE DADOS (Todas as Audiências):
┌────────────────────────────────────────────────────┐
│ Total: 100 audiências                              │
│                                                    │
│ Por Data:                                          │
│   Hoje: 20 audiências                             │
│   Outros dias: 80 audiências                      │
│                                                    │
│ Por Grupo:                                         │
│   Trabalhista: 30 audiências                      │
│   Outros grupos: 70 audiências                    │
└────────────────────────────────────────────────────┘

FILTROS APLICADOS: "Hoje" E "Trabalhista"
        ↓
DASHBOARD MOSTRA:
┌────────────────────────────────────────────────────┐
│ Apenas audiências que são:                         │
│   - De hoje (15/01) E                              │
│   - Da área Trabalhista                            │
│                                                    │
│ Resultado: 6 audiências                            │
└────────────────────────────────────────────────────┘
```

---


#### **Exemplo Prático 6: Análise Específica (Hoje + Minha Área)**

**Situação**: Você quer monitorar apenas as audiências de hoje da sua área (Trabalhista).

**Passo 1: Aplicar Filtro de Data**

1. Clique no filtro de data 📅
2. Selecione "Hoje"

**Passo 2: Aplicar Filtro de Grupo**

1. Clique no filtro de grupos 👥
2. Desmarque todos
3. Marque apenas "Controle Trabalhista"

**Resultado**:

```
┌─────────────────────────────────────────────────────────┐
│  FILTROS ATIVOS: Hoje + Trabalhista                     │
│                                                         │
│  Check-in Feito: 5    A Confirmar: 1    Não Realizados: 0  │
│  Taxa de Confirmação: 83%                               │
│  Total: 6 audiências                                    │
│                                                         │
│  Lista mostra apenas:                                   │
│  - Audiências de hoje (15/01)                           │
│  - Da área Trabalhista                                  │
└─────────────────────────────────────────────────────────┘
```

**Interpretação**:
- Das 100 audiências totais no sistema
- 20 são de hoje
- 30 são da área Trabalhista
- **6 são de hoje E da área Trabalhista** (interseção)



**Benefício**: Visão ultra-focada no que realmente importa para você agora!

---

#### **Exemplo Prático 7: Análise Semanal de Múltiplas Áreas**

**Situação**: Você gerencia Cível e Trabalhista e quer ver a performance da semana.

**Passo 1: Aplicar Filtro de Data**

1. Clique no filtro de data 📅
2. Selecione "Esta Semana"

**Passo 2: Aplicar Filtro de Grupos**

1. Clique no filtro de grupos 👥
2. Desmarque todos
3. Marque "Controle Cível"
4. Marque "Controle Trabalhista"

**Resultado**:

```
┌─────────────────────────────────────────────────────────┐
│  FILTROS ATIVOS: Esta Semana + Cível + Trabalhista      │
│                                                         │
│  Check-in Feito: 22   A Confirmar: 4    Não Realizados: 1  │
│  Taxa de Confirmação: 81%                               │
│  Total: 27 audiências                                   │
│                                                         │
│  Lista mostra apenas:                                   │
│  - Audiências desta semana (14/01 a 20/01)             │
│  - Das áreas Cível OU Trabalhista                       │
└─────────────────────────────────────────────────────────┘
```



**Análise**:
- ✅ Taxa de 81% está boa
- ✅ Apenas 1 não realizado na semana toda
- ⚠️ 4 ainda a confirmar (verificar se são de hoje ou dias anteriores)

**Ação**: Revisar os 4 "A Confirmar" na lista para ver se são urgentes.

---

### 🔄 Atualização Automática: Como Funciona

#### **O que é Atualização Automática?**

O dashboard possui um sistema de **atualização automática** que busca novos dados do servidor **a cada 2 minutos**, sem que você precise fazer nada.

**Como Funciona**:

```
┌─────────────────────────────────────────────────────┐
│  CICLO DE ATUALIZAÇÃO AUTOMÁTICA                    │
└─────────────────────────────────────────────────────┘

Você abre o dashboard
        ↓
Dashboard carrega dados iniciais
        ↓
Você vê métricas e lista
        ↓
⏰ Aguarda 2 minutos
        ↓
Dashboard busca novos dados automaticamente
        ↓
Métricas e lista são atualizadas
        ↓
⏰ Aguarda mais 2 minutos
        ↓
Busca novos dados novamente
        ↓
(Ciclo continua infinitamente)
```



**Características Importantes**:

1. ✅ **Automático**: Você não precisa fazer nada
2. ✅ **Sem Refresh**: A página não recarrega (não pisca)
3. ✅ **Mantém Filtros**: Os filtros aplicados são preservados
4. ✅ **Silencioso**: Acontece em segundo plano
5. ✅ **Contínuo**: Funciona enquanto a aba estiver aberta

---

#### **Por que a Cada 2 Minutos?**

**Motivo 1: Equilíbrio** ⚖️
- Atualizar muito rápido (ex: a cada 10 segundos) sobrecarrega o servidor
- Atualizar muito devagar (ex: a cada 10 minutos) deixa dados desatualizados
- 2 minutos é o equilíbrio ideal

**Motivo 2: Tempo Real Suficiente** ⏰
- Check-ins são enviados 30 minutos antes das audiências
- Advogados geralmente respondem em alguns minutos
- 2 minutos é rápido o suficiente para monitoramento efetivo

**Motivo 3: Performance** 🚀
- Não sobrecarrega sua conexão de internet
- Não consome muita bateria (em dispositivos móveis)
- Não deixa o navegador lento

---


#### **Exemplo Prático 8: Monitoramento em Tempo Real**

**Situação**: São 13:25 e você está monitorando audiências das 14:00. O sistema enviou check-ins às 13:30.

**13:25 - Você Abre o Dashboard**:
```
┌─────────────────────────────────────────────────────────┐
│  Check-in Feito: 0    A Confirmar: 5    Não Realizados: 0  │
│  Taxa de Confirmação: 0%                                │
│  Total: 5 audiências                                    │
└─────────────────────────────────────────────────────────┘
```
**Interpretação**: Mensagens acabaram de ser enviadas, ninguém respondeu ainda.

**13:27 - Atualização Automática (2 min depois)**:
```
┌─────────────────────────────────────────────────────────┐
│  Check-in Feito: 2    A Confirmar: 3    Não Realizados: 0  │
│  Taxa de Confirmação: 40%                               │
│  Total: 5 audiências                                    │
└─────────────────────────────────────────────────────────┘
```
**Interpretação**: 2 advogados já responderam! Taxa subiu para 40%.

**13:29 - Atualização Automática (mais 2 min)**:
```
┌─────────────────────────────────────────────────────────┐
│  Check-in Feito: 4    A Confirmar: 1    Não Realizados: 0  │
│  Taxa de Confirmação: 80%                               │
│  Total: 5 audiências                                    │
└─────────────────────────────────────────────────────────┘
```
**Interpretação**: Mais 2 responderam! Só falta 1.



**13:31 - Atualização Automática (mais 2 min)**:
```
┌─────────────────────────────────────────────────────────┐
│  Check-in Feito: 5    A Confirmar: 0    Não Realizados: 0  │
│  Taxa de Confirmação: 100%                              │
│  Total: 5 audiências                                    │
└─────────────────────────────────────────────────────────┘
```
**Interpretação**: 🎉 Perfeito! Todos confirmaram!

**Benefício**: Você acompanhou tudo em tempo real sem precisar recarregar a página manualmente!

---

#### **Filtros São Mantidos Após Atualização**

**Regra Importante**: 📌 Quando o dashboard atualiza automaticamente, **os filtros que você aplicou são mantidos**.

**Exemplo**:

**Passo 1: Você Aplica Filtros**
- Filtro de Data: "Hoje"
- Filtro de Grupo: "Trabalhista"

**Passo 2: Dashboard Mostra Dados Filtrados**
```
Total: 6 audiências (hoje, Trabalhista)
Taxa: 83%
```

**Passo 3: Aguarda 2 Minutos (Atualização Automática)**

**Passo 4: Dashboard Atualiza MAS Mantém os Filtros**
```
Total: 6 audiências (ainda hoje, ainda Trabalhista)
Taxa: 85% (pode ter mudado se alguém confirmou)
```



**Benefício**: Você não precisa reaplicar os filtros a cada 2 minutos. Configure uma vez e deixe o dashboard trabalhar para você!

---

#### **Como Saber que Houve Atualização?**

**Sinais Visuais**:

1. **Números Mudam** 🔢
   - Se um advogado confirmar, você verá:
   - "Check-in Feito" aumenta
   - "A Confirmar" diminui
   - "Taxa de Confirmação" muda

2. **Lista Atualiza** 📋
   - Status na lista mudam de cor
   - Novos horários de confirmação aparecem
   - Ordem pode mudar (se novos processos forem adicionados)

3. **Transição Suave** ✨
   - A atualização é suave, sem "piscar" a tela
   - Você pode estar lendo e não perceber
   - Apenas os dados mudam, o layout permanece

**Nota**: Atualmente não há indicador visual explícito (como "Atualizado às 13:27"). Os dados simplesmente mudam.

---

### 💡 Recomendação: Deixe o Dashboard Aberto

#### **Por que Deixar Aberto?**

Com a atualização automática a cada 2 minutos, o dashboard se torna uma **ferramenta de monitoramento contínuo**.



**Configuração Recomendada**:

1. **Abra o Dashboard no Início do Expediente** ☀️
   - Primeira coisa ao chegar
   - Configure os filtros que você quer (ex: Hoje + Sua Área)

2. **Deixe em Aba Separada** 🗂️
   - Não feche a aba
   - Deixe sempre visível ou em aba adjacente
   - Alterne para o dashboard periodicamente

3. **Monitore Durante o Dia** 👀
   - A cada 15-30 minutos, dê uma olhada
   - Veja se há mudanças nas métricas
   - Identifique problemas rapidamente

4. **Feche Apenas no Fim do Expediente** 🌙
   - Mantenha aberto o dia todo
   - Feche apenas quando terminar o trabalho

**Benefícios**:

✅ **Monitoramento Contínuo**: Você sempre tem dados atualizados  
✅ **Resposta Rápida**: Identifica problemas assim que aparecem  
✅ **Sem Esforço**: Não precisa ficar recarregando manualmente  
✅ **Visão em Tempo Real**: Acompanha confirmações conforme acontecem  
✅ **Menos Surpresas**: Antecipa problemas antes que se tornem críticos

---


#### **Configuração Ideal no Computador**

**Opção 1: Aba Fixa (Recomendado)** 📌

1. Abra o dashboard
2. Clique com botão direito na aba
3. Selecione "Fixar aba" (ou "Pin tab")
4. A aba fica menor e sempre visível

**Benefício**: Aba não fecha acidentalmente e fica sempre acessível.

**Opção 2: Janela Separada** 🪟

1. Abra o dashboard
2. Arraste a aba para fora do navegador
3. Posicione a janela em um segundo monitor (se tiver)
4. Ou deixe em metade da tela

**Benefício**: Dashboard sempre visível enquanto trabalha em outras coisas.

**Opção 3: Aba Adjacente** 🗂️

1. Mantenha o dashboard na primeira ou segunda aba
2. Use Ctrl+Tab (Windows) ou Cmd+Tab (Mac) para alternar rapidamente
3. Verifique periodicamente

**Benefício**: Acesso rápido sem ocupar espaço extra na tela.

---

### ⚠️ Situações Especiais

#### **E se Eu Recarregar a Página Manualmente?**

**O que acontece**:
1. ✅ Dashboard recarrega normalmente
2. ✅ Dados mais recentes são buscados
3. ❌ **Filtros são resetados** para o padrão



**Filtros Padrão Após Reload**:
- Data: "Hoje" (padrão)
- Grupos: Todos selecionados (padrão)

**Recomendação**: ⚠️ **Evite recarregar manualmente**. Deixe a atualização automática fazer o trabalho!

**Quando Recarregar**:
- ✅ Se o dashboard parecer travado
- ✅ Se os dados não estiverem atualizando
- ✅ Se houver erro visível na tela

---

#### **E se Eu Fechar a Aba Acidentalmente?**

**O que acontece**:
1. ❌ Atualização automática para
2. ❌ Você perde os filtros aplicados
3. ✅ Basta reabrir e configurar novamente

**Prevenção**:
- Use "Fixar aba" para evitar fechar acidentalmente
- Adicione o dashboard aos favoritos para reabrir rapidamente

---

#### **E se Minha Internet Cair?**

**O que acontece**:
1. ❌ Atualização automática falha
2. ⚠️ Dashboard continua mostrando dados antigos
3. ⚠️ Não há indicação visual de que está desatualizado

**Como Identificar**:
- Números não mudam por muito tempo (mais de 5-10 minutos)
- Você sabe que deveria ter mudanças mas não vê



**Solução**:
1. Verifique sua conexão de internet
2. Recarregue a página (F5 ou Cmd+R)
3. Reaplique os filtros se necessário

---

#### **E se o Servidor Estiver Fora do Ar?**

**O que acontece**:
1. ❌ Dashboard não carrega
2. ❌ Ou mostra mensagem de erro
3. ❌ Atualização automática falha

**Solução**:
1. Aguarde alguns minutos
2. Tente recarregar
3. Se persistir, entre em contato com suporte técnico

---

### 📊 Resumo: Como Filtros e Atualização Funcionam Juntos

#### **Fluxo Completo**

```
┌─────────────────────────────────────────────────────┐
│  1. Você Abre o Dashboard                           │
│     ↓                                               │
│  2. Dashboard Carrega Dados Iniciais                │
│     ↓                                               │
│  3. Você Aplica Filtros (Data + Grupo)              │
│     ↓                                               │
│  4. Dashboard Mostra Apenas Dados Filtrados         │
│     ↓                                               │
│  5. ⏰ Aguarda 2 Minutos                            │
│     ↓                                               │
│  6. Dashboard Busca Novos Dados (Automático)        │
│     ↓                                               │
│  7. Aplica os MESMOS Filtros aos Novos Dados        │
│     ↓                                               │
│  8. Atualiza Métricas e Lista                       │
│     ↓                                               │
│  9. ⏰ Aguarda Mais 2 Minutos                       │
│     ↓                                               │
│  10. Repete Passos 6-9 Infinitamente                │
└─────────────────────────────────────────────────────┘
```



---

#### **Regras de Ouro**

1. 📌 **Filtros afetam TUDO**: Métricas e lista sempre refletem os filtros aplicados

2. 🔄 **Atualização é automática**: A cada 2 minutos, sem você fazer nada

3. 🎯 **Filtros são mantidos**: Atualização automática preserva seus filtros

4. 💻 **Deixe aberto**: Dashboard funciona melhor quando fica aberto o dia todo

5. ⚠️ **Evite reload manual**: Deixe a atualização automática trabalhar

---

### ✅ Checklist de Domínio: Filtros e Atualização

Use este checklist para garantir que você domina como filtros e atualização funcionam:

**Conceitos Básicos**:
- [ ] Entendo que filtros afetam todas as métricas
- [ ] Entendo que filtros afetam a lista de processos
- [ ] Sei que o dashboard atualiza a cada 2 minutos
- [ ] Sei que filtros são mantidos após atualização

**Filtro de Data**:
- [ ] Sei aplicar filtro "Hoje"
- [ ] Sei aplicar filtro "Esta Semana"
- [ ] Sei aplicar filtro "Este Mês"
- [ ] Entendo como o filtro de data afeta as métricas
- [ ] Sei usar filtro de data para comparar períodos

**Filtro de Grupo**:
- [ ] Sei selecionar um grupo específico
- [ ] Sei selecionar múltiplos grupos
- [ ] Sei usar "Marcar Todos" e "Desmarcar Todos"
- [ ] Entendo como o filtro de grupo afeta as métricas
- [ ] Sei usar filtro de grupo para comparar áreas



**Filtros Combinados**:
- [ ] Sei aplicar filtro de data E grupo simultaneamente
- [ ] Entendo que apenas audiências que atendem AMBOS os critérios são exibidas
- [ ] Sei usar filtros combinados para análises específicas

**Atualização Automática**:
- [ ] Sei que o dashboard atualiza sozinho a cada 2 minutos
- [ ] Entendo que não preciso recarregar manualmente
- [ ] Sei que os filtros são preservados após atualização
- [ ] Sei identificar quando houve atualização (números mudam)
- [ ] Sei que devo deixar o dashboard aberto para monitoramento contínuo

**Uso Prático**:
- [ ] Sei configurar filtros para meu uso diário
- [ ] Sei usar filtros para comparar performance entre áreas
- [ ] Sei usar filtros para análises temporais (ontem vs hoje)
- [ ] Sei deixar o dashboard aberto e monitorar periodicamente

**Troubleshooting**:
- [ ] Sei o que fazer se recarregar a página acidentalmente
- [ ] Sei identificar se minha internet caiu
- [ ] Sei quando entrar em contato com suporte

---

### 🎯 Próximos Passos

Agora que você domina completamente **como filtros e atualização automática funcionam**, você está pronto para a próxima seção!



**Na Próxima Seção (Seção 9)**, você vai aprender:
- 🌟 Casos de uso práticos do dashboard
- 🌟 Como monitorar audiências do dia
- 🌟 Como identificar advogados problemáticos
- 🌟 Como fazer análises semanais e mensais
- 🌟 Como usar o dashboard para planejamento

**Dica**: Pratique aplicando diferentes combinações de filtros e observe como as métricas mudam. Quanto mais você praticar, mais natural será usar o dashboard!

---



---

## 9. Casos de Uso Práticos

### 📖 Introdução aos Casos de Uso

Agora que você já conhece todas as funcionalidades do dashboard, vamos ver **como usar tudo isso na prática**!

Esta seção apresenta **5 casos de uso reais** que você vai encontrar no seu dia a dia como gestor de pauta. Cada caso inclui:

- 🎯 **Objetivo**: O que você quer alcançar
- 📋 **Passo a passo**: Instruções detalhadas
- 💡 **Dicas**: Truques para otimizar o processo
- ✅ **Resultado esperado**: O que você deve ver ao final

**Os 5 Casos de Uso**:

1. 🌅 **Monitorar Audiências do Dia** - Acompanhamento diário em tempo real
2. 🎯 **Verificar Audiências de uma Área Específica** - Foco na sua responsabilidade
3. 🔍 **Identificar Advogados que Não Confirmaram** - Ação preventiva
4. 📊 **Analisar Performance Semanal/Mensal** - Relatórios e insights
5. 📅 **Planejamento do Dia Seguinte** - Preparação antecipada

Vamos começar!

---

### 🌅 Caso de Uso 1: Monitorar Audiências do Dia

#### 🎯 Objetivo

Acompanhar em tempo real todas as audiências do dia atual, identificando rapidamente quais advogados confirmaram presença e quais precisam de atenção.

**Quando usar**: Durante todo o expediente, especialmente pela manhã e no período da tarde.

**Tempo necessário**: 2-3 minutos para configuração inicial, depois monitoramento contínuo.



#### 📋 Passo a Passo

**Passo 1: Abrir o Dashboard**

1. Abra seu navegador (Chrome, Firefox, Edge, Safari)
2. Digite a URL: `https://dashboard.mosello.net.br`
3. Aguarde o dashboard carregar completamente

**Passo 2: Aplicar Filtro de Data**

1. Localize o botão de filtro de data 📅 no canto superior direito
2. Clique no botão
3. Selecione o atalho **"Hoje"**
4. O dropdown fecha automaticamente

**Resultado**: O dashboard agora mostra apenas as audiências de hoje.

**Passo 3: Configurar Filtro de Grupos (Opcional)**

Se você gerencia apenas uma área específica:

1. Clique no botão de filtro de grupos 👥
2. Clique em **"Desmarcar Todos"**
3. Marque apenas o(s) grupo(s) da sua responsabilidade
4. Clique fora do dropdown para fechar

Se você gerencia todas as áreas:

1. Deixe **"Todos os Grupos"** selecionado (padrão)

**Resultado**: Dashboard mostra apenas audiências da(s) sua(s) área(s).



**Passo 4: Analisar o Painel de Métricas**

Olhe para os 4 cards coloridos no topo:

```
┌─────────────────────────────────────────────────────────┐
│  Check-in Feito: 8    A Confirmar: 3    Não Realizados: 1  │
│  Taxa de Confirmação: 67%                               │
└─────────────────────────────────────────────────────────┘
```

**Interpretação rápida**:
- ✅ **8 confirmados**: Ótimo! Esses advogados estão prontos
- 🟠 **3 a confirmar**: Monitorar - podem responder a qualquer momento
- 🔴 **1 não realizado**: ATENÇÃO! Precisa de ação imediata
- 📊 **Taxa 67%**: Abaixo do ideal (meta: 80%+)

**Passo 5: Identificar Prioridades na Lista**

Role para baixo até a lista de processos e procure por:

1. **Status vermelhos (🔴)**: Prioridade MÁXIMA
   - Audiências que não foram confirmadas
   - Advogados que informaram que não vão comparecer
   - **Ação**: Entre em contato IMEDIATAMENTE

2. **Status laranjas (🟠) próximos do horário**: Prioridade ALTA
   - Audiências em menos de 15 minutos sem confirmação
   - **Ação**: Ligue para o advogado agora

3. **Status laranjas (🟠) com tempo**: Prioridade MÉDIA
   - Audiências com mais de 15 minutos ainda
   - **Ação**: Monitore, aguarde resposta



**Passo 6: Tomar Ações Necessárias**

Para cada audiência problemática identificada:

1. **Anote os detalhes**:
   - Número do processo
   - Nome do advogado
   - Horário da audiência
   - Status atual

2. **Entre em contato**:
   - 📞 Ligue para o advogado
   - 💬 Envie mensagem no WhatsApp
   - 📧 Envie e-mail se necessário

3. **Registre a ação**:
   - Anote que entrou em contato
   - Registre a resposta do advogado
   - Documente providências tomadas

**Passo 7: Deixar o Dashboard Aberto**

1. **Não feche a aba** do dashboard
2. Deixe-a aberta em uma segunda tela ou aba separada
3. O dashboard atualiza automaticamente a cada 2 minutos
4. Volte periodicamente para verificar mudanças

**Frequência recomendada de verificação**:
- ⏰ **A cada 15-30 minutos** durante períodos críticos
- ⏰ **A cada hora** durante períodos calmos
- 🚨 **Imediatamente** se você receber alerta do supervisor



#### 💡 Dicas para Otimizar o Monitoramento Diário

**Dica 1: Crie uma Rotina de Verificação** ⏰

Estabeleça horários fixos para verificar o dashboard:

```
08:00 - Primeira verificação do dia (visão geral)
10:00 - Segunda verificação (audiências da manhã)
12:00 - Verificação pré-almoço
14:00 - Primeira verificação da tarde
16:00 - Segunda verificação da tarde
17:30 - Verificação final do dia
```

**Dica 2: Use Duas Telas** 💻

Se possível, deixe o dashboard aberto em uma segunda tela:
- Tela principal: Seu trabalho normal
- Segunda tela: Dashboard em monitoramento contínuo
- Você vê mudanças em tempo real sem interromper seu trabalho

**Dica 3: Configure Notificações do Supervisor** 🔔

Certifique-se de que você está cadastrado para receber alertas:
- Alertas de check-in não confirmado (15 min antes)
- Alertas de check-out não confirmado (45 min após)
- Você age imediatamente quando recebe alerta

**Dica 4: Priorize por Horário** 🕐

Foque primeiro nas audiências mais próximas:
- Audiências em menos de 1 hora: Prioridade MÁXIMA
- Audiências em 1-2 horas: Prioridade ALTA
- Audiências em mais de 2 horas: Prioridade MÉDIA



**Dica 5: Mantenha um Registro** 📝

Crie uma planilha simples para registrar:
- Audiências problemáticas do dia
- Ações tomadas
- Resultados obtidos
- Padrões identificados

Exemplo de registro:

| Hora | Processo | Advogado | Problema | Ação | Resultado |
|------|----------|----------|----------|------|-----------|
| 09:30 | 1234567 | João Silva | Não confirmou | Ligação | Confirmou por telefone |
| 14:15 | 7654321 | Maria Souza | Informou que não vai | Substituto | Reagendado |

#### ✅ Resultado Esperado

Ao final do monitoramento diário, você deve ter:

✅ **Visão completa** de todas as audiências do dia
✅ **Identificação rápida** de problemas
✅ **Ações tomadas** para todas as audiências críticas
✅ **Taxa de confirmação** acima de 80% (meta)
✅ **Registro documentado** de ocorrências
✅ **Tranquilidade** de que tudo está sob controle

**Exemplo de dia bem-sucedido**:

```
Início do dia (08:00):
- 12 audiências agendadas
- 2 confirmadas (audiências muito cedo)
- 10 ainda nulas (aguardando envio)
- Taxa: 17%

Meio do dia (12:00):
- 12 audiências agendadas
- 9 confirmadas
- 2 a confirmar
- 1 não realizado (ação tomada)
- Taxa: 75%

Fim do dia (17:30):
- 12 audiências agendadas
- 11 confirmadas
- 0 a confirmar
- 1 não realizado (justificado)
- Taxa: 92% ✅ EXCELENTE!
```

---



### 🎯 Caso de Uso 2: Verificar Audiências de uma Área Específica

#### 🎯 Objetivo

Focar exclusivamente nas audiências de uma área específica (por exemplo, Trabalhista ou Cível), filtrando todas as outras para ter uma visão concentrada da sua responsabilidade.

**Quando usar**: 
- Quando você gerencia apenas uma área
- Quando quer analisar a performance de uma área específica
- Quando precisa preparar relatório de uma área

**Tempo necessário**: 1-2 minutos para configuração, depois análise conforme necessário.

#### 📋 Passo a Passo

**Passo 1: Abrir o Dashboard e Aplicar Filtro de Data**

1. Abra o dashboard: `https://dashboard.mosello.net.br`
2. Clique no filtro de data 📅
3. Selecione o período desejado:
   - **"Hoje"** - Para monitoramento diário
   - **"Esta Semana"** - Para análise semanal
   - **"Este Mês"** - Para relatório mensal

**Passo 2: Aplicar Filtro de Grupo Específico**

1. Clique no botão de filtro de grupos 👥
2. Clique em **"Desmarcar Todos"**
3. Marque **apenas** o grupo da sua área:
   - ☑ Controle Contencioso Imobiliário/Agrário
   - ☑ Controle Cível
   - ☑ Controle Criminal
   - ☑ Controle Tributário e Empresarial
   - ☑ Controle Trabalhista
   - ☑ Controle Contencioso Ambiental
4. Clique fora do dropdown para fechar

**Resultado**: Dashboard mostra APENAS audiências da área selecionada.



**Passo 3: Analisar Métricas da Área**

Observe o painel de métricas - agora reflete APENAS sua área:

```
┌─────────────────────────────────────────────────────────┐
│  ÁREA: CONTROLE TRABALHISTA                             │
│                                                         │
│  Check-in Feito: 10   A Confirmar: 2    Não Realizados: 0  │
│  Taxa de Confirmação: 83%                               │
│  Total: 12 audiências                                   │
└─────────────────────────────────────────────────────────┘
```

**Perguntas para se fazer**:
- ✅ A taxa está acima de 80%? (meta)
- ⚠️ Há muitos "Não Realizados"?
- 📊 Como está comparado com outras áreas?
- 📈 Está melhor ou pior que semana passada?

**Passo 4: Revisar Lista de Processos da Área**

Role para baixo e analise a lista:

1. **Identifique padrões**:
   - Algum advogado específico aparece muito em status vermelho?
   - Há horários problemáticos (muito cedo, muito tarde)?
   - Há varas específicas com mais problemas?

2. **Anote observações**:
   - Advogados com boa performance (sempre verde)
   - Advogados problemáticos (frequentemente vermelho)
   - Situações recorrentes



**Passo 5: Comparar com Outras Áreas (Opcional)**

Para entender se sua área está bem ou mal, compare com outras:

1. **Anote as métricas da sua área**:
   - Taxa de confirmação: 83%
   - Não realizados: 0
   - Total de audiências: 12

2. **Mude o filtro para outra área**:
   - Desmarque sua área
   - Marque outra área (ex: Cível)

3. **Compare os números**:

| Área | Taxa | Não Realizados | Total | Avaliação |
|------|------|----------------|-------|-----------|
| Trabalhista | 83% | 0 | 12 | 🟢 Excelente |
| Cível | 80% | 1 | 15 | 🟢 Muito Bom |
| Criminal | 62% | 2 | 8 | 🟠 Regular |

**Insight**: Trabalhista está com a melhor performance!

#### 💡 Dicas para Análise por Área

**Dica 1: Mantenha o Filtro Durante o Dia** 🎯

Se você gerencia apenas uma área:
- Configure o filtro uma vez pela manhã
- Deixe assim o dia todo
- Você não se distrai com outras áreas
- Foco total na sua responsabilidade

**Dica 2: Crie Metas por Área** 📊

Estabeleça metas específicas para sua área:
- Taxa de confirmação: Mínimo 80%
- Não realizados: Máximo 1 por dia
- Tempo de resposta: Máximo 10 minutos após envio



**Dica 3: Identifique Advogados-Chave** 👥

Na sua área, identifique:
- **Advogados exemplares**: Sempre confirmam rápido
- **Advogados regulares**: Confirmam, mas às vezes atrasam
- **Advogados problemáticos**: Frequentemente não confirmam

**Ação**: Converse individualmente com cada grupo.

**Dica 4: Analise Tendências Temporais** 📈

Compare sua área em diferentes períodos:

```
Semana 1: Taxa 75% (regular)
Semana 2: Taxa 80% (bom)
Semana 3: Taxa 85% (excelente)
Semana 4: Taxa 83% (excelente)

Tendência: MELHORANDO! ✅
```

#### ✅ Resultado Esperado

Ao final da análise por área, você deve ter:

✅ **Visão focada** apenas na sua área de responsabilidade
✅ **Métricas específicas** da sua área
✅ **Identificação de padrões** (advogados, horários, varas)
✅ **Comparação** com outras áreas (se aplicável)
✅ **Plano de ação** para melhorar performance
✅ **Dados** para relatório da área

**Exemplo de análise completa**:

```
ÁREA: CONTROLE TRABALHISTA
Período: Esta Semana (14/01 a 20/01)

MÉTRICAS:
- Total de audiências: 42
- Check-ins feitos: 35 (83%)
- A confirmar: 5 (12%)
- Não realizados: 2 (5%)
- Taxa de confirmação: 83% ✅

ADVOGADOS:
- João Silva: 10 audiências, 100% confirmação ⭐
- Maria Souza: 8 audiências, 87% confirmação ✅
- Pedro Santos: 6 audiências, 50% confirmação ⚠️

AÇÕES:
1. Parabenizar João Silva pela excelência
2. Conversar com Pedro Santos sobre importância de confirmar
3. Implementar lembretes para advogados problemáticos
```

---



### 🔍 Caso de Uso 3: Identificar Advogados que Não Confirmaram

#### 🎯 Objetivo

Identificar rapidamente quais advogados não confirmaram presença nas audiências, para que você possa entrar em contato e tomar providências antes que seja tarde demais.

**Quando usar**:
- Durante o dia, para ação preventiva
- Quando você recebe alerta do supervisor
- No final do dia, para análise de problemas
- Para identificar advogados com padrão de não resposta

**Tempo necessário**: 2-3 minutos para identificação, mais tempo para contatos.

#### 📋 Passo a Passo

**Passo 1: Configurar Filtros Apropriados**

1. Abra o dashboard
2. Aplique filtro de data:
   - **"Hoje"** - Para problemas atuais
   - **"Esta Semana"** - Para análise de padrões
3. Aplique filtro de grupo (se necessário):
   - Todos os grupos OU
   - Apenas sua área

**Passo 2: Analisar o Card "Não Realizados"**

Olhe para o card vermelho no painel de métricas:

```
┌─────────────────────────────────┐
│  ⚠️                             │
│  Check-ins Não Realizados       │
│  5                              │
└─────────────────────────────────┘
```

**Interpretação**:
- **0**: Perfeito! Nenhum problema
- **1-2**: Normal, mas precisa atenção
- **3-5**: Preocupante, ação necessária
- **6+**: Crítico! Ação urgente



**Passo 3: Localizar Audiências Não Confirmadas na Lista**

Role para baixo até a lista de processos e procure por:

1. **Status 🔴 (vermelho)** na coluna "Status Checkin"
2. Anote para cada audiência:
   - Número do processo
   - Nome do advogado
   - Horário da audiência
   - Local (vara)

**Exemplo de lista filtrada visualmente**:

```
┌──────────┬──────────┬──────┬────────────┬──────────────┬──────────────┐
│ Processo │   Data   │ Hora │   Local    │  Advogado    │ Check-in     │
├──────────┼──────────┼──────┼────────────┼──────────────┼──────────────┤
│ 1234567  │ 15/01/24 │14:00 │ 1ª Vara    │ João Silva   │ ✅ Confirmado│ ← OK
│ 7654321  │ 15/01/24 │15:30 │ 2ª Vara    │ Maria Souza  │ 🔴 Não Fez   │ ← ATENÇÃO!
│ 9876543  │ 15/01/24 │16:00 │ 3ª Vara    │ Pedro Santos │ 🔴 Não Fez   │ ← ATENÇÃO!
│ 1111111  │ 15/01/24 │16:30 │ 4ª Vara    │ Ana Costa    │ ✅ Confirmado│ ← OK
│ 2222222  │ 15/01/24 │17:00 │ 5ª Vara    │ Carlos Lima  │ 🔴 Não Fez   │ ← ATENÇÃO!
└──────────┴──────────┴──────┴────────────┴──────────────┴──────────────┘
```

**Resultado**: 3 advogados não confirmaram (Maria, Pedro, Carlos).

**Passo 4: Priorizar por Urgência**

Organize os advogados por urgência baseado no horário da audiência:

| Prioridade | Advogado | Audiência | Tempo Restante | Ação |
|------------|----------|-----------|----------------|------|
| 🔴 URGENTE | Maria Souza | 15:30 | 45 minutos | Ligar AGORA |
| 🟠 ALTA | Pedro Santos | 16:00 | 1h 15min | Ligar em breve |
| 🟡 MÉDIA | Carlos Lima | 17:00 | 2h 15min | Monitorar |



**Passo 5: Entrar em Contato com os Advogados**

Para cada advogado identificado:

1. **Ligue primeiro** (método mais eficaz):
   ```
   "Olá [Nome], aqui é [Seu Nome] da gestão de pauta.
   Notei que você ainda não confirmou presença na audiência
   das [Horário] no processo [Número]. Você vai comparecer?"
   ```

2. **Se não atender, envie WhatsApp**:
   ```
   "Olá [Nome], você confirmou presença na audiência das
   [Horário]? Por favor, responda urgente. Obrigado!"
   ```

3. **Se não responder WhatsApp, envie e-mail**:
   ```
   Assunto: URGENTE - Confirmação de Audiência [Horário]
   
   [Nome],
   
   Você ainda não confirmou presença na audiência das [Horário]
   no processo [Número]. Por favor, confirme com urgência.
   
   Atenciosamente,
   [Seu Nome]
   ```

**Passo 6: Registrar Contatos e Respostas**

Mantenha um registro de cada contato:

| Hora | Advogado | Método | Resposta | Ação Tomada |
|------|----------|--------|----------|-------------|
| 14:45 | Maria Souza | Ligação | Confirmou por telefone | Orientada a responder sistema |
| 14:50 | Pedro Santos | WhatsApp | Não vai comparecer | Providenciando substituto |
| 15:00 | Carlos Lima | Ligação | Não atendeu | Tentarei novamente em 15 min |



**Passo 7: Identificar Padrões de Não Resposta**

Para análise de longo prazo, identifique advogados com padrão recorrente:

1. Mude o filtro de data para **"Esta Semana"** ou **"Este Mês"**
2. Procure o nome de advogados específicos na lista
3. Conte quantas vezes cada um aparece com status vermelho

**Exemplo de análise**:

```
ADVOGADO: Pedro Santos
Período: Este Mês (Janeiro)

Audiências totais: 8
Confirmadas: 4 (50%)
Não confirmadas: 4 (50%)

Padrão identificado: Baixa taxa de resposta ⚠️

Ação recomendada:
1. Conversa individual sobre importância
2. Verificar se há problema técnico (WhatsApp, telefone)
3. Oferecer treinamento sobre o sistema
4. Monitoramento mais próximo
```

#### 💡 Dicas para Identificação Eficaz

**Dica 1: Use a Busca Visual por Cores** 🎨

Ao abrir a lista, seus olhos devem procurar automaticamente por:
- 🔴 Vermelho = Problema
- 🟠 Laranja = Atenção
- 🟢 Verde = OK

Com prática, você identifica problemas em segundos!

**Dica 2: Crie uma Lista de Observação** 📋

Mantenha uma lista de advogados que precisam de atenção especial:

```
LISTA DE OBSERVAÇÃO:
1. Pedro Santos - Frequentemente não confirma
2. Ana Costa - Sempre confirma em cima da hora
3. Carlos Lima - Às vezes não vê mensagens

Ação: Contato preventivo antes de cada audiência
```



**Dica 3: Aja Preventivamente** 🛡️

Para advogados problemáticos conhecidos:
- Entre em contato ANTES da mensagem automática
- Ligue 1 hora antes da audiência
- Confirme pessoalmente a presença
- Evite que o problema aconteça

**Dica 4: Documente Tudo** 📝

Mantenha registro detalhado:
- Data e hora do contato
- Método usado (ligação, WhatsApp, e-mail)
- Resposta obtida
- Ação tomada

**Benefício**: Histórico para avaliações e relatórios.

#### ✅ Resultado Esperado

Ao final do processo de identificação e contato, você deve ter:

✅ **Lista completa** de advogados que não confirmaram
✅ **Contato realizado** com todos os advogados críticos
✅ **Providências tomadas** para cada caso
✅ **Registro documentado** de todos os contatos
✅ **Identificação de padrões** de não resposta
✅ **Plano de ação** para advogados problemáticos

**Exemplo de resultado bem-sucedido**:

```
SITUAÇÃO INICIAL (14:00):
- 5 advogados não confirmaram
- Taxa de confirmação: 67%

AÇÕES TOMADAS:
- 14:15 - Ligação para Maria Souza → Confirmou
- 14:20 - WhatsApp para Pedro Santos → Não vai (substituto providenciado)
- 14:25 - Ligação para Carlos Lima → Confirmou
- 14:30 - E-mail para Ana Costa → Aguardando resposta
- 14:35 - Ligação para João Silva → Confirmou

SITUAÇÃO FINAL (15:00):
- 1 advogado ainda não confirmou (Ana Costa - monitorando)
- Taxa de confirmação: 87% ✅
- 4 problemas resolvidos de 5
```

---



### 📊 Caso de Uso 4: Analisar Performance Semanal/Mensal

#### 🎯 Objetivo

Realizar análise detalhada da performance do sistema de check-in ao longo de uma semana ou mês, identificando tendências, problemas recorrentes e oportunidades de melhoria.

**Quando usar**:
- Toda segunda-feira (análise semanal)
- Todo início de mês (análise mensal)
- Para preparar relatórios gerenciais
- Para avaliar eficácia de ações implementadas

**Tempo necessário**: 10-15 minutos para análise completa.

#### 📋 Passo a Passo

**Passo 1: Configurar Filtros para Análise Semanal**

1. Abra o dashboard
2. Clique no filtro de data 📅
3. Selecione **"Esta Semana"**
4. Selecione **"Todos os Grupos"** (ou área específica se preferir)

**Resultado**: Dashboard mostra todas as audiências da semana atual.

**Passo 2: Coletar Métricas Semanais**

Anote as métricas do painel:

```
┌─────────────────────────────────────────────────────────┐
│  PERÍODO: ESTA SEMANA (14/01 a 20/01)                   │
│                                                         │
│  Check-in Feito: 35   A Confirmar: 5    Não Realizados: 2  │
│  Taxa de Confirmação: 83%                               │
│  Total: 42 audiências                                   │
└─────────────────────────────────────────────────────────┘
```

**Registre em planilha**:

| Semana | Total | Feitos | A Confirmar | Não Realizados | Taxa |
|--------|-------|--------|-------------|----------------|------|
| 14-20/01 | 42 | 35 | 5 | 2 | 83% |



**Passo 3: Analisar Performance por Dia da Semana**

Para entender se há dias problemáticos:

1. Mude o filtro para cada dia individualmente:
   - Segunda (14/01)
   - Terça (15/01)
   - Quarta (16/01)
   - Quinta (17/01)
   - Sexta (18/01)

2. Anote as métricas de cada dia:

| Dia | Data | Total | Taxa | Não Realizados |
|-----|------|-------|------|----------------|
| Segunda | 14/01 | 8 | 75% | 2 |
| Terça | 15/01 | 10 | 90% | 1 |
| Quarta | 16/01 | 7 | 86% | 1 |
| Quinta | 17/01 | 9 | 78% | 2 |
| Sexta | 18/01 | 8 | 87% | 1 |

**Análise**:
- ✅ **Terça-feira**: Melhor dia (90%)
- ⚠️ **Segunda e quinta**: Dias mais problemáticos (75-78%)
- 💡 **Insight**: Segundas podem ter mais problemas (fim de semana)

**Passo 4: Analisar Performance por Área**

Para cada área, colete as métricas:

1. Aplique filtro **"Esta Semana"**
2. Selecione cada área individualmente
3. Anote as métricas:

| Área | Total | Taxa | Não Realizados | Avaliação |
|------|-------|------|----------------|-----------|
| Trabalhista | 12 | 92% | 0 | 🟢 Excelente |
| Cível | 15 | 87% | 1 | 🟢 Muito Bom |
| Criminal | 8 | 75% | 2 | 🟠 Regular |
| Tributário | 7 | 71% | 2 | 🟠 Regular |

**Análise**:
- ✅ Trabalhista e Cível estão excelentes
- ⚠️ Criminal e Tributário precisam atenção



**Passo 5: Configurar Filtros para Análise Mensal**

1. Clique no filtro de data 📅
2. Selecione **"Este Mês"**
3. Selecione **"Todos os Grupos"**

**Resultado**: Dashboard mostra todas as audiências do mês atual.

**Passo 6: Coletar Métricas Mensais**

```
┌─────────────────────────────────────────────────────────┐
│  PERÍODO: ESTE MÊS (Janeiro 2024)                       │
│                                                         │
│  Check-in Feito: 142  A Confirmar: 18   Não Realizados: 8  │
│  Taxa de Confirmação: 84%                               │
│  Total: 168 audiências                                  │
└─────────────────────────────────────────────────────────┘
```

**Registre em planilha**:

| Mês | Total | Feitos | Taxa | Não Realizados |
|-----|-------|--------|------|----------------|
| Janeiro | 168 | 142 | 84% | 8 |
| Dezembro | 152 | 125 | 82% | 10 |
| Novembro | 145 | 115 | 79% | 12 |

**Análise de Tendência**:
```
Novembro: 79% → Dezembro: 82% → Janeiro: 84%

Tendência: MELHORANDO! 📈 ✅
```

**Passo 7: Identificar Top Performers e Problemáticos**

Analise a lista completa do mês para identificar:

**Top Performers** (Advogados Exemplares):
```
1. João Silva - 15 audiências, 100% confirmação ⭐⭐⭐
2. Maria Souza - 12 audiências, 100% confirmação ⭐⭐⭐
3. Ana Costa - 10 audiências, 90% confirmação ⭐⭐
```

**Advogados Problemáticos**:
```
1. Pedro Santos - 8 audiências, 50% confirmação ⚠️
2. Carlos Lima - 6 audiências, 67% confirmação ⚠️
3. Fernanda Dias - 5 audiências, 60% confirmação ⚠️
```



**Passo 8: Preparar Relatório Executivo**

Com base nos dados coletados, prepare um relatório:

```
═══════════════════════════════════════════════════════════
RELATÓRIO DE PERFORMANCE - SISTEMA DE CHECK-IN
Período: Janeiro 2024
Elaborado por: [Seu Nome]
Data: 31/01/2024
═══════════════════════════════════════════════════════════

1. RESUMO EXECUTIVO
   - Total de audiências: 168
   - Taxa de confirmação: 84% ✅
   - Não realizados: 8 (5%)
   - Tendência: Melhorando (+2% vs mês anterior)

2. PERFORMANCE POR ÁREA
   - Melhor área: Trabalhista (92%)
   - Área que precisa atenção: Tributário (71%)

3. PERFORMANCE POR DIA DA SEMANA
   - Melhor dia: Terça-feira (90%)
   - Dia problemático: Segunda-feira (75%)

4. ADVOGADOS DESTAQUE
   - Top 3: João Silva, Maria Souza, Ana Costa
   - Precisam atenção: Pedro Santos, Carlos Lima

5. AÇÕES RECOMENDADAS
   - Parabenizar top performers
   - Reunião com advogados problemáticos
   - Reforçar treinamento nas segundas-feiras
   - Implementar melhorias na área Tributário

6. METAS PARA PRÓXIMO MÊS
   - Taxa de confirmação: 85%+
   - Reduzir não realizados para menos de 5
   - Melhorar performance de segunda-feira
═══════════════════════════════════════════════════════════
```



#### 💡 Dicas para Análise Eficaz

**Dica 1: Crie uma Planilha de Acompanhamento** 📊

Mantenha uma planilha Excel/Google Sheets com:
- Métricas semanais
- Métricas mensais
- Gráficos de tendência
- Comparações período a período

**Dica 2: Estabeleça Benchmarks** 🎯

Defina metas claras:
- Taxa de confirmação: Mínimo 80%, ideal 85%+
- Não realizados: Máximo 5% do total
- Tempo de resposta: Média de 10 minutos

**Dica 3: Compare com Períodos Anteriores** 📈

Sempre compare:
- Esta semana vs semana passada
- Este mês vs mês passado
- Este trimestre vs trimestre passado

**Dica 4: Identifique Sazonalidades** 📅

Observe se há padrões:
- Segundas-feiras são piores?
- Fim de mês tem mais problemas?
- Férias afetam a performance?

**Dica 5: Compartilhe Resultados** 📢

Divulgue os resultados:
- Envie relatório para gestão
- Compartilhe com a equipe
- Reconheça publicamente top performers
- Ofereça suporte aos que precisam

#### ✅ Resultado Esperado

Ao final da análise semanal/mensal, você deve ter:

✅ **Métricas consolidadas** do período
✅ **Identificação de tendências** (melhorando/piorando)
✅ **Comparação entre áreas** e dias da semana
✅ **Lista de top performers** e problemáticos
✅ **Relatório executivo** completo
✅ **Plano de ação** para próximo período
✅ **Metas estabelecidas** para melhoria contínua

---



### 📅 Caso de Uso 5: Planejamento do Dia Seguinte

#### 🎯 Objetivo

Preparar-se antecipadamente para o dia seguinte, identificando audiências agendadas, possíveis desafios e oportunidades de ação preventiva.

**Quando usar**:
- Final do expediente (17:00-18:00)
- Antes de sair do trabalho
- Para planejar o dia seguinte
- Para identificar situações que precisam atenção especial

**Tempo necessário**: 5-7 minutos.

#### 📋 Passo a Passo

**Passo 1: Configurar Filtro para Amanhã**

1. Abra o dashboard (se ainda não estiver aberto)
2. Clique no filtro de data 📅
3. Selecione o atalho **"Amanhã"**
4. Selecione **"Todos os Grupos"** (ou sua área específica)

**Resultado**: Dashboard mostra apenas as audiências de amanhã.

**Passo 2: Verificar Quantidade de Audiências**

Observe o painel de métricas:

```
┌─────────────────────────────────────────────────────────┐
│  PERÍODO: AMANHÃ (16/01/2024)                           │
│                                                         │
│  Check-in Feito: 0    A Confirmar: 0    Não Realizados: 0  │
│  Taxa de Confirmação: 0%                                │
│  Total: 12 audiências                                   │
└─────────────────────────────────────────────────────────┘
```

**Interpretação**:
- ⚪ Todos os status estão "Nulo" (normal - mensagens ainda não enviadas)
- 📊 **12 audiências** agendadas para amanhã
- 🎯 Você já sabe o volume de trabalho do dia seguinte



**Passo 3: Analisar Distribuição de Horários**

Role para baixo até a lista e observe os horários:

```
┌──────────┬──────────┬──────┬────────────┬──────────────┬──────────────┐
│ Processo │   Data   │ Hora │   Local    │  Advogado    │ Check-in     │
├──────────┼──────────┼──────┼────────────┼──────────────┼──────────────┤
│ 1234567  │ 16/01/24 │08:00 │ 1ª Vara    │ João Silva   │ ⚪ Nulo      │
│ 7654321  │ 16/01/24 │08:30 │ 2ª Vara    │ Maria Souza  │ ⚪ Nulo      │
│ 9876543  │ 16/01/24 │09:00 │ 3ª Vara    │ Pedro Santos │ ⚪ Nulo      │
│ 1111111  │ 16/01/24 │10:00 │ 4ª Vara    │ Ana Costa    │ ⚪ Nulo      │
│ 2222222  │ 16/01/24 │14:00 │ 5ª Vara    │ Carlos Lima  │ ⚪ Nulo      │
│ 3333333  │ 16/01/24 │15:00 │ 6ª Vara    │ João Silva   │ ⚪ Nulo      │
│ ...      │ ...      │ ...  │ ...        │ ...          │ ...          │
└──────────┴──────────┴──────┴────────────┴──────────────┴──────────────┘
```

**Análise de Distribuição**:

| Período | Quantidade | Observação |
|---------|------------|------------|
| Manhã (08:00-12:00) | 7 | Período mais movimentado |
| Tarde (13:00-17:00) | 5 | Período mais tranquilo |
| Horários críticos | 3 audiências às 08:00-08:30 | Atenção redobrada |

**Insights**:
- 🌅 Manhã será mais intensa (7 audiências)
- ⏰ Primeiras audiências (08:00) precisam atenção especial
- 🔄 João Silva tem 2 audiências (verificar se não há conflito)



**Passo 4: Identificar Advogados de Atenção**

Procure na lista advogados que você sabe que são problemáticos:

**Lista de Observação**:
```
✅ João Silva - 2 audiências
   Histórico: Sempre confirma ✅
   Ação: Nenhuma necessária

⚠️ Pedro Santos - 1 audiência (09:00)
   Histórico: Frequentemente não confirma
   Ação: Contato preventivo às 08:00

✅ Maria Souza - 1 audiência (08:30)
   Histórico: Confirma, mas às vezes atrasado
   Ação: Monitorar de perto

⚠️ Carlos Lima - 1 audiência (14:00)
   Histórico: Às vezes não vê mensagens
   Ação: Ligar 1h antes (13:00)
```

**Passo 5: Verificar Possíveis Conflitos**

Identifique situações que podem gerar problemas:

1. **Advogado com múltiplas audiências**:
   - João Silva: 08:00 e 15:00 (OK - horários distantes)
   - Se fossem próximos (ex: 08:00 e 08:30), seria problema

2. **Audiências muito cedo**:
   - 08:00 - Primeira do dia
   - Mensagem será enviada às 07:30
   - Advogado pode não ver a tempo

3. **Audiências em varas distantes**:
   - Verificar se advogado tem tempo de deslocamento
   - Exemplo: 10:00 na 1ª Vara e 11:00 na 10ª Vara



**Passo 6: Criar Plano de Ação para Amanhã**

Com base na análise, crie um plano:

```
═══════════════════════════════════════════════════════════
PLANO DE AÇÃO - 16/01/2024 (AMANHÃ)
═══════════════════════════════════════════════════════════

RESUMO:
- Total de audiências: 12
- Período crítico: Manhã (7 audiências)
- Advogados de atenção: Pedro Santos, Carlos Lima

CRONOGRAMA DE AÇÕES:

07:30 - Chegar ao trabalho
07:45 - Abrir dashboard, filtrar "Hoje"
08:00 - Ligar para Pedro Santos (preventivo)
08:00-12:00 - Monitorar audiências da manhã de perto
10:00 - Verificar status geral no dashboard
13:00 - Ligar para Carlos Lima (preventivo)
14:00-17:00 - Monitorar audiências da tarde
16:00 - Verificação final do dia
17:30 - Preparar para dia seguinte (17/01)

CONTATOS PREVENTIVOS:
1. Pedro Santos (09:00) - Ligar às 08:00
2. Carlos Lima (14:00) - Ligar às 13:00

PONTOS DE ATENÇÃO:
- Audiências muito cedo (08:00, 08:30)
- João Silva com 2 audiências (verificar se está OK)
- Período da manhã mais intenso

METAS DO DIA:
- Taxa de confirmação: 85%+
- Zero não realizados
- Todos os contatos preventivos feitos
═══════════════════════════════════════════════════════════
```



**Passo 7: Fazer Contatos Preventivos (Opcional)**

Se houver advogados muito problemáticos, considere contato no mesmo dia:

```
Mensagem WhatsApp (enviada hoje, 17:30):

"Olá [Nome], tudo bem?

Só para lembrar que você tem audiência amanhã às [Horário]
no processo [Número].

O sistema vai enviar mensagem de confirmação 30 minutos antes.
Por favor, não esqueça de responder!

Qualquer dúvida, estou à disposição.

Abraço,
[Seu Nome]"
```

**Benefício**: Advogado já fica ciente e preparado.

#### 💡 Dicas para Planejamento Eficaz

**Dica 1: Faça Isso Todo Dia** 📅

Crie o hábito de planejar o dia seguinte:
- Sempre no final do expediente
- Leva apenas 5-7 minutos
- Você chega preparado no dia seguinte
- Reduz surpresas e estresse

**Dica 2: Use um Checklist** ✅

Crie um checklist de planejamento:

```
CHECKLIST DE PLANEJAMENTO DIÁRIO:
[ ] Abrir dashboard
[ ] Filtrar "Amanhã"
[ ] Verificar quantidade total de audiências
[ ] Analisar distribuição de horários
[ ] Identificar advogados de atenção
[ ] Verificar possíveis conflitos
[ ] Criar plano de ação
[ ] Fazer contatos preventivos (se necessário)
[ ] Anotar pontos críticos
[ ] Definir metas do dia
```



**Dica 3: Compare com Dias Anteriores** 📊

Veja se amanhã será mais ou menos intenso:

```
Ontem: 8 audiências (dia tranquilo)
Hoje: 10 audiências (dia normal)
Amanhã: 12 audiências (dia mais intenso) ⚠️

Ação: Chegar mais cedo, estar mais atento
```

**Dica 4: Prepare Recursos** 🛠️

Se amanhã será um dia intenso:
- Chegue mais cedo
- Cancele reuniões não urgentes
- Avise a equipe que estará focado
- Tenha telefones dos advogados à mão

**Dica 5: Durma Tranquilo** 😴

Com planejamento adequado:
- Você sabe exatamente o que esperar
- Já tem plano de ação definido
- Contatos preventivos feitos
- Pode descansar tranquilo

#### ✅ Resultado Esperado

Ao final do planejamento do dia seguinte, você deve ter:

✅ **Conhecimento completo** das audiências de amanhã
✅ **Identificação de horários críticos** e períodos intensos
✅ **Lista de advogados** que precisam atenção especial
✅ **Plano de ação detalhado** para o dia
✅ **Contatos preventivos** realizados (se necessário)
✅ **Metas definidas** para o dia seguinte
✅ **Tranquilidade** para encerrar o expediente

**Exemplo de planejamento bem-sucedido**:

```
HOJE (15/01) - 17:30:
✅ Planejamento de amanhã concluído
✅ Identificadas 12 audiências
✅ 2 advogados de atenção identificados
✅ Contatos preventivos agendados
✅ Plano de ação criado
✅ Pronto para amanhã!

AMANHÃ (16/01) - 08:00:
✅ Chego preparado
✅ Sei exatamente o que fazer
✅ Tenho plano de ação claro
✅ Dia produtivo garantido!
```

---



### 🎯 Resumo dos Casos de Uso

Agora que você conhece os 5 casos de uso práticos, aqui está um resumo rápido de quando usar cada um:

| Caso de Uso | Quando Usar | Tempo | Frequência |
|-------------|-------------|-------|------------|
| **1. Monitorar Audiências do Dia** | Durante todo o expediente | 2-3 min | Contínuo |
| **2. Verificar Área Específica** | Quando gerencia uma área | 1-2 min | Diário |
| **3. Identificar Não Confirmados** | Quando há problemas | 2-3 min | Conforme necessário |
| **4. Analisar Performance** | Início de semana/mês | 10-15 min | Semanal/Mensal |
| **5. Planejar Dia Seguinte** | Final do expediente | 5-7 min | Diário |

### 💡 Dicas Gerais para Todos os Casos de Uso

**Dica 1: Combine os Casos de Uso** 🔗

Você não precisa escolher apenas um! Combine-os:

```
ROTINA DIÁRIA IDEAL:

08:00 - Caso 1: Monitorar audiências do dia
08:15 - Caso 2: Focar na minha área específica
10:00 - Caso 1: Verificação intermediária
12:00 - Caso 3: Identificar não confirmados
14:00 - Caso 1: Monitoramento da tarde
17:00 - Caso 5: Planejar dia seguinte

ROTINA SEMANAL:
Segunda 09:00 - Caso 4: Análise semanal

ROTINA MENSAL:
Dia 1 do mês - Caso 4: Análise mensal
```



**Dica 2: Adapte à Sua Realidade** 🎨

Cada gestor tem necessidades diferentes:

**Se você gerencia APENAS uma área**:
- Foque no Caso 2 (Área Específica)
- Use Caso 1 com filtro da sua área
- Caso 4 focado na sua área

**Se você gerencia TODAS as áreas**:
- Use Caso 1 com todos os grupos
- Use Caso 4 para comparar áreas
- Priorize áreas problemáticas

**Se você tem POUCOS advogados problemáticos**:
- Caso 3 será rápido
- Foque mais em Caso 1 e 5

**Se você tem MUITOS advogados problemáticos**:
- Caso 3 será sua prioridade
- Implemente contatos preventivos (Caso 5)
- Use Caso 4 para identificar padrões

**Dica 3: Evolua Gradualmente** 📈

Não tente fazer tudo de uma vez:

```
SEMANA 1: Domine o básico
- Caso 1: Monitoramento diário
- Aprenda a usar filtros
- Familiarize-se com a interface

SEMANA 2: Adicione planejamento
- Continue Caso 1
- Adicione Caso 5 (planejamento)
- Crie rotina de final de dia

SEMANA 3: Adicione análise
- Continue Casos 1 e 5
- Adicione Caso 4 (análise semanal)
- Comece a coletar métricas

SEMANA 4: Domine tudo
- Use todos os 5 casos conforme necessário
- Adapte à sua realidade
- Otimize seu processo
```



**Dica 4: Documente Seu Processo** 📝

Crie seu próprio manual personalizado:

```
MEU PROCESSO PESSOAL DE USO DO DASHBOARD

Área que gerencio: Controle Trabalhista

Rotina Diária:
- 08:00: Abrir dashboard, filtrar Hoje + Trabalhista
- 10:00: Verificação rápida
- 12:00: Identificar não confirmados
- 14:00: Verificação da tarde
- 17:00: Planejar amanhã

Advogados de Atenção:
- Pedro Santos: Sempre ligar preventivamente
- Carlos Lima: Monitorar de perto

Metas Pessoais:
- Taxa de confirmação: 85%+
- Zero não realizados
- Resposta em até 15 minutos

Contatos:
- Suporte técnico: (XX) XXXX-XXXX
- Supervisor: (XX) XXXXX-XXXX
```

**Dica 5: Compartilhe Boas Práticas** 🤝

Se você descobrir algo que funciona bem:
- Compartilhe com outros gestores
- Documente o processo
- Ajude colegas novos
- Contribua para melhorar o sistema

### ✅ Checklist de Domínio dos Casos de Uso

Use este checklist para verificar se você domina todos os casos de uso:

**Caso 1: Monitorar Audiências do Dia**
- [ ] Sei aplicar filtro "Hoje"
- [ ] Sei interpretar o painel de métricas
- [ ] Sei identificar prioridades na lista
- [ ] Sei tomar ações necessárias
- [ ] Deixo o dashboard aberto para monitoramento contínuo

**Caso 2: Verificar Área Específica**
- [ ] Sei filtrar apenas minha área
- [ ] Sei analisar métricas da área
- [ ] Sei comparar com outras áreas
- [ ] Sei identificar padrões na minha área



**Caso 3: Identificar Não Confirmados**
- [ ] Sei localizar audiências não confirmadas rapidamente
- [ ] Sei priorizar por urgência
- [ ] Sei entrar em contato com advogados
- [ ] Sei registrar contatos e respostas
- [ ] Sei identificar padrões de não resposta

**Caso 4: Analisar Performance**
- [ ] Sei coletar métricas semanais
- [ ] Sei coletar métricas mensais
- [ ] Sei analisar performance por área
- [ ] Sei identificar tendências
- [ ] Sei preparar relatório executivo

**Caso 5: Planejar Dia Seguinte**
- [ ] Sei filtrar "Amanhã"
- [ ] Sei analisar distribuição de horários
- [ ] Sei identificar advogados de atenção
- [ ] Sei criar plano de ação
- [ ] Faço isso todo dia no final do expediente

**Uso Integrado**
- [ ] Sei combinar múltiplos casos de uso
- [ ] Tenho uma rotina diária estabelecida
- [ ] Adapto os casos à minha realidade
- [ ] Documento meu processo pessoal
- [ ] Compartilho boas práticas com colegas

### 🎯 Próximos Passos

Parabéns! Você agora domina todos os **casos de uso práticos** do dashboard! 🎉

Na próxima seção, você vai encontrar respostas para as **perguntas mais frequentes** sobre o uso do dashboard.

**Prévia da Próxima Seção**:
- ❓ Perguntas frequentes sobre filtros
- ❓ Perguntas sobre métricas
- ❓ Perguntas sobre status
- ❓ Problemas comuns e soluções
- ❓ Quando entrar em contato com suporte

---

## 10. Perguntas Frequentes (FAQ)

### 📋 Introdução ao FAQ

Esta seção responde às **perguntas mais frequentes** sobre o uso do Dashboard de Check-in de Audiências. As perguntas estão organizadas por categoria para facilitar a consulta.

Se sua dúvida não estiver aqui, entre em contato com o suporte técnico (seção 12).

---

### 🔍 Perguntas sobre Filtros

#### ❓ Por que não vejo nenhuma audiência no dashboard?

**Resposta**: Isso geralmente acontece por causa dos filtros aplicados. Verifique:

1. **Filtro de Grupos**:
   - Clique no botão 👥 "Filtro de Grupos"
   - Verifique se há pelo menos um grupo selecionado
   - Se nenhum grupo estiver marcado, nenhuma audiência aparecerá
   - **Solução**: Clique em "Marcar Todos" para ver todas as audiências

2. **Filtro de Data**:
   - Clique no botão 📅 "Filtro de Data"
   - Verifique qual período está selecionado
   - Pode ser que não haja audiências nesse período
   - **Solução**: Tente selecionar "Hoje" ou "Esta Semana"

3. **Realmente não há audiências**:
   - Se os filtros estão corretos e ainda não aparece nada
   - Pode ser que realmente não haja audiências agendadas
   - Verifique no sistema DataJuri para confirmar

**Exemplo de verificação**:
```
Passo 1: Filtro de Grupos → "Marcar Todos"
Passo 2: Filtro de Data → "Esta Semana"
Passo 3: Se ainda não aparecer nada, não há audiências agendadas
```


#### ❓ Como faço para ver apenas as audiências da minha área?

**Resposta**: Use o filtro de grupos para selecionar apenas sua área:

**Passo a passo**:
1. Clique no botão 👥 "Filtro de Grupos" (canto superior direito)
2. Clique em "Desmarcar Todos" para limpar a seleção
3. Marque apenas o checkbox da sua área
   - Exemplo: Se você gerencia Trabalhista, marque apenas "Controle Trabalhista"
4. O dashboard atualiza automaticamente
5. Agora você vê apenas audiências da sua área

**Dica**: O filtro permanece aplicado mesmo após atualização automática (a cada 2 minutos).

---

#### ❓ Posso salvar meus filtros favoritos?

**Resposta**: **Não, na versão atual** o dashboard não salva filtros automaticamente.

**Workaround**:
- Toda vez que abrir o dashboard, você precisa aplicar os filtros novamente
- Leva apenas alguns segundos:
  1. Clique em 📅 → Selecione "Hoje"
  2. Clique em 👥 → Selecione sua área
  3. Pronto!

**Futuro**: Nas próximas versões, planejamos implementar:
- Salvamento automático de filtros
- Perfis de filtros personalizados
- Filtros padrão por usuário


#### ❓ O filtro de data "Esta Semana" considera qual dia como início da semana?

**Resposta**: O filtro "Esta Semana" considera **domingo como primeiro dia** da semana e **sábado como último dia**.

**Exemplo**:
```
Se hoje é quarta-feira, 17/01/2024:

"Esta Semana" mostrará audiências de:
- Domingo, 14/01/2024 (início)
- até Sábado, 20/01/2024 (fim)
```

**Importante**: Isso segue o padrão brasileiro de calendário.

---

#### ❓ Posso filtrar por advogado específico?

**Resposta**: **Não, na versão atual** não há filtro por advogado.

**Workaround**:
1. Aplique os filtros de data e grupo normalmente
2. Use a busca do navegador (Ctrl+F ou Cmd+F)
3. Digite o nome do advogado
4. O navegador destacará todas as ocorrências na lista

**Exemplo**:
```
Ctrl+F → Digite "João Silva" → Enter
O navegador mostrará todas as audiências de João Silva
```

**Futuro**: Planejamos adicionar:
- Filtro por advogado
- Filtro por vara/local
- Filtro por número de processo
- Busca avançada


---

### 📊 Perguntas sobre Métricas

#### ❓ Por que as métricas mudaram de repente?

**Resposta**: As métricas podem mudar por **dois motivos principais**:

**1. Atualização Automática** 🔄
- O dashboard atualiza automaticamente **a cada 2 minutos**
- Busca novos dados do servidor
- Se algum advogado confirmou presença, as métricas mudam
- **Isso é normal e esperado!**

**Exemplo**:
```
14:00 - Check-in Feito: 8
14:02 - Advogado confirma presença
14:02 - Check-in Feito: 9 (aumentou!)
```

**2. Você Mudou os Filtros** 🔍
- Quando você aplica ou remove filtros, as métricas recalculam
- Elas consideram APENAS as audiências que passam pelos filtros
- **Isso também é normal!**

**Exemplo**:
```
Antes: Todos os Grupos → Check-in Feito: 10
Depois: Apenas Trabalhista → Check-in Feito: 3
(Porque apenas 3 dos 10 são da área Trabalhista)
```

**Como saber qual foi o motivo**:
- Se você não tocou em nada: Foi atualização automática
- Se você acabou de mudar filtros: Foi por causa dos filtros


#### ❓ A Taxa de Confirmação está diferente do que eu calculei. Por quê?

**Resposta**: Verifique se você está usando a **mesma fórmula** que o sistema:

**Fórmula do Sistema**:
```
Taxa de Confirmação = (Check-ins Feitos ÷ Total de Audiências) × 100
```

**Importante**: O sistema considera:
- ✅ **Check-ins Feitos**: Apenas status "Confirmado/Feito/Realizado"
- ❌ **NÃO considera**: "A Confirmar" ou "Nulo"
- 📊 **Total**: TODAS as audiências (incluindo Nulo, A Confirmar, Não Realizados)

**Exemplo de cálculo correto**:
```
Check-in Feito: 8
A Confirmar: 2
Não Realizados: 1
Nulo: 1
Total: 12 audiências

Taxa = (8 ÷ 12) × 100 = 66,67%
```

**Erro comum**:
```
❌ ERRADO: (8 ÷ 10) × 100 = 80%
(Não deve excluir os "Nulo" do total)

✅ CERTO: (8 ÷ 12) × 100 = 66,67%
(Deve incluir TODAS as audiências)
```

**Dica**: Confie no cálculo do sistema - ele está correto!


#### ❓ O que é uma boa Taxa de Confirmação?

**Resposta**: Depende do contexto, mas aqui estão os **benchmarks recomendados**:

| Taxa | Avaliação | Significado | Ação |
|------|-----------|-------------|------|
| **90-100%** | 🟢 Excelente | Processo funcionando perfeitamente | Continue assim! |
| **80-89%** | 🟢 Muito Bom | Boa performance, pequenas melhorias possíveis | Mantenha o padrão |
| **70-79%** | 🟡 Bom | Performance aceitável, mas pode melhorar | Identifique gargalos |
| **60-69%** | 🟠 Regular | Há problemas no processo | Ação necessária |
| **Abaixo de 60%** | 🔴 Crítico | Processo com falhas graves | Ação urgente! |

**Fatores que afetam a taxa**:
- 📅 **Dia da semana**: Segundas-feiras tendem a ser piores
- 🕐 **Horário**: Audiências muito cedo podem ter taxa menor
- 👥 **Área**: Algumas áreas podem ter performance diferente
- 📱 **Problemas técnicos**: WhatsApp fora do ar, telefones errados

**Meta recomendada**: Manter taxa **acima de 80%** consistentemente.

---

#### ❓ Por que o card "A Confirmar" está sempre mudando?

**Resposta**: Isso é **completamente normal** e esperado!

**Por que muda tanto**:
1. **Mensagens sendo enviadas**: Quando o sistema envia uma nova mensagem de check-in, o número aumenta
2. **Advogados respondendo**: Quando um advogado confirma, o número diminui
3. **Timeout de mensagens**: Quando passa o horário e advogado não respondeu, vira "Não Realizado"

**Exemplo de evolução durante o dia**:
```
08:00 - A Confirmar: 0 (nenhuma mensagem enviada ainda)
09:30 - A Confirmar: 3 (3 mensagens enviadas, aguardando resposta)
10:00 - A Confirmar: 2 (1 advogado confirmou)
10:30 - A Confirmar: 5 (mais 3 mensagens enviadas)
11:00 - A Confirmar: 3 (2 advogados confirmaram)
```

**Quando se preocupar**:
- ⚠️ Se o número está **muito alto** (mais de 5-10)
- ⚠️ Se está **próximo do horário** das audiências (menos de 15 min)
- ⚠️ Se o número **não diminui** ao longo do tempo

**Dica**: É normal ter flutuação. Monitore, mas não se preocupe com mudanças pequenas.


---

### ✅ Perguntas sobre Status

#### ❓ Qual a diferença entre Check-in e Check-out?

**Resposta**: São **dois momentos diferentes** do processo de confirmação:

**Check-in** 📥 (ANTES da audiência):
- **Quando**: 30 minutos **antes** do horário da audiência
- **Pergunta**: "Você confirma a realização da audiência?"
- **Objetivo**: Confirmar que o advogado **vai comparecer**
- **Importância**: ALTA - permite ação preventiva se não confirmar

**Check-out** 📤 (DEPOIS da audiência):
- **Quando**: 30 minutos **após** o início da audiência
- **Pergunta**: "Você participou da audiência?"
- **Objetivo**: Confirmar que o advogado **compareceu**
- **Importância**: MÉDIA - serve para registro e controle

**Exemplo de linha do tempo**:
```
13:30 - 📥 Check-in enviado (30 min antes)
13:35 - ✅ Advogado confirma check-in
14:00 - 🏛️ Audiência acontece
14:30 - 📤 Check-out enviado (30 min depois)
14:35 - ✅ Advogado confirma check-out
```

**Situação ideal**: Ambos confirmados (✅ Check-in + ✅ Check-out)


#### ❓ O advogado confirmou check-in mas não fez check-out. O que fazer?

**Resposta**: Isso pode acontecer por **vários motivos**. Veja como proceder:

**Possíveis causas**:
1. **Advogado está ocupado**: Ainda está na audiência ou em outra atividade
2. **Esqueceu de responder**: Viu a mensagem mas não respondeu
3. **Não viu a mensagem**: Telefone sem bateria, sem internet, etc.
4. **Audiência foi cancelada**: Cancelamento de última hora

**O que fazer**:

**Passo 1: Aguarde um tempo razoável**
- Se passou menos de 1 hora: É normal, aguarde
- Se passou 1-2 horas: Considere entrar em contato
- Se passou mais de 2 horas: Entre em contato

**Passo 2: Verifique se a audiência aconteceu**
- Consulte o sistema DataJuri
- Veja se há registro de cancelamento
- Confirme se a audiência realmente ocorreu

**Passo 3: Entre em contato com o advogado**
```
Mensagem sugerida:

"Olá [Nome], tudo bem?

Vi que você tinha audiência às [Horário] hoje.
A audiência ocorreu normalmente?

Por favor, responda a mensagem do sistema
para confirmar.

Obrigado!"
```

**Passo 4: Registre a situação**
- Anote que entrou em contato
- Registre a resposta do advogado
- Documente se houve algum problema

**Quando se preocupar**:
- 🔴 **Crítico**: Se isso acontece frequentemente com o mesmo advogado
- 🟠 **Atenção**: Se o advogado não responde seu contato
- 🟡 **Normal**: Se acontece ocasionalmente


#### ❓ O status está "Nulo" mas já passou o horário de enviar a mensagem. É um bug?

**Resposta**: Pode ser um **problema técnico**. Veja como diagnosticar:

**Horários de envio esperados**:
- **Check-in**: 30 minutos antes da audiência
- **Check-out**: 30 minutos após o início da audiência

**Exemplo**:
```
Audiência às 14:00:
- Check-in deveria ser enviado às 13:30
- Check-out deveria ser enviado às 14:30

Se já passou desses horários e ainda está "Nulo" → Problema!
```

**Possíveis causas**:

**1. Advogado sem telefone cadastrado**
- Sistema não consegue enviar mensagem
- Supervisor recebe alerta no lugar
- **Solução**: Cadastrar telefone do advogado

**2. Problema técnico no sistema**
- Servidor fora do ar
- Erro no envio de mensagens
- Problema com WhatsApp
- **Solução**: Entrar em contato com suporte técnico

**3. Audiência foi cadastrada após o horário de envio**
- Se audiência foi adicionada depois das 13:30 (para audiência às 14:00)
- Sistema não envia mensagem retroativa
- **Solução**: Contato manual com advogado

**O que fazer**:

1. **Verifique o horário atual** vs horário esperado de envio
2. **Recarregue a página** (F5) para garantir que não é cache
3. **Aguarde 5 minutos** (pode ser atraso temporário)
4. **Se persistir**: Entre em contato com suporte técnico

**Informações para o suporte**:
- ID da audiência
- Número do processo
- Horário da audiência
- Horário atual
- Screenshot do dashboard


#### ❓ Posso mudar o status de uma audiência manualmente?

**Resposta**: **Não, na versão atual** não é possível alterar status manualmente pelo dashboard.

**Por quê?**
- Os status refletem as **respostas reais** dos advogados
- Alterar manualmente comprometeria a integridade dos dados
- O sistema é automatizado para garantir precisão

**O que você PODE fazer**:

**Se o advogado confirmou por outro meio** (telefone, e-mail):
1. Oriente o advogado a responder a mensagem do sistema
2. Isso garante que o registro fique correto
3. Se o advogado não puder responder, documente externamente

**Se houver erro no sistema**:
1. Entre em contato com o suporte técnico
2. Eles podem corrigir no banco de dados
3. Forneça evidências (prints, e-mails, etc.)

**Futuro**: Planejamos implementar:
- Correção manual de status (com justificativa)
- Log de alterações manuais
- Permissões por nível de usuário

---

### 🔄 Perguntas sobre Atualização

#### ❓ Com que frequência o dashboard atualiza?

**Resposta**: O dashboard atualiza **automaticamente a cada 2 minutos**.

**O que isso significa**:
- ✅ Você não precisa recarregar a página (F5)
- ✅ Novos dados aparecem automaticamente
- ✅ Status são atualizados em tempo real
- ✅ Métricas recalculam sozinhas

**Exemplo**:
```
14:00:00 - Dashboard mostra: Check-in Feito: 8
14:01:30 - Advogado confirma presença
14:02:00 - Dashboard atualiza automaticamente
14:02:00 - Dashboard mostra: Check-in Feito: 9
```

**Importante**:
- Os **filtros aplicados são mantidos** após atualização
- Você **não perde sua posição** na lista
- A atualização é **silenciosa** (não há indicador visual)

**Dica**: Deixe o dashboard aberto em uma aba separada para monitoramento contínuo!


#### ❓ Posso forçar uma atualização manual?

**Resposta**: **Sim!** Você pode recarregar a página a qualquer momento.

**Como fazer**:
- **Windows**: Pressione `F5` ou `Ctrl + R`
- **Mac**: Pressione `Cmd + R`
- **Qualquer navegador**: Clique no botão de recarregar (🔄)

**Quando fazer isso**:
- ✅ Se você acha que os dados estão desatualizados
- ✅ Se o dashboard parece travado
- ✅ Se você quer ver mudanças imediatamente (não quer esperar 2 minutos)
- ✅ Se houve algum problema visual

**Atenção**: 
- ⚠️ Recarregar a página **não mantém os filtros aplicados**
- ⚠️ Você precisará aplicar os filtros novamente
- ⚠️ Por isso, é melhor confiar na atualização automática

**Dica**: Use atualização manual apenas quando realmente necessário!

---

#### ❓ Como sei se o dashboard está atualizado?

**Resposta**: Não há indicador visual de atualização, mas você pode verificar de outras formas:

**Método 1: Observe mudanças nos números**
- Se você vê os números das métricas mudando
- Significa que o dashboard está atualizando

**Método 2: Verifique o horário de confirmação**
- Na lista, olhe os horários de confirmação
- Se aparecem horários recentes, está atualizado

**Método 3: Compare com o banco de dados**
- Se você tem acesso ao banco de dados
- Compare os dados do dashboard com o banco
- Devem estar iguais (com no máximo 2 minutos de diferença)

**Método 4: Teste com uma confirmação**
- Peça para um advogado confirmar presença
- Aguarde até 2 minutos
- Veja se o status muda no dashboard

**Se o dashboard NÃO está atualizando**:
1. Verifique sua conexão com a internet
2. Recarregue a página (F5)
3. Limpe o cache do navegador
4. Tente outro navegador
5. Entre em contato com suporte técnico


---

### 📱 Perguntas sobre Dispositivos e Acesso

#### ❓ O dashboard funciona no celular?

**Resposta**: **Sim!** O dashboard é totalmente responsivo e funciona perfeitamente em celulares.

**Diferenças na versão mobile**:
- 📋 **Lista em formato de cards** (em vez de tabela)
- 📊 **Métricas empilhadas verticalmente** (em vez de lado a lado)
- 🔽 **Filtros em menus dropdown compactos**
- 👆 **Navegação otimizada para toque**

**Dicas para uso no celular**:
1. **Use modo paisagem** (horizontal) para ver mais informações
2. **Adicione à tela inicial** para acesso rápido
3. **Mantenha o celular carregado** (dashboard consome bateria)
4. **Use Wi-Fi quando possível** (economiza dados móveis)

**Limitações no celular**:
- ⚠️ Tela menor = menos informações visíveis de uma vez
- ⚠️ Pode ser mais difícil comparar múltiplas audiências
- ⚠️ Rolagem pode ser mais trabalhosa

**Recomendação**: 
- ✅ **Celular**: Ótimo para consultas rápidas e monitoramento móvel
- ✅ **Computador**: Melhor para análise detalhada e trabalho prolongado


#### ❓ Posso usar o dashboard em múltiplos dispositivos ao mesmo tempo?

**Resposta**: **Sim!** Você pode abrir o dashboard em quantos dispositivos quiser simultaneamente.

**Exemplos de uso**:
- 💻 Computador do escritório (tela principal)
- 📱 Celular (para quando estiver fora da mesa)
- 📱 Tablet (para reuniões e apresentações)

**Como funciona**:
- Cada dispositivo atualiza independentemente a cada 2 minutos
- Todos mostram os mesmos dados (sincronizados pelo servidor)
- Filtros aplicados em um dispositivo NÃO afetam outros

**Exemplo prático**:
```
Computador: Filtrado para "Hoje" + "Todas as Áreas"
Celular: Filtrado para "Amanhã" + "Apenas Trabalhista"

Ambos funcionam independentemente!
```

**Dica**: Deixe o dashboard aberto no computador para monitoramento contínuo e use o celular para consultas rápidas quando estiver fora da mesa.

---

#### ❓ Preciso estar conectado à internet para usar o dashboard?

**Resposta**: **Sim, sempre!** O dashboard precisa de conexão com a internet para funcionar.

**Por quê?**
- Os dados estão no servidor (não no seu dispositivo)
- O dashboard busca dados atualizados a cada 2 minutos
- Sem internet, não há como buscar os dados

**O que acontece se a internet cair**:
- ❌ Dashboard para de atualizar
- ❌ Você continua vendo os últimos dados carregados
- ❌ Filtros podem não funcionar
- ⚠️ Dados podem estar desatualizados

**Como saber se está sem internet**:
- Dashboard não atualiza (números não mudam)
- Filtros não respondem
- Página pode mostrar erro de conexão

**O que fazer**:
1. Verifique sua conexão Wi-Fi ou dados móveis
2. Tente abrir outro site (ex: google.com)
3. Reconecte à internet
4. Recarregue o dashboard (F5)

**Futuro**: Planejamos implementar modo offline com:
- Cache de dados recentes
- Indicador de status de conexão
- Sincronização automática ao reconectar


---

### 🔧 Perguntas sobre Problemas Técnicos

#### ❓ O dashboard está muito lento. O que fazer?

**Resposta**: Lentidão pode ter várias causas. Veja como resolver:

**Causa 1: Conexão com a internet lenta**
- **Teste**: Abra fast.com para medir velocidade
- **Solução**: 
  - Conecte a uma rede Wi-Fi mais rápida
  - Feche outros programas que usam internet
  - Reinicie seu roteador

**Causa 2: Muitas abas abertas no navegador**
- **Teste**: Feche outras abas e veja se melhora
- **Solução**:
  - Feche abas que não está usando
  - Reinicie o navegador
  - Use um navegador mais leve (Chrome é recomendado)

**Causa 3: Cache do navegador cheio**
- **Solução**:
  - Limpe o cache: Ctrl+Shift+Delete (Windows) ou Cmd+Shift+Delete (Mac)
  - Selecione "Imagens e arquivos em cache"
  - Clique em "Limpar dados"

**Causa 4: Computador com pouca memória**
- **Teste**: Abra o Gerenciador de Tarefas (Ctrl+Shift+Esc)
- **Solução**:
  - Feche programas que não está usando
  - Reinicie o computador
  - Considere upgrade de memória RAM

**Causa 5: Servidor sobrecarregado**
- **Teste**: Pergunte a colegas se também está lento para eles
- **Solução**: Entre em contato com suporte técnico

**Dica**: Na maioria dos casos, limpar o cache resolve!


#### ❓ O dashboard não carrega. O que fazer?

**Resposta**: Siga este passo a passo de troubleshooting:

**Passo 1: Verifique a URL**
- ✅ Certifique-se de que digitou corretamente: `https://dashboard.mosello.net.br`
- ✅ Não esqueça o "https://"
- ✅ Não adicione espaços antes ou depois

**Passo 2: Verifique sua conexão com a internet**
- Tente abrir outro site (ex: google.com)
- Se não abrir, o problema é sua internet
- Reconecte ao Wi-Fi ou dados móveis

**Passo 3: Tente outro navegador**
- Se usa Chrome, tente Firefox ou Edge
- Se funcionar em outro navegador, o problema é o navegador atual
- Atualize ou reinstale o navegador problemático

**Passo 4: Limpe o cache**
- Ctrl+Shift+Delete (Windows) ou Cmd+Shift+Delete (Mac)
- Selecione "Imagens e arquivos em cache"
- Clique em "Limpar dados"
- Tente acessar novamente

**Passo 5: Desabilite extensões do navegador**
- Algumas extensões podem bloquear o dashboard
- Teste em modo anônimo/privado: Ctrl+Shift+N (Chrome)
- Se funcionar, o problema é uma extensão

**Passo 6: Verifique firewall/antivírus**
- Firewall pode estar bloqueando o acesso
- Adicione o dashboard às exceções
- Ou desabilite temporariamente para testar

**Passo 7: Entre em contato com suporte**
- Se nada funcionou, o problema pode ser no servidor
- Forneça:
  - Navegador e versão
  - Sistema operacional
  - Mensagem de erro (se houver)
  - Screenshot da tela


#### ❓ Os dados do dashboard estão diferentes do banco de dados. Por quê?

**Resposta**: Pode haver uma pequena diferença devido à **atualização automática**.

**Diferença normal** (até 2 minutos):
- Dashboard atualiza a cada 2 minutos
- Banco de dados é atualizado em tempo real
- Pode haver até 2 minutos de diferença
- **Isso é normal e esperado!**

**Exemplo**:
```
14:00:00 - Advogado confirma no WhatsApp
14:00:01 - Banco de dados atualiza imediatamente
14:02:00 - Dashboard atualiza (2 minutos depois)

Entre 14:00 e 14:02: Dashboard e banco estão diferentes
Após 14:02: Dashboard e banco estão iguais
```

**Diferença grande** (mais de 5 minutos):
- ⚠️ Pode ser um problema técnico
- Recarregue a página (F5)
- Se persistir, entre em contato com suporte

**Como verificar**:
1. Anote o horário atual
2. Verifique os dados no dashboard
3. Verifique os dados no banco
4. Compare
5. Se diferença > 5 minutos: Problema!

**Dica**: Sempre considere a diferença de até 2 minutos como normal.

---

### 💾 Perguntas sobre Dados e Exportação

#### ❓ Posso exportar os dados do dashboard?

**Resposta**: **Não, na versão atual** não há função de exportação direta.

**Workarounds**:

**Opção 1: Screenshot**
- Tire print da tela (Print Screen ou Cmd+Shift+4)
- Cole em documento ou apresentação
- Útil para relatórios visuais

**Opção 2: Copiar e colar**
- Selecione os dados na lista (Ctrl+A)
- Copie (Ctrl+C)
- Cole em Excel ou Google Sheets (Ctrl+V)
- Pode precisar de formatação manual

**Opção 3: Solicitar ao suporte**
- Entre em contato com suporte técnico
- Solicite exportação de dados específicos
- Eles podem gerar relatório em Excel/CSV

**Futuro**: Planejamos implementar:
- Botão "Exportar para Excel"
- Exportação em PDF
- Relatórios personalizados
- Agendamento de relatórios automáticos


#### ❓ Por quanto tempo os dados ficam armazenados?

**Resposta**: Os dados são armazenados **permanentemente** no banco de dados.

**O que isso significa**:
- ✅ Você pode consultar audiências de qualquer data passada
- ✅ Histórico completo está disponível
- ✅ Dados não são deletados automaticamente
- ✅ Útil para análises de longo prazo

**Como acessar dados antigos**:
1. Use o filtro de data personalizado
2. Selecione a data inicial e final desejadas
3. O dashboard mostrará todas as audiências desse período

**Exemplo**:
```
Para ver audiências de janeiro de 2023:
- Data Inicial: 01/01/2023
- Data Final: 31/01/2023
```

**Limitações**:
- ⚠️ Períodos muito longos (ex: 1 ano inteiro) podem demorar para carregar
- ⚠️ Recomendamos consultar no máximo 3 meses por vez

**Dica**: Para análises históricas, use períodos menores (semana ou mês) para melhor performance.

---

### 🎯 Perguntas sobre Uso e Boas Práticas

#### ❓ Com que frequência devo verificar o dashboard?

**Resposta**: Depende do seu papel e responsabilidades, mas aqui estão as **recomendações**:

**Monitoramento Intensivo** (Gestor de Pauta Principal):
```
08:00 - Verificação inicial do dia
09:00 - Verificação intermediária
10:00 - Verificação intermediária
11:00 - Verificação intermediária
12:00 - Verificação antes do almoço
14:00 - Verificação pós-almoço
15:00 - Verificação intermediária
16:00 - Verificação intermediária
17:00 - Verificação final + planejamento de amanhã
```
**Frequência**: A cada 1-2 horas

**Monitoramento Moderado** (Gestor de Área Específica):
```
08:00 - Verificação inicial
10:00 - Verificação da manhã
14:00 - Verificação da tarde
17:00 - Verificação final
```
**Frequência**: 3-4 vezes por dia

**Monitoramento Leve** (Supervisor Ocasional):
```
09:00 - Verificação matinal
16:00 - Verificação final
```
**Frequência**: 2 vezes por dia

**Dica**: Deixe o dashboard aberto em uma aba separada. Com atualização automática, você pode monitorar continuamente sem esforço!


#### ❓ Posso compartilhar o dashboard com outras pessoas?

**Resposta**: **Sim**, mas com algumas considerações:

**Compartilhamento da URL**:
- ✅ Você pode compartilhar a URL: `https://dashboard.mosello.net.br`
- ✅ Qualquer pessoa com acesso à rede pode abrir
- ⚠️ Na versão atual, não há controle de acesso (sem login)

**Quem pode acessar**:
- ✅ Gestores de pauta
- ✅ Supervisores
- ✅ Equipe de gestão
- ✅ Equipe técnica
- ⚠️ Considere se é apropriado para advogados (eles veem dados de todos)

**Boas práticas de compartilhamento**:
1. **Compartilhe apenas com pessoas autorizadas**
2. **Explique como usar** (envie este manual!)
3. **Defina expectativas** (para que serve, como usar)
4. **Monitore o uso** (veja se estão usando corretamente)

**Futuro**: Nas próximas versões, teremos:
- Sistema de login
- Controle de acesso por perfil
- Permissões personalizadas
- Dashboards personalizados por usuário

**Dica**: Por enquanto, compartilhe apenas com pessoas de confiança que precisam realmente ter acesso aos dados.

---

#### ❓ O que fazer se eu encontrar um erro ou bug?

**Resposta**: Reporte imediatamente ao suporte técnico! Sua ajuda é valiosa para melhorar o sistema.

**Informações para incluir no reporte**:

**1. Descrição do problema**:
```
Exemplo:
"Quando clico no filtro de grupos, o dropdown não abre"
```

**2. Passos para reproduzir**:
```
Exemplo:
1. Abri o dashboard
2. Cliquei no botão "Filtro de Grupos"
3. Nada aconteceu
4. Tentei 3 vezes, mesmo resultado
```

**3. Comportamento esperado**:
```
Exemplo:
"Deveria abrir um dropdown com lista de grupos"
```

**4. Comportamento atual**:
```
Exemplo:
"Nada acontece, botão não responde"
```

**5. Informações técnicas**:
- Navegador e versão (ex: Chrome 120)
- Sistema operacional (ex: Windows 11)
- Dispositivo (ex: Computador Dell)
- Data e hora do problema
- Screenshot ou vídeo (se possível)

**Como enviar**:
- **E-mail**: suporte@mosello.net.br
- **Assunto**: [BUG] Dashboard - [Descrição breve]
- **Anexos**: Screenshots, vídeos

**O que acontece depois**:
1. Suporte técnico recebe seu reporte
2. Equipe investiga o problema
3. Correção é implementada
4. Você recebe feedback sobre a resolução

**Dica**: Quanto mais detalhes você fornecer, mais rápido o problema será resolvido!


---

### 🆘 Perguntas sobre Suporte

#### ❓ Quando devo entrar em contato com o suporte técnico?

**Resposta**: Entre em contato com o suporte nas seguintes situações:

**Problemas Técnicos** 🔧:
- ❌ Dashboard não carrega
- ❌ Dashboard está muito lento (após tentar soluções básicas)
- ❌ Dados parecem incorretos ou desatualizados
- ❌ Filtros não funcionam
- ❌ Erros aparecem na tela
- ❌ Atualização automática parou de funcionar

**Problemas de Dados** 💾:
- ❌ Status está "Nulo" mas já passou o horário de envio
- ❌ Audiência não aparece no dashboard mas está no DataJuri
- ❌ Dados do dashboard diferentes do banco de dados (diferença > 5 min)
- ❌ Métricas parecem incorretas

**Solicitações** 📝:
- 📊 Precisa de exportação de dados
- 📊 Precisa de relatório personalizado
- 📞 Precisa cadastrar/atualizar telefone de advogado
- 💡 Tem sugestão de melhoria
- 📚 Precisa de treinamento adicional

**Dúvidas** ❓:
- ❓ Não conseguiu resolver com este manual
- ❓ Precisa de esclarecimento sobre funcionalidade
- ❓ Quer entender melhor como algo funciona

**NÃO precisa entrar em contato para**:
- ✅ Dúvidas respondidas neste manual (consulte primeiro!)
- ✅ Problemas que você consegue resolver sozinho (cache, filtros, etc.)
- ✅ Diferenças de até 2 minutos entre dashboard e banco (normal!)
- ✅ Status "Nulo" antes do horário de envio (aguarde!)


#### ❓ Como entrar em contato com o suporte técnico?

**Resposta**: Há várias formas de entrar em contato:

**E-mail** 📧 (Recomendado para problemas não urgentes):
- **Endereço**: suporte@mosello.net.br
- **Quando usar**: Bugs, dúvidas, solicitações
- **Tempo de resposta**: 1 dia útil
- **Vantagem**: Você pode anexar screenshots e documentos

**Telefone** 📞 (Para problemas urgentes):
- **Número**: (XX) XXXX-XXXX
- **Quando usar**: Dashboard fora do ar, problemas críticos
- **Horário**: Segunda a sexta, 9h às 18h
- **Tempo de resposta**: Imediato

**WhatsApp** 💬 (Para dúvidas rápidas):
- **Número**: (XX) XXXXX-XXXX
- **Quando usar**: Dúvidas rápidas, problemas simples
- **Horário**: Segunda a sexta, 9h às 18h
- **Tempo de resposta**: 30 minutos

**Ticket Interno** 🎫 (Se sua empresa usa sistema de tickets):
- **Sistema**: [Nome do sistema de tickets]
- **Categoria**: Suporte Técnico > Dashboard
- **Quando usar**: Qualquer tipo de solicitação
- **Tempo de resposta**: Conforme SLA da empresa

**Modelo de solicitação por e-mail**:
```
Assunto: [URGENTE/NORMAL] - Dashboard - [Descrição breve]

Olá, equipe de suporte!

Preciso de ajuda com o Dashboard de Check-in de Audiências.

PROBLEMA/DÚVIDA:
[Descreva detalhadamente o problema ou dúvida]

INFORMAÇÕES TÉCNICAS:
- Navegador: Chrome 120
- Sistema: Windows 11
- Dispositivo: Computador
- Data/Hora: 15/01/2024 às 14:30

PASSOS PARA REPRODUZIR (se aplicável):
1. [Passo 1]
2. [Passo 2]
3. [Passo 3]

URGÊNCIA:
[ ] Crítico - Dashboard fora do ar
[ ] Urgente - Afeta trabalho atual
[X] Normal - Pode aguardar

ANEXOS:
- Screenshot do problema
- [Outros anexos relevantes]

Obrigado!

[Seu Nome]
[Seu Cargo]
[Seu Telefone]
```

**Dica**: Quanto mais informações você fornecer, mais rápido o suporte poderá ajudar!


---

### 💡 Perguntas sobre Melhorias e Futuro

#### ❓ Posso sugerir melhorias para o dashboard?

**Resposta**: **Sim, por favor!** Suas sugestões são muito valiosas para melhorar o sistema.

**Como sugerir melhorias**:

**1. Por e-mail**:
```
Assunto: [SUGESTÃO] Dashboard - [Título da sugestão]

Olá, equipe!

Tenho uma sugestão para melhorar o Dashboard de Check-in:

SUGESTÃO:
[Descreva sua ideia]

PROBLEMA QUE RESOLVE:
[Explique que problema sua sugestão resolve]

BENEFÍCIOS:
[Liste os benefícios da implementação]

EXEMPLO DE USO:
[Dê um exemplo prático de como seria usado]

Obrigado!
[Seu Nome]
```

**2. Em reuniões de feedback**:
- Participe de reuniões de feedback (se houver)
- Apresente suas ideias
- Discuta com outros usuários

**3. Por formulário de feedback** (se disponível):
- Acesse o formulário de feedback
- Preencha com sua sugestão
- Envie

**Tipos de sugestões bem-vindas**:
- ✅ Novas funcionalidades
- ✅ Melhorias na interface
- ✅ Novos filtros ou visualizações
- ✅ Relatórios adicionais
- ✅ Integrações com outros sistemas
- ✅ Melhorias de performance
- ✅ Melhorias de usabilidade

**O que acontece com sua sugestão**:
1. Equipe técnica recebe e analisa
2. Avalia viabilidade técnica
3. Prioriza conforme impacto e esforço
4. Implementa em versões futuras
5. Você recebe feedback sobre o status

**Dica**: Sugestões bem detalhadas e com exemplos práticos têm mais chance de serem implementadas!


#### ❓ Quais melhorias estão planejadas para o futuro?

**Resposta**: Há várias melhorias planejadas! Aqui está um preview:

**Curto Prazo** (Próximos 3 meses):
- 🔐 **Sistema de login e autenticação**
- 👤 **Perfis de usuário personalizados**
- 💾 **Exportação de dados para Excel/PDF**
- 🔔 **Notificações em tempo real**
- 📊 **Gráficos e visualizações adicionais**

**Médio Prazo** (3-6 meses):
- 🔍 **Filtros avançados** (por advogado, vara, processo)
- 📱 **App mobile nativo** (iOS e Android)
- 🤖 **Alertas inteligentes personalizáveis**
- 📈 **Dashboard de analytics avançado**
- 🔄 **Integração com outros sistemas**

**Longo Prazo** (6-12 meses):
- 🧠 **Inteligência artificial para previsões**
- 📊 **Relatórios automáticos agendados**
- 🎯 **Metas e KPIs personalizados**
- 👥 **Gestão de equipes e permissões**
- 🌐 **API pública para integrações**

**Como acompanhar**:
- Fique atento a e-mails de atualização
- Verifique o changelog do sistema
- Participe de reuniões de apresentação de novas funcionalidades

**Dica**: Suas sugestões podem acelerar a implementação de funcionalidades! Não hesite em compartilhar suas ideias.

---

### 📚 Perguntas sobre Treinamento

#### ❓ Há treinamento disponível para usar o dashboard?

**Resposta**: **Sim!** Há várias opções de treinamento:

**1. Este Manual** 📖:
- Documentação completa
- Exemplos práticos
- Casos de uso detalhados
- Sempre disponível para consulta

**2. Vídeos Tutoriais** 🎥 (se disponíveis):
- Vídeos curtos explicando cada funcionalidade
- Demonstrações práticas
- Disponíveis no portal interno

**3. Treinamento Presencial** 👨‍🏫:
- Sessões de treinamento com a equipe técnica
- Hands-on com o sistema
- Tire dúvidas ao vivo
- Solicite ao suporte técnico

**4. Treinamento Online** 💻:
- Webinars ao vivo
- Sessões de Q&A
- Gravações disponíveis depois

**5. Suporte One-on-One** 🤝:
- Sessão individual com técnico
- Focada nas suas necessidades específicas
- Agende com o suporte

**Como solicitar treinamento**:
```
E-mail: suporte@mosello.net.br
Assunto: Solicitação de Treinamento - Dashboard

Olá!

Gostaria de solicitar treinamento sobre o Dashboard de Check-in.

Preferência:
[ ] Presencial
[ ] Online
[ ] Individual
[ ] Em grupo

Disponibilidade:
[Informe dias e horários disponíveis]

Tópicos de interesse:
[Liste o que gostaria de aprender]

Obrigado!
[Seu Nome]
```

**Dica**: Mesmo após treinamento, mantenha este manual à mão para consultas rápidas!


---

### ✅ Resumo das Perguntas Mais Importantes

Para consulta rápida, aqui estão as **10 perguntas mais frequentes**:

| # | Pergunta | Resposta Rápida |
|---|----------|-----------------|
| 1 | Por que não vejo audiências? | Verifique os filtros (grupos e data) |
| 2 | Com que frequência atualiza? | A cada 2 minutos automaticamente |
| 3 | Funciona no celular? | Sim, totalmente responsivo |
| 4 | Posso exportar dados? | Não na versão atual (futuro) |
| 5 | Como calcular taxa de confirmação? | (Feitos ÷ Total) × 100 |
| 6 | Check-in vs Check-out? | Check-in = antes, Check-out = depois |
| 7 | Dashboard está lento? | Limpe o cache do navegador |
| 8 | Posso salvar filtros? | Não na versão atual (futuro) |
| 9 | Como reportar bug? | E-mail para suporte com detalhes |
| 10 | Há treinamento? | Sim, solicite ao suporte |

---

### 🎯 Não Encontrou Sua Dúvida?

Se sua pergunta não foi respondida neste FAQ:

**1. Consulte outras seções do manual**:
- Seção 3: Visão Geral da Interface
- Seção 4: Entendendo os Status
- Seção 5: Como Usar os Filtros de Data
- Seção 6: Como Usar os Filtros de Grupo
- Seção 7: Como Interpretar as Métricas
- Seção 8: Como as Métricas se Ajustam aos Filtros
- Seção 9: Casos de Uso Práticos

**2. Consulte o manual do backend**:
- `doc/manual_backend.md`
- Explica o funcionamento do sistema de mensagens
- Útil para entender o contexto completo

**3. Entre em contato com o suporte**:
- E-mail: suporte@mosello.net.br
- Telefone: (XX) XXXX-XXXX
- WhatsApp: (XX) XXXXX-XXXX

**4. Pergunte a colegas**:
- Outros gestores podem ter tido a mesma dúvida
- Compartilhe conhecimento!

---

### 💬 Contribua com o FAQ

Se você teve uma dúvida que não estava aqui e conseguiu resolver:

**Compartilhe conosco!**
- Envie sua pergunta e resposta para o suporte
- Ajude outros usuários que podem ter a mesma dúvida
- Contribua para melhorar este manual

**Formato sugerido**:
```
PERGUNTA: [Sua pergunta]
RESPOSTA: [Como você resolveu]
CONTEXTO: [Quando isso aconteceu]
```

**Sua contribuição é valiosa!** 🙏

---

**Última atualização desta seção**: Janeiro 2024  
**Versão**: 1.0

---

