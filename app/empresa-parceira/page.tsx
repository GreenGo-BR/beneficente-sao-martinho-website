"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, BookOpen, Target, CheckCircle2, Mail, Phone, MapPin, Quote } from "lucide-react"
import { useState } from "react"
import { useLocale } from "@/lib/locale-context"
import Image from "next/image"

export default function EmpresaParceiraPage() {
  const { locale } = useLocale()
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    horario: "",
    empresa: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
  }

  const courses = [
    "Assistente Administrativo CBO",
    "Assistente Administrativo Arco Ocupacional",
    "Aprendiz Operador do Comércio em Lojas e Mercado",
  ]

  const benefits = [
    "Encontramos o perfil comportamental e técnico que você busca",
    "Acompanhamento por equipe multidisciplinar durante todo o programa",
    "Possibilidade de retenção de talentos pela empresa",
    "Suporte técnico administrativo e pedagógico",
    "Escolaridade e formação profissional caminhando lado a lado",
    "Adesão a um programa que agrega ações de responsabilidade social",
  ]

  const testimonials = [
    {
      text: "O programa jovem aprendiz da Coca-Cola Andina Brasil é uma oportunidade única de entrada no mercado de trabalho com o objetivo de profissionalizar e desenvolver jovens talentos. Através da nossa parceria com a São Martinho, conseguimos construir um futuro baseado em igualdade e esperança para esses jovens e suas famílias.",
      author: "Filipe Fonseca",
      role: "Assistente Administrativo",
      company: "Coca Cola",
    },
    {
      text: "Essa está sendo minha primeira experiência de trabalho com carteira assinada. Isso superou minhas expectativas, eu me sinto confortável fora da minha zona de conforto, livre para falar, expressar o que eu sinto... Eu aprendo bastante e pretendo continuar nessa carreira. Eu queria agradecer muito a São Martinho, porque tem um curso excelente e por dar essas oportunidades para os jovens conseguirem embarcar no mercado de trabalho.",
      author: "Ricardo",
      role: "Jovem Aprendiz",
      company: "Shell",
    },
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/20 text-primary hover:bg-primary/30 animate-float">
              <Building2 className="w-3 h-3 mr-1" />
              Parceria Corporativa
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 animate-fade-in-up bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Seja uma Empresa Parceira
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8 animate-fade-in-up animation-delay-100">
              Aprimorando estratégias de transformação de vidas!
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Acreditamos no desenvolvimento integral de crianças e jovens como potência para a construção de uma
              sociedade mais justa, respeitosa, igualitária e acolhedora para todos.
            </p>
            <Button size="lg" className="mt-8 animate-pulse-glow" asChild>
              <a href="#forms">Quero Participar!</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/empresa-parceira-diverse-industries-collage.jpg"
                alt="Indústrias e setores parceiros do Instituto São Martinho oferecendo oportunidades de trabalho - manufatura, hotelaria, corporativo, saúde e educação"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-2xl lg:text-3xl font-bold mb-2">Parcerias em Diversos Setores</h3>
                <p className="text-lg opacity-90">
                  Empresas de manufatura, hotelaria, serviços corporativos, saúde e educação unidas pela transformação
                  social
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-6">Faça parte da nossa história!</h2>
            <p className="text-lg text-muted-foreground text-center mb-8">
              Se você quer contribuir na formação profissional e pessoal do jovem por intermédio de um programa
              inclusivo e inovador, conte com a gente. Estamos aqui para atender as empresas parceiras no cumprimento
              obrigatório de cota de aprendizagem.
            </p>
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/20">
              <p className="text-center text-muted-foreground">
                É um Programa constituído por parcerias institucionais de interesses mútuos. Ofertar cursos
                profissionalizantes com base na potencialidade do mercado e alinhados às diretrizes da{" "}
                <strong className="text-primary">lei 10.097/2000</strong> e seus marcos regulatórios.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Details Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Courses Card */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/30 bg-gradient-to-br from-background to-primary/5">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Nossos Cursos</h3>
              <ul className="space-y-3">
                {courses.map((course, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{course}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Target Audience Card */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-accent/30 bg-gradient-to-br from-background to-accent/5">
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Nosso Público Alvo</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Jovens de ambos os sexos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Idade: 16 a 22 anos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Cursando a partir do 9º ano do Ensino Fundamental</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">Em situação de vulnerabilidade social</span>
                </li>
              </ul>
            </Card>

            {/* Methodology Card */}
            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/30 bg-gradient-to-br from-background to-primary/5 md:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Nossa Metodologia</h3>
              <p className="text-muted-foreground mb-4">
                Todas as atividades são realizadas sob orientação da instituição formadora que fornecerá o plano de
                curso, a carga horária e também o acompanhamento dos aprendizes por uma equipe multidisciplinar
                (assistente social, pedagogo e psicólogo).
              </p>
              <p className="text-muted-foreground">
                O programa de aprendizagem profissional é mesclado entre atividades teóricas e práticas.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Diversity Banner */}
      <section className="py-12 bg-gradient-to-r from-primary via-accent to-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Valorizamos a diversidade e inclusão de gênero, raça, etnia e pessoas com deficiência.
          </h3>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">O que iremos fazer para você:</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-background to-primary/5"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-muted-foreground">{benefit}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Depoimentos</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-background to-accent/5"
              >
                <Quote className="w-10 h-10 text-accent/30 mb-4" />
                <p className="text-muted-foreground mb-6 italic">{testimonial.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-primary font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Carousel Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-muted/30 to-accent/5 overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">Parceiros de Sucesso</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Empresas que acreditam no poder da transformação social através da capacitação profissional de jovens
          </p>

          {/* Infinite Scroll Carousel */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

            <div className="flex gap-12 items-center animate-infinite-scroll">
              {/* First Set */}
              <div className="flex items-center justify-center min-w-[280px] h-32 bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md">
                <Image
                  src="/partners/outback-logo.png"
                  alt="Outback Steakhouse"
                  width={240}
                  height={120}
                  className="object-contain max-h-28"
                />
              </div>
              <div className="flex items-center justify-center min-w-[280px] h-32 bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md">
                <Image
                  src="/partners/prudencia-logo.png"
                  alt="Recíproca Assistência - Previdência Complementar"
                  width={240}
                  height={120}
                  className="object-contain max-h-28"
                />
              </div>
              <div className="flex items-center justify-center min-w-[280px] h-32 bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md">
                <Image
                  src="/partners/freedom-songs-logo.png"
                  alt="Freedom Songs"
                  width={240}
                  height={120}
                  className="object-contain max-h-28"
                />
              </div>
              <div className="flex items-center justify-center min-w-[280px] h-32 bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md">
                <Image
                  src="/partners/slb-logo.png"
                  alt="SLB"
                  width={240}
                  height={120}
                  className="object-contain max-h-28"
                />
              </div>
              <div className="flex items-center justify-center min-w-[280px] h-32 bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md">
                <Image
                  src="/partners/petronect-logo.png"
                  alt="Petronect"
                  width={240}
                  height={120}
                  className="object-contain max-h-28"
                />
              </div>
              <div className="flex items-center justify-center min-w-[280px] h-32 bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md">
                <Image
                  src="/partners/prodigy-logo.png"
                  alt="Prodigy"
                  width={240}
                  height={120}
                  className="object-contain max-h-28"
                />
              </div>
              <div className="flex items-center justify-center min-w-[280px] h-32 bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md">
                <Image
                  src="/partners/maria-violeta-logo.jpg"
                  alt="Maria Violeta"
                  width={240}
                  height={120}
                  className="object-contain max-h-28"
                />
              </div>
              <div className="flex items-center justify-center min-w-[280px] h-32 bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md">
                <Image
                  src="/partners/macdowell-logo.png"
                  alt="Mac Dowell, Melo & Leite de Castro"
                  width={240}
                  height={120}
                  className="object-contain max-h-28"
                />
              </div>
              <div className="flex items-center justify-center min-w-[280px] h-32 bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md">
                <Image
                  src="/partners/bloomberg-logo.png"
                  alt="Bloomberg"
                  width={240}
                  height={120}
                  className="object-contain max-h-28"
                />
              </div>
              <div className="flex items-center justify-center min-w-[280px] h-32 bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-md">
                <Image
                  src="/partners/ca-logo.png"
                  alt="C&A"
                  width={240}
                  height={120}
                  className="object-contain max-h-28"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Form Section */}
      <section id="forms" className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Entre em Contato</h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:arnaldolobo.profissionalizacao@saomartinho.org.br"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      arnaldolobo.profissionalizacao@saomartinho.org.br
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefone</h3>
                    <a href="tel:+552121566521" className="text-muted-foreground hover:text-accent transition-colors">
                      +55 (21) 2156-6521
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Endereço</h3>
                    <p className="text-muted-foreground">
                      Rua Riachuelo, 7, Lapa
                      <br />
                      CEP: 20021-260 - RJ
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Preencha o formulário</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Nome Completo"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Telefone"
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    placeholder="Horário Preferencial"
                    value={formData.horario}
                    onChange={(e) => setFormData({ ...formData, horario: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    placeholder="Nome da Empresa"
                    value={formData.empresa}
                    onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full animate-pulse-glow">
                  Enviar Agora
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-primary via-accent to-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Pronto para transformar vidas junto com a gente?
          </h2>
          <Button size="lg" variant="secondary" className="animate-pulse-glow" asChild>
            <a href="#forms">Seja uma Empresa Parceira</a>
          </Button>
        </div>
      </section>
    </div>
  )
}
