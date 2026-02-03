# Implementation Plan: Adicionar Campo Assunto

## Overview

Este plano implementa a funcionalidade de exibição do campo "assunto" na interface ProcessList.tsx. A implementação segue uma abordagem incremental: primeiro atualiza os tipos TypeScript, depois os dados mock para permitir desenvolvimento e testes locais, em seguida modifica o backend para extrair o assunto do banco de dados, e finalmente atualiza o componente frontend para renderizar o campo em ambas as visualizações (mobile e desktop).

## Tasks

- [x] 1. Atualizar tipos TypeScript para incluir campo assunto
  - Adicionar campo "subject?: string" na interface Process em types.ts
  - Adicionar campo "assunto?: string" na interface Audience em types.ts
  - Verificar que o código compila sem erros TypeScript
  - _Requirements: 2.1, 2.2, 2.3_

- [x] 2. Atualizar dados mock com exemplos de assunto
  - Adicionar campo "subject" em todos os itens do array processList em data/mockData.ts
  - Incluir exemplos realistas: "Ação de Cobrança", "Divórcio Consensual", "Ação Trabalhista - Rescisão Indireta", etc.
  - Deixar pelo menos um item sem o campo subject (undefined) para testar caso de dados ausentes
  - _Requirements: 5.1, 5.2, 5.3_

- [ ]* 2.1 Escrever teste unitário para dados mock
  - Verificar que pelo menos um item tem subject undefined
  - **Property 4: Dados Mock Incluem Caso Sem Assunto**
  - **Validates: Requirements 5.3**

- [x] 3. Atualizar backend para extrair campo assunto
  - Modificar a query SQL em server/index.js para incluir SPLIT_PART("processo.pasta", ' - ', 2) as assunto
  - Aplicar a modificação em todas as três variantes da query (com range de datas, data única, todas as audiências)
  - Testar manualmente a rota /audiencias para verificar que o campo "assunto" aparece no JSON
  - _Requirements: 1.1, 1.2, 1.3_

- [ ]* 3.1 Escrever teste de propriedade para extração do assunto
  - **Property 1: Extração e Inclusão do Assunto na API**
  - Gerar strings aleatórias no formato "NUMERO - ASSUNTO"
  - Verificar que SPLIT_PART extrai corretamente a segunda parte
  - Configurar para 100 iterações mínimas
  - **Validates: Requirements 1.1, 1.3**

- [ ]* 3.2 Escrever teste unitário para edge case sem separador
  - Testar strings sem " - " retornam string vazia ou NULL
  - **Validates: Requirements 1.2**

- [x] 4. Checkpoint - Verificar backend e tipos
  - Ensure all tests pass, ask the user if questions arise.

- [x] 5. Atualizar componente ProcessList para visualização mobile
  - Modificar a seção "Mobile Card View" em components/ProcessList.tsx
  - Adicionar renderização condicional do assunto abaixo do número do processo
  - Aplicar classes CSS: "text-xs text-gray-500 dark:text-slate-400 mt-1 truncate"
  - Envolver número e assunto em um div flex-1 para manter layout
  - _Requirements: 3.1, 3.2, 3.3, 3.4_

- [ ]* 5.1 Escrever teste de propriedade para renderização mobile
  - **Property 2: Renderização do Assunto em Mobile**
  - Gerar processos aleatórios com subject definido
  - Verificar que o HTML contém as classes CSS corretas
  - Configurar para 100 iterações mínimas
  - **Validates: Requirements 3.1, 3.3**

- [ ]* 5.2 Escrever teste unitário para caso sem assunto (mobile)
  - Renderizar processo sem subject
  - Verificar que elemento do assunto não aparece no DOM
  - **Validates: Requirements 3.2**

- [x] 6. Atualizar componente ProcessList para visualização desktop
  - Modificar a seção "Desktop Table View" em components/ProcessList.tsx
  - Envolver o número do processo em um div container
  - Adicionar renderização condicional do assunto abaixo do número
  - Aplicar classes CSS: "text-xs text-gray-500 dark:text-slate-400 mt-1"
  - Manter whitespace-nowrap apenas no número do processo
  - _Requirements: 4.1, 4.2, 4.3, 4.4_

- [ ]* 6.1 Escrever teste de propriedade para renderização desktop
  - **Property 3: Renderização do Assunto em Desktop**
  - Gerar processos aleatórios com subject definido
  - Verificar que a célula contém o assunto com classes CSS corretas
  - Configurar para 100 iterações mínimas
  - **Validates: Requirements 4.1, 4.3**

- [ ]* 6.2 Escrever teste unitário para caso sem assunto (desktop)
  - Renderizar processo sem subject na tabela
  - Verificar que apenas o número do processo aparece
  - **Validates: Requirements 4.2**

- [x] 7. Checkpoint final - Testar em ambas as visualizações
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marcadas com `*` são opcionais e podem ser puladas para um MVP mais rápido
- Cada task referencia requisitos específicos para rastreabilidade
- A ordem das tasks permite desenvolvimento incremental: tipos → mock → backend → frontend
- Checkpoints garantem validação em pontos críticos
- Testes de propriedade usam fast-check com mínimo 100 iterações
- Testes unitários focam em edge cases e casos específicos
