import { ScreenHeader } from "@/components/ScreenHeader"
import { ParceriasList } from "@/components/shared/ParceriasList"

export function Parcerias() {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <ScreenHeader title="Benefícios" />
      <div className="flex-1 overflow-y-auto p-4">
        <ParceriasList />
      </div>
    </div>
  )
}
