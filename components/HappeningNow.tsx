
import React from 'react';
import { happeningNowHearings } from '../data/mockData';
import type { Hearing } from '../types';

const ClockIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>);
const LocationIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>);

const statusColors: { [key in Hearing['status']]: string } = {
    'Em andamento': 'bg-red-100 text-red-700',
    'Aguardando início': 'bg-blue-100 text-blue-700',
    'Próximo': 'bg-yellow-100 text-yellow-700',
};
const confirmationColors: { [key in Hearing['confirmation']]: string } = {
    'Confirmado': 'bg-green-100 text-green-700',
    'Pendente': 'bg-orange-100 text-orange-700',
};

const HearingCard: React.FC<{ hearing: Hearing }> = ({ hearing }) => (
    <div className="bg-white p-5 rounded-xl border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
        <div className="flex justify-between items-start">
            <div>
                <p className="text-sm text-gray-500 dark:text-slate-400">{`Processo ${hearing.processNumber}`}</p>
                <div className="flex items-center mt-2">
                    <img src={hearing.lawyer.avatarUrl} alt={hearing.lawyer.name} className="w-8 h-8 rounded-full mr-3" />
                    <p className="font-semibold text-gray-800 dark:text-slate-200">{hearing.lawyer.name}</p>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center text-sm text-gray-500 dark:text-slate-400 mt-3">
                    <div className="flex items-center mb-1 sm:mb-0 sm:mr-6"><ClockIcon /> {hearing.time}</div>
                    <div className="flex items-center"><LocationIcon /> {hearing.location}</div>
                </div>
            </div>
            <div className="flex flex-col items-end">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${confirmationColors[hearing.confirmation]}`}>
                    {hearing.confirmation}
                </span>
            </div>
        </div>
        <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
             <div className="flex items-center">
                <span className={`inline-block w-2.5 h-2.5 mr-2 rounded-full ${statusColors[hearing.status].split(' ')[0]}`}></span>
                <span className={`text-sm font-medium ${statusColors[hearing.status].split(' ')[1]}`}>{hearing.status}</span>
            </div>
        </div>
    </div>
);


const HappeningNow = () => {
    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-xl font-bold text-gray-800 dark:text-slate-100">Audiências Acontecendo Agora</h2>
                    <p className="text-gray-500 mt-1 dark:text-slate-400">Monitoramento em tempo real das audiências de hoje</p>
                </div>
                 <div className="flex items-center">
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                </div>
            </div>
            <div className="mt-6 space-y-4">
                {happeningNowHearings.map(hearing => <HearingCard key={hearing.id} hearing={hearing} />)}
            </div>
        </div>
    );
};

export default HappeningNow;
