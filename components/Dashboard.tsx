import React, { useEffect, useState } from 'react';
import CheckInPanel from './CheckInPanel';
import WeeklyStatusChart from './WeeklyStatusChart';
import AudienceEvolutionChart from './AudienceEvolutionChart';
import AudienceSummary from './AudienceSummary';
import HappeningNow from './HappeningNow';
import ProcessList from './ProcessList';
import { Audience, Process, CheckInStatus } from '../types';

const Dashboard = () => {
    const [processes, setProcesses] = useState<Process[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchAudiences = async () => {
            try {
                const response = await fetch('/api/audiencias');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data: Audience[] = await response.json();

                // Mapeia os dados da API para o formato do Process
                const formattedProcesses: Process[] = data.map(audience => ({
                    id: audience.checkin_id,
                    processNumber: audience.processo,
                    hearingDate: new Date(audience.data_evento).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }),
                    hearingTime: audience.hora_evento.substring(0, 5),
                    mainLawyer: {
                        name: audience.encarregado_nome,
                        // Gerando avatar aleatório para manter o layout
                        avatarUrl: `https://i.pravatar.cc/150?u=${audience.encarregado_nome}`
                    },
                    checkInStatus: audience.status as CheckInStatus, // Assumindo que o status da API corresponde
                    confirmationTime: audience.hora_checkin ? audience.hora_checkin.substring(0, 5) : null,
                    location: audience.local_evento
                }));

                setProcesses(formattedProcesses);
            } catch (e) {
                console.error("Falha ao buscar audiências:", e);
                setError('Não foi possível carregar os dados da audiência.');
            }
        };

        fetchAudiences();
    }, []);

    if (error) {
        return <div className="container mx-auto px-4 py-8 text-red-500">{error}</div>;
    }

    return (
        <div className="container mx-auto px-4 md:px-6 py-8 space-y-8">
            <CheckInPanel />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3">
                    <WeeklyStatusChart />
                </div>
                <div className="lg:col-span-2">
                    <AudienceEvolutionChart />
                </div>
            </div>

            <AudienceSummary />
            <HappeningNow />
            <ProcessList processes={processes} />
        </div>
    );
};

export default Dashboard;
