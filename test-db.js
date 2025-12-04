// Script para testar a conexão com o banco de dados
// Execute com: node test-db.js

import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  user: process.env.DB_USER || 'admin',
  password: process.env.DB_PASSWORD || '',
  host: process.env.DB_HOST || '84.46.246.201',
  port: process.env.DB_PORT || 5433,
  database: process.env.DB_NAME || 'checkin',
});

async function testConnection() {
  try {
    console.log('🔍 Testando conexão com PostgreSQL...');
    console.log('📍 Host:', process.env.DB_HOST);
    console.log('📍 Porta:', process.env.DB_PORT);
    console.log('📍 Database:', process.env.DB_NAME);
    console.log('📍 Usuário:', process.env.DB_USER);
    console.log('');

    const result = await pool.query('SELECT NOW(), version()');
    
    console.log('✅ Conexão bem-sucedida!');
    console.log('⏰ Timestamp do servidor:', result.rows[0].now);
    console.log('🐘 Versão PostgreSQL:', result.rows[0].version);

    // Testar tabelas
    console.log('');
    console.log('📊 Verificando tabelas...');
    
    const tables = await pool.query(`
      SELECT table_name FROM information_schema.tables 
      WHERE table_schema = 'public'
    `);

    if (tables.rows.length === 0) {
      console.log('⚠️  Nenhuma tabela encontrada. Execute database_schema.sql primeiro!');
    } else {
      console.log('✅ Tabelas encontradas:');
      tables.rows.forEach(t => console.log('   -', t.table_name));
    }

    // Contar registros
    console.log('');
    console.log('📈 Registros nas tabelas:');
    
    const tables_to_check = ['lawyers', 'processes', 'check_ins', 'hearings'];
    for (const table of tables_to_check) {
      try {
        const count = await pool.query(`SELECT COUNT(*) FROM ${table}`);
        console.log(`   - ${table}: ${count.rows[0].count} registros`);
      } catch (e) {
        console.log(`   - ${table}: ❌ Tabela não existe`);
      }
    }

  } catch (error) {
    console.error('❌ Erro na conexão:');
    console.error('   ' + error.message);
    console.error('');
    console.error('Verifique:');
    console.error('  1. Host/Porta estão corretos?');
    console.error('  2. Database "checkin" existe?');
    console.error('  3. Credenciais estão corretas?');
    console.error('  4. Firewall permite a conexão?');
  } finally {
    await pool.end();
    process.exit(0);
  }
}

testConnection();
