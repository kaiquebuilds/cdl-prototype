import { useNavigate } from "react-router-dom"
import { useProfile } from "@/context/ProfileContext"
import type { Profile } from "@/data/mockData"
import { cn } from "@/lib/utils"

const options: { value: Profile; label: string; home: string }[] = [
  { value: "publico", label: "Público", home: "/" },
  { value: "associado", label: "Associado", home: "/carteira" },
  { value: "admin", label: "Admin", home: "/dashboard" },
]

export function ProfileToggle() {
  const { profile, setProfile } = useProfile()
  const navigate = useNavigate()

  return (
    <div className="flex items-center gap-1 bg-slate-900 p-2">
      <span className="pl-1 pr-2 text-[10px] font-medium text-slate-400">Ver como:</span>
      <div className="flex flex-1 rounded-lg bg-slate-800 p-0.5">
        {options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => {
              setProfile(opt.value)
              navigate(opt.home)
            }}
            className={cn(
              "flex-1 rounded-md py-1 text-[11px] font-medium transition-colors",
              profile === opt.value ? "bg-white text-slate-900" : "text-slate-300 hover:text-white"
            )}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  )
}
