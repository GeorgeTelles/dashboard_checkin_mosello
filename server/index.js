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
  host: process.env.PG_HOST || 'db.mosello.net.br',
  port: process.env.PG_PORT || 5433,
  database: process.env.PG_DATABASE || 'checkin',
  user: process.env.PG_USER || 'admin',
  password: process.env.MOSELLO_PG_ADMIN_PASSWORD,
  ssl: true,
});

// Rota de API para buscar as audiências
app.get('/audiencias', async (req, res) => {
  try {
    const { date } = req.query;
    
    let query;
    let queryParams = [];
    
    if (date) {
      // Se uma data específica foi fornecida (formato YYYY-MM-DD)
      query = `
        SELECT *
        FROM audiencias_check
        WHERE "processo.pasta" IS NOT NULL
          AND to_date("data", 'DD/MM/YYYY') = $1
        ORDER BY to_date("data", 'DD/MM/YYYY') DESC, "hora" DESC;
      `;
      queryParams = [date];
    } else {
      // Se nenhuma data foi fornecida, retorna TODAS as audiências
      query = `
        SELECT *
        FROM audiencias_check
        WHERE "processo.pasta" IS NOT NULL
        ORDER BY to_date("data", 'DD/MM/YYYY') DESC, "hora" DESC;
      `;
    }
    
    const { rows } = await pool.query(query, queryParams);
    res.json(rows);
  } catch (err) {
    console.error('Erro ao buscar audiências:', err);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
});

// Rota de teste de conexão com o banco de dados
app.get('/db-test', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT NOW()');
    client.release();
    res.json({ success: true, dbTime: result.rows[0].now });
  } catch (err) {
    console.error('Erro no teste de conexão com o banco:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Rota de health check
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.listen(port, () => {
  console.log(`Servidor da API rodando na porta ${port}`);
});
