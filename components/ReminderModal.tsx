
import React from 'react';
import type { Process } from '../types';
import { CheckInStatus } from '../types';

interface ReminderModalProps {
    onClose: () => void;
    processes: Process[];
}

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const ReminderModal: React.FC<ReminderModalProps> = ({ onClose, processes }) => {
    const [selectedIds, setSelectedIds] = React.useState<string[]>([]);
    const modalRef = React.useRef<HTMLDivElement>(null);

    const reminderCandidates = processes.filter(p => 
        p.checkInStatus === CheckInStatus.Pendente || p.checkInStatus === CheckInStatus.Atrasado
    );

    // Close on escape key
    React.useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
           if (event.key === 'Escape') {
              onClose();
           }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);
    
    // Close on outside click
    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
          onClose();
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [onClose]);

    const handleToggle = (id: string) => {
        setSelectedIds(prev => 
            prev.includes(id) ? prev.filter(pId => pId !== id) : [...prev, id]
        );
    };

    const handleToggleAll = () => {
        if (selectedIds.length === reminderCandidates.length) {
            setSelectedIds([]);
        } else {
            setSelectedIds(reminderCandidates.map(p => p.id));
        }
    };

    const handleSend = () => {
        // In a real app, this would trigger an API call
        console.log("Sending reminders for process IDs:", selectedIds);
        alert(`Lembretes enviados para ${selectedIds.length} audiência(s).`);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
            <div 
                ref={modalRef}
                className="relative bg-white dark:bg-slate-800 rounded-xl shadow-lg w-full max-w-2xl max-h-[90vh] flex flex-col animate-scale-in"
            >
                <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700 flex-shrink-0">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-slate-100">Enviar Lembrete de Check-in</h2>
                    <button onClick={onClose} className="p-1 rounded-full text-gray-500 hover:bg-slate-100 dark:hover:bg-slate-700">
                        <CloseIcon />
                    </button>
                </div>

                <div className="flex-1 p-6 overflow-y-auto">
                    <p className="text-sm text-gray-600 dark:text-slate-400 mb-4">
                        Selecione as audiências com status "Pendente" ou "Atrasado" para as quais deseja reenviar o lembrete de check-in.
                    </p>
                    
                    <div className="border border-slate-200 dark:border-slate-700 rounded-lg">
                        <div className="flex items-center px-4 py-3 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700/50">
                            <input 
                                type="checkbox"
                                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                checked={reminderCandidates.length > 0 && selectedIds.length === reminderCandidates.length}
                                onChange={handleToggleAll}
                                id="select-all"
                            />
                            <label htmlFor="select-all" className="ml-3 block text-sm font-medium text-gray-700 dark:text-slate-300 select-none cursor-pointer">
                                Selecionar todos
                            </label>
                        </div>
                        <ul className="divide-y divide-slate-200 dark:divide-slate-700">
                            {reminderCandidates.length > 0 ? reminderCandidates.map(process => (
                                <li key={process.id} className="p-4 flex items-start hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer" onClick={() => handleToggle(process.id)}>
                                    <input 
                                        type="checkbox" 
                                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 mt-1 pointer-events-none"
                                        checked={selectedIds.includes(process.id)}
                                        readOnly
                                    />
                                    <div className="ml-4 flex-1">
                                        <p className="text-sm font-medium text-gray-900 dark:text-slate-100">{process.processNumber}</p>
                                        <div className="flex items-center text-xs text-gray-500 dark:text-slate-400 mt-1">
                                            <img src={process.mainLawyer.avatarUrl} alt={process.mainLawyer.name} className="w-5 h-5 rounded-full mr-2" />
                                            <span>{process.mainLawyer.name}</span>
                                            <span className="mx-2">|</span>
                                            <span>{process.hearingDate} às {process.hearingTime}</span>
                                        </div>
                                    </div>
                                </li>
                            )) : (
                                <li className="p-4 text-center text-sm text-gray-500 dark:text-slate-400">
                                    Nenhuma audiência pendente ou atrasada para enviar lembrete.
                                </li>
                            )}
                        </ul>
                    </div>
                </div>

                <div className="flex items-center justify-end p-4 border-t border-slate-200 dark:border-slate-700 gap-3 flex-shrink-0">
                    <button 
                        onClick={onClose}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 dark:bg-slate-700 dark:text-slate-300 dark:border-slate-600 dark:hover:bg-slate-600">
                        Cancelar
                    </button>
                    <button
                        onClick={handleSend}
                        disabled={selectedIds.length === 0}
                        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-blue-400 disabled:cursor-not-allowed">
                        Enviar Lembrete{selectedIds.length > 0 ? ` (${selectedIds.length})` : ''}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReminderModal;
