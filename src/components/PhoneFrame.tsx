import * as React from "react"
import { useProfile } from "@/context/ProfileContext"

export function PhoneFrame({ children }: { children: React.ReactNode }) {
  const { raw } = useProfile()

  if (raw) {
    return <div className="flex h-screen w-full flex-col overflow-hidden bg-background">{children}</div>
  }

  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-slate-200 p-6">
      <div className="flex w-full max-w-[420px] flex-col overflow-hidden rounded-[2.5rem] border-[10px] border-slate-900 bg-background shadow-2xl">
        <div className="flex h-6 shrink-0 items-center justify-center bg-slate-900">
          <div className="h-3 w-24 rounded-full bg-slate-800" />
        </div>
        <div className="flex h-[780px] flex-col overflow-hidden">{children}</div>
      </div>
    </div>
  )
}
