import * as React from "react"

export function ScreenHeader({
  title,
  action,
  leftAction,
}: {
  title?: string
  action?: React.ReactNode
  leftAction?: React.ReactNode
}) {
  if (!title && !action && !leftAction) return null
  return (
    <div className="flex shrink-0 items-center justify-between border-b border-border bg-white px-4 py-3">
      <div className="flex items-center gap-2">
        {leftAction}
        {title && <h1 className="text-base font-bold text-foreground">{title}</h1>}
      </div>
      {action}
    </div>
  )
}
