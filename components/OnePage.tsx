
import React, { useEffect, useState, useCallback } from 'react';
import CheckInPanel from './CheckInPanel';
import AudienceSummary from './AudienceSummary';
import DatabaseProcessList from './DatabaseProcessList';
import HappeningNow from './HappeningNow';
import { Audience } from '../types';

// Grupos de usuário disponíveis
const USER_GROUPS = [
    'Controle Contencioso Imobiliário/Agrário',
    'Controle Cível',
    'Controle Criminal',
    'Controle Tributário e Empresarial',
    'Controle Trabalhista',
    'Controle Contencioso Ambiental'
];

const OnePage = () => {
  const [audiences, setAudiences] = useState<Audience[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [startDate, setStartDate] = useState<Date>(new Date()); // Padrão: hoje
  const [endDate, setEndDate] = useState<Date>(new Date()); // Padrão: hoje
  const [selectedGroups, setSelectedGroups] = useState<string[]>(() => [...USER_GROUPS]);

  // Handlers com logs
  const handleStartDateChange = (date: Date) => {
    console.log('🔄 OnePage: startDate mudou para:', date);
    setStartDate(date);
  };

  const handleEndDateChange = (date: Date) => {
    console.log('🔄 OnePage: endDate mudou para:', date);
    setEndDate(date);
  };
  
  const handleSelectedGroupsChange = useCallback((newGroups: string[]) => {
    console.log('📝 OnePage: selectedGroups mudou para:', newGroups);
    setSelectedGroups(newGroups);
  }, []);

  useEffect(() => {
    const fetchAudiences = async () => {
      try {
        console.log('🔄 Atualizando dados...', new Date().toLocaleTimeString());
        
        // Verifica se as datas são válidas
        if (!startDate || !endDate) {
          console.warn('⚠️ Datas inválidas, usando data atual');
          const today = new Date();
          setStartDate(today);
          setEndDate(today);
          return;
        }
        
        // Formata as datas para YYYY-MM-DD
        const startDateStr = startDate.toISOString().split('T')[0];
        const endDateStr = endDate.toISOString().split('T')[0];
        
        const response = await fetch(`/api/audiencias?startDate=${startDateStr}&endDate=${endDateStr}`);
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

    // Busca inicial.
    fetchAudiences();

    // Atualização automática a cada 2 minutos (120000ms)
    const interval = setInterval(fetchAudiences, 120000);

    // Cleanup: limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, [startDate, endDate]);

  if (error) {
    return <div className="container mx-auto px-4 py-8 text-red-500">{error}</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row h-full w-full gap-6 p-4 md:p-6 overflow-hidden">
      {/* Main Content: Process List */}
      <div className="lg:w-2/3 h-full flex flex-col min-h-0 gap-6">
        <DatabaseProcessList 
          audiences={audiences}
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={handleStartDateChange}
          onEndDateChange={handleEndDateChange}
          selectedGroups={selectedGroups}
          onSelectedGroupsChange={handleSelectedGroupsChange}
        />
      </div>

      {/* Sidebar content: Cards */}
      <div className="lg:w-1/3 h-full flex flex-col gap-6 overflow-y-auto">
        {/* Remove main title from these components for a cleaner look in this view */}
        <div className="bg-white p-4 md:p-6 rounded-xl border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
            <CheckInPanel 
                audiences={audiences}
                startDate={startDate}
                endDate={endDate}
                onStartDateChange={handleStartDateChange}
                onEndDateChange={handleEndDateChange}
                selectedGroups={selectedGroups}
            />
        </div>
        {/* <div className="bg-white p-4 md:p-6 rounded-xl border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
            <AudienceSummary audiences={audiences} />
        </div> */}
        {/* <HappeningNow /> */}
      </div>
    </div>
  );
};

export default OnePage;