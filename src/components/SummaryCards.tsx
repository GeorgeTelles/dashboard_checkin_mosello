import { Clock, CheckCircle2, AlertCircle, TrendingUp } from "lucide-react";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";

const summaryData = [
  {
    title: "Audiências Hoje",
    count: 32,
    icon: Clock,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    progress: 85,
    description: "Agendadas para hoje",
  },
  {
    title: "Check-In Confirmado",
    count: 27,
    icon: CheckCircle2,
    color: "text-green-600",
    bgColor: "bg-green-50",
    progress: 84,
    description: "Advogados confirmaram",
  },
  {
    title: "Aguardando Resposta",
    count: 3,
    icon: AlertCircle,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    progress: 9,
    description: "Mensagens enviadas",
  },
  {
    title: "Necessitam Atenção",
    count: 2,
    icon: AlertCircle,
    color: "text-red-600",
    bgColor: "bg-red-50",
    progress: 7,
    description: "Check-in atrasado",
  },
];

export function SummaryCards() {
  return (
    <div className="space-y-4">
      <div>
        <h2>Resumo de Audiências</h2>
        <p className="text-muted-foreground">
          Status das audiências e confirmações do dia
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {summaryData.map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.title} className="p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <p className="text-muted-foreground">{item.title}</p>
                  <p>{item.count}</p>
                </div>
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.bgColor}`}
                >
                  <Icon className={`h-5 w-5 ${item.color}`} />
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <Progress value={item.progress} className="h-2" />
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}