"use client"

import { useState } from "react"
import { useLocale } from "@/lib/locale-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Users, Target, Award, ChevronDown, ChevronUp, Mail, Phone, MapPin } from "lucide-react"

export default function ProfessionalizacaoPage() {
  const { t } = useLocale()
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "Como faço para me inscrever no Programa de Aprendizagem Profissional?",
      answer:
        "No momento, as inscrições para curso de iniciação profissional estão fechadas. Abriremos em breve. Acompanhe o período de inscrições em nossas redes sociais e site.",
    },
    {
      question: "Como sei se posso me inscrever?",
      answer:
        "Você precisa ter entre 15 anos e meio e 22 anos de idade. Deve estar matriculado em qualquer série do Ensino Médio ou já ter concluído. Ser aluno da rede pública ou bolsista integral de rede particular. Estudar preferencialmente no turno da noite. Seu desempenho e frequência escolar também são importantes.",
    },
    {
      question: "Quais documentos preciso ter?",
      answer:
        "RG (carteira de identidade), CPF, Comprovante de residência, Carteira de Trabalho (CTPS) - pode ser a digital, Boletim escolar, RG e CPF do(a) responsável legal para os menores de 18 anos.",
    },
    {
      question: "Quanto custa?",
      answer: "Não se deixe enganar! Nenhum Programa de Aprendizagem pode cobrar qualquer valor ao aprendiz.",
    },
    {
      question: "Qual será meu salário?",
      answer:
        "O salário de um jovem aprendiz é calculado de acordo com as horas trabalhadas, por isso se diz que o aprendiz recebe salário mínimo-hora. Algumas empresas poderão optar por pagar o salário mínimo integral.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jovem.aprendiz-02.JPG-xax6VJX0gdfS8vIGKEraxthepoK7Yc.jpeg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/40 backdrop-blur-sm">
            <Briefcase className="w-4 h-4 mr-2" />
            Profissionalização
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight drop-shadow-lg">
            Programa Jovem Aprendiz
          </h1>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md font-light">
            É um Programa constituído por parcerias institucionais de interesses mútuos
          </p>
        </div>
      </section>

      {/* Objetivos */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profissionalizacao-NoUDbv5JcwoJAfAj89nhDQj28u0TAf.jpg"
              alt="Jovens aprendizes em ambiente de trabalho profissional - programa de profissionalização do Instituto São Martinho"
              className="w-full h-[500px] object-cover"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-primary hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-l-8">
              <CardContent className="p-10">
                <Target className="w-16 h-16 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-4">Oferta de Cursos</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ofertar cursos profissionalizantes com base na potencialidade do mercado e alinhados às diretrizes da
                  lei 10.097/2000 e seus marcos regulatórios.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-secondary hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-l-8">
              <CardContent className="p-10">
                <Users className="w-16 h-16 text-secondary mb-6" />
                <h3 className="text-xl font-bold mb-4">Formação Integral</h3>
                <p className="text-gray-700 leading-relaxed">
                  Contribuir na formação profissional e pessoal do jovem por intermédio de um programa inclusivo e
                  inovador.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-accent hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-l-8">
              <CardContent className="p-10">
                <Award className="w-16 h-16 text-accent mb-6" />
                <h3 className="text-xl font-bold mb-4">Atendimento às Empresas</h3>
                <p className="text-gray-700 leading-relaxed">
                  Atender as empresas parceiras no cumprimento obrigatório de cota de aprendizagem.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-24 px-4 bg-gradient-to-r from-primary via-primary/90 to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute bottom-0 right-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="animate-float">
              <div className="text-7xl md:text-8xl font-black mb-4 text-white drop-shadow-lg">3.600</div>
              <div className="text-xl opacity-95 font-semibold">Jovens com acesso ao 1º emprego</div>
            </div>
            <div className="animate-float" style={{ animationDelay: "0.2s" }}>
              <div className="text-7xl md:text-8xl font-black mb-4 text-white drop-shadow-lg">45</div>
              <div className="text-xl opacity-95 font-semibold">Empresas conveniadas</div>
            </div>
            <div className="animate-float" style={{ animationDelay: "0.4s" }}>
              <div className="text-7xl md:text-8xl font-black mb-4 text-white drop-shadow-lg">+12<span className="text-5xl">mil</span></div>
              <div className="text-xl opacity-95 font-semibold">Crianças e jovens atendidos</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Programa Jovem Aprendiz São Martinho</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg pr-4">{faq.question}</h3>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                    )}
                  </div>
                  {expandedFaq === index && <p className="mt-4 text-muted-foreground leading-relaxed">{faq.answer}</p>}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Transforme Vidas Através da Oportunidade</h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Seja um jovem aprendiz e descubra seu potencial, ou parceiro empresarial em nossa missão de transformação social
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-primary hover:bg-gray-100 font-bold text-lg py-6 px-8 rounded-lg">
              Quero Ser Aprendiz
            </Button>
            <Button className="bg-white/20 text-white hover:bg-white/30 border-white border font-bold text-lg py-6 px-8 rounded-lg">
              Parceria Empresarial
            </Button>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Entre em Contato</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                <CardContent className="p-8 flex items-start gap-4">
                  <Mail className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Email</h3>
                    <p className="text-gray-700">arnaldolobo.profissionalizacao@saomartinho.org.br</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-secondary">
                <CardContent className="p-8 flex items-start gap-4">
                  <Phone className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Telefone</h3>
                    <p className="text-gray-700">(21) 2156-6524 e (21) 2156-6521</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-accent">
                <CardContent className="p-8 flex items-start gap-4">
                  <MapPin className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-2">Endereço</h3>
                    <p className="text-gray-700">
                      Rua Riachuelo, 7, Lapa
                      <br />
                      CEP: 20021-260 - RJ
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="hover:shadow-2xl transition-all duration-300 border-2 border-primary/20">
              <CardContent className="p-8">
                <h3 className="font-bold text-2xl mb-6">Envie sua Mensagem</h3>
                <form className="space-y-5">
                  <div>
                    <input
                      type="text"
                      placeholder="Nome"
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Telefone"
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Horário preferido"
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Nome da Empresa"
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 font-bold text-lg py-6 rounded-lg transition-all">
                    Enviar Agora
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
