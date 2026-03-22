import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Heart, Users, BookOpen, Briefcase, Home } from "lucide-react"

export const metadata: Metadata = {
  title: "Seja Voluntário | São Martinho",
  description:
    "Junte-se à equipe de voluntários da São Martinho e ajude a transformar vidas através de esporte, educação e inclusão social.",
}

export default function VoluntarioPage() {
  const transformationAreas = [
    { icon: Users, label: "Esporte" },
    { icon: BookOpen, label: "Educação" },
    { icon: Briefcase, label: "Inclusão Profissional" },
    { icon: Home, label: "Fortalecimento dos Vínculos Familiares" },
    { icon: Heart, label: "Vivência Espiritual" },
  ]

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance animate-fade-in-up">
              Voluntariado
            </h1>
            <p
              className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              A São Martinho é uma organização sem fins lucrativos, vinculada à Província Carmelitana de Santo Elias,
              criada em 1984 para promover e defender os direitos das crianças e jovens em situação de vulnerabilidade
              social na cidade do Rio de Janeiro.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transformamos vidas através de:</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            {transformationAreas.map((area, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <area.icon className="w-8 h-8 text-primary" />
                </div>
                <p className="font-semibold text-sm">{area.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/placeholder.svg"
                alt="Voluntários da São Martinho em diversas atividades - educação, meio ambiente, alimentação e manutenção"
                className="w-full h-auto"
              />
            </div>
            <p className="text-center text-muted-foreground mt-8 text-lg max-w-3xl mx-auto">
              Nossos voluntários atuam em diversas áreas: educação e cultura, meio ambiente, apoio nutricional e
              manutenção das unidades. Junte-se a nós e faça a diferença na vida de crianças e jovens!
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 lg:p-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Inscreva-se para ser Voluntário</h2>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome Completo *</Label>
                  <Input id="name" placeholder="Seu nome completo" required />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone *</Label>
                    <Input id="phone" type="tel" placeholder="(00) 00000-0000" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">Endereço Completo *</Label>
                  <Input id="address" placeholder="Rua, número, bairro, cidade, estado" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="education">Grau de Escolaridade *</Label>
                  <Input id="education" placeholder="Ex: Ensino Médio Completo" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="previous">Já foi voluntário? Onde?</Label>
                  <Input id="previous" placeholder="Descreva suas experiências anteriores" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest">Área de interesse?</Label>
                  <Input id="interest" placeholder="Ex: Educação, Esportes, Cultura" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="motivation">Por que você deseja ser voluntário? *</Label>
                  <Textarea
                    id="motivation"
                    placeholder="Conte-nos sua motivação para fazer parte da equipe São Martinho"
                    className="min-h-32"
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Enviar Inscrição
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
