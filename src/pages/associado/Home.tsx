import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { AssociadosCarousel } from "@/components/AssociadosCarousel"
import { associadoLogado } from "@/data/mockData"
import {
  IdCard,
  Store,
  Gift,
  Calendar,
  Newspaper,
  Building2,
  Briefcase,
  Zap,
  Compass,
  type LucideIcon,
} from "lucide-react"

const quickTools: { to: string; label: string; icon: LucideIcon }[] = [
  { to: "/carteira", label: "Carteira", icon: IdCard },
  { to: "/diretorio", label: "Guia Comercial", icon: Store },
  { to: "/eventos", label: "Eventos", icon: Calendar },
  { to: "/noticias", label: "Notícias", icon: Newspaper },
]

const menuItems: { to: string; label: string; icon: LucideIcon }[] = [
  { to: "/parcerias", label: "Benefícios", icon: Gift },
  { to: "/empregos", label: "Empregos", icon: Briefcase },
  { to: "/sobre-cdl", label: "Conheça a CDL", icon: Building2 },
]

export function Home() {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto p-5">
        <Card className="mb-6 border-none bg-gradient-to-br from-[#154C96] to-[#002B7F] text-white">
          <CardContent className="p-4">
            <p className="text-sm text-white/80">Olá,</p>
            <p className="text-lg font-bold">{associadoLogado.responsavel}</p>
            <p className="mt-1 text-xs text-white/60">{associadoLogado.nome}</p>
            <p className="mt-2 text-xs text-white/80">Acesse suas ferramentas do dia a dia como associado.</p>
          </CardContent>
        </Card>

        <div className="mb-4">
          <AssociadosCarousel />
        </div>

        <div className="mb-6 pt-2">
          <h2 className="mb-3 flex items-center gap-1.5 text-base font-bold">
            <Zap className="h-4 w-4 text-[#154C96]" /> Acesso Rápido
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {quickTools.map((item) => (
              <Link key={item.to} to={item.to}>
                <Card className="h-full transition-colors hover:bg-muted/50">
                  <CardContent className="flex flex-col items-center gap-2 p-5 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-sm font-semibold leading-tight">{item.label}</span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <h2 className="mb-3 flex items-center gap-1.5 text-base font-bold">
          <Compass className="h-4 w-4 text-[#154C96]" /> Explorar
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
      </div>
    </div>
  )
}
