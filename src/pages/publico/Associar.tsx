import { MessageCircle } from "lucide-react"
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
        <Card className="border-[#00B050]/20 bg-[#00B050]/5">
          <CardContent className="flex flex-col gap-3 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#00B050] px-1">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-semibold">Fale com a CDL</p>
                <p className="text-xs text-muted-foreground">
                  Tire suas dúvidas ou associe-se pelo WhatsApp em poucos minutos.
                </p>
              </div>
            </div>
            <a
              href="https://wa.me/5561981512903"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-[#00B050] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#007A3D]"
            >
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </CardContent>
        </Card>
        <p className="mt-3 text-sm text-muted-foreground">
          Ou preencha o formulário abaixo e nossa equipe entrará em contato.
        </p>
        <Card className="mt-1">
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
