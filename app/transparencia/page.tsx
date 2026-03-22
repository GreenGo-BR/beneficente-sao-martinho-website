"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Download, Shield, TrendingUp } from "lucide-react"
import { useLocale } from "@/lib/locale-context"

export default function TransparencyPage() {
  const { locale } = useLocale()

  const documents = [
    {
      pt: { title: "Relatório Anual 2024", description: "Relatório completo de atividades e financeiro" },
      es: { title: "Informe Anual 2024", description: "Informe completo de actividades y financiero" },
      en: { title: "Annual Report 2024", description: "Complete activity and financial report" },
      ja: { title: "2024年年次報告書", description: "活動と財務の完全なレポート" },
      size: "2.5 MB",
    },
    {
      pt: { title: "Balanço Patrimonial 2024", description: "Demonstrativo financeiro detalhado" },
      es: { title: "Balance Patrimonial 2024", description: "Demostración financiera detallada" },
      en: { title: "Balance Sheet 2024", description: "Detailed financial statement" },
      ja: { title: "2024年貸借対照表", description: "詳細な財務諸表" },
      size: "1.8 MB",
    },
    {
      pt: { title: "Estatuto Social", description: "Estatuto atualizado da organização" },
      es: { title: "Estatuto Social", description: "Estatuto actualizado de la organización" },
      en: { title: "Social Statute", description: "Updated organization statute" },
      ja: { title: "社会規約", description: "更新された組織規約" },
      size: "850 KB",
    },
    {
      pt: { title: "Certificados e Títulos", description: "Certificações e reconhecimentos oficiais" },
      es: { title: "Certificados y Títulos", description: "Certificaciones y reconocimientos oficiales" },
      en: { title: "Certificates and Titles", description: "Official certifications and recognitions" },
      ja: { title: "証明書とタイトル", description: "公式認定と認識" },
      size: "1.2 MB",
    },
    {
      pt: { title: "Relatório de Impacto Social", description: "Análise do impacto de nossos programas" },
      es: { title: "Informe de Impacto Social", description: "Análisis del impacto de nuestros programas" },
      en: { title: "Social Impact Report", description: "Analysis of our programs' impact" },
      ja: { title: "社会的影響レポート", description: "プログラムの影響の分析" },
      size: "3.1 MB",
    },
    {
      pt: { title: "Prestação de Contas 2023", description: "Relatório completo do ano anterior" },
      es: { title: "Rendición de Cuentas 2023", description: "Informe completo del año anterior" },
      en: { title: "Accountability Report 2023", description: "Complete report from previous year" },
      ja: { title: "2023年説明責任報告書", description: "前年の完全なレポート" },
      size: "2.7 MB",
    },
  ]

  const financialData = [
    {
      pt: { category: "Doações Individuais", percentage: 45 },
      es: { category: "Donaciones Individuales", percentage: 45 },
      en: { category: "Individual Donations", percentage: 45 },
      ja: { category: "個人寄付", percentage: 45 },
    },
    {
      pt: { category: "Parcerias Empresariais", percentage: 30 },
      es: { category: "Asociaciones Empresariales", percentage: 30 },
      en: { category: "Corporate Partnerships", percentage: 30 },
      ja: { category: "企業パートナーシップ", percentage: 30 },
    },
    {
      pt: { category: "Projetos e Editais", percentage: 15 },
      es: { category: "Proyectos y Convocatorias", percentage: 15 },
      en: { category: "Projects and Grants", percentage: 15 },
      ja: { category: "プロジェクトと助成金", percentage: 15 },
    },
    {
      pt: { category: "Eventos Beneficentes", percentage: 10 },
      es: { category: "Eventos Benéficos", percentage: 10 },
      en: { category: "Charity Events", percentage: 10 },
      ja: { category: "チャリティーイベント", percentage: 10 },
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              {locale === "pt"
                ? "Transparência"
                : locale === "es"
                  ? "Transparencia"
                  : locale === "ja"
                    ? "透明性"
                    : "Transparency"}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              {locale === "pt"
                ? "Acreditamos que transparência é fundamental para construir confiança. Aqui você encontra todos os nossos relatórios, balanços e documentos oficiais."
                : locale === "es"
                  ? "Creemos que la transparencia es fundamental para construir confianza. Aquí encuentra todos nuestros informes, balances y documentos oficiales."
                  : locale === "ja"
                    ? "透明性は信頼を築くために不可欠だと信じています。ここですべてのレポート、バランスシート、公式文書を見つけることができます。"
                    : "We believe that transparency is essential to building trust. Here you can find all our reports, balance sheets and official documents."}
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">100%</h3>
              <p className="text-muted-foreground">
                {locale === "pt"
                  ? "Das doações vão para projetos"
                  : locale === "es"
                    ? "De las donaciones van a proyectos"
                    : locale === "ja"
                      ? "寄付はプロジェクトに使われます"
                      : "Of donations go to projects"}
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">
                {locale === "pt"
                  ? "Certificada"
                  : locale === "es"
                    ? "Certificada"
                    : locale === "ja"
                      ? "認定"
                      : "Certified"}
              </h3>
              <p className="text-muted-foreground">
                {locale === "pt"
                  ? "Organização da Sociedade Civil"
                  : locale === "es"
                    ? "Organización de la Sociedad Civil"
                    : locale === "ja"
                      ? "市民社会組織"
                      : "Civil Society Organization"}
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-2">30+</h3>
              <p className="text-muted-foreground">
                {locale === "pt"
                  ? "Anos de prestação de contas"
                  : locale === "es"
                    ? "Años de rendición de cuentas"
                    : locale === "ja"
                      ? "説明責任の年"
                      : "Years of accountability"}
              </p>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {locale === "pt"
                  ? "Origem dos Recursos 2024"
                  : locale === "es"
                    ? "Origen de los Recursos 2024"
                    : locale === "ja"
                      ? "2024年のリソースの起源"
                      : "Resource Origin 2024"}
              </h2>
              <Card className="p-6">
                <div className="space-y-6">
                  {financialData.map((item, index) => {
                    const data =
                      locale === "es" ? item.es : locale === "en" ? item.en : locale === "ja" ? item.ja : item.pt
                    return (
                      <div key={index}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium text-foreground">{data.category}</span>
                          <span className="text-primary font-semibold">{data.percentage}%</span>
                        </div>
                        <div className="h-3 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-primary rounded-full transition-all duration-500"
                            style={{ width: `${data.percentage}%` }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {locale === "pt"
                  ? "Aplicação dos Recursos 2024"
                  : locale === "es"
                    ? "Aplicación de los Recursos 2024"
                    : locale === "ja"
                      ? "2024年のリソースの適用"
                      : "Resource Application 2024"}
              </h2>
              <Card className="p-6">
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-foreground">
                        {locale === "pt"
                          ? "Programas Sociais"
                          : locale === "es"
                            ? "Programas Sociales"
                            : locale === "ja"
                              ? "社会プログラム"
                              : "Social Programs"}
                      </span>
                      <span className="text-primary font-semibold">85%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "85%" }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-foreground">
                        {locale === "pt"
                          ? "Infraestrutura"
                          : locale === "es"
                            ? "Infraestructura"
                            : locale === "ja"
                              ? "インフラストラクチャー"
                              : "Infrastructure"}
                      </span>
                      <span className="text-primary font-semibold">10%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "10%" }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-foreground">
                        {locale === "pt"
                          ? "Gestão e Administração"
                          : locale === "es"
                            ? "Gestión y Administración"
                            : locale === "ja"
                              ? "管理と運営"
                              : "Management and Administration"}
                      </span>
                      <span className="text-primary font-semibold">5%</span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: "5%" }} />
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mt-6">
                  {locale === "pt"
                    ? "85% de todos os recursos vão diretamente para nossos programas sociais, garantindo o máximo impacto na vida das pessoas atendidas."
                    : locale === "es"
                      ? "El 85% de todos los recursos van directamente a nuestros programas sociales, garantizando el máximo impacto en la vida de las personas atendidas."
                      : locale === "ja"
                        ? "すべてのリソースの85％は、サービスを受ける人々の生活に最大の影響を保証する社会プログラムに直接使われます。"
                        : "85% of all resources go directly to our social programs, ensuring maximum impact on the lives of people served."}
                </p>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              {locale === "pt"
                ? "Documentos e Relatórios"
                : locale === "es"
                  ? "Documentos e Informes"
                  : locale === "ja"
                    ? "文書とレポート"
                    : "Documents and Reports"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {documents.map((doc, index) => {
                const content = locale === "es" ? doc.es : locale === "en" ? doc.en : locale === "ja" ? doc.ja : doc.pt
                return (
                  <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{content.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{content.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">{doc.size}</span>
                          <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                            <Download className="w-4 h-4" />
                            {locale === "pt"
                              ? "Baixar"
                              : locale === "es"
                                ? "Descargar"
                                : locale === "ja"
                                  ? "ダウンロード"
                                  : "Download"}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
