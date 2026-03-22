"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import { useLocale } from "@/lib/locale-context"
import { getTranslations } from "@/lib/i18n"
import Image from "next/image"

export function Footer() {
  const { locale } = useLocale()
  const t = getTranslations(locale)

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/SaoMartinhoRJ", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/SaoMartinhoRJ", label: "Instagram" },
    { icon: Linkedin, href: "https://br.linkedin.com/company/associacao-sao-martinho", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/@SaoMartinhoRJ", label: "YouTube" },
  ]

  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="space-y-4">
            <Image src="/logo-sao-martinho.png" alt="São Martinho" width={180} height={60} className="h-12 w-auto" />
            <p className="text-sm text-muted-foreground leading-relaxed">{t.footer.aboutText}</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t.nav.about}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/quem-somos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/projetos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {t.nav.projects}
                </Link>
              </li>
              <li>
                <Link
                  href="/transparencia"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {t.nav.transparency}
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t.footer.contact}</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>associacaosaomartinho@gmail.com</li>
              <li>(21) 2156-7700</li>
              <li>Rua Riachuelo, 7, Lapa - RJ</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t.footer.follow}</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Associação Beneficente São Martinho. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
