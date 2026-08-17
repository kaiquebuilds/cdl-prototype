import { ScreenHeader } from "@/components/ScreenHeader"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { associados, eventos, noticias, parcerias } from "@/data/mockData"
import {
  Users,
  AlertCircle,
  Calendar,
  Newspaper,
  Tag,
  Wallet,
  TrendingUp,
  UserPlus,
  CheckCircle2,
  FileText,
} from "lucide-react"

const MENSALIDADE = 89.9

const atividades = [
  { icon: UserPlus, text: "João Pereira se associou", tempo: "2h atrás" },
  { icon: Wallet, text: "Maria Silva pagou a mensalidade", tempo: "5h atrás" },
  { icon: Newspaper, text: "Nova notícia publicada", tempo: "1 dia atrás" },
  { icon: Calendar, text: "Evento 'Feira de Negócios' criado", tempo: "2 dias atrás" },
  { icon: Tag, text: "Benefício com Auto Posto Novo Gama renovado", tempo: "3 dias atrás" },
]

export function Dashboard() {
  const total = associados.length
  const emDia = associados.filter((a) => a.status === "Em dia").length
  const pendentes = associados.filter((a) => a.status === "Pendente").length
  const atrasados = associados.filter((a) => a.status === "Atrasado").length
  const inadimplencia = ((atrasados / total) * 100).toFixed(1)
  const receita = emDia * MENSALIDADE

  const quickStats = [
    { label: "Eventos no mês", value: eventos.length, icon: Calendar, color: "bg-purple-50 text-purple-700" },
    { label: "Benefícios ativos", value: parcerias.length, icon: Tag, color: "bg-blue-50 text-[#154C96]" },
    { label: "Notícias publicadas", value: noticias.length, icon: FileText, color: "bg-slate-100 text-slate-700" },
  ]

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <ScreenHeader title="Dashboard" />
      <div className="flex-1 overflow-y-auto p-4">
        <Card className="border-none bg-gradient-to-br from-[#154C96] via-[#002B7F] to-[#00B050] text-white shadow-lg">
          <CardContent className="p-4">
            <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-white/80">
              <Wallet className="h-3.5 w-3.5" /> Receita mensal estimada
            </div>
            <p className="mt-1 text-2xl font-bold">
              {receita.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
            </p>
            <p className="mt-1 text-xs text-white/80">
              {emDia} associados em dia × {MENSALIDADE.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
            </p>
          </CardContent>
        </Card>

        <div className="mt-3 grid grid-cols-2 gap-3">
          <Card>
            <CardContent className="p-3">
              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#154C96]">
                <Users className="h-4 w-4" />
              </div>
              <p className="text-2xl font-bold">{total}</p>
              <p className="text-xs text-muted-foreground">Total de associados</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-3">
              <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 text-red-700">
                <AlertCircle className="h-4 w-4" />
              </div>
              <p className="text-2xl font-bold">{inadimplencia}%</p>
              <p className="text-xs text-muted-foreground">Inadimplência</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mt-3 border-green-200 bg-green-50">
          <CardContent className="flex items-center gap-3 p-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100 text-[#00B050]">
              <TrendingUp className="h-4 w-4" />
            </div>
            <p className="text-sm font-semibold text-[#007A3D]">+3 novos associados este mês</p>
          </CardContent>
        </Card>

        <div className="mt-3 grid grid-cols-3 gap-3">
          {quickStats.map((c) => (
            <Card key={c.label}>
              <CardContent className="p-3">
                <div className={`mb-2 flex h-8 w-8 items-center justify-center rounded-lg ${c.color}`}>
                  <c.icon className="h-4 w-4" />
                </div>
                <p className="text-xl font-bold">{c.value}</p>
                <p className="text-[10px] leading-tight text-muted-foreground">{c.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-3">
          <CardHeader>
            <CardTitle className="text-sm">Atividade recente</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-3 p-4 pt-0">
            {atividades.map((a, i) => (
              <div key={i} className="flex items-center gap-3 text-sm">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
                  <a.icon className="h-3.5 w-3.5" />
                </div>
                <span className="flex-1">{a.text}</span>
                <span className="shrink-0 text-xs text-muted-foreground">{a.tempo}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="mt-3">
          <CardHeader>
            <CardTitle className="text-sm">Associados com pendência</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 p-4 pt-0">
            {associados
              .filter((a) => a.status !== "Em dia")
              .map((a) => (
                <div key={a.id} className="flex items-center justify-between text-sm">
                  <span>{a.nome}</span>
                  <span className={a.status === "Atrasado" ? "text-red-600" : "text-amber-600"}>{a.status}</span>
                </div>
              ))}
            {pendentes + atrasados === 0 && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-[#00B050]" /> Todos os associados estão em dia.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
