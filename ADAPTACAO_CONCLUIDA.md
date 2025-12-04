✅ CONFIGURAÇÃO ADAPTADA PARA SUA ESTRUTURA REAL
═══════════════════════════════════════════════════════════════════════════════

Identifiquei que você tem apenas UMA tabela: `audiencias` com 17 colunas.
Adaptei toda a configuração para usar essa estrutura real! 🎯

═══════════════════════════════════════════════════════════════════════════════

📊 O QUE FOI ATUALIZADO

1. ✅ server.js
   • Endpoints agora consultam a tabela 'audiencias'
   • Queries adaptadas para as colunas reais
   • Estatísticas calculadas baseadas em presencial, videoconferência, ta_sent

2. ✅ services/dbService.ts
   • Funções renomeadas e adaptadas
   • fetchHearings() - todas as audiências
   • fetchHearingsToday() - audiências de hoje
   • fetchCheckInStats() - estatísticas
   • fetchAudienceSummary() - resumo do dia
   • ... e mais 5 funções

3. ✅ data/mockData.ts
   • Dados fallback adaptados
   • Estrutura agora corresponde à realidade

4. ✅ database_schema.sql
   • Atualizado com documentação da tabela real
   • Queries de índice para otimização

═══════════════════════════════════════════════════════════════════════════════

🔗 ENDPOINTS (NOVOS)

GET /api/hearings
  └─ Todas as audiências (ordenadas por data/hora)

GET /api/hearings/today
  └─ Audiências de hoje

GET /api/check-ins
  └─ Estatísticas (total, presencial, videoconferência, whatsapp, ta_sent)

GET /api/audience-summary
  └─ Resumo de hoje (total, presencial, videoconferência, encontrado)

GET /api/weekly-data
  └─ Dados dos últimos 7 dias por dia

GET /api/evolution-data
  └─ Evolução mensal (últimos 6 meses)

GET /api/lawyers
  └─ Lista de encarregados únicos

GET /api/processes
  └─ Lista de processos únicos com count

═══════════════════════════════════════════════════════════════════════════════

💡 EXEMPLO DE USO

import { fetchHearingsToday, fetchCheckInStats } from '../services/dbService';

export function Dashboard() {
  const [hearings, setHearings] = useState([]);
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetchHearingsToday().then(setHearings);
    fetchCheckInStats().then(setStats);
  }, []);

  return (
    <div>
      <h2>Audiências de Hoje: {hearings.length}</h2>
      <p>Presenciais: {stats?.presencial}</p>
      <p>Videoconferências: {stats?.videoconferencia}</p>
      <p>TA Enviado: {stats?.ta_sent}</p>
    </div>
  );
}

═══════════════════════════════════════════════════════════════════════════════

📋 CHECKLIST FINAL

[ ] npm install express pg cors dotenv
[ ] Verificar credenciais em .env
[ ] npm run dev:server (backend em localhost:3001)
[ ] npm run dev (frontend em localhost:5173)
[ ] Abrir http://localhost:3001/api/hearings (ver dados)
[ ] Abrir http://localhost:5173 (ver dashboard com dados reais)

═══════════════════════════════════════════════════════════════════════════════

🎉 PRONTO!

Tudo está configurado para usar sua tabela 'audiencias' com as 17 colunas.

Os dados virão diretamente do seu banco PostgreSQL!

Próximo passo: Siga o CHECKLIST acima ☝️

═══════════════════════════════════════════════════════════════════════════════
