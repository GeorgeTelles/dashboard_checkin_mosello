import React from 'react';
import { Process } from '../types';

const CalendarIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>);
const CheckCircleIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>);
const MailIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>);
const WarningIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>);


interface ProgressCardProps {
    icon: React.ReactNode;
    title: string;
    value: number;
    total: number;
    label: string;
    color: string;
}

const ProgressCard: React.FC<ProgressCardProps> = ({ icon, title, value, total, label, color }) => {
    const percentage = total > 0 ? (value / total) * 100 : 0;

    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                     <div className="p-1.5 rounded-full bg-slate-100 dark:bg-slate-700">{icon}</div>
                     <span className="ml-2 text-gray-500 dark:text-slate-400">{title}</span>
                </div>
                <span className="font-bold text-xl text-gray-800 dark:text-slate-100">{value}</span>
            </div>
            <div className="mt-4">
                <div className="w-full bg-slate-200 rounded-full h-1.5 dark:bg-slate-700">
                    <div className={`${color} h-1.5 rounded-full`} style={{ width: `${percentage}%` }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-2 dark:text-slate-400">{label}</p>
            </div>
        </div>
    );
};

const AudienceSummary: React.FC<{ processes: Process[] }> = ({ processes }) => {
    const today = new Date();
    const todayString = today.toISOString().split('T')[0];

    const todayHearings = processes.filter(p => p.hearingDate.startsWith(todayString));

    const summary = {
        today: todayHearings.length,
        confirmed: todayHearings.filter(p => p.checkInStatus === 'Feito').length,
        waiting: todayHearings.filter(p => p.checkInStatus === 'Pendente').length,
        attention: todayHearings.filter(p => p.checkInStatus === 'Atrasado').length,
    };

    return (
        <div className="bg-white p-4 md:p-6 rounded-xl border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
            <h2 className="text-xl font-bold text-gray-800 mb-4 dark:text-slate-100">Resumo das Audiências de Hoje</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                    <p className="text-3xl font-bold text-blue-600">{summary.today}</p>
                    <p className="text-sm text-gray-500 dark:text-slate-400">Total para Hoje</p>
                </div>
                <div>
                    <p className="text-3xl font-bold text-green-600">{summary.confirmed}</p>
                    <p className="text-sm text-gray-500 dark:text-slate-400">Confirmadas</p>
                </div>
                <div>
                    <p className="text-3xl font-bold text-orange-500">{summary.waiting}</p>
                    <p className="text-sm text-gray-500 dark:text-slate-400">Aguardando</p>
                </div>
                <div>
                    <p className="text-3xl font-bold text-red-500">{summary.attention}</p>
                    <p className="text-sm text-gray-500 dark:text-slate-400">Atenção</p>
                </div>
            </div>
        </div>
    );
};

export default AudienceSummary;