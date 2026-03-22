"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Target, Eye, Award, Users, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLocale } from "@/lib/locale-context"
import { useEffect, useState, useRef } from "react"

export default function AboutPage() {
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

  const timeline = [
    {
      year: "1990",
      pt: { title: "Fundação", description: "Início das atividades com atendimento a 50 crianças" },
      es: { title: "Fundación", description: "Inicio de actividades con atención a 50 niños" },
      en: { title: "Foundation", description: "Start of activities serving 50 children" },
      ja: { title: "設立", description: "50人の子供へのサービスで活動開始" },
    },
    {
      year: "2000",
      pt: { title: "Expansão", description: "Abertura de novas unidades e ampliação dos programas" },
      es: { title: "Expansión", description: "Apertura de nuevas unidades y ampliación de programas" },
      en: { title: "Expansion", description: "Opening of new units and program expansion" },
      ja: { title: "拡大", description: "新しいユニットの開設とプログラムの拡大" },
    },
    {
      year: "2010",
      pt: { title: "Certificação", description: "Reconhecimento como Organização da Sociedade Civil" },
      es: { title: "Certificación", description: "Reconocimiento como Organización de la Sociedad Civil" },
      en: { title: "Certification", description: "Recognition as Civil Society Organization" },
      ja: { title: "認定", description: "市民社会組織としての認識" },
    },
    {
      year: "2020",
      pt: {
        title: "Digitalização",
        description: "Implementação de programas digitais e educação à distância",
      },
      es: {
        title: "Digitalización",
        description: "Implementación de programas digitales y educación a distancia",
      },
      en: { title: "Digitalization", description: "Implementation of digital programs and distance education" },
      ja: { title: "デジタル化", description: "デジタルプログラムと遠隔教育の実装" },
    },
    {
      year: "2025",
      pt: {
        title: "Hoje",
        description: "Mais de 15 mil vidas impactadas anualmente em 5 programas principais",
      },
      es: { title: "Hoy", description: "Más de 15 mil vidas impactadas anualmente en 5 programas principales" },
      en: { title: "Today", description: "Over 15 thousand lives impacted annually across 5 main programs" },
      ja: { title: "今日", description: "5つの主要プログラムで年間15,000以上の人生に影響" },
    },
  ]

  const values = [
    {
      icon: Heart,
      pt: { title: "Amor e Solidariedade", description: "Acreditamos no poder transformador do amor e da empatia" },
      es: {
        title: "Amor y Solidaridad",
        description: "Creemos en el poder transformador del amor y la empatía",
      },
      en: { title: "Love and Solidarity", description: "We believe in the transforming power of love and empathy" },
      ja: { title: "愛と連帯", description: "愛と共感の変革する力を信じています" },
    },
    {
      icon: Target,
      pt: { title: "Excelência", description: "Buscamos sempre a qualidade em tudo que fazemos" },
      es: { title: "Excelencia", description: "Buscamos siempre la calidad en todo lo que hacemos" },
      en: { title: "Excellence", description: "We always seek quality in everything we do" },
      ja: { title: "卓越性", description: "私たちは常に行うすべてのことに品質を求めています" },
    },
    {
      icon: Users,
      pt: { title: "Inclusão", description: "Todos são bem-vindos, sem qualquer distinção" },
      es: { title: "Inclusión", description: "Todos son bienvenidos, sin distinción alguna" },
      en: { title: "Inclusion", description: "Everyone is welcome, without any distinction" },
      ja: { title: "包摂", description: "すべての人が区別なく歓迎されます" },
    },
    {
      icon: Award,
      pt: { title: "Transparência", description: "Prestamos contas de cada ação e cada recurso utilizado" },
      es: { title: "Transparencia", description: "Rendimos cuentas de cada acción y cada recurso utilizado" },
      en: { title: "Transparency", description: "We account for every action and every resource used" },
      ja: { title: "透明性", description: "すべてのアクションと使用されるすべてのリソースを説明します" },
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-muted to-background overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up" data-animate id="hero">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance animate-slide-in-up">
              {locale === "pt"
                ? "Quem Somos"
                : locale === "es"
                  ? "Quiénes Somos"
                  : locale === "ja"
                    ? "私たちについて"
                    : "Who We Are"}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty animate-fade-in-up-delayed">
              {locale === "pt"
                ? "Há mais de 30 anos, a Associação Beneficente São Martinho trabalha incansavelmente para transformar vidas através da educação, cultura e apoio social."
                : locale === "es"
                  ? "Desde hace más de 30 años, la Asociación Benéfica São Martinho trabaja incansablemente para transformar vidas a través de la educación, cultura y apoyo social."
                  : locale === "ja"
                    ? "30年以上にわたり、サンマルティーニョ慈善協会は教育、文化、社会支援を通じて人生を変えるために絶えず働いています。"
                    : "For over 30 years, the São Martinho Charitable Association has worked tirelessly to transform lives through education, culture and social support."}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24" data-animate id="story">
            <div
              className={`relative rounded-3xl overflow-hidden shadow-2xl aspect-video group ${visibleSections.has("story") ? "animate-slide-in-left" : "opacity-0"}`}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nossa.Hist%C3%B3ria.JPG-awDB2lRt4aP3Y1uivDGtiZxFf6mIrq.jpeg"
                alt="São Martinho Community"
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>
            <div className={`${visibleSections.has("story") ? "animate-slide-in-right" : "opacity-0"}`}>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
                {locale === "pt"
                  ? "Nossa História"
                  : locale === "es"
                    ? "Nuestra Historia"
                    : locale === "ja"
                      ? "私たちの歴史"
                      : "Our Story"}
              </h2>
              <div className="space-y-7 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  {locale === "pt"
                    ? "Fundada em 1990 por um grupo de voluntários movidos pela fé e pelo desejo de fazer a diferença, a São Martinho começou com o atendimento a apenas 50 crianças em situação de vulnerabilidade social."
                    : locale === "es"
                      ? "Fundada en 1990 por un grupo de voluntarios movidos por la fe y el deseo de marcar la diferencia, São Martinho comenzó atendiendo a solo 50 niños en situación de vulnerabilidad social."
                      : locale === "ja"
                        ? "信仰と変化をもたらしたいという願望に動かされたボランティアのグループによって1990年に設立されたサンマルティーニョは、社会的に脆弱な状況にある50人の子供たちへのサービスで始まりました。"
                        : "Founded in 1990 by a group of volunteers moved by faith and the desire to make a difference, São Martinho began serving just 50 children in situations of social vulnerability."}
                </p>
                <p className="text-lg">
                  {locale === "pt"
                    ? "Ao longo dos anos, crescemos organicamente, sempre mantendo nossos valores e o compromisso com a excelência. Hoje, atendemos mais de 15 mil pessoas anualmente através de cinco programas principais que abrangem educação, arte, cultura, formação profissional e apoio familiar."
                    : locale === "es"
                      ? "A lo largo de los años, crecimos orgánicamente, siempre manteniendo nuestros valores y el compromisso con la excelencia. Hoy, atendemos a más de 15 mil personas anualmente a través de cinco programas principales que abarcan educación, arte, cultura, formación profesional y apoio familiar."
                      : locale === "ja"
                        ? "何年にもわたって、私たちは有機的に成長し、常に価値観と卓越性へのコミットメントを維持してきました。今日、私たちは教育、芸術、文化、職業訓練、家族支援をカバーする5つの主要プログラムを通じて年間15,000人以上にサービスを提供しています。"
                        : "Over the years, we grew organically, always maintaining our values and commitment to excellence. Today, we serve over 15 thousand people annually through five main programs covering education, art, culture, professional training and family support."}
                </p>
                <p className="text-lg font-semibold text-primary pt-2">
                  {locale === "pt"
                    ? "Nossa missão é clara: promover o desenvolvimento integral de crianças, adolescentes e famílias, oferecendo oportunidades reais de crescimento e transformação social."
                    : locale === "es"
                      ? "Nuestra misión es clara: promover el desarrollo integral de niños, adolescentes y familias, ofreciendo oportunidades reais de crecimiento y transformación social."
                      : locale === "ja"
                        ? "私たちの使命は明確です：子供、青少年、家族の包括的な発展を促進し、成長と社会変革の本当の機会を提供することです。"
                        : "Our mission is clear: to promote the comprehensive development of children, adolescents and families, offering real opportunities for growth and social transformation."}
                </p>
              </div>
            </div>
          </div>

          <div className="mb-24" data-animate id="timeline">
            <h2
              className={`text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center ${visibleSections.has("timeline") ? "animate-fade-in-up" : "opacity-0"}`}
            >
              {locale === "pt"
                ? "Nossa Linha do Tempo"
                : locale === "es"
                  ? "Nuestra Línea de Tiempo"
                  : locale === "ja"
                    ? "私たちのタイムライン"
                    : "Our Timeline"}
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary -translate-x-1/2 hidden lg:block animate-shimmer" />
              <div className="space-y-12">
                {timeline.map((item, index) => {
                  const content =
                    locale === "es" ? item.es : locale === "en" ? item.en : locale === "ja" ? item.ja : item.pt
                  return (
                    <div
                      key={index}
                      className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 0 ? "lg:flex-row-reverse" : ""} ${visibleSections.has("timeline") ? "animate-fade-in-up" : "opacity-0"}`}
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="flex-1 lg:text-right">
                        <Card
                          className={`p-6 hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:border-primary/50 group ${index % 2 === 0 ? "lg:mr-8" : "lg:ml-8"}`}
                        >
                          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {content.title}
                          </h3>
                          <p className="text-muted-foreground">{content.description}</p>
                        </Card>
                      </div>
                      <div className="relative w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg z-10 hover:scale-125 transition-transform duration-300 animate-pulse-slow group">
                        <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />
                        <span className="relative z-10">{item.year}</span>
                      </div>
                      <div className="flex-1 hidden lg:block" />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24" data-animate id="mission">
            <Card
              className={`p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 group ${visibleSections.has("mission") ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "0ms" }}
            >
              <div className="relative mb-4 inline-block">
                <Target className="w-12 h-12 text-primary mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-0 group-hover:scale-150 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {locale === "pt" ? "Missão" : locale === "es" ? "Misión" : locale === "ja" ? "ミッション" : "Mission"}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {locale === "pt"
                  ? "Promover o desenvolvimento integral de crianças e famílias através da educação, cultura e assistência social."
                  : locale === "es"
                    ? "Promover el desarrollo integral de niños y familias a través de la educación, cultura y asistencia social."
                    : locale === "ja"
                      ? "教育、文化、社会支援を通じて子供と家族の包括的な発展を促進する。"
                      : "Promote the comprehensive development of children and families through education, culture and social assistance."}
              </p>
            </Card>

            <Card
              className={`p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-accent/50 group ${visibleSections.has("mission") ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "150ms" }}
            >
              <div className="relative mb-4 inline-block">
                <Eye className="w-12 h-12 text-primary mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl scale-0 group-hover:scale-150 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                {locale === "pt" ? "Visão" : locale === "es" ? "Visión" : locale === "ja" ? "ビジョン" : "Vision"}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {locale === "pt"
                  ? "Ser referência nacional em projetos sociais, reconhecida pela excelência e impacto transformador na sociedade."
                  : locale === "es"
                    ? "Ser referencia nacional en proyectos sociales, reconocida por la excelência e impacto transformador en la sociedad."
                    : locale === "ja"
                      ? "社会における卓越性と変革的影響により認識される社会プロジェクトの全国的な基準となる。"
                      : "Be a national reference in social projects, recognized for excellence and transformative impact on society."}
              </p>
            </Card>

            <Card
              className={`p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 group ${visibleSections.has("mission") ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: "300ms" }}
            >
              <div className="relative mb-4 inline-block">
                <Heart className="w-12 h-12 text-primary mx-auto group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-0 group-hover:scale-150 transition-transform duration-500" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {locale === "pt" ? "Valores" : locale === "es" ? "Valores" : locale === "ja" ? "価値観" : "Values"}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {locale === "pt"
                  ? "Amor, solidariedade, excelência, transparência, inclusão e respeito à dignidade humana."
                  : locale === "es"
                    ? "Amor, solidariedade, excelência, transparencia, inclusión y respeto a la dignidad humana."
                    : locale === "ja"
                      ? "愛、連帯、卓越性、透明性、包摂、人間の尊厳への尊重。"
                      : "Love, solidarity, excellence, transparency, inclusion and respect for human dignity."}
              </p>
            </Card>
          </div>

          <div data-animate id="values">
            <h2
              className={`text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center ${visibleSections.has("values") ? "animate-fade-in-up" : "opacity-0"}`}
            >
              {locale === "pt"
                ? "Nossos Valores em Ação"
                : locale === "es"
                  ? "Nuestros Valores en Acción"
                  : locale === "ja"
                    ? "行動する私たちの価値観"
                    : "Our Values in Action"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const content =
                  locale === "es" ? value.es : locale === "en" ? value.en : locale === "ja" ? value.ja : value.pt
                return (
                  <Card
                    key={index}
                    className={`p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 group relative overflow-hidden ${visibleSections.has("values") ? "animate-fade-in-up" : "opacity-0"}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="flex items-start gap-4 relative z-10">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-lg">
                        <value.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {content.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{content.description}</p>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 lg:py-24 bg-gradient-to-r from-primary to-accent text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float-delayed" />
        </div>
        <div className="absolute inset-0 bg-grid-white/[0.05] animate-grid-flow" />
        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-balance animate-fade-in-up">
            {locale === "pt"
              ? "Faça Parte da Nossa História"
              : locale === "es"
                ? "Sea Parte de Nuestra Historia"
                : locale === "ja"
                  ? "私たちの歴史の一部になる"
                  : "Be Part of Our Story"}
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/90 text-pretty animate-fade-in-up-delayed">
            {locale === "pt"
              ? "Junte-se a nós nessa missão de transformar vidas. Sua contribuição faz toda a diferença."
              : locale === "es"
                ? "Únase a nosotros en esta misión de transformar vidas. Su contribución hace toda la diferencia."
                : locale === "ja"
                  ? "人生を変えるこの使命に参加してください。あなたの貢献はすべての違いを生みます。"
                  : "Join us in this mission to transform lives. Your contribution makes all the difference."}
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="gap-2 group hover:scale-110 transition-transform duration-300 hover:shadow-2xl"
          >
            <Link href="/doacoes">
              {locale === "pt"
                ? "Contribuir Agora"
                : locale === "es"
                  ? "Contribuir Ahora"
                  : locale === "ja"
                    ? "今すぐ貢献する"
                    : "Contribute Now"}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
