
import { CheckInStatus, type Lawyer, type Hearing, type Process } from '../types';

export const lawyers: Lawyer[] = [
  { id: '1', name: 'Dr. Carlos Silva', avatarUrl: 'https://i.pravatar.cc/150?u=carlos' },
  { id: '2', name: 'Dra. Ana Paula', avatarUrl: 'https://i.pravatar.cc/150?u=ana' },
  { id: '3', name: 'Dr. Roberto Santos', avatarUrl: 'https://i.pravatar.cc/150?u=roberto' },
  { id: '4', name: 'Dra. Mariana Costa', avatarUrl: 'https://i.pravatar.cc/150?u=mariana' },
  { id: '5', name: 'Dr. Fernando Lima', avatarUrl: 'https://i.pravatar.cc/150?u=fernando' },
  { id: '6', name: 'Dra. Juliana Alves', avatarUrl: 'https://i.pravatar.cc/150?u=juliana' },
  { id: '7', name: 'Dr. Paulo Mendes', avatarUrl: 'https://i.pravatar.cc/150?u=paulo' },
  { id: '8', name: 'Dra. Beatriz Rodrigues', avatarUrl: 'https://i.pravatar.cc/150?u=beatriz' },
];

export const checkInStats = {
  done: 127,
  pending: 18,
  late: 5,
  confirmationRate: 96.2,
  rateChange: 3.1,
};

export const weeklyChartData = [
  { day: 'Seg', Feito: 15, Pendente: 3, Atrasado: 1 },
  { day: 'Ter', Feito: 12, Pendente: 5, Atrasado: 2 },
  { day: 'Qua', Feito: 18, Pendente: 4, Atrasado: 1 },
  { day: 'Qui', Feito: 13, Pendente: 5, Atrasado: 2 },
  { day: 'Sex', Feito: 20, Pendente: 2, Atrasado: 0 },
  { day: 'Sab', Feito: 8, Pendente: 1, Atrasado: 0 },
];

export const evolutionChartData = [
  { month: 'Jul', total: 220 },
  { month: 'Ago', total: 250 },
  { month: 'Set', total: 310 },
  { month: 'Out', total: 290 },
  { month: 'Nov', total: 340 },
  { month: 'Dez', total: 380 },
];

export const audienceSummary = {
  today: 32,
  confirmed: 27,
  waiting: 3,
  attention: 2,
};

export const happeningNowHearings: Hearing[] = [
  { id: 'h1', processNumber: '0001234-56.2024.8.26.0100', lawyer: lawyers[0], time: '09:30', location: 'Fórum Central - Sala 201', status: 'Em andamento', confirmation: 'Confirmado' },
  { id: 'h2', processNumber: '0002345-67.2024.8.26.0100', lawyer: lawyers[1], time: '10:00', location: 'Fórum Central - Sala 305', status: 'Aguardando início', confirmation: 'Confirmado' },
  { id: 'h3', processNumber: '0003456-78.2024.8.26.0100', lawyer: lawyers[2], time: '10:30', location: 'Fórum da Barra Funda - Sala 102', status: 'Próximo', confirmation: 'Pendente' },
];

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
