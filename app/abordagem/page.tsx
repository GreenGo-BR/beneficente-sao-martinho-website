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
      image: "/capoeira-practice-lapa.jpg",
    },
    {
      title: "Esportes Coletivos",
      description:
        "Busca desenvolver conhecimento acerca das modalidades esportivas coletivas, favorecendo o desenvolvimento físico-motor e o trabalho em equipe.",
      image: "/team-sports-basketball-community-lapa.png",
    },
    {
      title: "Teatro",
      description: "Busca desenvolver expressão, ganhar confiança e descobrir novas possibilidades.",
      image: "/theater-class-children-performance.png",
    },
    {
      title: "Informática",
      description: "Busca desenvolver conhecimento tecnológico e capacitação profissional.",
      image: "/computer-class-instructor-helping-students.png",
    },
    {
      title: "Contação de História",
      description: "Busca desenvolver a criatividade e o entendimento lúdico com foco em leitura em grupo.",
      image: "/storytelling-children-listening-engaged.png",
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
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={activity.image || "/placeholder.svg"}
                    alt={`${activity.title} - Atividade e projeto social com crianças do Instituto São Martinho`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{activity.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">{activity.description}</p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/doacoes">Doar para este projeto</Link>
                  </Button>
                </div>
              </Card>
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
