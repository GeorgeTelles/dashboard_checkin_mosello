// Serviço para buscar dados do backend
const API_URL = 'http://localhost:3001/api';

export async function fetchHearings() {
  try {
    const response = await fetch(`${API_URL}/hearings`);
    if (!response.ok) throw new Error('Erro ao buscar audiências');
    return await response.json();
  } catch (error) {
    console.error('Erro:', error);
    return [];
  }
}

export async function fetchHearingsToday() {
  try {
    const response = await fetch(`${API_URL}/hearings/today`);
    if (!response.ok) throw new Error('Erro ao buscar audiências de hoje');
    return await response.json();
  } catch (error) {
    console.error('Erro:', error);
    return [];
  }
}

export async function fetchCheckInStats() {
  try {
    const response = await fetch(`${API_URL}/check-ins`);
    if (!response.ok) throw new Error('Erro ao buscar estatísticas');
    const data = await response.json();
    return {
      total: data.total || 0,
      presencial: data.presencial || 0,
      videoconferencia: data.videoconferencia || 0,
      whatsapp: data.whatsapp || 0,
      ta_sent: data.ta_sent || 0,
      ta_not_sent: data.ta_not_sent || 0,
    };
  } catch (error) {
    console.error('Erro:', error);
    return null;
  }
}

export async function fetchAudienceSummary() {
  try {
    const response = await fetch(`${API_URL}/audience-summary`);
    if (!response.ok) throw new Error('Erro ao buscar resumo de audiências');
    return await response.json();
  } catch (error) {
    console.error('Erro:', error);
    return null;
  }
}

export async function fetchWeeklyData() {
  try {
    const response = await fetch(`${API_URL}/weekly-data`);
    if (!response.ok) throw new Error('Erro ao buscar dados semanais');
    return await response.json();
  } catch (error) {
    console.error('Erro:', error);
    return [];
  }
}

export async function fetchEvolutionData() {
  try {
    const response = await fetch(`${API_URL}/evolution-data`);
    if (!response.ok) throw new Error('Erro ao buscar dados de evolução');
    return await response.json();
  } catch (error) {
    console.error('Erro:', error);
    return [];
  }
}

export async function fetchLawyers() {
  try {
    const response = await fetch(`${API_URL}/lawyers`);
    if (!response.ok) throw new Error('Erro ao buscar pessoas');
    return await response.json();
  } catch (error) {
    console.error('Erro:', error);
    return [];
  }
}

export async function fetchProcesses() {
  try {
    const response = await fetch(`${API_URL}/processes`);
    if (!response.ok) throw new Error('Erro ao buscar processos');
    return await response.json();
  } catch (error) {
    console.error('Erro:', error);
    return [];
  }
}

export async function testConnection() {
  try {
    const response = await fetch(`${API_URL}/test-connection`);
    if (!response.ok) throw new Error('Erro na conexão');
    return await response.json();
  } catch (error) {
    console.error('Erro de conexão:', error);
    return null;
  }
}
