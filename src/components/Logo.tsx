import { cn } from "@/lib/utils"

export function Logo({
  variant = "default",
  subtitle = false,
}: {
  variant?: "default" | "on-dark"
  subtitle?: boolean
}) {
  return (
    <div className="flex items-center gap-2">
      <img
        src="/cdl-logo.png"
        alt="CDL Novo Gama"
        className={cn("h-8 w-auto shrink-0", variant === "on-dark" && "rounded-lg bg-white p-1.5")}
      />
      {subtitle && (
        <p
          className={cn(
            "leading-tight",
            variant === "on-dark" ? "text-[11px] font-medium text-white" : "text-[10px] text-slate-500"
          )}
        >
          Câmara de Dirigentes Lojistas de Novo Gama-GO
        </p>
      )}
    </div>
  )
}
