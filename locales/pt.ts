export type Translations = {
  nav: {
    services: string;
    how: string;
    why: string;
    portfolio: string;
    faq: string;
    contact: string;
    cta: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    typewriter: string[];
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trust: string;
    stats: { value: string; label: string }[];
  };
  services: {
    sectionLabel: string;
    heading: string;
    headingAccent: string;
    description: string;
    items: { icon: string; title: string; description: string }[];
  };
  howItWorks: {
    sectionLabel: string;
    heading: string;
    headingAccent: string;
    description: string;
    steps: { title: string; description: string }[];
  };
  whyUs: {
    sectionLabel: string;
    heading: string;
    headingAccent: string;
    description: string;
    points: { icon: string; title: string; description: string }[];
  };
  portfolio: {
    sectionLabel: string;
    heading: string;
    headingAccent: string;
    description: string;
    note: string;
    featuredWebLabel: string;
    featuredAppLabel: string;
    items: { name: string; tag: string; description: string; tech: string[]; featured?: boolean }[];
  };
  faq: {
    sectionLabel: string;
    heading: string;
    headingAccent: string;
    items: { q: string; a: string }[];
  };
  contact: {
    sectionLabel: string;
    heading: string;
    headingAccent: string;
    description: string;
    form: {
      name: string;
      email: string;
      phone: string;
      service: string;
      servicePlaceholder: string;
      otherOption: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
      success: string;
      error: string;
      notConfigured: string;
    };
    direct: {
      whatsapp: string;
      whatsappNotConfigured: string;
      email: string;
      response: string;
    };
  };
  footer: {
    tagline: string;
    rights: string;
  };
};

