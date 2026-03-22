"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, User, ArrowRight, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BlogPage() {
  const posts = [
    {
      id: "doacao-recorrente-mensal-transforma-mais",
      title: "Doação recorrente: por que R$30 por mês transforma mais do que uma doação única",
      excerpt:
        "A doação recorrente tem mais impacto porque dá previsibilidade para o projeto: permite planejar atividades, manter equipe e garantir continuidade. Entenda por que a constância vale mais do que o valor.",
      category: "Doação e Transparência",
      date: "03/03/2026",
      author: "Associação São Martinho",
      image: "/blog-doacao-mensal-pote.jpg",
      location: "Rio de Janeiro, RJ",
      keywords: "doação recorrente, doação mensal, impacto social, ONG, como doar",
    },
    {
      id: "como-doar-ong-com-seguranca-pix-recibo",
      title: "Como doar para uma ONG com segurança: PIX, PagSeguro e recibo (passo a passo)",
      excerpt:
        "Para doar com segurança, confirme se você está em um canal oficial da ONG, confira se o CNPJ/razão social do recebedor corresponde à instituição, use métodos rastreáveis (PIX ou plataforma) e guarde o comprovante. Um guia simples para ajudar com confiança e transparência.",
      category: "Doação e Transparência",
      date: "03/03/2026",
      author: "Associação São Martinho",
      image: "/blog-doar-ong-pix-celular.jpg",
      location: "Rio de Janeiro, RJ",
      keywords: "doação, PIX, PagSeguro, transparência, como doar, ONG",
    },
    {
      id: "trabalho-social-criancas-adolescentes-rj",
      title: "O que é trabalho social com crianças e adolescentes em vulnerabilidade no Rio de Janeiro?",
      excerpt:
        "Trabalho social não é caridade pontual. É presença, método e continuidade. Entenda o que é, como funciona na prática e como você pode apoiar instituições que atuam com crianças e adolescentes em situação de vulnerabilidade no Rio de Janeiro.",
      category: "Institucional",
      date: "03/03/2026",
      author: "Associação São Martinho",
      image: "/blog-trabalho-social-criancas-rj.jpg",
      location: "Rio de Janeiro, RJ",
      keywords:
        "trabalho social, infância e adolescência, vulnerabilidade social, Rio de Janeiro, ONG, impacto social",
    },
    {
      id: "festa-natal-2024",
      title: "Festa de Natal da São Martinho 2024: Alegria e Solidariedade na Lapa, Rio de Janeiro",
      excerpt:
        "A Associação São Martinho realizou a tradicional Festa de Natal para crianças e famílias da comunidade da Lapa, Rio de Janeiro. Um dia emocionante com distribuição de presentes, alimentação e atividades recreativas que marcam nossa missão de transformar vidas através do amor e solidariedade.",
      category: "Eventos Sociais",
      date: "12/12/2024",
      author: "Associação São Martinho",
      image: "/blog-festa-natal-criancas-alegria.jpg",
      location: "Centro Socioeducativo - Lapa, Rio de Janeiro",
      keywords: "festa de natal, ação social rio de janeiro, crianças em vulnerabilidade, lapa rj, ong rio de janeiro",
    },
    {
      id: "dia-de-doar-2024",
      title: "Dia de Doar 2024 na São Martinho: Transformando Vidas no Rio de Janeiro",
      excerpt:
        "No Dia de Doar 2024, a São Martinho reforça seu compromisso com crianças, adolescentes e jovens em situação de vulnerabilidade social no Rio de Janeiro. Há mais de 40 anos atuando na Lapa e Vicente de Carvalho, oferecemos educação, proteção e oportunidades. Cada doação alimenta sonhos, sustenta programas socioeducativos e rompe ciclos de vulnerabilidade.",
      category: "Campanha de Doações",
      date: "03/12/2024",
      author: "Associação São Martinho",
      image: "/blog-dia-doar-coracao-amor.jpg",
      location: "Rio de Janeiro - Lapa e Vicente de Carvalho",
      keywords:
        "dia de doar, doação rio de janeiro, ong lapa, crianças vulnerabilidade social, transformação social rj",
    },
    {
      id: "consciencia-negra-2024",
      title: "Mês da Consciência Negra 2024: Ancestralidade e Pertencimento na São Martinho",
      excerpt:
        "Em novembro de 2024, o Mês da Consciência Negra foi celebrado com atividades especiais nas unidades da São Martinho no Rio de Janeiro. Promovemos rodas de conversa, oficinas de cultura afro-brasileira e atividades que valorizam a ancestralidade, identidade e pertencimento das crianças e jovens negros atendidos em nossos programas na Lapa e Vicente de Carvalho.",
      category: "Cultura e Diversidade",
      date: "20/11/2024",
      author: "Associação São Martinho",
      image: "/blog-consciencia-negra-jovens.jpg",
      location: "Unidades São Martinho - Rio de Janeiro",
      keywords:
        "consciência negra, cultura afro-brasileira, diversidade rio de janeiro, educação antirracista, igualdade racial",
    },
    {
      id: "aniversario-sao-martinho-2024",
      title: "São Martinho Completa 41 Anos Transformando Vidas no Rio de Janeiro",
      excerpt:
        "Em 11 de novembro de 2024, a Associação São Martinho celebrou 41 anos de dedicação à proteção e desenvolvimento de crianças, adolescentes e jovens em situação de vulnerabilidade no Rio de Janeiro. Desde 1983, nossa sede na Lapa atende milhares de famílias com programas de educação integral, arte, cultura, apoio familiar e profissionalização.",
      category: "Institucionais",
      date: "13/11/2024",
      author: "Associação São Martinho",
      image: "/blog-aniversario-celebracao-equipe.jpg",
      location: "Centro Socioeducativo - Lapa, Rio de Janeiro, RJ",
      keywords:
        "aniversário são martinho, 41 anos, ong rio de janeiro, lapa, história institucional, assistência social rj",
    },
    {
      id: "aprendizagem-investimento-futuro",
      title: "Programa Jovem Aprendiz São Martinho: Capacitação Profissional no Rio de Janeiro",
      excerpt:
        "O Programa de Aprendizagem Profissional da São Martinho é referência no Rio de Janeiro. Conforme a Lei 10.097/2000, oferecemos formação técnica e inserção no mercado de trabalho para jovens de 14 a 24 anos. Com mais de 3.600 jovens capacitados e parcerias com 45+ empresas, provamos que aprendizagem não é custo, é investimento no futuro do Brasil.",
      category: "Profissionalização",
      date: "13/11/2024",
      author: "Associação São Martinho",
      image: "/blog-aprendiz-jovem-trabalhando.jpg",
      location: "Programa Jovem Aprendiz - Lapa, Rio de Janeiro",
      keywords:
        "jovem aprendiz rio de janeiro, programa de aprendizagem rj, primeiro emprego, capacitação profissional, lei do aprendiz",
    },
    {
      id: "princesa-diana-visita-34-anos",
      title: "34 Anos da Visita Histórica da Princesa Diana à São Martinho no Rio de Janeiro",
      excerpt:
        "Relembramos com orgulho a visita histórica da Princesa Diana à Associação São Martinho em 1991, na Lapa, Rio de Janeiro. Sua presença humanitária marcou nossa trajetória e reforçou a importância do trabalho social com crianças em situação de vulnerabilidade. Hoje, 41 anos depois, seguimos transformando vidas guiados pelos mesmos valores de compaixão e dignidade.",
      category: "História Institucional",
      date: "03/11/2024",
      author: "Associação São Martinho",
      image: "/blog-princesa-diana-visita-historica.jpg",
      location: "Centro Socioeducativo - Lapa, Rio de Janeiro",
      keywords: "princesa diana rio de janeiro, história são martinho, visita real brasil, lapa rj, ong histórica",
    },
    {
      id: "carlo-acutis-reliquias-educagente",
      title: "Relíquias de São Carlo Acutis no Núcleo Educagente - Vicente de Carvalho, RJ",
      excerpt:
        "O Núcleo Comunitário Educagente, em Vicente de Carvalho, Rio de Janeiro, recebeu as relíquias de São Carlo Acutis, o jovem santo padroeiro da internet. Foi um momento de fé, espiritualidade e esperança para as crianças, adolescentes e famílias atendidas pela São Martinho. A visita reforça nosso compromisso com o desenvolvimento integral: corpo, mente e espírito.",
      category: "Espiritualidade",
      date: "31/10/2024",
      author: "Associação São Martinho",
      image: "/blog-carlo-acutis-reliquias-criancas.jpg",
      location: "Núcleo Educagente - Vicente de Carvalho, Rio de Janeiro",
      keywords: "carlo acutis rio de janeiro, educagente, vicente de carvalho rj, espiritualidade, santo jovem",
    },
    {
      id: "marta-rocha-reuniao-2024",
      title: "Associação Beneficente São Martinho se reúne com a Secretaria de Assistência Social Marta Rocha",
      excerpt:
        "Na manhã do dia 30/10, representantes da Associação Beneficente São Martinho e da ADECERio estiveram reunidos com a Secretaria Municipal de Assistência Social Marta Rocha para dialogar sobre o fortalecimento das ações voltadas à população em situação de vulnerabilidade social do município do RJ.",
      category: "Institucionais",
      date: "30/10/2024",
      author: "Associação São Martinho",
      image: "/blog-marta-rocha-reuniao.jpg",
      location: "Secretaria Municipal de Assistência Social - Rio de Janeiro, RJ",
      keywords:
        "marta rocha são martinho, secretaria assistência social rio de janeiro, adecerj, políticas públicas rj, vulnerabilidade social",
    },
    {
      id: "petrobras-bio-visita-2024",
      title: "Representantes da Petrobras Bio visitam a São Martinho",
      excerpt:
        "No dia 28 de outubro, a São Martinho recebeu a visita das representantes da Petrobras Bio em um encontro marcado por diálogo e cooperação.",
      category: "Parcerias",
      date: "28/10/2024",
      author: "Associação São Martinho",
      image: "/blog-petrobras-bio-visita.jpg",
      location: "Centro Socioeducativo - Lapa, Rio de Janeiro, RJ",
      keywords:
        "petrobras bio são martinho, parceria empresarial, jovem aprendiz rio de janeiro, responsabilidade social, lapa rj",
    },
    {
      id: "marta-rocha-reuniao-2024",
      title: "Associação Beneficente São Martinho se reúne com a Secretaria de Assistência Social Marta Rocha",
      excerpt:
        "Na manhã do dia 30/10, representantes da Associação Beneficente São Martinho e da ADECERio estiveram reunidos com a Secretaria Municipal de Assistência Social Marta Rocha para dialogar sobre o fortalecimento das ações voltadas à população em situação de vulnerabilidade social do município do RJ.",
      category: "Institucionais",
      date: "31/10/2024",
      author: "Associação São Martinho",
      image: "/blog-marta-rocha-reuniao.jpg",
      location: "Secretaria Municipal de Assistência Social - Rio de Janeiro, RJ",
      keywords:
        "marta rocha são martinho, secretaria assistência social rio de janeiro, adecerj, políticas públicas rj, vulnerabilidade social",
    },
    {
      id: "ca-parceria-autocuidado-2024",
      title: "Parceria que Transforma: São Martinho e C&A promovem um dia de cuidado e acolhimento",
      excerpt:
        "A São Martinho e a C&A uniram forças em uma bela iniciativa voltada ao acolhimento e à valorização da autoestima das pessoas atendidas pela instituição.",
      category: "Parcerias",
      date: "31/10/2024",
      author: "Associação São Martinho",
      image: "/blog-ca-parceria-autocuidado.jpg",
      location: "Centro Socioeducativo - Lapa, Rio de Janeiro, RJ",
      keywords:
        "c&a são martinho, parceria empresarial, autocuidado, autoestima, responsabilidade social, lapa rj",
    },
    {
      id: "festa-dia-criancas-2024",
      title: "Alegria e solidariedade marcaram a Festa do Dia das Crianças",
      excerpt:
        "O Dia das Crianças foi celebrado com muita alegria, brincadeiras e carinho em nossas unidades! Foi um momento especial de convivência e diversão, que trouxe sorrisos e encantamento aos pequenos atendidos pelos nossos projetos.",
      category: "Eventos Sociais",
      date: "05/10/2024",
      author: "Associação São Martinho",
      image: "/blog-dia-criancas-festa.jpg",
      location: "Unidades São Martinho - Rio de Janeiro, RJ",
      keywords:
        "dia das crianças são martinho, festa infantil rio de janeiro, evento social lapa rj, crianças vulnerabilidade, solidariedade",
    },
    {
      id: "oficina-camareira-formatura-2024",
      title: "Oficina de Camareira forma novas profissionais e celebra sonhos realizados",
      excerpt:
        "Nesta semana, celebramos um momento de grande emoção e conquista: a formatura da Oficina de Camareira, uma iniciativa transformadora fruto da parceria entre a GAVIME, a Associação São Martinho e o Radisson Rio de Janeiro Barra.",
      category: "Profissionalização",
      date: "24/07/2024",
      author: "Associação São Martinho",
      image: "/blog-oficina-camareira-formatura.jpg",
      location: "Radisson Rio de Janeiro Barra - Rio de Janeiro, RJ",
      keywords:
        "oficina camareira são martinho, curso hotelaria rio de janeiro, profissionalização mulheres, gavime radisson, capacitação profissional rj",
    },
    {
      id: "papo-responsa-jovens-aprendizes-2024",
      title: "Jovens aprendizes participam de roda de conversa com policiais civis no projeto 'Papo de Responsa'",
      excerpt:
        "Na última semana, os jovens aprendizes da São Martinho participaram de uma roda de conversa inspiradora e transformadora com policiais civis do projeto 'Papo de Responsa', uma iniciativa oficial da Polícia Civil do Estado do Rio de Janeiro que promove o diálogo aberto e direto entre agentes de segurança pública e adolescentes.",
      category: "Educação Cidadã",
      date: "24/07/2024",
      author: "Associação São Martinho",
      image: "/blog-papo-responsa-evento.jpg",
      location: "Centro Socioeducativo - Lapa, Rio de Janeiro, RJ",
      keywords:
        "papo de responsa, polícia civil rio de janeiro, jovem aprendiz são martinho, educação cidadã, prevenção violência rj",
    },
    {
      id: "candelaria-memoria-32-anos-2025",
      title: "São Martinho participa da memória pelos 32 anos da Chacina da Candelária",
      excerpt:
        "Na manhã desta quinta-feira, 23 de julho, a Associação São Martinho esteve presente na homenagem que marcou os 32 anos da Chacina da Candelária, no Centro do Rio de Janeiro. A atividade reuniu organizações sociais, movimentos populares, autoridades, familiares das vítimas e jovens para manter viva a memória e renovar o clamor por justiça.",
      category: "Justiça Social",
      date: "24/07/2025",
      author: "Associação São Martinho",
      image: "/blog-candelaria-memoria-32-anos.jpg",
      location: "Igreja da Candelária - Centro, Rio de Janeiro, RJ",
      keywords:
        "chacina candelária, direitos humanos rio de janeiro, violência estado, juventude negra, justiça social, memória coletiva",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 animate-gradient-shift" />

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-delayed" />

        <div className="container relative mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance animate-slide-in-up">
              Blog São Martinho{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-text inline-block">
                Rio de Janeiro
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 text-pretty leading-relaxed animate-fade-in-up-delayed">
              Acompanhe as novidades, histórias de transformação e ações sociais da Associação Beneficente São Martinho
              no Rio de Janeiro. Fique por dentro dos nossos projetos na Lapa, Vicente de Carvalho e comunidades
              atendidas.
            </p>

            {/* Enhanced Newsletter Signup with glow effect */}
            <div className="max-w-md mx-auto animate-fade-in-up-delayed-more">
              <form className="flex gap-2 p-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Input
                  type="email"
                  placeholder="Seu e-mail para receber novidades"
                  className="flex-1 h-12 text-base border-0 focus-visible:ring-2 focus-visible:ring-primary"
                  aria-label="Digite seu email"
                />
                <Button
                  size="lg"
                  className="px-8 h-12 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  type="submit"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Enviar
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Últimas Notícias e Histórias de Impacto Social
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-2 hover:border-primary/20 rounded-lg bg-card"
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="relative h-56 overflow-hidden bg-muted">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={`${post.title} - Associação São Martinho Rio de Janeiro`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      itemProp="image"
                    />
                    <div className="absolute top-4 left-4 px-4 py-1.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full shadow-lg">
                      <span itemProp="articleSection">{post.category}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3
                      className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors leading-tight"
                      itemProp="headline"
                    >
                      {post.title}
                    </h3>
                    <p
                      className="text-muted-foreground mb-4 line-clamp-3 text-sm leading-relaxed"
                      itemProp="description"
                    >
                      {post.excerpt}
                    </p>

                    {post.location && (
                      <div className="flex items-start gap-2 text-xs text-muted-foreground mb-4 pb-4 border-b">
                        <MapPin className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-primary" />
                        <span itemProp="locationCreated">{post.location}</span>
                      </div>
                    )}

                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-5">
                      <time className="flex items-center gap-1.5" itemProp="datePublished" dateTime={post.date}>
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </time>
                      <span
                        className="flex items-center gap-1.5"
                        itemProp="author"
                        itemScope
                        itemType="https://schema.org/Organization"
                      >
                        <User className="w-3.5 h-3.5" />
                        <span itemProp="name">{post.author}</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      Ler artigo completo
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Newsletter CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Newsletter São Martinho Rio de Janeiro
            </h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Cadastre-se em nossa newsletter e receba em primeira mão as notícias sobre ações sociais, eventos,
              histórias de transformação e oportunidades de voluntariado e doação da Associação São Martinho no Rio de
              Janeiro.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Digite seu melhor e-mail"
                className="flex-1 h-12 text-base"
                aria-label="Email para newsletter"
                required
              />
              <Button size="lg" className="px-8 h-12" type="submit">
                Inscrever-se
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
