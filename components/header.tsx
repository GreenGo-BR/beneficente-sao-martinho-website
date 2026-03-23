"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react"
import { useState } from "react"
import { useLocale } from "@/lib/locale-context"
import { getTranslations, locales, localeNames } from "@/lib/i18n"
import type { Locale } from "@/lib/i18n"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { locale, setLocale } = useLocale()
  const t = getTranslations(locale)

  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "Atuação",
      submenu: [
        { name: "Abordagem", href: "/abordagem" },
        { name: "Educagente", href: "/educagente" },
        { name: "Profissionalização", href: "/profissionalizacao" },
      ],
    },
    {
      name: "Sobre",
      submenu: [
        { name: "A São Martinho", href: "/quem-somos" },
        { name: "Unidades", href: "/unidades" },
      ],
    },
    { name: "Galeria", href: "/galeria" },
    {
      name: "Quero Ajudar",
      submenu: [
        { name: "Empresa Parceira", href: "/empresa-parceira" },
        { name: "Voluntário", href: "/voluntario" },
      ],
    },
    { name: t.nav.donate, href: "/doacoes" },
    { name: t.nav.blog, href: "/blog" },
    { name: t.nav.contact, href: "/contato" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo-sao-martinho.png"
              alt="São Martinho"
              width={180}
              height={60}
              className="h-14 w-auto group-hover:scale-105 transition-transform"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navigation.map((item) =>
              "submenu" in item ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger asChild>
                    <button className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                      {item.name}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {item.submenu.map((subitem) => (
                      <DropdownMenuItem key={subitem.name} asChild>
                        <Link href={subitem.href}>{subitem.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ),
            )}
          </div>

          <div className="flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="w-4 h-4" />
                  <span className="hidden sm:inline">{localeNames[locale]}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {locales.map((loc) => (
                  <DropdownMenuItem
                    key={loc}
                    onClick={() => setLocale(loc as Locale)}
                    className={locale === loc ? "bg-muted" : ""}
                  >
                    {localeNames[loc]}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button asChild className="hidden lg:inline-flex">
              <Link href="/doacoes">{t.nav.donate}</Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border py-4 animate-fade-in-up">
            <div className="flex flex-col gap-4">
              {navigation.map((item) =>
                "submenu" in item ? (
                  <div key={item.name} className="flex flex-col gap-2">
                    <span className="text-sm font-semibold text-foreground">{item.name}</span>
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2 pl-4"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ),
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
