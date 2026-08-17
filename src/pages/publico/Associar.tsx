import { ScreenHeader } from "@/components/ScreenHeader"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

const categorias = [
  "Comércio Varejista",
  "Serviços",
  "Alimentação",
  "Saúde e Bem-estar",
  "Tecnologia",
  "Indústria",
  "Outro",
]

export function Associar() {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <ScreenHeader title="Tornar-se Associado" />
      <div className="flex-1 overflow-y-auto p-4">
        <p className="mb-4 text-sm text-muted-foreground">
          Preencha os dados abaixo e nossa equipe entrará em contato para concluir sua associação.
        </p>
        <Card>
          <CardContent className="flex flex-col gap-4 p-4">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="empresa">Nome da empresa</Label>
              <Input id="empresa" placeholder="Ex: Mercearia Boa Economia" />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="responsavel">Nome do responsável</Label>
              <Input id="responsavel" placeholder="Ex: Maria da Silva" />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" placeholder="contato@empresa.com" />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="telefone">Telefone</Label>
              <Input id="telefone" placeholder="(61) 90000-0000" />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="categoria">Categoria</Label>
              <Select id="categoria" defaultValue="">
                <option value="" disabled>Selecione uma categoria</option>
                {categorias.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </Select>
            </div>
            <Button className="mt-2">Enviar solicitação</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
