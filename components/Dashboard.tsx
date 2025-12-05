import React, { useEffect, useState } from 'react';
import CheckInPanel from './CheckInPanel';
import WeeklyStatusChart from './WeeklyStatusChart';
import AudienceEvolutionChart from './AudienceEvolutionChart';
import AudienceSummary from './AudienceSummary';
import HappeningNow from './HappeningNow';
import ProcessList from './ProcessList';
import { Audience, Process, CheckInStatus, Hearing } from '../types';

const Dashboard = () => {
    const [processes, setProcesses] = useState<Process[]>([]);
    const [happeningNow, setHappeningNow] = useState<Hearing[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchAudiences = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('/api/audiencias');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data: Audience[] = await response.json();

                if (!data) {
                    throw new Error("A API não retornou dados.");
                }

                const allProcesses: Process[] = data.map(audience => ({
                    id: audience.checkin_id,
                    processNumber: audience.processo,
                    hearingDate: audience.data_evento, // Manter como string por enquanto
                    hearingTime: audience.hora_evento.substring(0, 5),
                    mainLawyer: {
                        name: audience.encarregado_nome,
                        avatarUrl: `https://i.pravatar.cc/150?u=${audience.encarregado_nome}`
                    },
                    checkInStatus: audience.status as CheckInStatus,
                    confirmationTime: audience.hora_checkin ? audience.hora_checkin.substring(0, 5) : null,
                    location: audience.local_evento
                }));

                const nowHearings: Hearing[] = data
                    .filter(audience => audience.status_audiencia && ['Em andamento', 'Aguardando início', 'Próximo'].includes(audience.status_audiencia))
                    .map(audience => ({
                        id: audience.checkin_id,
                        processNumber: audience.processo,
                        lawyer: {
                            name: audience.encarregado_nome,
                            avatarUrl: `https://i.pravatar.cc/150?u=${audience.encarregado_nome}`
                        },
                        time: audience.hora_evento.substring(0, 5),
                        location: audience.local_evento,
                        status: audience.status_audiencia,
                        confirmation: audience.status // Usando o status do check-in como confirmação
                    }));

                setProcesses(allProcesses);
                setHappeningNow(nowHearings);
            } catch (e) {
                console.error("Falha ao buscar audiências:", e);
                setError('Não foi possível carregar os dados da audiência.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchAudiences();
    }, []);

    if (error) {
        return <div className="container mx-auto px-4 py-8 text-red-500">{error}</div>;
    }
    
    if (isLoading) {
        return <div className="container mx-auto px-4 py-8">Carregando...</div>;
    }

    return (
        <div className="container mx-auto px-4 md:px-6 py-8 space-y-8">
            <CheckInPanel processes={processes} />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3">
                    <WeeklyStatusChart processes={processes} />
                </div>
                <div className="lg:col-span-2">
                    <AudienceEvolutionChart processes={processes} />
                </div>
            </div>

            <AudienceSummary processes={processes} />
            <HappeningNow hearings={happeningNow} />
            <ProcessList processes={processes} />
        </div>
    );
};

export default Dashboard;
