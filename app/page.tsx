"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CounterAnimation } from "@/components/counter-animation"
import { HowToHelpSection } from "@/components/how-to-help-section"
import { TestimonialsGallery } from "@/components/testimonials-gallery"
import { ArrowRight, Heart, Users, BookOpen, Sparkles, Target, Lightbulb, TrendingUp } from "lucide-react"
import Link from "next/link"
import { useLocale } from "@/lib/locale-context"
import { getTranslations } from "@/lib/i18n"
import { CollapsibleGallery } from "@/components/collapsible-gallery"
import { FeatureCards3D } from "@/components/feature-cards-3d"

export default function Home() {
  const { locale } = useLocale()
  const t = getTranslations(locale)

  const projects = [
    {
      icon: BookOpen,
      title: locale === "pt" ? "Educação" : locale === "es" ? "Educación" : locale === "ja" ? "教育" : "Education",
      description:
        locale === "pt"
          ? "Programas educacionais que preparam crianças e jovens para o futuro"
          : locale === "es"
            ? "Programas educativos que preparan niños y jóvenes para el futuro"
            : locale === "ja"
              ? "子供と若者を未来に備えさせる教育プログラム"
              : "Educational programs that prepare children and youth for the future",
      color: "from-blue-500 to-cyan-500",
    },
    {
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
          ? "Desenvolvimento através da arte, música e expressão cultural"
          : locale === "es"
            ? "Desarrollo a través del arte, música y expresión cultural"
            : locale === "ja"
              ? "芸術、音楽、文化表現を通じた発展"
              : "Development through art, music and cultural expression",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      title:
        locale === "pt"
          ? "Apoio Familiar"
          : locale === "es"
            ? "Apoyo Familiar"
            : locale === "ja"
              ? "家族支援"
              : "Family Support",
      description:
        locale === "pt"
          ? "Assistência completa para famílias em situação de vulnerabilidade"
          : locale === "es"
            ? "Asistencia completa para familias en situación de vulnerabilidad"
            : locale === "ja"
              ? "脆弱な状況にある家族への完全な支援"
              : "Complete assistance for families in vulnerable situations",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Heart,
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
          ? "Capacitação profissional para inserção no mercado de trabalho"
          : locale === "es"
            ? "Capacitación profesional para inserción en el mercado laboral"
            : locale === "ja"
              ? "労働市場への参入のための専門的なトレーニング"
              : "Professional training for labor market insertion",
      color: "from-orange-500 to-red-500",
    },
  ]

  const pillars = [
    {
      icon: BookOpen,
      title: locale === "pt" ? "Educação" : "Education",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Sparkles,
      title: locale === "pt" ? "Esporte" : "Sports",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Target,
      title: locale === "pt" ? "Inclusão Profissional" : "Professional Inclusion",
      color: "text-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: Users,
      title: locale === "pt" ? "Vínculos Familiares" : "Family Bonds",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: Lightbulb,
      title: locale === "pt" ? "Vivência Espiritual" : "Spiritual Experience",
      color: "text-pink-600",
      bgColor: "bg-pink-50",
    },
  ]

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center pt-16 lg:pt-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-U7uZh4DZN4bUogmBi6qLClgwyuLvUB.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-6 animate-fade-in-up bg-accent text-accent-foreground hover:bg-accent/90 text-sm px-4 py-2">
              ✨ {locale === "pt" ? "Há mais de 39 anos transformando vidas!" : "Transforming lives for over 39 years!"}
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in-up text-balance leading-tight">
              <span className="text-gradient-primary">{t.hero.title}</span>
            </h1>
            <p
              className="text-lg lg:text-2xl text-muted-foreground mb-8 leading-relaxed text-pretty animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Button asChild size="lg" className="text-base gradient-accent hover-glow animate-pulse-glow group">
                <Link href="/doacoes" className="gap-2">
                  {t.hero.cta}
                  <Heart className="w-5 h-5 fill-current group-hover:animate-bounce-subtle" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base bg-background/80 backdrop-blur-sm hover:bg-background border-2 group"
              >
                <Link href="/projetos" className="gap-2">
                  {t.hero.ctaSecondary}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 gradient-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-10 left-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
              {locale === "pt" ? "📊 Nosso Impacto" : "📊 Our Impact"}
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold text-balance">
              {locale === "pt" ? "Mais de 4.000 crianças atendidas desde 2021" : t.impact.title}
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center hover-lift bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl lg:text-6xl font-bold mb-2">
                <CounterAnimation end={4000} suffix="+" />
              </div>
              <p className="text-primary-foreground/90 text-sm lg:text-base font-medium">
                {locale === "pt" ? "Crianças e jovens atendidos desde 2021" : t.impact.children}
              </p>
            </div>
            <div className="text-center hover-lift bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl lg:text-6xl font-bold mb-2">
                <CounterAnimation end={3600} suffix="+" />
              </div>
              <p className="text-primary-foreground/90 text-sm lg:text-base font-medium">
                {locale === "pt" ? "Jovens com 1º emprego desde 2021" : "Youth with first job since 2021"}
              </p>
            </div>
            <div className="text-center hover-lift bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl lg:text-6xl font-bold mb-2">
                <CounterAnimation end={45} suffix="+" />
              </div>
              <p className="text-primary-foreground/90 text-sm lg:text-base font-medium">
                {locale === "pt" ? "Empresas conveniadas" : "Partner companies"}
              </p>
            </div>
            <div className="text-center hover-lift bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl lg:text-6xl font-bold mb-2">
                <CounterAnimation end={2000} suffix="+" />
              </div>
              <p className="text-primary-foreground/90 text-sm lg:text-base font-medium">
                {locale === "pt" ? "Representações jurídicas desde 2021" : "Legal representations since 2021"}
              </p>
            </div>
            <div className="text-center hover-lift bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl lg:text-6xl font-bold mb-2">
                <CounterAnimation end={39} suffix="+" />
              </div>
              <p className="text-primary-foreground/90 text-sm lg:text-base font-medium">
                {locale === "pt" ? "Anos de experiência" : "Years of experience"}
              </p>
            </div>
            <div className="text-center hover-lift bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl lg:text-6xl font-bold mb-2">
                <CounterAnimation end={5} />
              </div>
              <p className="text-primary-foreground/90 text-sm lg:text-base font-medium">
                {locale === "pt" ? "Pilares de transformação" : "Transformation pillars"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              {locale === "pt"
                ? "Você pode transformar o futuro de uma criança hoje"
                : "You can transform a child's future today"}
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground mb-10 leading-relaxed">
              {locale === "pt"
                ? "Com uma pequena contribuição mensal, você ajuda a mudar vidas de verdade."
                : "With a small monthly contribution, you help change lives for real."}
            </p>
            <Button
              asChild
              size="lg"
              className="text-lg px-10 py-6 gradient-primary text-white hover-glow animate-pulse-glow"
            >
              <Link href="/doacoes" className="gap-3">
                <Heart className="w-6 h-6 fill-current" />
                {locale === "pt" ? "Doar agora" : "Donate now"}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              {locale === "pt" ? "💫 #Esperança" : "💫 #Hope"}
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gradient-primary">
              {locale === "pt" ? "Transformamos vidas através de:" : "We transform lives through:"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {locale === "pt"
                ? "Acreditamos no desenvolvimento integral de crianças e jovens como potência para a construção de uma sociedade mais justa, respeitosa, igualitária e acolhedora."
                : "We believe in the holistic development of children and youth as a driving force for building a more just, respectful, equal and welcoming society."}
            </p>
          </div>

          <div className="mb-16">
            <FeatureCards3D />
          </div>

          <div className="mt-16">
            <CollapsibleGallery />
          </div>

          <div className="text-center">
            <Button asChild size="lg" variant="default" className="gradient-primary text-white hover-glow my-7">
              <Link href="/quem-somos">
                {locale === "pt" ? "Saiba Mais Sobre Nós" : "Learn More About Us"}
                <TrendingUp className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              {locale === "pt" ? "Impacto que transforma vidas" : "Impact that transforms lives"}
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center">
              <div className="mb-6 inline-block">
                <div className="text-6xl lg:text-7xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  12
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-primary mt-2">
                  {locale === "pt" ? "mil+" : "thousand+"}
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {locale === "pt"
                  ? "Crianças e jovens atendidos"
                  : "Children and youth served"}
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 inline-block">
                <div className="text-6xl lg:text-7xl font-black bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                  30+
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-secondary mt-2">
                  {locale === "pt" ? "anos" : "years"}
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {locale === "pt"
                  ? "De atuação transformadora"
                  : "Of transformative work"}
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6 inline-block">
                <div className="text-6xl lg:text-7xl font-black bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  ∞
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-accent mt-2">
                  {locale === "pt" ? "comunidades" : "communities"}
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {locale === "pt"
                  ? "Dezenas impactadas"
                  : "Dozens impacted"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background my-[-20px]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-in-left">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                  {locale === "pt" ? "Quem Somos" : "Who We Are"}
                </h2>
              </div>
              <div className="space-y-4">
                <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
                  {locale === "pt"
                    ? "Criada por um grupo de voluntários sensibilizado com a situação degradante de milhares de crianças e jovens, especialmente daquelas que viviam nas ruas do Rio de Janeiro, a São Martinho buscou ao longo dos anos empenhar esforços para a melhoria de suas estratégias e metodologia de atuação."
                    : "Created by a group of volunteers concerned about the plight of thousands of children and youth, especially those living on the streets of Rio de Janeiro, São Martinho has worked over the years to improve its strategies and methodology."}
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed text-pretty">
                  {locale === "pt"
                    ? "Nossa missão é contribuir para o desenvolvimento integral e para a garantia dos direitos de crianças e jovens em situação de vulnerabilidade social."
                    : "Our mission is to contribute to the integral development and guarantee the rights of children and youth in situations of social vulnerability."}
                </p>
                <Button size="lg" className="mt-6 shadow-lg hover:shadow-xl transition-all" asChild>
                  <Link href="/contato">{locale === "pt" ? "Entre em Contato" : "Contact Us"}</Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 animate-slide-in-right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square hover-lift">
                <img src="/sao-martinho-boys-lapa.jpg" alt="São Martinho" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="text-sm font-semibold mb-1">
                    {locale === "pt" ? "Faça parte desta" : "Be part of this"}
                  </p>
                  <h3 className="text-2xl font-bold">{locale === "pt" ? "Transformação" : "Transformation"}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96 lg:h-full lg:min-h-96 group">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Mar%2021%2C%202026%2C%2007_46_45%20PM-9kdimqXqjzk0rnbE9YTdVXQjPzDlbw.png"
                alt="Maria, ex-aluna da São Martinho"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <div className="flex flex-col justify-center space-y-8">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                  {locale === "pt" ? "Histórias Reais" : "Real Stories"}
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 text-balance">
                  {locale === "pt"
                    ? "A São Martinho mudou minha vida"
                    : "São Martinho changed my life"}
                </h2>
              </div>

              <blockquote className="relative">
                <div className="absolute -left-4 -top-2 text-6xl text-primary/20 font-bold">"</div>
                <p className="text-lg lg:text-2xl text-foreground font-medium leading-relaxed pl-6 py-4 border-l-4 border-primary">
                  {locale === "pt"
                    ? "A São Martinho mudou minha vida. Hoje tenho educação, oportunidades e esperança no futuro."
                    : "São Martinho changed my life. Today I have education, opportunities and hope for the future."}
                </p>
              </blockquote>

              <div>
                <p className="text-lg font-semibold text-foreground">
                  {locale === "pt" ? "— Maria, ex-aluna" : "— Maria, former student"}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  {locale === "pt"
                    ? "Participante do programa de educação há 5 anos"
                    : "Education program participant for 5 years"}
                </p>
              </div>

              <Button
                asChild
                size="lg"
                className="w-fit text-lg px-8 shadow-lg hover:shadow-xl transition-all"
              >
                <Link href="/contato" className="gap-2">
                  {locale === "pt" ? "Conheça Mais Histórias" : "Read More Stories"}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <HowToHelpSection />
      <TestimonialsGallery />

      <section className="py-20 lg:py-32 gradient-warm text-primary-foreground relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        />

        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30 text-base px-6 py-2">
            💝 {locale === "pt" ? "Doe Agora" : "Donate Now"}
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-balance animate-fade-in-up">
            {locale === "pt"
              ? "Faça Parte Dessa Transformação"
              : locale === "es"
                ? "Sea Parte de Esta Transformación"
                : locale === "ja"
                  ? "この変革の一部になる"
                  : "Be Part of This Transformation"}
          </h2>
          <p
            className="text-xl lg:text-2xl mb-10 max-w-3xl mx-auto text-primary-foreground/95 text-pretty leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            {locale === "pt"
              ? "Sua contribuição pode mudar a vida de uma criança e de uma família inteira. Juntos, podemos construir um futuro melhor para todos."
              : "Your contribution can change the life of a child and an entire family. Together, we can build a better future for all."}
          </p>

          <div
            className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            {[30, 50, 100].map((amount) => (
              <Button
                key={amount}
                asChild
                size="lg"
                variant="secondary"
                className="text-lg px-8 hover-lift bg-white text-primary hover:bg-white/90"
              >
                <Link href="/doacoes">R$ {amount},00</Link>
              </Button>
            ))}
          </div>

          <Button
            asChild
            size="lg"
            variant="secondary"
            className="text-lg px-10 py-6 hover-glow bg-white text-primary hover:bg-white/90 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Link href="/doacoes" className="gap-3">
              <Heart className="w-6 h-6 fill-current animate-bounce-subtle" />
              {locale === "pt" ? "Quero Doar Agora" : t.hero.cta}
              <ArrowRight className="w-6 h-6" />
            </Link>
          </Button>

          <p className="mt-8 text-primary-foreground/80 text-sm">
            {locale === "pt"
              ? "🔒 Doação 100% segura via PIX ou PagSeguro"
              : "🔒 100% secure donation via PIX or PagSeguro"}
          </p>
        </div>
      </section>
    </div>
  )
}
