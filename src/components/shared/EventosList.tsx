import { eventos } from "@/data/mockData"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"

export function EventosList({ showInscrever = false }: { showInscrever?: boolean }) {
  return (
    <div className="flex flex-col gap-3">
      {eventos.map((e) => (
        <Card key={e.id}>
          <CardHeader>
            <div className="flex items-center gap-2 text-xs font-medium text-primary">
              <Calendar className="h-3.5 w-3.5" />
              {e.data}
            </div>
            <CardTitle className="text-base">{e.titulo}</CardTitle>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5" />
              {e.local}
            </div>
            <CardDescription>{e.descricao}</CardDescription>
          </CardHeader>
          {showInscrever && (
            <CardContent>
              <Button size="sm" className="w-full">Inscrever-se</Button>
            </CardContent>
          )}
        </Card>
      ))}
    </div>
  )
}
