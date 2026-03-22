"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/lib/locale-context"

interface GalleryCategory {
  id: string
  title: string
  description: string
  coverImage: string
}

interface CommunityCategory {
  id: string
  title: string
  description: string
  coverImage: string
}

export default function GalleryPage() {
  const { locale } = useLocale()
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Color overlay mapping for each category
  const getCategoryOverlay = (categoryId: string): string => {
    const overlays: Record<string, string> = {
      arte: "from-blue-900/40 via-blue-800/30 to-blue-900/20",
      capoeira: "from-amber-600/40 via-yellow-600/30 to-amber-500/20",
      futebol: "from-green-600/40 via-green-500/30 to-emerald-500/20",
      judo: "from-red-950/50 via-red-900/40 to-red-800/30",
      musica: "from-purple-950/45 via-purple-900/35 to-purple-800/25",
      informatica: "from-cyan-700/45 via-blue-600/35 to-cyan-500/25",
      leitura: "from-amber-600/45 via-yellow-500/35 to-amber-500/25",
      gastronomia: "from-orange-600/50 via-amber-500/40 to-orange-400/30",
      educacao_ambiental: "from-green-700/35 via-teal-600/25 to-emerald-500/15",
      teatro: "from-purple-900/50 via-rose-800/40 to-purple-800/30",
      jovem_aprendiz: "from-blue-950/50 via-blue-900/40 to-slate-800/30",
      eventos: "from-yellow-500/45 via-amber-400/35 to-yellow-400/25",
      institucional: "from-blue-900/35 via-slate-800/25 to-blue-800/20",
      educacao: "from-emerald-600/30 via-green-500/20 to-emerald-400/15",
      alimentacao: "from-orange-700/40 via-orange-600/30 to-yellow-500/20",
      equipe: "from-slate-700/40 via-slate-600/30 to-blue-700/20",
    }
    return overlays[categoryId] || "from-black/40 via-black/30 to-black/20"
  }

  // Capoeira category images data
  const capoeiraImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/capoeira-01-fYoYGpa0YcPKjmOf1VCN5jxlmBrkGw.webp",
      caption: locale === "pt" ? "Aula de capoeira com alunos – Unidade Lapa" : locale === "es" ? "Clase de capoeira con estudiantes – Unidad Lapa" : locale === "ja" ? "カポエイラの授業 – ラパ ユニット" : "Capoeira class with students – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/capoeira-02-mvyJgFsNx0hlhEy9n2GYsgsbPVvvIi.webp",
      caption: locale === "pt" ? "Aula de capoeira com alunos – Unidade Lapa" : locale === "es" ? "Clase de capoeira con estudiantes – Unidad Lapa" : locale === "ja" ? "カポエイラの授業 – ラパ ユニット" : "Capoeira class with students – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/capoeira-03-nLFUazogdJnCdQ1eyxxfv14O03Z1XD.webp",
      caption: locale === "pt" ? "Aula de capoeira com alunos – Unidade Lapa" : locale === "es" ? "Clase de capoeira con estudiantes – Unidad Lapa" : locale === "ja" ? "カポエイラの授業 – ラパ ユニット" : "Capoeira class with students – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/capoeira-04-mwxlkfHr22lAsIpfKnpnsYbNWFkouH.webp",
      caption: locale === "pt" ? "Aula de capoeira com alunos – Unidade Lapa" : locale === "es" ? "Clase de capoeira con estudiantes – Unidad Lapa" : locale === "ja" ? "カポエイラの授業 – ラパ ユニット" : "Capoeira class with students – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/capoeira-05-6mvVZgz03K6mNlJ3B0VwrrzoB6BClY.webp",
      caption: locale === "pt" ? "Aula de capoeira com alunos – Unidade Lapa" : locale === "es" ? "Clase de capoeira con estudiantes – Unidad Lapa" : locale === "ja" ? "カポエイラの授業 – ラパ ユニット" : "Capoeira class with students – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/capoeira-06-vCqIG6aOsm96FPA5keOI36C1itpKqO.webp",
      caption: locale === "pt" ? "Aula de capoeira com alunos – Unidade Lapa" : locale === "es" ? "Clase de capoeira con estudiantes – Unidad Lapa" : locale === "ja" ? "カポエイラの授業 – ラパ ユニット" : "Capoeira class with students – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/capoeira-07-r7q3UY8lOpRxFlpT11hXbEZllF31rU.webp",
      caption: locale === "pt" ? "Aula de capoeira com alunos – Unidade Lapa" : locale === "es" ? "Clase de capoeira con estudiantes – Unidad Lapa" : locale === "ja" ? "カポエイラの授業 – ラパ ユニット" : "Capoeira class with students – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/capoeira-08-OCHSGY0zHOG4072cxwxt6SeeCEyoU3.webp",
      caption: locale === "pt" ? "Aula de capoeira com alunos – Unidade Lapa" : locale === "es" ? "Clase de capoeira con estudiantes – Unidad Lapa" : locale === "ja" ? "カポエイラの授業 – ラパ ユニット" : "Capoeira class with students – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/capoeira-10-LaOnPc3m0bsJaRgVRA5lxXQ4dTTwPS.webp",
      caption: locale === "pt" ? "Aula de capoeira com alunos – Unidade Lapa" : locale === "es" ? "Clase de capoeira con estudiantes – Unidad Lapa" : locale === "ja" ? "カポエイラの授業 – ラパ ユニット" : "Capoeira class with students – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/capoeira-11-MyjLJH1JFyYMWDZyDyxP5kxK9RHxPc.webp",
      caption: locale === "pt" ? "Aula de capoeira com alunos – Unidade Lapa" : locale === "es" ? "Clase de capoeira con estudiantes – Unidad Lapa" : locale === "ja" ? "カポエイラの授業 – ラパ ユニット" : "Capoeira class with students – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/capoeira-12-VlMsNp9G3XyLkTyWflgRt8Yp5YGZJJ.webp",
      caption: locale === "pt" ? "Aula de capoeira com alunos – Unidade Lapa" : locale === "es" ? "Clase de capoeira con estudiantes – Unidad Lapa" : locale === "ja" ? "カポエイラの授業 – ラパ ユニット" : "Capoeira class with students – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-capoeira-01-pF9FzzO7DHhdHxifH8PN1fMOEEg8gu.webp",
      caption: locale === "pt" ? "Capoeira em atividade – Unidade Vicente de Carvalho" : locale === "es" ? "Capoeira en actividad – Unidad Vicente de Carvalho" : locale === "ja" ? "カポエイラの活動 – ビセンテ・デ・カルバーリョ ユニット" : "Capoeira activity – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-capoeira-02-EcATzQ54yA9Xai1ooP8IS0JIasQ2xJ.webp",
      caption: locale === "pt" ? "Capoeira em atividade – Unidade Vicente de Carvalho" : locale === "es" ? "Capoeira en actividad – Unidad Vicente de Carvalho" : locale === "ja" ? "カポエイラの活動 – ビセンテ・デ・カルバーリョ ユニット" : "Capoeira activity – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-capoeira-03-9yotyvkuydfrSCyCbqlyYLBWuF5GsW.webp",
      caption: locale === "pt" ? "Capoeira em atividade – Unidade Vicente de Carvalho" : locale === "es" ? "Capoeira en actividad – Unidad Vicente de Carvalho" : locale === "ja" ? "カポエイラの活動 – ビセンテ・デ・カルバーリョ ユニット" : "Capoeira activity – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-capoeira-04-iDwLHFUPODCqU2tNCpT62RndSApMHQ.webp",
      caption: locale === "pt" ? "Capoeira em atividade – Unidade Vicente de Carvalho" : locale === "es" ? "Capoeira en actividad – Unidad Vicente de Carvalho" : locale === "ja" ? "カポエイラの活動 – ビセンテ・デ・カルバーリョ ユニット" : "Capoeira activity – Vicente de Carvalho Unit",
    },
  ]

  // Arte category images data
  const arteImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/art-01-aBBNqjxGw8YatM5puXkaY4Fig6A3UO.webp",
      caption: locale === "pt" ? "Oficina de arte com alunos – Unidade Lapa" : locale === "es" ? "Taller de arte con estudiantes – Unidad Lapa" : locale === "ja" ? "美術ワークショップ – ラパ ユニット" : "Art workshop with students – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-arte-01-ffBSTCvlT3Uak0ZjAQlsPz6rHooPXT.webp",
      caption: locale === "pt" ? "Atividade de arte – Unidade Vicente de Carvalho" : locale === "es" ? "Actividad de arte – Unidad Vicente de Carvalho" : locale === "ja" ? "美術活動 – ビセンテ・デ・カルバーリョ ユニット" : "Art activity – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/art-02-Xkz46ecxJWHuEhZVS7quyC5T4voKPR.webp",
      caption: locale === "pt" ? "Oficina de arte com alunos – Unidade Lapa" : locale === "es" ? "Taller de arte con estudiantes – Unidad Lapa" : locale === "ja" ? "美術ワークショップ – ラパ ユニット" : "Art workshop with students – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-arte-02-Iufsm8g4sNMZZlTIVXwuRtycZ23IOM.webp",
      caption: locale === "pt" ? "Atividade de arte – Unidade Vicente de Carvalho" : locale === "es" ? "Actividad de arte – Unidad Vicente de Carvalho" : locale === "ja" ? "美術活動 – ビセンテ・デ・カルバーリョ ユニット" : "Art activity – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/art-03-F9q6ca8sGgOFqanZPusBJCQLTnfItx.webp",
      caption: locale === "pt" ? "Oficina de arte com alunos – Unidade Lapa" : locale === "es" ? "Taller de arte con estudiantes – Unidad Lapa" : locale === "ja" ? "美術ワークショップ – ラパ ユニット" : "Art workshop with students – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/art-04-4clpPxa2mbvQF0T1DR5PndKoGTLNbs.webp",
      caption: locale === "pt" ? "Oficina de arte com alunos – Unidade Lapa" : locale === "es" ? "Taller de arte con estudiantes – Unidad Lapa" : locale === "ja" ? "美術ワークショップ – ラパ ユニット" : "Art workshop with students – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-arte-01-03-gxHPbwpWaOPmqZo17PEn4CVf5MMEge.webp",
      caption: locale === "pt" ? "Atividade de arte – Unidade Vicente de Carvalho" : locale === "es" ? "Actividad de arte – Unidad Vicente de Carvalho" : locale === "ja" ? "美術活動 – ビセンテ・デ・カルバーリョ ユニット" : "Art activity – Vicente de Carvalho Unit",
    },
  ]

  // Futebol category images data
  const futbolImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/futebol-01-qjVrTXdHIbTuFxsrCIK4r0EF6qhhFk.webp",
      caption: locale === "pt" ? "Atividade de futebol com alunos – Unidade Lapa" : locale === "es" ? "Actividad de fútbol con estudiantes – Unidad Lapa" : locale === "ja" ? "サッカー活動 – ラパ ユニット" : "Football activity with students – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/futebol-02-4hq3bocx21PXIbXFIvzrapsfsjmrbR.webp",
      caption: locale === "pt" ? "Atividade de futebol com alunos – Unidade Lapa" : locale === "es" ? "Actividad de fútbol con estudiantes – Unidad Lapa" : locale === "ja" ? "サッカー活動 – ラパ ユニット" : "Football activity with students – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/futebol-03-nVspiOoYshghvmHmeqGys9KBYNTLQq.webp",
      caption: locale === "pt" ? "Atividade de futebol com alunos – Unidade Lapa" : locale === "es" ? "Actividad de fútbol con estudiantes – Unidad Lapa" : locale === "ja" ? "サッカー活動 – ラパ ユニット" : "Football activity with students – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/futebol-04-cmQ9ZOTO0JpNLG6ksUs9tdnn3Ja3iD.webp",
      caption: locale === "pt" ? "Atividade de futebol com alunos – Unidade Lapa" : locale === "es" ? "Actividad de fútbol con estudiantes – Unidad Lapa" : locale === "ja" ? "サッカー活動 – ラパ ユニット" : "Football activity with students – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/futebol-05-uAB2LytmX5NCSfLI6q30WxH779GUhf.webp",
      caption: locale === "pt" ? "Atividade de futebol com alunos – Unidade Lapa" : locale === "es" ? "Actividad de fútbol con estudiantes – Unidad Lapa" : locale === "ja" ? "サッカー活動 – ラパ ユニット" : "Football activity with students – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/futebol-06-cN1Ji6p7ec36glABp96fb1pqdnDkiR.webp",
      caption: locale === "pt" ? "Atividade de futebol com alunos – Unidade Lapa" : locale === "es" ? "Actividad de fútbol con estudiantes – Unidad Lapa" : locale === "ja" ? "サッカー活動 – ラパ ユニット" : "Football activity with students – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/futebol-07-lNZyNSPsCwkhAjBoy6A60Zs2PIg11x.webp",
      caption: locale === "pt" ? "Atividade de futebol com alunos – Unidade Lapa" : locale === "es" ? "Actividad de fútbol con estudiantes – Unidad Lapa" : locale === "ja" ? "サッカー活動 – ラパ ユニット" : "Football activity with students – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-futbol-01-y1nTBBJJmYfVL4jL9hLIRInwXMeaUg.webp",
      caption: locale === "pt" ? "Treino de futebol – Unidade Vicente de Carvalho" : locale === "es" ? "Entrenamiento de fútbol – Unidad Vicente de Carvalho" : locale === "ja" ? "サッカートレーニング – ビセンテ・デ・カルバーリョ ユニット" : "Football training – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-futbol-02-F1xI46AiqDxOcKjYdI4RGqADgmxV6r.webp",
      caption: locale === "pt" ? "Treino de futebol – Unidade Vicente de Carvalho" : locale === "es" ? "Entrenamiento de fútbol – Unidad Vicente de Carvalho" : locale === "ja" ? "サッカートレーニング – ビセンテ・デ・カルバーリョ ユニット" : "Football training – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-futbol-03-ipowhJFK2A77xxyxXUd3WaocKrDWFB.webp",
      caption: locale === "pt" ? "Treino de futebol – Unidade Vicente de Carvalho" : locale === "es" ? "Entrenamiento de fútbol �� Unidad Vicente de Carvalho" : locale === "ja" ? "サッカートレーニング – ビセンテ・デ・カルバーリョ ユニット" : "Football training – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-futbol-04-Mgqkik9t2PLxWiOkJZ1agkICOhVhvS.webp",
      caption: locale === "pt" ? "Treino de futebol – Unidade Vicente de Carvalho" : locale === "es" ? "Entrenamiento de fútbol – Unidad Vicente de Carvalho" : locale === "ja" ? "サッカートレーニング – ビセンテ・デ・カルバーリョ ユニット" : "Football training – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-futbol-05-oeCI2e6LF8HGhaTltW2fPdHwLYrkj8.webp",
      caption: locale === "pt" ? "Treino de futebol – Unidade Vicente de Carvalho" : locale === "es" ? "Entrenamiento de fútbol – Unidad Vicente de Carvalho" : locale === "ja" ? "サッカートレーニング – ビセンテ・デ・カルバーリョ ユニット" : "Football training – Vicente de Carvalho Unit",
    },
  ]

  // Música category images data
  const musicaImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-musica-01-CBhAdQW0nBT0KAAEv3l4WVOGlWy5zu.webp",
      caption: locale === "pt" ? "Aula de música com alunos – Unidade Vicente de Carvalho" : locale === "es" ? "Clase de música con estudiantes – Unidad Vicente de Carvalho" : locale === "ja" ? "音楽の授業 – ビセンテ・デ・カルバーリョ ユニット" : "Music class with students – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-musica-02-T4dOAZti68ITdJziqyOCPcAbaS3NdE.webp",
      caption: locale === "pt" ? "Atividade musical com crianças" : locale === "es" ? "Actividad musical con niños" : locale === "ja" ? "音楽活動" : "Musical activity with children",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-musica-03-kuGkqoo1Pg40z0mqpxofBOboDvYIUX.webp",
      caption: locale === "pt" ? "Aula de música com alunos – Unidade Vicente de Carvalho" : locale === "es" ? "Clase de música con estudiantes – Unidad Vicente de Carvalho" : locale === "ja" ? "音楽の授業 – ビセンテ・デ・カルバーリョ ユニット" : "Music class with students – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-musica-04-JW2v19QhPWHec7v5FibxZIevbUIFY3.webp",
      caption: locale === "pt" ? "Atividade musical com crianças" : locale === "es" ? "Actividad musical con niños" : locale === "ja" ? "音楽活動" : "Musical activity with children",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-musica-05-ZtG1e1MkzBYa3o01gYsRr78Dw8IS3u.webp",
      caption: locale === "pt" ? "Aula de música com alunos – Unidade Vicente de Carvalho" : locale === "es" ? "Clase de música con estudiantes – Unidad Vicente de Carvalho" : locale === "ja" ? "音楽の授業 – ビセンテ・デ・カルバーリョ ユニット" : "Music class with students – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-musica-06-XiFvH1lZGmgc3Df9IFjCV9DE8WW1gJ.webp",
      caption: locale === "pt" ? "Atividade musical com crianças" : locale === "es" ? "Actividad musical con niños" : locale === "ja" ? "音楽活動" : "Musical activity with children",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-musica-07-94z6aSzPXLnsMoAAMXrc3YBQ7zX2mC.webp",
      caption: locale === "pt" ? "Aula de música com alunos – Unidade Vicente de Carvalho" : locale === "es" ? "Clase de música con estudiantes – Unidad Vicente de Carvalho" : locale === "ja" ? "音楽の授業 – ビセンテ・デ・カルバーリョ ユニット" : "Music class with students – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-musica-08-yZVTm5KorOD0Gqwro8IIOzRtycTmhG.webp",
      caption: locale === "pt" ? "Atividade musical com crianças" : locale === "es" ? "Actividad musical con niños" : locale === "ja" ? "音楽活動" : "Musical activity with children",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-musica-09-GM4NdAYYlPxIsGpBfUERivdukc6C3z.webp",
      caption: locale === "pt" ? "Aula de música com alunos – Unidade Vicente de Carvalho" : locale === "es" ? "Clase de música con estudiantes – Unidad Vicente de Carvalho" : locale === "ja" ? "音楽の授業 – ビセンテ・デ・カルバーリョ ユニット" : "Music class with students – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-musica-10-W9npo1qjd0vUGlyh0y5uoXU1yxeoZ7.webp",
      caption: locale === "pt" ? "Atividade musical com crianças" : locale === "es" ? "Actividad musical con niños" : locale === "ja" ? "音楽活動" : "Musical activity with children",
    },
  ]

  // Judô category images data
  const judoImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jud%C3%B4-01-rfUMMUtesl2Odlm736beKcNSJ1iyjO.webp",
      caption: locale === "pt" ? "Aula de judô com alunos – Unidade Lapa" : locale === "es" ? "Clase de judo con estudiantes – Unidad Lapa" : locale === "ja" ? "柔道の授業 – ラパ ユニット" : "Judo class with students – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jud%C3%B4-02-i4mGKTW1iDpbqcdR9q3aR67S3Koj9z.webp",
      caption: locale === "pt" ? "Aula de judô com alunos – Unidade Lapa" : locale === "es" ? "Clase de judo con estudiantes – Unidad Lapa" : locale === "ja" ? "柔道の授業 – ラパ ユニット" : "Judo class with students – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jud%C3%B4-03-Fz9OZAn86nkNa1hONaJRmyG889bsxz.webp",
      caption: locale === "pt" ? "Aula de judô com alunos – Unidade Lapa" : locale === "es" ? "Clase de judo con estudiantes – Unidad Lapa" : locale === "ja" ? "柔道の授業 – ラパ ユニット" : "Judo class with students – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-judo-01-nHFV9ICtCdFbSdEHh4gY51o7JVwBay.webp",
      caption: locale === "pt" ? "Treino de judô – Unidade Vicente de Carvalho" : locale === "es" ? "Entrenamiento de judo – Unidad Vicente de Carvalho" : locale === "ja" ? "柔道トレーニング – ビセンテ・デ・カルバーリョ ユニット" : "Judo training – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-judo-02-mT44hIE3pad1HYOl0s6KFrrdLK0k5z.webp",
      caption: locale === "pt" ? "Treino de judô – Unidade Vicente de Carvalho" : locale === "es" ? "Entrenamiento de judo – Unidad Vicente de Carvalho" : locale === "ja" ? "柔道トレーニング – ビセンテ・デ・カルバーリョ ユニット" : "Judo training – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-judo-03-8SlQBnzrP3jezFXUSallg4UwPDfw2v.webp",
      caption: locale === "pt" ? "Treino de judô – Unidade Vicente de Carvalho" : locale === "es" ? "Entrenamiento de judo – Unidad Vicente de Carvalho" : locale === "ja" ? "柔道トレーニング – ビセンテ・デ・カルバーリョ ユニット" : "Judo training – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-judo-04-pyt6LHjVz2RGCpFPEIZrvL1sr0MhGf.webp",
      caption: locale === "pt" ? "Treino de judô – Unidade Vicente de Carvalho" : locale === "es" ? "Entrenamiento de judo – Unidad Vicente de Carvalho" : locale === "ja" ? "柔道トレーニング – ビセンテ・デ・カルバーリョ ユニット" : "Judo training – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-judo-05-IegIbsm4wXKzK1foTtJhvLjte6TVSv.webp",
      caption: locale === "pt" ? "Treino de judô – Unidade Vicente de Carvalho" : locale === "es" ? "Entrenamiento de judo – Unidad Vicente de Carvalho" : locale === "ja" ? "柔道トレーニング – ビセンテ・デ・カルバーリョ ユニット" : "Judo training – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-judo-06-MbjzVJgL572t9tZNV8NSZTliFxxGEf.webp",
      caption: locale === "pt" ? "Treino de judô – Unidade Vicente de Carvalho" : locale === "es" ? "Entrenamiento de judo – Unidad Vicente de Carvalho" : locale === "ja" ? "柔道トレーニング – ビセンテ・デ・カルバーリョ ユニット" : "Judo training – Vicente de Carvalho Unit",
    },
  ]

  // Informática category images data
  const informaticaImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inform%C3%A1tica-01-v7bBoyBBtzZ30uQ5xIN4PIM9ngNSQo.webp",
      caption: locale === "pt" ? "Aula de informática com alunos – Unidade Lapa" : locale === "es" ? "Clase de informática con estudiantes – Unidad Lapa" : locale === "ja" ? "コンピュータ科学の授業 – ラパ ユニット" : "Computer class with students – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inform%C3%A1tica-02-3NxdCockNsXlcXNs3YJfzx1GSb79yL.webp",
      caption: locale === "pt" ? "Aula de informática com alunos – Unidade Lapa" : locale === "es" ? "Clase de informática con estudiantes – Unidad Lapa" : locale === "ja" ? "コンピュータ科学の授業 – ラパ ユニット" : "Computer class with students – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inform%C3%A1tica-03-eTMWkqi8OfsoPVFcDqqw8OLg7fmOvj.webp",
      caption: locale === "pt" ? "Aula de informática com alunos – Unidade Lapa" : locale === "es" ? "Clase de informática con estudiantes – Unidad Lapa" : locale === "ja" ? "コンピュータ科学の授業 – ラパ ユニット" : "Computer class with students – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inform%C3%A1tica-04-uXfkduquEHK5cpVRUvDvT8wEuvthwJ.webp",
      caption: locale === "pt" ? "Aula de informática com alunos – Unidade Lapa" : locale === "es" ? "Clase de informática con estudiantes – Unidad Lapa" : locale === "ja" ? "コンピュータ科学の授業 – ラパ ユニット" : "Computer class with students – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inform%C3%A1tica-05-C9F0SHJWUviDMx3gQIFEqmntwGdj9h.webp",
      caption: locale === "pt" ? "Aula de informática com alunos – Unidade Lapa" : locale === "es" ? "Clase de informática con estudiantes – Unidad Lapa" : locale === "ja" ? "コンピュータ科学の授業 – ラパ ユニット" : "Computer class with students – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inform%C3%A1tica-06-B7i6oAAYjPN6q5G1OIgvcszSjHLqpE.webp",
      caption: locale === "pt" ? "Aula de informática com alunos – Unidade Lapa" : locale === "es" ? "Clase de informática con estudiantes – Unidad Lapa" : locale === "ja" ? "コンピュータ科学の授業 – ラパ ユニット" : "Computer class with students – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-informatica-01-YlMnnNMmRRTNnL5Z1tTXdmQuFmLFPT.webp",
      caption: locale === "pt" ? "Atividade digital – Unidade Vicente de Carvalho" : locale === "es" ? "Actividad digital – Unidad Vicente de Carvalho" : locale === "ja" ? "デジタル活動 – ビセンテ・デ・カルバーリョ ユニット" : "Digital activity – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-informatica-02-6Kgslw9PASaIlE7v9Uc0YJIT9LY9oo.webp",
      caption: locale === "pt" ? "Atividade digital – Unidade Vicente de Carvalho" : locale === "es" ? "Actividad digital – Unidad Vicente de Carvalho" : locale === "ja" ? "デジタル活動 – ビセンテ・デ・カルバーリョ ユニット" : "Digital activity – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-informatica-03-CbQbh68U7MtrjKMK1cHiIs3C8VqfRS.webp",
      caption: locale === "pt" ? "Atividade digital – Unidade Vicente de Carvalho" : locale === "es" ? "Actividad digital – Unidad Vicente de Carvalho" : locale === "ja" ? "デジタル活動 – ビセンテ・デ・カルバーリョ ユニット" : "Digital activity – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-informatica-04-4TTgF6lxdRpFB6jYoX9w1bEc5mXQz3.webp",
      caption: locale === "pt" ? "Atividade digital – Unidade Vicente de Carvalho" : locale === "es" ? "Actividad digital – Unidad Vicente de Carvalho" : locale === "ja" ? "デジタル活動 – ビセンテ・デ・カルバーリョ ユニット" : "Digital activity – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-informatica-05-IPmB4kPHxPI90TV4kmp65UKCV2Y23e.webp",
      caption: locale === "pt" ? "Atividade digital – Unidade Vicente de Carvalho" : locale === "es" ? "Actividad digital – Unidad Vicente de Carvalho" : locale === "ja" ? "デジタル活動 – ビセンテ・デ・カルバーリョ ユニット" : "Digital activity – Vicente de Carvalho Unit",
    },
  ]

  // Leitura category images data
  const leituraImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-leitora-01-oO5Oa0UYlq2b1lT3TLJo8tMZ0wRR7i.webp",
      caption: locale === "pt" ? "Momento de leitura com crianças – Unidade Vicente de Carvalho" : locale === "es" ? "Momento de lectura con niños – Unidad Vicente de Carvalho" : locale === "ja" ? "読書の時間 – ビセンテ・デ・カルバーリョ ユニット" : "Reading moment with children – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-leitura-02-qwzb2nZS9Ivlc9ayxJwVTezviLlNXc.webp",
      caption: locale === "pt" ? "Atividade de leitura com alunos – Unidade Vicente de Carvalho" : locale === "es" ? "Actividad de lectura con estudiantes – Unidad Vicente de Carvalho" : locale === "ja" ? "読書活動 – ビセンテ・デ・カルバーリョ ユニット" : "Reading activity with students – Vicente de Carvalho Unit",
    },
  ]

  // Gastronomia category images data
  const gastronomiaImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-gastronomia-07-H2qFrfTonuJDduJ1pPfuLaONMn0pmr.webp",
      caption: locale === "pt" ? "Atividade de gastronomia com alunos – Unidade Vicente de Carvalho" : locale === "es" ? "Actividad de gastronomía con estudiantes – Unidad Vicente de Carvalho" : locale === "ja" ? "料理活動 – ビセンテ・デ・カルバーリョ ユニット" : "Gastronomy activity with students – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-gastronomia-02-qTCsvjFVTFBFhHGJvkmWCoXegcK4kx.webp",
      caption: locale === "pt" ? "Aula de culinária com alunos – Unidade Vicente de Carvalho" : locale === "es" ? "Clase de cocina con estudiantes – Unidad Vicente de Carvalho" : locale === "ja" ? "料理の授業 – ビセンテ・デ・カルバーリョ ユニット" : "Cooking class with students – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-refeicao-02-ZsgmWBRLSvLRUDVCePqPgqhAbs6N0P.webp",
      caption: locale === "pt" ? "Momento de refeição com alunos – Unidade Vicente de Carvalho" : locale === "es" ? "Momento de comida con estudiantes – Unidad Vicente de Carvalho" : locale === "ja" ? "食事の時間 – ビセンテ・デ・カルバーリョ ユニット" : "Mealtime moment with students – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-gastronomia-04-RAidWarWo0B473bVATPcqrg40H6wqN.webp",
      caption: locale === "pt" ? "Atividade de gastronomia com alunos – Unidade Vicente de Carvalho" : locale === "es" ? "Actividad de gastronomía con estudiantes – Unidad Vicente de Carvalho" : locale === "ja" ? "料理活動 – ビセンテ・デ・カルバーリョ ユニット" : "Gastronomy activity with students – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-gastronomia-06-LKjQxMQEae27chUwpPbWi9OeLAKzdc.webp",
      caption: locale === "pt" ? "Aula de culinária com alunos – Unidade Vicente de Carvalho" : locale === "es" ? "Clase de cocina con estudiantes – Unidad Vicente de Carvalho" : locale === "ja" ? "料理の授業 – ビセンテ・デ・カルバーリョ ユニット" : "Cooking class with students – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-refeicao-01-Tlx19JuPUutLtku5GuHAtamDD6q6jB.webp",
      caption: locale === "pt" ? "Momento de refeição com alunos – Unidade Vicente de Carvalho" : locale === "es" ? "Momento de comida con estudiantes – Unidad Vicente de Carvalho" : locale === "ja" ? "食事の時間 – ビセンテ・デ・カルバーリョ ユニット" : "Mealtime moment with students – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-gastronomia-01-Qy6u3Sqrfouut5SPp0skQ0vvqyRxUE.webp",
      caption: locale === "pt" ? "Aula de culinária com alunos – Unidade Vicente de Carvalho" : locale === "es" ? "Clase de cocina con estudiantes – Unidad Vicente de Carvalho" : locale === "ja" ? "料理の授業 – ビセンテ・デ・カルバーリョ ユニット" : "Cooking class with students – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-gastronomia-03-kRIVHBLCPAqe1kKbOrhPcQbVpblX0u.webp",
      caption: locale === "pt" ? "Atividade de gastronomia com alunos – Unidade Vicente de Carvalho" : locale === "es" ? "Actividad de gastronomía con estudiantes – Unidad Vicente de Carvalho" : locale === "ja" ? "料理活動 – ビセンテ・デ・カルバーリョ ユニット" : "Gastronomy activity with students – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-gastronomia-05-dOB7UoHMhdz45ZIq0J9Vu6TP3dGNIJ.webp",
      caption: locale === "pt" ? "Atividade de gastronomia com alunos – Unidade Vicente de Carvalho" : locale === "es" ? "Actividad de gastronomía con estudiantes – Unidad Vicente de Carvalho" : locale === "ja" ? "料理活動 – ビセンテ・デ・カルバーリョ ユニット" : "Gastronomy activity with students – Vicente de Carvalho Unit",
    },
  ]

  // Teatro category images data
  const teatroImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/teatro-01-zXA5SykS6ePaOdoWvnGuKwquAQq3XQ.webp",
      caption: locale === "pt" ? "Atividade teatral com alunos" : locale === "es" ? "Actividad teatral con estudiantes" : locale === "ja" ? "演劇活動" : "Theater activity with students",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/teatro-02-fnMnevuXI652vxUZbzFmSDUO4ewUdV.webp",
      caption: locale === "pt" ? "Expressão artística em grupo" : locale === "es" ? "Expresión artística en grupo" : locale === "ja" ? "グループ芸術表現" : "Artistic expression in group",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/teatro-03-ulNxWkey1Uo826txkPBpiPMlysYW7i.webp",
      caption: locale === "pt" ? "Atividade teatral com alunos" : locale === "es" ? "Actividad teatral con estudiantes" : locale === "ja" ? "演劇活動" : "Theater activity with students",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/teatro-04-xoLSY1MoAxUytFq6vKlhEjM2dounQF.webp",
      caption: locale === "pt" ? "Expressão artística em grupo" : locale === "es" ? "Expresión artística en grupo" : locale === "ja" ? "グループ芸術表現" : "Artistic expression in group",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/teatro-05-PUBhLHGV5Gwrnc7NcHRCQQOmmrhFD2.webp",
      caption: locale === "pt" ? "Atividade teatral com alunos" : locale === "es" ? "Actividad teatral con estudiantes" : locale === "ja" ? "演劇活動" : "Theater activity with students",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/teatro-06-ZF6JJI5I7IDw2wyRwVz8v1xwvKgDzM.webp",
      caption: locale === "pt" ? "Expressão artística em grupo" : locale === "es" ? "Expresión artística en grupo" : locale === "ja" ? "グループ芸術表現" : "Artistic expression in group",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/teatro-07-iHj6Y72plBARENscsaGBUxNejpBO33.webp",
      caption: locale === "pt" ? "Atividade teatral com alunos" : locale === "es" ? "Actividad teatral con estudiantes" : locale === "ja" ? "演劇活動" : "Theater activity with students",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/teatro-08-ALRvnFcvwOEefcqhakVCbRdXrxb6q3.webp",
      caption: locale === "pt" ? "Expressão artística em grupo" : locale === "es" ? "Expresión artística en grupo" : locale === "ja" ? "グループ芸術表現" : "Artistic expression in group",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/teatro-09-3b7TmyNYP24f4CP0h95s8vUqgWZntC.webp",
      caption: locale === "pt" ? "Atividade teatral com alunos" : locale === "es" ? "Actividad teatral con estudiantes" : locale === "ja" ? "演劇活動" : "Theater activity with students",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/teatro-10-vKyAlv7Hae9WmpLKOSCkYBC1ngow0S.webp",
      caption: locale === "pt" ? "Expressão artística em grupo" : locale === "es" ? "Expresión artística en grupo" : locale === "ja" ? "グループ芸術表現" : "Artistic expression in group",
    },
  ]

  // Educação category images data
  const educacaoImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/crian%C3%A7as%20e%20diretor%20da%20SM-04-Qugxs9MXra6c5DbLYRtp8l7dih2Z5c.webp",
      caption: locale === "pt" ? "Momento de aprendizagem com crianças" : locale === "es" ? "Momento de aprendizaje con niños" : locale === "ja" ? "子どもたちとの学習の瞬間" : "Learning moment with children",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/crian%C3%A7as%20e%20funcionarios%20abordagem-05-c3ayd2wbCPTd6Ml57R47tPF910ggk4.webp",
      caption: locale === "pt" ? "Acompanhamento pedagógico com alunos" : locale === "es" ? "Seguimiento pedagógico con estudiantes" : locale === "ja" ? "学生との教育的フォローアップ" : "Educational monitoring with students",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/crian%C3%A7as%20e%20funcion%C3%A1rios%20abordagem-04-UWCdIlot0sc5omigW5Ur8u24yPiYrE.webp",
      caption: locale === "pt" ? "Acompanhamento pedagógico com alunos" : locale === "es" ? "Seguimiento pedagógico con estudiantes" : locale === "ja" ? "学生との教育的フォローアップ" : "Educational monitoring with students",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/crian%C3%A7as%20e%20funcion%C3%A1rios%20abordagem-08-OhfKOBf2KBQUWRKvh46N3FkGTKvYzA.webp",
      caption: locale === "pt" ? "Momento de aprendizagem com crianças" : locale === "es" ? "Momento de aprendizaje con niños" : locale === "ja" ? "子どもたちとの学習の瞬間" : "Learning moment with children",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/crian%C3%A7as%20e%20familiares-02-EkVv3gzSuKcQYCJS6rLLutG7JxUz5f.webp",
      caption: locale === "pt" ? "Atividade educativa com alunos – Unidade Lapa" : locale === "es" ? "Actividad educativa con estudiantes – Unidad Lapa" : locale === "ja" ? "教育活動 – ラパ ユニット" : "Educational activity with students – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/crian%C3%A7as%20e%20diretor%20da%20SM-01-juBbT9ff4bdx2N2kXJ2vvJtktsNpIt.webp",
      caption: locale === "pt" ? "Acompanhamento pedagógico com alunos" : locale === "es" ? "Seguimiento pedagógico con estudiantes" : locale === "ja" ? "学生との教育的フォローアップ" : "Educational monitoring with students",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/crian%C3%A7as%20e%20funcion%C3%A1rios%20abordagem-09-IT5STt4ox0Rq6CCHseASNvK1SnvzIH.webp",
      caption: locale === "pt" ? "Momento de aprendizagem com crianças" : locale === "es" ? "Momento de aprendizaje con niños" : locale === "ja" ? "子どもたちとの学習の瞬間" : "Learning moment with children",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/crian%C3%A7as%20e%20funcion%C3%A1rios%20abordagem-02-UHhSdgtgjCUXN6LnmFUotHeO5uppRG.webp",
      caption: locale === "pt" ? "Atividade educativa com alunos – Unidade Lapa" : locale === "es" ? "Actividad educativa con estudiantes – Unidad Lapa" : locale === "ja" ? "教育活動 – ラパ ユニット" : "Educational activity with students – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/crian%C3%A7as%20e%20funcion%C3%A1rios%20abordagem-06-FWVogZsdA7HIrs6mrWlInr8jB4qVt6.webp",
      caption: locale === "pt" ? "Acompanhamento pedagógico com alunos" : locale === "es" ? "Seguimiento pedagógico con estudiantes" : locale === "ja" ? "学生との教育的フォローアップ" : "Educational monitoring with students",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/crian%C3%A7as%20e%20funcion%C3%A1rios%20abordagem-07-0YcuYAzSYveyJuZiiCicKARJfQdKzU.webp",
      caption: locale === "pt" ? "Momento de aprendizagem com crianças" : locale === "es" ? "Momento de aprendizaje con niños" : locale === "ja" ? "子どもたちとの学習の瞬間" : "Learning moment with children",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/crian%C3%A7as%20e%20diretor%20da%20SM-03-HPe33ucSiGflil0zODsQDRBaOVT7Q7.webp",
      caption: locale === "pt" ? "Atividade educativa com alunos – Unidade Lapa" : locale === "es" ? "Actividad educativa con estudiantes – Unidad Lapa" : locale === "ja" ? "教育活動 – ラパ ユニット" : "Educational activity with students – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/crian%C3%A7as%20e%20diretor%20da%20SM-02-mN1yEButP0rE7Ymi82xB54O9lyGiZ9.webp",
      caption: locale === "pt" ? "Acompanhamento pedagógico com alunos" : locale === "es" ? "Seguimiento pedagógico con estudiantes" : locale === "ja" ? "学生との教育的フォローアップ" : "Educational monitoring with students",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/crian%C3%A7as%20e%20familiares-01-n96A5rSGkErkGQR12UWnpBUijXspkG.webp",
      caption: locale === "pt" ? "Momento de aprendizagem com crianças" : locale === "es" ? "Momento de aprendizaje con niños" : locale === "ja" ? "子どもたちとの学習の瞬間" : "Learning moment with children",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/crian%C3%A7as%20e%20funcion%C3%A1rios%20abordagem-01-J9HnOYfcDcW7qRk59vs1hbPyTOlof0.webp",
      caption: locale === "pt" ? "Atividade educativa com alunos – Unidade Lapa" : locale === "es" ? "Actividad educativa con estudiantes – Unidad Lapa" : locale === "ja" ? "教育活動 – ラパ ユニット" : "Educational activity with students – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/crian%C3%A7as%20e%20funcion%C3%A1rios%20abordagem-03-gjtcPKkqSvEgmAveSPrbANbq0hjyDC.webp",
      caption: locale === "pt" ? "Acompanhamento pedagógico com alunos" : locale === "es" ? "Seguimiento pedagógico con estudiantes" : locale === "ja" ? "学生との教育的フォローアップ" : "Educational monitoring with students",
    },
  ]

  // Institucional category images data
  const institucionalImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unidade01-uxZv8W3bb6g0fTQGEPvkUgHKMDyu7v.webp",
      caption: locale === "pt" ? "Unidade São Martinho" : locale === "es" ? "Unidad São Martinho" : locale === "ja" ? "ユニット サン・マルティーニョ" : "São Martinho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-equipe-01-xgyWRiN9cYng4izXE8tTntQ7pBVcde.webp",
      caption: locale === "pt" ? "Equipe em atividade – Unidade Vicente de Carvalho" : locale === "es" ? "Equipo en actividad – Unidad Vicente de Carvalho" : locale === "ja" ? "活動中のチーム – ビセンテ・デ・カルバーリョ ユニット" : "Team in activity – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unidade-02-GWUEpcC3fqIsB79UKyinDlXgUrobge.webp",
      caption: locale === "pt" ? "Unidade São Martinho" : locale === "es" ? "Unidad São Martinho" : locale === "ja" ? "ユニット サン・マルティーニョ" : "São Martinho Unit",
    },
  ]

  // Jovem Aprendiz category images data
  const aprendizImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jovem%20aprendiz-01-U6BBmEEBGoRY0PC9caT2loozLanipA.webp",
      caption: locale === "pt" ? "Programa Jovem Aprendiz – Unidade Lapa" : locale === "es" ? "Programa Joven Aprendiz – Unidad Lapa" : locale === "ja" ? "ヤングアプレンティス プログラム – ラパ ユニット" : "Young Apprentice Program – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jovem%20aprendiz-02-gvdOuDW6ch2v2aWanN55GqjUQwUVMg.webp",
      caption: locale === "pt" ? "Formação profissional de jovens – Unidade Vicente de Carvalho" : locale === "es" ? "Capacitación profesional de jóvenes – Unidad Vicente de Carvalho" : locale === "ja" ? "若者の職業訓練 – ビセンテ・デ・カルバーリョ ユニット" : "Professional training for young people – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jovem%20aprendiz-03-8WfzwOnm30uEXblRKddzLQKdHSuvg4.webp",
      caption: locale === "pt" ? "Programa Jovem Aprendiz – Unidade Lapa" : locale === "es" ? "Programa Joven Aprendiz – Unidad Lapa" : locale === "ja" ? "ヤングアプレンティス プログラム – ラパ ユニット" : "Young Apprentice Program – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jovem%20aprendiz-04-7ckdEJvP7og7V2VlqhHAUacx7RDMJq.webp",
      caption: locale === "pt" ? "Formação profissional de jovens – Unidade Vicente de Carvalho" : locale === "es" ? "Capacitación profesional de jóvenes – Unidad Vicente de Carvalho" : locale === "ja" ? "若者の職業訓練 – ビセンテ・デ・カルバーリョ ユニット" : "Professional training for young people – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jovem%20aprendiz-05-rxvMJoPBUjHXcZoGniCWwMD8FQs9Bc.webp",
      caption: locale === "pt" ? "Programa Jovem Aprendiz – Unidade Lapa" : locale === "es" ? "Programa Joven Aprendiz – Unidad Lapa" : locale === "ja" ? "ヤングアプレンティス プログラム – ラパ ユニット" : "Young Apprentice Program – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jovem%20aprendiz-06-X6KaCURhtbvpcCVoNpiqRsH4ozedMI.webp",
      caption: locale === "pt" ? "Formação profissional de jovens – Unidade Vicente de Carvalho" : locale === "es" ? "Capacitación profesional de jóvenes – Unidad Vicente de Carvalho" : locale === "ja" ? "若者の職業訓練 – ビセンテ・デ・カルバーリョ ユニット" : "Professional training for young people – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jovem%20aprendiz-07-qHEyFrwtxbdUpzsqjU3Ihq5NDGnHTK.webp",
      caption: locale === "pt" ? "Programa Jovem Aprendiz – Unidade Lapa" : locale === "es" ? "Programa Joven Aprendiz – Unidad Lapa" : locale === "ja" ? "ヤングアプレンティス プログラム – ラパ ユニット" : "Young Apprentice Program – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jovem%20aprendiz-09-nCkzZihwNt6mzknNYJ6qEsOgvQ5Szr.webp",
      caption: locale === "pt" ? "Formação profissional de jovens – Unidade Vicente de Carvalho" : locale === "es" ? "Capacitación profesional de jóvenes – Unidad Vicente de Carvalho" : locale === "ja" ? "若者の職業訓練 – ビセンテ・デ・カルバーリョ ユニット" : "Professional training for young people – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jovem%20aprendiz-10-4U3rPs7YCOZS1JxJMLOL2P0axPAuoz.webp",
      caption: locale === "pt" ? "Programa Jovem Aprendiz – Unidade Lapa" : locale === "es" ? "Programa Joven Aprendiz – Unidad Lapa" : locale === "ja" ? "ヤングアプレンティス プログラム – ラパ ユニット" : "Young Apprentice Program – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jovem%20aprendiz-11-ESEiRcjwJDQBoWS35e4Ep1jPf9bFC5.webp",
      caption: locale === "pt" ? "Formação profissional de jovens – Unidade Vicente de Carvalho" : locale === "es" ? "Capacitación profesional de jóvenes – Unidad Vicente de Carvalho" : locale === "ja" ? "若者の職業訓練 – ビセンテ・デ・カルバーリョ ユニット" : "Professional training for young people – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jovem%20aprendiz-12-eGCmGiE0f2eKP6jmysOHgPPND2nNdO.webp",
      caption: locale === "pt" ? "Programa Jovem Aprendiz – Unidade Lapa" : locale === "es" ? "Programa Joven Aprendiz – Unidad Lapa" : locale === "ja" ? "ヤングアプレンティス プログラム – ラパ ユニット" : "Young Apprentice Program – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jovem%20aprendiz-13-B0eLV0bh3zxvpuDUq9kAzdAlSgmYoM.webp",
      caption: locale === "pt" ? "Formação profissional de jovens – Unidade Vicente de Carvalho" : locale === "es" ? "Capacitación profesional de jóvenes – Unidad Vicente de Carvalho" : locale === "ja" ? "若者の職業訓練 – ビセンテ・デ・カルバーリョ ユニット" : "Professional training for young people – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jovem%20aprendiz-14-BdBSYu1KBZyH7hNlBa3E0KbfNUEkjc.webp",
      caption: locale === "pt" ? "Programa Jovem Aprendiz – Unidade Lapa" : locale === "es" ? "Programa Joven Aprendiz – Unidad Lapa" : locale === "ja" ? "ヤングアプレンティス プログラム – ラパ ユニット" : "Young Apprentice Program – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jovem%20aprendiz-15-BrJObh0u4MZP4orLr2srt6yVeEaNQK.webp",
      caption: locale === "pt" ? "Formação profissional de jovens – Unidade Vicente de Carvalho" : locale === "es" ? "Capacitación profesional de jóvenes – Unidad Vicente de Carvalho" : locale === "ja" ? "若者の職業訓練 – ビセンテ・デ・カルバーリョ ユニット" : "Professional training for young people – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jovem%20aprendiz-16-g7WdisiwrhrgLAZd81RBFUve29SnHK.webp",
      caption: locale === "pt" ? "Programa Jovem Aprendiz – Unidade Lapa" : locale === "es" ? "Programa Joven Aprendiz – Unidad Lapa" : locale === "ja" ? "ヤングアプレンティス プログラム – ラパ ユニット" : "Young Apprentice Program – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jovem%20aprendiz-17-b3QHTqOYiudtVyjRR8HjsmCXjUD3wS.webp",
      caption: locale === "pt" ? "Formação profissional de jovens – Unidade Vicente de Carvalho" : locale === "es" ? "Capacitación profesional de jóvenes – Unidad Vicente de Carvalho" : locale === "ja" ? "若者の職業訓練 – ビセンテ・デ・カルバーリョ ユニット" : "Professional training for young people – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jovem%20aprendiz-18-vqhhAEXnXEDDxIhs3TmKzZ2Gy8amRL.webp",
      caption: locale === "pt" ? "Programa Jovem Aprendiz – Unidade Lapa" : locale === "es" ? "Programa Joven Aprendiz – Unidad Lapa" : locale === "ja" ? "ヤングアプレンティス プログラム – ラパ ユニット" : "Young Apprentice Program – Lapa Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jovem%20aprendiz-20-tF3iyhJNsIFAXC4Wf0wRDjKCUigZly.webp",
      caption: locale === "pt" ? "Formação profissional de jovens – Unidade Vicente de Carvalho" : locale === "es" ? "Capacitación profesional de jóvenes – Unidad Vicente de Carvalho" : locale === "ja" ? "若者の職業訓練 – ビセンテ・デ・カルバーリョ ユニット" : "Professional training for young people – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jovem%20aprendiz-21-NNAZifWActVCqYOYmELnyCeFoqyVss.webp",
      caption: locale === "pt" ? "Programa Jovem Aprendiz – Unidade Lapa" : locale === "es" ? "Programa Joven Aprendiz – Unidad Lapa" : locale === "ja" ? "ヤングアプレンティス プログラム – ラパ ユニット" : "Young Apprentice Program – Lapa Unit",
    },
  ]

  // Educação Ambiental category images data
  const ambientalImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-educacao%20ambiental-01-sYV1iPOqQelwi8I24PCKntDDYXx48q.webp",
      caption: locale === "pt" ? "Atividade de educação ambiental com alunos – Unidade Vicente de Carvalho" : locale === "es" ? "Actividad de educación ambiental con estudiantes – Unidad Vicente de Carvalho" : locale === "ja" ? "環境教育活動 – ビセンテ・デ・カルバーリョ ユニット" : "Environmental education activity with students – Vicente de Carvalho Unit",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-educacao%20ambiental-02-wXEJMavPDzdkCb3Jd06B6ES9vBVwOw.webp",
      caption: locale === "pt" ? "Cuidado com a horta e meio ambiente" : locale === "es" ? "Cuidado de la huerta y el medio ambiente" : locale === "ja" ? "庭園と環境のケア" : "Garden and environment care",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-educacao%20ambiental-03-I5LrLO99Wpj7YLkqsguHvbRMg6ipWx.webp",
      caption: locale === "pt" ? "Atividade de educação ambiental com alunos – Unidade Vicente de Carvalho" : locale === "es" ? "Actividad de educación ambiental con estudiantes – Unidad Vicente de Carvalho" : locale === "ja" ? "環境教育活動 – ビセンテ・デ・カルバーリョ ユニット" : "Environmental education activity with students – Vicente de Carvalho Unit",
    },
  ]

  // Eventos category images data
  // Alimentação category images data
  const alimentacaoImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-refeicao-02-J4YKHL7k4JrbmZyaoG3AphKbZRjs4b.webp",
      caption: locale === "pt" ? "Refeição e alimentação com crianças" : locale === "es" ? "Comida y alimentación con niños" : locale === "ja" ? "子どもたちとの食事と栄養" : "Mealtime and nutrition with children",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-refeicao-01-wTRbLd4yBxV7gVyi0lHmnowKSwWOO7.webp",
      caption: locale === "pt" ? "Momento de alimentação saudável" : locale === "es" ? "Momento de alimentación saludable" : locale === "ja" ? "健康的な食事の時間" : "Moment of healthy nutrition",
    },
  ]

  // Equipe category images data
  const equipeSaoMartinhoImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/crian%C3%A7as%20e%20funcion%C3%A1rios%20abordagem-04-TKpWS4r5T9BFGpDxsgjV7PulPSRt7C.webp",
      caption: locale === "pt" ? "Educadores guiando crianças" : locale === "es" ? "Educadores guiando niños" : locale === "ja" ? "子どもたちを導く教育者" : "Educators guiding children",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/crian%C3%A7as%20e%20funcion%C3%A1rios%20abordagem-06-olFZI9y1EUV6XgC8nw4TgFLcLEb2pq.webp",
      caption: locale === "pt" ? "Mentores que inspiram" : locale === "es" ? "Mentores que inspiran" : locale === "ja" ? "鼓舞するメンター" : "Mentors who inspire",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/crian%C3%A7as%20e%20funcion%C3%A1rios%20abordagem-07-nO3xa5reEEgc7Q931XCOKcHPXxKCWR.webp",
      caption: locale === "pt" ? "Momento de apoio e cuidado" : locale === "es" ? "Momento de apoyo y cuidado" : locale === "ja" ? "サポートとケアの瞬間" : "Moment of support and care",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/crian%C3%A7as%20e%20funcion%C3%A1rios%20abordagem-08-uO2edujgwVUHJBqNacxcQ9cpJe8JlR.webp",
      caption: locale === "pt" ? "Interação e orientação educacional" : locale === "es" ? "Interacción y orientación educativa" : locale === "ja" ? "相互作用と教育的指導" : "Interaction and educational guidance",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/crian%C3%A7as%20e%20funcion%C3%A1rios%20abordagem-09-3jnezimTrv9ExQBEjpJ7C4sOUSPLqa.webp",
      caption: locale === "pt" ? "Profissional transformando vidas" : locale === "es" ? "Profesional transformando vidas" : locale === "ja" ? "人生を変える専門家" : "Professional transforming lives",
    },
  ]

  const eventosImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-criancas%20pose-01-pkbAJzZ6So1lJ963vmHxPS7aFFh7ls.webp",
      caption: locale === "pt" ? "Momento de convivência com crianças" : locale === "es" ? "Momento de convivencia con niños" : locale === "ja" ? "子どもとの交流の時間" : "Moment of togetherness with children",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-criancas%20pose-02-4biTs1I9YUIInEkBqOfarakB5wqiFq.webp",
      caption: locale === "pt" ? "Evento com alunos e comunidade" : locale === "es" ? "Evento con estudiantes y comunidad" : locale === "ja" ? "生徒とコミュニティのイベント" : "Event with students and community",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-criancas%20pose-03-Ed06SuEV9jWwuVKoi4YK02IKXohzpD.webp",
      caption: locale === "pt" ? "Momento de convivência com crianças" : locale === "es" ? "Momento de convivencia con niños" : locale === "ja" ? "子どもとの交流の時間" : "Moment of togetherness with children",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-criancas%20pose-04-78tge2gKwsxgWpQnVSPbLef9zzJrsy.webp",
      caption: locale === "pt" ? "Evento com alunos e comunidade" : locale === "es" ? "Evento con estudiantes y comunidad" : locale === "ja" ? "生徒とコミュニティのイベント" : "Event with students and community",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-criancas%20pose-05-wdVgWJtdrkFcG8lQaofwQx5MHU4BDQ.webp",
      caption: locale === "pt" ? "Momento de convivência com crianças" : locale === "es" ? "Momento de convivencia con niños" : locale === "ja" ? "子どもとの交流の時間" : "Moment of togetherness with children",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-criancas%20pose-06-7785w4l5MLRoSrhlZ1K2bnW8MJbdyS.webp",
      caption: locale === "pt" ? "Evento com alunos e comunidade" : locale === "es" ? "Evento con estudiantes y comunidad" : locale === "ja" ? "生徒とコミュニティのイベント" : "Event with students and community",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-criancas%20pose-07-fjL8lqrefHsz7r1f2vT37iVeG1xRSI.webp",
      caption: locale === "pt" ? "Momento de convivência com crianças" : locale === "es" ? "Momento de convivencia con niños" : locale === "ja" ? "子どもとの交流の時間" : "Moment of togetherness with children",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-criancas%20pose-08-1jyXBZo5aD6CdjlVLlNr0EtjuHrjMV.webp",
      caption: locale === "pt" ? "Evento com alunos e comunidade" : locale === "es" ? "Evento con estudiantes y comunidad" : locale === "ja" ? "生徒とコミュニティのイベント" : "Event with students and community",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-criancas%20pose-09-dLL2rmO5p60Fg9rXqzB6IIseoxlYi4.webp",
      caption: locale === "pt" ? "Momento de convivência com crianças" : locale === "es" ? "Momento de convivencia con niños" : locale === "ja" ? "子どもとの交流の時間" : "Moment of togetherness with children",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-criancas%20pose-10-Y46OBaZYRP7p5AQ1L3LnNSGFJmDMRQ.webp",
      caption: locale === "pt" ? "Evento com alunos e comunidade" : locale === "es" ? "Evento con estudiantes y comunidad" : locale === "ja" ? "生徒とコミュニティのイベント" : "Event with students and community",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-criancas%20pose-11-PSY9jId5I0hiPHO6aZeL4obgzQyLhw.webp",
      caption: locale === "pt" ? "Momento de convivência com crianças" : locale === "es" ? "Momento de convivencia con niños" : locale === "ja" ? "子どもとの交流の時間" : "Moment of togetherness with children",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-criancas%20pose-12-p6r0xfu7nQsdys4oGNhR56Va3namvu.webp",
      caption: locale === "pt" ? "Evento com alunos e comunidade" : locale === "es" ? "Evento con estudiantes y comunidad" : locale === "ja" ? "生徒とコミュニティのイベント" : "Event with students and community",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-criancas%20pose-13-uHI1brLswKueHSrOv4THROa831t6ob.webp",
      caption: locale === "pt" ? "Momento de convivência com crianças" : locale === "es" ? "Momento de convivencia con niños" : locale === "ja" ? "子どもとの交流の時間" : "Moment of togetherness with children",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-criancas%20pose-14-vKJjP5SO9swYRfN98KxjLGzURWK2PP.webp",
      caption: locale === "pt" ? "Evento com alunos e comunidade" : locale === "es" ? "Evento con estudiantes y comunidad" : locale === "ja" ? "��徒とコミュニティのイベント" : "Event with students and community",
    },
  ]

  const categories: GalleryCategory[] = [
    {
      id: "educacao",
      title: locale === "pt" ? "Educação" : locale === "es" ? "Educación" : locale === "ja" ? "教育" : "Education",
      description:
        locale === "pt"
          ? "Atividades educativas e desenvolvimento acadêmico"
          : locale === "es"
            ? "Actividades educativas y desarrollo académico"
            : locale === "ja"
              ? "教育活動と学問的発展"
              : "Educational activities and academic development",
      coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/crian%C3%A7as%20e%20diretor%20da%20SM-02-mN1yEButP0rE7Ymi82xB54O9lyGiZ9.webp",
    },
    {
      id: "arte",
      title: locale === "pt" ? "Arte" : locale === "es" ? "Arte" : locale === "ja" ? "美術" : "Art",
      description:
        locale === "pt"
          ? "Expressão criativa e desenvolvimento artístico"
          : locale === "es"
            ? "Expresión creativa y desarrollo artístico"
            : locale === "ja"
              ? "創造的表現と芸術的発展"
              : "Creative expression and artistic development",
      coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/art-01-aBBNqjxGw8YatM5puXkaY4Fig6A3UO.webp",
    },
    {
      id: "capoeira",
      title: locale === "pt" ? "Capoeira" : locale === "es" ? "Capoeira" : locale === "ja" ? "カポエイラ" : "Capoeira",
      description:
        locale === "pt"
          ? "Dança e arte marcial que valoriza a cultura afro-brasileira"
          : locale === "es"
            ? "Danza y arte marcial que valora la cultura afrobrasileña"
            : locale === "ja"
              ? "アフロブラジル文化を大切にするダンスと武道"
              : "Dance and martial art that values Afro-Brazilian culture",
      coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/capoeira-03-nLFUazogdJnCdQ1eyxxfv14O03Z1XD.webp",
    },
    {
      id: "futebol",
      title: locale === "pt" ? "Futebol" : locale === "es" ? "Fútbol" : locale === "ja" ? "サッカー" : "Football",
      description:
        locale === "pt"
          ? "Práticas de futebol que promovem saúde e integração"
          : locale === "es"
            ? "Prácticas de fútbol que promueven la salud y la integración"
            : locale === "ja"
              ? "健康と統合を促進するサッカーの実践"
              : "Football practices that promote health and integration",
      coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/futebol-01-qjVrTXdHIbTuFxsrCIK4r0EF6qhhFk.webp",
    },
    {
      id: "judo",
      title: locale === "pt" ? "Judô" : locale === "es" ? "Judo" : locale === "ja" ? "柔道" : "Judo",
      description:
        locale === "pt"
          ? "Disciplina, respeito e força mental através das artes marciais"
          : locale === "es"
            ? "Disciplina, respeto y fortaleza mental a través de las artes marciales"
            : locale === "ja"
              ? "格闘技を通じた規律、尊重、精神力"
              : "Discipline, respect and mental strength through martial arts",
      coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jud%C3%B4-01-rfUMMUtesl2Odlm736beKcNSJ1iyjO.webp",
    },
    {
      id: "musica",
      title: locale === "pt" ? "Música" : locale === "es" ? "Música" : locale === "ja" ? "音楽" : "Music",
      description:
        locale === "pt"
          ? "Harmonia e expressão através de instrumentos musicais"
          : locale === "es"
            ? "Armonía y expresión a través de instrumentos musicales"
            : locale === "ja"
              ? "楽器を通じた調和と表現"
              : "Harmony and expression through musical instruments",
      coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-musica-01-CBhAdQW0nBT0KAAEv3l4WVOGlWy5zu.webp",
    },
    {
      id: "informatica",
      title:
        locale === "pt" ? "Informática" : locale === "es" ? "Informática" : locale === "ja" ? "コンピュータ" : "Computer Science",
      description:
        locale === "pt"
          ? "Tecnologia e habilidades digitais para o futuro"
          : locale === "es"
            ? "Tecnología y habilidades digitales para el futuro"
            : locale === "ja"
              ? "将来のための技術とデジタルスキル"
              : "Technology and digital skills for the future",
      coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inform%C3%A1tica-05-C9F0SHJWUviDMx3gQIFEqmntwGdj9h.webp",
    },
    {
      id: "leitura",
      title:
        locale === "pt" ? "Leitura" : locale === "es" ? "Lectura" : locale === "ja" ? "読書" : "Reading",
      description:
        locale === "pt"
          ? "Exploração de mundos através dos livros"
          : locale === "es"
            ? "Exploración de mundos a través de libros"
            : locale === "ja"
              ? "本を通じた世界の探索"
              : "Exploration of worlds through books",
      coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-leitora-01-oO5Oa0UYlq2b1lT3TLJo8tMZ0wRR7i.webp",
    },
    {
      id: "gastronomia",
      title:
        locale === "pt" ? "Gastronomia" : locale === "es" ? "Gastronomía" : locale === "ja" ? "料理" : "Gastronomy",
      description:
        locale === "pt"
          ? "Nutrição, cultura e inclusão através da culinária"
          : locale === "es"
            ? "Nutrición, cultura e inclusión a través de la cocina"
            : locale === "ja"
              ? "料理を通じた栄養、文化、包含"
              : "Nutrition, culture and inclusion through cooking",
      coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-gastronomia-07-H2qFrfTonuJDduJ1pPfuLaONMn0pmr.webp",
    },
    {
      id: "educacao_ambiental",
      title:
        locale === "pt" ? "Educação Ambiental" : locale === "es" ? "Educación Ambiental" : locale === "ja" ? "環境教育" : "Environmental Education",
      description:
        locale === "pt"
          ? "Atividades de sustentabilidade e consciência ambiental"
          : locale === "es"
            ? "Actividades de sostenibilidad y conciencia ambiental"
            : locale === "ja"
              ? "持続可能性と環境意識の活動"
              : "Sustainability and environmental awareness activities",
      coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-educacao%20ambiental-01-sYV1iPOqQelwi8I24PCKntDDYXx48q.webp",
    },
    {
      id: "teatro",
      title: locale === "pt" ? "Teatro" : locale === "es" ? "Teatro" : locale === "ja" ? "演劇" : "Theater",
      description:
        locale === "pt"
          ? "Expressão dramática e construção de confiança"
          : locale === "es"
            ? "Expresión dramática y construcción de confianza"
            : locale === "ja"
              ? "劇的表現と信頼構築"
              : "Dramatic expression and confidence building",
      coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/teatro-01-zXA5SykS6ePaOdoWvnGuKwquAQq3XQ.webp",
    },
    {
      id: "jovem_aprendiz",
      title:
        locale === "pt" ? "Jovem Aprendiz" : locale === "es" ? "Joven Aprendiz" : locale === "ja" ? "ヤング��プレンティス" : "Young Apprentice",
      description:
        locale === "pt"
          ? "Profissionalização e inserção no mercado de trabalho"
          : locale === "es"
            ? "Profesionalización e inserción en el mercado laboral"
            : locale === "ja"
              ? "職業化と労働市場への統合"
              : "Professionalization and labor market insertion",
      coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jovem%20aprendiz-02-gvdOuDW6ch2v2aWanN55GqjUQwUVMg.webp",
    },
    {
      id: "alimentacao",
      title:
        locale === "pt" ? "Alimentação" : locale === "es" ? "Alimentación" : locale === "ja" ? "栄養" : "Nutrition",
      description:
        locale === "pt"
          ? "Refeições nutritivas e conscientização sobre saúde"
          : locale === "es"
            ? "Comidas nutritivas y conciencia sobre salud"
            : locale === "ja"
              ? "栄養価の高い食事と健康意識"
              : "Nutritious meals and health awareness",
      coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-refeicao-02-J4YKHL7k4JrbmZyaoG3AphKbZRjs4b.webp",
    },
    {
      id: "equipe",
      title: locale === "pt" ? "Equipe" : locale === "es" ? "Equipo" : locale === "ja" ? "チーム" : "Team",
      description:
        locale === "pt"
          ? "Profissionais dedicados que transformam vidas"
          : locale === "es"
            ? "Profesionales dedicados que transforman vidas"
            : locale === "ja"
              ? "人生を変える専門家たち"
              : "Dedicated professionals who transform lives",
      coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/crian%C3%A7as%20e%20funcion%C3%A1rios%20abordagem-04-TKpWS4r5T9BFGpDxsgjV7PulPSRt7C.webp",
    },
    {
      id: "institucional",
      title:
        locale === "pt" ? "Institucional" : locale === "es" ? "Institucional" : locale === "ja" ? "機関" : "Institutional",
      description:
        locale === "pt"
          ? "Nossa estrutura e equipe dedicada"
          : locale === "es"
            ? "Nuestra estructura y equipo dedicado"
            : locale === "ja"
              ? "当機関の構造と献身的なチーム"
              : "Our structure and dedicated team",
      coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unidade01-uxZv8W3bb6g0fTQGEPvkUgHKMDyu7v.webp",
    },
  ]

  const communityCategories: CommunityCategory[] = [
    {
      id: "criancas_familias",
      title: locale === "pt" ? "Crianças e Famílias" : locale === "es" ? "Niños y Familias" : locale === "ja" ? "子どもと家族" : "Children and Families",
      description:
        locale === "pt"
          ? "Momentos especiais com crianças e suas famílias"
          : locale === "es"
            ? "Momentos especiales con niños y sus familias"
            : locale === "ja"
              ? "子どもと家族の特別な瞬間"
              : "Special moments with children and their families",
      coverImage: "/rio-student-graduation-success-favela-background.jpg",
    },
    {
      id: "equipe",
      title: locale === "pt" ? "Equipe" : locale === "es" ? "Equipo" : locale === "ja" ? "チーム" : "Team",
      description:
        locale === "pt"
          ? "Profissionais dedicados que transformam vidas"
          : locale === "es"
            ? "Profesionales dedicados que transforman vidas"
            : locale === "ja"
              ? "人生を変える専門家たち"
              : "Dedicated professionals who transform lives",
      coverImage: "/blog-trabalho-social-criancas-rj.jpg",
    },
    {
      id: "unidade",
      title: locale === "pt" ? "Unidade" : locale === "es" ? "Unidad" : locale === "ja" ? "ユニット" : "Unit",
      description:
        locale === "pt"
          ? "Nossos espaços de transformação"
          : locale === "es"
            ? "Nuestros espacios de transformación"
            : locale === "ja"
              ? "変革の場所"
              : "Our spaces of transformation",
      coverImage: "/centro-socioeducativo-real-building-sao-martinho.png",
    },
    {
      id: "eventos",
      title: locale === "pt" ? "Eventos" : locale === "es" ? "Eventos" : locale === "ja" ? "イベント" : "Events",
      description:
        locale === "pt"
          ? "Celebrações e momentos marcantes"
          : locale === "es"
            ? "Celebraciones y momentos significativos"
            : locale === "ja"
              ? "お祝いと大切な瞬間"
              : "Celebrations and memorable moments",
      coverImage: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Educagente%20vicente%20de%20carvalho-criancas%20pose-10-Y46OBaZYRP7p5AQ1L3LnNSGFJmDMRQ.webp",
    },
    {
      id: "direcao",
      title: locale === "pt" ? "Direção" : locale === "es" ? "Dirección" : locale === "ja" ? "ディレクション" : "Direction",
      description:
        locale === "pt"
          ? "Liderança e visão para o futuro"
          : locale === "es"
            ? "Liderazgo y visión para el futuro"
            : locale === "ja"
              ? "リーダーシップと未来の展望"
              : "Leadership and vision for the future",
      coverImage: "/sao-martinho-volunteers-children-rio-community.jpg",
    },
  ]

  return (
    <>
    <main className="min-h-screen bg-background">
      {/* Premium Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Subtle animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3 opacity-60" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 md:space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
              {locale === "pt" ? "Nossa Galeria" : locale === "es" ? "Nuestra Galería" : locale === "ja" ? "私たちのギャラリー" : "Our Gallery"}
            </h1>
            <div className="flex justify-center">
              <div className="h-1 w-24 bg-gradient-to-r from-primary/0 via-primary to-primary/0 rounded-full" />
            </div>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            {locale === "pt"
              ? "As atividades do Instituto São Martinho transformam diariamente a vida de crianças e jovens. Veja alguns momentos registrados em nossas oficinas, projetos e eventos."
              : locale === "es"
                ? "Las actividades del Instituto São Martinho transforman diariamente la vida de niños y jóvenes. Vea algunos momentos registrados en nuestros talleres, proyectos y eventos."
                : locale === "ja"
                  ? "サンマルティーニョ研究所の活動は、毎日子どもたちと若者の人生を変えています。ワークショップ、プロジェクト、イベントで記録された瞬間をご覧ください。"
                  : "The activities of São Martinho Institute transform the lives of children and young people daily. See some moments captured in our workshops, projects and events."}
          </p>
        </div>
      </section>

      {/* Premium Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="space-y-12">
          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              {locale === "pt" ? "Categorias de Atividades" : locale === "es" ? "Categorías de Actividades" : locale === "ja" ? "活動カテゴリー" : "Activity Categories"}
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-primary to-primary/60 rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((category) => (
              <div
                key={category.id}
                className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
                onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => (category.id === "arte" || category.id === "capoeira" || category.id === "futebol" || category.id === "musica" || category.id === "judo" || category.id === "informatica" || category.id === "leitura" || category.id === "gastronomia" || category.id === "teatro" || category.id === "eventos" || category.id === "institucional" || category.id === "educacao" || category.id === "educacao_ambiental" || category.id === "jovem_aprendiz" || category.id === "alimentacao" || category.id === "equipe") && setSelectedCategory(category.id)}
              >
                {/* Card Image */}
                <img
                  src={category.coverImage}
                  alt={`${category.title} - Atividades e projetos sociais com crianças do Instituto São Martinho`}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />

                {/* Gradient Overlay with Category Color */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-100 transition-opacity duration-300" />
                
                {/* Category Color Tint */}
                <div className={`absolute inset-0 bg-gradient-to-t ${getCategoryOverlay(category.id)} opacity-70 group-hover:opacity-80 transition-opacity duration-300`} />

                {/* Shadow depth effect */}
                <div className="absolute inset-0 shadow-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-white/80 text-sm md:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Storytelling Section - Histórias em Imagens */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-background via-primary/3 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 md:space-y-20">
            {/* Section Header */}
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
                {locale === "pt"
                  ? "Histórias em Imagens"
                  : locale === "es"
                    ? "Historias en Imágenes"
                    : locale === "ja"
                      ? "イメージの中の物語"
                      : "Stories in Pictures"}
              </h2>
              <div className="flex justify-center">
                <div className="h-1 w-24 bg-gradient-to-r from-primary/0 via-primary to-primary/0 rounded-full" />
              </div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
                {locale === "pt"
                  ? "Cada atividade do Instituto São Martinho representa uma oportunidade de aprendizado, crescimento e transformação na vida de crianças e jovens."
                  : locale === "es"
                    ? "Cada actividad del Instituto São Martinho representa una oportunidad de aprendizaje, crecimiento y transformación en la vida de niños y jóvenes."
                    : locale === "ja"
                      ? "サンマルティーニョ研究所の各活動は、子どもたちと若者の人生における学習、成長、変容の機会を表しています。"
                      : "Each activity of São Martinho Institute represents an opportunity for learning, growth and transformation in the lives of children and young people."}
              </p>
            </div>

            {/* Story Blocks */}
            <div className="space-y-12 md:space-y-20">
              {/* Story 1 - Art */}
              <div className="group relative overflow-hidden rounded-3xl aspect-video md:aspect-auto md:h-96">
                {/* Background Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-pulse" />
                
                {/* Cinematic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:via-black/50 transition-all duration-500" />

                {/* Subtle parallax effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-b from-white to-transparent transition-opacity duration-500" />

                {/* Caption Content */}
                <div className="absolute inset-0 flex items-center justify-center p-6 md:p-12">
                  <div className="text-center space-y-4 transform transition-all duration-500 group-hover:scale-105">
                    <p className="text-3xl md:text-5xl font-bold text-white leading-tight">
                      {locale === "pt"
                        ? "A arte desperta talentos e fortalece a autoestima."
                        : locale === "es"
                          ? "El arte despierta talentos y fortalece la autoestima."
                          : locale === "ja"
                            ? "芸術は才能を目覚めさせ、自尊心を強めます。"
                            : "Art awakens talents and strengthens self-esteem."}
                    </p>
                    <div className="h-1 w-16 bg-gradient-to-r from-white/0 via-white to-white/0 rounded-full mx-auto" />
                  </div>
                </div>

                {/* Fade-in animation indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Story 2 - Sport */}
              <div className="group relative overflow-hidden rounded-3xl aspect-video md:aspect-auto md:h-96">
                {/* Background Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-teal-500/20 animate-pulse" />
                
                {/* Cinematic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:via-black/50 transition-all duration-500" />

                {/* Subtle parallax effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-b from-white to-transparent transition-opacity duration-500" />

                {/* Caption Content */}
                <div className="absolute inset-0 flex items-center justify-center p-6 md:p-12">
                  <div className="text-center space-y-4 transform transition-all duration-500 group-hover:scale-105">
                    <p className="text-3xl md:text-5xl font-bold text-white leading-tight">
                      {locale === "pt"
                        ? "O esporte ensina disciplina, respeito e trabalho em equipe."
                        : locale === "es"
                          ? "El deporte enseña disciplina, respeto y trabajo en equipo."
                          : locale === "ja"
                            ? "スポーツは規律、尊重、チームワークを教えます。"
                            : "Sport teaches discipline, respect and teamwork."}
                    </p>
                    <div className="h-1 w-16 bg-gradient-to-r from-white/0 via-white to-white/0 rounded-full mx-auto" />
                  </div>
                </div>

                {/* Fade-in animation indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Story 3 - Education */}
              <div className="group relative overflow-hidden rounded-3xl aspect-video md:aspect-auto md:h-96">
                {/* Background Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-rose-500/20 animate-pulse" />
                
                {/* Cinematic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:via-black/50 transition-all duration-500" />

                {/* Subtle parallax effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-b from-white to-transparent transition-opacity duration-500" />

                {/* Caption Content */}
                <div className="absolute inset-0 flex items-center justify-center p-6 md:p-12">
                  <div className="text-center space-y-4 transform transition-all duration-500 group-hover:scale-105">
                    <p className="text-3xl md:text-5xl font-bold text-white leading-tight">
                      {locale === "pt"
                        ? "A educação abre caminhos para um futuro melhor."
                        : locale === "es"
                          ? "La educación abre caminos hacia un futuro mejor."
                          : locale === "ja"
                            ? "教育はより良い未来への道を開きます。"
                            : "Education opens paths to a better future."}
                    </p>
                    <div className="h-1 w-16 bg-gradient-to-r from-white/0 via-white to-white/0 rounded-full mx-auto" />
                  </div>
                </div>

                {/* Fade-in animation indicator */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Moments Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-t border-border/50">
        <div className="space-y-12">
          <div className="space-y-3">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              {locale === "pt"
                ? "Momentos da Comunidade"
                : locale === "es"
                  ? "Momentos Comunitarios"
                  : locale === "ja"
                    ? "コミュニティのモーメント"
                    : "Community Moments"}
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-primary to-primary/60 rounded-full" />
            <p className="text-muted-foreground text-lg max-w-2xl">
              {locale === "pt"
                ? "A história das pessoas que transformam a São Martinho todos os dias"
                : locale === "es"
                  ? "La historia de las personas que transforman a São Martinho todos los días"
                  : locale === "ja"
                    ? "毎日サンマルティーニョを変えている人々の物語"
                    : "The story of the people who transform São Martinho every day"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {communityCategories.map((category) => (
              <div
                key={category.id}
                className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
                onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Image */}
                <img
                  src={category.coverImage}
                  alt={`${category.title} - Atividades e projetos sociais com crianças do Instituto São Martinho`}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg md:text-xl font-bold text-white">{category.title}</h3>
                    <p className="text-white/75 text-xs md:text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

          <div className="relative p-8 md:p-16 text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              {locale === "pt"
                ? "Quer fazer parte desta história?"
                : locale === "es"
                  ? "¿Quieres ser parte de esta historia?"
                  : locale === "ja"
                    ? "この物語の一部になりたいですか？"
                    : "Want to be part of this story?"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {locale === "pt"
                ? "Junte-se a nós como voluntário, doador ou parceiro. Sua contribuição faz a diferença."
                : locale === "es"
                  ? "Únase a nosotros como voluntario, donante o socio. Su contribución marca la diferencia."
                  : locale === "ja"
                    ? "ボランティア、寄付者、またはパートナーとして参加してくださ��。あなたの貢献は大きな違いを生み出します。"
                    : "Join us as a volunteer, donor or partner. Your contribution makes a difference."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="rounded-full px-8 font-semibold bg-primary hover:bg-primary/90 text-white transition-all duration-300 hover:shadow-lg"
                asChild
              >
                <a href="/voluntario">
                  {locale === "pt" ? "Seja Voluntário" : locale === "es" ? "Sé Voluntario" : locale === "ja" ? "ボランティアになる" : "Become a Volunteer"}
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 font-semibold border-primary text-primary hover:bg-primary/5 transition-all duration-300"
                asChild
              >
                <a href="/doacoes">
                  {locale === "pt" ? "Fazer Doação" : locale === "es" ? "Hacer una Donación" : locale === "ja" ? "寄付する" : "Make a Donation"}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>

    {/* Category Lightbox Modal */}
    {selectedCategory && (
      <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
        {/* Close button */}
        <button
          onClick={() => {
            setSelectedCategory(null)
            setCurrentImageIndex(0)
          }}
          className="absolute top-6 right-6 text-white hover:text-primary transition-colors z-50 text-4xl font-light"
          aria-label="Fechar"
        >
          ×
        </button>

        {/* Main image container */}
        <div className="w-full max-w-5xl space-y-6">
          {(() => {
            const images = selectedCategory === "arte" ? arteImages : selectedCategory === "capoeira" ? capoeiraImages : selectedCategory === "futebol" ? futbolImages : selectedCategory === "musica" ? musicaImages : selectedCategory === "judo" ? judoImages : selectedCategory === "informatica" ? informaticaImages : selectedCategory === "leitura" ? leituraImages : selectedCategory === "gastronomia" ? gastronomiaImages : selectedCategory === "teatro" ? teatroImages : selectedCategory === "eventos" ? eventosImages : selectedCategory === "institucional" ? institucionalImages : selectedCategory === "educacao" ? educacaoImages : selectedCategory === "educacao_ambiental" ? ambientalImages : selectedCategory === "jovem_aprendiz" ? aprendizImages : selectedCategory === "alimentacao" ? alimentacaoImages : selectedCategory === "equipe" ? equipeSaoMartinhoImages : aprendizImages
            const currentImage = images[currentImageIndex]

            return (
              <>
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black">
                  <img
                    src={currentImage.src}
                    alt={`${currentImage.caption} - Projeto social com crianças do Instituto São Martinho`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Caption */}
                <div className="text-center space-y-4">
                  <p className="text-lg md:text-xl text-white/90">{currentImage.caption}</p>
                  <p className="text-sm text-white/60">
                    {currentImageIndex + 1} / {images.length}
                  </p>
                </div>

                {/* Navigation buttons */}
                <div className="flex items-center justify-between gap-4">
                  <button
                    onClick={() => setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                    className="px-6 py-3 bg-white/10 hover:bg-primary/20 text-white rounded-lg transition-all duration-300 flex items-center gap-2"
                  >
                    ← {locale === "pt" ? "Anterior" : locale === "es" ? "Anterior" : locale === "ja" ? "前へ" : "Previous"}
                  </button>

                  {/* Thumbnail strip */}
                  <div className="flex gap-2 overflow-x-auto">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`h-12 w-12 rounded-lg flex-shrink-0 transition-all duration-300 ${
                          index === currentImageIndex
                            ? "ring-2 ring-primary scale-110"
                            : "bg-white/10 hover:bg-white/20"
                        }`}
                      >
                        <img
                          src={images[index].src}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                    className="px-6 py-3 bg-white/10 hover:bg-primary/20 text-white rounded-lg transition-all duration-300 flex items-center gap-2"
                  >
                    {locale === "pt" ? "Próxima" : locale === "es" ? "Siguiente" : locale === "ja" ? "次へ" : "Next"} →
                  </button>
                </div>
              </>
            )
          })()}
        </div>
      </div>
    )}
    </>
  )
}
