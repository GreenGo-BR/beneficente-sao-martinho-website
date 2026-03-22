import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog São Martinho Rio de Janeiro | Notícias e Histórias de Transformação Social",
  description:
    "Acompanhe as últimas notícias, eventos e histórias de impacto social da Associação Beneficente São Martinho no Rio de Janeiro. Conheça nossos projetos na Lapa, Vicente de Carvalho e ações que transformam vidas através da educação, cultura e solidariedade.",
  keywords:
    "blog são martinho, noticias ong rio de janeiro, ação social lapa, projetos sociais rj, historias de transformação, voluntariado rio de janeiro, doação rj, crianças vulnerabilidade social",
  openGraph: {
    title: "Blog São Martinho Rio de Janeiro | Notícias e Impacto Social",
    description:
      "Histórias reais de transformação social no Rio de Janeiro. Acompanhe eventos, programas educacionais e ações da São Martinho na Lapa e Vicente de Carvalho.",
    type: "website",
    locale: "pt_BR",
    siteName: "Associação Beneficente São Martinho",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog São Martinho Rio de Janeiro",
    description: "Notícias e histórias de transformação social no Rio de Janeiro",
  },
  alternates: {
    canonical: "/blog",
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
