import { Link } from "react-router-dom"
import { ScreenHeader } from "@/components/ScreenHeader"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { associadoLogado } from "@/data/mockData"
import { QrCode, Settings } from "lucide-react"

export function Carteira() {
  const a = associadoLogado
  const iniciais = a.nome.split(" ").slice(0, 2).map((w) => w[0]).join("")

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <ScreenHeader
        title="Carteira Digital"
        action={
          <Link to="/perfil" className="rounded-full bg-white/15 p-2 text-white">
            <Settings className="h-4 w-4" />
          </Link>
        }
      />
      <div className="flex-1 overflow-y-auto p-4">
        <Card className="overflow-hidden border-none bg-gradient-to-br from-[#154C96] via-[#002B7F] to-[#00B050] text-white shadow-lg">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/80">Carteira de Associado</p>
              <Badge className="bg-white/20 text-white">Ativa</Badge>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <Avatar className="h-16 w-16 border-2 border-white/40">
                <AvatarFallback className="bg-white/20 text-lg font-bold text-white">{iniciais}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-base font-bold leading-tight">{a.nome}</p>
                <p className="text-xs text-white/80">{a.categoria}</p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
              <div>
                <p className="text-white/70">CPF do responsável</p>
                <p className="font-semibold">123.456.789-00</p>
              </div>
              <div>
                <p className="text-white/70">Validade</p>
                <p className="font-semibold">31/12/2026</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mt-4">
          <CardContent className="flex flex-col items-center gap-3 p-6">
            <div className="flex h-40 w-40 items-center justify-center rounded-lg border-2 border-dashed border-border bg-muted">
              <QrCode className="h-24 w-24 text-slate-700" />
            </div>
            <p className="text-center text-xs text-muted-foreground">
              Apresente este QR Code para validar seus benefícios em estabelecimentos parceiros.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
