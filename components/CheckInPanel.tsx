
import React from 'react';
import { checkInStats } from '../data/mockData';

const CheckIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>);
const ClockIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>);
const ExclamationIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>);
const ChartBarIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>);

interface StatCardProps {
    icon: React.ReactNode;
    title: string;
    value: string | number;
    change?: number;
    iconBgColor: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value, change, iconBgColor }) => {
    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200 flex items-center">
            <div className={`rounded-full p-3 ${iconBgColor}`}>
                {icon}
            </div>
            <div className="ml-4">
                <p className="text-sm text-gray-500">{title}</p>
                <div className="flex items-baseline space-x-2">
                    <p className="text-2xl font-bold text-gray-800">{value}</p>
                    {change && (
                        <p className={`text-sm font-semibold ${change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                            {change > 0 ? '+' : ''}{change}%
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

const CheckInPanel = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-800">Painel de Check-In</h1>
            <p className="text-gray-500 mt-1">Monitoramento em tempo real das confirmações de presença dos advogados</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                <StatCard 
                    icon={<CheckIcon />} 
                    title="Check-in Feito" 
                    value={checkInStats.done}
                    iconBgColor="bg-green-100 text-green-600"
                />
                <StatCard 
                    icon={<ClockIcon />} 
                    title="Check-in Pendente" 
                    value={checkInStats.pending}
                    iconBgColor="bg-orange-100 text-orange-600"
                />
                <StatCard 
                    icon={<ExclamationIcon />} 
                    title="Check-in Atrasado" 
                    value={checkInStats.late}
                    iconBgColor="bg-red-100 text-red-600"
                />
                <StatCard 
                    icon={<ChartBarIcon />} 
                    title="Taxa de Confirmação" 
                    value={`${checkInStats.confirmationRate}%`}
                    change={checkInStats.rateChange}
                    iconBgColor="bg-blue-100 text-blue-600"
                />
            </div>
        </div>
    );
};

export default CheckInPanel;
