import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { LocaleProvider } from "@/lib/locale-context"
import { ChatAssistant } from "@/components/chat-assistant"
import { ScrollToTop } from "@/components/scroll-to-top"
import Header from "@/components/header"
import Footer from "@/components/footer"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Instituto São Martinho | Transformando vidas com solidariedade",
  description:
    "O Instituto São Martinho atua há mais de 39 anos apoiando crianças e famílias em situação de vulnerabilidade. Conheça nossos projetos e saiba como ajudar.",
  keywords: [
    "instituto social",
    "ONG crianças",
    "doação",
    "assistência social",
    "projetos sociais",
    "ajuda famílias",
    "São Martinho",
  ],
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased`}>
        <LocaleProvider>
          <ScrollToTop />
          <Header />
          {children}
          <Footer />
          <ChatAssistant />
        </LocaleProvider>
        <Analytics />
      </body>
    </html>
  )
}
