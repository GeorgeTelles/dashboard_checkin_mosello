
import React from 'react';

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

interface HeaderProps {
    onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
    return (
        <header className="flex items-center justify-between h-16 px-4 md:px-6 bg-white border-b border-slate-200 flex-shrink-0">
            <div className="flex items-center">
                 <button onClick={onMenuClick} className="text-gray-500 focus:outline-none md:hidden">
                    <MenuIcon />
                 </button>
            </div>
            <div className="flex items-center">
                <div className="relative">
                    <input 
                        type="text" 
                        placeholder="Buscar..." 
                        className="w-40 sm:w-64 pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <SearchIcon />
                    </div>
                </div>
                <div className="flex items-center ml-3 md:ml-6">
                    <img className="h-9 w-9 rounded-full object-cover" src="https://i.pravatar.cc/150?u=admin" alt="User avatar" />
                    <div className="ml-3 hidden sm:block">
                        <p className="text-sm font-medium text-gray-700">Admin</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
