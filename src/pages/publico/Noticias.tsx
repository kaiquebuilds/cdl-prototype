import { ScreenHeader } from "@/components/ScreenHeader"
import { NoticiasList } from "@/components/shared/NoticiasList"

export function Noticias() {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <ScreenHeader title="Notícias" />
      <div className="flex-1 overflow-y-auto p-4">
        <NoticiasList />
      </div>
    </div>
  )
}
