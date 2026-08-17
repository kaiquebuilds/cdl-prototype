import { Link } from "react-router-dom"
import { beneficios } from "@/data/mockData"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tag } from "lucide-react"

export function ParceriasList() {
  return (
    <div className="flex flex-col gap-3">
      {beneficios.map((p) => (
        <Link key={p.id} to={`/parcerias/${p.id}`}>
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="min-w-0 flex-1 truncate text-base">{p.nome}</CardTitle>
                <Badge variant="secondary">{p.categoria}</Badge>
              </div>
              <div className="flex items-center gap-1 text-sm font-semibold text-[#00B050]">
                <Tag className="h-3.5 w-3.5" />
                {p.desconto}
              </div>
              <CardDescription className="line-clamp-2">{p.descricao}</CardDescription>
              <p className="text-xs font-medium text-primary">Ver detalhes</p>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  )
}
