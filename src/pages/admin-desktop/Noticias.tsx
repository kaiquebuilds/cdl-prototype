import * as React from "react"
import { PageHeader } from "@/components/admin-desktop/PageHeader"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { noticias as noticiasIniciais, type Noticia } from "@/data/mockData"
import { Plus, Trash2, Eye, X } from "lucide-react"

export function Noticias() {
  const [noticias, setNoticias] = React.useState<Noticia[]>(noticiasIniciais)
  const [aberto, setAberto] = React.useState(false)
  const [form, setForm] = React.useState({ titulo: "", resumo: "", conteudo: "", categoria: "" })

  function salvar() {
    if (!form.titulo.trim()) return
    const hoje = new Date().toLocaleDateString("pt-BR")
    setNoticias((prev) => [
      { id: `n${prev.length + 1}-${Date.now()}`, data: hoje, autor: "Admin", visualizacoes: 0, ...form },
      ...prev,
    ])
    setForm({ titulo: "", resumo: "", conteudo: "", categoria: "" })
    setAberto(false)
  }

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <PageHeader
        title="Notícias"
        description="Gerencie as notícias publicadas para os associados"
        action={
          <Button className="gap-2" onClick={() => setAberto((v) => !v)}>
            {aberto ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
            {aberto ? "Cancelar" : "Nova notícia"}
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
                <Label>Categoria</Label>
                <Input value={form.categoria} onChange={(e) => setForm({ ...form, categoria: e.target.value })} />
              </div>
              <div className="col-span-2 flex flex-col gap-1.5">
                <Label>Resumo</Label>
                <Textarea rows={2} value={form.resumo} onChange={(e) => setForm({ ...form, resumo: e.target.value })} />
              </div>
              <div className="col-span-2 flex flex-col gap-1.5">
                <Label>Conteúdo</Label>
                <Textarea rows={4} value={form.conteudo} onChange={(e) => setForm({ ...form, conteudo: e.target.value })} />
              </div>
              <Button className="col-span-2 w-fit" onClick={salvar}>Publicar notícia</Button>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-3 gap-4">
          {noticias.map((n) => (
            <Card key={n.id}>
              <CardContent className="flex flex-col gap-2 p-5">
                <p className="text-sm font-semibold leading-tight text-slate-900">{n.titulo}</p>
                <p className="text-xs text-muted-foreground">{n.data} · {n.autor ?? "Admin"}</p>
                <p className="flex items-center gap-1.5 text-sm font-medium text-primary">
                  <Eye className="h-3.5 w-3.5" /> {n.visualizacoes ?? 0} visualizações
                </p>
                <div className="mt-2 border-t border-border pt-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full gap-1.5 text-red-600 hover:bg-red-50 hover:text-red-700"
                    onClick={() => setNoticias((prev) => prev.filter((nn) => nn.id !== n.id))}
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
