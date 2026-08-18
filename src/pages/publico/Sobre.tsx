import { Link } from "react-router-dom"
import { ScreenHeader } from "@/components/ScreenHeader"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { beneficios } from "@/data/mockData"
import { ChevronRight, Phone, Mail, MapPin, Tag } from "lucide-react"

export function Sobre() {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <ScreenHeader title="Sobre a CDL" />
      <div className="flex-1 overflow-y-auto p-5">
        <div className="flex flex-col gap-4">
          <Card>
            <CardHeader className="p-4">
              <h2 className="text-base font-bold">O que é a CDL?</h2>
              <p className="text-sm text-muted-foreground">
                A Câmara de Dirigentes Lojistas (CDL) é uma entidade civil, sem fins lucrativos, que tem como missão representar, defender e promover os interesses do comércio e dos serviços. Em Novo Gama-GO, a CDL atua como a voz dos empresários locais, trabalhando pelo desenvolvimento econômico da cidade e pela valorização do comércio regional.
              </p>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="p-4">
              <h2 className="text-base font-bold">Nossa missão</h2>
              <p className="text-sm text-muted-foreground">
                Fortalecer o comércio de Novo Gama através da união dos empresários, oferecendo serviços que agreguem valor aos negócios, promovendo a ética nas relações comerciais e contribuindo para o crescimento sustentável da cidade.
              </p>
              <ul className="flex flex-col gap-1 text-sm text-muted-foreground">
                <li>• Representar os interesses dos lojistas junto a órgãos públicos e instituições</li>
                <li>• Oferecer benefícios e serviços exclusivos aos associados</li>
                <li>• Promover capacitação e desenvolvimento empresarial</li>
                <li>• Facilitar o acesso a crédito e serviços de proteção ao comércio</li>
              </ul>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="p-4">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-bold">Serviços e benefícios</h2>
                <Link to="/parcerias" className="text-xs text-[#154C96]">Ver todos</Link>
              </div>
              <div className="mt-2 flex flex-col gap-2">
                {beneficios.slice(0, 4).map((b) => (
                  <Link key={b.id} to={`/parcerias/${b.id}`}>
                    <div className="flex items-center justify-between gap-2 rounded-lg border border-border p-3 transition-colors hover:bg-muted/50">
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold leading-tight">{b.nome}</p>
                        <p className="flex items-center gap-1 text-xs font-medium text-[#00B050]">
                          <Tag className="h-3 w-3" /> {b.desconto}
                        </p>
                      </div>
                      <Badge variant="secondary">{b.categoria}</Badge>
                    </div>
                  </Link>
                ))}
              </div>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="p-4">
              <h2 className="text-base font-bold">Fale conosco</h2>
              <div className="mt-2 flex flex-col gap-2">
                <a href="https://wa.me/5561981512903" className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-[#154C96]" /> (61) 98151-2903
                </a>
                <a href="mailto:cdlnovogama2025@gmail.com.br" className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-[#154C96]" /> cdlnovogama2025@gmail.com.br
                </a>
                <p className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-[#154C96]" /> Novo Gama - Goiás
                </p>
              </div>
            </CardHeader>
          </Card>

          <Card className="border-none bg-gradient-to-r from-[#00B050] to-[#007A3D] text-white">
            <CardContent className="p-5">
              <p className="text-base font-bold">Faça parte da CDL Novo Gama</p>
              <p className="mt-1 text-sm text-white/85">
                Junte-se aos empresários que já fortalecem o comércio da nossa cidade.
              </p>
              <Link
                to="/associar-se"
                className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#007A3D]"
              >
                Associe-se agora <ChevronRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
