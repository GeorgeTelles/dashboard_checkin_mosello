
import React from 'react';
import { processList } from '../data/mockData';
import { CheckInStatus } from '../types';

const StatusBadge: React.FC<{ status: CheckInStatus }> = ({ status }) => {
    const baseClasses = 'px-2.5 py-0.5 text-xs font-semibold rounded-full inline-block';
    const statusClasses = {
        [CheckInStatus.Feito]: 'bg-green-100 text-green-800',
        [CheckInStatus.Pendente]: 'bg-orange-100 text-orange-800',
        [CheckInStatus.Atrasado]: 'bg-red-100 text-red-800',
    };
    return <span className={`${baseClasses} ${statusClasses[status]}`}>{status}</span>;
};

const EmailIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>);
const SortIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" /></svg>);
const MoreIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" /></svg>);


const ProcessList = () => {
    return (
        <div className="bg-white p-4 md:p-6 rounded-xl border border-slate-200">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
                <div>
                    <h2 className="text-xl font-bold text-gray-800">Lista de Processos</h2>
                    <p className="text-gray-500 mt-1">Audiências agendadas e status de check-in dos advogados</p>
                </div>
                <div className="flex items-center space-x-3">
                    <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50">
                        <EmailIcon />
                        Enviar Lembrete
                    </button>
                    <button className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50">
                        <SortIcon />
                        Ordenar
                    </button>
                </div>
            </div>
            
            {/* Mobile Card View */}
            <div className="md:hidden grid grid-cols-1 gap-4">
                {processList.map((processItem) => (
                    <div key={processItem.id} className="bg-white p-4 rounded-lg border border-slate-200 space-y-4">
                        <div className="flex justify-between items-start">
                            <span className="font-medium text-gray-900 text-sm break-all pr-2">{processItem.processNumber}</span>
                            <StatusBadge status={processItem.checkInStatus} />
                        </div>
                        
                        <div className="flex items-center">
                            <img src={processItem.mainLawyer.avatarUrl} alt={processItem.mainLawyer.name} className="w-8 h-8 rounded-full mr-3" />
                            <div>
                                <p className="font-semibold text-gray-800 text-sm">{processItem.mainLawyer.name}</p>
                                <p className="text-xs text-gray-500">Encarregado Principal</p>
                            </div>
                        </div>

                        <div className="border-t border-slate-100 pt-3 text-sm text-gray-500 grid grid-cols-2 gap-4">
                            <div>
                                <p className="font-medium text-gray-600 text-xs uppercase tracking-wider">Audiência</p>
                                <p className="mt-1">{processItem.hearingDate} <br/> {processItem.hearingTime}</p>
                            </div>
                            <div>
                                <p className="font-medium text-gray-600 text-xs uppercase tracking-wider">Confirmação</p>
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
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-slate-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">Processo</th>
                            <th scope="col" className="px-6 py-3">Data da Audiência</th>
                            <th scope="col" className="px-6 py-3">Hora da Audiência</th>
                            <th scope="col" className="px-6 py-3">Encarregado Principal</th>
                            <th scope="col" className="px-6 py-3">Status Check-in</th>
                            <th scope="col" className="px-6 py-3">Confirmação</th>
                            <th scope="col" className="px-6 py-3"><span className="sr-only">Ações</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        {processList.map((processItem) => (
                            <tr key={processItem.id} className="bg-white border-b hover:bg-slate-50">
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{processItem.processNumber}</td>
                                <td className="px-6 py-4">{processItem.hearingDate}</td>
                                <td className="px-6 py-4">{processItem.hearingTime}</td>
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
    );
};

export default ProcessList;
