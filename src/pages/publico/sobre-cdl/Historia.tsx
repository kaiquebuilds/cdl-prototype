import { Card, CardContent } from "@/components/ui/card"
import { SubPage } from "./SubPage"

export function Historia() {
  return (
    <SubPage title="História da CDL">
      <Card>
        <CardContent className="flex flex-col gap-3 p-4 text-sm text-muted-foreground">
          <p>
            A Câmara de Dirigentes Lojistas de Novo Gama nasceu da iniciativa de um grupo de comerciantes locais que
            perceberam a necessidade de uma entidade para representar e fortalecer o comércio do município.
          </p>
          <p>
            Desde então, a CDL Novo Gama vem ampliando sua atuação, oferecendo serviços de proteção ao crédito,
            capacitação empresarial e parcerias que geram benefícios diretos aos associados e à comunidade.
          </p>
          <p>
            Hoje a entidade reúne empresários de diversos segmentos, consolidando-se como referência na defesa dos
            interesses do comércio e dos serviços da cidade.
          </p>
        </CardContent>
      </Card>
    </SubPage>
  )
}
