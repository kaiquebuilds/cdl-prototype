import { Link } from "react-router-dom"
import { ScreenHeader } from "@/components/ScreenHeader"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { noticias, eventos } from "@/data/mockData"
import { Briefcase, Calendar, ChevronRight, Newspaper } from "lucide-react"

export function Home() {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <ScreenHeader />
      <div className="flex-1 overflow-y-auto p-4">
        <Card className="mb-4 border-none bg-gradient-to-br from-green-600 to-green-700 text-white">
          <CardContent className="p-4">
            <p className="text-sm font-semibold">Fortalecendo o comércio de Novo Gama</p>
            <p className="mt-1 text-xs text-white/90">
              Conheça os benefícios de ser um associado CDL.
            </p>
            <Link
              to="/associar-se"
              className="mt-3 inline-flex items-center gap-1 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-green-700"
            >
              Associe-se agora <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          </CardContent>
        </Card>

        <Link to="/empregos" className="mb-4 block">
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="flex items-center gap-3 p-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
                <Briefcase className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold">Oportunidades de Emprego</p>
                <p className="text-xs text-muted-foreground">Veja vagas em empresas associadas</p>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </CardContent>
          </Card>
        </Link>

        <div className="mb-2 flex items-center justify-between">
          <h2 className="flex items-center gap-1.5 text-sm font-bold">
            <Newspaper className="h-4 w-4 text-primary" /> Últimas Notícias
          </h2>
          <Link to="/noticias" className="text-xs font-medium text-primary">Ver todas</Link>
        </div>
        <div className="flex flex-col gap-2">
          {noticias.slice(0, 2).map((n) => (
            <Card key={n.id}>
              <CardHeader className="p-3">
                <span className="text-[10px] font-medium text-primary">{n.data}</span>
                <CardTitle className="text-sm">{n.titulo}</CardTitle>
                <CardDescription className="text-xs">{n.resumo}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mb-2 mt-4 flex items-center justify-between">
          <h2 className="flex items-center gap-1.5 text-sm font-bold">
            <Calendar className="h-4 w-4 text-primary" /> Próximos Eventos
          </h2>
          <Link to="/eventos" className="text-xs font-medium text-primary">Ver todos</Link>
        </div>
        <div className="flex flex-col gap-2">
          {eventos.slice(0, 2).map((e) => (
            <Card key={e.id}>
              <CardContent className="flex items-center gap-3 p-3">
                <div className="flex h-10 w-10 shrink-0 flex-col items-center justify-center rounded-lg bg-blue-50 text-primary">
                  <span className="text-[9px] font-bold uppercase">{e.data.split("/")[1]}</span>
                  <span className="text-sm font-bold leading-none">{e.data.split("/")[0]}</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold leading-tight">{e.titulo}</p>
                  <p className="truncate text-xs text-muted-foreground">{e.local}</p>
                </div>
                <Badge variant="outline">Evento</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
