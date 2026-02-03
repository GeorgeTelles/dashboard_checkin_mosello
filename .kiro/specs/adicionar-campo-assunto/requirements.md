# Requirements Document

## Introduction

Este documento especifica os requisitos para adicionar o campo "assunto" na interface ProcessList.tsx do dashboard de check-in de audiências. O campo "assunto" já existe no banco de dados dentro da coluna "processo.pasta" (formato: "NUMERO_PROCESSO - ASSUNTO") e precisa ser extraído, tipado e exibido na interface tanto na visualização mobile (cards) quanto na visualização desktop (tabela).

## Glossary

- **Sistema**: O dashboard de check-in de audiências para advogados
- **Backend**: Servidor Node.js/Express que consulta o banco PostgreSQL
- **Frontend**: Interface React/TypeScript que exibe a lista de processos
- **ProcessList**: Componente React que renderiza a lista de processos
- **Assunto**: Descrição textual do tema/natureza do processo judicial
- **processo.pasta**: Campo do banco de dados que contém "NUMERO_PROCESSO - ASSUNTO"

## Requirements

### Requirement 1: Extração do Campo Assunto no Backend

**User Story:** Como desenvolvedor, eu quero que o backend extraia o campo "assunto" da coluna "processo.pasta", para que os dados estejam disponíveis para o frontend.

#### Acceptance Criteria

1. WHEN o backend consulta a tabela "audiencias_check", THE Sistema SHALL extrair o assunto usando SPLIT_PART("processo.pasta", ' - ', 2)
2. WHEN o campo "processo.pasta" não contém o separador " - ", THE Sistema SHALL retornar NULL para o campo assunto
3. WHEN o backend retorna os dados da API, THE Sistema SHALL incluir o campo "assunto" no JSON de resposta

### Requirement 2: Atualização dos Tipos TypeScript

**User Story:** Como desenvolvedor, eu quero que os tipos TypeScript incluam o campo "assunto", para que o código seja type-safe e previna erros.

#### Acceptance Criteria

1. THE Sistema SHALL adicionar o campo "subject" (opcional) na interface Process
2. THE Sistema SHALL adicionar o campo "assunto" (opcional) na interface Audience
3. WHEN o TypeScript compila o código, THE Sistema SHALL validar que todos os usos do campo "subject" estão corretos

### Requirement 3: Exibição do Assunto na Interface Mobile

**User Story:** Como usuário mobile, eu quero ver o assunto do processo logo abaixo do número do processo, para que eu possa identificar rapidamente o tema da audiência.

#### Acceptance Criteria

1. WHEN um processo é exibido em um card mobile, THE Sistema SHALL mostrar o assunto abaixo do número do processo
2. WHEN o assunto não está disponível, THE Sistema SHALL exibir um placeholder "-" ou ocultar o campo
3. THE Sistema SHALL aplicar estilo visual consistente com o design atual (texto menor e cor secundária)
4. WHEN o assunto é muito longo, THE Sistema SHALL truncar o texto com ellipsis para manter o layout

### Requirement 4: Exibição do Assunto na Interface Desktop

**User Story:** Como usuário desktop, eu quero ver o assunto do processo na coluna "Processo" da tabela, para que eu possa identificar rapidamente o tema da audiência.

#### Acceptance Criteria

1. WHEN um processo é exibido na tabela desktop, THE Sistema SHALL mostrar o assunto abaixo do número do processo na mesma célula
2. WHEN o assunto não está disponível, THE Sistema SHALL exibir apenas o número do processo
3. THE Sistema SHALL aplicar estilo visual consistente (texto menor e cor secundária)
4. THE Sistema SHALL manter o alinhamento e espaçamento adequados na célula da tabela

### Requirement 5: Atualização dos Dados Mock

**User Story:** Como desenvolvedor, eu quero que os dados mock incluam exemplos de assunto, para que eu possa testar a interface sem depender do backend.

#### Acceptance Criteria

1. THE Sistema SHALL adicionar o campo "subject" em todos os itens do array processList em mockData.ts
2. THE Sistema SHALL incluir exemplos realistas de assuntos jurídicos (ex: "Ação de Cobrança", "Divórcio Consensual")
3. THE Sistema SHALL incluir pelo menos um exemplo com assunto NULL para testar o caso de dados ausentes
