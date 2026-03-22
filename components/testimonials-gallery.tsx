"use client"

import { useState } from "react"
import { Quote } from "lucide-react"
import { useLocale } from "@/lib/locale-context"

interface Testimonial {
  id: number
  name: string
  role: string
  quote: string
  image: string
}

export function TestimonialsGallery() {
  const { locale } = useLocale()
  const [activeOption, setActiveOption] = useState(1)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Maria Silva",
      role:
        locale === "pt" ? "Ex-aluna" : locale === "es" ? "Ex-alumna" : locale === "ja" ? "元学生" : "Former student",
      quote:
        locale === "pt"
          ? "A São Martinho mudou minha vida. Hoje tenho educação, oportunidades e esperança no futuro."
          : locale === "es"
            ? "São Martinho cambió mi vida. Hoy tengo educación, oportunidades y esperanza en el futuro."
            : locale === "ja"
              ? "サンマルティーニョは私の人生を変えました。今、私には教育、機会、そして未来への希望があります。"
              : "São Martinho changed my life. Today I have education, opportunities and hope for the future.",
      image: "/rio-student-graduation-success-favela-background.jpg",
    },
    {
      id: 2,
      name: "João Santos",
      role:
        locale === "pt"
          ? "Pai de beneficiário"
          : locale === "es"
            ? "Padre de beneficiario"
            : locale === "ja"
              ? "受益者の父親"
              : "Beneficiary's father",
      quote:
        locale === "pt"
          ? "Ver meus filhos crescendo com acesso à educação e cultura é um sonho realizado."
          : locale === "es"
            ? "Ver a mis hijos crecer con acceso a educación y cultura es un sueño hecho realidad."
            : locale === "ja"
              ? "子供たちが教育と文化にアクセスして成長するのを見ることは夢が叶ったことです。"
              : "Seeing my children growing up with access to education and culture is a dream come true.",
      image: "/rio-father-children-community-support-family.jpg",
    },
    {
      id: 3,
      name: "Ana Costa",
      role:
        locale === "pt"
          ? "Voluntária"
          : locale === "es"
            ? "Voluntaria"
            : locale === "ja"
              ? "ボランティア"
              : "Volunteer",
      quote:
        locale === "pt"
          ? "Como voluntária, aprendo tanto quanto ensino. É gratificante fazer parte dessa transformação."
          : locale === "es"
            ? "Como voluntaria, aprendo tanto como enseño. Es gratificante formar parte de esta transformación."
            : locale === "ja"
              ? "ボランティアとして、私は教えるのと同じくらい学びます。この変革の一部であることはやりがいがあります。"
              : "As a volunteer, I learn as much as I teach. It's rewarding to be part of this transformation.",
      image: "/rio-volunteer-teaching-children-community.jpg",
    },
    {
      id: 4,
      name: "Pedro Oliveira",
      role:
        locale === "pt"
          ? "Jovem Aprendiz"
          : locale === "es"
            ? "Joven Aprendiz"
            : locale === "ja"
              ? "見習い"
              : "Apprentice",
      quote:
        locale === "pt"
          ? "O programa de profissionalização me deu o primeiro emprego e uma carreira promissora."
          : locale === "es"
            ? "El programa de profesionalización me dio mi primer empleo y una carrera prometedora."
            : locale === "ja"
              ? "職業訓練プログラムは私に最初の仕事と有望なキャリアを与えてくれました。"
              : "The professional training program gave me my first job and a promising career.",
      image: "/rio-young-apprentice-professional-training-success.jpg",
    },
    {
      id: 5,
      name: "Carla Mendes",
      role:
        locale === "pt"
          ? "Mãe de aluno"
          : locale === "es"
            ? "Madre de estudiante"
            : locale === "ja"
              ? "学生の母親"
              : "Student's mother",
      quote:
        locale === "pt"
          ? "Meu filho encontrou na São Martinho um lugar seguro para crescer, aprender e sonhar."
          : locale === "es"
            ? "Mi hijo encontró en São Martinho un lugar seguro para crecer, aprender y soñar."
            : locale === "ja"
              ? "息子はサンマルティーニョで成長し、学び、夢を見るための安全な場所を見つけました。"
              : "My son found at São Martinho a safe place to grow, learn and dream.",
      image: "/rio-mother-child-learning-community-center.jpg",
    },
  ]

  const handleOptionClick = (id: number) => {
    setActiveOption(id)
  }

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

        <div className="relative w-full h-[350px] lg:h-[450px]">
          <div className="flex h-full gap-2">
            {testimonials.map((testimonial) => {
              const isActive = activeOption === testimonial.id

              return (
                <div
                  key={testimonial.id}
                  onClick={() => handleOptionClick(testimonial.id)}
                  className={`relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-500 ease-in-out border-2 border-white/20 ${
                    isActive ? "flex-[5]" : "flex-[1]"
                  }`}
                  style={{
                    backgroundImage: `url(${testimonial.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-6 lg:p-8">
                    {/* Quote icon - always visible */}
                    <div className="mb-4">
                      <Quote
                        className={`transition-all duration-500 ${
                          isActive ? "w-12 h-12 lg:w-16 lg:h-16" : "w-8 h-8"
                        } text-white drop-shadow-lg`}
                      />
                    </div>

                    {/* Expanded content */}
                    <div
                      className={`transition-all duration-500 ${
                        isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                      }`}
                    >
                      <p className="text-white text-base lg:text-lg leading-relaxed mb-6 text-pretty drop-shadow-md">
                        {testimonial.quote}
                      </p>
                      <div className="border-t border-white/30 pt-4">
                        <p className="font-bold text-white text-lg drop-shadow-md">{testimonial.name}</p>
                        <p className="text-sm text-white/90 drop-shadow-md">{testimonial.role}</p>
                      </div>
                    </div>

                    {/* Collapsed name */}
                    <div
                      className={`absolute bottom-6 left-6 transition-all duration-500 ${
                        isActive ? "opacity-0 pointer-events-none" : "opacity-100"
                      }`}
                    >
                      <p className="font-bold text-white text-sm lg:text-base drop-shadow-md writing-mode-vertical lg:writing-mode-horizontal rotate-0 lg:rotate-0">
                        {testimonial.name}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Mobile indicators */}
          <div className="flex justify-center gap-2 mt-4 lg:hidden">
            {testimonials.map((testimonial) => (
              <button
                key={testimonial.id}
                onClick={() => handleOptionClick(testimonial.id)}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeOption === testimonial.id ? "bg-primary w-8" : "bg-gray-400"
                }`}
                aria-label={`View ${testimonial.name}'s testimonial`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
