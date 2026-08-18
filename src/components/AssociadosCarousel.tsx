import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { associados } from "@/data/mockData"
import { Store } from "lucide-react"

export function AssociadosCarousel() {
  const destaques = associados.filter((a) => a.destaque)

  if (destaques.length === 0) return null

  return (
    <div>
      <h2 className="mb-3 flex items-center gap-1.5 text-base font-bold">
        <Store className="h-4 w-4 text-[#154C96]" /> Associados em Destaque
      </h2>
      <div className="scrollbar-hide flex gap-3 overflow-x-auto">
        {destaques.map((a) => {
          const iniciais = a.nome.split(" ").slice(0, 2).map((w) => w[0]).join("")
          return (
            <Card key={a.id} className="w-44 shrink-0">
              <CardContent className="flex flex-col items-center gap-2 p-3 text-center">
                <Avatar className="h-14 w-14 border-2 border-primary/20">
                  <AvatarFallback className="bg-primary/10 text-base font-bold text-primary">{iniciais}</AvatarFallback>
                </Avatar>
                <div className="w-full overflow-hidden">
                  <p className="truncate text-sm font-semibold leading-tight">{a.nome}</p>
                  <p className="truncate text-xs text-muted-foreground">{a.categoria}</p>
                </div>
                <Link
                  to={`/diretorio/${a.id}`}
                  className="w-full rounded-lg bg-primary/10 px-2 py-1.5 text-xs font-semibold text-primary"
                >
                  Ver no Guia
                </Link>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
