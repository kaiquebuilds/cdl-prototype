import { Card, CardContent } from "@/components/ui/card"
import { SubPage } from "./SubPage"

const valores = [
  "Ética e transparência",
  "Compromisso com o associado",
  "Valorização do comércio local",
  "Inovação e capacitação contínua",
  "Cooperação e trabalho em rede",
]

export function MissaoVisaoValores() {
  return (
    <SubPage title="Missão, Visão e Valores">
      <div className="flex flex-col gap-4">
        <Card>
          <CardContent className="flex flex-col gap-2 p-4">
            <h2 className="text-sm font-bold">Missão</h2>
            <p className="text-sm text-muted-foreground">
              Fortalecer o comércio de Novo Gama através da união dos empresários, oferecendo serviços que agreguem
              valor aos negócios, promovendo a ética nas relações comerciais e contribuindo para o crescimento
              sustentável da cidade.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col gap-2 p-4">
            <h2 className="text-sm font-bold">Visão</h2>
            <p className="text-sm text-muted-foreground">
              Ser reconhecida como a principal entidade representativa do comércio de Novo Gama, referência em
              serviços, capacitação e defesa dos interesses dos lojistas.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col gap-2 p-4">
            <h2 className="text-sm font-bold">Valores</h2>
            <ul className="flex flex-col gap-1 text-sm text-muted-foreground">
              {valores.map((v) => (
                <li key={v} className="flex gap-2">
                  <span className="text-primary">•</span> {v}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </SubPage>
  )
}
