"use client"

import { useLocale } from "@/lib/locale-context"
import { getTranslations } from "@/lib/i18n"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MapPin, Phone, Building2, Users, Heart, Briefcase } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function UnidadesPage() {
  const { locale } = useLocale()
  const t = getTranslations(locale)

  const units = [
    {
      name: "Centro Socioeducativo",
      icon: Building2,
      image: "/centro-socioeducativo-real-building-sao-martinho.png",
      services: "Atendimento psicológico, jurídico, pedagógico e social",
      activities:
        "Pedagógicas, recreativas (esportes e capoeira), socioculturais (artes, teatro e informática) e cursos para a educação profissional",
      address: "Rua Riachuelo, 7 Lapa CEP: 20.230-010 - Lapa",
      phone: "2156-6533 / 21566530",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Núcleo Comunitário Educagente",
      icon: Users,
      image: "/nucleo-comunitario-educagente-real-building.png",
      services: "Atendimento psicológico, pedagógico e social",
      activities:
        "Judô e capoeira, artes, informática, educação ambiental, gastronomia educativa, centro de música, cidadania e cursos para educação profissional",
      address: "Rua Soldado Bernadino da Silva, 144.",
      phone: "(21) 2481-4619",
      color: "from-orange-500 to-orange-600",
    },
    {
      name: "Desenvolvimento Institucional",
      icon: Heart,
      image: "/desenvolvimento-institucional-real-entrance.jpg",
      services: "Central de doações",
      activities:
        "Telemarketing, Comunicação, Captação de Recursos, Relacionamento com Empresas, Gestão de Voluntariado e Eventos",
      address: "Rua Moraes e Vale, 111 - Térreo CEP: 20.021-260 - Centro",
      phone: "(21) 3094-8344",
      color: "from-green-500 to-green-600",
    },
    {
      name: "Aprendizagem Profissional",
      icon: Briefcase,
      image: "/aprendizagem-profissional-students-branded-shirts.jpg",
      services: "Curso básico de formação e Cursos profissionalizantes",
      activities: "Educativas e formativas",
      address: "Rua Riachuelo, 7 Lapa / Rua Soldado Bernadino da Silva, 144.",
      phone: "Inscrições: (21) 2224-0730 | Info: (21) 2156-6508/2156-6509",
      color: "from-purple-500 to-purple-600",
    },
  ]

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-orange-50 to-blue-50" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-balance animate-fade-in-up">
              Nossas{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-600">
                Unidades
              </span>
            </h1>
            <p
              className="text-lg lg:text-xl text-muted-foreground mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              A São Martinho faz a gestão de quatro unidades, três situadas no bairro da Lapa e uma em Vicente de
              Carvalho. Nestes espaços ocorrem as atividades socioeducativas, os cursos profissionalizantes, os
              atendimentos às crianças e jovens e também a Central de Doações.
            </p>
            <p
              className="text-base lg:text-lg text-muted-foreground animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Todas as unidades estão sob uma gestão comum e compartilhada, mas cada uma delas tem características
              próprias que atendem as demandas específicas dos eixos.
            </p>
          </div>
        </div>
      </section>

      {/* Units Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 lg:gap-12">
            {units.map((unit, index) => {
              const Icon = unit.icon
              return (
                <Card
                  key={unit.name}
                  className="overflow-hidden hover:shadow-2xl transition-all duration-500 animate-fade-in-up group border-2 hover:border-primary/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Image Section */}
                    <div className="relative h-64 lg:h-auto overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                      <Image
                        src={unit.image || "/placeholder.svg"}
                        alt={unit.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${unit.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                      />
                    </div>

                    {/* Content Section */}
                    <div className="p-8 lg:p-10 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start gap-4 mb-6">
                          <div
                            className={`p-4 rounded-2xl bg-gradient-to-br ${unit.color} shadow-lg group-hover:scale-110 transition-transform duration-500`}
                          >
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl lg:text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
                              {unit.name}
                            </h3>
                          </div>
                        </div>

                        <div className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                              <Heart className="w-4 h-4" />
                              Serviços
                            </h4>
                            <p className="text-muted-foreground leading-relaxed">{unit.services}</p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                              <Users className="w-4 h-4" />
                              Atividades
                            </h4>
                            <p className="text-muted-foreground leading-relaxed">{unit.activities}</p>
                          </div>

                          <div className="pt-4 border-t space-y-3">
                            <div className="flex items-start gap-3">
                              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                              <p className="text-sm text-muted-foreground">{unit.address}</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                              <p className="text-sm text-muted-foreground">{unit.phone}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6">
                        <Button asChild className="w-full lg:w-auto group/btn">
                          <Link href="/doacoes">
                            Quero Ajudar
                            <Heart className="ml-2 w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1.5s" }}
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 animate-fade-in-up">
              Visite Nossas Unidades
            </h2>
            <p className="text-lg lg:text-xl text-white/90 mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Conheça de perto nosso trabalho e veja como você pode fazer parte dessa transformação social.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Button asChild size="lg" variant="secondary" className="shadow-xl hover:shadow-2xl transition-all">
                <Link href="/contato">Agendar Visita</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm text-white border-white/30 hover:bg-white hover:text-primary shadow-xl"
              >
                <Link href="/doacoes">Fazer Doação</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
