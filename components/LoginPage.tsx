import React from 'react';

const LogoIcon = () => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
        <path d="M16 3.5L4 10.5V24.5L16 31.5L28 24.5V10.5L16 3.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 17.5L4 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 17.5V31.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 17.5L28 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 14.5L23 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);


interface LoginPageProps {
    onLoginSuccess: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (login === 'admin' && password === 'admin') {
            onLoginSuccess();
        } else {
            setError('Login ou senha inválidos.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-slate-100">
            <div className="w-full max-w-sm p-10 space-y-8 bg-white rounded-2xl shadow-lg border border-slate-200/50">
                <div className="flex flex-col items-center">
                    <div className="p-3 rounded-xl bg-blue-600 mb-4">
                        <LogoIcon />
                    </div>
                    <h1 className="text-2xl font-bold text-center text-gray-900">Mosello Advocacia</h1>
                    <p className="text-center text-gray-500">Painel de Check-In</p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-lg -space-y-px overflow-hidden">
                        <div>
                            <label htmlFor="login-address" className="sr-only">Login</label>
                            <input
                                id="login-address"
                                name="login"
                                type="text"
                                value={login}
                                onChange={(e) => setLogin(e.target.value)}
                                required
                                className="appearance-none relative block w-full px-4 py-3 bg-slate-800 border border-slate-800 placeholder-slate-400 text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Login"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Senha</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="appearance-none relative block w-full px-4 py-3 bg-slate-800 border border-slate-800 placeholder-slate-400 text-white focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500 focus:z-10 sm:text-sm"
                                placeholder="Senha"
                            />
                        </div>
                    </div>

                    {error && (
                        <p className="text-sm text-red-600 text-center !mt-4">{error}</p>
                    )}

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Entrar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
