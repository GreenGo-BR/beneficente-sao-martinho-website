import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Abordagem | São Martinho",
  description:
    "Unidade de proteção básica localizada no bairro da Lapa focada em prevenir situações de vulnerabilidade através de cultura, educação, esporte e lazer.",
}

export default function AbordagemPage() {
  const activities = [
    {
      title: "Capoeira",
      description:
        "A Capoeira como prática esportiva e, também, como instrumento de socialização, de autoestima e de manifestação cultural.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/capoeira-01-fYoYGpa0YcPKjmOf1VCN5jxlmBrkGw.webp",
    },
    {
      title: "Esportes Coletivos",
      description:
        "Busca desenvolver conhecimento acerca das modalidades esportivas coletivas, favorecendo o desenvolvimento físico-motor e o trabalho em equipe.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Esportes.Coletivos-AzMMk6LdnlXVRBm12CZ8wWLKOTErDw.jpg",
    },
    {
      title: "Teatro",
      description: "Busca desenvolver expressão, ganhar confiança e descobrir novas possibilidades.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educa%C3%A7%C3%A3o%20Ambiental-dPVjVhmrhaXApnLIWydkq2fHPjXWSD.jpeg",
    },
    {
      title: "Informática",
      description: "Busca desenvolver conhecimento tecnológico e capacitação profissional.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inform%C3%A1tica-06.JPG-iWKv33f4KpeNBKYMo8Fl2WcSNxC6QO.jpeg",
    },
    {
      title: "Contação de História",
      description: "Busca desenvolver a criatividade e o entendimento lúdico com foco em leitura em grupo.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Centro.de.M%C3%BAsica.JPG-I4FMI7Kmnh7VMO1yLUEQDaQD6UyyA2.jpeg",
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance animate-fade-in-up">
              Abordagem
            </h1>
            <p
              className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              É uma unidade de proteção básica localizada no bairro da Lapa. O objetivo é prevenir as situações de
              vulnerabilidade e risco social, através do desenvolvimento de potencialidades e aquisições, do
              fortalecimento do vínculo familiar e comunitário e o acesso aos direitos de cidadania.
            </p>
            <p className="text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              É referência no atendimento à infância e juventude e possui ações voltadas à área da cultura, educação,
              esporte e lazer.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Atividades Oferecidas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="group rounded-xl lg:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 flex flex-col h-full bg-background"
              >
                {/* Imagem com overlay */}
                <div className="relative h-56 lg:h-64 overflow-hidden">
                  <Image
                    src={activity.image || "/placeholder.svg"}
                    alt={activity.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  {/* Título sobre a imagem */}
                  <h3 className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 text-2xl lg:text-3xl font-bold text-white">
                    {activity.title}
                  </h3>
                </div>

                {/* Conteúdo do card */}
                <div className="flex-1 p-6 lg:p-8 flex flex-col">
                  <p className="text-muted-foreground mb-6 flex-1 leading-relaxed">
                    {activity.description}
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/doacoes" className="group/btn">
                      Doar para este projeto
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Entre em Contato</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <a
                  href="mailto:associacaosaomartinho@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  associacaosaomartinho@gmail.com
                </a>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Telefone</h3>
                <a href="tel:+552130948300" className="text-sm text-muted-foreground hover:text-primary">
                  (21) 3094-8300
                </a>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
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
