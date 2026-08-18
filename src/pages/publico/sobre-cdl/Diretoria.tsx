import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { SubPage } from "./SubPage"

const membros = [
  { nome: "Carlos Eduardo Silva", cargo: "Presidente" },
  { nome: "Marina Souza Ribeiro", cargo: "Vice-Presidente" },
  { nome: "José Antônio Ferreira", cargo: "Diretor Financeiro" },
  { nome: "Ana Paula Martins", cargo: "Diretora Administrativa" },
  { nome: "Roberto Carvalho Lima", cargo: "Conselho Fiscal" },
]

export function Diretoria() {
  return (
    <SubPage title="Diretoria e Conselho">
      <p className="mb-4 text-sm text-muted-foreground">
        Conheça os empresários que compõem a diretoria e o conselho da CDL Novo Gama, eleitos para representar os
        associados e conduzir as ações da entidade.
      </p>
      <div className="flex flex-col gap-2">
        {membros.map((m) => {
          const iniciais = m.nome.split(" ").slice(0, 2).map((w) => w[0]).join("")
          return (
            <Card key={m.nome}>
              <CardContent className="flex items-center gap-3 p-3">
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-xs font-bold text-primary">{iniciais}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-semibold leading-tight">{m.nome}</p>
                  <p className="text-xs text-muted-foreground">{m.cargo}</p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </SubPage>
  )
}
