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

export interface Beneficio {
  id: string
  nome: string
  categoria: string
  desconto: string
  descricao: string
  comoComprovar: string
  telefone?: string
  link?: string
  linkLabel?: string
  cupom?: string
}

export const beneficios: Beneficio[] = [
  {
    id: "spc-brasil",
    nome: "SPC Brasil",
    categoria: "Serviços Empresariais",
    desconto: "Acesso ao sistema de consulta",
    descricao: "Acesso ao sistema SPC Brasil para consulta de crédito, inadimplência e situação cadastral de clientes. Mais segurança e informações para o seu negócio tomar decisões com confiança.",
    comoComprovar: "Apresente a carteirinha digital do associado na sede da CDL ou solicite seu acesso pelo WhatsApp (61) 98151-2903.",
    telefone: "(11) 3549-6800",
    link: "https://spcbrasil.org.br",
    linkLabel: "Site oficial",
  },
  {
    id: "sebrae",
    nome: "SEBRAE",
    categoria: "Capacitação",
    desconto: "Cursos gratuitos e palestras",
    descricao: "Cursos e palestras em parceria com o SEBRAE para você e sua equipe. Capacitação em gestão de negócios, vendas, marketing digital, finanças e empreendedorismo. Vagas garantidas para associados CDL.",
    comoComprovar: "Matrícula gratuita mediante apresentação da carteirinha digital do associado na sede da CDL ou diretamente no SEBRAE.",
    telefone: "0800 570 0800",
    link: "https://sebrae.com.br",
    linkLabel: "Site oficial",
  },
  {
    id: "iesb",
    nome: "IESB Centro Universitário",
    categoria: "Educação",
    desconto: "Até 20% de desconto nas mensalidades",
    descricao: "Desconto exclusivo para associados CDL e seus dependentes em cursos de graduação e pós-graduação no IESB Centro Universitário. Invista na sua educação com valores acessíveis.",
    comoComprovar: "Apresente a carteirinha digital do associado na secretaria do IESB no ato da matrícula ou renovação.",
    telefone: "(61) 3340-3747",
    link: "https://instagram.com/iesb",
    linkLabel: "Instagram",
  },
  {
    id: "colegio-plenitude",
    nome: "Colégio Evangélico Plenitude",
    categoria: "Educação",
    desconto: "Até 20% de desconto nas mensalidades",
    descricao: "Desconto em mensalidades para associados CDL e dependentes, da educação infantil ao ensino médio. Educação de qualidade com valores cristãos e proposta pedagógica diferenciada.",
    comoComprovar: "Apresente a carteirinha digital do associado na secretaria do colégio no ato da matrícula.",
    telefone: "(61) 3628-5532",
    link: "https://instagram.com/colegioevangelicoplenitude",
    linkLabel: "Instagram",
  },
  {
    id: "escola-artedosaber",
    nome: "Escola Evangélica Arte do Saber",
    categoria: "Educação",
    desconto: "Até 20% de desconto nas mensalidades",
    descricao: "Desconto em mensalidades para associados CDL e dependentes. Educação infantil e fundamental com proposta pedagógica focada no desenvolvimento integral do aluno.",
    comoComprovar: "Apresente a carteirinha digital do associado na secretaria da escola no ato da matrícula.",
    telefone: "(61) 98187-9217",
    link: "https://instagram.com/escolaartedosaber",
    linkLabel: "Instagram",
  },
  {
    id: "sorria-saude",
    nome: "Sorria Saúde",
    categoria: "Saúde",
    desconto: "Até 40% de desconto",
    descricao: "Convênio com a clínica Sorria Saúde oferecendo até 40% de desconto em consultas odontológicas, limpeza, extração e procedimentos estéticos. Cuide da sua saúde bucal com preços acessíveis.",
    comoComprovar: "Apresente a carteirinha digital do associado na recepção da clínica antes do atendimento.",
    telefone: "(61) 4042-9877",
    link: "https://instagram.com/sorriasaude",
    linkLabel: "Instagram",
  },
  {
    id: "oticapopular",
    nome: "Ótica Popular",
    categoria: "Saúde",
    desconto: "Descontos exclusivos em óculos",
    descricao: "Descontos exclusivos em óculos de grau e de sol, armações e lentes. Cuide da sua visão com qualidade e preços acessíveis para toda a família.",
    comoComprovar: "Apresente a carteirinha digital do associado na loja no momento da compra.",
    telefone: "(61) 3628-1227",
    link: "https://instagram.com/oticapopular",
    linkLabel: "Instagram",
  },
  {
    id: "corpo-acao",
    nome: "Corpo e Ação",
    categoria: "Saúde e Bem-estar",
    desconto: "Condições especiais em mensalidades",
    descricao: "Descontos exclusivos em mensalidades e planos da academia Corpo e Ação. Cuide da sua saúde e bem-estar com condições especiais para associados CDL e dependentes.",
    comoComprovar: "Apresente a carteirinha digital do associado na recepção da academia no momento da matrícula.",
    telefone: "(61) 98532-6344",
    link: "https://instagram.com/corpoeacao",
    linkLabel: "Instagram",
  },
  {
    id: "certificadora-digital",
    nome: "Certificação Digital",
    categoria: "Serviços Empresariais",
    desconto: "Melhor preço da região",
    descricao: "Parceria com certificadora digital para emissão de certificados digitais (e-CPF, e-CNPJ, NF-e) com o melhor preço da região para você e sua empresa. Documentação digital com segurança e agilidade.",
    comoComprovar: "Entre em contato pelo WhatsApp da CDL (61) 98151-2903 para indicação da certificadora parceira e solicitação do desconto.",
    telefone: "(61) 98151-2903",
    link: "https://wa.me/5561981512903",
    linkLabel: "WhatsApp CDL",
  },
  {
    id: "aguas-correntes",
    nome: "Águas Correntes Park",
    categoria: "Lazer e Família",
    desconto: "5 convites gratuitos",
    descricao: "Parceria com o Águas Correntes Park garantindo 5 convites gratuitos para você e sua família aproveitarem o parque aquático, piscinas, toboáguas e áreas de lazer. Diversão garantida para todos.",
    comoComprovar: "Retire os convites na sede da CDL mediante apresentação da carteirinha digital do associado.",
    telefone: "(61) 3030-4300",
    link: "https://instagram.com/aguascorrentespark",
    linkLabel: "Instagram",
  },
]

export const parcerias = beneficios

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
