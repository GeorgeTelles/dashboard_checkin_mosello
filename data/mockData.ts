
import { CheckInStatus, type Lawyer, type Hearing, type Process } from '../types';

// ⚠️ AVISO: Estes dados são fallback/padrão. 
// Os dados reais vêm da API (tabela 'audiencias' no PostgreSQL)

export const lawyers: Lawyer[] = [];

export const checkInStats = {
  total: 0,
  presencial: 0,
  videoconferencia: 0,
  whatsapp: 0,
  ta_sent: 0,
  ta_not_sent: 0,
};

export const weeklyChartData: any[] = [];

export const evolutionChartData: any[] = [];

export const audienceSummary = {
  total_today: 0,
  presencial: 0,
  videoconferencia: 0,
  whatsapp: 0,
  encontrado: 0,
  nao_encontrado: 0,
};

export const happeningNowHearings: Hearing[] = [];

export const processList: Process[] = [
    { id: 'p1', processNumber: '0001234-56.2024.8.26.0100', hearingDate: '03 de dez. de 2025', hearingTime: '09:30', mainLawyer: lawyers[0], checkInStatus: CheckInStatus.Feito, confirmationTime: '08:45' },
    { id: 'p2', processNumber: '0002345-67.2024.8.26.0100', hearingDate: '03 de dez. de 2025', hearingTime: '10:00', mainLawyer: lawyers[1], checkInStatus: CheckInStatus.Feito, confirmationTime: '09:15' },
    { id: 'p3', processNumber: '0003456-78.2024.8.26.0100', hearingDate: '03 de dez. de 2025', hearingTime: '10:30', mainLawyer: lawyers[2], checkInStatus: CheckInStatus.Pendente, confirmationTime: null },
    { id: 'p4', processNumber: '0004567-89.2024.8.26.0100', hearingDate: '03 de dez. de 2025', hearingTime: '11:00', mainLawyer: lawyers[3], checkInStatus: CheckInStatus.Feito, confirmationTime: '09:30' },
    { id: 'p5', processNumber: '0005678-90.2024.8.26.0100', hearingDate: '03 de dez. de 2025', hearingTime: '14:00', mainLawyer: lawyers[4], checkInStatus: CheckInStatus.Atrasado, confirmationTime: null },
    { id: 'p6', processNumber: '0006789-01.2024.8.26.0100', hearingDate: '03 de dez. de 2025', hearingTime: '14:30', mainLawyer: lawyers[5], checkInStatus: CheckInStatus.Pendente, confirmationTime: null },
    { id: 'p7', processNumber: '0007890-12.2024.8.26.0100', hearingDate: '03 de dez. de 2025', hearingTime: '15:00', mainLawyer: lawyers[6], checkInStatus: CheckInStatus.Feito, confirmationTime: '13:20' },
    { id: 'p8', processNumber: '0008901-23.2024.8.26.0100', hearingDate: '03 de dez. de 2025', hearingTime: '16:00', mainLawyer: lawyers[7], checkInStatus: CheckInStatus.Pendente, confirmationTime: null },
];
