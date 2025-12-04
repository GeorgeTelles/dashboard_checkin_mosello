#!/bin/bash
# Script de setup para Linux/Mac

echo "========================================="
echo "  Setup - Dashboard Checkin"
echo "========================================="
echo ""

# Instalar dependências do frontend
echo "[1/3] Instalando dependências do frontend..."
npm install
if [ $? -ne 0 ]; then
    echo "Erro ao instalar dependências do frontend"
    exit 1
fi

# Instalar dependências do servidor
echo ""
echo "[2/3] Instalando dependências do servidor..."
npm install express pg cors dotenv
if [ $? -ne 0 ]; then
    echo "Erro ao instalar dependências do servidor"
    exit 1
fi

# Confirmar configuração do banco
echo ""
echo "[3/3] Configurando banco de dados..."
echo ""
echo "Suas credenciais estão no arquivo .env"
echo "Host: 84.46.246.201:5433"
echo "Database: checkin"
echo "Usuario: admin"
echo ""
echo "IMPORTANTE: Execute o arquivo database_schema.sql no seu PostgreSQL"
echo "para criar as tabelas necessárias."
echo ""
read -p "Pressione ENTER para continuar..."

echo ""
echo "========================================="
echo "  Setup Concluído!"
echo "========================================="
echo ""
echo "Para iniciar o desenvolvimento:"
echo "  Terminal 1: npm run dev"
echo "  Terminal 2: npm run dev:server"
echo ""
echo "Para testar a conexão:"
echo "  node test-db.js"
echo ""
read -p "Pressione ENTER para sair..."
