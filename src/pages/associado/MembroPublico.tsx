import { useParams, useNavigate } from "react-router-dom"
import { ScreenHeader } from "@/components/ScreenHeader"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { associados } from "@/data/mockData"
import { ArrowLeft, MapPin, Phone } from "lucide-react"

export function MembroPublico() {
  const { id } = useParams()
  const navigate = useNavigate()
  const associado = associados.find((a) => a.id === id)

  if (!associado) {
    return (
      <div className="flex flex-1 flex-col overflow-hidden">
        <ScreenHeader title="Associado" />
        <div className="flex-1 p-4 text-sm text-muted-foreground">Associado não encontrado.</div>
      </div>
    )
  }

  const iniciais = associado.nome.split(" ").slice(0, 2).map((w) => w[0]).join("")

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
          <h1 className="text-lg font-bold">{associado.nome}</h1>
          <Badge variant="secondary">{associado.categoria}</Badge>
        </div>

        <Card>
          <CardContent className="flex flex-col gap-3 p-4 text-sm">
            <p className="text-muted-foreground">{associado.descricao}</p>
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{associado.endereco}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-primary" />
              <span>{associado.telefone}</span>
            </div>
          </CardContent>
        </Card>

        <Button className="mt-4 w-full" variant="secondary">Entrar em contato</Button>
      </div>
    </div>
  )
}
