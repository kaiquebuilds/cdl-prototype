import { ScreenHeader } from "@/components/ScreenHeader"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { empregos } from "@/data/mockData"

export function Empregos() {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <ScreenHeader title="Oportunidades de Emprego" />
      <div className="flex-1 overflow-y-auto p-4">
        <div className="flex flex-col gap-3">
          {empregos.map((j) => (
            <Card key={j.id}>
              <CardHeader>
                <Badge variant="secondary" className="w-fit">{j.empresa}</Badge>
                <CardTitle className="text-base">{j.titulo}</CardTitle>
                <CardDescription>{j.descricao}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
