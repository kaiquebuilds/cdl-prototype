import * as React from "react"
import { cn } from "@/lib/utils"

interface TabsContextValue {
  value: string
  setValue: (value: string) => void
}
const TabsContext = React.createContext<TabsContextValue | null>(null)

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string
  onValueChange: (value: string) => void
}
function Tabs({ value, onValueChange, className, children, ...props }: TabsProps) {
  return (
    <TabsContext.Provider value={{ value, setValue: onValueChange }}>
      <div className={cn(className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

function TabsList({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("inline-flex h-10 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground", className)}
      {...props}
    />
  )
}

function TabsTrigger({ value, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string }) {
  const ctx = React.useContext(TabsContext)!
  const active = ctx.value === value
  return (
    <button
      type="button"
      onClick={() => ctx.setValue(value)}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
        active ? "bg-background text-foreground shadow-sm" : "hover:text-foreground",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({ value, className, ...props }: React.HTMLAttributes<HTMLDivElement> & { value: string }) {
  const ctx = React.useContext(TabsContext)!
  if (ctx.value !== value) return null
  return <div className={cn("mt-2", className)} {...props} />
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
