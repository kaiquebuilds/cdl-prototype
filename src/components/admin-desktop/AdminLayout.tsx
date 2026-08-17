import { NavLink, Outlet, Link } from "react-router-dom"
import { cn } from "@/lib/utils"
import { LayoutDashboard, Users, Handshake, Calendar, Newspaper, ArrowLeft } from "lucide-react"
import { Logo } from "@/components/Logo"

const navItems = [
  { to: "/admin-desktop/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin-desktop/associados", label: "Associados", icon: Users },
  { to: "/admin-desktop/parcerias", label: "Benefícios", icon: Handshake },
  { to: "/admin-desktop/eventos", label: "Eventos", icon: Calendar },
  { to: "/admin-desktop/noticias", label: "Notícias", icon: Newspaper },
]

export function AdminLayout() {
  return (
    <div className="flex h-screen w-full bg-slate-50">
      <aside className="flex w-60 shrink-0 flex-col bg-[#002B7F]">
        <div className="flex flex-col gap-1 px-5 py-6">
          <Logo variant="on-dark" />
          <p className="text-[10px] text-white/50">Painel administrativo</p>
        </div>
        <nav className="flex flex-1 flex-col gap-1 px-3">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive ? "bg-white/10 text-white" : "text-white/60 hover:bg-white/5 hover:text-white"
                )
              }
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="border-t border-white/10 px-3 py-4">
          <Link
            to="/"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-white/60 transition-colors hover:bg-white/5 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao app
          </Link>
        </div>
      </aside>
      <main className="flex flex-1 flex-col overflow-hidden">
        <Outlet />
      </main>
    </div>
  )
}
