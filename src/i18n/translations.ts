export type Lang = "pt" | "en";

export const translations = {
  pt: {
    "nav.assets": "Assets",
    "nav.portfolio": "Portfólio",
    "nav.about": "Sobre",
    "nav.contact": "Contato",

    "hero.title": "TERRA À VISTA!",
    "hero.subtitle":
      "Studio de arte 3D e assets para Unreal Engine. Ambientes, props e ferramentas prontos para o seu projeto.",
    "hero.ctaAssets": "Ver assets",
    "hero.ctaPortfolio": "Ver portfólio",
    "hero.scroll": "Role para navegar",

    "assets.eyebrow": "À venda na Fab",
    "assets.title": "Assets",
    "assets.description":
      "Pacotes desenvolvidos pelo studio e distribuídos pela Fab da Unreal. Clique para abrir a página do produto.",
    "assets.cta": "Ver na Fab",
    "assets.all": "Ver todos na Fab",

    "portfolio.eyebrow": "Trabalhos",
    "portfolio.title": "Portfólio",
    "portfolio.description":
      "Projetos de arte 3D, ambientes e cinematics em tempo real produzidos pelo Quebramar.",
    "portfolio.close": "Fechar",

    "about.eyebrow": "O studio",
    "about.title": "Sobre o Quebramar",
    "about.p1":
      "O Quebramar é um studio criativo dedicado a arte 3D e desenvolvimento de conteúdo para Unreal Engine. Nascemos do encontro entre o mar e a tecnologia: cada projeto começa com pesquisa visual e termina em assets otimizados, prontos para produção.",
    "about.p2":
      "Trabalhamos com ambientes, props, personagens estilizados e ferramentas de blueprint — sempre com foco em performance, organização de arquivos e documentação clara.",
    "about.stat1": "Assets publicados",
    "about.stat2": "Projetos entregues",
    "about.stat3": "Anos de mar",

    "contact.eyebrow": "Vamos conversar",
    "contact.title": "Contato",
    "contact.description":
      "Projetos sob medida, parcerias ou dúvidas sobre os assets? Mande uma mensagem.",
    "contact.email": "Enviar e-mail",

    "footer.rights": "Todos os direitos reservados.",
    "footer.tagline": "Arte 3D e assets para Unreal Engine.",
  },
  en: {
    "nav.assets": "Assets",
    "nav.portfolio": "Portfolio",
    "nav.about": "About",
    "nav.contact": "Contact",

    "hero.title": "LAND AHOY!",
    "hero.subtitle":
      "3D art studio and Unreal Engine assets. Environments, props and tools ready for your project.",
    "hero.ctaAssets": "Browse assets",
    "hero.ctaPortfolio": "See portfolio",
    "hero.scroll": "Scroll to explore",

    "assets.eyebrow": "Available on Fab",
    "assets.title": "Assets",
    "assets.description":
      "Packs built by the studio and distributed through Unreal's Fab. Click to open the product page.",
    "assets.cta": "View on Fab",
    "assets.all": "See all on Fab",

    "portfolio.eyebrow": "Selected work",
    "portfolio.title": "Portfolio",
    "portfolio.description":
      "3D art, environments and real-time cinematics produced by Quebramar.",
    "portfolio.close": "Close",

    "about.eyebrow": "The studio",
    "about.title": "About Quebramar",
    "about.p1":
      "Quebramar is a creative studio dedicated to 3D art and content development for Unreal Engine. Born where the sea meets technology: every project starts with visual research and ends in optimized, production-ready assets.",
    "about.p2":
      "We craft environments, props, stylized characters and blueprint tools — always focused on performance, clean file organization and clear documentation.",
    "about.stat1": "Published assets",
    "about.stat2": "Delivered projects",
    "about.stat3": "Years at sea",

    "contact.eyebrow": "Say hello",
    "contact.title": "Contact",
    "contact.description":
      "Custom projects, partnerships or questions about the assets? Drop us a message.",
    "contact.email": "Send an email",

    "footer.rights": "All rights reserved.",
    "footer.tagline": "3D art and Unreal Engine assets.",
  },
} as const;

export type TranslationKey = keyof (typeof translations)["pt"];
