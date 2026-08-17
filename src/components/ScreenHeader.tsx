import * as React from "react"
import { Logo } from "@/components/Logo"

export function ScreenHeader({ title, action }: { title?: string; action?: React.ReactNode }) {
  return (
    <div className="shrink-0 bg-gradient-to-r from-[#154C96] to-[#002B7F] px-4 pb-3 pt-3">
      <div className="flex items-center justify-between">
        <Logo variant="on-dark" subtitle={!title} />
        {action}
      </div>
      {title && <h1 className="mt-2 text-lg font-bold text-white">{title}</h1>}
    </div>
  )
}
