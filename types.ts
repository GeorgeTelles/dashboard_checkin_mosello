
export enum CheckInStatus {
  Feito = "Feito",
  Pendente = "Pendente",
  Atrasado = "Atrasado",
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
  confirmation: 'Confirmado' | 'Pendente';
}

export interface Process {
  id: string;
  processNumber: string;
  hearingDate: string;
  hearingTime: string;
  mainLawyer: Lawyer;
  checkInStatus: CheckInStatus;
  confirmationTime: string | null;
}
