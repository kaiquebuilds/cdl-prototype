import { ScreenHeader } from "@/components/ScreenHeader"
import { EventosList } from "@/components/shared/EventosList"

export function Eventos() {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <ScreenHeader title="Eventos" />
      <div className="flex-1 overflow-y-auto p-4">
        <EventosList />
      </div>
    </div>
  )
}
