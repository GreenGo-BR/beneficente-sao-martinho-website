"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Users, BookOpen, Heart, Home, Briefcase, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLocale } from "@/lib/locale-context"
import { useEffect, useState, useRef } from "react"

export default function WhatWeDoPage() {
  const { locale } = useLocale()
  const [visibleSections, setVisibleSections] = useState(new Set() as Set<string>)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id))
          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll("[data-animate]")
    sections.forEach((section) => observerRef.current?.observe(section))

    return () => observerRef.current?.disconnect()
  }, [])

  const programs = [
    {
      icon: BookOpen,
      pt: {
        title: "Educação Transformadora",
        description:
          "Oferecemos aulas de reforço, alfabetização, educação digital e acompanhamento pedagógico. Cada criança recebe suporte personalizado para desenvolver todo seu potencial acadêmico.",
      },
      es: {
        title: "Educación Transformadora",
        description:
          "Ofrecemos clases de refuerzo, alfabetización, educación digital y acompañamiento pedagógico. Cada niño recibe apoyo personalizado para desarrollar todo su potencial académico.",
      },
      en: {
        title: "Transformative Education",
        description:
          "We offer tutoring classes, literacy programs, digital education and pedagogical support. Each child receives personalized support to develop their full academic potential.",
      },
      ja: {
        title: "変革的教育",
        description:
          "私たちは補習授業、識字プログラム、デジタル教育、教育支援を提供します。各子供は学問的可能性を最大限に発揮するためのパーソナライズされたサポートを受けます。",
      },
    },
    {
      icon: Heart,
      pt: {
        title: "Alimentação e Nutrição",
        description:
          "Proporcionamos refeições balanceadas e nutritivas. Sabemos que uma criança bem alimentada aprende melhor. Também oferecemos acompanhamento nutricional com profissionais especializados.",
      },
      es: {
        title: "Alimentación y Nutrición",
        description:
          "Proporcionamos comidas equilibradas y nutritivas. Sabemos que un niño bien alimentado aprende mejor. También ofrecemos seguimiento nutricional con profesionales especializados.",
      },
      en: {
        title: "Food and Nutrition",
        description:
          "We provide balanced and nutritious meals. We know that a well-fed child learns better. We also offer nutritional monitoring with specialized professionals.",
      },
      ja: {
        title: "食料と栄養",
        description:
          "バランスの取れた栄養のある食事を提供します。よく食べた子供はよく学びます。また、専門家による栄養管理も提供しています。",
      },
    },
    {
      icon: Users,
      pt: {
        title: "Apoio Familiar",
        description:
          "Orientação para famílias, assistência social, programas de geração de renda e acompanhamento de contextos de vulnerabilidade. Nós ajudamos toda a família a crescer.",
      },
      es: {
        title: "Apoyo Familiar",
        description:
          "Orientación para familias, asistencia social, programas de generación de ingresos y seguimiento de contextos de vulnerabilidad. Ayudamos a toda la familia a crecer.",
      },
      en: {
        title: "Family Support",
        description:
          "Family guidance, social assistance, income generation programs and monitoring of vulnerable contexts. We help the entire family grow.",
      },
      ja: {
        title: "家族支援",
        description:
          "家族ガイダンス、社会支援、所得創出プログラム、脆弱な環境の監視。家全体の成長を支援します。",
      },
    },
    {
      icon: Briefcase,
      pt: {
        title: "Profissionalização",
        description:
          "Cursos de formação profissional em áreas com alta demanda do mercado. Preparamos jovens para o mercado de trabalho com competências reais e certificação.",
      },
      es: {
        title: "Profesionalización",
        description:
          "Cursos de capacitación profesional en áreas con alta demanda del mercado. Preparamos a los jóvenes para el mercado laboral con competencias reales y certificación.",
      },
      en: {
        title: "Professional Training",
        description:
          "Professional training courses in high-demand market areas. We prepare young people for the job market with real skills and certification.",
      },
      ja: {
        title: "職業訓練",
        description:
          "高い市場需要がある分野での職業訓練コース。実際のスキルと認定で若者を労働市場に向けて準備します。",
      },
    },
  ]

  const impactAreas = [
    {
      pt: "Atendemos crianças e adolescentes de 5 a 17 anos em situação de vulnerabilidade social",
      es: "Atendemos a niños y adolescentes de 5 a 17 años en situación de vulnerabilidad social",
      en: "We serve children and teenagers aged 5 to 17 in situations of social vulnerability",
      ja: "社会的脆弱性の状況にある5〜17歳の子供と青少年にサービスを提供しています",
    },
    {
      pt: "Oferecemos múltiplos serviços em um local seguro e acolhedor",
      es: "Ofrecemos múltiples servicios en un lugar seguro y acogedor",
      en: "We offer multiple services in a safe and welcoming place",
      ja: "安全で温かい場所で複数のサービスを提供しています",
    },
    {
      pt: "Trabalhamos em parceria com famílias, escolas e comunidade",
      es: "Trabajamos en asociación con familias, escuelas y comunidad",
      en: "We work in partnership with families, schools and community",
      ja: "家族、学校、コミュニティと協力して活動します",
    },
    {
      pt: "Utilizamos metodologia participativa e respeitosa",
      es: "Utilizamos metodología participativa y respetuosa",
      en: "We use participatory and respectful methodology",
      ja: "参加的でリスペクトフルな方法論を使用しています",
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-muted to-background overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float-delayed" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              {locale === "pt"
                ? "O que faz o Instituto São Martinho?"
                : locale === "es"
                  ? "¿Qué hace el Instituto São Martinho?"
                  : locale === "ja"
                    ? "サンマルティーニョ研究所は何をしていますか？"
                    : "What does the São Martinho Institute do?"}
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty">
              {locale === "pt"
                ? "Há mais de 39 anos, transformamos vidas através da educação, alimentação, apoio familiar e profissionalização. Conheça nossos programas que já impactaram mais de 15 mil crianças e famílias em situação de vulnerabilidade."
                : locale === "es"
                  ? "Durante más de 39 años, transformamos vidas a través de la educación, alimentación, apoyo familiar y profesionalización. Conozca nuestros programas que ya han impactado a más de 15 mil niños y familias en situación de vulnerabilidad."
                  : locale === "ja"
                    ? "39年以上にわたり、私たちは教育、食料、家族支援、職業訓練を通じて人生を変えています。社会的脆弱性の状況にある15,000以上の子供と家族に影響を与えたプログラムを知ってください。"
                    : "For over 39 years, we transform lives through education, food, family support and professional training. Learn about our programs that have already impacted over 15 thousand children and families in vulnerable situations."}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto" data-animate id="programs">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
              {locale === "pt"
                ? "Nossos Programas"
                : locale === "es"
                  ? "Nuestros Programas"
                  : locale === "ja"
                    ? "私たちのプログラム"
                    : "Our Programs"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {programs.map((program, index) => {
                const content =
                  locale === "es"
                    ? program.es
                    : locale === "en"
                      ? program.en
                      : locale === "ja"
                        ? program.ja
                        : program.pt
                const Icon = program.icon
                return (
                  <Card
                    key={index}
                    className={`p-8 hover:shadow-lg transition-all duration-500 group ${
                      visibleSections.has("programs") ? "animate-fade-in-up" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="mb-6">
                      <Icon className="w-12 h-12 text-primary group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {content.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{content.description}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto" data-animate id="how-we-work">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
              {locale === "pt"
                ? "Como Fazemos Diferença"
                : locale === "es"
                  ? "Cómo Hacemos una Diferencia"
                  : locale === "ja"
                    ? "私たちはどのように違いを作るのか"
                    : "How We Make a Difference"}
            </h2>

            <div className="space-y-6">
              {impactAreas.map((area, index) => {
                const content =
                  locale === "es"
                    ? area.es
                    : locale === "en"
                      ? area.en
                      : locale === "ja"
                        ? area.ja
                        : area.pt
                return (
                  <Card
                    key={index}
                    className={`p-6 flex items-start gap-4 hover:shadow-lg transition-all ${
                      visibleSections.has("how-we-work") ? "animate-fade-in-up" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg text-foreground leading-relaxed">{content}</p>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center" data-animate id="cta">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              {locale === "pt"
                ? "Faça Parte Dessa Transformação"
                : locale === "es"
                  ? "Sé Parte de Esta Transformación"
                  : locale === "ja"
                    ? "この変革の一部になってください"
                    : "Be Part of This Transformation"}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {locale === "pt"
                ? "Você pode ajudar crianças e famílias através de doações, voluntariado ou parcerias empresariais. Todo apoio faz diferença."
                : locale === "es"
                  ? "Puede ayudar a niños y familias a través de donaciones, voluntariado o asociaciones empresariales. Todo apoyo hace diferencia."
                  : locale === "ja"
                    ? "寄付、ボランティア、企業パートナーシップを通じて子供と家族を支援できます。すべてのサポートが違いを生み出します。"
                    : "You can help children and families through donations, volunteering or corporate partnerships. Every support makes a difference."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/doacoes">
                <Button size="lg" className="w-full sm:w-auto">
                  {locale === "pt" ? "Fazer uma Doação" : locale === "es" ? "Hacer una Donación" : locale === "ja" ? "寄付をする" : "Make a Donation"}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link href="/voluntario">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  {locale === "pt" ? "Ser Voluntário" : locale === "es" ? "Ser Voluntario" : locale === "ja" ? "ボランティアになる" : "Become a Volunteer"}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
