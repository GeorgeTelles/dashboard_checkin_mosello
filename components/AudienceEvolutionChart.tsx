import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Process } from '../types';

const AudienceEvolutionChart: React.FC<{ processes: Process[] }> = ({ processes }) => {
    const processDataForChart = () => {
        const monthNames = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
        const monthlyData: { [key: string]: { month: string; total: number } } = {};

        processes.forEach(p => {
            const date = new Date(p.hearingDate);
            const monthName = monthNames[date.getUTCMonth()];
            if (!monthlyData[monthName]) {
                monthlyData[monthName] = { month: monthName, total: 0 };
            }
            monthlyData[monthName].total++;
        });

        // Garante a ordem dos meses
        return monthNames.map(month => monthlyData[month] || { month, total: 0 });
    };

    const chartData = processDataForChart();

    return (
        <div className="bg-white p-4 md:p-6 rounded-xl border border-slate-200 dark:bg-slate-800 dark:border-slate-700 h-full flex flex-col">
            <h2 className="text-xl font-bold text-gray-800 dark:text-slate-100">Evolução de Audiências</h2>
            <p className="text-gray-500 mt-1 dark:text-slate-400">Total de audiências por mês</p>
            <div className="flex-grow mt-6">
                <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <defs>
                            <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" vertical={false} />
                        <XAxis dataKey="month" tick={{ fill: '#6b7280' }} axisLine={false} tickLine={false} />
                        <YAxis tick={{ fill: '#6b7280' }} axisLine={false} tickLine={false} />
                        <Tooltip
                            contentStyle={{
                                background: '#ffffff',
                                border: '1px solid #e5e7eb',
                                borderRadius: '0.5rem',
                            }}
                        />
                        <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#colorTotal)" name="Total" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AudienceEvolutionChart;
