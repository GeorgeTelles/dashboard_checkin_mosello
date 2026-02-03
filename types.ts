
export enum CheckInStatus {
  Feito = "Feito",
  Pendente = "A Confirmar",
  Atrasado = "Não Realizado",
  Nulo = "-"
}

export interface Lawyer {
  id: string;
  name: string;
  avatarUrl: string;
}

export interface Hearing {
  id: string;
  processNumber: string;
  lawyer: Lawyer;
  time: string;
  location: string;
  status: 'Em andamento' | 'Aguardando início' | 'Próximo';
  confirmation: 'Confirmado' | 'A Confirmar';
}

export interface Process {
  id: string;
  processNumber: string;
  subject?: string;
  hearingDate: string;
  hearingTime: string;
  location?: string;
  mainLawyer: Lawyer;
  checkInStatus: CheckInStatus;
  confirmationTime: string | null;
  checkOutStatus: CheckInStatus;
  checkOutTime: string | null;
}

export interface Audience {
  id: string;
  'processo.pasta': string;
  assunto?: string;
  data: string;
  hora: string;
  'encarregado.nome': string;
  status_checkin: string;
  hora_checkin?: string;
  status_checkout?: string;
  hora_checkout?: string;
  'processo.faseatual.vara'?: string;
}
