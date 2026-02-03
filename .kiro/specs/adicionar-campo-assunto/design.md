# Design Document

## Overview

Esta funcionalidade adiciona o campo "assunto" à interface ProcessList.tsx, permitindo que usuários visualizem o tema/natureza de cada processo judicial diretamente na lista. A implementação envolve três camadas: backend (extração de dados), tipos (type safety) e frontend (renderização).

O campo "assunto" já existe no banco de dados dentro da coluna "processo.pasta" no formato "NUMERO_PROCESSO - ASSUNTO". O backend precisa extrair essa informação usando SQL, os tipos TypeScript precisam ser atualizados para incluir o novo campo, e o frontend precisa renderizar o assunto de forma consistente tanto na visualização mobile (cards) quanto na desktop (tabela).

## Architecture

A arquitetura segue o padrão existente do projeto:

```
┌─────────────────┐
│   PostgreSQL    │
│  audiencias_    │
│     check       │
└────────┬────────┘
         │
         │ SQL Query (SPLIT_PART)
         ▼
┌─────────────────┐
│  Backend API    │
│  (Express.js)   │
│  /audiencias    │
└────────┬────────┘
         │
         │ JSON Response
         ▼
┌─────────────────┐
│   Frontend      │
│  (React/TS)     │
│  ProcessList    │
└─────────────────┘
```

**Fluxo de Dados:**
1. Backend executa query SQL com SPLIT_PART para extrair número e assunto
2. API retorna JSON com campo "assunto" adicional
3. Frontend recebe dados tipados (interface Audience)
4. ProcessList renderiza assunto abaixo do número do processo

## Components and Interfaces

### 1. Backend API (server/index.js)

**Modificação na Query SQL:**

```javascript
// Query atual
SELECT 
  *,
  SPLIT_PART("processo.pasta", ' - ', 1) as processo_numero
FROM audiencias_check

// Query modificada
SELECT 
  *,
  SPLIT_PART("processo.pasta", ' - ', 1) as processo_numero,
  SPLIT_PART("processo.pasta", ' - ', 2) as assunto
FROM audiencias_check
```

**Comportamento:**
- Se "processo.pasta" contém " - ", extrai a parte após o separador
- Se não contém separador, retorna string vazia
- Campo "assunto" é incluído no JSON de resposta

### 2. TypeScript Types (types.ts)

**Interface Process (atualizada):**

```typescript
export interface Process {
  id: string;
  processNumber: string;
  subject?: string;  // NOVO CAMPO
  hearingDate: string;
  hearingTime: string;
  location?: string;
  mainLawyer: Lawyer;
  checkInStatus: CheckInStatus;
  confirmationTime: string | null;
  checkOutStatus: CheckInStatus;
  checkOutTime: string | null;
}
```

**Interface Audience (atualizada):**

```typescript
export interface Audience {
  id: string;
  'processo.pasta': string;
  assunto?: string;  // NOVO CAMPO
  data: string;
  hora: string;
  'encarregado.nome': string;
  status_checkin: string;
  hora_checkin?: string;
  status_checkout?: string;
  hora_checkout?: string;
  'processo.faseatual.vara'?: string;
}
```

**Justificativa:**
- Campos opcionais (?) porque dados antigos podem não ter assunto
- Nome "subject" em Process (inglês, consistente com processNumber)
- Nome "assunto" em Audience (português, consistente com dados do banco)

### 3. Frontend Component (ProcessList.tsx)

**Visualização Mobile (Cards):**

```typescript
<div className="flex justify-between items-start">
  <div className="flex-1 pr-2">
    <span className="font-medium text-gray-900 text-sm break-all dark:text-slate-100">
      {processItem.processNumber}
    </span>
    {processItem.subject && (
      <p className="text-xs text-gray-500 dark:text-slate-400 mt-1 truncate">
        {processItem.subject}
      </p>
    )}
  </div>
  <StatusBadge status={processItem.checkInStatus} />
</div>
```

**Visualização Desktop (Tabela):**

```typescript
<td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
  <div>
    <div className="whitespace-nowrap">{processItem.processNumber}</div>
    {processItem.subject && (
      <div className="text-xs text-gray-500 dark:text-slate-400 mt-1">
        {processItem.subject}
      </div>
    )}
  </div>
</td>
```

**Decisões de Design:**
- Renderização condicional: só exibe se subject existe
- Estilo consistente: text-xs e text-gray-500 (secundário)
- Mobile: truncate para evitar quebra de layout
- Desktop: sem truncate, permite wrap natural
- Espaçamento: mt-1 (4px) entre número e assunto

### 4. Mock Data (data/mockData.ts)

**Exemplos de Assuntos:**

```typescript
export const processList: Process[] = [
  { 
    id: 'p1', 
    processNumber: '0001234-56.2024.8.26.0100',
    subject: 'Ação de Cobrança',
    hearingDate: '03 de dez. de 2025',
    // ...
  },
  { 
    id: 'p2', 
    processNumber: '0002345-67.2024.8.26.0100',
    subject: 'Divórcio Consensual',
    // ...
  },
  { 
    id: 'p3', 
    processNumber: '0003456-78.2024.8.26.0100',
    subject: 'Ação Trabalhista - Rescisão Indireta',
    // ...
  },
  { 
    id: 'p4', 
    processNumber: '0004567-89.2024.8.26.0100',
    // subject ausente para testar caso sem dados
    // ...
  },
];
```

## Data Models

**Modelo de Dados no Banco:**

