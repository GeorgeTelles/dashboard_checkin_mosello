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
  lawyer: { name: string; avatarUrl: string };
  time: string;
  location: string;
  status: string; // Alterado para string para maior flexibilidade
  confirmation: string; // Alterado para string para maior flexibilidade
}

export interface Process {
  id: string;
  processNumber: string;
  hearingDate: string;
  hearingTime: string;
  mainLawyer: { name: string; avatarUrl: string };
  checkInStatus: CheckInStatus;
  confirmationTime: string | null;
  location: string;
}
