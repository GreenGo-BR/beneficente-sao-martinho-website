"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Shield, Users, TrendingUp, Award, Heart, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLocale } from "@/lib/locale-context"
import { useEffect, useState, useRef } from "react"

export default function ReliableDonationsPage() {
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

  const trustFactors = [
    {
      icon: Award,
      pt: {
        title: "Certificação Oficial",
        description:
          "Somos uma organização legal certificada pelo governo. Nossas atividades são auditadas anualmente e publicamente disponíveis. Transparência é nossa prioridade.",
      },
      es: {
        title: "Certificación Oficial",
        description:
          "Somos una organización legal certificada por el gobierno. Nuestras actividades son auditadas anualmente y están disponibles públicamente. La transparencia es nuestra prioridad.",
      },
      en: {
        title: "Official Certification",
        description:
          "We are a legal organization certified by the government. Our activities are audited annually and publicly available. Transparency is our priority.",
      },
      ja: {
        title: "公式認定",
        description:
          "政府が認定した合法的な組織です。私たちの活動は毎年監査され、公開されています。透明性が私たちの優先事項です。",
      },
    },
    {
      icon: TrendingUp,
      pt: {
        title: "100% para Programas",
        description:
          "Seu dinheiro vai 100% direto para crianças e famílias. Não há despesas administrativas altas ou intermediários. Cada real faz a diferença.",
      },
      es: {
        title: "100% para Programas",
        description:
          "Su dinero va 100% directamente a niños y familias. No hay gastos administrativos altos ni intermediarios. Cada real marca la diferencia.",
      },
      en: {
        title: "100% Goes to Programs",
        description:
          "Your money goes 100% directly to children and families. No high administrative costs or middlemen. Every real makes a difference.",
      },
      ja: {
        title: "プログラムに100％",
        description:
          "あなたのお金は100％直接子供と家族に使われます。高い管理費や仲介者はありません。すべての実績が違いを生み出します。",
      },
    },
    {
      icon: Users,
      pt: {
        title: "39 Anos de Histórico",
        description:
          "Desde 1990, trabalhamos na mesma comunidade. Milhares de crianças se formaram, entraram no mercado de trabalho, construíram famílias. O resultado é visível e duradouro.",
      },
      es: {
        title: "39 Años de Historial",
        description:
          "Desde 1990, trabajamos en la misma comunidad. Miles de niños se graduaron, ingresaron al mercado laboral, construyeron familias. El resultado es visible y duradero.",
      },
      en: {
        title: "39 Years of Track Record",
        description:
          "Since 1990, we've worked in the same community. Thousands of children graduated, entered the job market, built families. The result is visible and lasting.",
      },
      ja: {
        title: "39年の実績",
        description:
          "1990年以来、私たちは同じコミュニティで働いています。何千人もの子供が卒業し、労働市場に入り、家族を作りました。結果は目に見える形で長く続いています。",
      },
    },
  ]

  const redFlags = [
    {
      pt: "Organizações sem certificação legal ou registro oficial",
      es: "Organizaciones sin certificación legal o registro oficial",
      en: "Organizations without legal certification or official registration",
      ja: "法的認定または公式登録のない組織",
    },
    {
      pt: "Promessas de retorno financeiro em troca de doação",
      es: "Promesas de retorno financiero a cambio de donación",
      en: "Promises of financial returns in exchange for donations",
      ja: "寄付と引き換えに財務リターンの約束",
    },
    {
      pt: "Falta de transparência em relatórios financeiros",
      es: "Falta de transparencia en informes financieros",
      en: "Lack of transparency in financial reports",
      ja: "財務報告書の透明性の欠如",
    },
    {
      pt: "Pressão para doações rápidas sem tempo para pesquisa",
      es: "Presión para donaciones rápidas sin tiempo para investigación",
      en: "Pressure for quick donations without time to research",
      ja: "調査の時間がない中での寄付の圧力",
    },
    {
      pt: "Sem website ou presença online verificável",
      es: "Sin sitio web o presencia en línea verificable",
      en: "No website or verifiable online presence",
      ja: "ウェブサイトや検証可能なオンラインプレゼンスなし",
    },
    {
      pt: "Referências não disponíveis ou que não respondem",
      es: "Referencias no disponibles o que no responden",
      en: "References not available or do not respond",
      ja: "利用不可または返信しない参考資料",
    },
  ]

  const checkPoints = [
    {
      pt: "Verifique a Certificação",
      es: "Verificar la Certificación",
      en: "Verify Certification",
      ja: "認定を確認",
    },
    {
      pt: "Pesquise o Histórico",
      es: "Investigue el Historial",
      en: "Research Track Record",
      ja: "実績を調査",
    },
    {
      pt: "Leia Relatórios Financeiros",
      es: "Leer Informes Financieros",
      en: "Read Financial Reports",
      ja: "財務報告書を読む",
    },
    {
      pt: "Verifique Testemunhas",
      es: "Verifique Testimonios",
      en: "Check Testimonials",
      ja: "証言を確認",
    },
    {
      pt: "Faça Perguntas",
      es: "Haga Preguntas",
      en: "Ask Questions",
      ja: "質問をする",
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
                ? "Como Fazer Doações para Projetos Sociais Confiáveis?"
                : locale === "es"
                  ? "¿Cómo Hacer Donaciones a Proyectos Sociales Confiables?"
                  : locale === "ja"
                    ? "信頼できる社会プロジェクトに寄付する方法は？"
                    : "How to Make Donations to Reliable Social Projects?"}
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty">
              {locale === "pt"
                ? "Antes de fazer uma doação, é essencial verificar se a organização é confiável. Este guia ajuda você a identificar projetos sociais legítimos e fazer uma diferença real com seu dinheiro."
                : locale === "es"
                  ? "Antes de hacer una donación, es esencial verificar si la organización es confiable. Esta guía le ayuda a identificar proyectos sociales legítimos y marcar una diferencia real con su dinero."
                  : locale === "ja"
                    ? "寄付をする前に、組織が信頼できるかどうかを確認することが不可欠です。このガイドは、合法的な社会プロジェクトを特定し、お金で本当の違いを作るのに役立ちます。"
                    : "Before making a donation, it's essential to verify that the organization is trustworthy. This guide helps you identify legitimate social projects and make a real difference with your money."}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto" data-animate id="trust-factors">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
              {locale === "pt"
                ? "Sinais de Confiabilidade"
                : locale === "es"
                  ? "Señales de Confiabilidad"
                  : locale === "ja"
                    ? "信頼性の兆候"
                    : "Signs of Reliability"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {trustFactors.map((factor, index) => {
                const content =
                  locale === "es"
                    ? factor.es
                    : locale === "en"
                      ? factor.en
                      : locale === "ja"
                        ? factor.ja
                        : factor.pt
                const Icon = factor.icon
                return (
                  <Card
                    key={index}
                    className={`p-8 hover:shadow-lg transition-all duration-500 group ${
                      visibleSections.has("trust-factors") ? "animate-fade-in-up" : "opacity-0"
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

      <section className="py-16 lg:py-24 bg-red-50 dark:bg-red-950/20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto" data-animate id="red-flags">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-center">
              {locale === "pt"
                ? "🚩 Bandeiras Vermelhas - O Que Evitar"
                : locale === "es"
                  ? "🚩 Banderas Rojas - Qué Evitar"
                  : locale === "ja"
                    ? "🚩赤い旗 - 避けるべきこと"
                    : "🚩 Red Flags - What to Avoid"}
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              {locale === "pt"
                ? "Se encontrar qualquer um desses sinais, desconfe:"
                : locale === "es"
                  ? "Si encuentra alguno de estos signos, desconfíe:"
                  : locale === "ja"
                    ? "これらの兆候のいずれかが見られたら、注意してください："
                    : "If you find any of these signs, be cautious:"}
            </p>

            <div className="space-y-4">
              {redFlags.map((flag, index) => {
                const content =
                  locale === "es"
                    ? flag.es
                    : locale === "en"
                      ? flag.en
                      : locale === "ja"
                        ? flag.ja
                        : flag.pt
                return (
                  <Card
                    key={index}
                    className={`p-4 border-l-4 border-l-red-500 hover:shadow-lg transition-all ${
                      visibleSections.has("red-flags") ? "animate-fade-in-up" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${index * 75}ms` }}
                  >
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <p className="text-foreground font-medium">{content}</p>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto" data-animate id="checklist">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-12 text-center">
              {locale === "pt"
                ? "Checklist Antes de Doar"
                : locale === "es"
                  ? "Lista de Verificación Antes de Donar"
                  : locale === "ja"
                    ? "寄付する前のチェックリスト"
                    : "Checklist Before Donating"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {checkPoints.map((point, index) => {
                const content =
                  locale === "es"
                    ? point.es
                    : locale === "en"
                      ? point.en
                      : locale === "ja"
                        ? point.ja
                        : point.pt
                return (
                  <Card
                    key={index}
                    className={`p-6 hover:shadow-lg transition-all ${
                      visibleSections.has("checklist") ? "animate-fade-in-up" : "opacity-0"
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-4">
                      <CheckCircle className="w-8 h-8 text-primary flex-shrink-0" />
                      <h3 className="text-lg font-bold text-foreground">{content}</h3>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto" data-animate id="our-transparency">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 lg:p-12 text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                {locale === "pt"
                  ? "Instituto São Martinho é Confiável"
                  : locale === "es"
                    ? "Instituto São Martinho es Confiable"
                    : locale === "ja"
                      ? "サンマルティーニョ研究所は信頼できます"
                      : "São Martinho Institute is Trustworthy"}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                {locale === "pt"
                  ? "✓ Certificado legalmente desde 1990\n✓ Relatórios financeiros públicos anuais\n✓ 100% do dinheiro para programas\n✓ Milhares de crianças beneficiadas\n✓ Auditoria independente anual"
                  : locale === "es"
                    ? "✓ Certificado legalmente desde 1990\n✓ Informes financieros públicos anuales\n✓ 100% del dinero para programas\n✓ Miles de niños beneficiados\n✓ Auditoría independiente anual"
                    : locale === "ja"
                      ? "✓1990年以来、法的に認定\n✓年次公開財務報告\n✓プログラムへの100％のお金\n✓数千人の子供の恩恵\n✓年次独立監査"
                      : "✓ Legally certified since 1990\n✓ Annual public financial reports\n✓ 100% of money goes to programs\n✓ Thousands of children benefited\n✓ Annual independent audit"}
              </p>
              <Link href="/doacoes">
                <Button size="lg" className="w-full sm:w-auto">
                  {locale === "pt"
                    ? "Fazer uma Doação Confiável"
                    : locale === "es"
                      ? "Hacer una Donación Confiable"
                      : locale === "ja"
                        ? "安心して寄付する"
                        : "Make a Trustworthy Donation"}
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
