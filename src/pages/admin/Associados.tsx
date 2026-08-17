import * as React from "react"
import { useNavigate } from "react-router-dom"
import { ScreenHeader } from "@/components/ScreenHeader"
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { associados } from "@/data/mockData"
import { Search, Download } from "lucide-react"

const statusVariant = {
  "Em dia": "success",
  Pendente: "warning",
  Atrasado: "destructive",
} as const

const filtros = ["Todos", "Em dia", "Pendente", "Atrasado"] as const

export function Associados() {
  const navigate = useNavigate()
  const [busca, setBusca] = React.useState("")
  const [status, setStatus] = React.useState<(typeof filtros)[number]>("Todos")

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
      <ScreenHeader
        title="Associados"
        action={
          <Button size="sm" variant="secondary" className="gap-1">
            <Download className="h-3.5 w-3.5" /> Exportar CSV
          </Button>
        }
      />
      <div className="flex-1 overflow-y-auto p-4">
        <p className="mb-3 text-xs text-muted-foreground">
          <span className="font-semibold text-green-700">{emDia} em dia</span> ·{" "}
          <span className="font-semibold text-amber-700">{pendentes} pendentes</span> ·{" "}
          <span className="font-semibold text-red-700">{atrasados} atrasados</span>
        </p>

        <div className="mb-3 flex flex-col gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Buscar associado..."
              className="pl-9"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>
          <Select value={status} onChange={(e) => setStatus(e.target.value as (typeof filtros)[number])}>
            {filtros.map((f) => (
              <option key={f} value={f}>{f}</option>
            ))}
          </Select>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Associado</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Últ. pagto.</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtrados.map((a) => (
              <TableRow
                key={a.id}
                className="cursor-pointer"
                onClick={() => navigate(`/associados/${a.id}`)}
              >
                <TableCell>
                  <p className="font-medium leading-tight">{a.nome}</p>
                  <p className="text-xs text-muted-foreground">{a.categoria}</p>
                </TableCell>
                <TableCell>
                  <Badge variant={statusVariant[a.status]}>{a.status}</Badge>
                </TableCell>
                <TableCell className="text-xs text-muted-foreground">{a.ultimoPagamento}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {filtrados.length === 0 && (
          <p className="mt-6 text-center text-sm text-muted-foreground">Nenhum associado encontrado.</p>
        )}
      </div>
    </div>
  )
}
