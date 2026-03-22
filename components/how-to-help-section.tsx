"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Users, Handshake, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { useLocale } from "@/lib/locale-context"
import { useRef, useState } from "react"

export function HowToHelpSection() {
  const { locale } = useLocale()

  const ways = [
    {
      icon: Heart,
      title:
        locale === "pt"
          ? "Faça uma Doação"
          : locale === "es"
            ? "Haga una Donación"
            : locale === "ja"
              ? "寄付をする"
              : "Make a Donation",
      description:
        locale === "pt"
          ? "Contribua com qualquer valor e ajude a transformar vidas"
          : locale === "es"
            ? "Contribuya con cualquier valor y ayude a transformar vidas"
            : locale === "ja"
              ? "どんな金額でも貢献して、人生を変えるのを助けてください"
              : "Contribute any amount and help transform lives",
      href: "/doacoes",
      gradient: "from-blue-500 to-blue-600",
      glowColor: "rgba(59, 130, 246, 0.5)",
    },
    {
      icon: Users,
      title:
        locale === "pt"
          ? "Seja Voluntário"
          : locale === "es"
            ? "Sea Voluntario"
            : locale === "ja"
              ? "ボランティアになる"
              : "Be a Volunteer",
      description:
        locale === "pt"
          ? "Doe seu tempo e talento para nossa causa"
          : locale === "es"
            ? "Done su tiempo y talento a nuestra causa"
            : locale === "ja"
              ? "あなたの時間と才能を私たちの大義に捧げてください"
              : "Donate your time and talent to our cause",
      href: "/contato",
      gradient: "from-purple-500 to-pink-500",
      glowColor: "rgba(168, 85, 247, 0.5)",
    },
    {
      icon: Handshake,
      title:
        locale === "pt"
          ? "Parcerias"
          : locale === "es"
            ? "Asociaciones"
            : locale === "ja"
              ? "パートナーシップ"
              : "Partnerships",
      description:
        locale === "pt"
          ? "Empresas que querem fazer a diferença"
          : locale === "es"
            ? "Empresas que quieren hacer la diferencia"
            : locale === "ja"
              ? "違いを生みたい企業"
              : "Companies that want to make a difference",
      href: "/contato",
      gradient: "from-pink-500 to-rose-500",
      glowColor: "rgba(236, 72, 153, 0.5)",
    },
  ]

  return (
    <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(17,24,39,0.8),transparent_50%)]" />
        <div className="absolute inset-0 bg-grid-pattern animate-grid-flow" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            {locale === "pt"
              ? "Como Você Pode Ajudar"
              : locale === "es"
                ? "Cómo Puede Ayudar"
                : locale === "ja"
                  ? "どのように助けられるか"
                  : "How You Can Help"}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {locale === "pt"
              ? "Existem várias formas de apoiar nosso trabalho e fazer a diferença na vida de milhares de pessoas"
              : locale === "es"
                ? "Hay varias formas de apoyar nuestro trabajo y marcar la diferencia en la vida de miles de personas"
                : locale === "ja"
                  ? "私たちの仕事を支援し、何千人もの人々の生活に変化をもたらす方法はいくつかあります"
                  : "There are several ways to support our work and make a difference in the lives of thousands of people"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {ways.map((way, index) => (
            <HelpCard key={index} way={way} index={index} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  )
}

function HelpCard({ way, index, locale }: { way: any; index: number; locale: string }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateXValue = ((y - centerY) / centerY) * -10
    const rotateYValue = ((x - centerX) / centerX) * 10

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setIsHovered(false)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative h-full"
      style={{
        perspective: "1000px",
        animationDelay: `${index * 100}ms`,
      }}
    >
      <Card
        className="relative p-6 lg:p-8 h-full flex flex-col group overflow-hidden border-2 transition-all duration-500"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${isHovered ? "20px" : "0px"})`,
          transformStyle: "preserve-3d",
          boxShadow: isHovered
            ? `0 25px 50px -12px ${way.glowColor}, 0 0 0 1px rgba(255,255,255,0.1)`
            : "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${way.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
        />

        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
            backgroundSize: "200% 200%",
            animation: isHovered ? "shine 2s infinite" : "none",
          }}
        />

        {isHovered && (
          <>
            <Sparkles className="absolute top-4 right-4 w-4 h-4 text-primary animate-pulse" />
            <Sparkles className="absolute bottom-8 left-6 w-3 h-3 text-primary animate-pulse delay-300" />
          </>
        )}

        <div
          className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${way.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 shadow-lg`}
          style={{
            transform: `translateZ(${isHovered ? "40px" : "20px"})`,
            boxShadow: isHovered ? `0 0 30px ${way.glowColor}` : "none",
          }}
        >
          <way.icon className="w-7 h-7 text-white" />

          <div
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `conic-gradient(from 0deg, transparent, ${way.glowColor}, transparent 50%)`,
              animation: isHovered ? "rotate 3s linear infinite" : "none",
            }}
          />
        </div>

        <h3
          className="text-xl font-semibold text-foreground mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-primary/70 transition-all duration-300"
          style={{ transform: `translateZ(${isHovered ? "30px" : "10px"})` }}
        >
          {way.title}
        </h3>

        <p
          className="text-muted-foreground mb-6 leading-relaxed flex-grow"
          style={{ transform: `translateZ(${isHovered ? "20px" : "5px"})` }}
        >
          {way.description}
        </p>

        <Button
          asChild
          variant="ghost"
          className="group/btn p-0 h-auto relative z-10"
          style={{ transform: `translateZ(${isHovered ? "25px" : "10px"})` }}
        >
          <Link href={way.href} className="inline-flex items-center gap-2 text-primary font-medium">
            {locale === "pt"
              ? "Saiba mais"
              : locale === "es"
                ? "Sepa más"
                : locale === "ja"
                  ? "詳細を見る"
                  : "Learn more"}
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </Card>
    </div>
  )
}
