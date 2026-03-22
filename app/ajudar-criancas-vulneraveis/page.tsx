"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Users, Target, Heart, Lightbulb, Shield, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLocale } from "@/lib/locale-context"
import { useEffect, useState, useRef } from "react"

export default function HelpChildrenPage() {
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

  const solutions = [
    {
      icon: Target,
      pt: {
        title: "Educação de Qualidade",
        description:
          "Investir em educação é o passo mais importante. Crianças com acesso a educação têm 4x mais chances de sair da pobreza. Escolas e programas de reforço são fundamentais.",
      },
      es: {
        title: "Educación de Calidad",
        description:
          "Invertir en educación es el paso más importante. Los niños con acceso a la educación tienen 4 veces más probabilidades de salir de la pobreza. Las escuelas y programas de refuerzo son fundamentales.",
      },
      en: {
        title: "Quality Education",
        description:
          "Investing in education is the most important step. Children with access to education are 4x more likely to escape poverty. Schools and tutoring programs are essential.",
      },
      ja: {
        title: "質の高い教育",
        description:
          "教育への投資が最も重要なステップです。教育にアクセスできる子供は貧困から脱出する可能性が4倍です。学校と補習プログラムが必須です。",
      },
    },
    {
      icon: Heart,
      pt: {
        title: "Nutrição Adequada",
        description:
          "Uma criança mal nutrida não consegue aprender. Programas de alimentação escolar garantem que meninos e meninas tenham energia para estudar e desenvolver seu potencial.",
      },
      es: {
        title: "Nutrición Adecuada",
        description:
          "Un niño desnutrido no puede aprender. Los programas de alimentación escolar garantizan que niños y niñas tengan energía para estudiar y desarrollar su potencial.",
      },
      en: {
        title: "Proper Nutrition",
        description:
          "A malnourished child cannot learn. School feeding programs ensure that boys and girls have energy to study and develop their potential.",
      },
      ja: {
        title: "適切な栄養",
        description:
          "栄養不良の子供は学ぶことができません。学校給食プログラムは、少年少女が学び、自分の可能性を発展させるためのエネルギーを持つことを確保します。",
      },
    },
    {
      icon: Users,
      pt: {
        title: "Apoio às Famílias",
        description:
          "A vulnerabilidade social afeta famílias inteiras. Programas de geração de renda, orientação familiar e assistência social ajudam a quebrar o ciclo da pobreza.",
      },
      es: {
        title: "Apoyo a las Familias",
        description:
          "La vulnerabilidad social afecta a familias enteras. Los programas de generación de ingresos, orientación familiar y asistencia social ayudan a romper el ciclo de la pobreza.",
      },
      en: {
        title: "Family Support",
        description:
          "Social vulnerability affects entire families. Income generation programs, family guidance and social assistance help break the cycle of poverty.",
      },
      ja: {
        title: "家族支援",
        description:
          "社会的脆弱性は家族全体に影響します。所得創出プログラム、家族ガイダンス、社会支援は貧困のサイクルを断つのに役立ちます。",
      },
    },
    {
      icon: Lightbulb,
      pt: {
        title: "Profissionalização",
        description:
          "Adolescentes precisam de competências para o mercado de trabalho. Cursos profissionais aumentam as oportunidades e renda familiar, transformando o futuro.",
      },
      es: {
        title: "Profesionalización",
        description:
          "Los adolescentes necesitan competencias para el mercado laboral. Los cursos profesionales aumentan las oportunidades e ingresos familiares, transformando el futuro.",
      },
      en: {
        title: "Professional Skills",
        description:
          "Teenagers need skills for the job market. Professional courses increase opportunities and family income, transforming the future.",
      },
      ja: {
        title: "職業スキル",
        description:
          "十代は仕事市場のためのスキルが必要です。職業コースは機会と家族収入を増やし、将来を変えます。",
      },
    },
  ]

  const actions = [
    {
      pt: {
        action: "Voluntariar",
        benefit: "Dedique tempo e talentos para ajudar crianças e famílias",
      },
      es: {
        action: "Voluntariar",
        benefit: "Dedique tiempo y talentos para ayudar a niños y familias",
      },
      en: {
        action: "Volunteer",
        benefit: "Dedicate time and talents to help children and families",
      },
      ja: {
        action: "ボランティア",
        benefit: "子供と家族を助けるために時間と才能を捧げてください",
      },
    },
    {
      pt: {
        action: "Oferecer Habilidades",
        benefit: "Professores, profissionais e especialistas são bem-vindos",
      },
      es: {
        action: "Ofrecer Habilidades",
        benefit: "Los maestros, profesionales y especialistas son bienvenidos",
      },
      en: {
        action: "Share Your Skills",
        benefit: "Teachers, professionals and specialists are welcome",
      },
      ja: {
        action: "スキルを共有",
        benefit: "教師、専門家、スペシャリストを歓迎します",
      },
    },
    {
      pt: {
        action: "Fazer Parcerias",
        benefit: "Empresas podem oferecer recursos, bolsas ou programas",
      },
      es: {
        action: "Hacer Asociaciones",
        benefit: "Las empresas pueden ofrecer recursos, becas o programas",
      },
      en: {
        action: "Build Partnerships",
        benefit: "Companies can offer resources, scholarships or programs",
      },
      ja: {
        action: "パートナーシップ構築",
        benefit: "企業はリソース、奨学金、またはプログラムを提供できます",
      },
    },
    {
      pt: {
        action: "Engajar Comunidade",
        benefit: "Mobilize redes e grupos para ampliar o impacto",
      },
      es: {
        action: "Involucrar Comunidad",
        benefit: "Movilice redes y grupos para ampliar el impacto",
      },
      en: {
        action: "Engage Your Network",
        benefit: "Mobilize networks and groups to expand impact",
      },
      ja: {
        action: "ネットワークを参加させる",
        benefit: "ネットワークとグループを動員して影響を拡大します",
      },
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
                ? "Como Ajudar Crianças em Situação de Vulnerabilidade no Brasil?"
                : locale === "es"
                  ? "¿Cómo Ayudar a Niños en Situación de Vulnerabilidad en Brasil?"
                  : locale === "ja"
                    ? "ブラジルで脆弱な状況にある子供たちをどのように支援するか？"
                    : "How to Help Children in Vulnerable Situations in Brazil?"}
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty">
              {locale === "pt"
                ? "No Brasil, mais de 60 milhões de pessoas vivem em situação de vulnerabilidade social. Crianças são as mais afetadas. Descubra como você pode fazer a diferença na vida delas através de educação, alimentação, apoio familiar e oportunidades."
                : locale === "es"
                  ? "En Brasil, más de 60 millones de personas viven en situación de vulnerabilidad social. Los niños son los más afectados. Descubra cómo puede marcar la diferencia en sus vidas a través de educación, alimentación, apoyo familiar y oportunidades."
                  : locale === "ja"
                    ? "ブラジルでは、6000万人以上の人々が社会的脆弱性の状況にあります。子供が最も影響を受けています。教育、食料、家族支援、機会を通じて子供たちの人生にどのように違いを生み出すかを発見してください。"
                    : "In Brazil, over 60 million people live in situations of social vulnerability. Children are the most affected. Discover how you can make a difference in their lives through education, food, family support and opportunities."}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto" data-animate id="solutions">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
              {locale === "pt"
                ? "Soluções que Funcionam"
                : locale === "es"
                  ? "Soluciones que Funcionan"
                  : locale === "ja"
                    ? "機能するソリューション"
                    : "Solutions That Work"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => {
                const content =
                  locale === "es"
                    ? solution.es
                    : locale === "en"
                      ? solution.en
                      : locale === "ja"
                        ? solution.ja
                        : solution.pt
                const Icon = solution.icon
                return (
                  <Card
                    key={index}
                    className={`p-8 hover:shadow-lg transition-all duration-500 group ${
                      visibleSections.has("solutions") ? "animate-fade-in-up" : "opacity-0"
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
          <div className="max-w-4xl mx-auto" data-animate id="how-you-can-help">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
              {locale === "pt"
                ? "Como Você Pode Ajudar"
                : locale === "es"
                  ? "Cómo Puede Ayudar"
                  : locale === "ja"
                    ? "あなたができる手助け"
                    : "How You Can Help"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {actions.map((action, index) => {
                const content =
                  locale === "es"
                    ? action.es
                    : locale === "en"
                      ? action.en
                      : locale === "ja"
                        ? action.ja
                        : action.pt
                return (
                  <Card
                    key={index}
                    className={`p-6 hover:shadow-lg transition-all ${
                      visibleSections.has("how-you-can-help") ? "animate-fade-in-up" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2">{content.action}</h3>
                        <p className="text-muted-foreground">{content.benefit}</p>
                      </div>
                    </div>
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
                ? "Comece Hoje Mesmo"
                : locale === "es"
                  ? "Comience Hoy"
                  : locale === "ja"
                    ? "今日から始める"
                    : "Start Today"}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {locale === "pt"
                ? "Cada ação conta. Você pode fazer uma doação, se tornar voluntário, ou compartilhar sobre nossos programas. O impacto começa com você."
                : locale === "es"
                  ? "Cada acción cuenta. Puede hacer una donación, convertirse en voluntario o compartir nuestros programas. El impacto comienza con usted."
                  : locale === "ja"
                    ? "すべてのアクションが重要です。寄付をしたり、ボランティアになったり、プログラムについて共有したりできます。影響はあなたから始まります。"
                    : "Every action counts. You can make a donation, become a volunteer, or share about our programs. The impact starts with you."}
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
