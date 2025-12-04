import express from 'express';
import pg from 'pg';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const { Pool } = pg;

// Configuração do Pool de conexão com PostgreSQL
const pool = new Pool({
  user: process.env.DB_USER || 'admin',
  password: process.env.DB_PASSWORD || '',
  host: process.env.DB_HOST || '84.46.246.201',
  port: process.env.DB_PORT || 5433,
  database: process.env.DB_NAME || 'checkin',
});

// Middleware
app.use(cors());
app.use(express.json());

// Testar conexão
pool.on('error', (err) => {
  console.error('Erro inesperado no pool de conexões:', err);
});

// Rota de teste
app.get('/api/test-connection', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ success: true, timestamp: result.rows[0].now });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// AUDIÊNCIAS - Buscar todas
app.get('/api/hearings', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT * FROM audiencias
      ORDER BY data_evento DESC, hora_evento DESC
    `);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// AUDIÊNCIAS - Por data (hoje)
app.get('/api/hearings/today', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT * FROM audiencias
      WHERE data_evento = CURRENT_DATE
      ORDER BY hora_evento
    `);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ESTATÍSTICAS - Check-ins
app.get('/api/check-ins', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        COUNT(*) as total,
        COUNT(CASE WHEN status = 'presencial' THEN 1 END) as presencial,
        COUNT(CASE WHEN status = 'videoconferencia' THEN 1 END) as videoconferencia,
        COUNT(CASE WHEN status = 'whatsapp' THEN 1 END) as whatsapp,
        COUNT(CASE WHEN ta_sent = true THEN 1 END) as ta_sent,
        COUNT(CASE WHEN ta_sent = false THEN 1 END) as ta_not_sent
      FROM audiencias
    `);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// RESUMO DO DIA
app.get('/api/audience-summary', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        COUNT(*) as total_today,
        COUNT(CASE WHEN presencial = true THEN 1 END) as presencial,
        COUNT(CASE WHEN videoconferencia = true THEN 1 END) as videoconferencia,
        COUNT(CASE WHEN whatsapp_destino IS NOT NULL THEN 1 END) as whatsapp,
        COUNT(CASE WHEN encontrado_na_lista = true THEN 1 END) as encontrado,
        COUNT(CASE WHEN encontrado_na_lista = false THEN 1 END) as nao_encontrado
      FROM audiencias
      WHERE data_evento = CURRENT_DATE
    `);
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DADOS SEMANAIS
app.get('/api/weekly-data', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        TO_CHAR(data_evento, 'Dy') as day,
        COUNT(*) as total,
        COUNT(CASE WHEN presencial = true THEN 1 END) as presencial,
        COUNT(CASE WHEN videoconferencia = true THEN 1 END) as videoconferencia,
        COUNT(CASE WHEN ta_sent = true THEN 1 END) as ta_sent
      FROM audiencias
      WHERE data_evento >= CURRENT_DATE - INTERVAL '7 days'
      GROUP BY TO_CHAR(data_evento, 'Dy'), data_evento
      ORDER BY data_evento
    `);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DADOS DE EVOLUÇÃO (MENSAL)
app.get('/api/evolution-data', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT 
        TO_CHAR(data_evento, 'Mon') as month,
        EXTRACT(MONTH FROM data_evento) as month_num,
        COUNT(*) as total,
        COUNT(CASE WHEN presencial = true THEN 1 END) as presencial,
        COUNT(CASE WHEN videoconferencia = true THEN 1 END) as videoconferencia
      FROM audiencias
      WHERE data_evento >= CURRENT_DATE - INTERVAL '6 months'
      GROUP BY TO_CHAR(data_evento, 'Mon'), EXTRACT(MONTH FROM data_evento)
      ORDER BY month_num
    `);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PESSOAS (ENCARREGADOS)
app.get('/api/lawyers', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT DISTINCT encarregado_nome as name
      FROM audiencias
      WHERE encarregado_nome IS NOT NULL
      ORDER BY encarregado_nome
    `);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PROCESSOS
app.get('/api/processes', async (req, res) => {
  try {
    const result = await pool.query(`
      SELECT DISTINCT 
        processo as number,
        processo_pasta as folder,
        assunto,
        COUNT(*) as total_audiencias
      FROM audiencias
      WHERE processo IS NOT NULL
      GROUP BY processo, processo_pasta, assunto
      ORDER BY processo
    `);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  console.log(`Conectando ao PostgreSQL em ${process.env.DB_HOST}:${process.env.DB_PORT}`);
});
