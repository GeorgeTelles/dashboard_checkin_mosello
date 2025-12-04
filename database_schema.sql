-- ⚠️ IMPORTANTE: Este arquivo é apenas para REFERÊNCIA
-- A tabela 'audiencias' já existe no seu banco de dados

-- Estrutura da tabela audiencias (já existente no seu banco)
CREATE TABLE IF NOT EXISTS audiencias (
  id SERIAL PRIMARY KEY,
  status VARCHAR(50),
  processo VARCHAR(50),
  telefone VARCHAR(20),
  checkin_id INTEGER,
  ta_sent BOOLEAN DEFAULT FALSE,
  data_evento DATE NOT NULL,
  hora_evento TIME,
  processo_pasta VARCHAR(255),
  assunto TEXT,
  encarregado_nome VARCHAR(255),
  pessoa_nome VARCHAR(255),
  local_evento VARCHAR(255),
  presencial BOOLEAN DEFAULT FALSE,
  videoconferencia BOOLEAN DEFAULT FALSE,
  whatsapp_destino VARCHAR(50),
  encontrado_na_lista BOOLEAN,
  hora_checkin TIME,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Índices para melhor performance
CREATE INDEX IF NOT EXISTS idx_audiencias_data ON audiencias(data_evento);
CREATE INDEX IF NOT EXISTS idx_audiencias_processo ON audiencias(processo);
CREATE INDEX IF NOT EXISTS idx_audiencias_encarregado ON audiencias(encarregado_nome);
CREATE INDEX IF NOT EXISTS idx_audiencias_ta_sent ON audiencias(ta_sent);
