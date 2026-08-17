export type Profile = "publico" | "associado" | "admin"

export interface Associado {
  id: string
  nome: string
  categoria: string
  endereco: string
  telefone: string
  descricao: string
  status: "Em dia" | "Pendente" | "Atrasado"
  ultimoPagamento: string
}

export const associados: Associado[] = [
  {
    id: "carvalho-borges",
    nome: "Carvalho Borges Advogados",
    categoria: "Serviços Jurídicos",
    endereco: "Av. Brasil, 452 — Centro, Novo Gama-GO",
    telefone: "(61) 3321-4455",
    descricao: "Escritório de advocacia especializado em direito empresarial e tributário.",
    status: "Em dia",
    ultimoPagamento: "05/08/2026",
  },
  {
    id: "kube-creative",
    nome: "Kube Creative Work",
    categoria: "Sites e Sistemas",
    endereco: "Rua das Flores, 128 — Setor Pedro Ludovico, Novo Gama-GO",
    telefone: "(61) 99876-5432",
    descricao: "Agência criativa focada em branding, design gráfico e marketing digital.",
    status: "Em dia",
    ultimoPagamento: "10/08/2026",
  },
  {
    id: "controltech",
    nome: "ControlTech",
    categoria: "Tecnologia",
    endereco: "Rua 14, 87 — Parque Estrela D'Alva, Novo Gama-GO",
    telefone: "(61) 99654-1234",
    descricao: "Soluções em tecnologia, suporte técnico e infraestrutura de TI para empresas.",
    status: "Pendente",
    ultimoPagamento: "22/06/2026",
  },
  {
    id: "farmacia-vidamais",
    nome: "Farmácia Vida Mais",
    categoria: "Farmácia",
    endereco: "Av. Goiás, 210 — Centro, Novo Gama-GO",
    telefone: "(61) 3321-8890",
    descricao: "Farmácia de manipulação e medicamentos genéricos com atendimento 24h.",
    status: "Em dia",
    ultimoPagamento: "01/08/2026",
  },
  {
    id: "mercearia-boaeconomia",
    nome: "Mercearia Boa Economia",
    categoria: "Mercearia",
    endereco: "Rua 5, 340 — Jardim Céu Azul, Novo Gama-GO",
    telefone: "(61) 3322-1187",
    descricao: "Mercearia de bairro com produtos essenciais e preços populares.",
    status: "Atrasado",
    ultimoPagamento: "14/04/2026",
  },
  {
    id: "modamix-boutique",
    nome: "ModaMix Boutique",
    categoria: "Loja de Roupas",
    endereco: "Av. Brasil, 90 — Centro, Novo Gama-GO",
    telefone: "(61) 99711-2233",
    descricao: "Moda feminina e masculina com coleções atualizadas a cada estação.",
    status: "Em dia",
    ultimoPagamento: "12/08/2026",
  },
  {
    id: "padaria-panpronto",
    nome: "Padaria Pão Pronto",
    categoria: "Padaria",
    endereco: "Rua 22, 55 — Setor Sul, Novo Gama-GO",
    telefone: "(61) 3321-5567",
    descricao: "Pães, salgados e doces artesanais fresquinhos todos os dias.",
    status: "Pendente",
    ultimoPagamento: "30/06/2026",
  },
]

export interface Noticia {
  id: string
  titulo: string
  data: string
  resumo: string
  conteudo: string
  autor?: string
  visualizacoes?: number
  categoria?: string
}

export const noticias: Noticia[] = [
  {
    id: "n1",
    titulo: "CDL Novo Gama lança nova carteira digital para associados",
    data: "12/08/2026",
    resumo: "Novidade traz mais praticidade e agilidade no acesso aos benefícios da associação.",
    conteudo: "A CDL Novo Gama anuncia o lançamento da carteira digital de associados, permitindo acesso rápido aos descontos e benefícios diretamente pelo celular, sem necessidade de carteirinha física.",
    autor: "Comunicação CDL",
    visualizacoes: 432,
    categoria: "Institucional",
  },
  {
    id: "n2",
    titulo: "Comércio local espera crescimento nas vendas de fim de ano",
    data: "05/08/2026",
    resumo: "Levantamento da CDL aponta otimismo entre lojistas de Novo Gama para o próximo trimestre.",
    conteudo: "Segundo pesquisa realizada pela CDL Novo Gama com associados, mais de 70% dos lojistas esperam aumento nas vendas para o fim do ano, impulsionados por ações de marketing coletivo.",
    autor: "Comunicação CDL",
    visualizacoes: 298,
    categoria: "Economia",
  },
  {
    id: "n3",
    titulo: "CDL promove capacitação gratuita sobre vendas digitais",
    data: "28/07/2026",
    resumo: "Curso é aberto a associados e busca ajudar pequenos comerciantes a vender pela internet.",
    conteudo: "O curso 'Vendas Digitais para Pequenos Negócios' será realizado na sede da CDL Novo Gama, com vagas limitadas para associados interessados em ampliar suas vendas online.",
    autor: "Diretoria CDL",
    visualizacoes: 187,
    categoria: "Capacitação",
  },
  {
    id: "n4",
    titulo: "Novo Gama recebe feira de negócios em setembro",
    data: "15/07/2026",
    resumo: "Evento reunirá empreendedores locais e visitantes da região metropolitana.",
    conteudo: "A Feira de Negócios de Novo Gama, organizada em parceria com a CDL, contará com estandes de associados, palestras e rodadas de networking entre empresários.",
    autor: "Comunicação CDL",
    visualizacoes: 356,
    categoria: "Eventos",
  },
]

