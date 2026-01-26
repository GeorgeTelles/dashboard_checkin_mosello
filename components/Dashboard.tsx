
import React, { useEffect, useState } from 'react';
import CheckInPanel from './CheckInPanel';
import WeeklyStatusChart from './WeeklyStatusChart';
import AudienceEvolutionChart from './AudienceEvolutionChart';
import AudienceSummary from './AudienceSummary';
import HappeningNow from './HappeningNow';
import DatabaseProcessList from './DatabaseProcessList';
import { Audience } from '../types';

const Dashboard = () => {
    const [audiences, setAudiences] = useState<Audience[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [selectedDate, setSelectedDate] = useState<Date>(new Date()); // Padrão: hoje

    useEffect(() => {
        const fetchAudiences = async () => {
            try {
                console.log('🔄 Atualizando dados...', new Date().toLocaleTimeString());
                
                // Verifica se selectedDate é válido
                if (!selectedDate) {
                    console.warn('⚠️ selectedDate é undefined, usando data atual');
                    setSelectedDate(new Date());
                    return;
                }
                
                // Formata a data para YYYY-MM-DD
                const dateStr = selectedDate.toISOString().split('T')[0];
                
                // A URL será '/api/audiencias' por causa do proxy reverso do Traefik
                const response = await fetch(`/api/audiencias?date=${dateStr}`);
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
    }, [selectedDate]);

    if (error) {
        return <div className="container mx-auto px-4 py-8 text-red-500">{error}</div>;
    }

    // Por enquanto, vamos apenas logar os dados para confirmar que a conexão funcionou
    // Nos próximos passos, passaremos esses dados para os componentes filhos
    console.log('Dados recebidos da API:', audiences);

    return (
        <div className="container mx-auto px-4 md:px-6 py-8 space-y-8">
            <CheckInPanel audiences={audiences} selectedDate={selectedDate} onDateChange={setSelectedDate} />

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
            <DatabaseProcessList audiences={audiences} />
        </div>
    );
};

export default Dashboard;
