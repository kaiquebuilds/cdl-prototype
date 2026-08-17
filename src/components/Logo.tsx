import { Store } from "lucide-react"

export function Logo({ subtitle = true }: { subtitle?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/15">
        <Store className="h-5 w-5 text-white" />
      </div>
      <div className="leading-tight">
        <p className="text-sm font-bold text-white">CDL Novo Gama</p>
        {subtitle && (
          <p className="text-[10px] text-white/80">Câmara de Dirigentes Lojistas de Novo Gama-GO</p>
        )}
      </div>
    </div>
  )
}
