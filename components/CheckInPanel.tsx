import React from 'react';
import { CheckInStatus, Process } from '../types';

const CheckInPanel: React.FC<{ processes: Process[] }> = ({ processes }) => {
    const stats = {
        done: processes.filter(p => p.checkInStatus === CheckInStatus.Feito).length,
        pending: processes.filter(p => p.checkInStatus === CheckInStatus.Pendente).length,
        late: processes.filter(p => p.checkInStatus === CheckInStatus.Atrasado).length,
    };
    const totalCheckIns = stats.done + stats.pending + stats.late;
    const confirmationRate = totalCheckIns > 0 ? (stats.done / totalCheckIns) * 100 : 0;

    // Mocked for now
    const rateChange = 3.1;

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-slate-100">Painel de Check-In</h1>
            <p className="text-gray-500 mt-1 dark:text-slate-400">Monitoramento em tempo real das confirmações de presença dos advogados</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 flex items-center dark:bg-slate-800 dark:border-slate-700">
                    <div className="rounded-full p-3 bg-green-100 text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div className="ml-4">
                        <p className="text-sm text-gray-500 dark:text-slate-400">Check-in Feito</p>
                        <div className="flex items-baseline space-x-2">
                            <p className="text-2xl font-bold text-gray-800 dark:text-slate-100">{stats.done}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 flex items-center dark:bg-slate-800 dark:border-slate-700">
                    <div className="rounded-full p-3 bg-orange-100 text-orange-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div className="ml-4">
                        <p className="text-sm text-gray-500 dark:text-slate-400">Check-in Pendente</p>
                        <div className="flex items-baseline space-x-2">
                            <p className="text-2xl font-bold text-gray-800 dark:text-slate-100">{stats.pending}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 flex items-center dark:bg-slate-800 dark:border-slate-700">
                    <div className="rounded-full p-3 bg-red-100 text-red-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                    </div>
                    <div className="ml-4">
                        <p className="text-sm text-gray-500 dark:text-slate-400">Check-in Atrasado</p>
                        <div className="flex items-baseline space-x-2">
                            <p className="text-2xl font-bold text-red-500 dark:text-slate-100">{stats.late}</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-xl border border-slate-200 flex items-center dark:bg-slate-800 dark:border-slate-700">
                    <div className="rounded-full p-3 bg-blue-100 text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                    </div>
                    <div className="ml-4">
                        <p className="text-sm text-gray-500 dark:text-slate-400">Taxa de Confirmação</p>
                        <div className="flex items-baseline space-x-2">
                            <p className="text-2xl font-bold text-green-600 dark:text-slate-100">{confirmationRate.toFixed(1)}%</p>
                            <span className={`ml-2 text-sm font-semibold ${rateChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                {rateChange >= 0 ? '↑' : '↓'} {Math.abs(rateChange)}%
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckInPanel;