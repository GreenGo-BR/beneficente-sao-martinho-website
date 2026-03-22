"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Users, BookOpen, Utensils } from "lucide-react"
import { useLocale } from "@/lib/locale-context"

export function DonationSimulator() {
  const { locale } = useLocale()
  const [selectedAmount, setSelectedAmount] = useState(50)

  const impactData = [
    {
      icon: Utensils,
      pt: (amount: number) => `${Math.floor(amount / 10)} refeições completas`,
      es: (amount: number) => `${Math.floor(amount / 10)} comidas completas`,
      en: (amount: number) => `${Math.floor(amount / 10)} complete meals`,
      ja: (amount: number) => `${Math.floor(amount / 10)}回の完全な食事`,
    },
    {
      icon: BookOpen,
      pt: (amount: number) => `${Math.floor(amount / 25)} crianças com material escolar`,
      es: (amount: number) => `${Math.floor(amount / 25)} niños con material escolar`,
      en: (amount: number) => `${Math.floor(amount / 25)} children with school supplies`,
      ja: (amount: number) => `${Math.floor(amount / 25)}人の子供に学用品`,
    },
    {
      icon: Heart,
      pt: (amount: number) => `${Math.floor(amount / 15)} dias de atividades culturais`,
      es: (amount: number) => `${Math.floor(amount / 15)} días de actividades culturales`,
      en: (amount: number) => `${Math.floor(amount / 15)} days of cultural activities`,
      ja: (amount: number) => `${Math.floor(amount / 15)}日間の文化活動`,
    },
    {
      icon: Users,
      pt: (amount: number) => `${Math.floor(amount / 30)} famílias com assistência mensal`,
      es: (amount: number) => `${Math.floor(amount / 30)} familias con asistencia mensual`,
      en: (amount: number) => `${Math.floor(amount / 30)} families with monthly assistance`,
      ja: (amount: number) => `${Math.floor(amount / 30)}家族に月間支援`,
    },
  ]

  const predefinedAmounts = [25, 50, 100, 200]

  return (
    <Card className="p-8 bg-muted">
      <h3 className="text-2xl font-bold text-foreground mb-6">
        {locale === "pt"
          ? "Simulador de Impacto"
          : locale === "es"
            ? "Simulador de Impacto"
            : locale === "ja"
              ? "影響シミュレーター"
              : "Impact Simulator"}
      </h3>

      <p className="text-muted-foreground mb-6">
        {locale === "pt"
          ? "Veja o impacto que sua doação pode gerar:"
          : locale === "es"
            ? "Vea el impacto que su donación puede generar:"
            : locale === "ja"
              ? "あなたの寄付が生み出せる影響を見てください:"
              : "See the impact your donation can generate:"}
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {predefinedAmounts.map((amount) => (
          <Button
            key={amount}
            variant={selectedAmount === amount ? "default" : "outline"}
            onClick={() => setSelectedAmount(amount)}
            className="h-auto py-3"
          >
            <div className="text-center">
              <div className="font-bold">R$ {amount}</div>
            </div>
          </Button>
        ))}
      </div>

      <div className="mb-6">
        <label className="text-sm text-muted-foreground mb-2 block">
          {locale === "pt"
            ? "Ou escolha um valor personalizado:"
            : locale === "es"
              ? "O elija un valor personalizado:"
              : locale === "ja"
                ? "またはカスタム値を選択してください:"
                : "Or choose a custom amount:"}
        </label>
        <div className="flex items-center gap-3">
          <span className="text-xl font-semibold">R$</span>
          <input
            type="range"
            min="10"
            max="500"
            step="5"
            value={selectedAmount}
            onChange={(e) => setSelectedAmount(Number(e.target.value))}
            className="flex-1"
          />
          <span className="text-xl font-bold text-primary min-w-[80px] text-right">{selectedAmount}</span>
        </div>
      </div>

      <div className="space-y-4 bg-background rounded-lg p-6">
        <h4 className="font-semibold text-foreground mb-4">
          {locale === "pt"
            ? `Com R$ ${selectedAmount}, você proporciona:`
            : locale === "es"
              ? `Con R$ ${selectedAmount}, proporciona:`
              : locale === "ja"
                ? `R$ ${selectedAmount}で、あなたは提供します:`
                : `With R$ ${selectedAmount}, you provide:`}
        </h4>
        {impactData.map((item, index) => {
          const getText = () => {
            if (locale === "es") return item.es(selectedAmount)
            if (locale === "en") return item.en(selectedAmount)
            if (locale === "ja") return item.ja(selectedAmount)
            return item.pt(selectedAmount)
          }

          return (
            <div key={index} className="flex items-center gap-3 text-muted-foreground">
              <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
              <span>{getText()}</span>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
