import * as React from "react"
import { Link, useNavigate } from "react-router-dom"
import { Menu, User } from "lucide-react"
import { Logo } from "@/components/Logo"
import { MenuDrawer } from "@/components/MenuDrawer"
import { useProfile } from "@/context/ProfileContext"

const homeByProfile = { publico: "/", associado: "/home", admin: "/dashboard" } as const

export function TopAppBar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  const { profile } = useProfile()
  const navigate = useNavigate()

  return (
    <>
      <div className="flex shrink-0 items-center justify-between bg-gradient-to-r from-[#154C96] to-[#002B7F] px-3 py-2.5">
        <button
          onClick={() => setDrawerOpen(true)}
          className="rounded-full p-2 text-white hover:bg-white/10"
          aria-label="Abrir menu"
        >
          <Menu className="h-5 w-5" />
        </button>
        <Link to={homeByProfile[profile]}>
          <Logo variant="on-dark" />
        </Link>
        {profile === "associado" && (
          <button
            onClick={() => navigate("/perfil")}
            className="rounded-full bg-white/15 p-2 text-white hover:bg-white/25"
            aria-label="Perfil"
          >
            <User className="h-4 w-4" />
          </button>
        )}
        {profile === "publico" && (
          <button
            onClick={() => navigate("/associar-se")}
            className="rounded-full bg-white/15 p-2 text-white hover:bg-white/25"
            aria-label="Associar-se"
          >
            <User className="h-4 w-4" />
          </button>
        )}
        {profile === "admin" && <div className="h-8 w-8" />}
      </div>
      <MenuDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  )
}
