import * as React from "react"
import { Link } from "react-router-dom"
import { ScreenHeader } from "@/components/ScreenHeader"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { associados } from "@/data/mockData"
import { Search } from "lucide-react"

export function Diretorio() {
  const [busca, setBusca] = React.useState("")
  const [categoria, setCategoria] = React.useState("Todas")

  const categorias = ["Todas", ...Array.from(new Set(associados.map((a) => a.categoria)))]

  const filtrados = associados.filter((a) => {
    const matchBusca = a.nome.toLowerCase().includes(busca.toLowerCase())
    const matchCategoria = categoria === "Todas" || a.categoria === categoria
    return matchBusca && matchCategoria
  })

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <ScreenHeader title="Associados" />
      <div className="flex-1 overflow-y-auto p-4">
        <div className="mb-3 flex flex-col gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Buscar associado..."
              className="pl-9"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>
          <Select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
            {categorias.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </Select>
        </div>

        <div className="flex flex-col gap-2">
          {filtrados.map((a) => {
            const iniciais = a.nome.split(" ").slice(0, 2).map((w) => w[0]).join("")
            return (
              <Link key={a.id} to={`/diretorio/${a.id}`}>
                <Card>
                  <CardContent className="flex items-center gap-3 p-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-xs font-bold text-primary">{iniciais}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-semibold leading-tight">{a.nome}</p>
                      <p className="text-xs text-muted-foreground">{a.categoria}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
          {filtrados.length === 0 && (
            <p className="mt-6 text-center text-sm text-muted-foreground">Nenhum associado encontrado.</p>
          )}
        </div>
      </div>
    </div>
  )
}
