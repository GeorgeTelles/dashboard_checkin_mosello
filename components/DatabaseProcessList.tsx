import React, { useState, useEffect } from 'react';
import { CheckInStatus, type Process } from '../types';
import ReminderModal from './ReminderModal';
import { lawyers } from '../data/mockData'; // Using mock lawyers for now

const StatusBadge: React.FC<{ status: CheckInStatus | string }> = ({ status }) => {
    const baseClasses = 'px-2.5 py-0.5 text-xs font-semibold rounded-full inline-block';
    
    const normalizedStatus = (s: string): CheckInStatus => {
        s = s.toUpperCase();
        if (s === 'FEITO' || s === 'REALIZADO' || s === 'CONFIRMADO') return CheckInStatus.Feito;
        if (s === 'PENDENTE' || s === 'ENVIADO') return CheckInStatus.Pendente;
        if (s === 'ATRASADO') return CheckInStatus.Atrasado;
        return CheckInStatus.Pendente; // Default
    };

    const statusEnum = typeof status === 'string' ? normalizedStatus(status) : status;

    const statusClasses = {
        [CheckInStatus.Feito]: 'bg-green-100 text-green-800',
        [CheckInStatus.Pendente]: 'bg-orange-100 text-orange-800',
        [CheckInStatus.Atrasado]: 'bg-red-100 text-red-800',
    };
    return <span className={`${baseClasses} ${statusClasses[statusEnum]}`}>{status}</span>;
};

const EmailIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>);
const SortIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" /></svg>);
const MoreIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>);


const DatabaseProcessList = () => {
    const [isReminderModalOpen, setIsReminderModalOpen] = React.useState(false);
    const [processList, setProcessList] = useState<Process[]>([]);

    useEffect(() => {
        fetch('https://dashboard.mosello.net.br/api/audiencias')
            .then(response => response.json())
            .then(data => {
                console.log('Dados recebidos da API:', data);
                const formattedData: Process[] = data.map((item: any) => {
                    const lawyer = lawyers.find(l => l.name === item.encarregado_nome) || lawyers[0];
                    return {
                        id: item.checkin_id,
                        processNumber: item.processo.split(' - ')[0],
                        hearingDate: hearingDateFormatted,
                        hearingTime: item.hora_evento || 'N/A',
                        mainLawyer: lawyer,
                        checkInStatus: item.status || CheckInStatus.Pendente,
                        confirmationTime: item.hora_checkin || null,
                        location: item.local_evento
                    };
                }).filter((p: Process) => p.id);
                setProcessList(formattedData);
            })
            .catch(error => console.error('Erro ao buscar dados da API:', error));
    }, []);

    return (
        <>
            <div className="bg-white p-4 md:p-6 rounded-xl border border-slate-200 dark:bg-slate-800 dark:border-slate-700 flex flex-col h-full">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
                    <div>
                        <h2 className="text-xl font-bold text-gray-800 dark:text-slate-100">Lista de Processos (Banco de Dados)</h2>
                        <p className="text-gray-500 mt-1 dark:text-slate-400">Audiências agendadas e status de check-in dos advogados</p>
                    </div>
                    <div className="flex items-center space-x-3">
                        <button 
                            onClick={() => setIsReminderModalOpen(true)}
                            className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 dark:bg-slate-700 dark:text-slate-300 dark:border-slate-600 dark:hover:bg-slate-600">
                            <EmailIcon />
                            Enviar Lembrete
                        </button>
                        <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 dark:bg-slate-700 dark:text-slate-300 dark:border-slate-600 dark:hover:bg-slate-600">
                            <SortIcon />
                            Ordenar
                        </button>
                    </div>
                </div>
                
                <div className="flex-1 overflow-y-auto">
                    {/* Mobile Card View */}
                    <div className="md:hidden grid grid-cols-1 gap-4">
                        {processList.map((processItem) => (
                            <div key={processItem.id} className="bg-white p-4 rounded-lg border border-slate-200 space-y-4 dark:bg-slate-700/50 dark:border-slate-700">
                                <div className="flex justify-between items-start">
                                    <span className="font-medium text-gray-900 text-sm break-all pr-2 dark:text-slate-100">{processItem.processNumber}</span>
                                    <StatusBadge status={processItem.checkInStatus} />
                                </div>
                                
                                <div className="flex items-center">
                                    <img src={processItem.mainLawyer.avatarUrl} alt={processItem.mainLawyer.name} className="w-8 h-8 rounded-full mr-3" />
                                    <div>
                                        <p className="font-semibold text-gray-800 text-sm dark:text-slate-200">{processItem.mainLawyer.name}</p>
                                        <p className="text-xs text-gray-500 dark:text-slate-400">Encarregado Principal</p>
                                    </div>
                                </div>

                                <div className="border-t border-slate-100 pt-3 text-sm text-gray-500 grid grid-cols-2 gap-4 dark:border-slate-700 dark:text-slate-400">
                                    <div>
                                        <p className="font-medium text-gray-600 text-xs uppercase tracking-wider dark:text-slate-300">Audiência</p>
                                        <p className="mt-1">{processItem.hearingDate} <br/> {processItem.hearingTime}</p>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-600 text-xs uppercase tracking-wider dark:text-slate-300">Confirmação</p>
                                        <p className="mt-1">{processItem.confirmationTime || '-'}</p>
                                    </div>
                                </div>
                                <div className="flex justify-end pt-2">
                                    <button><MoreIcon /></button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Desktop Table View */}
                    <div className="overflow-x-auto hidden md:block">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-slate-50 dark:bg-slate-700 dark:text-gray-400 sticky top-0">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Processo</th>
                                    <th scope="col" className="px-6 py-3">Data da Audiência</th>
                                    <th scope="col" className="px-6 py-3">Hora da Audiência</th>
                                    <th scope="col" className="px-6 py-3">Local</th>
                                    <th scope="col" className="px-6 py-3">Encarregado Principal</th>
                                    <th scope="col" className="px-6 py-3">Status Check-in</th>
                                    <th scope="col" className="px-6 py-3">Confirmação</th>
                                    <th scope="col" className="px-6 py-3"><span className="sr-only">Ações</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                {processList.map((processItem) => (
                                    <tr key={processItem.id} className="bg-white border-b hover:bg-slate-50 dark:bg-slate-800 dark:border-slate-700 dark:hover:bg-slate-600">
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">{processItem.processNumber}</td>
                                        <td className="px-6 py-4">{processItem.hearingDate}</td>
                                        <td className="px-6 py-4">{processItem.hearingTime}</td>
                                        <td className="px-6 py-4">{processItem.location || '-'}</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <img src={processItem.mainLawyer.avatarUrl} alt={processItem.mainLawyer.name} className="w-8 h-8 rounded-full mr-3" />
                                                <span>{processItem.mainLawyer.name}</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <StatusBadge status={processItem.checkInStatus} />
                                        </td>
                                        <td className="px-6 py-4">{processItem.confirmationTime || '-'}</td>
                                        <td className="px-6 py-4 text-right">
                                            <button><MoreIcon /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {isReminderModalOpen && (
                <ReminderModal 
                    onClose={() => setIsReminderModalOpen(false)}
                    processes={processList}
                />
            )}
        </>
    );
};

export default DatabaseProcessList;
