import { NavLink } from "react-router-dom"
import { cn } from "@/lib/utils"
import {
  Home,
  Newspaper,
  Calendar,
  Gift,
  UserPlus,
  IdCard,
  Users,
  LayoutDashboard,
  type LucideIcon,
} from "lucide-react"
import { useProfile } from "@/context/ProfileContext"

interface NavItem {
  to: string
  label: string
  icon: LucideIcon
}

const navByProfile: Record<string, NavItem[]> = {
  publico: [
    { to: "/", label: "Home", icon: Home },
    { to: "/diretorio", label: "Associados", icon: Users },
    { to: "/eventos", label: "Eventos", icon: Calendar },
    { to: "/parcerias", label: "Benefícios", icon: Gift },
    { to: "/associar-se", label: "Associar-se", icon: UserPlus },
  ],
  associado: [
    { to: "/carteira", label: "Carteira", icon: IdCard },
    { to: "/diretorio", label: "Associados", icon: Users },
    { to: "/eventos", label: "Eventos", icon: Calendar },
    { to: "/noticias", label: "Notícias", icon: Newspaper },
    { to: "/parcerias", label: "Benefícios", icon: Gift },
  ],
  admin: [
    { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/associados", label: "Associados", icon: Users },
    { to: "/eventos", label: "Eventos", icon: Calendar },
    { to: "/noticias", label: "Notícias", icon: Newspaper },
    { to: "/parcerias", label: "Benefícios", icon: Gift },
  ],
}

export function BottomNav() {
  const { profile } = useProfile()
  const items = navByProfile[profile]

  return (
    <nav className="flex shrink-0 border-t border-border bg-white">
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === "/"}
          className={({ isActive }) =>
            cn(
              "flex flex-1 flex-col items-center gap-0.5 py-2 text-[10px] font-medium",
              isActive ? "text-primary" : "text-muted-foreground"
            )
          }
        >
          <item.icon className="h-5 w-5" />
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}
