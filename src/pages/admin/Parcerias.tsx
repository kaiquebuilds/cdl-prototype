import * as React from "react"
import { ScreenHeader } from "@/components/ScreenHeader"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { parcerias as parceriasIniciais, type Beneficio } from "@/data/mockData"
import { Plus, Pencil, Trash2, Tag, X } from "lucide-react"

export function Parcerias() {
  const [parcerias, setParcerias] = React.useState<Beneficio[]>(parceriasIniciais)
  const [aberto, setAberto] = React.useState(false)
  const [form, setForm] = React.useState({
    nome: "",
    desconto: "",
    categoria: "",
    descricao: "",
    telefone: "",
    link: "",
    linkLabel: "",
    comoComprovar: "Apresente a carteirinha digital do associado.",
  })

  function salvar() {
    if (!form.nome.trim()) return
    setParcerias((prev) => [{ id: `p${prev.length + 1}-${Date.now()}`, ...form }, ...prev])
    setForm({ nome: "", desconto: "", categoria: "", descricao: "", telefone: "", link: "", linkLabel: "", comoComprovar: "Apresente a carteirinha digital do associado." })
    setAberto(false)
  }

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <ScreenHeader
        title="Benefícios"
        action={
          <Button size="sm" variant="secondary" className="gap-1" onClick={() => setAberto((v) => !v)}>
            {aberto ? <X className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
            {aberto ? "Cancelar" : "Novo benefício"}
          </Button>
        }
      />
      <div className="flex-1 overflow-y-auto p-4">
        {aberto && (
          <Card className="mb-3">
            <CardContent className="flex flex-col gap-3 p-4">
              <div className="flex flex-col gap-1.5">
                <Label>Benefício</Label>
                <Input value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} />
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
              <div className="flex flex-col gap-1.5">
                <Label>Telefone</Label>
                <Input value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })} />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label>Link</Label>
                <Input value={form.link} onChange={(e) => setForm({ ...form, link: e.target.value })} />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label>Texto do link</Label>
                <Input value={form.linkLabel} onChange={(e) => setForm({ ...form, linkLabel: e.target.value })} />
              </div>
              <Button onClick={salvar}>Salvar benefício</Button>
            </CardContent>
          </Card>
        )}

        <div className="flex flex-col gap-2">
          {parcerias.map((p) => (
            <Card key={p.id}>
              <CardContent className="flex items-center gap-3 p-3">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="min-w-0 flex-1 truncate text-sm font-semibold leading-tight">{p.nome}</p>
                    <Badge variant="secondary">{p.categoria}</Badge>
                  </div>
                  <p className="mt-1 flex items-center gap-1 text-xs font-medium text-[#00B050]">
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
