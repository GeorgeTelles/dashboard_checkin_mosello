# Documento de Requisitos: Documentação do Dashboard de Check-in de Audiências

## Introdução

O dashboard de check-in de audiências é uma aplicação web desenvolvida em React com TypeScript que permite aos gestores de pauta monitorar em tempo real o status de confirmação de presença dos advogados em audiências judiciais. Este documento especifica os requisitos para criar uma documentação completa e acessível do sistema, voltada tanto para usuários técnicos quanto para gestores de pauta.

O sistema integra-se com um backend que gerencia o envio automatizado de mensagens de check-in e check-out via WhatsApp, e o dashboard fornece visualização centralizada de todas as audiências, seus status e métricas de confirmação.

## Glossário

- **Dashboard**: Interface web que exibe informações consolidadas sobre audiências e check-ins
- **Check-in**: Confirmação prévia de presença do advogado, enviada 30 minutos antes da audiência
- **Check-out**: Confirmação de participação do advogado, enviada 30 minutos após o início da audiência
- **Gestor_de_Pauta**: Supervisor responsável por monitorar audiências de uma área específica
- **Área**: Grupo de usuários/advogados organizados por especialidade jurídica (Cível, Trabalhista, etc.)
- **Status_de_Confirmação**: Estado atual da resposta do advogado (Confirmado, A Confirmar, Não Realizado, Nulo)
- **Métrica**: Indicador numérico calculado a partir dos dados de check-in (taxa de confirmação, total de confirmados, etc.)
- **Filtro**: Mecanismo de seleção que permite visualizar subconjuntos específicos de dados
- **Atualização_Automática**: Processo de refresh dos dados a cada 2 minutos sem intervenção do usuário
- **Sistema_Backend**: Servidor que gerencia envio de mensagens e armazenamento de dados
- **Audiência**: Evento judicial agendado que requer presença do advogado

## Requisitos

### Requisito 1: Documentação Técnica Completa

**User Story:** Como desenvolvedor, eu quero uma documentação técnica completa do sistema, para que eu possa entender a arquitetura, fazer manutenção e implementar novas funcionalidades.

#### Acceptance Criteria

1. THE Sistema SHALL fornecer documentação da arquitetura completa incluindo frontend React, backend Node.js e banco de dados PostgreSQL
2. THE Sistema SHALL documentar todos os componentes React com suas props, estados e responsabilidades
3. THE Sistema SHALL documentar todos os endpoints da API com métodos HTTP, parâmetros e formatos de resposta
4. THE Sistema SHALL fornecer instruções completas para execução local incluindo instalação de dependências e configuração de variáveis de ambiente
5. THE Sistema SHALL documentar o processo de deploy incluindo Docker, docker-compose e configuração de proxy reverso
6. THE Sistema SHALL listar todas as tecnologias utilizadas com suas versões e propósitos

### Requisito 2: Manual do Gestor de Pauta

**User Story:** Como gestor de pauta, eu quero um manual em linguagem acessível, para que eu possa usar o dashboard efetivamente sem conhecimento técnico.

#### Acceptance Criteria

1. THE Sistema SHALL fornecer introdução explicando o propósito do dashboard e seu papel no fluxo de check-in
2. THE Sistema SHALL documentar como acessar o dashboard incluindo URL e credenciais
3. THE Sistema SHALL fornecer visão geral da interface identificando cada seção e sua função
4. THE Sistema SHALL explicar todos os status possíveis (Confirmado, A Confirmar, Não Realizado, Nulo) para check-in e check-out
5. THE Sistema SHALL documentar como usar filtros de data com exemplos de cada atalho (Ontem, Hoje, Amanhã, Esta Semana, Este Mês)
6. THE Sistema SHALL documentar como usar filtros de grupo/área com explicação de seleção múltipla
7. THE Sistema SHALL explicar como interpretar cada métrica (Check-in Feito, A Confirmar, Não Realizados, Taxa de Confirmação)
8. THE Sistema SHALL explicar como métricas e lista de processos se ajustam automaticamente aos filtros aplicados
9. THE Sistema SHALL fornecer seção de perguntas frequentes respondendo dúvidas comuns
10. THE Sistema SHALL fornecer dicas de uso para otimizar o monitoramento
11. THE Sistema SHALL indicar quando e como entrar em contato com suporte técnico

### Requisito 3: Guia de Referência Rápida

**User Story:** Como gestor de pauta, eu quero uma referência rápida consultável, para que eu possa rapidamente relembrar significados de status e ações recomendadas.

#### Acceptance Criteria

1. THE Sistema SHALL fornecer tabela consolidada de todos os status com seus significados
2. THE Sistema SHALL listar todos os atalhos de filtros de data com suas descrições
3. THE Sistema SHALL documentar o código de cores usado no dashboard (verde, laranja, vermelho, cinza)
4. THE Sistema SHALL fornecer ações recomendadas para cada status de check-in e check-out
5. THE Sistema SHALL apresentar informações em formato de tabela ou lista para consulta rápida

### Requisito 4: Documentação de Status e Estados

**User Story:** Como gestor de pauta, eu quero entender claramente o que cada status significa, para que eu possa tomar decisões apropriadas sobre cada audiência.

#### Acceptance Criteria

