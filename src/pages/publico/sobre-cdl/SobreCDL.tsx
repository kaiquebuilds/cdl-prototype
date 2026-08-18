import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { SubPage } from "./SubPage"
import { Phone, Users, ShieldCheck, BookOpen, Target, ChevronRight, type LucideIcon } from "lucide-react"

const items: { to: string; label: string; description: string; icon: LucideIcon }[] = [
  { to: "/sobre-cdl/fale-conosco", label: "Fale Conosco", description: "Telefone, e-mail e endereço", icon: Phone },
  { to: "/sobre-cdl/diretoria", label: "Diretoria e Conselho", description: "Quem conduz a CDL Novo Gama", icon: Users },
  { to: "/sobre-cdl/codigo-etica", label: "Código de Ética e Conduta", description: "Princípios que nos guiam", icon: ShieldCheck },
  { to: "/sobre-cdl/historia", label: "História da CDL", description: "Nossa trajetória em Novo Gama", icon: BookOpen },
  { to: "/sobre-cdl/missao-visao-valores", label: "Missão, Visão e Valores", description: "O que nos move", icon: Target },
]

export function SobreCDL() {
  return (
    <SubPage title="Sobre a CDL">
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <Link key={item.to} to={item.to}>
            <Card className="transition-colors hover:bg-muted/50">
              <CardContent className="flex items-center gap-3 p-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold leading-tight">{item.label}</p>
                  <p className="truncate text-xs text-muted-foreground">{item.description}</p>
                </div>
                <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground" />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </SubPage>
  )
}
