"use client"

import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { useLocale } from "@/lib/locale-context"

export function TestimonialsSection() {
  const { locale } = useLocale()

  const testimonials = [
    {
      quote:
        locale === "pt"
          ? "A São Martinho mudou minha vida. Hoje tenho educação, oportunidades e esperança no futuro."
          : locale === "es"
            ? "São Martinho cambió mi vida. Hoy tengo educación, oportunidades y esperanza en el futuro."
            : locale === "ja"
              ? "サンマルティーニョは私の人生を変えました。今、私には教育、機会、そして未来への希望があります。"
              : "São Martinho changed my life. Today I have education, opportunities and hope for the future.",
      author: locale === "pt" ? "Maria Silva" : "Maria Silva",
      role:
        locale === "pt" ? "Ex-aluna" : locale === "es" ? "Ex-alumna" : locale === "ja" ? "元学生" : "Former student",
    },
    {
      quote:
        locale === "pt"
          ? "Ver meus filhos crescendo com acesso à educação e cultura é um sonho realizado."
          : locale === "es"
            ? "Ver a mis hijos crecer con acceso a educación y cultura es un sueño hecho realidad."
            : locale === "ja"
              ? "子供たちが教育と文化にアクセスして成長するのを見ることは夢が叶ったことです。"
              : "Seeing my children growing up with access to education and culture is a dream come true.",
      author: locale === "pt" ? "João Santos" : "João Santos",
      role:
        locale === "pt"
          ? "Pai de beneficiário"
          : locale === "es"
            ? "Padre de beneficiario"
            : locale === "ja"
              ? "受益者の父親"
              : "Beneficiary's father",
    },
    {
      quote:
        locale === "pt"
          ? "Como voluntária, aprendo tanto quanto ensino. É gratificante fazer parte dessa transformação."
          : locale === "es"
            ? "Como voluntaria, aprendo tanto como enseño. Es gratificante formar parte de esta transformación."
            : locale === "ja"
              ? "ボランティアとして、私は教えるのと同じくらい学びます。この変革の一部であることはやりがいがあります。"
              : "As a volunteer, I learn as much as I teach. It's rewarding to be part of this transformation.",
      author: locale === "pt" ? "Ana Costa" : "Ana Costa",
      role:
        locale === "pt"
          ? "Voluntária"
          : locale === "es"
            ? "Voluntaria"
            : locale === "ja"
              ? "ボランティア"
              : "Volunteer",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            {locale === "pt"
              ? "Histórias de Transformação"
              : locale === "es"
                ? "Historias de Transformación"
                : locale === "ja"
                  ? "変革の物語"
                  : "Stories of Transformation"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {locale === "pt"
              ? "Conheça algumas das vidas que foram transformadas através do nosso trabalho"
              : locale === "es"
                ? "Conozca algunas de las vidas que fueron transformadas a través de nuestro trabajo"
                : locale === "ja"
                  ? "私たちの仕事を通じて変革された人生のいくつかを知ってください"
                  : "Meet some of the lives that were transformed through our work"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 lg:p-8 h-full flex flex-col hover:shadow-lg transition-shadow">
              <Quote className="w-10 h-10 text-primary mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-6 text-pretty flex-grow">{testimonial.quote}</p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
