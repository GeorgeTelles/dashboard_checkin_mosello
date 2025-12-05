require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 3001;

// Configuração do CORS para permitir requisições do seu frontend
app.use(cors({
  origin: '*' // Em produção, restrinja para o seu domínio: 'https://dashboard.mosello.net.br'
}));

// Configuração da Conexão com o PostgreSQL
const pool = new Pool({
  host: process.env.PG_HOST || 'host.docker.internal',
  port: process.env.PG_PORT || 5433,
  database: process.env.PG_DATABASE || 'checkin',
  user: process.env.PG_USER || 'admin',
  password: process.env.MOSELLO_PG_ADMIN_PASSWORD,
  ssl: false,
});

// Rota de API para buscar as audiências
app.get('/api/audiencias', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM audiencias ORDER BY data_evento DESC, hora_evento DESC');
    res.json(rows);
  } catch (err) {
    console.error('Erro ao buscar audiências:', err);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Rota de health check
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`Servidor da API rodando na porta ${port}`);
});
