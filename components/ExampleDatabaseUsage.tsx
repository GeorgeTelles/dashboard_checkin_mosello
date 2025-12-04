// Exemplo de como usar os dados do banco em um componente React

import { useEffect, useState } from 'react';
import { fetchLawyers, fetchCheckInStats, testConnection } from '../services/dbService';

export function ExampleComponent() {
  const [lawyers, setLawyers] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        
        // Testar conexão primeiro
        const connection = await testConnection();
        if (!connection) {
          setError('Não foi possível conectar ao servidor');
          return;
        }

        // Buscar advogados
        const lawyersData = await fetchLawyers();
        setLawyers(lawyersData);

        // Buscar estatísticas
        const statsData = await fetchCheckInStats();
        setStats(statsData);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <div>
      <h2>Advogados ({lawyers.length})</h2>
      <ul>
        {lawyers.map(lawyer => (
          <li key={lawyer.id}>{lawyer.name}</li>
        ))}
      </ul>

      {stats && (
        <div>
          <h2>Estatísticas</h2>
          <p>Feitos: {stats.done}</p>
          <p>Pendentes: {stats.pending}</p>
          <p>Atrasados: {stats.late}</p>
        </div>
      )}
    </div>
  );
}
