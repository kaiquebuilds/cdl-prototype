import { useParams, useNavigate } from "react-router-dom"
import { ScreenHeader } from "@/components/ScreenHeader"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { parcerias } from "@/data/mockData"
import { ArrowLeft, ExternalLink, Phone, Tag, TicketPercent } from "lucide-react"

export function ParceriaDetalhe() {
  const { id } = useParams()
  const navigate = useNavigate()
  const parceria = parcerias.find((p) => p.id === id)

  if (!parceria) {
    return (
      <div className="flex flex-1 flex-col overflow-hidden">
        <ScreenHeader title="Benefício" />
        <div className="flex-1 p-4 text-sm text-muted-foreground">Benefício não encontrado.</div>
      </div>
    )
  }

  const iniciais = parceria.nome.split(" ").slice(0, 2).map((w) => w[0]).join("")

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <ScreenHeader
        leftAction={
          <button onClick={() => navigate(-1)} className="rounded-full bg-slate-100 p-2 text-slate-700 hover:bg-slate-200">
            <ArrowLeft className="h-4 w-4" />
          </button>
        }
      />
      <div className="flex-1 overflow-y-auto p-4">
        <div className="mb-4 flex flex-col items-center gap-2 text-center">
          <Avatar className="h-20 w-20 border-2 border-primary/20">
            <AvatarFallback className="bg-primary/10 text-xl font-bold text-primary">{iniciais}</AvatarFallback>
          </Avatar>
          <h1 className="text-lg font-bold">{parceria.nome}</h1>
          <Badge variant="secondary">{parceria.categoria}</Badge>
        </div>

        <Card>
          <CardContent className="flex flex-col gap-3 p-4 text-sm">
            <div className="flex items-center gap-2 font-semibold text-[#00B050]">
              <Tag className="h-4 w-4 shrink-0" />
              <span>{parceria.desconto}</span>
            </div>
            <p className="text-muted-foreground">{parceria.descricao}</p>
            {parceria.cupom && (
              <div className="flex items-center gap-2 rounded-lg border border-dashed border-primary/40 bg-primary/5 p-3">
                <TicketPercent className="h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Código do cupom</p>
                  <p className="font-mono text-sm font-bold tracking-wide">{parceria.cupom}</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {(parceria.telefone || parceria.link) && (
          <Card className="mt-3">
            <CardContent className="flex flex-col gap-2 p-4 text-sm">
              {parceria.telefone && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  <span>{parceria.telefone}</span>
                </div>
              )}
              {parceria.link && (
                <a
                  href={parceria.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-medium text-primary"
                >
                  <ExternalLink className="h-4 w-4 shrink-0" />
                  <span>{parceria.linkLabel ?? "Acessar"}</span>
                </a>
              )}
            </CardContent>
          </Card>
        )}

        <Card className="mt-3">
          <CardContent className="p-4 text-sm">
            <h2 className="mb-1 font-semibold">Como comprovar</h2>
            <p className="text-muted-foreground">{parceria.comoComprovar}</p>
          </CardContent>
        </Card>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          A CDL Novo Gama não se responsabiliza pela qualidade dos produtos e serviços oferecidos pelos
          benefícios. Os benefícios são negociados individualmente e estão sujeitos a alteração sem aviso
          prévio.
        </p>
      </div>
    </div>
  )
}
