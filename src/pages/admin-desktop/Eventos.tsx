import * as React from "react"
import { PageHeader } from "@/components/admin-desktop/PageHeader"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { eventos as eventosIniciais, type Evento } from "@/data/mockData"
import { Plus, Trash2, Users, Calendar, MapPin, X } from "lucide-react"

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
      <PageHeader
        title="Eventos"
        description="Gerencie os eventos da CDL Novo Gama"
        action={
          <Button className="gap-2" onClick={() => setAberto((v) => !v)}>
            {aberto ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
            {aberto ? "Cancelar" : "Novo evento"}
          </Button>
        }
      />
      <div className="flex-1 overflow-y-auto p-8">
        {aberto && (
          <Card className="mb-6">
            <CardContent className="grid grid-cols-2 gap-4 p-5">
              <div className="flex flex-col gap-1.5">
                <Label>Título</Label>
                <Input value={form.titulo} onChange={(e) => setForm({ ...form, titulo: e.target.value })} />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label>Data</Label>
                <Input placeholder="DD/MM/AAAA" value={form.data} onChange={(e) => setForm({ ...form, data: e.target.value })} />
              </div>
              <div className="col-span-2 flex flex-col gap-1.5">
                <Label>Local</Label>
                <Input value={form.local} onChange={(e) => setForm({ ...form, local: e.target.value })} />
              </div>
              <div className="col-span-2 flex flex-col gap-1.5">
                <Label>Descrição</Label>
                <Textarea rows={3} value={form.descricao} onChange={(e) => setForm({ ...form, descricao: e.target.value })} />
              </div>
              <Button className="col-span-2 w-fit" onClick={salvar}>Salvar evento</Button>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-3 gap-4">
          {eventos.map((e) => (
            <Card key={e.id}>
              <CardContent className="flex flex-col gap-2 p-5">
                <p className="text-sm font-semibold leading-tight text-slate-900">{e.titulo}</p>
                <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" /> {e.data}
                </p>
                <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" /> {e.local}
                </p>
                <p className="flex items-center gap-1.5 text-sm font-medium text-primary">
                  <Users className="h-3.5 w-3.5" /> {e.inscritos ?? 0} inscritos
                </p>
                <div className="mt-2 border-t border-border pt-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full gap-1.5 text-red-600 hover:bg-red-50 hover:text-red-700"
                    onClick={() => setEventos((prev) => prev.filter((ev) => ev.id !== e.id))}
                  >
                    <Trash2 className="h-3.5 w-3.5" /> Excluir
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
