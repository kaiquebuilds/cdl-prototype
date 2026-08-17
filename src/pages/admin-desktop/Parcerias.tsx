import * as React from "react"
import { PageHeader } from "@/components/admin-desktop/PageHeader"
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
    cupom: "",
    descricao: "",
    telefone: "",
    link: "",
    comoComprovar: "Apresente a carteirinha digital do associado.",
  })

  function salvar() {
    if (!form.nome.trim()) return
    setParcerias((prev) => [{ id: `p${prev.length + 1}-${Date.now()}`, ...form }, ...prev])
    setForm({ nome: "", desconto: "", categoria: "", cupom: "", descricao: "", telefone: "", link: "", comoComprovar: "Apresente a carteirinha digital do associado." })
    setAberto(false)
  }

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <PageHeader
        title="Benefícios"
        description="Gerencie os benefícios oferecidos aos associados"
        action={
          <Button className="gap-2" onClick={() => setAberto((v) => !v)}>
            {aberto ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
            {aberto ? "Cancelar" : "Novo benefício"}
          </Button>
        }
      />
      <div className="flex-1 overflow-y-auto p-8">
        {aberto && (
          <Card className="mb-6">
            <CardContent className="grid grid-cols-2 gap-4 p-5">
              <div className="flex flex-col gap-1.5">
                <Label>Benefício</Label>
                <Input value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label>Categoria</Label>
                <Input value={form.categoria} onChange={(e) => setForm({ ...form, categoria: e.target.value })} />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label>Desconto</Label>
                <Input value={form.desconto} onChange={(e) => setForm({ ...form, desconto: e.target.value })} />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label>Cupom</Label>
                <Input value={form.cupom} onChange={(e) => setForm({ ...form, cupom: e.target.value })} />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label>Telefone</Label>
                <Input value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })} />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label>Link</Label>
                <Input value={form.link} onChange={(e) => setForm({ ...form, link: e.target.value })} />
              </div>
              <div className="col-span-2 flex flex-col gap-1.5">
                <Label>Descrição</Label>
                <Textarea rows={3} value={form.descricao} onChange={(e) => setForm({ ...form, descricao: e.target.value })} />
              </div>
              <Button className="col-span-2 w-fit" onClick={salvar}>Salvar benefício</Button>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-3 gap-4">
          {parcerias.map((p) => (
            <Card key={p.id}>
              <CardContent className="flex flex-col gap-2 p-5">
                <div className="flex items-start justify-between gap-2">
                  <p className="min-w-0 flex-1 truncate text-sm font-semibold leading-tight text-slate-900">{p.nome}</p>
                  <Badge variant="secondary">{p.categoria}</Badge>
                </div>
                <p className="flex items-center gap-1 text-sm font-medium text-[#00B050]">
                  <Tag className="h-3.5 w-3.5" /> {p.desconto}
                </p>
                {p.cupom && <p className="text-xs text-muted-foreground">Cupom: {p.cupom}</p>}
                {p.telefone && <p className="text-xs text-muted-foreground">{p.telefone}</p>}
                <p className="line-clamp-2 text-xs text-muted-foreground">{p.descricao}</p>
                <div className="mt-2 flex items-center gap-2 border-t border-border pt-3">
                  <Button size="sm" variant="outline" className="flex-1 gap-1.5">
                    <Pencil className="h-3.5 w-3.5" /> Editar
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 gap-1.5 text-red-600 hover:bg-red-50 hover:text-red-700"
                    onClick={() => setParcerias((prev) => prev.filter((pp) => pp.id !== p.id))}
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
