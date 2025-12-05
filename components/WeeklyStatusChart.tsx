import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CheckInStatus, Process } from '../types';

const WeeklyStatusChart: React.FC<{ processes: Process[] }> = ({ processes }) => {
    const processDataForChart = () => {
        const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
        const weeklyData: { [key: string]: { day: string; Feito: number; Pendente: number; Atrasado: number } } = {
            'Seg': { day: 'Seg', Feito: 0, Pendente: 0, Atrasado: 0 },
            'Ter': { day: 'Ter', Feito: 0, Pendente: 0, Atrasado: 0 },
            'Qua': { day: 'Qua', Feito: 0, Pendente: 0, Atrasado: 0 },
            'Qui': { day: 'Qui', Feito: 0, Pendente: 0, Atrasado: 0 },
            'Sex': { day: 'Sex', Feito: 0, Pendente: 0, Atrasado: 0 },
            'Sab': { day: 'Sab', Feito: 0, Pendente: 0, Atrasado: 0 },
            'Dom': { day: 'Dom', Feito: 0, Pendente: 0, Atrasado: 0 },
        };

        processes.forEach(p => {
            const date = new Date(p.hearingDate);
            const dayName = daysOfWeek[date.getUTCDay()];
            if (weeklyData[dayName]) {
                weeklyData[dayName][p.checkInStatus]++;
            }
        });

        return Object.values(weeklyData);
    };

    const chartData = processDataForChart();

    return (
        <div className="bg-white p-4 md:p-6 rounded-xl border border-slate-200 dark:bg-slate-800 dark:border-slate-700 h-full flex flex-col">
            <h2 className="text-xl font-bold text-gray-800 dark:text-slate-100">Status Semanal</h2>
            <p className="text-gray-500 mt-1 dark:text-slate-400">Resumo dos check-ins da semana</p>
            <div className="flex-grow mt-6">
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" vertical={false} />
                        <XAxis dataKey="day" tick={{ fill: '#6b7280' }} axisLine={false} tickLine={false} />
                        <YAxis tick={{ fill: '#6b7280' }} axisLine={false} tickLine={false} />
                        <Tooltip
                            contentStyle={{
                                background: '#ffffff',
                                border: '1px solid #e5e7eb',
                                borderRadius: '0.5rem',
                            }}
                        />
                        <Legend iconType="circle" iconSize={8} />
                        <Bar dataKey="Feito" stackId="a" fill="#22c55e" name="Feito" radius={[0, 0, 5, 5]} />
                        <Bar dataKey="Pendente" stackId="a" fill="#f97316" name="Pendente" />
                        <Bar dataKey="Atrasado" stackId="a" fill="#ef4444" name="Atrasado" radius={[5, 5, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default WeeklyStatusChart;
