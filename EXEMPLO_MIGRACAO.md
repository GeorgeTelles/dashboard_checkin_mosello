// EXEMPLO: Como modificar Dashboard.tsx para usar dados do banco

// ANTES (usando mockData):
// import { lawyers, checkInStats, weeklyChartData } from '../data/mockData';

// DEPOIS (usando API):
import { useEffect, useState } from 'react';
import { 
  fetchLawyers, 
  fetchCheckInStats, 
  fetchWeeklyData,
  fetchEvolutionData,
  fetchAudienceSummary,
  fetchHearings 
} from '../services/dbService';

export function UpdatedDashboard() {
  const [lawyers, setLawyers] = useState([]);
  const [checkInStats, setCheckInStats] = useState(null);
  const [weeklyChartData, setWeeklyChartData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        
        // Fazer todas as requisições em paralelo
        const [lawyersData, statsData, weeklyData] = await Promise.all([
          fetchLawyers(),
          fetchCheckInStats(),
          fetchWeeklyData()
        ]);

        setLawyers(lawyersData);
        setCheckInStats(statsData);
        setWeeklyChartData(weeklyData);

      } catch (err) {
        setError(err.message);
        console.error('Erro ao carregar dados:', err);
      } finally {
        setLoading(false);
      }
    };

    loadData();

    // Recarregar dados a cada 30 segundos (opcional)
    // const interval = setInterval(loadData, 30000);
    // return () => clearInterval(interval);

  }, []);

  if (loading) return <div className="p-4">Carregando dados...</div>;
  if (error) return <div className="p-4 text-red-500">Erro: {error}</div>;
  if (!checkInStats) return <div className="p-4">Sem dados disponíveis</div>;

  // Agora use as variáveis normalmente como antes!
  return (
    <div>
      {/* Seu componente aqui */}
    </div>
  );
}
