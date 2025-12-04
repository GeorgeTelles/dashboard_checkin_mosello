📊 ESTRUTURA REAL DO SEU BANCO DE DADOS
═══════════════════════════════════════════════════════════════════════════════

✅ TABELA ENCONTRADA: audiencias

Colunas (17 colunas):
─────────────────────────────────────────────────────────────────────────────

1.  status ..................... VARCHAR(50) - Status da audiência
2.  processo ................... VARCHAR(50) - Número do processo
3.  telefone ................... VARCHAR(20) - Telefone de contato
4.  checkin_id ................. INTEGER - ID do check-in
5.  ta_sent .................... BOOLEAN - TA (Termo de Audiência) foi enviado?
6.  data_evento ................ DATE - Data da audiência ⭐
7.  hora_evento ................ TIME - Hora da audiência
8.  processo_pasta ............. VARCHAR(255) - Pasta do processo
9.  assunto .................... TEXT - Assunto da audiência
10. encarregado_nome ........... VARCHAR(255) - Nome do encarregado/advogado
11. pessoa_nome ................ VARCHAR(255) - Nome da pessoa
12. local_evento ............... VARCHAR(255) - Local da audiência
13. presencial ................. BOOLEAN - Audiência presencial?
14. videoconferencia ........... BOOLEAN - Audiência por videoconferência?
15. whatsapp_destino ........... VARCHAR(50) - Destino WhatsApp
16. encontrado_na_lista ........ BOOLEAN - Encontrado na lista?
17. hora_checkin ............... TIME - Hora do check-in

═══════════════════════════════════════════════════════════════════════════════

🔗 ENDPOINTS DA API (ATUALIZADOS)

Base URL: http://localhost:3001/api

GET /api/hearings
  └─ Retorna todas as audiências ordenadas por data/hora
  └─ Dados: [ { status, processo, telefone, checkin_id, ta_sent, ... } ]

GET /api/hearings/today
  └─ Retorna audiências de hoje
  └─ Dados: [ { status, processo, telefone, ... } ]

GET /api/check-ins
  └─ Retorna estatísticas
  └─ Dados: { total, presencial, videoconferencia, whatsapp, ta_sent, ta_not_sent }

GET /api/audience-summary
  └─ Retorna resumo de hoje
  └─ Dados: { total_today, presencial, videoconferencia, whatsapp, encontrado, nao_encontrado }

GET /api/weekly-data
  └─ Retorna dados dos últimos 7 dias
  └─ Dados: [ { day, total, presencial, videoconferencia, ta_sent } ]

GET /api/evolution-data
  └─ Retorna dados dos últimos 6 meses
  └─ Dados: [ { month, total, presencial, videoconferencia } ]

GET /api/lawyers
  └─ Retorna lista de encarregados únicos
  └─ Dados: [ { name } ]

GET /api/processes
  └─ Retorna lista de processos únicos
  └─ Dados: [ { number, folder, assunto, total_audiencias } ]

═══════════════════════════════════════════════════════════════════════════════

💡 FUNÇÕES DISPONÍVEIS (TypeScript)

import { 
  fetchHearings,
  fetchHearingsToday,
  fetchCheckInStats,
  fetchAudienceSummary,
  fetchWeeklyData,
  fetchEvolutionData,
  fetchLawyers,
  fetchProcesses,
  testConnection
} from '../services/dbService';

// Exemplos de uso:

const allHearings = await fetchHearings();
const todayHearings = await fetchHearingsToday();
const stats = await fetchCheckInStats();
const summary = await fetchAudienceSummary();
const weekly = await fetchWeeklyData();
const evolution = await fetchEvolutionData();
const encarregados = await fetchLawyers();
const processos = await fetchProcesses();
const connection = await testConnection();

═══════════════════════════════════════════════════════════════════════════════

📝 EXEMPLO DE REGISTRO

{
  "id": 1,
  "status": "confirmada",
  "processo": "0001234-56.2024.8.26.0100",
  "telefone": "11999999999",
  "checkin_id": 1,
  "ta_sent": true,
  "data_evento": "2025-12-04",
  "hora_evento": "09:30:00",
  "processo_pasta": "pasta_001",
  "assunto": "Audiência de conhecimento",
  "encarregado_nome": "Dr. Carlos Silva",
  "pessoa_nome": "João Silva",
  "local_evento": "Fórum Central - Sala 201",
  "presencial": true,
  "videoconferencia": false,
  "whatsapp_destino": null,
  "encontrado_na_lista": true,
  "hora_checkin": "09:15:00",
  "created_at": "2025-12-03T14:30:00",
  "updated_at": "2025-12-04T09:20:00"
}

═══════════════════════════════════════════════════════════════════════════════

🎯 ANÁLISES DISPONÍVEIS

Através dos endpoints, você pode:

✅ Ver todas as audiências
✅ Ver audiências de hoje
✅ Contar audiências por tipo (presencial, videoconferência, WhatsApp)
✅ Ver quantas tiveram TA enviado
✅ Ver dados semanais agrupados por dia
✅ Ver evolução mensal de audiências
✅ Listar todos os encarregados únicos
✅ Listar todos os processos com count de audiências

═══════════════════════════════════════════════════════════════════════════════

🚀 PRÓXIMOS PASSOS

1. npm install express pg cors dotenv
2. npm run dev:server  (backend)
3. npm run dev         (frontend)
4. Abrir http://localhost:5173

Os dados da tabela audiencias aparecerão automaticamente!

═══════════════════════════════════════════════════════════════════════════════

📌 NOTAS IMPORTANTES

• Você tem uma tabela única 'audiencias' com 17 colunas
• Todos os dados vêm dessa única tabela
• O backend foi adaptado para usar essa estrutura
• Não precisa criar tabelas adicionais
• Os dados são consultados diretamente da tabela

═══════════════════════════════════════════════════════════════════════════════
