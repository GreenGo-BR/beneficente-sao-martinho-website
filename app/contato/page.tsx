"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useLocale } from "@/lib/locale-context"

export default function ContactPage() {
  const { locale } = useLocale()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      to: "associacaosaomartinho@gmail.com",
    }

    // This would connect to your email service
    console.log("Form data:", data)
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
  }

  return (
    <div className="min-h-screen">
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              {locale === "pt"
                ? "Entre em Contato"
                : locale === "es"
                  ? "Póngase en Contacto"
                  : locale === "ja"
                    ? "お問い合わせ"
                    : "Get in Touch"}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              {locale === "pt"
                ? "Estamos aqui para ajudar. Entre em contato conosco para tirar dúvidas, fazer sugestões ou saber como colaborar."
                : locale === "es"
                  ? "Estamos aquí para ayudar. Contáctenos para aclarar dudas, hacer sugerencias o saber cómo colaborar."
                  : locale === "ja"
                    ? "私たちはお手伝いするためにここにいます。質問をする、提案をする、または協力する方法を知るためにお問い合わせください。"
                    : "We are here to help. Contact us to ask questions, make suggestions or learn how to collaborate."}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-8">
                {locale === "pt"
                  ? "Envie uma Mensagem"
                  : locale === "es"
                    ? "Envíe un Mensaje"
                    : locale === "ja"
                      ? "メッセージを送る"
                      : "Send a Message"}
              </h2>
              <Card className="p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">
                        {locale === "pt" ? "Nome" : locale === "es" ? "Nombre" : locale === "ja" ? "名前" : "Name"}
                      </Label>
                      <Input id="name" name="name" placeholder="Seu nome" className="mt-2" required />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        className="mt-2"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">
                      {locale === "pt" ? "Telefone" : locale === "es" ? "Teléfono" : locale === "ja" ? "電話" : "Phone"}
                    </Label>
                    <Input id="phone" name="phone" placeholder="(21) 99999-9999" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="subject">
                      {locale === "pt" ? "Assunto" : locale === "es" ? "Asunto" : locale === "ja" ? "件名" : "Subject"}
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Sobre o que você gostaria de falar?"
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">
                      {locale === "pt"
                        ? "Mensagem"
                        : locale === "es"
                          ? "Mensaje"
                          : locale === "ja"
                            ? "メッセージ"
                            : "Message"}
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Escreva sua mensagem aqui..."
                      rows={6}
                      className="mt-2"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    {locale === "pt"
                      ? "Enviar Mensagem"
                      : locale === "es"
                        ? "Enviar Mensaje"
                        : locale === "ja"
                          ? "メッセージを送信"
                          : "Send Message"}
                  </Button>
                </form>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-8">
                  {locale === "pt"
                    ? "Informações de Contato"
                    : locale === "es"
                      ? "Información de Contacto"
                      : locale === "ja"
                        ? "連絡先情報"
                        : "Contact Information"}
                </h2>
                <div className="space-y-6">
                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          {locale === "pt"
                            ? "Endereço"
                            : locale === "es"
                              ? "Dirección"
                              : locale === "ja"
                                ? "住所"
                                : "Address"}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          Rua Riachuelo, 7, Lapa
                          <br />
                          CEP: 20021-260 - RJ
                          <br />
                          Brasil
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          {locale === "pt"
                            ? "Telefone"
                            : locale === "es"
                              ? "Teléfono"
                              : locale === "ja"
                                ? "電話"
                                : "Phone"}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          (21) 2156-7700
                          <br />
                          WhatsApp: (21) 98375-0152
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">Email</h3>
                        <p className="text-muted-foreground text-sm">associacaosaomartinho@gmail.com</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          {locale === "pt"
                            ? "Horário de Atendimento"
                            : locale === "es"
                              ? "Horario de Atención"
                              : locale === "ja"
                                ? "営業時間"
                                : "Business Hours"}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {locale === "pt"
                            ? "Segunda a Sexta: 8h às 18h"
                            : locale === "es"
                              ? "Lunes a Viernes: 8h a 18h"
                              : locale === "ja"
                                ? "月曜日から金曜日: 8時から18時"
                                : "Monday to Friday: 8am to 6pm"}
                          <br />
                          {locale === "pt"
                            ? "Sábado: 8h às 13h"
                            : locale === "es"
                              ? "Sábado: 8h a 13h"
                              : locale === "ja"
                                ? "土曜日: 8時から13時"
                                : "Saturday: 8am to 1pm"}
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              <Card className="p-6 bg-muted">
                <h3 className="font-semibold text-foreground mb-4">
                  {locale === "pt"
                    ? "Localização"
                    : locale === "es"
                      ? "Ubicación"
                      : locale === "ja"
                        ? "場所"
                        : "Location"}
                </h3>
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.2573795147145!2d-43.18286!3d-22.91286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5f0b5c2b3f%3A0x1234567890abcdef!2sRua%20Riachuelo%2C%207%20-%20Lapa%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2020021-260!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
