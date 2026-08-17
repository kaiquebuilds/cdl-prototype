import * as React from "react"
import { ScreenHeader } from "@/components/ScreenHeader"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { noticias as noticiasIniciais, type Noticia } from "@/data/mockData"
import { Plus, Pencil, Trash2, Eye, X } from "lucide-react"

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
      <ScreenHeader
        title="Notícias"
        action={
          <Button size="sm" variant="secondary" className="gap-1" onClick={() => setAberto((v) => !v)}>
            {aberto ? <X className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
            {aberto ? "Cancelar" : "Nova notícia"}
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
                <Label>Categoria</Label>
                <Input value={form.categoria} onChange={(e) => setForm({ ...form, categoria: e.target.value })} />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label>Resumo</Label>
                <Textarea rows={2} value={form.resumo} onChange={(e) => setForm({ ...form, resumo: e.target.value })} />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label>Conteúdo</Label>
                <Textarea rows={4} value={form.conteudo} onChange={(e) => setForm({ ...form, conteudo: e.target.value })} />
              </div>
              <Button onClick={salvar}>Publicar notícia</Button>
            </CardContent>
          </Card>
        )}

        <div className="flex flex-col gap-2">
          {noticias.map((n) => (
            <Card key={n.id}>
              <CardContent className="flex items-center gap-3 p-3">
                <div className="flex-1">
                  <p className="text-sm font-semibold leading-tight">{n.titulo}</p>
                  <p className="text-xs text-muted-foreground">{n.data} · {n.autor ?? "Admin"}</p>
                  <p className="mt-1 flex items-center gap-1 text-xs font-medium text-primary">
                    <Eye className="h-3 w-3" /> {n.visualizacoes ?? 0} visualizações
                  </p>
                </div>
                <button className="rounded-md p-1.5 text-muted-foreground hover:bg-muted">
                  <Pencil className="h-4 w-4" />
                </button>
                <button
                  className="rounded-md p-1.5 text-red-500 hover:bg-red-50"
                  onClick={() => setNoticias((prev) => prev.filter((nn) => nn.id !== n.id))}
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
