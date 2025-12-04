@echo off
REM Script de Setup para conectar ao banco de dados

echo ========================================
echo   Setup - Dashboard Checkin
echo ========================================
echo.

REM Instalar dependências do frontend
echo [1/3] Instalando dependências do frontend...
call npm install
if errorlevel 1 (
    echo Erro ao instalar dependências do frontend
    exit /b 1
)

REM Instalar dependências do servidor
echo.
echo [2/3] Instalando dependências do servidor...
cd /d "%~dp0"
call npm install --prefix . express pg cors dotenv
if errorlevel 1 (
    echo Erro ao instalar dependências do servidor
    exit /b 1
)

REM Confirmar configuração do banco
echo.
echo [3/3] Configurando banco de dados...
echo.
echo Suas credenciais estão no arquivo .env
echo Host: 84.46.246.201:5433
echo Database: checkin
echo Usuario: admin
echo.
echo IMPORTANTE: Execute o arquivo database_schema.sql no seu PostgreSQL
echo para criar as tabelas necessárias.
echo.
pause

echo.
echo ========================================
echo   Setup Concluído!
echo ========================================
echo.
echo Para iniciar o desenvolvimento:
echo   Terminal 1: npm run dev
echo   Terminal 2: npm run dev:server
echo.
pause
