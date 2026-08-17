import { PageHeader } from "@/components/admin-desktop/PageHeader"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { associados, eventos } from "@/data/mockData"
import {
  Users,
  AlertCircle,
  Calendar,
  Wallet,
  UserPlus,
  Newspaper,
  Tag,
  CheckCircle2,
  MapPin,
} from "lucide-react"

const MENSALIDADE = 89.9

const atividades = [
  { icon: UserPlus, text: "João Pereira se associou", tempo: "17/08/2026 09:12" },
  { icon: Wallet, text: "Maria Silva pagou a mensalidade", tempo: "17/08/2026 07:40" },
  { icon: Newspaper, text: "Nova notícia publicada", tempo: "16/08/2026 18:05" },
  { icon: Calendar, text: "Evento 'Feira de Negócios' criado", tempo: "15/08/2026 11:30" },
  { icon: Tag, text: "Parceria com Auto Posto Novo Gama renovada", tempo: "14/08/2026 16:22" },
]

function parseData(d: string) {
  const [dia, mes, ano] = d.split("/").map(Number)
  return new Date(ano, mes - 1, dia)
}

export function Dashboard() {
  const total = associados.length
  const emDia = associados.filter((a) => a.status === "Em dia").length
  const atrasados = associados.filter((a) => a.status === "Atrasado")
  const inadimplencia = ((atrasados.length / total) * 100).toFixed(1)
  const receita = emDia * MENSALIDADE

  const proximosEventos = [...eventos].sort((a, b) => parseData(a.data).getTime() - parseData(b.data).getTime()).slice(0, 3)

  const kpis = [
    { label: "Total de associados", value: total, icon: Users, color: "bg-blue-50 text-blue-700" },
    {
      label: "Receita mensal",
      value: receita.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
      icon: Wallet,
      color: "bg-green-50 text-green-700",
    },
    { label: "Taxa de inadimplência", value: `${inadimplencia}%`, icon: AlertCircle, color: "bg-red-50 text-red-700" },
    { label: "Eventos este mês", value: eventos.length, icon: Calendar, color: "bg-purple-50 text-purple-700" },
  ]

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <PageHeader title="Dashboard" description="Visão geral da CDL Novo Gama" />
      <div className="flex-1 overflow-y-auto p-8">
        <div className="grid grid-cols-4 gap-4">
          {kpis.map((kpi) => (
            <Card key={kpi.label}>
              <CardContent className="p-5">
                <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-lg ${kpi.color}`}>
                  <kpi.icon className="h-5 w-5" />
                </div>
                <p className="text-2xl font-bold text-slate-900">{kpi.value}</p>
                <p className="text-sm text-muted-foreground">{kpi.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-3 gap-6">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle className="text-base">Atividade recente</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 pt-0">
              {atividades.map((a, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
                    <a.icon className="h-4 w-4" />
                  </div>
                  <span className="flex-1 text-slate-700">{a.text}</span>
                  <span className="shrink-0 text-xs text-muted-foreground">{a.tempo}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Próximos eventos</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 pt-0">
              {proximosEventos.map((e) => (
                <div key={e.id} className="rounded-lg border border-border p-3">
                  <p className="text-sm font-semibold leading-tight text-slate-900">{e.titulo}</p>
                  <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" /> {e.data}
                  </p>
                  <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" /> {e.local}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <Card className="mt-6">
          <CardHeader>
            <CardTitle className="text-base">Inadimplentes</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            {atrasados.length === 0 ? (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-green-600" /> Nenhum associado em atraso.
              </div>
            ) : (
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-muted-foreground">
                    <th className="py-2 font-medium">Nome</th>
                    <th className="py-2 font-medium">Último pagamento</th>
                    <th className="py-2 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {atrasados.map((a) => (
                    <tr key={a.id} className="border-b border-border last:border-0">
                      <td className="py-2.5 font-medium text-slate-900">{a.nome}</td>
                      <td className="py-2.5 text-muted-foreground">{a.ultimoPagamento}</td>
                      <td className="py-2.5">
                        <Badge variant="destructive">Atrasado</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
