
import React from 'react';
import UserDropdown from './UserDropdown';

const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
);

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);


interface HeaderProps {
    onMenuClick: () => void;
    theme: 'light' | 'dark';
    setTheme: (theme: 'light' | 'dark') => void;
    onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, theme, setTheme, onLogout }) => {
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

    return (
        <header className="flex items-center justify-between h-16 px-4 md:px-6 bg-white border-b border-slate-200 flex-shrink-0 dark:bg-slate-800 dark:border-slate-700">
            <div className="flex items-center">
                 <button onClick={onMenuClick} className="text-gray-500 focus:outline-none md:hidden dark:text-gray-400">
                    <MenuIcon />
                 </button>
            </div>
            <div className="flex items-center space-x-3 md:space-x-6">
                <div className="relative">
                    <input 
                        type="text" 
                        placeholder="Buscar..." 
                        className="w-40 sm:w-64 pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-slate-700 dark:border-slate-600 dark:text-slate-300 dark:placeholder-slate-400"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon />
                    </div>
                </div>
                
                <div className="relative">
                    <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center focus:outline-none p-1 rounded-full">
                        <img className="h-9 w-9 rounded-full object-cover" src="https://i.pravatar.cc/150?u=admin-2" alt="User avatar" />
                        <ChevronDownIcon />
                    </button>
                    {isDropdownOpen && <UserDropdown theme={theme} setTheme={setTheme} onClose={() => setIsDropdownOpen(false)} onLogout={onLogout} />}
                </div>
            </div>
        </header>
    );
};

export default Header;
