"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DonationSimulator } from "@/components/donation-simulator"
import {
  Heart,
  CreditCard,
  QrCode,
  Building,
  Package,
  Globe,
  Check,
  Shield,
  Lock,
  Users,
  Award,
  TrendingUp,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react"
import { useLocale } from "@/lib/locale-context"
import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function DonationsPage() {
  const { locale } = useLocale()
  const [donationType, setDonationType] = useState("unique")
  const [amount, setAmount] = useState("50")
  const [paymentMethod, setPaymentMethod] = useState("credit")
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false)
  const [isInternationalInfoOpen, setIsInternationalInfoOpen] = useState(false)
  const [contactFormData, setContactFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent("Contato - Doação de Itens")
    const body = encodeURIComponent(
      `Nome: ${contactFormData.name}\nEmail: ${contactFormData.email}\nTelefone: ${contactFormData.phone}\n\nMensagem:\n${contactFormData.message}`,
    )
    window.open(`mailto:associacaosaomartinho@gmail.com?subject=${subject}&body=${body}`, "_blank")
    setIsContactDialogOpen(false)
    setContactFormData({ name: "", email: "", phone: "", message: "" })
  }
  // </CHANGE>

  const faqs = [
    {
      pt: {
        question: "Como minha doação será utilizada?",
        answer:
          "100% da sua doação vai diretamente para nossos programas. Mantemos transparência total através de relatórios anuais detalhados que você pode acessar na seção de Transparência.",
      },
      es: {
        question: "¿Cómo se utilizará mi donación?",
        answer:
          "El 100% de su donación va directamente a nuestros programas. Mantenemos transparencia total a través de informes anuales detallados que puede acceder en la seção de Transparencia.",
      },
      en: {
        question: "How will my donation be used?",
        answer:
          "100% of your donation goes directly to our programs. We maintain total transparency through detailed annual reports that you can access in the Transparency section.",
      },
      ja: {
        question: "私の寄付はどのように使用されますか？",
        answer:
          "あなたの寄付の100％は私たちのプログラムに直接使われます。透明性セクションでアクセスできる詳細な年次報告書を通じて完全な透明性を維持しています。",
      },
    },
    {
      pt: {
        question: "Posso deduzir minha doação no Imposto de Renda?",
        answer:
          "Sim! Somos certificados e sua doação pode ser deduzida no IR. Enviaremos automaticamente o recibo para seu email após a confirmação do pagamento.",
      },
      es: {
        question: "¿Puedo deducir mi donación en el Impuesto sobre la Renta?",
        answer:
          "¡Sí! Estamos certificados y su donación se puede deducir en el IR. Enviaremos automáticamente el recibo a su correo electrónico después de la confirmación del pago.",
      },
      en: {
        question: "Can I deduct my donation from Income Tax?",
        answer:
          "Yes! We are certified and your donation can be deducted from IR. We will automatically send the receipt to your email after payment confirmation.",
      },
      ja: {
        question: "所得税から寄付を控除できますか？",
        answer:
          "はい！私たちは認定されており、あなたの寄付はIRから控除できます。支払い確認後、自動的にメールに領収書を送信します。",
      },
    },
    {
      pt: {
        question: "Como funciona a doação recorrente?",
        answer:
          "A doação recorrente é uma cobrança automática mensal no seu cartão. Você pode cancelar a qualquer momento sem compromisso e terá relatórios mensais sobre o impacto da sua contribuição.",
      },
      es: {
        question: "¿Cómo funciona la donación recurrente?",
        answer:
          "La donación recurrente es un cargo automático mensual en su tarjeta. Puede cancelar en cualquier momento sin compromiso y tendrá informes mensuales sobre el impacto de su contribución.",
      },
      en: {
        question: "How does recurring donation work?",
        answer:
          "Recurring donation is an automatic monthly charge on your card. You can cancel at any time without commitment and will have monthly reports on the impact of your contribution.",
      },
      ja: {
        question: "定期寄付はどのように機能しますか？",
        answer:
          "定期寄付は、カードへの自動月額請求です。いつでもコミットメントなしでキャンセルでき、貢献の影響に関する月次レポートを受け取ります。",
      },
    },
    {
      pt: {
        question: "Posso fazer doações internacionais?",
        answer:
          "Sim! Aceitamos doações de qualquer país através de cartão de crédito internacional e PayPal. Para grandes doações do Japão, temos parcerias especiais - entre em contato conosco.",
      },
      es: {
        question: "¿Puedo hacer donaciones internacionais?",
        answer:
          "¡Sí! Aceptamos donaciones de cualquier país a través de tarjeta de crédito internacional y PayPal. Para grandes donaciones de Japón, tenemos asociaciones especiales - contáctenos.",
      },
      en: {
        question: "Can I make international donations?",
        answer:
          "Yes! We accept donations from any country through international credit card and PayPal. For large donations from Japan, we have special partnerships - contact us.",
      },
      ja: {
        question: "国際寄付はできますか？",
        answer:
          "はい！国際クレジットカードとPayPalを通じて、どの国からでも寄付を受け付けています。日本からの大口寄付については、特別なパートナーシップがあります - お問い合わせください。",
      },
    },
  ]

  const paymentMethods = [
    {
      id: "credit",
      icon: CreditCard,
      pt: "Cartão de Crédito",
      es: "Tarjeta de Crédito",
      en: "Credit Card",
      ja: "クレジットカード",
    },
    {
      id: "pix",
      icon: QrCode,
      pt: "PIX",
      es: "PIX",
      en: "PIX",
      ja: "PIX",
    },
    {
      id: "boleto",
      icon: Building,
      pt: "Boleto Bancário",
      es: "Boleto Bancario",
      en: "Bank Slip",
      ja: "銀行振込票",
    },
  ]

  const whereMoneyGoes = [
    {
      pt: { title: "Educação", percentage: 40 },
      es: { title: "Educación", percentage: 40 },
      en: { title: "Education", percentage: 40 },
      ja: { title: "教育", percentage: 40 },
    },
    {
      pt: { title: "Alimentação", percentage: 30 },
      es: { title: "Alimentación", percentage: 30 },
      en: { title: "Food", percentage: 30 },
      ja: { title: "食事", percentage: 30 },
    },
    {
      pt: { title: "Arte & Cultura", percentage: 20 },
      es: { title: "Arte y Cultura", percentage: 20 },
      en: { title: "Art & Culture", percentage: 20 },
      ja: { title: "芸術と文化", percentage: 20 },
    },
    {
      pt: { title: "Apoio Familiar", percentage: 10 },
      es: { title: "Apoyo Familiar", percentage: 10 },
      en: { title: "Family Support", percentage: 10 },
      ja: { title: "家族支援", percentage: 10 },
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header and Footer are now in layout */}

      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10" />
        <div className="absolute inset-0 bg-[url('/rio-children-learning-together.jpg')] bg-cover bg-center opacity-10" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6 animate-pulse-slow">
              <Heart className="w-12 h-12 text-primary fill-primary" />
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-8 text-balance animate-slide-in-up">
              {locale === "pt"
                ? "Transforme Vidas Hoje"
                : locale === "es"
                  ? "Transforme Vidas Hoy"
                  : locale === "ja"
                    ? "今日、人生を変える"
                    : "Transform Lives Today"}
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed text-pretty mb-8">
              {locale === "pt"
                ? "Cada doação é uma semente de esperança. Juntos, construímos um futuro melhor para milhares de crianças e famílias."
                : locale === "es"
                  ? "Cada donación es una semilla de esperanza. Juntos, construimos un futuro mejor para miles de niños y familias."
                  : locale === "ja"
                    ? "各寄付は希望の種です。一緒に、何千人もの子供と家族のためのより良い未来を築きます。"
                    : "Every donation is a seed of hope. Together, we build a better future for thousands of children and families."}
            </p>

            <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto mt-12">
              <div className="flex flex-col items-center gap-2 p-4 bg-background/80 backdrop-blur rounded-xl border border-primary/20">
                <Users className="w-8 h-8 text-primary" />
                <div className="text-2xl font-bold text-foreground">15mil+</div>
                <div className="text-sm text-muted-foreground text-center">
                  {locale === "pt"
                    ? "Vidas Impactadas"
                    : locale === "es"
                      ? "Vidas Impactadas"
                      : locale === "ja"
                        ? "影響を受けた人生"
                        : "Lives Impacted"}
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 bg-background/80 backdrop-blur rounded-xl border border-primary/20">
                <Calendar className="w-8 h-8 text-primary" />
                <div className="text-2xl font-bold text-foreground">30+</div>
                <div className="text-sm text-muted-foreground text-center">
                  {locale === "pt"
                    ? "Anos de História"
                    : locale === "es"
                      ? "Años de Historia"
                      : locale === "ja"
                        ? "年の歴史"
                        : "Years of History"}
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 p-4 bg-background/80 backdrop-blur rounded-xl border border-primary/20">
                <Award className="w-8 h-8 text-primary" />
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground text-center">
                  {locale === "pt"
                    ? "Transparente"
                    : locale === "es"
                      ? "Transparente"
                      : locale === "ja"
                        ? "透明"
                        : "Transparent"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden group">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Impacto-em%20-numeros-7FnTIcok4eZcZ4sW6kvHbkk0y29fX7.jpg"
                alt="Crianças estudando na São Martinho"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-lg font-semibold mb-2">
                  {locale === "pt"
                    ? '"A São Martinho mudou minha vida. Hoje tenho educação, oportunidades e esperança."'
                    : locale === "es"
                      ? '"São Martinho cambió mi vida. Hoy tengo educación, oportunidades y esperanza."'
                      : locale === "ja"
                        ? "「サンマルチーニョは私の人生を変えました。今日、私には教育、機会、希望があります。」"
                        : '"São Martinho changed my life. Today I have education, opportunities and hope."'}
                </p>
                <p className="text-sm opacity-90">
                  {locale === "pt"
                    ? "- Maria, ex-aluna"
                    : locale === "es"
                      ? "- Maria, ex-alumna"
                      : locale === "ja"
                        ? "- マリア、元学生"
                        : "- Maria, former student"}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                {locale === "pt"
                  ? "Seu Impacto em Números"
                  : locale === "es"
                    ? "Su Impacto en Números"
                    : locale === "ja"
                      ? "数字で見るあなたの影響"
                      : "Your Impact in Numbers"}
              </h2>

              <div className="space-y-4">
                <Card className="p-6 border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        R$ 50 / {locale === "pt" ? "mês" : locale === "es" ? "mes" : locale === "ja" ? "月" : "month"}
                      </h3>
                      <p className="text-muted-foreground">
                        {locale === "pt"
                          ? "Garante alimentação para uma criança por um mês"
                          : locale === "es"
                            ? "Garantiza alimentación para un niño durante un mes"
                            : locale === "ja"
                              ? "1ヶ月間1人の子供に食事を保証"
                              : "Guarantees food for one child for a month"}
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-l-accent hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        R$ 100 / {locale === "pt" ? "mês" : locale === "es" ? "mes" : locale === "ja" ? "月" : "month"}
                      </h3>
                      <p className="text-muted-foreground">
                        {locale === "pt"
                          ? "Mantém um aluno com material escolar completo"
                          : locale === "es"
                            ? "Mantiene a un estudiante con material escolar completo"
                            : locale === "ja"
                              ? "1人の学生に完全な学用品を提供"
                              : "Keeps one student with complete school supplies"}
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-l-4 border-l-secondary hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary/10 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        R$ 200 / {locale === "pt" ? "mês" : locale === "es" ? "mes" : locale === "ja" ? "月" : "month"}
                      </h3>
                      <p className="text-muted-foreground">
                        {locale === "pt"
                          ? "Financia atividades culturais para uma turma"
                          : locale === "es"
                            ? "Financia actividades culturales para una clase"
                            : locale === "ja"
                              ? "1つのクラスの文化的活動に資金を提供"
                              : "Finances cultural activities for a class"}
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background" id="donation-forms">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {locale === "pt"
                ? "Escolha Como Ajudar"
                : locale === "es"
                  ? "Elija Cómo Ayudar"
                  : locale === "ja"
                    ? "支援方法を選ぶ"
                    : "Choose How to Help"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {locale === "pt"
                ? "Sua contribuição vai 100% para nossos programas. Sem taxas administrativas."
                : locale === "es"
                  ? "Su contribución va 100% a nuestros programas. Sin tasas administrativas."
                  : locale === "ja"
                    ? "あなたの貢献は100％私たちのプログラムに使われます。管理費はありません。"
                    : "Your contribution goes 100% to our programs. No administrative fees."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            <div className="space-y-6">
              <Tabs value={donationType} onValueChange={setDonationType} className="w-full">
                <TabsList className="grid w-full grid-cols-2 h-14 p-1 bg-muted">
                  <TabsTrigger
                    value="unique"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-base font-semibold"
                  >
                    {locale === "pt"
                      ? "Doação Única"
                      : locale === "es"
                        ? "Donación Única"
                        : locale === "ja"
                          ? "一回の寄付"
                          : "One-time Donation"}
                  </TabsTrigger>
                  <TabsTrigger
                    value="monthly"
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-base font-semibold"
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    {locale === "pt"
                      ? "Doação Mensal"
                      : locale === "es"
                        ? "Donación Mensual"
                        : locale === "ja"
                          ? "月額寄付"
                          : "Monthly Donation"}
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="unique" className="mt-6">
                  <Card className="p-8 shadow-xl border-2">
                    <form className="space-y-6">
                      <div>
                        <Label htmlFor="amount" className="text-base font-semibold">
                          {locale === "pt"
                            ? "Valor da Doação"
                            : locale === "es"
                              ? "Valor de la Donación"
                              : locale === "ja"
                                ? "寄付額"
                                : "Donation Amount"}
                        </Label>
                        <div className="grid grid-cols-3 gap-3 mt-3 mb-4">
                          {["25", "50", "100"].map((value) => (
                            <Button
                              key={value}
                              type="button"
                              variant={amount === value ? "default" : "outline"}
                              onClick={() => setAmount(value)}
                              size="lg"
                              className="text-lg font-semibold"
                            >
                              R$ {value}
                            </Button>
                          ))}
                        </div>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground font-semibold text-lg">
                            R$
                          </span>
                          <Input
                            id="amount"
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="pl-12 h-14 text-lg"
                            placeholder="Outro valor"
                          />
                        </div>
                      </div>

                      <div>
                        <Label className="text-base font-semibold">
                          {locale === "pt"
                            ? "Forma de Pagamento"
                            : locale === "es"
                              ? "Forma de Pago"
                              : locale === "ja"
                                ? "お支払い方法"
                                : "Payment Method"}
                        </Label>
                        <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="mt-3 space-y-3">
                          {paymentMethods.map((method) => (
                            <div
                              key={method.id}
                              className="flex items-center space-x-3 p-4 border-2 rounded-lg hover:border-primary transition-colors cursor-pointer"
                            >
                              <RadioGroupItem value={method.id} id={method.id} />
                              <Label htmlFor={method.id} className="flex items-center gap-3 cursor-pointer flex-1">
                                <method.icon className="w-5 h-5" />
                                <span className="font-medium">
                                  {locale === "es"
                                    ? method.es
                                    : locale === "en"
                                      ? method.en
                                      : locale === "ja"
                                        ? method.ja
                                        : method.pt}
                                </span>
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="name" className="text-base">
                            {locale === "pt"
                              ? "Nome Completo"
                              : locale === "es"
                                ? "Nombre Completo"
                                : locale === "ja"
                                  ? "氏名"
                                  : "Full Name"}
                          </Label>
                          <Input id="name" placeholder="João da Silva" className="mt-2 h-12" />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-base">
                            Email
                          </Label>
                          <Input id="email" type="email" placeholder="joao@email.com" className="mt-2 h-12" />
                        </div>
                        <div>
                          <Label htmlFor="cpf" className="text-base">
                            CPF
                          </Label>
                          <Input id="cpf" placeholder="000.000.000-00" className="mt-2 h-12" />
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-5 bg-primary/5 border border-primary/20 rounded-xl">
                        <Shield className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                        <div className="text-sm">
                          <p className="font-semibold text-foreground mb-1 text-base">
                            {locale === "pt"
                              ? "Segurança Garantida"
                              : locale === "es"
                                ? "Seguridad Garantizada"
                                : locale === "ja"
                                  ? "保証されたセキュリティ"
                                  : "Guaranteed Security"}
                          </p>
                          <p className="text-muted-foreground">
                            {locale === "pt"
                              ? "Seus dados estão protegidos com criptografia de ponta e seguimos as normas da LGPD."
                              : locale === "es"
                                ? "Sus datos están protegidos con encriptación de extremo a extremo y seguimos las normas de LGPD."
                                : locale === "ja"
                                  ? "あなたのデータはエンドツーエンドの暗号化で保護されており、LGPDの基準に従っています。"
                                  : "Your data is protected with end-to-end encryption and we follow LGPD standards."}
                          </p>
                        </div>
                      </div>

                      <Button type="submit" className="w-full h-14 text-lg font-semibold" size="lg">
                        <Lock className="w-5 h-5 mr-2" />
                        {locale === "pt"
                          ? "Doar Agora"
                          : locale === "es"
                            ? "Donar Ahora"
                            : locale === "ja"
                              ? "今すぐ寄付する"
                              : "Donate Now"}
                      </Button>
                    </form>
                  </Card>
                </TabsContent>

                <TabsContent value="monthly" className="mt-6">
                  <Card className="p-8 shadow-xl border-2 border-primary/30">
                    <div className="mb-6 p-5 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border-2 border-primary/20">
                      <div className="flex items-start gap-3 mb-3">
                        <Heart className="w-6 h-6 text-primary fill-primary mt-1" />
                        <h3 className="font-bold text-foreground text-xl">
                          {locale === "pt"
                            ? "Torne-se um Patrono"
                            : locale === "es"
                              ? "Conviértase en un Patrocinador"
                              : locale === "ja"
                                ? "パトロンになる"
                                : "Become a Patron"}
                        </h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {locale === "pt"
                          ? "Com uma doação mensal, você garante sustentabilidade aos nossos programas e recebe relatórios exclusivos sobre o impacto da sua contribuição."
                          : locale === "es"
                            ? "Con una donación mensual, garantiza sostenibilidad a nuestros programas y recibe informes exclusivos sobre el impacto de su contribución."
                            : locale === "ja"
                              ? "月額寄付により、プログラムの持続可能性を保証し、貢献の影響に関する独占レポートを受け取ります。"
                              : "With a monthly donation, you guarantee sustainability to our programs and receive exclusive reports on the impact of your contribution."}
                      </p>
                    </div>

                    <form className="space-y-6">
                      <div>
                        <Label htmlFor="monthly-amount" className="text-base font-semibold">
                          {locale === "pt"
                            ? "Valor Mensal"
                            : locale === "es"
                              ? "Valor Mensual"
                              : locale === "ja"
                                ? "月額"
                                : "Monthly Amount"}
                        </Label>
                        <div className="grid grid-cols-4 gap-3 mt-3 mb-4">
                          {["25", "50", "100", "200"].map((value) => (
                            <Button
                              key={value}
                              type="button"
                              variant={amount === value ? "default" : "outline"}
                              onClick={() => setAmount(value)}
                              size="lg"
                              className="text-base font-semibold"
                            >
                              R$ {value}
                            </Button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="monthly-name" className="text-base">
                            {locale === "pt"
                              ? "Nome Completo"
                              : locale === "es"
                                ? "Nombre Completo"
                                : locale === "ja"
                                  ? "氏名"
                                  : "Full Name"}
                          </Label>
                          <Input id="monthly-name" placeholder="João da Silva" className="mt-2 h-12" />
                        </div>
                        <div>
                          <Label htmlFor="monthly-email" className="text-base">
                            Email
                          </Label>
                          <Input id="monthly-email" type="email" placeholder="joao@email.com" className="mt-2 h-12" />
                        </div>
                        <div>
                          <Label htmlFor="card-number" className="text-base">
                            {locale === "pt"
                              ? "Número do Cartão"
                              : locale === "es"
                                ? "Número de Tarjeta"
                                : locale === "ja"
                                  ? "カード番号"
                                  : "Card Number"}
                          </Label>
                          <Input id="card-number" placeholder="0000 0000 0000 0000" className="mt-2 h-12" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiry" className="text-base">
                              {locale === "pt"
                                ? "Validade"
                                : locale === "es"
                                  ? "Vencimiento"
                                  : locale === "ja"
                                    ? "有効期限"
                                    : "Expiry"}
                            </Label>
                            <Input id="expiry" placeholder="MM/AA" className="mt-2 h-12" />
                          </div>
                          <div>
                            <Label htmlFor="cvv" className="text-base">
                              CVV
                            </Label>
                            <Input id="cvv" placeholder="123" className="mt-2 h-12" maxLength={4} />
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-5 bg-accent/10 border border-accent/30 rounded-xl">
                        <Check className="w-6 h-6 text-accent mt-0.5 flex-shrink-0" />
                        <div className="text-sm">
                          <p className="text-muted-foreground">
                            {locale === "pt"
                              ? "Você pode cancelar sua doação recorrente a qualquer momento, sem compromisso."
                              : locale === "es"
                                ? "Puede cancelar su donación recurrente en cualquier momento, sin compromiso."
                                : locale === "ja"
                                  ? "コミットメントなしで、いつでも定期寄付をキャンセルできます。"
                                  : "You can cancel your recurring donation at any time, without commitment."}
                          </p>
                        </div>
                      </div>

                      <Button type="submit" className="w-full h-14 text-lg font-semibold" size="lg">
                        <Heart className="w-5 h-5 mr-2 fill-current" />
                        {locale === "pt"
                          ? "Começar Doação Mensal"
                          : locale === "es"
                            ? "Comenzar Donación Mensual"
                            : locale === "ja"
                              ? "月額寄付を開始"
                              : "Start Monthly Donation"}
                      </Button>
                    </form>
                  </Card>
                </TabsContent>
              </Tabs>

              <Card className="p-6 bg-gradient-to-br from-muted to-muted/50 border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <h3 className="font-bold text-foreground mb-4 flex items-center gap-3 text-lg">
                  <Package className="w-6 h-6 text-primary" />
                  {locale === "pt"
                    ? "Doação de Itens"
                    : locale === "es"
                      ? "Donación de Artículos"
                      : locale === "ja"
                        ? "物品寄付"
                        : "Item Donation"}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {locale === "pt"
                    ? "Também aceitamos doações de alimentos, roupas, livros e materiais escolares. Entre em contato para saber mais sobre como doar."
                    : locale === "es"
                      ? "También aceptamos donaciones de alimentos, ropa, libros y materiales escolares. Contáctenos para saber más sobre cómo donar."
                      : locale === "ja"
                        ? "食品、衣類、本、学用品の寄付も受け付けています。寄付方法について詳しくはお問い合わせください。"
                        : "We also accept donations of food, clothing, books and school supplies. Contact us to learn more about how to donate."}
                </p>
                <Button
                  variant="outline"
                  className="w-full h-12 font-semibold bg-transparent"
                  size="lg"
                  onClick={() => setIsContactDialogOpen(true)}
                >
                  {locale === "pt"
                    ? "Entrar em Contato"
                    : locale === "es"
                      ? "Ponerse en Contacto"
                      : locale === "ja"
                        ? "お問い合わせ"
                        : "Get in Touch"}
                </Button>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <h3 className="font-bold text-foreground mb-4 flex items-center gap-3 text-lg">
                  <Globe className="w-6 h-6 text-primary" />
                  {locale === "pt"
                    ? "Doações Internacionais"
                    : locale === "es"
                      ? "Donaciones Internacionales"
                      : locale === "ja"
                        ? "国際寄付"
                        : "International Donations"}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {locale === "pt"
                    ? "Aceitamos doações do mundo todo. Para grandes doadores do Japão, oferecemos parcerias especiais e relatórios personalizados."
                    : locale === "es"
                      ? "Aceptamos donaciones de todo el mundo. Para grandes donantes de Japón, ofrecemos asociaciones especiales e informes personalizados."
                      : locale === "ja"
                        ? "世界中からの寄付を受け付けています。日本からの大口寄付者には、特別なパートナーシップとカスタマイズされたレポートを提供しています。"
                        : "We accept donations from all over the world. For major donors from Japan, we offer special partnerships and customized reports."}
                </p>
                <Button
                  variant="outline"
                  className="w-full h-12 font-semibold bg-transparent"
                  size="lg"
                  onClick={() => setIsInternationalInfoOpen(true)}
                >
                  {locale === "pt"
                    ? "Saber Mais"
                    : locale === "es"
                      ? "Sepa Más"
                      : locale === "ja"
                        ? "詳細を見る"
                        : "Learn More"}
                </Button>
              </Card>
            </div>

            <div className="space-y-8">
              <div className="sticky top-8">
                <DonationSimulator />

                <Card className="p-8 mt-8 shadow-xl" id="donation-impact">
                  <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                    <TrendingUp className="w-7 h-7 text-primary" />
                    {locale === "pt"
                      ? "Para Onde Vai Sua Doação"
                      : locale === "es"
                        ? "A Dónde Va Su Donación"
                        : locale === "ja"
                          ? "あなたの寄付はどこに行くのか"
                          : "Where Your Donation Goes"}
                  </h3>
                  <div className="space-y-5">
                    {whereMoneyGoes.map((item, index) => {
                      const data =
                        locale === "es" ? item.es : locale === "en" ? item.en : locale === "ja" ? item.ja : item.pt
                      return (
                        <div key={index} className="group">
                          <div className="flex justify-between mb-2">
                            <span className="font-semibold text-foreground">{data.title}</span>
                            <span className="text-primary font-bold text-lg">{data.percentage}%</span>
                          </div>
                          <div className="h-3 bg-muted rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 group-hover:scale-105"
                              style={{ width: `${data.percentage}%` }}
                            />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {locale === "pt"
                        ? "Mantemos total transparência sobre como cada real é utilizado. Veja nossos relatórios completos na seção de Transparência."
                        : locale === "es"
                          ? "Mantenemos total transparencia sobre cómo se utiliza cada real. Vea nuestros informes completos en la sección de Transparencia."
                          : locale === "ja"
                            ? "各レアルがどのように使用されているかについて完全な透明性を維持しています。透明性セクションで完全なレポートをご覧ください。"
                            : "We maintain total transparency about how each real is used. See our complete reports in the Transparency section."}
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('/rio-children-art-class-painting-culture.jpg')] bg-cover bg-center" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Heart className="w-16 h-16 text-primary mx-auto mb-6 fill-primary animate-pulse" />
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              {locale === "pt"
                ? "Juntos Somos Mais Fortes"
                : locale === "es"
                  ? "Juntos Somos Más Fuertes"
                  : locale === "ja"
                    ? "一緒にもっと強くなる"
                    : "Together We Are Stronger"}
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">
              {locale === "pt"
                ? "Cada contribuição, não importa o valor, faz diferença real na vida de uma criança. Seja parte dessa transformação hoje."
                : locale === "es"
                  ? "Cada contribución, sin importar el valor, hace una diferencia real en la vida de un niño. Sea parte de esta transformación hoy."
                  : locale === "ja"
                    ? "金額に関係なく、すべての貢献が子供の人生に本当の違いをもたらします。今日この変革の一部になりましょう。"
                    : "Every contribution, regardless of the amount, makes a real difference in a child's life. Be part of this transformation today."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="h-14 px-8 text-lg font-semibold"
                onClick={() => {
                  const donationForm = document.getElementById("donation-forms")
                  if (donationForm) {
                    donationForm.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                }}
              >
                <Heart className="w-5 h-5 mr-2" />
                {locale === "pt"
                  ? "Fazer Doação"
                  : locale === "es"
                    ? "Hacer Donación"
                    : locale === "ja"
                      ? "寄付をする"
                      : "Make Donation"}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg font-semibold bg-transparent"
                onClick={() => {
                  const impactSection = document.getElementById("donation-impact")
                  if (impactSection) {
                    impactSection.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                }}
              >
                {locale === "pt"
                  ? "Saiba Mais"
                  : locale === "es"
                    ? "Sepa Más"
                    : locale === "ja"
                      ? "詳細を見る"
                      : "Learn More"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              {locale === "pt" ? "Entre em Contato" : "Contact Us"}
            </DialogTitle>
            <DialogDescription>
              {locale === "pt"
                ? "Preencha o formulário abaixo para saber mais sobre doações de itens."
                : "Fill out the form below to learn more about item donations."}
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleContactSubmit} className="space-y-4 mt-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                {locale === "pt" ? "Nome Completo" : "Full Name"}
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                value={contactFormData.name}
                onChange={(e) => setContactFormData({ ...contactFormData, name: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                value={contactFormData.email}
                onChange={(e) => setContactFormData({ ...contactFormData, email: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                {locale === "pt" ? "Telefone" : "Phone"}
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                value={contactFormData.phone}
                onChange={(e) => setContactFormData({ ...contactFormData, phone: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                {locale === "pt" ? "Mensagem" : "Message"}
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary"
                value={contactFormData.message}
                onChange={(e) => setContactFormData({ ...contactFormData, message: e.target.value })}
              />
            </div>

            <Button type="submit" className="w-full h-12" size="lg">
              <Send className="w-4 h-4 mr-2" />
              {locale === "pt" ? "Enviar Mensagem" : "Send Message"}
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-5 h-5 text-primary" />
              <span>(21) 2156-7700 / (21) 98375-0152</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-5 h-5 text-primary" />
              <span>associacaosaomartinho@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Rua Riachuelo, 7, Lapa - CEP: 20021-260 - RJ</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isInternationalInfoOpen} onOpenChange={setIsInternationalInfoOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
              <Globe className="w-6 h-6 text-primary" />
              {locale === "pt" ? "Doações Internacionais" : locale === "ja" ? "国際寄付" : "International Donations"}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 mt-4">
            <div>
              <h3 className="font-bold text-lg mb-2">
                {locale === "pt" ? "Como Funciona" : locale === "ja" ? "仕組み" : "How It Works"}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {locale === "pt"
                  ? "A São Martinho aceita doações internacionais de todo o mundo. Trabalhamos com parceiros internacionais para facilitar transferências bancárias seguras e oferecer recibos oficiais para fins fiscais quando aplicável."
                  : locale === "ja"
                    ? "サンマルチーニョは世界中からの国際寄付を受け付けています。安全な銀行振込を促進し、該当する場合は税務目的の公式領収書を提供するため、国際パートナーと協力しています。"
                    : "São Martinho accepts international donations from around the world. We work with international partners to facilitate secure bank transfers and provide official receipts for tax purposes when applicable."}
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">
                {locale === "pt"
                  ? "Parcerias Especiais - Japão"
                  : locale === "ja"
                    ? "特別パートナーシップ - 日本"
                    : "Special Partnerships - Japan"}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                {locale === "pt"
                  ? "Para grandes doadores do Japão, oferecemos um programa especial de parceria que inclui:"
                  : locale === "ja"
                    ? "日本からの大口寄付者には、以下を含む特別なパートナーシッププログラムを提供しています："
                    : "For major donors from Japan, we offer a special partnership program that includes:"}
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">
                    {locale === "pt"
                      ? "Relatórios trimestrais personalizados sobre o impacto de suas doações"
                      : locale === "ja"
                        ? "寄付の影響に関する四半期ごとのカスタマイズされたレポート"
                        : "Quarterly customized reports on the impact of your donations"}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">
                    {locale === "pt"
                      ? "Visitas guiadas aos nossos centros comunitários no Rio de Janeiro"
                      : locale === "ja"
                        ? "リオデジャネイロのコミュニティセンターへのガイド付き訪問"
                        : "Guided visits to our community centers in Rio de Janeiro"}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">
                    {locale === "pt"
                      ? "Comunicação direta com nossa equipe executiva"
                      : locale === "ja"
                        ? "経営陣との直接コミュニケーション"
                        : "Direct communication with our executive team"}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">
                    {locale === "pt"
                      ? "Possibilidade de patrocinar programas específicos"
                      : locale === "ja"
                        ? "特定のプログラムをスポンサーする機会"
                        : "Opportunity to sponsor specific programs"}
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-2">
                {locale === "pt" ? "Métodos de Doação" : locale === "ja" ? "寄付方法" : "Donation Methods"}
              </h3>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">
                    {locale === "pt"
                      ? "Transferência bancária internacional"
                      : locale === "ja"
                        ? "国際銀行振込"
                        : "International bank transfer"}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">
                    {locale === "pt"
                      ? "Plataformas de pagamento online"
                      : locale === "ja"
                        ? "オンライン決済プラットフォーム"
                        : "Online payment platforms"}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span className="text-muted-foreground">
                    {locale === "pt" ? "Doações corporativas" : locale === "ja" ? "法人寄付" : "Corporate donations"}
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-primary/5 p-4 rounded-lg border-l-4 border-primary">
              <h4 className="font-semibold mb-2">
                {locale === "pt" ? "Entre em Contato" : locale === "ja" ? "お問い合わせ" : "Get in Touch"}
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                {locale === "pt"
                  ? "Para mais informações sobre doações internacionais ou para discutir uma parceria especial, entre em contato conosco:"
                  : locale === "ja"
                    ? "国際寄付の詳細や特別パートナーシップについては、お問い合わせください："
                    : "For more information about international donations or to discuss a special partnership, contact us:"}
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href="mailto:associacaosaomartinho@gmail.com" className="hover:underline">
                    associacaosaomartinho@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+55 (21) 2156-7700</span>
                </div>
              </div>
            </div>

            <Button onClick={() => setIsInternationalInfoOpen(false)} className="w-full" size="lg">
              {locale === "pt" ? "Fechar" : locale === "ja" ? "閉じる" : "Close"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      {/* </CHANGE> */}
    </div>
  )
}
