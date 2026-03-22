"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Sparkles, Users, Heart, Briefcase, Home, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLocale } from "@/lib/locale-context"

export default function ProjectsPage() {
  const { locale } = useLocale()

  const projects = [
    {
      id: "educacao",
      icon: BookOpen,
      title: locale === "pt" ? "Educação" : locale === "es" ? "Educación" : locale === "ja" ? "教育" : "Education",
      description:
        locale === "pt"
          ? "Programas educacionais completos que preparam crianças e jovens para um futuro brilhante"
          : locale === "es"
            ? "Programas educativos completos que preparan niños y jóvenes para un futuro brillante"
            : locale === "ja"
              ? "子供と若者を明るい未来に備えさせる完全な教育プログラム"
              : "Complete educational programs that prepare children and youth for a bright future",
      image: "/children-studying-in-classroom-with-teacher.jpg",
      impact:
        locale === "pt"
          ? "5.000+ alunos"
          : locale === "es"
            ? "5.000+ alumnos"
            : locale === "ja"
              ? "5,000人以上の学生"
              : "5,000+ students",
    },
    {
      id: "arte-cultura",
      icon: Sparkles,
      title:
        locale === "pt"
          ? "Arte & Cultura"
          : locale === "es"
            ? "Arte y Cultura"
            : locale === "ja"
              ? "芸術と文化"
              : "Art & Culture",
      description:
        locale === "pt"
          ? "Desenvolvimento pessoal e expressão através de arte, música, dança e teatro"
          : locale === "es"
            ? "Desarrollo personal y expresión a través de arte, música, dança y teatro"
            : locale === "ja"
              ? "芸術、音楽、ダンス、演劇を通じた個人的な発展と表現"
              : "Personal development and expression through art, music, dance and theater",
      image: "/children-in-art-class-painting-and-creating.jpg",
      impact:
        locale === "pt"
          ? "3.000+ participantes"
          : locale === "es"
            ? "3.000+ participantes"
            : locale === "ja"
              ? "3,000人以上の参加者"
              : "3,000+ participants",
    },
    {
      id: "apoio-familias",
      icon: Users,
      title:
        locale === "pt"
          ? "Apoio a Famílias"
          : locale === "es"
            ? "Apoyo a Familias"
            : locale === "ja"
              ? "家族支援"
              : "Family Support",
      description:
        locale === "pt"
          ? "Assistência completa com alimentação, saúde e orientação para famílias vulneráveis"
          : locale === "es"
            ? "Asistencia completa con alimentación, salud y orientación para familias vulnerables"
            : locale === "ja"
              ? "脆弱な家族への食事、健康、指導を含む完全な支援"
              : "Complete assistance with food, health and guidance for vulnerable families",
      image: "/families-receiving-support-and-community-help.jpg",
      impact:
        locale === "pt"
          ? "8.000+ famílias"
          : locale === "es"
            ? "8.000+ familias"
            : locale === "ja"
              ? "8,000以上の家族"
              : "8,000+ families",
    },
    {
      id: "formacao-profissional",
      icon: Briefcase,
      title:
        locale === "pt"
          ? "Formação Profissional"
          : locale === "es"
            ? "Formación Profesional"
            : locale === "ja"
              ? "職業訓練"
              : "Professional Training",
      description:
        locale === "pt"
          ? "Cursos profissionalizantes e preparação para o mercado de trabalho"
          : locale === "es"
            ? "Cursos profesionalizantes y preparación para el mercado laboral"
            : locale === "ja"
              ? "職業訓練コースと労働市場への準備"
              : "Professional courses and preparation for the job market",
      image: "/young-adults-in-professional-training-workshop.jpg",
      impact:
        locale === "pt"
          ? "2.000+ formados"
          : locale === "es"
            ? "2.000+ graduados"
            : locale === "ja"
              ? "2,000人以上の卒業生"
              : "2,000+ graduates",
    },
    {
      id: "acolhimento-social",
      icon: Home,
      title:
        locale === "pt"
          ? "Acolhimento Social"
          : locale === "es"
            ? "Acogida Social"
            : locale === "ja"
              ? "社会的受け入れ"
              : "Social Shelter",
      description:
        locale === "pt"
          ? "Ambiente seguro e acolhedor para crianças e adolescentes em situação de risco"
          : locale === "es"
            ? "Ambiente seguro y acogedor para niños y adolescentes en situación de riesgo"
            : locale === "ja"
              ? "リスクのある子供と青少年のための安全で歓迎的な環境"
              : "Safe and welcoming environment for children and adolescents at risk",
      image: "/safe-community-space-with-children-and-caregivers.jpg",
      impact:
        locale === "pt"
          ? "1.500+ acolhidos"
          : locale === "es"
            ? "1.500+ acogidos"
            : locale === "ja"
              ? "1,500人以上が受け入れられた"
              : "1,500+ sheltered",
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              {locale === "pt"
                ? "Nossos Projetos"
                : locale === "es"
                  ? "Nuestros Proyectos"
                  : locale === "ja"
                    ? "私たちのプロジェクト"
                    : "Our Projects"}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              {locale === "pt"
                ? "Conheça as diferentes formas como transformamos vidas através da educação, cultura e apoio social. Cada projeto é desenvolvido com amor e dedicação para criar oportunidades reais."
                : locale === "es"
                  ? "Conozca las diferentes formas en que transformamos vidas a través de la educación, cultura y apoyo social. Cada proyecto se desarrolla con amor y dedicación para crear oportunidades reais."
                  : locale === "ja"
                    ? "教育、文化、社会支援を通じて人生を変えるさまざまな方法を知ってください。各プロジェクトは、本当の機会を創出するために愛と献身をもって開発されています。"
                    : "Discover the different ways we transform lives through education, culture and social support. Each project is developed with love and dedication to create real opportunities."}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={`${project.title} - Projeto social do Instituto São Martinho para crianças e famílias em situação de vulnerabilidade`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-background rounded-full flex items-center justify-center shadow-lg">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed text-sm">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">{project.impact}</span>
                    <Button asChild variant="ghost" size="sm" className="gap-2">
                      <Link href={`/projetos/${project.id}`}>
                        {locale === "pt"
                          ? "Ver mais"
                          : locale === "es"
                            ? "Ver más"
                            : locale === "ja"
                              ? "もっと見る"
                              : "Learn more"}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance">
            {locale === "pt"
              ? "Apoie Nossos Projetos"
              : locale === "es"
                ? "Apoye Nuestros Projetos"
                : locale === "ja"
                  ? "私たちのプロジェクトを支援する"
                  : "Support Our Projects"}
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/90 text-pretty">
            {locale === "pt"
              ? "Sua doação permite que continuemos expandindo nossos programas e alcançando mais vidas."
              : locale === "es"
                ? "Su donación nos permite continuar expandiendo nuestros programas y alcanzando más vidas."
                : locale === "ja"
                  ? "あなたの寄付により、私たちはプログラムを拡大し、より多くの人生に到達し続けることができます。"
                  : "Your donation allows us to continue expanding our programs and reaching more lives."}
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/doacoes" className="gap-2">
              {locale === "pt"
                ? "Fazer Doação"
                : locale === "es"
                  ? "Hacer Donación"
                  : locale === "ja"
                    ? "寄付する"
                    : "Make a Donation"}
              <Heart className="w-5 h-5 fill-current" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
