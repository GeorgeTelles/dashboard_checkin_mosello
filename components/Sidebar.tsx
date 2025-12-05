
import React from 'react';
import logoImg from '../logo.png';

const LogoIcon = () => (
    <img src={logoImg} alt="Mosello Advocacia" className="w-8 h-8 object-contain" />
);


const DashboardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2z" />
    </svg>
);

const OnePageIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2zM9 12H5M19 12h-4M9 16H5M19 16h-4M9 8H5M19 8h-4" />
    </svg>
);

interface SidebarProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    currentPage: 'dashboard' | 'one-page';
    setCurrentPage: (page: 'dashboard' | 'one-page') => void;
}


const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, currentPage, setCurrentPage }) => {
    const navLinkClasses = "flex items-center px-4 py-2 rounded-lg";
    const activeClasses = "text-white bg-blue-600";
    const inactiveClasses = "text-gray-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700";

    const handleNavClick = (page: 'dashboard' | 'one-page') => {
        setCurrentPage(page);
        setIsOpen(false);
    }

    return (
        <>
            <div className={`fixed inset-y-0 left-0 z-30 flex flex-col w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'} dark:bg-slate-800 dark:border-slate-700`}>
                <div className="flex items-center justify-start h-16 px-6 border-b border-slate-200 dark:border-slate-700">
                    <div className="flex items-center">
                        <LogoIcon />
                        <span className="ml-3 text-lg font-semibold text-gray-800 dark:text-slate-200">Mosello Advocacia</span>
                    </div>
                </div>
                <div className="flex-1 flex flex-col overflow-y-auto">
                    <nav className="flex-1 px-4 py-4 space-y-2">
                        {/* <a 
                            href="#" 
                            onClick={(e) => { 
                                e.preventDefault(); 
                                handleNavClick('dashboard');
                            }} 
                            className={`${navLinkClasses} ${currentPage === 'dashboard' ? activeClasses : inactiveClasses}`}
                        >
                            <DashboardIcon />
                            <span className="ml-3">Dashboard</span>
                        </a> */}
                        <a 
                            href="#" 
                            onClick={(e) => { 
                                e.preventDefault(); 
                                handleNavClick('one-page');
                            }} 
                             className={`${navLinkClasses} ${currentPage === 'one-page' ? activeClasses : inactiveClasses}`}
                        >
                            <OnePageIcon />
                            <span className="ml-3">One-Page</span>
                        </a>
                    </nav>
                </div>
            </div>
            {/* Backdrop for mobile */}
            {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-20 md:hidden" onClick={() => setIsOpen(false)}></div>}
        </>
    );
};

export default Sidebar;