export interface Evento {
  id: string
  titulo: string
  data: string
  local: string
  descricao: string
  inscritos?: number
}

export const eventos: Evento[] = [
  {
    id: "e1",
    titulo: "Feira de Negócios de Novo Gama",
    data: "20/09/2026",
    local: "Praça Central, Novo Gama-GO",
    descricao: "Feira com estandes de associados, food trucks e apresentações culturais.",
    inscritos: 84,
  },
  {
    id: "e2",
    titulo: "Workshop: Vendas Digitais para Pequenos Negócios",
    data: "02/09/2026",
    local: "Sede da CDL Novo Gama",
    descricao: "Capacitação gratuita sobre redes sociais e marketplaces para associados.",
    inscritos: 37,
  },
  {
    id: "e3",
    titulo: "Encontro de Networking CDL",
    data: "28/08/2026",
    local: "Salão de Eventos Bela Vista, Novo Gama-GO",
    descricao: "Confraternização entre associados com rodada de negócios e coquetel.",
    inscritos: 52,
  },
  {
    id: "e4",
    titulo: "Assembleia Geral Ordinária",
    data: "10/09/2026",
    local: "Sede da CDL Novo Gama",
    descricao: "Prestação de contas e apresentação do planejamento para o próximo semestre.",
    inscritos: 15,
  },
]

export interface Parceria {
  id: string
  parceiro: string
  desconto: string
  categoria: string
  descricao: string
  cupom?: string
  comoComprovar: string
}

export const parcerias: Parceria[] = [
  {
    id: "p1",
    parceiro: "Farmácia Vida Mais",
    desconto: "15% em medicamentos",
    categoria: "Saúde",
    descricao: "Desconto exclusivo para associados em toda a linha de genéricos.",
    cupom: "CDL10",
    comoComprovar: "Apresente a carteirinha digital do associado no caixa antes de finalizar a compra.",
  },
  {
    id: "p2",
    parceiro: "Auto Posto Novo Gama",
    desconto: "R$ 0,10/litro de desconto",
    categoria: "Automotivo",
    descricao: "Abastecimento com desconto mediante apresentação da carteira digital.",
    comoComprovar: "Apresente a carteirinha digital do associado ao frentista antes do abastecimento.",
  },
  {
    id: "p3",
    parceiro: "Academia Corpo Ativo",
    desconto: "20% na mensalidade",
    categoria: "Saúde e Bem-estar",
    descricao: "Condição especial para associados e dependentes diretos.",
    cupom: "CDL2026",
    comoComprovar: "Apresente a carteirinha digital do associado na recepção da academia.",
  },
  {
    id: "p4",
    parceiro: "Kube Creative Work",
    desconto: "10% em serviços de design",
    categoria: "Sites e Sistemas",
    descricao: "Desconto em pacotes de branding e identidade visual para lojistas.",
    cupom: "CDLDESIGN10",
    comoComprovar: "Use o código de cupom no orçamento ou apresente a carteirinha digital do associado.",
  },
]

export interface Emprego {
  id: string
  titulo: string
  empresa: string
  descricao: string
}

export const empregos: Emprego[] = [
  {
    id: "j1",
    titulo: "Atendente de Loja",
    empresa: "ModaMix Boutique",
    descricao: "Vaga para atendimento ao cliente e organização de vitrines. Experiência não obrigatória.",
  },
  {
    id: "j2",
    titulo: "Auxiliar Administrativo",
    empresa: "Carvalho Borges Advogados",
    descricao: "Rotinas administrativas, atendimento telefônico e organização de processos.",
  },
  {
    id: "j3",
    titulo: "Técnico de Suporte de TI",
    empresa: "ControlTech",
    descricao: "Suporte técnico presencial e remoto para clientes empresariais da região.",
  },
]

export const associadoLogado: Associado = associados[0]
