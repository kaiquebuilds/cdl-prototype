import { Card, CardContent } from "@/components/ui/card"
import { SubPage } from "./SubPage"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"

export function FaleConosco() {
  return (
    <SubPage title="Fale Conosco">
      <Card>
        <CardContent className="flex flex-col gap-3 p-4 text-sm">
          <a
            href="https://wa.me/5561981512903"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Phone className="h-4 w-4 text-primary" /> (61) 98151-2903
          </a>
          <a
            href="mailto:cdlnovogama2025@gmail.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Mail className="h-4 w-4 text-primary" /> cdlnovogama2025@gmail.com.br
          </a>
          <p className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" /> Novo Gama - Goiás
          </p>
        </CardContent>
      </Card>

      <a
        href="https://wa.me/5561981512903"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-[#00B050] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#007A3D]"
      >
        <MessageCircle className="h-4 w-4" />
        Falar no WhatsApp
      </a>
    </SubPage>
  )
}
