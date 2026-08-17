import * as React from "react"

export function PageHeader({
  title,
  description,
  action,
}: {
  title: string
  description?: string
  action?: React.ReactNode
}) {
  return (
    <div className="flex shrink-0 items-center justify-between border-b border-border bg-white px-8 py-5">
      <div>
        <h1 className="text-xl font-bold text-slate-900">{title}</h1>
        {description && <p className="mt-0.5 text-sm text-muted-foreground">{description}</p>}
      </div>
      {action}
    </div>
  )
}
