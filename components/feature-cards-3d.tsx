"use client"

import type React from "react"

import { BookOpen, Sparkles, Users, Heart, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useRef, useState, useEffect } from "react"

interface Card {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  color: string
  href: string
}

const cards: Card[] = [
  {
    icon: BookOpen,
    title: "Educação",
    description: "Programas educacionais que preparam crianças e jovens para o futuro",
    color: "from-blue-500 to-cyan-500",
    href: "/projetos/educacao",
  },
  {
    icon: Sparkles,
    title: "Arte & Cultura",
    description: "Desenvolvimento através da arte, música e expressão cultural",
    color: "from-purple-500 to-pink-500",
    href: "/projetos/arte-cultura",
  },
  {
    icon: Users,
    title: "Apoio Familiar",
    description: "Assistência completa para famílias em situação de vulnerabilidade",
    color: "from-green-500 to-emerald-500",
    href: "/projetos/apoio-familias",
  },
  {
    icon: Heart,
    title: "Formação Profissional",
    description: "Capacitação profissional para inserção no mercado de trabalho",
    color: "from-orange-500 to-red-500",
    href: "/projetos/formacao-profissional",
  },
]

export function FeatureCards3D() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    const handleMouseMove = (e: globalThis.MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-container items-stretch"
    >
      {cards.map((card, index) => (
        <Card3D
          key={index}
          card={card}
          index={index}
          mousePosition={mousePosition}
          isHovered={hoveredCard === index}
          onHover={() => setHoveredCard(index)}
          onLeave={() => setHoveredCard(null)}
        />
      ))}
    </div>
  )
}

interface Card3DProps {
  card: Card
  index: number
  mousePosition: { x: number; y: number }
  isHovered: boolean
  onHover: () => void
  onLeave: () => void
}

function Card3D({ card, index, mousePosition, isHovered, onHover, onLeave }: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: 0, y: 0 })
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  useEffect(() => {
    // Generate random particles for floating effect
    const newParticles = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
    }))
    setParticles(newParticles)
  }, [])

  useEffect(() => {
    if (!cardRef.current || !isHovered) {
      setRotation({ x: 0, y: 0 })
      setPosition({ x: 0, y: 0 })
      return
    }

    const rect = cardRef.current.getBoundingClientRect()
    const cardCenterX = rect.left + rect.width / 2
    const cardCenterY = rect.top + rect.height / 2

    // Calculate magnetic pull effect
    const deltaX = mousePosition.x - (rect.left - cardRef.current.offsetParent!.getBoundingClientRect().left)
    const deltaY = mousePosition.y - (rect.top - cardRef.current.offsetParent!.getBoundingClientRect().top)

    // 3D rotation based on mouse position
    const rotateY = ((deltaX - rect.width / 2) / rect.width) * 20
    const rotateX = -((deltaY - rect.height / 2) / rect.height) * 20

    setRotation({ x: rotateX, y: rotateY })

    // Magnetic attraction
    const maxDistance = 200
    const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2)
    if (distance < maxDistance) {
      const strength = 1 - distance / maxDistance
      setPosition({
        x: (deltaX / rect.width - 0.5) * 15 * strength,
        y: (deltaY / rect.height - 0.5) * 15 * strength,
      })
    }
  }, [mousePosition, isHovered])

  const Icon = card.icon

  return (
    <Link href={card.href} className="h-full">
      <div
        ref={cardRef}
        className="relative card-3d-container h-full min-h-[320px]"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        style={{
          transform: `
            translate3d(${position.x}px, ${position.y}px, 0)
            rotateX(${rotation.x}deg)
            rotateY(${rotation.y}deg)
            translateZ(${isHovered ? "30px" : "0px"})
          `,
          transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
        }}
      >
        {/* Floating particles */}
        {isHovered &&
          particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-2 h-2 rounded-full bg-gradient-to-r pointer-events-none"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                animation: `float-particle 2s ease-in-out infinite`,
                animationDelay: `${particle.delay}s`,
                background: `linear-gradient(135deg, ${card.color.replace("from-", "rgb(var(--").replace(" to-", ") 0%, rgb(var(--").replace(")", ") 100%)")}`,
                opacity: 0.6,
              }}
            />
          ))}

        {/* Glow effect */}
        <div
          className={`absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 blur-2xl ${isHovered ? "opacity-30" : ""}`}
          style={{
            background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
          }}
        />

        {/* Main card */}
        <div
          className={`
            relative h-full flex flex-col bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800
            rounded-3xl p-8 shadow-xl overflow-hidden
            border-2 border-gray-200/50 dark:border-gray-700/50
            transition-all duration-500
            ${isHovered ? "shadow-2xl border-transparent" : ""}
          `}
        >
          {/* Animated gradient border */}
          <div
            className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${card.color} opacity-0 transition-opacity duration-500 ${isHovered ? "opacity-100" : ""}`}
            style={{
              padding: "2px",
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}
          />

          {/* Icon container with 3D effect */}
          <div
            className={`
              relative mb-6 w-20 h-20 rounded-2xl 
              bg-gradient-to-br ${card.color}
              flex items-center justify-center
              transition-all duration-500
              ${isHovered ? "scale-110 rotate-6" : "scale-100 rotate-0"}
            `}
            style={{
              boxShadow: isHovered ? `0 20px 40px -10px rgba(0,0,0,0.3)` : "0 10px 20px -5px rgba(0,0,0,0.2)",
              transform: isHovered ? `translateZ(40px) scale(1.1) rotate(6deg)` : "translateZ(0) scale(1) rotate(0deg)",
            }}
          >
            <Icon className="w-10 h-10 text-white" />

            {/* Icon glow */}
            {isHovered && <div className="absolute inset-0 rounded-2xl bg-white/20 animate-pulse" />}
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col">
            <h3
              className="text-2xl font-bold mb-3 transition-all duration-300"
              style={{
                transform: isHovered ? "translateZ(20px)" : "translateZ(0)",
              }}
            >
              {card.title}
            </h3>
            <p
              className="text-muted-foreground mb-6 leading-relaxed transition-all duration-300 flex-1"
              style={{
                transform: isHovered ? "translateZ(10px)" : "translateZ(0)",
              }}
            >
              {card.description}
            </p>
          </div>

          {/* CTA */}
          <div
            className={`
              inline-flex items-center gap-2 text-primary font-semibold
              transition-all duration-300
              ${isHovered ? "gap-3" : "gap-2"}
            `}
            style={{
              transform: isHovered ? "translateZ(30px)" : "translateZ(0)",
            }}
          >
            Saiba mais
            <ArrowRight
              className={`w-5 h-5 transition-transform duration-300 ${isHovered ? "translate-x-2" : "translate-x-0"}`}
            />
          </div>

          {/* Shine effect */}
          <div
            className={`
              absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
              transition-transform duration-700
              ${isHovered ? "translate-x-full" : "-translate-x-full"}
            `}
            style={{
              transform: isHovered ? "translateX(100%) skewX(-20deg)" : "translateX(-100%) skewX(-20deg)",
            }}
          />
        </div>
      </div>
    </Link>
  )
}
