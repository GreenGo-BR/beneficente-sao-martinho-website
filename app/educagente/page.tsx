import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Educagente | São Martinho",
  description:
    "Unidade de proteção básica em Vicente de Carvalho com atividades culturais, esportivas e educativas para crianças e jovens.",
}

export default function EducagentePage() {
  const programs = [
    {
      title: "Centro de Música - Musicalidade",
      description:
        "Atividades de musicalização com canto, violão, cavaquinho, percussão e prática de conjunto. Proporciona crescimento pessoal através do contato com música, ritmos e harmonia grupal.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Centro.de.M%C3%BAsica.JPG-I4FMI7Kmnh7VMO1yLUEQDaQD6UyyA2.jpeg",
    },
    {
      title: "Gastronomia Educativa",
      description:
        "Alimentação alternativa baseada no aproveitamento integral dos alimentos e redução do desperdício. Permite criar um cardápio variado, com qualidade e de baixo custo.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Gastronomia.Educativa-0IXOAvq2sQf6rCx1RzqUEZKEyBsO4d.jpg",
    },
    {
      title: "Judô",
      description:
        "Oportunidade de desenvolver aptidões para o esporte utilizando a luta como ferramenta de inclusão social, aproveitando o tempo com prática esportiva, cultura e educativa.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jud%C3%B4.JPG-99Jo3zBF2wAgc4PJlgMrHKIT5gjEzU.jpeg",
    },
    {
      title: "Educação Ambiental",
      description:
        "Desperta o interesse pela produção de hortaliças e legumes para consumo dos atendidos e seus familiares, além de gerar renda com a produção excedente.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educa%C3%A7%C3%A3o%20Ambiental-dPVjVhmrhaXApnLIWydkq2fHPjXWSD.jpeg",
    },
    {
      title: "Capoeira",
      description:
        "A Capoeira como prática esportiva e instrumento de socialização, autoestima e manifestação cultural.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/capoeira-01-fYoYGpa0YcPKjmOf1VCN5jxlmBrkGw.webp",
    },
    {
      title: "Esportes Coletivos",
      description:
        "Desenvolve conhecimento sobre modalidades esportivas coletivas, favorecendo o desenvolvimento físico-motor e trabalho em equipe.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Esportes.Coletivos-AzMMk6LdnlXVRBm12CZ8wWLKOTErDw.jpg",
    },
    {
      title: "Informática",
      description: "Desenvolve conhecimento tecnológico e capacitação profissional para o mercado de trabalho.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inform%C3%A1tica-06.JPG-iWKv33f4KpeNBKYMo8Fl2WcSNxC6QO.jpeg",
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-background to-primary/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance animate-fade-in-up">
              Educagente
            </h1>
            <p
              className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              O Educagente é uma unidade de proteção básica localizada no bairro de Vicente de Carvalho. Tem por
              objetivo prevenir as situações de vulnerabilidade e risco social, através do desenvolvimento de
              potencialidades e aquisições, do fortalecimento do vínculo familiar e comunitário e o acesso aos direitos
              de cidadania.
            </p>
            <p className="text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              É referência no atendimento à infância e juventude e possui ações voltadas à área da cultura, educação,
              esporte e lazer.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Programas Oferecidos</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Conhecendo os programas que transformam vidas</p>
          <div className="space-y-8">
            {/* Featured first program */}
            <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group bg-white border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-0 h-full">
                <div className="relative h-72 md:h-96 overflow-hidden">
                  <Image
                    src={programs[0].image || "/placeholder.svg"}
                    alt={programs[0].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center bg-gradient-to-br from-slate-50 to-blue-50/30">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 leading-tight">
                    {programs[0].title}
                  </h3>
                  <p className="text-gray-700 mb-8 leading-relaxed text-base">{programs[0].description}</p>
                  <Button asChild className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 px-8 rounded-lg transition-all">
                    <Link href="/doacoes">Apoiar este programa</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Remaining programs in 2-column grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {programs.slice(1).map((program, index) => (
                <div
                  key={index + 1}
                  className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group bg-white border border-gray-100"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={program.image || "/placeholder.svg"}
                      alt={program.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <h3 className="absolute bottom-4 left-4 right-4 text-xl md:text-2xl font-bold text-white text-balance leading-tight">
                      {program.title}
                    </h3>
                  </div>
                  <div className="p-6 bg-white">
                    <p className="text-gray-700 mb-6 leading-relaxed">{program.description}</p>
                    <Button asChild variant="outline" className="w-full border-gray-300 text-gray-900 hover:bg-gray-50 font-medium">
                      <Link href="/doacoes">Apoiar este programa</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Entre em Contato</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a
                  href="mailto:educagente@saomartinho.org.br"
                  className="text-sm text-muted-foreground hover:text-accent"
                >
                  educagente@saomartinho.org.br
                </a>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Telefone</h3>
                <a href="tel:+552130948300" className="text-sm text-muted-foreground hover:text-accent">
                  (21) 3094-8300
                </a>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Endereço</h3>
                <p className="text-sm text-muted-foreground">
                  Rua Riachuelo, 7, Lapa
                  <br />
                  CEP: 20021-260 - RJ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
