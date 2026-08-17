import * as React from "react"
import { ScreenHeader } from "@/components/ScreenHeader"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { parcerias as parceriasIniciais, type Parceria } from "@/data/mockData"
import { Plus, Pencil, Trash2, Tag, X } from "lucide-react"

export function Parcerias() {
  const [parcerias, setParcerias] = React.useState<Parceria[]>(parceriasIniciais)
  const [aberto, setAberto] = React.useState(false)
  const [form, setForm] = React.useState({
    parceiro: "",
    desconto: "",
    categoria: "",
    descricao: "",
    comoComprovar: "Apresente a carteirinha digital do associado.",
  })

  function salvar() {
    if (!form.parceiro.trim()) return
    setParcerias((prev) => [{ id: `p${prev.length + 1}-${Date.now()}`, ...form }, ...prev])
    setForm({ parceiro: "", desconto: "", categoria: "", descricao: "", comoComprovar: "Apresente a carteirinha digital do associado." })
    setAberto(false)
  }

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <ScreenHeader
        title="Parcerias"
        action={
          <Button size="sm" variant="secondary" className="gap-1" onClick={() => setAberto((v) => !v)}>
            {aberto ? <X className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
            {aberto ? "Cancelar" : "Nova parceria"}
          </Button>
        }
      />
      <div className="flex-1 overflow-y-auto p-4">
        {aberto && (
          <Card className="mb-3">
            <CardContent className="flex flex-col gap-3 p-4">
              <div className="flex flex-col gap-1.5">
                <Label>Parceiro</Label>
                <Input value={form.parceiro} onChange={(e) => setForm({ ...form, parceiro: e.target.value })} />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label>Desconto</Label>
                <Input value={form.desconto} onChange={(e) => setForm({ ...form, desconto: e.target.value })} />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label>Categoria</Label>
                <Input value={form.categoria} onChange={(e) => setForm({ ...form, categoria: e.target.value })} />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label>Descrição</Label>
                <Textarea rows={3} value={form.descricao} onChange={(e) => setForm({ ...form, descricao: e.target.value })} />
              </div>
              <Button onClick={salvar}>Salvar parceria</Button>
            </CardContent>
          </Card>
        )}

        <div className="flex flex-col gap-2">
          {parcerias.map((p) => (
            <Card key={p.id}>
              <CardContent className="flex items-center gap-3 p-3">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="min-w-0 flex-1 truncate text-sm font-semibold leading-tight">{p.parceiro}</p>
                    <Badge variant="secondary">{p.categoria}</Badge>
                  </div>
                  <p className="mt-1 flex items-center gap-1 text-xs font-medium text-green-600">
                    <Tag className="h-3 w-3" /> {p.desconto}
                  </p>
                </div>
                <button className="rounded-md p-1.5 text-muted-foreground hover:bg-muted">
                  <Pencil className="h-4 w-4" />
                </button>
                <button
                  className="rounded-md p-1.5 text-red-500 hover:bg-red-50"
                  onClick={() => setParcerias((prev) => prev.filter((pp) => pp.id !== p.id))}
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
