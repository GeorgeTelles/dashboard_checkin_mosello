
import React from 'react';

// Icons
const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
);

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

interface UserDropdownProps {
    theme: 'light' | 'dark';
    setTheme: (theme: 'light' | 'dark') => void;
    onClose: () => void;
    onLogout: () => void;
}

const UserDropdown: React.FC<UserDropdownProps> = ({ theme, setTheme, onClose, onLogout }) => {
    const dropdownRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    const menuItemClasses = "block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700";


    return (
        <div ref={dropdownRef} className="absolute top-full right-0 mt-2 w-60 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50 dark:bg-slate-800 dark:border-slate-700">
            <div className="px-4 py-2">
                <p className="text-sm font-semibold text-gray-800 dark:text-slate-200">Minha Conta</p>
            </div>
            <button className={menuItemClasses}>Perfil</button>
            <button className={menuItemClasses}>Configurações</button>
            <button className={menuItemClasses}>Equipe</button>
            
            <div className="border-t border-slate-200 my-2 dark:border-slate-700"></div>

            <div className="px-4 py-2">
                <p className="text-sm font-semibold text-gray-800 dark:text-slate-200">Tema</p>
            </div>
            <button onClick={() => setTheme('light')} className={`${menuItemClasses} flex items-center`}>
                <SunIcon />
                <span>Claro</span>
                {theme === 'light' && <span className="ml-auto"><CheckIcon /></span>}
            </button>
            <button onClick={() => setTheme('dark')} className={`${menuItemClasses} flex items-center`}>
                <MoonIcon />
                <span>Escuro</span>
                {theme === 'dark' && <span className="ml-auto"><CheckIcon /></span>}
            </button>

            <div className="border-t border-slate-200 my-2 dark:border-slate-700"></div>

            <button onClick={onLogout} className={menuItemClasses}>Sair</button>
        </div>
    );
};

export default UserDropdown;
