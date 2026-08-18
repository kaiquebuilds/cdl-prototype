import * as React from "react"
import { useNavigate } from "react-router-dom"
import { ScreenHeader } from "@/components/ScreenHeader"
import { ArrowLeft } from "lucide-react"

export function SubPage({ title, children }: { title: string; children: React.ReactNode }) {
  const navigate = useNavigate()
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <ScreenHeader
        title={title}
        leftAction={
          <button
            onClick={() => navigate(-1)}
            className="rounded-full bg-slate-100 p-2 text-slate-700 hover:bg-slate-200"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
        }
      />
      <div className="flex-1 overflow-y-auto p-4">{children}</div>
    </div>
  )
}
