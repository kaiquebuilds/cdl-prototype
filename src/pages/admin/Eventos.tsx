import * as React from "react"
import { ScreenHeader } from "@/components/ScreenHeader"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { eventos as eventosIniciais, type Evento } from "@/data/mockData"
import { Plus, Pencil, Trash2, Users, X } from "lucide-react"

export function Eventos() {
  const [eventos, setEventos] = React.useState<Evento[]>(eventosIniciais)
  const [aberto, setAberto] = React.useState(false)
  const [form, setForm] = React.useState({ titulo: "", data: "", local: "", descricao: "" })

  function salvar() {
    if (!form.titulo.trim()) return
    setEventos((prev) => [
      { id: `e${prev.length + 1}-${Date.now()}`, inscritos: 0, ...form },
      ...prev,
    ])
    setForm({ titulo: "", data: "", local: "", descricao: "" })
    setAberto(false)
  }

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <ScreenHeader
        title="Eventos"
        action={
          <Button size="sm" variant="secondary" className="gap-1" onClick={() => setAberto((v) => !v)}>
            {aberto ? <X className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
            {aberto ? "Cancelar" : "Novo evento"}
          </Button>
        }
      />
      <div className="flex-1 overflow-y-auto p-4">
        {aberto && (
          <Card className="mb-3">
            <CardContent className="flex flex-col gap-3 p-4">
              <div className="flex flex-col gap-1.5">
                <Label>Título</Label>
                <Input value={form.titulo} onChange={(e) => setForm({ ...form, titulo: e.target.value })} />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label>Data</Label>
                <Input placeholder="DD/MM/AAAA" value={form.data} onChange={(e) => setForm({ ...form, data: e.target.value })} />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label>Local</Label>
                <Input value={form.local} onChange={(e) => setForm({ ...form, local: e.target.value })} />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label>Descrição</Label>
                <Textarea rows={3} value={form.descricao} onChange={(e) => setForm({ ...form, descricao: e.target.value })} />
              </div>
              <Button onClick={salvar}>Salvar evento</Button>
            </CardContent>
          </Card>
        )}

        <div className="flex flex-col gap-2">
          {eventos.map((e) => (
            <Card key={e.id}>
              <CardContent className="flex items-center gap-3 p-3">
                <div className="flex-1">
                  <p className="text-sm font-semibold leading-tight">{e.titulo}</p>
                  <p className="text-xs text-muted-foreground">{e.data} · {e.local}</p>
                  <p className="mt-1 flex items-center gap-1 text-xs font-medium text-primary">
                    <Users className="h-3 w-3" /> {e.inscritos ?? 0} inscritos
                  </p>
                </div>
                <button className="rounded-md p-1.5 text-muted-foreground hover:bg-muted">
                  <Pencil className="h-4 w-4" />
                </button>
                <button
                  className="rounded-md p-1.5 text-red-500 hover:bg-red-50"
                  onClick={() => setEventos((prev) => prev.filter((ev) => ev.id !== e.id))}
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
