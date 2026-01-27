
import React, { useEffect, useState, useCallback } from 'react';
import CheckInPanel from './CheckInPanel';
import WeeklyStatusChart from './WeeklyStatusChart';
import AudienceEvolutionChart from './AudienceEvolutionChart';
import AudienceSummary from './AudienceSummary';
import HappeningNow from './HappeningNow';
import DatabaseProcessList from './DatabaseProcessList';
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

const Dashboard = () => {
    const [audiences, setAudiences] = useState<Audience[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [startDate, setStartDate] = useState<Date>(new Date()); // Padrão: hoje
    const [endDate, setEndDate] = useState<Date>(new Date()); // Padrão: hoje
    const [selectedGroups, setSelectedGroups] = useState<string[]>(() => {
        // Inicializa com todos os grupos selecionados
        console.log('🔧 Inicializando selectedGroups com:', USER_GROUPS);
        return [...USER_GROUPS];
    });
    
    // Log quando selectedGroups mudar
    useEffect(() => {
        console.log('🔄 selectedGroups mudou para:', selectedGroups);
    }, [selectedGroups]);
    
    // Cria uma função estável para atualizar os grupos
    const handleSelectedGroupsChange = useCallback((newGroups: string[]) => {
        console.log('📝 handleSelectedGroupsChange chamado com:', newGroups);
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
                
                // A URL será '/api/audiencias' por causa do proxy reverso do Traefik
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

        // Busca inicial
        fetchAudiences();

        // Atualização automática a cada 2 minutos (120000ms)
        const interval = setInterval(fetchAudiences, 120000);

        // Cleanup: limpa o intervalo quando o componente é desmontado
        return () => clearInterval(interval);
    }, [startDate, endDate]);

    if (error) {
        return <div className="container mx-auto px-4 py-8 text-red-500">{error}</div>;
    }

    // Por enquanto, vamos apenas logar os dados para confirmar que a conexão funcionou
    // Nos próximos passos, passaremos esses dados para os componentes filhos
    console.log('Dados recebidos da API:', audiences);
    console.log('🔍 selectedGroups no Dashboard:', selectedGroups);

    return (
        <div className="container mx-auto px-4 md:px-6 py-8 space-y-8">
            <CheckInPanel 
                audiences={audiences} 
                startDate={startDate} 
                endDate={endDate}
                onStartDateChange={setStartDate}
                onEndDateChange={setEndDate}
                selectedGroups={selectedGroups}
            />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3">
                    <WeeklyStatusChart />
                </div>
                <div className="lg:col-span-2">
                    <AudienceEvolutionChart />
                </div>
            </div>

            <AudienceSummary audiences={audiences} />
            <HappeningNow />
            <DatabaseProcessList 
                audiences={audiences} 
                startDate={startDate}
                endDate={endDate}
                onStartDateChange={setStartDate}
                onEndDateChange={setEndDate}
                selectedGroups={selectedGroups}
                onSelectedGroupsChange={handleSelectedGroupsChange}
            />
        </div>
    );
};

export default Dashboard;
