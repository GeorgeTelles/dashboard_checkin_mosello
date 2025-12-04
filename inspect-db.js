// Script para inspecionar toda a estrutura do banco de dados
// Execute: node inspect-db.js

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

async function inspectDatabase() {
  try {
    console.log('🔍 Inspecionando banco de dados...\n');

    // 1. Listar todas as tabelas
    const tablesResult = await pool.query(`
      SELECT table_name FROM information_schema.tables 
      WHERE table_schema = 'public'
      ORDER BY table_name
    `);

    console.log('📊 TABELAS ENCONTRADAS:');
    console.log('═'.repeat(60));
    
    for (const tableRow of tablesResult.rows) {
      const tableName = tableRow.table_name;
      
      // Obter colunas de cada tabela
      const columnsResult = await pool.query(`
        SELECT 
          column_name,
          data_type,
          is_nullable,
          column_default
        FROM information_schema.columns
        WHERE table_schema = 'public' AND table_name = $1
        ORDER BY ordinal_position
      `, [tableName]);

      console.log(`\n📋 Tabela: ${tableName}`);
      console.log('─'.repeat(60));
      
      columnsResult.rows.forEach(col => {
        const nullable = col.is_nullable === 'YES' ? 'NULL' : 'NOT NULL';
        const defaultVal = col.column_default ? ` DEFAULT ${col.column_default}` : '';
        console.log(`  • ${col.column_name.padEnd(25)} ${col.data_type.padEnd(15)} ${nullable}${defaultVal}`);
      });

      // Contar registros
      const countResult = await pool.query(`SELECT COUNT(*) as count FROM ${tableName}`);
      console.log(`\n  Total de registros: ${countResult.rows[0].count}`);
      
      // Mostrar alguns registros de exemplo
      if (countResult.rows[0].count > 0) {
        const sampleResult = await pool.query(`SELECT * FROM ${tableName} LIMIT 1`);
        console.log(`\n  Exemplo de registro:`);
        Object.entries(sampleResult.rows[0]).forEach(([key, value]) => {
          const displayValue = value === null ? 'NULL' : 
                              typeof value === 'string' && value.length > 50 ? 
                              value.substring(0, 50) + '...' : 
                              value;
          console.log(`    - ${key}: ${displayValue}`);
        });
      }
    }

    console.log('\n' + '═'.repeat(60));
    console.log('✅ Inspeção concluída!\n');

    // Gerar SQL CREATE TABLE para referência
    console.log('📝 SCRIPTS CREATE TABLE:\n');
    
    for (const tableRow of tablesResult.rows) {
      const tableName = tableRow.table_name;
      const columnsResult = await pool.query(`
        SELECT 
          column_name,
          data_type,
          is_nullable,
          column_default
        FROM information_schema.columns
        WHERE table_schema = 'public' AND table_name = $1
        ORDER BY ordinal_position
      `, [tableName]);

      console.log(`\n-- Tabela: ${tableName}`);
      console.log(`CREATE TABLE ${tableName} (`);
      
      columnsResult.rows.forEach((col, index) => {
        const nullable = col.is_nullable === 'YES' ? '' : ' NOT NULL';
        const defaultVal = col.column_default ? ` DEFAULT ${col.column_default}` : '';
        const comma = index < columnsResult.rows.length - 1 ? ',' : '';
        console.log(`  ${col.column_name} ${col.data_type}${nullable}${defaultVal}${comma}`);
      });
      
      console.log(`);`);
    }

  } catch (error) {
    console.error('❌ Erro:', error.message);
  } finally {
    await pool.end();
  }
}

inspectDatabase();
