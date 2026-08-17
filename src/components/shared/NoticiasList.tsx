import { noticias } from "@/data/mockData"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Newspaper } from "lucide-react"

export function NoticiasList() {
  return (
    <div className="flex flex-col gap-3">
      {noticias.map((n) => (
        <Card key={n.id}>
          <div className="flex h-32 items-center justify-center rounded-t-xl bg-muted">
            <Newspaper className="h-8 w-8 text-muted-foreground" />
          </div>
          <CardHeader>
            <span className="text-xs font-medium text-primary">{n.data}</span>
            <CardTitle className="text-base">{n.titulo}</CardTitle>
            <CardDescription>{n.resumo}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{n.conteudo}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
