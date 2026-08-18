import { Link } from "react-router-dom"
import { ScreenHeader } from "@/components/ScreenHeader"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { noticias, eventos, beneficios, associados } from "@/data/mockData"
import { Calendar, ChevronRight, Gift, Info, Newspaper, Tag } from "lucide-react"

export function Home() {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <ScreenHeader />
      <div className="flex-1 overflow-y-auto p-5">
        <Card className="border-none bg-gradient-to-br from-[#154C96] to-[#002B7F] text-white mb-6">
          <CardContent className="p-4">
            <p className="text-base font-bold text-white">A voz dos negócios de Novo Gama</p>
            <p className="text-xs text-white/80 mt-0.5">
              Representamos e defendemos os interesses de empresários e empreendedores do município.
            </p>
            <p className="text-xs text-white/80 mt-1">
              Capacitação, consulta SPC, certificação digital e descontos em saúde, educação e lazer.
            </p>
            <div className="flex gap-2 mt-3">
              <Link
                to="/associar-se"
                className="inline-flex items-center gap-1 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-[#154C96]"
              >
                Associe-se <ChevronRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                to="/sobre"
                className="inline-flex items-center gap-1 rounded-lg border border-white/20 bg-white/15 px-3 py-1.5 text-xs font-semibold text-white"
              >
                Saiba mais <Info className="h-3.5 w-3.5" />
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="mb-6 flex gap-2">
          <Card className="flex-1">
            <CardContent className="flex flex-col items-center p-3 text-center">
              <span className="text-lg font-bold text-[#154C96]">{beneficios.length}+</span>
              <span className="text-[10px] text-muted-foreground">Benefícios</span>
            </CardContent>
          </Card>
          <Card className="flex-1">
            <CardContent className="flex flex-col items-center p-3 text-center">
              <span className="text-lg font-bold text-[#00B050]">{associados.length}</span>
              <span className="text-[10px] text-muted-foreground">Associados</span>
            </CardContent>
          </Card>
          <Card className="flex-1">
            <CardContent className="flex flex-col items-center p-3 text-center">
              <span className="text-lg font-bold text-[#154C96]">{eventos.length}</span>
              <span className="text-[10px] text-muted-foreground">Eventos</span>
            </CardContent>
          </Card>
        </div>

        <div className="mb-3 flex items-center justify-between">
          <h2 className="flex items-center gap-1.5 text-base font-bold">
            <Gift className="h-4 w-4 text-[#154C96]" /> Benefícios em destaque
          </h2>
          <Link to="/parcerias" className="text-xs text-[#154C96]">Ver todos</Link>
        </div>
        <div className="mb-6 flex flex-col gap-3">
          {beneficios.slice(0, 3).map((b) => (
            <Link key={b.id} to={`/parcerias/${b.id}`}>
              <Card>
                <CardHeader className="p-4">
                  <div className="flex items-center justify-between gap-2">
                    <CardTitle className="text-sm font-semibold">{b.nome}</CardTitle>
                    <Badge variant="secondary">{b.categoria}</Badge>
                  </div>
                  <p className="flex items-center gap-1 text-xs font-medium text-[#00B050]">
                    <Tag className="h-3 w-3" /> {b.desconto}
                  </p>
                  <p className="line-clamp-1 text-xs text-muted-foreground">{b.descricao}</p>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mb-3 flex items-center justify-between">
          <h2 className="flex items-center gap-1.5 text-base font-bold">
            <Newspaper className="h-4 w-4 text-[#154C96]" /> Últimas Notícias
          </h2>
          <Link to="/noticias" className="text-xs text-[#154C96]">Ver todas</Link>
        </div>
        <div className="mb-6 flex flex-col gap-3">
          {noticias.slice(0, 2).map((n) => (
            <Card key={n.id}>
              <CardHeader className="p-4">
                <span className="text-[10px] font-medium text-primary">{n.data}</span>
                <CardTitle className="text-sm">{n.titulo}</CardTitle>
                <CardDescription className="text-xs">{n.resumo}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mb-3 flex items-center justify-between">
          <h2 className="flex items-center gap-1.5 text-base font-bold">
            <Calendar className="h-4 w-4 text-[#154C96]" /> Próximos Eventos
          </h2>
          <Link to="/eventos" className="text-xs text-[#154C96]">Ver todos</Link>
        </div>
        <div className="mb-6 flex flex-col gap-3">
          {eventos.slice(0, 2).map((e) => (
            <Card key={e.id}>
              <CardContent className="flex items-center gap-3 p-4">
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

        <Card className="border-none bg-gradient-to-r from-[#00B050] to-[#007A3D] text-white">
          <CardContent className="p-5">
            <p className="text-base font-bold text-white">Pronto para começar?</p>
            <p className="mt-1 text-sm text-white/85">
              Junte-se aos associados da CDL Novo Gama e aproveite todos os benefícios.
            </p>
            <Link
              to="/associar-se"
              className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#007A3D]"
            >
              Associe-se agora <ChevronRight className="h-4 w-4" />
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
