"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CounterAnimation } from "@/components/counter-animation"
import { Heart, Check, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useLocale } from "@/lib/locale-context"
import { useParams } from "next/navigation"

export default function ProjectDetailPage() {
  const { locale } = useLocale()
  const params = useParams()
  const slug = params.slug as string

  const projectsData: Record<string, any> = {
    educacao: {
      pt: {
        title: "Educação",
        subtitle: "Construindo futuros através do conhecimento",
        description:
          "Nosso programa de educação oferece uma base sólida para crianças e jovens, combinando ensino acadêmico de qualidade com desenvolvimento de habilidades socioemocionais. Preparamos nossos alunos não apenas para passar em provas, mas para a vida.",
        programs: [
          "Reforço escolar para todas as idades",
          "Alfabetização de adultos",
          "Preparação para vestibular",
          "Biblioteca comunitária",
          "Informática educacional",
          "Apoio pedagógico especializado",
        ],
        impact: {
          students: { value: 5000, label: "Alunos ativos" },
          approval: { value: 95, label: "Taxa de aprovação" },
          volunteers: { value: 120, label: "Educadores voluntários" },
        },
      },
      es: {
        title: "Educación",
        subtitle: "Construyendo futuros a través del conocimiento",
        description:
          "Nuestro programa de educación ofrece una base sólida para niños y jóvenes, combinando enseñanza académica de calidad con desarrollo de habilidades socioemocionales. Preparamos a nuestros alumnos no solo para aprobar exámenes, sino para la vida.",
        programs: [
          "Refuerzo escolar para todas las edades",
          "Alfabetización de adultos",
          "Preparación para la universidad",
          "Biblioteca comunitaria",
          "Informática educativa",
          "Apoyo pedagógico especializado",
        ],
        impact: {
          students: { value: 5000, label: "Alumnos activos" },
          approval: { value: 95, label: "Tasa de aprobación" },
          volunteers: { value: 120, label: "Educadores voluntarios" },
        },
      },
      en: {
        title: "Education",
        subtitle: "Building futures through knowledge",
        description:
          "Our education program offers a solid foundation for children and youth, combining quality academic teaching with social-emotional skills development. We prepare our students not just to pass tests, but for life.",
        programs: [
          "School reinforcement for all ages",
          "Adult literacy",
          "University preparation",
          "Community library",
          "Educational computing",
          "Specialized pedagogical support",
        ],
        impact: {
          students: { value: 5000, label: "Active students" },
          approval: { value: 95, label: "Approval rate" },
          volunteers: { value: 120, label: "Volunteer educators" },
        },
      },
      ja: {
        title: "教育",
        subtitle: "知識を通じて未来を築く",
        description:
          "私たちの教育プログラムは、質の高い学術教育と社会感情スキルの開発を組み合わせ、子供と若者に堅実な基盤を提供します。私たちは生徒をテストに合格するだけでなく、人生のために準備します。",
        programs: [
          "すべての年齢の学校強化",
          "成人識字",
          "大学準備",
          "コミュニティ図書館",
          "教育コンピューティング",
          "専門的な教育サポート",
        ],
        impact: {
          students: { value: 5000, label: "アクティブな学生" },
          approval: { value: 95, label: "承認率" },
          volunteers: { value: 120, label: "ボランティア教育者" },
        },
      },
      image: "/children-studying-in-classroom-with-teacher.jpg",
    },
    "arte-cultura": {
      pt: {
        title: "Arte & Cultura",
        subtitle: "Expressão, criatividade e desenvolvimento humano",
        description:
          "Através da arte, música, dança e teatro, criamos espaços para que crianças e jovens desenvolvam sua criatividade, autoestima e expressão. A cultura é uma ferramenta poderosa de transformação social e desenvolvimento pessoal.",
        programs: [
          "Aulas de música e instrumentos",
          "Teatro e expressão corporal",
          "Artes plásticas e visuais",
          "Dança e movimento",
          "Coral infantil e juvenil",
          "Produção cultural comunitária",
        ],
        impact: {
          students: { value: 3000, label: "Participantes ativos" },
          approval: { value: 15, label: "Apresentações por ano" },
          volunteers: { value: 80, label: "Artistas voluntários" },
        },
      },
      es: {
        title: "Arte y Cultura",
        subtitle: "Expresión, creatividad y desarrollo humano",
        description:
          "A través del arte, música, dança y teatro, creamos espacios para que niños y jóvenes desarrollen su creatividad, autoestima y expresión. La cultura es una herramienta poderosa de transformación social y desarrollo personal.",
        programs: [
          "Clases de música e instrumentos",
          "Teatro y expresión corporal",
          "Artes plásticas y visuales",
          "Danza y movimiento",
          "Coro infantil y juvenil",
          "Producción cultural comunitaria",
        ],
        impact: {
          students: { value: 3000, label: "Participantes activos" },
          approval: { value: 15, label: "Presentaciones por año" },
          volunteers: { value: 80, label: "Artistas voluntarios" },
        },
      },
      en: {
        title: "Art & Culture",
        subtitle: "Expression, creativity and human development",
        description:
          "Through art, music, dance and theater, we create spaces for children and youth to develop their creativity, self-esteem and expression. Culture is a powerful tool for social transformation and personal development.",
        programs: [
          "Music and instrument classes",
          "Theater and body expression",
          "Plastic and visual arts",
          "Dance and movement",
          "Children and youth choir",
          "Community cultural production",
        ],
        impact: {
          students: { value: 3000, label: "Active participants" },
          approval: { value: 15, label: "Performances per year" },
          volunteers: { value: 80, label: "Volunteer artists" },
        },
      },
      ja: {
        title: "芸術と文化",
        subtitle: "表現、創造性、人間開発",
        description:
          "芸術、音楽、ダンス、演劇を通じて、子供と若者が創造性、自尊心、表現を発展させるためのスペースを作ります。文化は社会変革と個人的な発展のための強力なツールです。",
        programs: [
          "音楽と楽器のクラス",
          "演劇と身体表現",
          "造形芸術と視覚芸術",
          "ダンスと動き",
          "子供と若者の合唱団",
          "コミュニティ文化制作",
        ],
        impact: {
          students: { value: 3000, label: "アクティブな参加者" },
          approval: { value: 15, label: "年間公演" },
          volunteers: { value: 80, label: "ボランティアアーティスト" },
        },
      },
      image: "/children-in-art-class-painting-and-creating.jpg",
    },
    "apoio-familias": {
      pt: {
        title: "Apoio a Famílias",
        subtitle: "Fortalecendo vínculos e construindo autonomia",
        description:
          "Oferecemos suporte integral para famílias em situação de vulnerabilidade, incluindo alimentação, orientação psicossocial, encaminhamento para serviços públicos e programas de geração de renda. Acreditamos que apoiar a família é apoiar toda a comunidade.",
        programs: [
          "Distribuição de cestas básicas",
          "Orientação psicossocial",
          "Oficinas de geração de renda",
          "Acompanhamento familiar",
          "Acesso a serviços públicos",
          "Programas de autonomia financeira",
        ],
        impact: {
          students: { value: 8000, label: "Famílias atendidas" },
          approval: { value: 50000, label: "Refeições servidas/mês" },
          volunteers: { value: 150, label: "Voluntários ativos" },
        },
      },
      es: {
        title: "Apoyo a Familias",
        subtitle: "Fortaleciendo vínculos y construyendo autonomía",
        description:
          "Ofrecemos apoyo integral para familias en situación de vulnerabilidad, incluyendo alimentación, orientación psicosocial, derivación a servicios públicos y programas de generación de ingresos. Creemos que apoyar a la familia es apoyar a toda la comunidad.",
        programs: [
          "Distribución de cestas básicas",
          "Orientación psicosocial",
          "Talleres de generación de ingresos",
          "Acompañamiento familiar",
          "Acceso a servicios públicos",
          "Programas de autonomía financiera",
        ],
        impact: {
          students: { value: 8000, label: "Familias atendidas" },
          approval: { value: 50000, label: "Comidas servidas/mes" },
          volunteers: { value: 150, label: "Voluntarios activos" },
        },
      },
      en: {
        title: "Family Support",
        subtitle: "Strengthening bonds and building autonomy",
        description:
          "We offer comprehensive support for families in vulnerable situations, including food, psychosocial guidance, referral to public services and income generation programs. We believe that supporting the family is supporting the entire community.",
        programs: [
          "Distribution of basic food baskets",
          "Psychosocial guidance",
          "Income generation workshops",
          "Family monitoring",
          "Access to public services",
          "Financial autonomy programs",
        ],
        impact: {
          students: { value: 8000, label: "Families served" },
          approval: { value: 50000, label: "Meals served/month" },
          volunteers: { value: 150, label: "Active volunteers" },
        },
      },
      ja: {
        title: "家族支援",
        subtitle: "絆を強化し、自律性を構築する",
        description:
          "私たちは、食事、心理社会的指導、公共サービスへの紹介、収入創出プログラムを含む、脆弱な状況にある家族への包括的なサポートを提供します。家族を支援することは、コミュニティ全体を支援することだと信じています。",
        programs: [
          "基本的な食料バスケットの配布",
          "心理社会的指導",
          "収入創出ワークショップ",
          "家族のモニタリング",
          "公共サービスへのアクセス",
          "財政的自律プログラム",
        ],
        impact: {
          students: { value: 8000, label: "サービスを受けた家族" },
          approval: { value: 50000, label: "月間提供食事" },
          volunteers: { value: 150, label: "アクティブなボランティア" },
        },
      },
      image: "/families-receiving-support-and-community-help.jpg",
    },
    "formacao-profissional": {
      pt: {
        title: "Profissionalização",
        subtitle: "Programa Jovem Aprendiz São Martinho",
        description:
          "É um Programa constituído por parcerias institucionais de interesses mútuos. Oferece cursos profissionalizantes com base na potencialidade do mercado e alinhados às diretrizes da lei 10.097/2000 e seus marcos regulatórios. Contribui na formação profissional e pessoal do jovem por intermédio de um programa inclusivo e inovador, atendendo as empresas parceiras no cumprimento obrigatório de cota de aprendizagem.",
        programs: [
          "Programa Jovem Aprendiz (15,5 a 22 anos)",
          "Cursos de iniciação profissional",
          "Formação alinhada à Lei 10.097/2000",
          "Parceria com empresas para cota de aprendizagem",
          "Acompanhamento do desempenho escolar",
          "Desenvolvimento profissional e pessoal",
        ],
        impact: {
          students: { value: 3600, label: "Jovens com acesso ao 1º emprego" },
          approval: { value: 45, label: "Empresas conveniadas" },
          volunteers: { value: 640, label: "Jovens em situação de rua atendidos" },
        },
        faq: [
          {
            question: "Como faço para me inscrever no Programa de Aprendizagem Profissional?",
            answer:
              "No momento, as inscrições para curso de iniciação profissional estão fechadas. Abriremos em breve. Acompanhe o período de inscrições em nossas redes sociais e site.",
          },
          {
            question: "Como sei se posso me inscrever?",
            answer:
              "Você precisa ter entre 15 anos e meio e 22 anos de idade. Deve estar matriculado em qualquer série do Ensino Médio ou já ter concluído. Ser aluno da rede pública ou bolsista integral de rede particular. Estudar preferencialmente no turno da noite. Seu desempenho e frequência escolar também são importantes.",
          },
          {
            question: "Quais documentos preciso ter?",
            answer:
              "RG (carteira de identidade), CPF, comprovante de residência, Carteira de Trabalho (CTPS, pode ser digital), boletim escolar, RG e CPF do(a) responsável legal para menores de 18 anos.",
          },
          {
            question: "Quanto custa?",
            answer: "Não se deixe enganar! Nenhum Programa de Aprendizagem pode cobrar qualquer valor ao aprendiz.",
          },
          {
            question: "Qual será meu salário?",
            answer:
              "O salário de um jovem aprendiz é calculado de acordo com as horas trabalhadas, por isso se diz que o aprendiz recebe salário mínimo-hora. Algumas empresas poderão optar por pagar o salário mínimo integral.",
          },
        ],
        contact: {
          email: "arnaldolobo.profissionalizacao@saomartinho.org.br",
          phone: "(21) 2156-6524 e (21) 2156-6521",
          address: "Rua Riachuelo, 7, Lapa - CEP: 20021-260 - RJ",
        },
      },
      es: {
        title: "Profesionalización",
        subtitle: "Programa Joven Aprendiz São Martinho",
        description:
          "Es un Programa constituido por asociaciones institucionales de intereses mutuos. Ofrece cursos profesionalizantes basados en el potencial del mercado y alineados con las directrices de la ley 10.097/2000 y sus marcos regulatorios. Contribuye a la formación profesional y personal del joven mediante un programa inclusivo e innovador, atendiendo a las empresas asociadas en el cumplimiento obligatorio de la cuota de aprendizaje.",
        programs: [
          "Programa Joven Aprendiz (15,5 a 22 años)",
          "Cursos de iniciación profesional",
          "Formación alineada a la Ley 10.097/2000",
          "Asociación con empresas para cuota de aprendizaje",
          "Seguimiento del desempeño escolar",
          "Desarrollo profesional y personal",
        ],
        impact: {
          students: { value: 3600, label: "Jóvenes con acceso al 1er empleo" },
          approval: { value: 45, label: "Empresas asociadas" },
          volunteers: { value: 640, label: "Jóvenes en situación de calle atendidos" },
        },
        faq: [
          {
            question: "¿Cómo me inscribo en el Programa de Aprendizaje Profesional?",
            answer:
              "En este momento, las inscripciones para el curso de iniciación profesional están cerradas. Abriremos pronto. Sigue el período de inscripciones en nuestras redes sociales y sitio web.",
          },
          {
            question: "¿Cómo sé si puedo inscribirme?",
            answer:
              "Debes tener entre 15 años y medio y 22 años de edad. Debes estar matriculado en cualquier año de Secundaria o ya haberla completado. Ser alumno de escuela pública o becario integral de escuela privada. Estudiar preferentemente en el turno nocturno. Tu rendimiento y asistencia escolar también son importantes.",
          },
          {
            question: "¿Qué documentos necesito?",
            answer:
              "DNI, CPF, comprobante de domicilio, Libreta de Trabajo (puede ser digital), boletín escolar, DNI y CPF del responsable legal para menores de 18 años.",
          },
          {
            question: "¿Cuánto cuesta?",
            answer: "¡No se deje engañar! Ningún Programa de Aprendizaje puede cobrar ningún valor al aprendiz.",
          },
          {
            question: "¿Cuál será mi salario?",
            answer:
              "El salario de un joven aprendiz se calcula según las horas trabajadas, por eso se dice que el aprendiz recibe salario mínimo por hora. Algunas empresas podrán optar por pagar el salario mínimo integral.",
          },
        ],
        contact: {
          email: "arnaldolobo.profissionalizacao@saomartinho.org.br",
          phone: "(21) 2156-6524 e (21) 2156-6521",
          address: "Rua Riachuelo, 7, Lapa - CEP: 20021-260 - RJ",
        },
      },
      en: {
        title: "Professionalization",
        subtitle: "Young Apprentice Program São Martinho",
        description:
          "It is a Program consisting of institutional partnerships of mutual interests. It offers professional courses based on market potential and aligned with the guidelines of law 10.097/2000 and its regulatory frameworks. It contributes to the professional and personal training of young people through an inclusive and innovative program, serving partner companies in mandatory compliance with the apprenticeship quota.",
        programs: [
          "Young Apprentice Program (15.5 to 22 years)",
          "Professional initiation courses",
          "Training aligned with Law 10.097/2000",
          "Partnership with companies for apprenticeship quota",
          "School performance monitoring",
          "Professional and personal development",
        ],
        impact: {
          students: { value: 3600, label: "Young people with access to 1st job" },
          approval: { value: 45, label: "Partner companies" },
          volunteers: { value: 640, label: "Street youth served" },
        },
        faq: [
          {
            question: "How do I enroll in the Professional Learning Program?",
            answer:
              "At the moment, enrollments for professional initiation courses are closed. We will open soon. Follow the enrollment period on our social media and website.",
          },
          {
            question: "How do I know if I can enroll?",
            answer:
              "You must be between 15.5 and 22 years old. You must be enrolled in any year of High School or have already completed it. Be a public school student or full scholarship holder at a private school. Study preferably in the evening shift. Your school performance and attendance are also important.",
          },
          {
            question: "What documents do I need?",
            answer:
              "ID, CPF, proof of residence, Work Card (can be digital), school report, ID and CPF of legal guardian for minors under 18 years.",
          },
          {
            question: "How much does it cost?",
            answer: "Don't be fooled! No Apprenticeship Program can charge any amount to the apprentice.",
          },
          {
            question: "What will my salary be?",
            answer:
              "The salary of a young apprentice is calculated according to hours worked, which is why the apprentice receives minimum wage per hour. Some companies may choose to pay the full minimum wage.",
          },
        ],
        contact: {
          email: "arnaldolobo.profissionalizacao@saomartinho.org.br",
          phone: "(21) 2156-6524 and (21) 2156-6521",
          address: "Rua Riachuelo, 7, Lapa - CEP: 20021-260 - RJ",
        },
      },
      ja: {
        title: "職業化",
        subtitle: "若い見習いプログラム サンマルティーニョ",
        description:
          "相互利益の機関提携で構成されるプログラムです。市場の可能性に基づき、法律10.097/2000のガイドラインとその規制枠組みに沿った職業コースを提供します。包括的で革新的なプログラムを通じて若者の職業的および個人的な訓練に貢献し、見習い割当の義務的な遵守においてパートナー企業にサービスを提供します。",
        programs: [
          "若い見習いプログラム（15.5〜22歳）",
          "職業開始コース",
          "法律10.097/2000に沿ったトレーニング",
          "見習い割当のための企業とのパートナーシップ",
          "学業成績のモニタリング",
          "職業的および個人的な開発",
        ],
        impact: {
          students: { value: 3600, label: "最初の仕事にアクセスできる若者" },
          approval: { value: 45, label: "パートナー企業" },
          volunteers: { value: 640, label: "路上の若者に対応" },
        },
        faq: [
          {
            question: "職業学習プログラムに登録するにはどうすればよいですか？",
            answer:
              "現在、職業開始コースの登録は閉じています。まもなく開きます。ソーシャルメディアとウェブサイトで登録期間をフォローしてください。",
          },
          {
            question: "登録できるかどうかをどのように知ることができますか？",
            answer:
              "15.5歳から22歳の間である必要があります。高校の任意の学年に登録されているか、すでに完了している必要があります。公立学校の学生または私立学校の全額奨学金保持者である必要があります。好ましくは夜間シフトで勉強してください。学業成績と出席も重要です。",
          },
          {
            question: "どのような書類が必要ですか？",
            answer: "ID、CPF、居住証明、労働カード（デジタル可）、学校レポート、18歳未満の法定保護者のIDとCPF。",
          },
          {
            question: "いくらかかりますか？",
            answer: "だまされないでください！見習いプログラムは見習いに対して一切請求できません。",
          },
          {
            question: "私の給料はいくらになりますか？",
            answer:
              "若い見習いの給料は労働時間に応じて計算されるため、見習いは時間当たりの最低賃金を受け取ると言われています。一部の企業は全額最低賃金を支払うことを選択できます。",
          },
        ],
        contact: {
          email: "arnaldolobo.profissionalizacao@saomartinho.org.br",
          phone: "(21) 2156-6524 および (21) 2156-6521",
          address: "Rua Riachuelo, 7, Lapa - CEP: 20021-260 - RJ",
        },
      },
      image: "/young-adults-in-professional-training-workshop.jpg",
    },
    "acolhimento-social": {
      pt: {
        title: "Acolhimento Social",
        subtitle: "Um lugar seguro para crescer",
        description:
          "Oferecemos um ambiente acolhedor e seguro para crianças e adolescentes em situação de vulnerabilidade ou risco social. Com acompanhamento multidisciplinar, proporcionamos não apenas abrigo, mas desenvolvimento integral.",
        programs: [
          "Acolhimento institucional",
          "Acompanhamento psicológico",
          "Atividades socioeducativas",
          "Reintegração familiar",
          "Suporte jurídico",
          "Preparação para autonomia",
        ],
        impact: {
          students: { value: 1500, label: "Crianças acolhidas" },
          approval: { value: 85, label: "Taxa de reintegração" },
          volunteers: { value: 100, label: "Profissionais dedicados" },
        },
      },
      es: {
        title: "Acogida Social",
        subtitle: "Un lugar seguro para crecer",
        description:
          "Ofrecemos un ambiente acogedor y seguro para niños y adolescentes en situación de vulnerabilidad o riesgo social. Con acompañamiento multidisciplinario, proporcionamos no solo refugio, sino desarrollo integral.",
        programs: [
          "Acogida institucional",
          "Acompañamiento psicológico",
          "Actividades socioeducativas",
          "Reintegración familiar",
          "Apoyo jurídico",
          "Preparación para autonomía",
        ],
        impact: {
          students: { value: 1500, label: "Niños acogidos" },
          approval: { value: 85, label: "Tasa de reintegración" },
          volunteers: { value: 100, label: "Profesionales dedicados" },
        },
      },
      en: {
        title: "Social Shelter",
        subtitle: "A safe place to grow",
        description:
          "We offer a welcoming and safe environment for children and adolescents in situations of vulnerability or social risk. With multidisciplinary monitoring, we provide not just shelter, but comprehensive development.",
        programs: [
          "Institutional shelter",
          "Psychological monitoring",
          "Socio-educational activities",
          "Family reintegration",
          "Legal support",
          "Preparation for autonomy",
        ],
        impact: {
          students: { value: 1500, label: "Children sheltered" },
          approval: { value: 85, label: "Reintegration rate" },
          volunteers: { value: 100, label: "Dedicated professionals" },
        },
      },
      ja: {
        title: "社会的受け入れ",
        subtitle: "成長するための安全な場所",
        description:
          "私たちは、脆弱性または社会的リスクの状況にある子供と青少年のために、歓迎的で安全な環境を提供します。学際的な監視により、避難所だけでなく、包括的な開発を提供します。",
        programs: ["機関的避難所", "心理的モニタリング", "社会教育活動", "家族の再統合", "法的支援", "自律性の準備"],
        impact: {
          students: { value: 1500, label: "避難した子供" },
          approval: { value: 85, label: "再統合率" },
          volunteers: { value: 100, label: "献身的な専門家" },
        },
      },
      image: "/safe-community-space-with-children-and-caregivers.jpg",
    },
  }

  const project = projectsData[slug]
  if (!project) return null

  const content = project[locale] || project.pt

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('${project.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <Button asChild variant="ghost" size="sm" className="mb-6">
            <Link href="/projetos" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              {locale === "pt"
                ? "Voltar aos projetos"
                : locale === "es"
                  ? "Volver a proyectos"
                  : locale === "ja"
                    ? "プロジェクトに戻る"
                    : "Back to projects"}
            </Link>
          </Button>

          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">{content.title}</h1>
            <p className="text-xl text-muted-foreground text-pretty">{content.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                {locale === "pt"
                  ? "Sobre o Projeto"
                  : locale === "es"
                    ? "Sobre el Proyecto"
                    : locale === "ja"
                      ? "プロジェクトについて"
                      : "About the Project"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">{content.description}</p>

              <h3 className="text-xl font-semibold text-foreground mb-4">
                {locale === "pt"
                  ? "Programas Oferecidos"
                  : locale === "es"
                    ? "Programas Ofrecidos"
                    : locale === "ja"
                      ? "提供されるプログラム"
                      : "Programs Offered"}
              </h3>
              <ul className="space-y-3">
                {content.programs.map((program: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{program}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Card className="p-8 bg-muted border-none">
                <h3 className="text-xl font-semibold text-foreground mb-6">
                  {locale === "pt"
                    ? "Impacto do Projeto"
                    : locale === "es"
                      ? "Impacto del Proyecto"
                      : locale === "ja"
                        ? "プロジェクトの影響"
                        : "Project Impact"}
                </h3>
                <div className="space-y-6">
                  {Object.entries(content.impact).map(([key, data]: [string, any]) => (
                    <div key={key} className="border-b border-border pb-4 last:border-0 last:pb-0">
                      <div className="text-3xl font-bold text-primary mb-1">
                        <CounterAnimation end={data.value} suffix={key === "approval" ? "%" : "+"} />
                      </div>
                      <p className="text-sm text-muted-foreground">{data.label}</p>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-8 mt-6 bg-gradient-to-br from-primary to-accent text-primary-foreground border-none">
                <h3 className="text-xl font-semibold mb-4">
                  {locale === "pt"
                    ? "Apoie Este Projeto"
                    : locale === "es"
                      ? "Apoye Este Proyecto"
                      : locale === "ja"
                        ? "このプロジェクトを支援する"
                        : "Support This Project"}
                </h3>
                <p className="text-primary-foreground/90 mb-6 leading-relaxed">
                  {locale === "pt"
                    ? "Sua doação ajuda a manter e expandir este projeto, transformando ainda mais vidas."
                    : locale === "es"
                      ? "Su donación ayuda a mantener y expandir este proyecto, transformando aún más vidas."
                      : locale === "ja"
                        ? "あなたの寄付は、このプロジェクトを維持および拡大し、さらに多くの人生を変えるのに役立ちます。"
                        : "Your donation helps maintain and expand this project, transforming even more lives."}
                </p>
                <Button asChild size="lg" variant="secondary" className="w-full">
                  <Link href="/doacoes" className="gap-2">
                    {locale === "pt"
                      ? "Fazer Doação"
                      : locale === "es"
                        ? "Hacer Donación"
                        : locale === "ja"
                          ? "寄付する"
                          : "Make a Donation"}
                    <Heart className="w-5 h-5 fill-current" />
                  </Link>
                </Button>
              </Card>
            </div>
          </div>

          {slug === "formacao-profissional" && content.faq && (
            <div className="mt-16">
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8 text-center">
                {locale === "pt"
                  ? "Perguntas Frequentes"
                  : locale === "es"
                    ? "Preguntas Frecuentes"
                    : locale === "ja"
                      ? "よくある質問"
                      : "Frequently Asked Questions"}
              </h2>
              <div className="max-w-3xl mx-auto space-y-4">
                {content.faq.map((item: any, index: number) => (
                  <Card key={index} className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-3">{item.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {slug === "formacao-profissional" && content.contact && (
            <div className="mt-16 max-w-3xl mx-auto">
              <Card className="p-8 bg-primary/5 border-primary/20">
                <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                  {locale === "pt"
                    ? "Entre em Contato"
                    : locale === "es"
                      ? "Póngase en Contacto"
                      : locale === "ja"
                        ? "お問い合わせ"
                        : "Get in Touch"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Email</p>
                    <p className="font-medium text-foreground break-all">{content.contact.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {locale === "pt" ? "Telefone" : locale === "es" ? "Teléfono" : locale === "ja" ? "電話" : "Phone"}
                    </p>
                    <p className="font-medium text-foreground">{content.contact.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {locale === "pt"
                        ? "Endereço"
                        : locale === "es"
                          ? "Dirección"
                          : locale === "ja"
                            ? "住所"
                            : "Address"}
                    </p>
                    <p className="font-medium text-foreground">{content.contact.address}</p>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
