"use client"

import { useState } from "react"
import { BookOpen, Palette, Users, Briefcase, Home } from "lucide-react"

interface GalleryOption {
  id: number
  icon: any
  main: string
  sub: string
  background: string
  defaultColor: string
}

export function CollapsibleGallery() {
  const [activeOption, setActiveOption] = useState(1)

  const optionsData: GalleryOption[] = [
    {
      id: 1,
      icon: BookOpen,
      main: "Educação",
      sub: "Transformando pelo saber",
      background: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educa%C3%A7%C3%A3o-xxD1AW7BMzItK9LP3vFbwbOgzuwdoM.jpg",
      defaultColor: "#0066CC",
    },
    {
      id: 2,
      icon: Palette,
      main: "Arte & Cultura",
      sub: "Expressão criativa",
      background: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/art-cultura-wEXbJeu9JvmPgz2zoWKRuormAPtacS.jpg",
      defaultColor: "#F25C78",
    },
    {
      id: 3,
      icon: Users,
      main: "Apoio Familiar",
      sub: "Fortalecendo laços",
      background: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Apoio-Familiar-tejO2hX8xxPqxoPpHbJRTpYcZIP6iH.jpg",
      defaultColor: "#10B981",
    },
    {
      id: 4,
      icon: Briefcase,
      main: "Profissionalização",
      sub: "Futuro com oportunidade",
      background: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profissionalizacao-mqBli3AQidj34vmXO81bsExF03rmI0.jpg",
      defaultColor: "#FF7A00",
    },
    {
      id: 5,
      icon: Home,
      main: "Acolhimento",
      sub: "Proteção e cuidado",
      background: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Acolhimento-awYI9H8xnmU8XGhoSjdQr8h067iEGE.jpg",
      defaultColor: "#8B5CF6",
    },
  ]

  const handleOptionClick = (id: number) => {
    setActiveOption(id)
  }

  return (
    <div className="relative w-full h-[350px] lg:h-[450px]">
      <div className="flex h-full gap-2">
        {optionsData.map((option) => {
          const Icon = option.icon
          const isActive = activeOption === option.id

          return (
            <div
              key={option.id}
              className={`relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-500 ease-in-out border-2 border-white/20 ${
                isActive ? "flex-[4]" : "flex-1"
              }`}
              style={{
                backgroundImage: `url(${option.background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onClick={() => handleOptionClick(option.id)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-500 ${
                  isActive
                    ? "from-black/80 via-black/50 to-black/20 opacity-100"
                    : "from-black/70 via-black/40 to-black/20 opacity-90"
                }`}
              />

              {/* Conteúdo */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 text-white z-10">
                <div
                  className={`transition-all duration-500 ${
                    isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: option.defaultColor }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-2 text-balance">{option.main}</h3>
                  <p className="text-lg text-white/90 font-medium">{option.sub}</p>
                </div>

                {/* Versão compacta para opções inativas */}
                <div className={`transition-all duration-500 ${!isActive ? "opacity-100" : "opacity-0"}`}>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: option.defaultColor }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Indicadores mobile */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2 lg:hidden">
        {optionsData.map((option) => (
          <button
            key={option.id}
            className={`w-2 h-2 rounded-full transition-all ${
              activeOption === option.id ? "bg-primary w-8" : "bg-muted-foreground/30"
            }`}
            onClick={() => handleOptionClick(option.id)}
          />
        ))}
      </div>
    </div>
  )
}
