import * as React from "react"
import { PageHeader } from "@/components/admin-desktop/PageHeader"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { associados, type Associado } from "@/data/mockData"
import { Search, Download, X, MapPin, Phone, Pencil } from "lucide-react"

const statusVariant = {
  "Em dia": "success",
  Pendente: "warning",
  Atrasado: "destructive",
} as const

const filtros = ["Todos", "Em dia", "Pendente", "Atrasado"] as const

function exportarCsv(lista: Associado[]) {
  const linhas = [
    ["Nome", "Categoria", "Telefone", "Status", "Último pagamento"],
    ...lista.map((a) => [a.nome, a.categoria, a.telefone, a.status, a.ultimoPagamento]),
  ]
  const csv = linhas.map((l) => l.map((v) => `"${v}"`).join(",")).join("\n")
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = "associados.csv"
  a.click()
  URL.revokeObjectURL(url)
}

export function Associados() {
  const [busca, setBusca] = React.useState("")
  const [status, setStatus] = React.useState<(typeof filtros)[number]>("Todos")
  const [selecionado, setSelecionado] = React.useState<Associado | null>(null)

  const emDia = associados.filter((a) => a.status === "Em dia").length
  const pendentes = associados.filter((a) => a.status === "Pendente").length
  const atrasados = associados.filter((a) => a.status === "Atrasado").length

  const filtrados = associados.filter((a) => {
    const matchBusca = a.nome.toLowerCase().includes(busca.toLowerCase())
    const matchStatus = status === "Todos" || a.status === status
    return matchBusca && matchStatus
  })

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <PageHeader
        title="Associados"
        description="Gerencie os associados da CDL Novo Gama"
        action={
          <Button variant="secondary" className="gap-2" onClick={() => exportarCsv(filtrados)}>
            <Download className="h-4 w-4" /> Exportar CSV
          </Button>
        }
      />
      <div className="flex-1 overflow-y-auto p-8">
        <p className="mb-4 text-sm text-muted-foreground">
          <span className="font-semibold text-[#00B050]">{emDia} em dia</span> ·{" "}
          <span className="font-semibold text-amber-700">{pendentes} pendentes</span> ·{" "}
          <span className="font-semibold text-red-700">{atrasados} atrasados</span> ·{" "}
          <span className="font-semibold text-slate-700">{associados.length} no total</span>
        </p>

        <div className="mb-4 flex items-center gap-3">
          <div className="relative w-72">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Buscar associado..."
              className="pl-9"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>
          <Select
            className="w-44"
            value={status}
            onChange={(e) => setStatus(e.target.value as (typeof filtros)[number])}
          >
            {filtros.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </Select>
        </div>

        <div className="rounded-xl border border-border bg-white">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Categoria</TableHead>
                <TableHead>Telefone</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Último pagamento</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtrados.map((a) => (
                <TableRow key={a.id}>
                  <TableCell className="font-medium text-slate-900">{a.nome}</TableCell>
                  <TableCell className="text-muted-foreground">{a.categoria}</TableCell>
                  <TableCell className="text-muted-foreground">{a.telefone}</TableCell>
                  <TableCell>
                    <Badge variant={statusVariant[a.status]}>{a.status}</Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{a.ultimoPagamento}</TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" variant="ghost" onClick={() => setSelecionado(a)}>
                      Ver perfil
                    </Button>
                    <Button size="sm" variant="ghost">
                      <Pencil className="h-3.5 w-3.5" /> Editar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {filtrados.length === 0 && (
            <p className="p-6 text-center text-sm text-muted-foreground">Nenhum associado encontrado.</p>
          )}
        </div>
      </div>

      {selecionado && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-slate-900/40" onClick={() => setSelecionado(null)} />
          <div className="relative flex h-full w-full max-w-md flex-col overflow-y-auto bg-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <h2 className="text-base font-bold text-slate-900">Perfil do associado</h2>
              <button
                className="rounded-md p-1.5 text-muted-foreground hover:bg-muted"
                onClick={() => setSelecionado(null)}
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="flex flex-col gap-4 p-6">
              <div className="flex flex-col items-center gap-2 text-center">
                <Avatar className="h-20 w-20 border-2 border-primary/20">
                  <AvatarFallback className="bg-primary/10 text-xl font-bold text-primary">
                    {selecionado.nome.split(" ").slice(0, 2).map((w) => w[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-lg font-bold text-slate-900">{selecionado.nome}</h3>
                <Badge variant="secondary">{selecionado.categoria}</Badge>
                <Badge variant={statusVariant[selecionado.status]}>{selecionado.status}</Badge>
              </div>
              <p className="text-sm text-muted-foreground">{selecionado.descricao}</p>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{selecionado.endereco}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span>{selecionado.telefone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-muted-foreground">Último pagamento:</span>
                <span className="font-medium">{selecionado.ultimoPagamento}</span>
              </div>
              <Button className="mt-2 w-full gap-2">
                <Pencil className="h-4 w-4" /> Editar associado
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
