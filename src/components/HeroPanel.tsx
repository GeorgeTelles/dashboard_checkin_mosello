import { TrendingUp, Users, Target, Award } from "lucide-react";
import { Card } from "./ui/card";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const chartData = [
  { dia: "Seg", feito: 12, pendente: 3, atrasado: 1 },
  { dia: "Ter", feito: 15, pendente: 2, atrasado: 0 },
  { dia: "Qua", feito: 18, pendente: 4, atrasado: 2 },
  { dia: "Qui", feito: 14, pendente: 5, atrasado: 1 },
  { dia: "Sex", feito: 20, pendente: 3, atrasado: 1 },
  { dia: "Sáb", feito: 8, pendente: 1, atrasado: 0 },
];

const trendData = [
  { mes: "Jul", total: 245 },
  { mes: "Ago", total: 280 },
  { mes: "Set", total: 310 },
  { mes: "Out", total: 295 },
  { mes: "Nov", total: 340 },
  { mes: "Dez", total: 385 },
];

const achievements = [
  {
    icon: Target,
    label: "Check-In Feito",
    value: "127",
    change: "Hoje",
    positive: true,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Users,
    label: "Check-In Pendente",
    value: "18",
    change: "Aguardando",
    positive: false,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    icon: Award,
    label: "Check-In Atrasado",
    value: "5",
    change: "Atenção",
    positive: false,
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    icon: TrendingUp,
    label: "Taxa de Confirmação",
    value: "96.2%",
    change: "+3.1%",
    positive: true,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
];

export function HeroPanel() {
  return (
    <div className="space-y-6">
      {/* Summary Header */}
      <div>
        <h1>Painel de Check-In</h1>
        <p className="text-muted-foreground">
          Monitoramento em tempo real das confirmações de presença dos advogados
        </p>
      </div>

      {/* Achievement Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {achievements.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="p-6">
              <div className="flex items-center justify-between">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${stat.bgColor}`}
                >
                  <Icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <span
                  className={
                    stat.positive ? "text-green-600" : "text-muted-foreground"
                  }
                >
                  {stat.change}
                </span>
              </div>
              <div className="mt-4">
                <p className="text-muted-foreground">{stat.label}</p>
                <p className="mt-1">{stat.value}</p>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Data Visualizations */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="p-6">
          <div className="mb-4">
            <h3>Status de Check-In Semanal</h3>
            <p className="text-muted-foreground">
              Acompanhamento diário das confirmações
            </p>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis
                dataKey="dia"
                className="text-muted-foreground"
                tick={{ fontSize: 12 }}
              />
              <YAxis className="text-muted-foreground" tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="feito" fill="#10b981" name="Feito" />
              <Bar dataKey="pendente" fill="#f59e0b" name="Pendente" />
              <Bar dataKey="atrasado" fill="#ef4444" name="Atrasado" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <div className="mb-4">
            <h3>Evolução de Audiências</h3>
            <p className="text-muted-foreground">
              Total de audiências nos últimos 6 meses
            </p>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={trendData}>
              <defs>
                <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis
                dataKey="mes"
                className="text-muted-foreground"
                tick={{ fontSize: 12 }}
              />
              <YAxis className="text-muted-foreground" tick={{ fontSize: 12 }} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="total"
                stroke="#3b82f6"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorTotal)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
}