1. WHEN o status de check-in é "Confirmado/Feito/Realizado" THEN a documentação SHALL explicar que o advogado confirmou presença respondendo "1"
2. WHEN o status de check-in é "A Confirmar/Enviado" THEN a documentação SHALL explicar que a mensagem foi enviada e aguarda resposta
3. WHEN o status de check-in é "Não Realizado/Atrasado/Negativa/Cancelado" THEN a documentação SHALL explicar que o advogado não respondeu ou informou que não vai comparecer
4. WHEN o status de check-in é "Nulo/-" THEN a documentação SHALL explicar que a mensagem ainda não foi enviada
5. THE Sistema SHALL documentar que os status de check-out seguem a mesma lógica dos status de check-in
6. THE Sistema SHALL explicar a relação temporal entre envio de mensagens e mudanças de status

### Requisito 5: Documentação de Filtros e Interações

**User Story:** Como gestor de pauta, eu quero entender como usar os filtros, para que eu possa visualizar exatamente as audiências que preciso monitorar.

#### Acceptance Criteria

1. WHEN o gestor seleciona um atalho de data THEN a documentação SHALL explicar qual período será exibido
2. WHEN o gestor seleciona múltiplas áreas THEN a documentação SHALL explicar que apenas audiências dessas áreas serão exibidas
3. WHEN filtros são aplicados THEN a documentação SHALL explicar que métricas e lista são atualizadas automaticamente
4. THE Sistema SHALL documentar os 6 grupos disponíveis (Imobiliário/Agrário, Cível, Criminal, Tributário e Empresarial, Trabalhista, Ambiental)
5. THE Sistema SHALL explicar como selecionar e desselecionar grupos usando checkboxes
6. THE Sistema SHALL documentar os botões "Marcar Todos" e "Desmarcar Todos"

### Requisito 6: Documentação de Métricas

**User Story:** Como gestor de pauta, eu quero entender o que cada métrica representa, para que eu possa avaliar a performance da minha equipe.

#### Acceptance Criteria

1. THE Sistema SHALL explicar que "Check-in Feito" conta audiências com status Confirmado/Feito/Realizado
2. THE Sistema SHALL explicar que "Check-in A Confirmar" conta audiências com status A Confirmar/Enviado
3. THE Sistema SHALL explicar que "Check-ins Não Realizados" conta audiências com status Não Realizado
4. THE Sistema SHALL explicar que "Taxa de Confirmação" é calculada como (Check-ins Feitos / Total de Audiências) × 100
5. THE Sistema SHALL explicar que métricas consideram apenas audiências dos grupos selecionados no filtro
6. THE Sistema SHALL explicar que métricas consideram apenas audiências do período selecionado no filtro

### Requisito 7: Documentação de Atualização Automática

**User Story:** Como gestor de pauta, eu quero entender como funciona a atualização automática, para que eu saiba que estou vendo dados atualizados.

#### Acceptance Criteria

1. THE Sistema SHALL documentar que o dashboard atualiza automaticamente a cada 2 minutos
2. THE Sistema SHALL explicar que a atualização ocorre sem necessidade de refresh manual da página
3. THE Sistema SHALL indicar que filtros aplicados são mantidos após atualização automática
4. THE Sistema SHALL recomendar deixar o dashboard aberto para monitoramento contínuo

### Requisito 8: Documentação de Casos de Uso

**User Story:** Como gestor de pauta, eu quero exemplos práticos de uso, para que eu possa aplicar o dashboard em situações reais do meu dia a dia.

#### Acceptance Criteria

1. THE Sistema SHALL fornecer exemplo de como monitorar audiências do dia atual
2. THE Sistema SHALL fornecer exemplo de como verificar audiências de uma área específica
3. THE Sistema SHALL fornecer exemplo de como identificar advogados que não confirmaram presença
4. THE Sistema SHALL fornecer exemplo de como analisar performance semanal ou mensal
5. THE Sistema SHALL fornecer exemplo de como usar o dashboard antes do início do expediente para planejamento

### Requisito 9: Documentação de Estrutura de Dados

**User Story:** Como desenvolvedor, eu quero entender a estrutura de dados, para que eu possa fazer consultas e integrações com o sistema.

#### Acceptance Criteria

1. THE Sistema SHALL documentar a estrutura da tabela audiencias_check no PostgreSQL
2. THE Sistema SHALL documentar todos os campos retornados pela API /api/audiencias
3. THE Sistema SHALL explicar o formato de datas (DD/MM/YYYY) e horários (HH:MM)
4. THE Sistema SHALL documentar os valores possíveis para campos de status
5. THE Sistema SHALL explicar o relacionamento entre dados de audiência e dados de advogado

### Requisito 10: Documentação de Troubleshooting

**User Story:** Como gestor de pauta ou desenvolvedor, eu quero saber como resolver problemas comuns, para que eu possa continuar usando o sistema sem interrupções.

#### Acceptance Criteria

1. WHEN o dashboard não carrega dados THEN a documentação SHALL fornecer passos de diagnóstico
2. WHEN filtros não funcionam corretamente THEN a documentação SHALL fornecer soluções
3. WHEN métricas parecem incorretas THEN a documentação SHALL explicar como verificar
4. THE Sistema SHALL fornecer informações de contato do suporte técnico
5. THE Sistema SHALL listar problemas conhecidos e suas soluções ou workarounds
