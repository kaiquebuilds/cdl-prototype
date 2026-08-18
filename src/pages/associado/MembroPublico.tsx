import { useParams, useNavigate } from "react-router-dom"
import { ScreenHeader } from "@/components/ScreenHeader"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { associados } from "@/data/mockData"
import { ArrowLeft, MapPin, Phone, Package } from "lucide-react"

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
        title={associado.nome}
        leftAction={
          <button
            onClick={() => navigate(-1)}
            className="rounded-full bg-slate-100 p-2 text-slate-700 hover:bg-slate-200"
          >
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

        {associado.produtos && associado.produtos.length > 0 && (
          <Card className="mt-3">
            <CardContent className="p-4">
              <h2 className="mb-3 flex items-center gap-1.5 text-sm font-bold">
                <Package className="h-4 w-4 text-primary" /> Produtos e Serviços
              </h2>
              <div className="flex flex-col gap-3">
                {associado.produtos.map((p) => (
                  <div key={p.nome} className="border-b border-border pb-3 last:border-0 last:pb-0">
                    <p className="text-sm font-semibold">{p.nome}</p>
                    <p className="text-xs text-muted-foreground">{p.descricao}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="mt-3 overflow-hidden">
          <div className="relative h-32 bg-[linear-gradient(0deg,transparent_24%,#e2e8f0_25%,#e2e8f0_26%,transparent_27%,transparent_74%,#e2e8f0_75%,#e2e8f0_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,#e2e8f0_25%,#e2e8f0_26%,transparent_27%,transparent_74%,#e2e8f0_75%,#e2e8f0_76%,transparent_77%,transparent)] bg-[length:24px_24px] bg-slate-100">
            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-full flex-col items-center">
              <MapPin className="h-8 w-8 fill-primary text-primary drop-shadow" />
            </div>
          </div>
          <CardContent className="p-3 text-center text-xs text-muted-foreground">{associado.endereco}</CardContent>
        </Card>

        <a
          href={`https://wa.me/55${associado.telefone.replace(/\D/g, "").replace(/^55/, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block"
        >
          <Button className="w-full" variant="secondary">Entrar em contato</Button>
        </a>
      </div>
    </div>
  )
}