export const pt: Translations = {
  nav: {
    services: "Serviços",
    how: "Como Funciona",
    why: "Por Que Eu",
    portfolio: "Projetos",
    faq: "Perguntas",
    contact: "Contato",
    cta: "Solicitar Orçamento",
  },
  hero: {
    badge: "Disponível para novos projetos",
    titleLine1: "Tecnologia que resolve",
    titleLine2: "problemas reais",
    typewriter: [
      "Sistemas de gestão",
      "Sites institucionais",
      "Aplicativos para empresas",
      "Plataformas web",
      "Integração de APIs",
      "Soluções sob medida",
    ],
    subtitle:
      "Desenvolvo sistemas, sites, aplicativos e integrações sob medida para empresas e profissionais que precisam de mais do que código — precisam de uma solução que resolve um problema de negócio.",
    ctaPrimary: "Solicitar Orçamento",
    ctaSecondary: "Ver Serviços",
    trust: "Atendimento direto, sem intermediários — do diagnóstico à entrega.",
    stats: [
      { value: "3+", label: "anos de experiência" },
      { value: "15+", label: "tecnologias no dia a dia" },
      { value: "3", label: "idiomas de atendimento" },
      { value: "100%", label: "remoto e direto com quem desenvolve" },
    ],
  },
  services: {
    sectionLabel: "01. serviços",
    heading: "O que eu",
    headingAccent: "desenvolvo",
    description:
      "Cada projeto começa com um problema de negócio, não com uma lista de tecnologias. A solução é desenhada em torno do que a sua empresa precisa resolver.",
    items: [
      {
        icon: "layout-dashboard",
        title: "Sistemas Personalizados e de Gestão",
        description:
          "Sistemas sob medida para controlar processos internos, financeiro, estoque, clientes ou qualquer fluxo específico do seu negócio.",
      },
      {
        icon: "globe",
        title: "Sites Institucionais e Profissionais",
        description:
          "Sites rápidos, responsivos e com identidade visual própria para apresentar sua empresa ou serviço com credibilidade.",
      },
      {
        icon: "smartphone",
        title: "Aplicativos para Empresas e Projetos",
        description:
          "Aplicativos web e mobile para atender clientes, equipes internas ou dar suporte a um projeto específico.",
      },
      {
        icon: "layers",
        title: "Plataformas e Sistemas Web",
        description:
          "Plataformas completas — portais, dashboards, áreas de cliente — construídas para crescer junto com a operação.",
      },
      {
        icon: "plug-zap",
        title: "Integração entre Sistemas e APIs",
        description:
          "Conecto sistemas que hoje não conversam entre si: ERPs, planilhas, plataformas de pagamento, CRMs e APIs de terceiros.",
      },
      {
        icon: "puzzle",
        title: "Soluções Digitais Sob Medida",
        description:
          "Quando o problema não se encaixa em nenhuma categoria acima, desenho uma solução específica para a sua necessidade.",
      },
    ],
  },
  howItWorks: {
    sectionLabel: "02. como funciona",
    heading: "Do problema",
    headingAccent: "à solução",
    description: "Um processo simples e transparente, pensado para quem não é da área técnica.",
    steps: [
      {
        title: "Diagnóstico",
        description:
          "Conversamos sobre o problema, o processo atual e o que você espera resolver. Sem jargão técnico.",
      },
      {
        title: "Proposta",
        description:
          "Você recebe um escopo claro, com prazo e investimento definidos antes de qualquer linha de código.",
      },
      {
        title: "Desenvolvimento",
        description:
          "Construção da solução com atualizações periódicas, para você acompanhar o progresso real do projeto.",
      },
      {
        title: "Entrega e Suporte",
        description:
          "Implantação, treinamento de uso quando necessário, e suporte contínuo após a entrega.",
      },
    ],
  },
  whyUs: {
    sectionLabel: "03. por que eu",
    heading: "Não vendo",
    headingAccent: "programação",
    description: "Vendo solução de problema. A tecnologia é o meio, não o fim.",
    points: [
      {
        icon: "message-circle",
        title: "Contato direto, sem intermediários",
        description: "Você fala comigo, a pessoa que desenvolve — não com um time de vendas ou um gerente de contas.",
      },
      {
        icon: "target",
        title: "Foco no problema de negócio",
        description: "Antes de propor uma tecnologia, entendo o processo que você quer melhorar ou automatizar.",
      },
      {
        icon: "ruler",
        title: "Soluções sob medida",
        description: "Nada de templates genéricos: cada sistema é desenhado para a realidade da sua operação.",
      },
      {
        icon: "shield-check",
        title: "Tecnologia moderna e segura",
        description: "Stack atualizada, boas práticas de segurança e código pensado para durar e escalar.",
      },
      {
        icon: "life-buoy",
        title: "Suporte após a entrega",
        description: "O projeto não termina na entrega. Acompanho ajustes, dúvidas e evolução do sistema.",
      },
    ],
  },
  portfolio: {
    sectionLabel: "04. projetos",
    heading: "Capacidade",
    headingAccent: "técnica",
    description:
      "Uma amostra de sistemas que já desenvolvi — de APIs completas a aplicativos mobile — como referência de qualidade e escopo.",
    note: "Projetos reais e de portfólio, usados aqui como referência de qualidade e escopo.",
    featuredWebLabel: "Painel Web",
    featuredAppLabel: "App Mobile",
    items: [
      {
        name: "IVORAH — Sistema de Gestão para Igrejas",
        tag: "Projeto em destaque",
        description:
          "Plataforma completa de gestão eclesiástica: painel web para líderes e gestores administrarem membros, ministérios, eventos e finanças, com aplicativo mobile dedicado para a membresia acompanhar a igreja no dia a dia.",
        tech: ["Painel Web para Gestores", "App para Membresia", "Gestão de Membros", "Multi-igreja"],
        featured: true,
      },
      {
        name: "Sistema de Gestão Financeira (Web + Mobile + API)",
        tag: "Sistema completo",
        description:
          "Solução completa para controle financeiro: API própria com autenticação e relatórios inteligentes, painel web com gráficos e app mobile para uso no dia a dia.",
        tech: ["NestJS", "Next.js", "React Native", "Prisma", "JWT"],
      },
      {
        name: "Backend com Autenticação e Testes Automatizados",
        tag: "API / Backend",
        description:
          "API REST com cadastro e login seguro, recuperação de senha por e-mail, upload de arquivos e cobertura de testes automatizados.",
        tech: ["NestJS", "TypeORM", "MySQL", "Jest", "JWT"],
      },
      {
        name: "Painel Administrativo com Banco de Dados Relacional",
        tag: "Plataforma web",
        description:
          "Painel administrativo escalável com autenticação, integrado a banco de dados relacional via ORM moderno.",
        tech: ["NestJS", "Prisma", "MySQL"],
      },
      {
        name: "Site Institucional Responsivo",
        tag: "Site institucional",
        description:
          "Landing page responsiva com alternância de tema claro/escuro, construída para apresentar um serviço com boa performance.",
        tech: ["React", "JavaScript", "CSS"],
      },
    ],
  },
  faq: {
    sectionLabel: "05. perguntas frequentes",
    heading: "Perguntas",
    headingAccent: "frequentes",
    items: [
      {
        q: "Quanto custa um projeto?",
        a: "Depende do escopo. Sistemas simples e sites institucionais custam menos do que plataformas complexas com múltiplas integrações. Você sempre recebe uma proposta fechada antes de começar.",
      },
      {
        q: "Quanto tempo leva para ficar pronto?",
        a: "Sites institucionais costumam levar poucas semanas. Sistemas e plataformas mais complexas variam conforme o escopo — o prazo é definido junto com a proposta.",
      },
      {
        q: "Preciso entender de tecnologia para contratar?",
        a: "Não. A conversa inicial é sobre o seu processo e o problema que você quer resolver — a parte técnica fico responsável por traduzir isso em solução.",
      },
      {
        q: "Vocês dão suporte depois que o projeto é entregue?",
        a: "Sim. Acompanho ajustes, dúvidas de uso e evolução do sistema após a entrega, seja de forma pontual ou em um plano de suporte contínuo.",
      },
      {
        q: "Atendem empresas de outros estados ou países?",
        a: "Sim, todo o trabalho é feito remotamente, com reuniões online e comunicação direta durante todo o projeto.",
      },
      {
        q: "Quais tecnologias vocês utilizam?",
        a: "Trabalho principalmente com React, Next.js, NestJS, Node.js, TypeScript, PHP/Laravel e bancos de dados como MySQL, MongoDB e Oracle — sempre escolhendo a stack mais adequada ao projeto.",
      },
    ],
  },
  contact: {
    sectionLabel: "06. contato",
    heading: "Vamos conversar sobre",
    headingAccent: "seu projeto",
    description:
      "Conte um pouco sobre o problema que você quer resolver. Respondo pessoalmente todas as mensagens.",
    form: {
      name: "Nome",
      email: "E-mail",
      phone: "Telefone / WhatsApp",
      service: "Tipo de serviço",
      servicePlaceholder: "Selecione uma opção",
      otherOption: "Outro serviço",
      message: "Mensagem",
      messagePlaceholder: "Descreva brevemente o problema ou a ideia do projeto...",
      submit: "Enviar Mensagem",
      sending: "Enviando...",
      success: "Mensagem enviada! Respondo em breve.",
      error: "Não foi possível enviar agora. Tente novamente ou fale direto por WhatsApp/e-mail.",
      notConfigured: "Envio automático ainda não configurado. Fale direto por WhatsApp ou e-mail.",
    },
    direct: {
      whatsapp: "WhatsApp",
      whatsappNotConfigured: "em breve",
      email: "E-mail",
      response: "Normalmente respondo em até 24 horas.",
    },
  },
  footer: {
    tagline: "Soluções digitais sob medida para empresas e profissionais.",
    rights: "Todos os direitos reservados.",
  },
};
