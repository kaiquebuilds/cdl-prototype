import { Routes, Route, Navigate, useLocation } from "react-router-dom"
import { useProfile } from "@/context/ProfileContext"
import { PhoneFrame } from "@/components/PhoneFrame"
import { ProfileToggle } from "@/components/ProfileToggle"
import { BottomNav } from "@/components/BottomNav"
import { AdminLayout } from "@/components/admin-desktop/AdminLayout"

import { Home } from "@/pages/publico/Home"
import { Noticias as PublicoNoticias } from "@/pages/publico/Noticias"
import { Eventos as PublicoEventos } from "@/pages/publico/Eventos"
import { Parcerias as PublicoParcerias } from "@/pages/publico/Parcerias"
import { Empregos } from "@/pages/publico/Empregos"
import { Associar } from "@/pages/publico/Associar"

import { Carteira } from "@/pages/associado/Carteira"
import { Perfil } from "@/pages/associado/Perfil"
import { Diretorio } from "@/pages/associado/Diretorio"
import { MembroPublico } from "@/pages/associado/MembroPublico"
import { Eventos as AssociadoEventos } from "@/pages/associado/Eventos"
import { Noticias as AssociadoNoticias } from "@/pages/associado/Noticias"
import { Parcerias as AssociadoParcerias } from "@/pages/associado/Parcerias"

import { Dashboard } from "@/pages/admin/Dashboard"
import { Associados } from "@/pages/admin/Associados"
import { Noticias as AdminNoticias } from "@/pages/admin/Noticias"
import { Eventos as AdminEventos } from "@/pages/admin/Eventos"
import { Parcerias as AdminParcerias } from "@/pages/admin/Parcerias"

import { Dashboard as DesktopDashboard } from "@/pages/admin-desktop/Dashboard"
import { Associados as DesktopAssociados } from "@/pages/admin-desktop/Associados"
import { Parcerias as DesktopParcerias } from "@/pages/admin-desktop/Parcerias"
import { Eventos as DesktopEventos } from "@/pages/admin-desktop/Eventos"
import { Noticias as DesktopNoticias } from "@/pages/admin-desktop/Noticias"

import { ParceriaDetalhe } from "@/pages/shared/ParceriaDetalhe"

function PublicoRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/noticias" element={<PublicoNoticias />} />
      <Route path="/diretorio" element={<Diretorio />} />
      <Route path="/diretorio/:id" element={<MembroPublico />} />
      <Route path="/eventos" element={<PublicoEventos />} />
      <Route path="/parcerias" element={<PublicoParcerias />} />
      <Route path="/parcerias/:id" element={<ParceriaDetalhe />} />
      <Route path="/empregos" element={<Empregos />} />
      <Route path="/associar-se" element={<Associar />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

function AssociadoRoutes() {
  return (
    <Routes>
      <Route path="/carteira" element={<Carteira />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/diretorio" element={<Diretorio />} />
      <Route path="/diretorio/:id" element={<MembroPublico />} />
      <Route path="/eventos" element={<AssociadoEventos />} />
      <Route path="/noticias" element={<AssociadoNoticias />} />
      <Route path="/parcerias" element={<AssociadoParcerias />} />
      <Route path="/parcerias/:id" element={<ParceriaDetalhe />} />
      <Route path="*" element={<Navigate to="/carteira" replace />} />
    </Routes>
  )
}

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/associados" element={<Associados />} />
      <Route path="/associados/:id" element={<MembroPublico />} />
      <Route path="/noticias" element={<AdminNoticias />} />
      <Route path="/eventos" element={<AdminEventos />} />
      <Route path="/parcerias" element={<AdminParcerias />} />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  )
}

function AdminDesktopRoutes() {
  return (
    <Routes>
      <Route element={<AdminLayout />}>
        <Route path="/admin-desktop" element={<Navigate to="/admin-desktop/dashboard" replace />} />
        <Route path="/admin-desktop/dashboard" element={<DesktopDashboard />} />
        <Route path="/admin-desktop/associados" element={<DesktopAssociados />} />
        <Route path="/admin-desktop/parcerias" element={<DesktopParcerias />} />
        <Route path="/admin-desktop/eventos" element={<DesktopEventos />} />
        <Route path="/admin-desktop/noticias" element={<DesktopNoticias />} />
      </Route>
    </Routes>
  )
}

export default function App() {
  const { profile } = useProfile()
  const location = useLocation()

  if (location.pathname.startsWith("/admin-desktop")) {
    return <AdminDesktopRoutes />
  }

  return (
    <PhoneFrame>
      <ProfileToggle />
      {profile === "publico" && <PublicoRoutes />}
      {profile === "associado" && <AssociadoRoutes />}
      {profile === "admin" && <AdminRoutes />}
      <BottomNav />
    </PhoneFrame>
  )
}
