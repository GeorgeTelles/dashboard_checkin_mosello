import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { MoreHorizontal, ArrowUpDown, MessageSquare } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const entries = [
  {
    id: "0001234-56.2024.8.26.0100",
    processo: "0001234-56.2024.8.26.0100",
    dataAudiencia: "2025-12-04",
    horaAudiencia: "09:30",
    encarregado: "Dr. Carlos Silva",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    iniciais: "CS",
    status: "feito",
    checkInTime: "08:45",
  },
  {
    id: "0002345-67.2024.8.26.0100",
    processo: "0002345-67.2024.8.26.0100",
    dataAudiencia: "2025-12-04",
    horaAudiencia: "10:00",
    encarregado: "Dra. Ana Paula",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    iniciais: "AP",
    status: "feito",
    checkInTime: "09:15",
  },
  {
    id: "0003456-78.2024.8.26.0100",
    processo: "0003456-78.2024.8.26.0100",
    dataAudiencia: "2025-12-04",
    horaAudiencia: "10:30",
    encarregado: "Dr. Roberto Santos",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    iniciais: "RS",
    status: "pendente",
    checkInTime: null,
  },
  {
    id: "0004567-89.2024.8.26.0100",
    processo: "0004567-89.2024.8.26.0100",
    dataAudiencia: "2025-12-04",
    horaAudiencia: "11:00",
    encarregado: "Dra. Mariana Costa",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    iniciais: "MC",
    status: "feito",
    checkInTime: "09:30",
  },
  {
    id: "0005678-90.2024.8.26.0100",
    processo: "0005678-90.2024.8.26.0100",
    dataAudiencia: "2025-12-04",
    horaAudiencia: "14:00",
    encarregado: "Dr. Fernando Lima",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    iniciais: "FL",
    status: "atrasado",
    checkInTime: null,
  },
  {
    id: "0006789-01.2024.8.26.0100",
    processo: "0006789-01.2024.8.26.0100",
    dataAudiencia: "2025-12-04",
    horaAudiencia: "14:30",
    encarregado: "Dra. Juliana Alves",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
    iniciais: "JA",
    status: "pendente",
    checkInTime: null,
  },
  {
    id: "0007890-12.2024.8.26.0100",
    processo: "0007890-12.2024.8.26.0100",
    dataAudiencia: "2025-12-04",
    horaAudiencia: "15:00",
    encarregado: "Dr. Paulo Mendes",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    iniciais: "PM",
    status: "feito",
    checkInTime: "13:20",
  },
  {
    id: "0008901-23.2024.8.26.0100",
    processo: "0008901-23.2024.8.26.0100",
    dataAudiencia: "2025-12-04",
    horaAudiencia: "16:00",
    encarregado: "Dra. Beatriz Rodrigues",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    iniciais: "BR",
    status: "pendente",
    checkInTime: null,
  },
];

const statusConfig = {
  "feito": { label: "Feito", variant: "secondary" as const, color: "bg-green-100 text-green-800 border-green-200" },
  "pendente": { label: "Pendente", variant: "outline" as const, color: "bg-orange-100 text-orange-800 border-orange-200" },
  "atrasado": { label: "Atrasado", variant: "destructive" as const, color: "bg-red-100 text-red-800 border-red-200" },
};

export function EntriesTable() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2>Lista de Processos</h2>
          <p className="text-muted-foreground">
            Audiências agendadas e status de check-in dos advogados
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <MessageSquare className="h-4 w-4" />
            Enviar Lembrete
          </Button>
          <Button variant="outline" size="sm" className="gap-2">
            <ArrowUpDown className="h-4 w-4" />
            Ordenar
          </Button>
        </div>
      </div>

      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Processo</TableHead>
              <TableHead>Data da Audiência</TableHead>
              <TableHead>Hora da Audiência</TableHead>
              <TableHead>Encarregado Principal</TableHead>
              <TableHead>Status Check-In</TableHead>
              <TableHead>Confirmação</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {entries.map((entry) => (
              <TableRow key={entry.id}>
                <TableCell>
                  <span className="font-mono">{entry.processo}</span>
                </TableCell>
                <TableCell>
                  {new Date(entry.dataAudiencia).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                  })}
                </TableCell>
                <TableCell>
                  <span>{entry.horaAudiencia}</span>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={entry.avatar} alt={entry.encarregado} />
                      <AvatarFallback>{entry.iniciais}</AvatarFallback>
                    </Avatar>
                    <span>{entry.encarregado}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className={statusConfig[entry.status].color}>
                    {statusConfig[entry.status].label}
                  </Badge>
                </TableCell>
                <TableCell>
                  {entry.checkInTime ? (
                    <span className="text-muted-foreground">{entry.checkInTime}</span>
                  ) : (
                    <span className="text-muted-foreground">-</span>
                  )}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Abrir menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Ver detalhes</DropdownMenuItem>
                      <DropdownMenuItem>Enviar lembrete</DropdownMenuItem>
                      <DropdownMenuItem>Editar audiência</DropdownMenuItem>
                      <DropdownMenuItem>Histórico de mensagens</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}