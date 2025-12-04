import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Clock, MapPin, User, CheckCircle2, AlertCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const currentHearings = [
  {
    id: 1,
    processo: "0001234-56.2024.8.26.0100",
    advogado: "Dr. Carlos Silva",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    iniciais: "CS",
    hora: "09:30",
    local: "Fórum Central - Sala 201",
    checkIn: "confirmado",
    status: "em-andamento",
  },
  {
    id: 2,
    processo: "0002345-67.2024.8.26.0100",
    advogado: "Dra. Ana Paula",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    iniciais: "AP",
    hora: "10:00",
    local: "Fórum Central - Sala 305",
    checkIn: "confirmado",
    status: "aguardando",
  },
  {
    id: 3,
    processo: "0003456-78.2024.8.26.0100",
    advogado: "Dr. Roberto Santos",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    iniciais: "RS",
    hora: "10:30",
    local: "Fórum da Barra Funda - Sala 102",
    checkIn: "pendente",
    status: "proximo",
  },
];

export function CurrentHearings() {
  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2>Audiências Acontecendo Agora</h2>
          <p className="text-muted-foreground">
            Monitoramento em tempo real das audiências de hoje
          </p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50">
          <div className="h-3 w-3 animate-pulse rounded-full bg-red-500" />
        </div>
      </div>

      <div className="space-y-4">
        {currentHearings.map((hearing) => (
          <div
            key={hearing.id}
            className="flex items-start gap-4 rounded-lg border p-4 transition-colors hover:bg-slate-50"
          >
            <Avatar className="h-12 w-12">
              <AvatarImage src={hearing.avatar} alt={hearing.advogado} />
              <AvatarFallback>{hearing.iniciais}</AvatarFallback>
            </Avatar>

            <div className="flex-1 space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-muted-foreground">
                    Processo {hearing.processo}
                  </p>
                  <div className="mt-1 flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span>{hearing.advogado}</span>
                  </div>
                </div>
                {hearing.checkIn === "confirmado" ? (
                  <Badge variant="secondary" className="gap-1 bg-green-50 text-green-700">
                    <CheckCircle2 className="h-3 w-3" />
                    Confirmado
                  </Badge>
                ) : (
                  <Badge variant="secondary" className="gap-1 bg-orange-50 text-orange-700">
                    <AlertCircle className="h-3 w-3" />
                    Pendente
                  </Badge>
                )}
              </div>

              <div className="flex flex-wrap gap-4 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{hearing.hora}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{hearing.local}</span>
                </div>
              </div>

              {hearing.status === "em-andamento" && (
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                  <span className="text-green-600">Em andamento</span>
                </div>
              )}
              {hearing.status === "aguardando" && (
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-blue-500" />
                  <span className="text-blue-600">Aguardando início</span>
                </div>
              )}
              {hearing.status === "proximo" && (
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-slate-400" />
                  <span className="text-muted-foreground">Próximo</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
