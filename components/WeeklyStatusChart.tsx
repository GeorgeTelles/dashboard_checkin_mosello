
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { weeklyChartData } from '../data/mockData';

const WeeklyStatusChart = () => {
    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200 h-96 dark:bg-slate-800 dark:border-slate-700">
            <h3 className="font-bold text-lg text-gray-800 dark:text-slate-100">Status de Check-in Semanal</h3>
            <p className="text-sm text-gray-500 dark:text-slate-400">Acompanhamento diário das confirmações</p>
            <div className="mt-4 h-full w-full pb-8">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={weeklyChartData}
                        margin={{
                            top: 5,
                            right: 20,
                            left: -10,
                            bottom: 5,
                        }}
                        barGap={8}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="day" tick={{ fill: '#64748b' }} axisLine={{ stroke: '#e2e8f0' }} tickLine={false} />
                        <YAxis tick={{ fill: '#64748b' }} axisLine={{ stroke: '#e2e8f0' }} tickLine={false} />
                        <Tooltip
                            contentStyle={{
                                background: 'white',
                                border: '1px solid #e2e8f0',
                                borderRadius: '0.5rem',
                            }}
                        />
                        <Legend iconType="circle" iconSize={8} wrapperStyle={{paddingTop: '20px'}} />
                        <Bar dataKey="Atrasado" fill="#ef4444" name="Atrasado" radius={[4, 4, 0, 0]} barSize={12} />
                        <Bar dataKey="Pendente" fill="#f97316" name="Pendente" radius={[4, 4, 0, 0]} barSize={12} />
                        <Bar dataKey="Feito" fill="#22c55e" name="Feito" radius={[4, 4, 0, 0]} barSize={12} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default WeeklyStatusChart;
