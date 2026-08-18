import * as React from "react"
import { ScreenHeader } from "@/components/ScreenHeader"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { associadoLogado } from "@/data/mockData"
import { Camera, Plus } from "lucide-react"

const categorias = ["Serviços Jurídicos", "Sites e Sistemas", "Tecnologia", "Farmácia", "Mercearia", "Loja de Roupas", "Padaria"]

export function Perfil() {
  const a = associadoLogado
  const iniciais = a.nome.split(" ").slice(0, 2).map((w) => w[0]).join("")

  const [produtos, setProdutos] = React.useState(
    a.produtos ?? []
  )

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <ScreenHeader title="Meu Perfil" />
      <div className="flex-1 overflow-y-auto p-4">
        <div className="mb-4 flex flex-col items-center gap-2">
          <div className="relative">
            <Avatar className="h-20 w-20 border-2 border-primary/20">
              <AvatarFallback className="bg-primary/10 text-xl font-bold text-primary">{iniciais}</AvatarFallback>
            </Avatar>
            <button className="absolute -bottom-1 -right-1 rounded-full bg-primary p-1.5 text-white">
              <Camera className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        <Card>
          <CardContent className="flex flex-col gap-4 p-4">
            <div className="flex flex-col gap-1.5">
              <Label>Nome da empresa</Label>
              <Input defaultValue={a.nome} />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label>Responsável</Label>
              <Input defaultValue={a.responsavel} />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label>Categoria</Label>
              <Select defaultValue={a.categoria}>
                {categorias.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </Select>
            </div>
            <div className="flex flex-col gap-1.5">
              <Label>Endereço</Label>
              <Input defaultValue={a.endereco} />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label>Telefone</Label>
              <Input defaultValue={a.telefone} />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label>Descrição</Label>
              <Textarea defaultValue={a.descricao} rows={3} />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label>Instagram</Label>
              <Input placeholder="@suaempresa" />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label>WhatsApp</Label>
              <Input placeholder="(61) 90000-0000" />
            </div>
          </CardContent>
        </Card>

        <Card className="mt-4">
          <CardContent className="flex flex-col gap-3 p-4">
            <Label className="text-sm font-bold">Produtos e Serviços</Label>
            {produtos.map((p, i) => (
              <div key={i} className="flex flex-col gap-2 border-b border-border pb-3 last:border-0 last:pb-0">
                <div className="flex flex-col gap-1.5">
                  <Label className="text-xs text-muted-foreground">Nome</Label>
                  <Input
                    defaultValue={p.nome}
                    onChange={(e) => {
                      const next = [...produtos]
                      next[i] = { ...next[i], nome: e.target.value }
                      setProdutos(next)
                    }}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label className="text-xs text-muted-foreground">Descrição</Label>
                  <Textarea
                    defaultValue={p.descricao}
                    rows={2}
                    onChange={(e) => {
                      const next = [...produtos]
                      next[i] = { ...next[i], descricao: e.target.value }
                      setProdutos(next)
                    }}
                  />
                </div>
              </div>
            ))}
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => setProdutos([...produtos, { nome: "", descricao: "" }])}
            >
              <Plus className="h-4 w-4" /> Adicionar produto/serviço
            </Button>
          </CardContent>
        </Card>

        <Button className="mt-4 w-full">Salvar alterações</Button>
      </div>
    </div>
  )
}
