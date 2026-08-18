import * as React from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { cn } from "@/lib/utils"
import { useProfile } from "@/context/ProfileContext"
import type { Profile } from "@/data/mockData"
import { Logo } from "@/components/Logo"
import {
  X,
  Home as HomeIcon,
  Store,
  Gift,
  Calendar,
  Newspaper,
  Briefcase,
  UserPlus,
  Building2,
  ChevronDown,
  IdCard,
  Users,
  LayoutDashboard,
  Phone,
  Mail,
  MapPin,
  type LucideIcon,
} from "lucide-react"

interface NavChild {
  to: string
  label: string
}

interface NavItem {
  to?: string
  label: string
  icon: LucideIcon
  children?: NavChild[]
}

const sobreCdlChildren: NavChild[] = [
  { to: "/sobre-cdl/fale-conosco", label: "Fale Conosco" },
  { to: "/sobre-cdl/diretoria", label: "Diretoria e Conselho" },
  { to: "/sobre-cdl/codigo-etica", label: "Código de Ética e Conduta" },
  { to: "/sobre-cdl/historia", label: "História da CDL" },
  { to: "/sobre-cdl/missao-visao-valores", label: "Missão, Visão e Valores" },
]

const navByProfile: Record<Profile, NavItem[]> = {
  publico: [
    { to: "/", label: "Início", icon: HomeIcon },
    { to: "/diretorio", label: "Guia Comercial", icon: Store },
    { to: "/parcerias", label: "Benefícios", icon: Gift },
    { to: "/eventos", label: "Eventos", icon: Calendar },
    { to: "/noticias", label: "Notícias", icon: Newspaper },
    { to: "/empregos", label: "Empregos", icon: Briefcase },
    { label: "Conheça a CDL", icon: Building2, children: sobreCdlChildren },
    { to: "/associar-se", label: "Associar-se", icon: UserPlus },
  ],
  associado: [
    { to: "/home", label: "Início", icon: HomeIcon },
    { to: "/carteira", label: "Carteira", icon: IdCard },
    { to: "/diretorio", label: "Guia Comercial", icon: Store },
    { to: "/parcerias", label: "Benefícios", icon: Gift },
    { to: "/eventos", label: "Eventos", icon: Calendar },
    { to: "/noticias", label: "Notícias", icon: Newspaper },
    { label: "Conheça a CDL", icon: Building2, children: sobreCdlChildren },
    { to: "/perfil", label: "Meu Perfil", icon: Users },
  ],
  admin: [
    { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { to: "/associados", label: "Associados", icon: Users },
    { to: "/eventos", label: "Eventos", icon: Calendar },
    { to: "/noticias", label: "Notícias", icon: Newspaper },
    { to: "/parcerias", label: "Benefícios", icon: Gift },
  ],
}

const profileOptions: { value: Profile; label: string; home: string }[] = [
  { value: "publico", label: "Público", home: "/" },
  { value: "associado", label: "Associado", home: "/home" },
  { value: "admin", label: "Admin", home: "/dashboard" },
]

export function MenuDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { profile, setProfile } = useProfile()
  const navigate = useNavigate()
  const location = useLocation()
  const [expanded, setExpanded] = React.useState<string | null>(() =>
    location.pathname.startsWith("/sobre-cdl") ? "Conheça a CDL" : null
  )

  React.useEffect(() => {
    onClose()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname])

  React.useEffect(() => {
    if (open && location.pathname.startsWith("/sobre-cdl")) {
      setExpanded("Conheça a CDL")
    }
  }, [open, location.pathname])

  if (!open) return null

  const items = navByProfile[profile]

  return (
    <div className="absolute inset-0 z-50 flex">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative flex h-full w-[78%] max-w-[300px] flex-col overflow-hidden bg-white shadow-xl">
        <div className="flex shrink-0 items-center justify-between bg-gradient-to-r from-[#154C96] to-[#002B7F] px-4 py-3">
          <Logo variant="on-dark" />
          <button onClick={onClose} className="rounded-full p-1 text-white hover:bg-white/10" aria-label="Fechar menu">
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-2">
          {items.map((item) => {
            if (item.children) {
              const isExpanded = expanded === item.label
              return (
                <div key={item.label}>
                  <button
                    onClick={() => setExpanded(isExpanded ? null : item.label)}
                    className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100"
                  >
                    <item.icon className="h-4 w-4 text-primary" />
                    <span className="flex-1 text-left">{item.label}</span>
                    <ChevronDown className={cn("h-4 w-4 text-slate-400 transition-transform", isExpanded && "rotate-180")} />
                  </button>
                  {isExpanded && (
                    <div className="ml-4 flex flex-col border-l border-border pl-4">
                      {item.children.map((c) => {
                        const isActive = location.pathname.startsWith(c.to)
                        return (
                          <Link
                            key={c.to}
                            to={c.to}
                            className={cn(
                              "rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-100",
                              isActive && "bg-primary/10 text-primary font-semibold"
                            )}
                          >
                            {c.label}
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            }
            if (!item.to) return null
            const isActive = item.to === "/" ? location.pathname === "/" : location.pathname.startsWith(item.to)
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-100",
                  isActive && "bg-primary/10 text-primary font-semibold"
                )}
              >
                <item.icon className="h-4 w-4 text-primary" />
                {item.label}
              </Link>
            )
          })}
        </nav>

        {profile === "publico" && (
          <div className="shrink-0 px-3 pt-3">
            <Link
              to="/associar-se"
              className="flex items-center gap-3 rounded-lg bg-gradient-to-r from-[#00B050] to-[#007A3D] p-3 text-white"
            >
              <UserPlus className="h-5 w-5" />
              <div>
                <p className="text-sm font-bold">Associe-se</p>
                <p className="text-[10px] text-white/80">Junte-se à CDL Novo Gama</p>
              </div>
            </Link>
          </div>
        )}

        <div className="shrink-0 border-t border-border p-3">
          <p className="mb-1.5 px-1 text-[10px] font-medium uppercase text-muted-foreground">Ver como</p>
          <div className="flex gap-1 rounded-lg bg-slate-100 p-1">
            {profileOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => {
                  setProfile(opt.value)
                  navigate(opt.home)
                }}
                className={cn(
                  "flex-1 rounded-md py-1.5 text-xs font-medium transition-colors",
                  profile === opt.value ? "bg-white text-slate-900 shadow" : "text-slate-500 hover:text-slate-800"
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="shrink-0 border-t border-border bg-slate-50 p-3 text-xs text-muted-foreground">
          <a href="https://wa.me/5561981512903" className="flex items-center gap-1.5">
            <Phone className="h-3.5 w-3.5" /> (61) 98151-2903
          </a>
          <a href="mailto:cdlnovogama2025@gmail.com.br" className="mt-1 flex items-center gap-1.5">
            <Mail className="h-3.5 w-3.5" /> cdlnovogama2025@gmail.com.br
          </a>
          <p className="mt-1 flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" /> Novo Gama - Goiás
          </p>
        </div>
      </div>
    </div>
  )
}
