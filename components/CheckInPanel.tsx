
import React, { useMemo } from 'react';

const CheckIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>);
const ClockIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>);
const ExclamationIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>);
const ChartBarIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>);
const CalendarIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>);

interface StatCardProps {
    icon: React.ReactNode;
    title: string;
    value: string | number;
    change?: number;
    iconBgColor: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, title, value, change, iconBgColor }) => {
    return (
        <div className="bg-white p-6 rounded-xl border border-slate-200 flex items-center dark:bg-slate-800 dark:border-slate-700">
            <div className={`rounded-full p-3 ${iconBgColor}`}>
                {icon}
            </div>
            <div className="ml-4">
                <p className="text-sm text-gray-500 dark:text-slate-400">{title}</p>
                <div className="flex items-baseline space-x-2">
                    <p className="text-2xl font-bold text-gray-800 dark:text-slate-100">{value}</p>
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

interface CheckInPanelProps {
    audiences: any[];
    startDate: Date;
    endDate: Date;
    onStartDateChange: (date: Date) => void;
    onEndDateChange: (date: Date) => void;
}

const CheckInPanel: React.FC<CheckInPanelProps> = ({ 
    audiences = [], 
    startDate, 
    endDate,
    onStartDateChange,
    onEndDateChange
}) => {
    const [showDatePicker, setShowDatePicker] = React.useState(false);
    const datePickerRef = React.useRef<HTMLDivElement>(null);
    
    // Fecha o dropdown ao clicar fora
    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
                setShowDatePicker(false);
            }
        };
        
        if (showDatePicker) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showDatePicker]);
    
    // Calcula as métricas dinamicamente baseado nos dados do BD
    const checkInStats = useMemo(() => {
        if (!audiences || audiences.length === 0) {
            return { done: 0, pending: 0, late: 0, confirmationRate: 0 };
        }

        // Check-in Feito = status "CONFIRMADO"
        const done = audiences.filter(item => {
            const status = (item['status_checkin'] || '').toUpperCase();
            return status === 'CONFIRMADO' || status === 'FEITO' || status === 'REALIZADO';
        }).length;

        // Check-in Pendente = status "PENDENTE" ou "ENVIADO"
        const pending = audiences.filter(item => {
            const status = (item['status_checkin'] || '').toUpperCase();
            return status === 'PENDENTE' || status === 'ENVIADO';
        }).length;

        // Check-in Atrasado = status "ATRASADO"
        const late = audiences.filter(item => {
            const status = (item['status_checkin'] || '').toUpperCase();
            return status === 'ATRASADO';
        }).length;

        // Taxa de confirmação
        const total = audiences.length;
        const confirmationRate = total > 0 ? Math.round((done / total) * 100 * 10) / 10 : 0;

        return { done, pending, late, confirmationRate };
    }, [audiences]);

    // Formata a data para exibição
    const formatDateRange = () => {
        if (!startDate || !endDate) return 'Hoje';
        
        const start = new Date(startDate);
        const end = new Date(endDate);
        start.setHours(0, 0, 0, 0);
        end.setHours(0, 0, 0, 0);
        
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        // Se for o mesmo dia
        if (start.getTime() === end.getTime()) {
            if (start.getTime() === today.getTime()) {
                return 'Hoje';
            }
            
            const yesterday = new Date(today);
            yesterday.setDate(yesterday.getDate() - 1);
            if (start.getTime() === yesterday.getTime()) {
                return 'Ontem';
            }
            
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);
            if (start.getTime() === tomorrow.getTime()) {
                return 'Amanhã';
            }
            
            return start.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
        }
        
        // Range de datas
        const startStr = start.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
        const endStr = end.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
        return `${startStr} - ${endStr}`;
    };

    // Atalhos de data
    const setToday = () => {
        console.log('📅 Botão "Hoje" clicado');
        const today = new Date();
        console.log('📅 Definindo datas para:', today);
        onStartDateChange(today);
        onEndDateChange(today);
        setShowDatePicker(false);
    };

    const setYesterday = () => {
        console.log('📅 Botão "Ontem" clicado');
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        console.log('📅 Definindo datas para:', yesterday);
        onStartDateChange(yesterday);
        onEndDateChange(yesterday);
        setShowDatePicker(false);
    };

    const setTomorrow = () => {
        console.log('📅 Botão "Amanhã" clicado');
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        console.log('📅 Definindo datas para:', tomorrow);
        onStartDateChange(tomorrow);
        onEndDateChange(tomorrow);
        setShowDatePicker(false);
    };

    const setThisWeek = () => {
        console.log('📅 Botão "Esta Semana" clicado');
        const today = new Date();
        const firstDay = new Date(today);
        firstDay.setDate(today.getDate() - today.getDay()); // Domingo
        const lastDay = new Date(today);
        lastDay.setDate(today.getDate() + (6 - today.getDay())); // Sábado
        console.log('📅 Definindo range:', firstDay, 'até', lastDay);
        onStartDateChange(firstDay);
        onEndDateChange(lastDay);
        setShowDatePicker(false);
    };

    const setThisMonth = () => {
        console.log('📅 Botão "Este Mês" clicado');
        const today = new Date();
        const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
        const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        console.log('📅 Definindo range:', firstDay, 'até', lastDay);
        onStartDateChange(firstDay);
        onEndDateChange(lastDay);
        setShowDatePicker(false);
    };

    return (
        <div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-slate-100">Painel de Check-In</h1>
                    <p className="text-gray-500 mt-1 dark:text-slate-400">Monitoramento em tempo real das confirmações de presença dos advogados</p>
                </div>
                
                {/* Filtro de Data */}
                <div className="mt-4 md:mt-0 relative" ref={datePickerRef}>
                    <button
                        onClick={() => {
                            console.log('📅 Botão calendário clicado, showDatePicker atual:', showDatePicker);
                            setShowDatePicker(!showDatePicker);
                        }}
                        className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 dark:bg-slate-700 dark:text-slate-300 dark:border-slate-600 dark:hover:bg-slate-600"
                    >
                        <CalendarIcon />
                        <span className="ml-2">{formatDateRange()}</span>
                    </button>
                    
                    {/* Dropdown do Calendário */}
                    {showDatePicker && (
                        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-slate-200 z-50 dark:bg-slate-800 dark:border-slate-700">
                            <div className="p-4">
                                {/* Atalhos */}
                                <div className="grid grid-cols-2 gap-2 mb-4">
                                    <button
                                        onClick={setYesterday}
                                        className="px-3 py-2 text-xs font-medium text-gray-700 bg-slate-100 rounded hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600"
                                    >
                                        Ontem
                                    </button>
                                    <button
                                        onClick={setToday}
                                        className="px-3 py-2 text-xs font-medium text-white bg-blue-600 rounded hover:bg-blue-700"
                                    >
                                        Hoje
                                    </button>
                                    <button
                                        onClick={setTomorrow}
                                        className="px-3 py-2 text-xs font-medium text-gray-700 bg-slate-100 rounded hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600"
                                    >
                                        Amanhã
                                    </button>
                                    <button
                                        onClick={setThisWeek}
                                        className="px-3 py-2 text-xs font-medium text-gray-700 bg-slate-100 rounded hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600"
                                    >
                                        Esta Semana
                                    </button>
                                    <button
                                        onClick={setThisMonth}
                                        className="col-span-2 px-3 py-2 text-xs font-medium text-gray-700 bg-slate-100 rounded hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600"
                                    >
                                        Este Mês
                                    </button>
                                </div>
                                
                                {/* Inputs de Data */}
                                <div className="space-y-3">
                                    <div>
                                        <label className="block text-xs font-medium text-gray-700 mb-1 dark:text-slate-300">Data Inicial</label>
                                        <input
                                            type="date"
                                            value={startDate ? startDate.toISOString().split('T')[0] : ''}
                                            onChange={(e) => {
                                                if (e.target.value) {
                                                    const newStart = new Date(e.target.value + 'T00:00:00');
                                                    onStartDateChange(newStart);
                                                    // Se a data inicial for maior que a final, ajusta a final
                                                    if (endDate && newStart > endDate) {
                                                        onEndDateChange(newStart);
                                                    }
                                                }
                                            }}
                                            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-medium text-gray-700 mb-1 dark:text-slate-300">Data Final</label>
                                        <input
                                            type="date"
                                            value={endDate ? endDate.toISOString().split('T')[0] : ''}
                                            onChange={(e) => {
                                                if (e.target.value) {
                                                    const newEnd = new Date(e.target.value + 'T00:00:00');
                                                    onEndDateChange(newEnd);
                                                    // Se a data final for menor que a inicial, ajusta a inicial
                                                    if (startDate && newEnd < startDate) {
                                                        onStartDateChange(newEnd);
                                                    }
                                                }
                                            }}
                                            min={startDate ? startDate.toISOString().split('T')[0] : ''}
                                            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-slate-700 dark:border-slate-600 dark:text-slate-200"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
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
                    iconBgColor="bg-blue-100 text-blue-600"
                />
            </div>
        </div>
    );
};

export default CheckInPanel;
