export type Locale = "pt" | "es" | "en" | "ja"

export const defaultLocale: Locale = "pt"

export const locales: Locale[] = ["pt", "es", "en", "ja"]

export const localeNames: Record<Locale, string> = {
  pt: "Português",
  es: "Español",
  en: "English",
  ja: "日本語",
}

export const translations = {
  pt: {
    nav: {
      home: "Início",
      about: "Quem Somos",
      projects: "Projetos",
      donate: "Doe Agora",
      transparency: "Transparência",
      blog: "Notícias",
      contact: "Contato",
    },
    hero: {
      title: "Transformando Vidas com Solidariedade",
      subtitle: "Juntos podemos construir um futuro melhor para crianças e famílias em situação de vulnerabilidade",
      cta: "Faça sua Doação",
      ctaSecondary: "Conheça Nossos Projetos",
    },
    impact: {
      title: "Nosso Impacto em Números",
      children: "Crianças Impactadas",
      meals: "Refeições Servidas",
      projects: "Projetos Ativos",
      families: "Famílias Apoiadas",
    },
    footer: {
      about: "Sobre a São Martinho",
      aboutText: "Há mais de 30 anos transformando vidas através da educação, cultura e apoio social.",
      contact: "Contato",
      follow: "Siga-nos",
      rights: "Todos os direitos reservados.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Quiénes Somos",
      projects: "Proyectos",
      donate: "Done Ahora",
      transparency: "Transparencia",
      blog: "Noticias",
      contact: "Contacto",
    },
    hero: {
      title: "Transformando Vidas con Solidaridad",
      subtitle: "Juntos podemos construir un futuro mejor para niños y familias en situación de vulnerabilidad",
      cta: "Haga su Donación",
      ctaSecondary: "Conozca Nuestros Proyectos",
    },
    impact: {
      title: "Nuestro Impacto en Números",
      children: "Niños Impactados",
      meals: "Comidas Servidas",
      projects: "Proyectos Activos",
      families: "Familias Apoyadas",
    },
    footer: {
      about: "Sobre São Martinho",
      aboutText: "Hace más de 30 años transformando vidas a través de la educación, cultura y apoyo social.",
      contact: "Contacto",
      follow: "Síguenos",
      rights: "Todos los derechos reservados.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      projects: "Projects",
      donate: "Donate Now",
      transparency: "Transparency",
      blog: "News",
      contact: "Contact",
    },
    hero: {
      title: "Transforming Lives Through Solidarity",
      subtitle: "Together we can build a better future for children and families in vulnerable situations",
      cta: "Make a Donation",
      ctaSecondary: "Discover Our Projects",
    },
    impact: {
      title: "Our Impact in Numbers",
      children: "Children Impacted",
      meals: "Meals Served",
      projects: "Active Projects",
      families: "Families Supported",
    },
    footer: {
      about: "About São Martinho",
      aboutText: "For over 30 years transforming lives through education, culture and social support.",
      contact: "Contact",
      follow: "Follow Us",
      rights: "All rights reserved.",
    },
  },
  ja: {
    nav: {
      home: "ホーム",
      about: "私たちについて",
      projects: "プロジェクト",
      donate: "寄付する",
      transparency: "透明性",
      blog: "ニュース",
      contact: "お問い合わせ",
    },
    hero: {
      title: "連帯で人生を変える",
      subtitle: "脆弱な状況にある子供たちと家族のために、より良い未来を一緒に築きましょう",
      cta: "寄付をする",
      ctaSecondary: "プロジェクトを見る",
    },
    impact: {
      title: "数字で見る私たちの影響",
      children: "影響を受けた子供たち",
      meals: "提供された食事",
      projects: "活動中のプロジェクト",
      families: "支援された家族",
    },
    footer: {
      about: "サンマルティーニョについて",
      aboutText: "30年以上にわたり、教育、文化、社会支援を通じて人生を変えてきました。",
      contact: "お問い合わせ",
      follow: "フォロー",
      rights: "すべての権利を保有します。",
    },
  },
}

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.pt
}
