import { useParams, useNavigate } from "react-router-dom"
import { ScreenHeader } from "@/components/ScreenHeader"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { parcerias } from "@/data/mockData"
import { ArrowLeft, Tag, TicketPercent } from "lucide-react"

export function ParceriaDetalhe() {
  const { id } = useParams()
  const navigate = useNavigate()
  const parceria = parcerias.find((p) => p.id === id)

  if (!parceria) {
    return (
      <div className="flex flex-1 flex-col overflow-hidden">
        <ScreenHeader title="Parceria" />
        <div className="flex-1 p-4 text-sm text-muted-foreground">Parceria não encontrada.</div>
      </div>
    )
  }

  const iniciais = parceria.parceiro.split(" ").slice(0, 2).map((w) => w[0]).join("")

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <ScreenHeader
        action={
          <button onClick={() => navigate(-1)} className="rounded-full bg-white/15 p-2 text-white">
            <ArrowLeft className="h-4 w-4" />
          </button>
        }
      />
      <div className="flex-1 overflow-y-auto p-4">
        <div className="mb-4 flex flex-col items-center gap-2 text-center">
          <Avatar className="h-20 w-20 border-2 border-primary/20">
            <AvatarFallback className="bg-primary/10 text-xl font-bold text-primary">{iniciais}</AvatarFallback>
          </Avatar>
          <h1 className="text-lg font-bold">{parceria.parceiro}</h1>
          <Badge variant="secondary">{parceria.categoria}</Badge>
        </div>

        <Card>
          <CardContent className="flex flex-col gap-3 p-4 text-sm">
            <div className="flex items-center gap-2 font-semibold text-green-600">
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

        <Card className="mt-3">
          <CardContent className="p-4 text-sm">
            <h2 className="mb-1 font-semibold">Como comprovar</h2>
            <p className="text-muted-foreground">{parceria.comoComprovar}</p>
          </CardContent>
        </Card>

        <p className="mt-4 text-center text-xs text-muted-foreground">
          A CDL Novo Gama não se responsabiliza pela qualidade dos produtos e serviços oferecidos pelos
          parceiros. Os benefícios são negociados individualmente e estão sujeitos a alteração sem aviso
          prévio.
        </p>
      </div>
    </div>
  )
}
