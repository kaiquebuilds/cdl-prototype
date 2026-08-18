import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { AssociadosCarousel } from "@/components/AssociadosCarousel"
import {
  Store,
  Gift,
  Calendar,
  Newspaper,
  Briefcase,
  Building2,
  ChevronRight,
  LayoutGrid,
  type LucideIcon,
} from "lucide-react"

const menuItems: { to: string; label: string; icon: LucideIcon }[] = [
  { to: "/diretorio", label: "Guia Comercial", icon: Store },
  { to: "/parcerias", label: "Benefícios", icon: Gift },
  { to: "/eventos", label: "Eventos", icon: Calendar },
  { to: "/noticias", label: "Notícias", icon: Newspaper },
  { to: "/empregos", label: "Empregos", icon: Briefcase },
  { to: "/sobre-cdl", label: "Conheça a CDL", icon: Building2 },
]

export function Home() {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto p-5">
        <Card className="mb-6 border-none bg-gradient-to-br from-[#154C96] to-[#002B7F] text-white">
          <CardContent className="p-4">
            <p className="text-xl font-bold text-white">A voz dos negócios de Novo Gama</p>
            <p className="mt-1 text-xs text-white/80">
              Capacitação, consulta SPC, certificação digital e descontos em saúde, educação e lazer.
            </p>
            <div className="mt-4 flex gap-2">
              <Link
                to="/associar-se"
                className="inline-flex items-center gap-1 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-[#154C96]"
              >
                Associe-se <ChevronRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                to="/sobre-cdl"
                className="inline-flex items-center gap-1 rounded-lg border border-white/20 bg-white/15 px-3 py-1.5 text-xs font-semibold text-white"
              >
                Conheça a CDL
              </Link>
            </div>
          </CardContent>
        </Card>

        <div className="mb-4">
          <AssociadosCarousel />
        </div>

        <div className="mb-6 pt-2">
          <h2 className="mb-3 flex items-center gap-1.5 text-base font-bold">
            <LayoutGrid className="h-4 w-4 text-[#154C96]" /> Navegação
          </h2>
          <div className="mb-6 grid grid-cols-2 gap-3">
            {menuItems.map((item) => (
              <Link key={item.to} to={item.to}>
                <Card className="h-full transition-colors hover:bg-muted/50">
                  <CardContent className="flex flex-col items-center gap-2 p-4 text-center">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-sm font-semibold leading-tight">{item.label}</span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <Card className="border-none bg-gradient-to-r from-[#00B050] to-[#007A3D] text-white">
            <CardContent className="p-5">
              <p className="text-base font-bold text-white">Pronto para começar?</p>
              <p className="mt-1 text-sm text-white/85">
                Junte-se aos associados da CDL Novo Gama e aproveite todos os benefícios.
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
