
import React, { useEffect, useState } from 'react';
import CheckInPanel from './CheckInPanel';
import AudienceSummary from './AudienceSummary';
import DatabaseProcessList from './DatabaseProcessList';
import HappeningNow from './HappeningNow';
import { Audience } from '../types';

const OnePage = () => {
  const [audiences, setAudiences] = useState<Audience[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAudiences = async () => {
      try {
        console.log('🔄 Atualizando dados...', new Date().toLocaleTimeString());
        const response = await fetch('/api/audiencias');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAudiences(data);
        console.log('✅ Dados atualizados com sucesso!', data.length, 'registros');
      } catch (e) {
        console.error("Falha ao buscar audiências:", e);
        setError('Não foi possível carregar os dados da audiência.');
      }
    };

    // Busca inicial
    fetchAudiences();

    // Atualização automática a cada 2 minutos (120000ms)
    const interval = setInterval(fetchAudiences, 120000);

    // Cleanup: limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, []);

  if (error) {
    return <div className="container mx-auto px-4 py-8 text-red-500">{error}</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row h-full w-full gap-6 p-4 md:p-6 overflow-hidden">
      {/* Main Content: Process List */}
      <div className="lg:w-2/3 h-full flex flex-col min-h-0 gap-6">
        <DatabaseProcessList audiences={audiences} />
      </div>

      {/* Sidebar content: Cards */}
      <div className="lg:w-1/3 h-full flex flex-col gap-6 overflow-y-auto">
        {/* Remove main title from these components for a cleaner look in this view */}
        <div className="bg-white p-4 md:p-6 rounded-xl border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
            <CheckInPanel />
        </div>
        <div className="bg-white p-4 md:p-6 rounded-xl border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
            <AudienceSummary />
        </div>
        <HappeningNow />
      </div>
    </div>
  );
};

export default OnePage;