```
audiencias_check
├── processo.pasta: "0001234-56.2024.8.26.0100 - Ação de Cobrança"
├── data: "03/12/2025"
├── hora: "09:30"
├── encarregado.nome: "Dr. Carlos Silva"
└── ...
```

**Transformação Backend → Frontend:**

```
Banco (processo.pasta)
  ↓ SPLIT_PART(..., ' - ', 1)
processo_numero: "0001234-56.2024.8.26.0100"
  ↓ SPLIT_PART(..., ' - ', 2)
assunto: "Ação de Cobrança"
  ↓ API Response
{
  "processo.pasta": "0001234-56.2024.8.26.0100 - Ação de Cobrança",
  "processo_numero": "0001234-56.2024.8.26.0100",
  "assunto": "Ação de Cobrança",
  ...
}
  ↓ Frontend Mapping
Process {
  processNumber: "0001234-56.2024.8.26.0100",
  subject: "Ação de Cobrança",
  ...
}
```

## Correctness Properties

*Uma propriedade é uma característica ou comportamento que deve ser verdadeiro em todas as execuções válidas de um sistema - essencialmente, uma declaração formal sobre o que o sistema deve fazer. As propriedades servem como ponte entre especificações legíveis por humanos e garantias de correção verificáveis por máquina.*


### Property 1: Extração e Inclusão do Assunto na API

*Para qualquer* registro na tabela "audiencias_check" onde "processo.pasta" contém o formato "NUMERO - ASSUNTO", quando o backend consulta e retorna os dados, o JSON de resposta deve incluir o campo "assunto" com o valor extraído corretamente após o separador " - ".

**Validates: Requirements 1.1, 1.3**

### Property 2: Renderização do Assunto em Mobile

*Para qualquer* processo com campo "subject" definido, quando renderizado em um card mobile, o HTML resultante deve conter o assunto dentro de um elemento com as classes CSS "text-xs" e "text-gray-500" (ou "dark:text-slate-400" em dark mode), posicionado abaixo do número do processo.

**Validates: Requirements 3.1, 3.3**

### Property 3: Renderização do Assunto em Desktop

*Para qualquer* processo com campo "subject" definido, quando renderizado na tabela desktop, a célula "Processo" deve conter o assunto dentro de um elemento com as classes CSS "text-xs" e "text-gray-500" (ou "dark:text-slate-400" em dark mode), posicionado abaixo do número do processo na mesma célula.

**Validates: Requirements 4.1, 4.3**

### Property 4: Dados Mock Incluem Caso Sem Assunto

*Deve existir pelo menos* um item no array processList em mockData.ts onde o campo "subject" é undefined ou null, para permitir testar o comportamento quando dados estão ausentes.

**Validates: Requirements 5.3**

## Error Handling

**Casos de Erro e Tratamento:**

1. **Campo "processo.pasta" ausente ou NULL:**
   - Backend: Retorna NULL para "assunto"
   - Frontend: Não renderiza o elemento do assunto (renderização condicional)

2. **Campo "processo.pasta" sem separador " - ":**
   - Backend: SPLIT_PART retorna string vazia
   - Frontend: Renderização condicional previne exibição de string vazia

3. **Assunto muito longo (mobile):**
   - CSS: Classe "truncate" aplica text-overflow: ellipsis
   - Comportamento: Texto é cortado com "..." automaticamente

4. **Dados mock inconsistentes:**
   - TypeScript: Validação em tempo de compilação
   - Erro de compilação se tipos não correspondem

**Estratégia de Fallback:**
- Se "subject" é undefined, null ou string vazia → não renderiza
- Não há placeholder "-" para manter interface limpa
- Comportamento graceful degradation

## Testing Strategy

A estratégia de testes combina testes unitários para casos específicos e testes baseados em propriedades para validação abrangente.

**Testes Unitários:**
- Casos específicos de edge cases (assunto ausente, string vazia)
- Exemplos concretos de renderização
- Validação de classes CSS aplicadas

**Testes Baseados em Propriedades:**
- Biblioteca: **fast-check** (para TypeScript/JavaScript)
- Configuração: Mínimo 100 iterações por teste
- Cada teste deve referenciar a propriedade do design

**Formato de Tag para Testes de Propriedade:**
```typescript
// Feature: adicionar-campo-assunto, Property 1: Extração e Inclusão do Assunto na API
test('API response includes extracted subject field', () => {
  fc.assert(
    fc.property(
      fc.string(), // processo numero
      fc.string(), // assunto
      (numero, assunto) => {
        const pasta = `${numero} - ${assunto}`;
        const extracted = extractSubject(pasta);
        expect(extracted).toBe(assunto);
      }
    ),
    { numRuns: 100 }
  );
});
```

**Cobertura de Testes:**

| Componente | Tipo de Teste | Foco |
|------------|---------------|------|
| Backend API | Property-based | Extração correta do assunto |
| Backend API | Unit | Edge cases (sem separador, NULL) |
| ProcessList (mobile) | Property-based | Renderização com classes corretas |
| ProcessList (desktop) | Property-based | Renderização na tabela |
| ProcessList | Unit | Caso sem assunto (não renderiza) |
| Mock Data | Unit | Validação de estrutura |

**Integração:**
- Testes de integração verificam fluxo completo: banco → API → frontend
- Testes E2E validam renderização visual em ambos os modos (mobile/desktop)

**Observações:**
- Testes de propriedade garantem correção universal
- Testes unitários focam em edge cases específicos
- Ambos são complementares e necessários para cobertura completa
