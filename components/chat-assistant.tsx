"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, X, Send, Loader2 } from "lucide-react"
import { useLocale } from "@/lib/locale-context"

interface Message {
  role: "user" | "assistant"
  content: string
}

const translations = {
  pt: {
    placeholder: "Digite sua mensagem...",
    send: "Enviar",
    title: "Assistente Virtual",
    subtitle: "Como posso ajudar você hoje?",
    thinking: "Pensando...",
  },
  es: {
    placeholder: "Escribe tu mensaje...",
    send: "Enviar",
    title: "Asistente Virtual",
    subtitle: "¿Cómo puedo ayudarte hoy?",
    thinking: "Pensando...",
  },
  en: {
    placeholder: "Type your message...",
    send: "Send",
    title: "Virtual Assistant",
    subtitle: "How can I help you today?",
    thinking: "Thinking...",
  },
  ja: {
    placeholder: "メッセージを入力...",
    send: "送信",
    title: "バーチャルアシスタント",
    subtitle: "今日はどのようにお手伝いできますか？",
    thinking: "考え中...",
  },
}

export function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const { locale } = useLocale()
  const t = translations[locale]

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessages = {
        pt: "Olá! Sou o assistente virtual da Associação Beneficente São Martinho. Posso ajudá-lo com informações sobre nossos projetos, doações, voluntariado e muito mais. Como posso ajudar você hoje?",
        es: "¡Hola! Soy el asistente virtual de la Asociación Benéfica São Martinho. Puedo ayudarte con información sobre nuestros proyectos, donaciones, voluntariado y más. ¿Cómo puedo ayudarte hoy?",
        en: "Hello! I am the virtual assistant of Associação Beneficente São Martinho. I can help you with information about our projects, donations, volunteering and more. How can I help you today?",
        ja: "こんにちは！私はサン・マルティーニョ慈善協会のバーチャルアシスタントです。プロジェクト、寄付、ボランティアなどに関する情報をお手伝いできます。今日はどのようにお手伝いできますか？",
      }
      setMessages([{ role: "assistant", content: welcomeMessages[locale] }])
    }
  }, [isOpen, locale, messages.length])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput("")
    setMessages((prev) => [...prev, { role: "user", content: userMessage }])
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, { role: "user", content: userMessage }],
          locale,
        }),
      })

      const data = await response.json()
      setMessages((prev) => [...prev, { role: "assistant", content: data.message }])
    } catch (error) {
      console.error("Chat error:", error)
      const errorMessages = {
        pt: "Desculpe, ocorreu um erro. Por favor, tente novamente.",
        es: "Lo siento, ocurrió un error. Por favor, inténtalo de nuevo.",
        en: "Sorry, an error occurred. Please try again.",
        ja: "申し訳ございませんが、エラーが発生しました。もう一度お試しください。",
      }
      setMessages((prev) => [...prev, { role: "assistant", content: errorMessages[locale] }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50 bg-primary hover:bg-primary/90"
        size="icon"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-96 h-[600px] shadow-2xl z-50 flex flex-col">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 rounded-t-lg">
            <h3 className="font-semibold text-lg">{t.title}</h3>
            <p className="text-sm opacity-90">{t.subtitle}</p>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4" ref={scrollRef}>
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-muted rounded-lg px-4 py-2 flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <p className="text-sm">{t.thinking}</p>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t.placeholder}
                disabled={isLoading}
                className="flex-1"
              />
              <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </Card>
      )}
    </>
  )
}
