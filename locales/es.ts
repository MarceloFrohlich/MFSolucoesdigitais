import type { Translations } from "./pt";

export const es: Translations = {
  nav: {
    services: "Servicios",
    how: "Cómo Funciona",
    why: "Por Qué Yo",
    portfolio: "Proyectos",
    faq: "Preguntas",
    contact: "Contacto",
    cta: "Solicitar Presupuesto",
  },
  hero: {
    badge: "Disponible para nuevos proyectos",
    titleLine1: "Tecnología que resuelve",
    titleLine2: "problemas reales",
    typewriter: [
      "Sistemas de gestión",
      "Sitios institucionales",
      "Aplicaciones para empresas",
      "Plataformas web",
      "Integración de APIs",
      "Soluciones a medida",
    ],
    subtitle:
      "Tu empresa recibe un sistema, sitio, aplicación o integración a medida, pensado para resolver un problema real — no solo para entregar código.",
    ctaPrimary: "Solicitar Presupuesto",
    ctaSecondary: "Ver Servicios",
    trust: "Comunicación directa, sin intermediarios — desde el diagnóstico hasta la entrega.",
    stats: [
      { value: "3+", label: "años de experiencia" },
      { value: "15+", label: "tecnologías en el día a día" },
      { value: "3", label: "idiomas de atención" },
      { value: "100%", label: "remoto y directo con quien desarrolla" },
    ],
  },
  services: {
    sectionLabel: "01. servicios",
    heading: "Lo que",
    headingAccent: "desarrollo",
    description:
      "Cada proyecto comienza con un problema de negocio, no con una lista de tecnologías. La solución se diseña en torno a lo que tu empresa realmente necesita.",
    items: [
      {
        icon: "layout-dashboard",
        title: "Sistemas Personalizados y de Gestión",
        description:
          "Sistemas a medida para controlar procesos internos, finanzas, inventario, clientes o cualquier flujo específico de tu negocio.",
      },
      {
        icon: "globe",
        title: "Sitios Institucionales y Profesionales",
        description:
          "Sitios rápidos, responsivos y con identidad visual propia para presentar tu empresa o servicio con credibilidad.",
      },
      {
        icon: "smartphone",
        title: "Aplicaciones para Empresas y Proyectos",
        description:
          "Aplicaciones web y móviles para atender clientes, equipos internos o dar soporte a un proyecto específico.",
      },
      {
        icon: "layers",
        title: "Plataformas y Sistemas Web",
        description:
          "Plataformas completas — portales, paneles, áreas de cliente — construidas para crecer junto con tu operación.",
      },
      {
        icon: "plug-zap",
        title: "Integración entre Sistemas y APIs",
        description:
          "Conecto sistemas que hoy no se comunican entre sí: ERPs, hojas de cálculo, plataformas de pago, CRMs y APIs de terceros.",
      },
      {
        icon: "puzzle",
        title: "Soluciones Digitales a Medida",
        description:
          "Cuando el problema no encaja en ninguna categoría anterior, diseño una solución específica para tu necesidad.",
      },
    ],
  },
  howItWorks: {
    sectionLabel: "02. cómo funciona",
    heading: "Del problema",
    headingAccent: "a la solución",
    description: "Un proceso simple y transparente, pensado para quienes no son del área técnica.",
    steps: [
      {
        title: "Diagnóstico",
        description:
          "Conversamos sobre el problema, el proceso actual y lo que esperas resolver. Sin jerga técnica.",
      },
      {
        title: "Propuesta",
        description:
          "Recibes un alcance claro, con plazo e inversión definidos antes de escribir cualquier línea de código.",
      },
      {
        title: "Desarrollo",
        description:
          "Construcción de la solución con actualizaciones periódicas, para que sigas el progreso real del proyecto.",
      },
      {
        title: "Entrega y Soporte",
        description: "Implementación, capacitación de uso cuando sea necesario, y soporte continuo tras la entrega.",
      },
    ],
  },
  whyUs: {
    sectionLabel: "03. por qué yo",
    heading: "No vendo",
    headingAccent: "programación",
    description: "Vendo solución de problemas. La tecnología es el medio, no el fin.",
    points: [
      {
        icon: "message-circle",
        title: "Contacto directo, sin intermediarios",
        description: "Hablas conmigo, la persona que desarrolla, no con un equipo de ventas o un gerente de cuentas.",
      },
      {
        icon: "target",
        title: "Foco en el problema de negocio",
        description: "El sistema se diseña en torno a lo que necesitas resolver, no a la tecnología de moda del momento.",
      },
      {
        icon: "ruler",
        title: "Soluciones a medida",
        description: "Nada de plantillas genéricas: el sistema se diseña para la realidad de tu operación, no para cualquier empresa.",
      },
      {
        icon: "shield-check",
        title: "Seguridad que protege tu negocio",
        description: "Tu sistema funciona con una stack actualizada y segura, sin vulnerabilidades que pongan en riesgo tus datos y los de tus clientes.",
      },
      {
        icon: "life-buoy",
        title: "No te quedas solo después",
        description: "El proyecto no termina en la entrega: acompaño ajustes, dudas y evolución del sistema después de que sale al aire.",
      },
    ],
  },
  portfolio: {
    sectionLabel: "04. proyectos",
    heading: "Capacidad",
    headingAccent: "técnica",
    description:
      "Una muestra de sistemas que ya he desarrollado — de APIs completas a aplicaciones móviles — como referencia de calidad y alcance.",
    note: "Proyectos reales y de portafolio, usados aquí como referencia de calidad y alcance.",
    featuredWebLabel: "Panel Web",
    featuredAppLabel: "App Móvil",
    items: [
      {
        name: "IVORAH — Sistema de Gestión para Iglesias",
        tag: "Proyecto destacado",
        description:
          "Plataforma completa de gestión eclesiástica: panel web para líderes y administradores gestionar miembros, ministerios, eventos y finanzas, con una aplicación móvil dedicada para que la congregación siga el día a día de la iglesia.",
        tech: ["Panel Web para Gestores", "App para Feligreses", "Gestión de Miembros", "Multi-iglesia"],
        featured: true,
      },
      {
        name: "Sistema de Gestión Financiera (Web + Móvil + API)",
        tag: "Sistema completo",
        description:
          "Solución completa para control financiero: API propia con autenticación e informes inteligentes, panel web con gráficos y app móvil para uso diario.",
        tech: ["NestJS", "Next.js", "React Native", "Prisma", "JWT"],
      },
      {
        name: "Backend con Autenticación y Pruebas Automatizadas",
        tag: "API / Backend",
        description:
          "API REST con registro e inicio de sesión seguro, recuperación de contraseña por correo, subida de archivos y cobertura de pruebas automatizadas.",
        tech: ["NestJS", "TypeORM", "MySQL", "Jest", "JWT"],
      },
      {
        name: "Panel Administrativo con Base de Datos Relacional",
        tag: "Plataforma web",
        description:
          "Panel administrativo escalable con autenticación, integrado a una base de datos relacional mediante un ORM moderno.",
        tech: ["NestJS", "Prisma", "MySQL"],
      },
      {
        name: "Sitio Institucional Responsivo",
        tag: "Sitio institucional",
        description:
          "Landing page responsiva con cambio de tema claro/oscuro, construida para presentar un servicio con buen rendimiento.",
        tech: ["React", "JavaScript", "CSS"],
      },
    ],
  },
  faq: {
    sectionLabel: "05. preguntas frecuentes",
    heading: "Preguntas",
    headingAccent: "frecuentes",
    items: [
      {
        q: "¿Cuánto cuesta un proyecto?",
        a: "Depende del alcance. Sistemas simples y sitios institucionales cuestan menos que plataformas complejas con múltiples integraciones. Siempre recibes una propuesta cerrada antes de comenzar.",
      },
      {
        q: "¿Cuánto tiempo toma el desarrollo?",
        a: "Los sitios institucionales suelen tomar pocas semanas. Sistemas y plataformas más complejas varían según el alcance — el plazo se define junto con la propuesta.",
      },
      {
        q: "¿Necesito entender de tecnología para contratar?",
        a: "No. La conversación inicial es sobre tu proceso y el problema que quieres resolver — traducir eso en una solución técnica es mi trabajo.",
      },
      {
        q: "¿Ofrecen soporte después de la entrega del proyecto?",
        a: "Sí. Acompaño ajustes, dudas de uso y evolución del sistema después de la entrega, ya sea de forma puntual o en un plan de soporte continuo.",
      },
      {
        q: "¿Atienden empresas de otros estados o países?",
        a: "Sí, todo el trabajo se realiza de forma remota, con reuniones en línea y comunicación directa durante todo el proyecto.",
      },
      {
        q: "¿Qué tecnologías utilizan?",
        a: "Trabajo principalmente con React, Next.js, NestJS, Node.js, TypeScript, PHP/Laravel y bases de datos como MySQL, MongoDB y Oracle — siempre eligiendo la stack más adecuada para el proyecto.",
      },
    ],
  },
  contact: {
    sectionLabel: "06. contacto",
    heading: "Hablemos sobre",
    headingAccent: "tu proyecto",
    description: "Cuéntame un poco sobre el problema que quieres resolver. Respondo personalmente cada mensaje.",
    form: {
      name: "Nombre",
      email: "Correo electrónico",
      phone: "Teléfono / WhatsApp",
      service: "Tipo de servicio",
      servicePlaceholder: "Selecciona una opción",
      otherOption: "Otro servicio",
      message: "Mensaje",
      messagePlaceholder: "Describe brevemente el problema o la idea del proyecto...",
      submit: "Enviar Mensaje",
      sending: "Enviando...",
      success: "¡Mensaje enviado! Te responderé pronto.",
      error: "No se pudo enviar ahora. Intenta de nuevo o escribe directo por WhatsApp/correo.",
      notConfigured: "El envío automático aún no está configurado. Escribe por WhatsApp o correo.",
    },
    direct: {
      whatsapp: "WhatsApp",
      whatsappNotConfigured: "próximamente",
      email: "Correo",
      response: "Normalmente respondo en un plazo de 24 horas.",
    },
  },
  footer: {
    tagline: "Soluciones digitales a medida para empresas y profesionales.",
    rights: "Todos los derechos reservados.",
  },
};
