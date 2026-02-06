
import React from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import LoginPage from './components/LoginPage';
import OnePage from './components/OnePage';

function App() {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  
  const handleLoginSuccess = () => {
      setIsAuthenticated(true);
  };
  
  const handleLogout = () => {
      setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <LoginPage onLoginSuccess={handleLoginSuccess} />;
  }


  return (
    <div className="flex h-screen bg-slate-100 text-gray-800 font-sans dark:bg-slate-900 dark:text-slate-200">
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
            onMenuClick={() => {}}
            theme={theme}
            setTheme={setTheme}
            onLogout={handleLogout}
        />
        <main className="flex-1 overflow-hidden">
          <OnePage />
        </main>
      </div>
    </div>
  );
}

export default App;