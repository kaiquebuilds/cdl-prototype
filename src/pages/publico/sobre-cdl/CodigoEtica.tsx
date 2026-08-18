import { Card, CardContent } from "@/components/ui/card"
import { SubPage } from "./SubPage"

const principios = [
  "Transparência e honestidade nas relações comerciais entre associados e consumidores.",
  "Respeito à livre concorrência e combate a práticas comerciais desleais.",
  "Valorização do consumidor e compromisso com o bom atendimento.",
  "Cumprimento da legislação vigente e das obrigações fiscais e trabalhistas.",
  "Responsabilidade social e ambiental no exercício da atividade comercial.",
  "Cooperação entre associados para o fortalecimento do comércio local.",
]

export function CodigoEtica() {
  return (
    <SubPage title="Código de Ética e Conduta">
      <Card>
        <CardContent className="flex flex-col gap-3 p-4 text-sm">
          <p className="text-muted-foreground">
            O Código de Ética e Conduta da CDL Novo Gama estabelece os princípios que orientam a atuação dos
            associados e da entidade, promovendo relações comerciais íntegras e o desenvolvimento sustentável do
            comércio local.
          </p>
          <ul className="flex flex-col gap-2 text-muted-foreground">
            {principios.map((p) => (
              <li key={p} className="flex gap-2">
                <span className="text-primary">•</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </SubPage>
  )
}
