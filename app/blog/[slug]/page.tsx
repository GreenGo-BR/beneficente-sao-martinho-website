import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, User, ArrowLeft, MapPin, Tag } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { notFound } from "next/navigation"

const blogPosts = {
  "doacao-recorrente-mensal-transforma-mais": {
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
    content: `
      <blockquote>
        <strong>Resposta direta:</strong> A doação recorrente (mensal) costuma ter mais impacto porque dá <strong>previsibilidade</strong> para o projeto: permite planejar atividades, manter equipe e garantir continuidade. Com uma base estável de doadores mensais, a instituição reduz imprevistos, evita interrupções e consegue atender melhor — mesmo com valores pequenos.
      </blockquote>

      <h2>O que é doação recorrente?</h2>
      <p>Doação recorrente é quando você doa automaticamente <strong>todo mês</strong> (ou em outra periodicidade), com valor fixo ou ajustável. Ela funciona como uma assinatura: você ajuda com constância e pode cancelar quando quiser.</p>

      <figure style="margin: 2rem 0;">
        <img src="/blog-doacao-mensal-pote.jpg" alt="Mão inserindo moeda em pote de vidro com etiqueta MENSAL em núcleo comunitário do Rio de Janeiro" style="max-width: 100%; border-radius: 12px;" />
        <figcaption style="margin-top: 0.75rem; font-size: 0.875rem; color: #6b7280; font-style: italic;">Cada moeda conta — e a constância mensal é o que transforma apoio em impacto real.</figcaption>
      </figure>

      <h2>Por que doação mensal "vale mais" do que parece?</h2>
      <p>Uma doação única é importante, mas muitas vezes entra como "pico" de receita. Já a doação recorrente vira <strong>base</strong>. E base é o que sustenta:</p>
      <ul>
        <li>Rotina de oficinas e atividades</li>
        <li>Materiais e estrutura</li>
        <li>Equipe e planejamento</li>
        <li>Ações contínuas com famílias</li>
        <li>Transparência e acompanhamento de resultados</li>
      </ul>
      <p>Quando a instituição sabe que terá um mínimo garantido no mês seguinte, ela não precisa "recomeçar do zero" toda vez.</p>

      <h2>Previsibilidade: a diferença entre "apagar incêndio" e planejar</h2>
      <p>Projetos sociais dependem de continuidade. Com previsibilidade, dá para:</p>
      <ul>
        <li>fechar um calendário de atividades;</li>
        <li>comprar materiais no momento certo (sem urgência e desperdício);</li>
        <li>organizar turmas e horários;</li>
        <li>manter o atendimento estável, sem interrupções.</li>
      </ul>
      <p>Em resumo: previsibilidade transforma doação em <strong>impacto consistente</strong>.</p>

      <figure style="margin: 2rem 0;">
        <img src="/blog-doacao-mensal-calendario.jpg" alt="Calendário mensal do Rio de Janeiro com corações coloridos marcando dias de doação, visitas e oficinas" style="max-width: 100%; border-radius: 12px;" />
        <figcaption style="margin-top: 0.75rem; font-size: 0.875rem; color: #6b7280; font-style: italic;">Com uma base mensal previsível, o instituto consegue planejar cada atividade, oficina e visita com antecedência.</figcaption>
      </figure>

      <h2>"Mas R$30 por mês faz diferença mesmo?"</h2>
      <p>Sim. Valores pequenos ficam enormes quando se somam e se repetem. A lógica é simples:</p>
      <ul>
        <li><strong>R$30 por mês</strong> ajuda a cobrir custos recorrentes;</li>
        <li>quando muitas pessoas fazem o mesmo, o projeto cria uma base segura;</li>
        <li>com base segura, a instituição melhora o planejamento e amplia a atuação.</li>
      </ul>
      <p>Além disso, doação recorrente reduz o peso de "grandes campanhas o tempo todo" e dá fôlego para fazer o trabalho acontecer.</p>

      <h2>Doação única vs. doação recorrente (na prática)</h2>

      <figure style="margin: 2rem 0;">
        <img src="/blog-doacao-mensal-vs-unica.jpg" alt="Infográfico comparando doação mensal (recurso estável, planejamento longo prazo, maior impacto) com doação única (alívio imediato, contribuição pontual)" style="max-width: 100%; border-radius: 12px;" />
        <figcaption style="margin-top: 0.75rem; font-size: 0.875rem; color: #6b7280; font-style: italic;">Seu apoio, sua escolha. Ambos transformam — e o ideal é ter os dois.</figcaption>
      </figure>

      <p><strong>Doação única é ótima para:</strong></p>
      <ul>
        <li>emergências e necessidades pontuais;</li>
        <li>campanhas específicas;</li>
        <li>reforço em meses de maior demanda.</li>
      </ul>
      <p><strong>Doação recorrente é ideal para:</strong></p>
      <ul>
        <li>manter atividades constantes;</li>
        <li>garantir continuidade;</li>
        <li>permitir expansão responsável.</li>
      </ul>
      <p>O melhor cenário para qualquer instituição é ter <strong>as duas</strong>: base recorrente + campanhas pontuais.</p>

      <h2>Como começar (de forma simples e segura)</h2>
      <ol>
        <li>Escolha um valor que caiba no seu mês (mesmo que seja pequeno).</li>
        <li>Prefira um canal rastreável e oficial (plataforma de pagamento ou instrução oficial do site).</li>
        <li>Guarde o comprovante/registro.</li>
        <li>Se quiser, ajuste o valor no futuro — o importante é a constância.</li>
      </ol>

      <h2>Como a doação mensal fortalece a transparência</h2>
      <p>Quando a instituição tem base recorrente, ela consegue investir mais em organização e prestação de contas, relatórios e indicadores, e comunicação clara com doadores e parceiros. Ou seja: recorrência ajuda o instituto a ser ainda mais transparente e previsível.</p>

      <h2>Perguntas frequentes (FAQ)</h2>
      <p><strong>Posso cancelar a doação recorrente quando quiser?</strong><br/>Em geral, sim — e isso deve ser claro no canal de doação. A recorrência é uma ajuda contínua, não um compromisso irreversível.</p>
      <p><strong>É melhor doar um valor grande uma vez ou um valor pequeno todo mês?</strong><br/>Depende. Se você pode doar um valor grande, ótimo. Mas, para planejamento, a doação mensal costuma sustentar melhor a continuidade.</p>
      <p><strong>Doação recorrente é segura?</strong><br/>Sim, se você usa canais oficiais do site e plataformas confiáveis. Guarde o registro e evite links de terceiros.</p>

      <div class="bg-primary/5 p-6 rounded-lg mt-8">
        <h3 class="text-xl font-bold mb-3">Quer apoiar de um jeito que sustenta o projeto mês a mês?</h3>
        <p class="mb-4">Se você acredita em impacto contínuo, a doação recorrente é uma das formas mais poderosas de ajudar:</p>
        <ul class="space-y-2 mb-4">
          <li>✓ <a href="/doacoes" class="text-primary hover:underline font-semibold">Ativar doação mensal (PIX/PagSeguro)</a></li>
          <li>✓ <a href="/transparencia" class="text-primary hover:underline font-semibold">Ver nossa transparência</a></li>
          <li>✓ <a href="/contato" class="text-primary hover:underline font-semibold">Falar com a instituição</a></li>
        </ul>
      </div>
    `,
  },
  "como-doar-ong-com-seguranca-pix-recibo": {
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
    content: `
      <blockquote>
        <strong>Resposta direta:</strong> Para doar com segurança, confirme se você está em um canal oficial da ONG (site e redes verificáveis), confira se o CNPJ/razão social do recebedor corresponde à instituição, use métodos rastreáveis (PIX ou plataforma), guarde o comprovante e, quando necessário, solicite recibo. Se algo parecer "urgente demais" ou fora do padrão, pare e valide antes de pagar.
      </blockquote>

      <p>Doar é um ato de confiança. E confiança aumenta quando existe um processo simples: verificar canais oficiais, conferir dados do recebedor e registrar o pagamento. Isso protege você e fortalece a cultura de transparência.</p>

      <h2>Checklist rápido (30 segundos) para doar com segurança</h2>
      <p>Antes de confirmar o pagamento, verifique:</p>
      <ul>
        <li><strong>Você chegou por um canal oficial?</strong> (site oficial, redes oficiais, link direto da instituição)</li>
        <li><strong>O nome do recebedor confere com a ONG?</strong> (razão social / CNPJ quando aparecer)</li>
        <li><strong>O pedido está claro?</strong> (o que a doação apoia e como será usada)</li>
        <li><strong>Existe transparência?</strong> (página de transparência, relatórios, prestação de contas)</li>
        <li><strong>O pagamento é rastreável?</strong> (PIX, cartão via plataforma, boleto oficial)</li>
      </ul>
      <p>Se alguma dessas respostas for "não", vale parar e validar com a instituição.</p>

      <h2>Como doar via PIX (com segurança)</h2>
      <p>O PIX é rápido e rastreável — ótimo para doações — desde que você confira os dados antes de confirmar.</p>

      <h3>Passo a passo</h3>
      <ol>
        <li><strong>Acesse o link oficial de doação</strong> (site da instituição).</li>
        <li><strong>Copie a chave PIX ou leia o QR code</strong>.</li>
        <li>No app do banco, <strong>confira o nome do recebedor</strong> que aparece antes de confirmar.</li>
        <li><strong>Digite o valor</strong> e finalize o pagamento.</li>
        <li><strong>Salve o comprovante</strong> (print ou PDF).</li>
      </ol>

      <h3>Dicas importantes</h3>
      <ul>
        <li>Prefira <strong>QR code e chave</strong> publicados <strong>no site oficial</strong>.</li>
        <li>Se receber chave por mensagem, <strong>confira no site</strong> antes de pagar.</li>
        <li>Evite "chaves diferentes" que não estejam listadas em canais oficiais.</li>
      </ul>

      <h2>Como doar por plataforma (ex.: PagSeguro / cartão)</h2>
      <p>Plataformas ajudam com cartão, parcelamento e registro de transação.</p>

      <h3>Passo a passo</h3>
      <ol>
        <li><strong>Abra a página oficial de doação</strong> da instituição.</li>
        <li>Escolha o método: <strong>cartão</strong>, <strong>PIX</strong> via plataforma ou <strong>boleto</strong> (se disponível).</li>
        <li><strong>Confirme se o checkout é de um provedor confiável</strong> (ambiente seguro, conexão HTTPS).</li>
        <li>Finalize e <strong>guarde o comprovante por e-mail</strong>.</li>
      </ol>
      <ul>
        <li>Use sempre links do site oficial (evite links encurtados enviados por desconhecidos).</li>
        <li>Desconfie de páginas que pedem dados além do necessário.</li>
      </ul>

      <figure style="margin: 2rem 0;">
        <img src="/blog-doar-ong-comprovante.jpg" alt="Comprovante impresso de doação ao lado de smartphone e caneta" style="max-width: 100%; border-radius: 12px;" />
        <figcaption style="margin-top: 0.75rem; font-size: 0.875rem; color: #6b7280; font-style: italic;">Guarde sempre o comprovante — digital ou impresso — como registro da sua doação.</figcaption>
      </figure>

      <h2>Recibo: quando faz sentido pedir (e por quê)</h2>
      <p>Em muitos casos, o <strong>comprovante de pagamento</strong> já é suficiente para registrar a doação. Mas pedir <strong>recibo</strong> pode ser útil quando:</p>
      <ul>
        <li>você está fazendo uma doação em nome de empresa;</li>
        <li>deseja formalizar para controle interno;</li>
        <li>a instituição oferece recibo como parte da prestação de contas.</li>
      </ul>
      <p><strong>Dica:</strong> guarde sempre o comprovante e, se precisar, solicite recibo no canal oficial da ONG (e-mail/contato do site).</p>

      <h2>Sinais de alerta (evite golpes e pressão)</h2>
      <p>Fique atento se acontecer:</p>
      <ul>
        <li><strong>Pressa e pressão</strong> ("tem que doar agora", "última chance hoje").</li>
        <li><strong>Dados do recebedor que não batem</strong> com a instituição.</li>
        <li><strong>Pedido por canal estranho</strong> (perfil recém-criado, número desconhecido, link esquisito).</li>
        <li><strong>Promessas exageradas</strong> ("garantia", "retorno", "benefício" fora do normal).</li>
      </ul>
      <p>Na dúvida, pare e valide com a instituição pelo site.</p>

      <figure style="margin: 2rem 0;">
        <img src="/blog-doar-ong-seguranca-recibo.jpg" alt="Ilustração 3D de celular com tela de doação PIX, escudo de segurança verde e recibo" style="max-width: 100%; border-radius: 12px;" />
        <figcaption style="margin-top: 0.75rem; font-size: 0.875rem; color: #6b7280; font-style: italic;">Segurança, transparência e comprovante — os três pilares de uma doação bem feita.</figcaption>
      </figure>

      <h2>Como saber se a ONG é transparente (sem complicar)</h2>
      <p>Você pode olhar rapidamente:</p>
      <ul>
        <li>Existe uma <strong>página de transparência</strong> no site?</li>
        <li>A instituição mostra <strong>projetos</strong>, <strong>metas</strong> e <strong>resultados</strong>?</li>
        <li>Há <strong>contatos oficiais</strong> claros?</li>
        <li>A comunicação é consistente (site + redes + dados coerentes)?</li>
      </ul>
      <p>Transparência não precisa ser perfeita — mas deve ser <strong>clara e verificável</strong>.</p>

      <h2>Perguntas frequentes (FAQ)</h2>
      <p><strong>PIX é seguro para doação?</strong><br/>Sim, desde que você confirme o <strong>nome do recebedor</strong> e use <strong>canais oficiais</strong> para obter a chave/QR code.</p>
      <p><strong>Boleto é sempre seguro?</strong><br/>Pode ser, mas é importante verificar se é um boleto <strong>emitido por canal oficial</strong> e se o beneficiário corresponde à instituição.</p>
      <p><strong>Preciso de recibo para doar?</strong><br/>Nem sempre. Para controle pessoal, o comprovante costuma bastar. Para empresa ou formalização, o recibo pode ser útil.</p>

      <div class="bg-primary/5 p-6 rounded-lg mt-8">
        <h3 class="text-xl font-bold mb-3">Pronto para doar com segurança?</h3>
        <p class="mb-4">Escolha um canal oficial e registre sua doação:</p>
        <ul class="space-y-2 mb-4">
          <li>✓ <a href="/doacoes" class="text-primary hover:underline font-semibold">Doar agora (PIX/PagSeguro)</a></li>
          <li>✓ <a href="/transparencia" class="text-primary hover:underline font-semibold">Ver nossa transparência</a></li>
          <li>✓ <a href="/contato" class="text-primary hover:underline font-semibold">Falar com a instituição</a></li>
        </ul>
      </div>
    `,
  },
  "trabalho-social-criancas-adolescentes-rj": {
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
    content: `
      <blockquote>
        <strong>Resposta direta:</strong> Trabalho social com crianças e adolescentes em vulnerabilidade é um conjunto de ações contínuas — educativas, culturais, de acolhimento e de apoio à família — que protege direitos, fortalece vínculos e amplia oportunidades. No Rio de Janeiro, ele acontece por meio de oficinas, acompanhamento socioeducativo e conexões com a rede de serviços (escola, saúde e assistência), reduzindo riscos e ajudando cada jovem a construir um caminho mais seguro.
      </blockquote>

      <p>Trabalho social não é caridade pontual. É presença, método e continuidade. Em territórios onde faltam oportunidades e sobram riscos, projetos socioeducativos ajudam a criar rotina, pertencimento e caminhos concretos para crianças e adolescentes.</p>

      <figure style="margin: 2rem 0; text-align: center;">
        <img src="/blog-trabalho-social-circulo-cuidado.jpg" alt="Círculo de Cuidado — Educação, Cultura e Proteção" style="max-width: 100%; border-radius: 12px; display: inline-block;" />
        <figcaption style="margin-top: 0.75rem; font-size: 0.875rem; color: #6b7280; font-style: italic;">O trabalho social abrange três eixos complementares: educação, cultura e proteção.</figcaption>
      </figure>

      <figure style="margin: 2rem 0;">
        <img src="/blog-trabalho-social-materiais-oficina.jpg" alt="Materiais de oficina comunitária — lápis de cor, cadernos e livros sobre projeto comunitário" style="max-width: 100%; border-radius: 12px;" />
        <figcaption style="margin-top: 0.75rem; font-size: 0.875rem; color: #6b7280; font-style: italic;">Materiais utilizados nas oficinas socioeducativas: ferramentas simples que viabilizam aprendizado, expressão e continuidade.</figcaption>
      </figure>

      <h2>O que significa "vulnerabilidade social" na prática?</h2>
      <p>Vulnerabilidade social não é um "rótulo" sobre a criança ou a família. É uma condição causada por fatores como falta de acesso a serviços, instabilidade de renda, moradia precária, ausência de suporte, situações de violência no território e dificuldades para manter rotina escolar.</p>
      <p>Quando esses fatores se acumulam, a chance de evasão escolar, isolamento, exposição a violências e perda de oportunidades aumenta. O trabalho social existe para interromper esse ciclo com proteção, presença e caminhos concretos.</p>

      <h2>O que é trabalho social com crianças e adolescentes?</h2>
      <p>É um trabalho <strong>preventivo e educativo</strong>, feito com método e continuidade, que costuma envolver:</p>
      <ul>
        <li><strong>Acompanhamento socioeducativo:</strong> atividades regulares que desenvolvem habilidades, autonomia e senso de pertencimento.</li>
        <li><strong>Educação e rotina:</strong> reforço escolar, leitura, projetos de aprendizagem e apoio para manter frequência.</li>
        <li><strong>Arte e cultura:</strong> oficinas que trabalham expressão, disciplina, cooperação e autoestima.</li>
        <li><strong>Apoio à família:</strong> escuta, orientação e encaminhamentos para serviços quando necessário.</li>
        <li><strong>Rede de proteção:</strong> conexão com escola, saúde e assistência social para garantir direitos e reduzir riscos.</li>
      </ul>
      <p>O objetivo não é "resolver tudo sozinho", e sim atuar junto da família e da comunidade para gerar estabilidade, oportunidades e proteção.</p>

      <h2>Como esse trabalho acontece no dia a dia</h2>
      <p>Na prática, a atuação pode incluir:</p>
      <ol>
        <li><strong>Oficinas semanais</strong> (educação, cultura, esportes, habilidades de vida).</li>
        <li><strong>Planos individuais de acompanhamento</strong>, quando a situação exige atenção maior.</li>
        <li><strong>Roda de conversa e atividades de convivência</strong>, para fortalecer vínculo e pertencimento.</li>
        <li><strong>Ações com famílias</strong> (orientação, encaminhamento e apoio a serviços quando necessário).</li>
        <li><strong>Projetos de futuro</strong> (profissionalização, preparação para o mundo do trabalho e escolhas seguras).</li>
      </ol>

      <h2>Por que a continuidade é tão importante?</h2>
      <p>Porque vulnerabilidade não se resolve em um evento único. Rotina, vínculo e confiança são parte do método. Quando a criança ou adolescente encontra um espaço seguro e constante, surgem três coisas essenciais:</p>
      <ul>
        <li><strong>Previsibilidade:</strong> saber que haverá um lugar e pessoas de referência.</li>
        <li><strong>Pertencimento:</strong> sentir que faz parte de algo positivo.</li>
        <li><strong>Aprendizado acumulado:</strong> evolução real em comportamento, desempenho e escolhas.</li>
      </ul>

      <h2>Como apoiar um instituto que faz trabalho social</h2>
      <p>Você pode apoiar de formas diferentes — e todas contam:</p>

      <h3>1) Doação</h3>
      <p>Doação ajuda a manter oficinas, materiais, equipe e estrutura. Se possível, prefira <strong>doação recorrente (mensal)</strong> — ela dá previsibilidade ao projeto.</p>

      <h3>2) Voluntariado</h3>
      <p>Voluntariado bem feito é aquele que soma com consistência: reforço escolar, oficinas, mentoria, apoio administrativo, comunicação, foto/vídeo, captação.</p>

      <h3>3) Parcerias (empresas e comércios locais)</h3>
      <p>Empresas podem apoiar com cotas, campanhas internas, matching donation, doação de serviços ou voluntariado corporativo.</p>

      <h2>O que observar para confiar em uma ONG/instituto</h2>
      <p>Antes de apoiar, procure:</p>
      <ul>
        <li><strong>Missão e atuação claras</strong> (o que faz, para quem, como faz).</li>
        <li><strong>Transparência</strong> (prestação de contas e comunicação objetiva).</li>
        <li><strong>Canais oficiais de doação</strong> (PIX, plataformas e recibos quando aplicável).</li>
        <li><strong>Histórias com cuidado</strong> (sem exposição desnecessária de pessoas).</li>
      </ul>

      <h2>Perguntas frequentes</h2>
      <p><strong>Trabalho social é a mesma coisa que assistência social?</strong><br/>São áreas conectadas. O trabalho social com crianças e adolescentes pode incluir encaminhamentos e apoio à família, mas costuma ter forte componente <strong>socioeducativo e preventivo</strong>.</p>
      <p><strong>Precisa ser psicólogo para ajudar?</strong><br/>Não. Há muitas formas de voluntariado (educação, cultura, mentoria, comunicação, administrativo). O importante é ter responsabilidade, alinhamento e orientação do instituto.</p>
      <p><strong>Uma doação pequena faz diferença?</strong><br/>Sim. Muitas doações pequenas e recorrentes sustentam atividades contínuas e previsíveis.</p>

      <div class="bg-primary/5 p-6 rounded-lg mt-8">
        <h3 class="text-xl font-bold mb-3">Quer apoiar este trabalho?</h3>
        <p class="mb-4">Escolha uma forma de contribuição e ajude a São Martinho a continuar transformando vidas no Rio de Janeiro.</p>
        <ul class="space-y-2 mb-4">
          <li>✓ <a href="/doacoes" class="text-primary hover:underline font-semibold">Fazer uma doação (PIX/PagSeguro)</a></li>
          <li>✓ <a href="/voluntario" class="text-primary hover:underline font-semibold">Ser voluntário(a)</a></li>
          <li>✓ <a href="/empresa-parceira" class="text-primary hover:underline font-semibold">Parcerias para empresas</a></li>
          <li>✓ <a href="/transparencia" class="text-primary hover:underline font-semibold">Ver nossa transparência</a></li>
        </ul>
      </div>
    `,
  },
  "ca-parceria-autocuidado-2024": {
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
    content: `
      <p>A <strong>Associação São Martinho</strong> e a <strong>C&A</strong> uniram forças em uma bela iniciativa voltada ao acolhimento e à valorização da autoestima das pessoas atendidas pela instituição. Foi um dia especial, marcado por cuidado, atenção e transformação através de gestos simples, mas profundamente significativos.</p>

      <h2>Um Dia de Cuidado e Atenção</h2>
      <p>A ação contou com <strong>sessões de maquiagem, palestra sobre autocuidado</strong> e momentos de escuta e convivência, que proporcionaram aos participantes um tempo especial de atenção e bem-estar. Mais do que simples atividades, cada gesto foi uma oportunidade de renovar a confiança e o amor-próprio das mulheres, adolescentes e jovens atendidas pela São Martinho.</p>

      <p>Durante as sessões de maquiagem, as participantes foram acolhidas com carinho por profissionais voluntários da C&A, que dedicaram tempo e atenção individualizada a cada pessoa. O momento foi muito além da estética: foi um espaço de escuta, valorização e fortalecimento da autoestima.</p>

      <h2>Palestra sobre Autocuidado e Bem-Estar</h2>
      <p>A programação também incluiu uma <strong>palestra inspiradora sobre autocuidado</strong>, abordando temas como:</p>
      <ul>
        <li>A importância de cuidar de si mesma física e emocionalmente</li>
        <li>Como valorizar a própria beleza e identidade</li>
        <li>Estratégias práticas de autocuidado no dia a dia</li>
        <li>Fortalecimento da autoestima e amor-próprio</li>
        <li>Importância da saúde mental e emocional</li>
      </ul>

      <p>As participantes compartilharam suas vivências, trocaram experiências e saíram do encontro com uma perspectiva renovada sobre a importância de se cuidar e se valorizar.</p>

      <h2>Momentos de Escuta e Convivência</h2>
      <p>Entre sorrisos, trocas e gestos de carinho, ficou evidente que <strong>quando o bem se une, o resultado é a transformação</strong>. Os momentos de convivência permitiram que as participantes criassem vínculos, compartilhassem suas histórias e se sentissem acolhidas em um ambiente de respeito e empatia.</p>

      <p>Muitas relataram que há muito tempo não dedicavam um momento para si mesmas, e que a ação representou um presente especial de cuidado e reconhecimento do seu valor como pessoa.</p>

      <h2>Parceria que Gera Impacto Social</h2>
      <p>A parceria entre <strong>São Martinho e C&A</strong> mostra que pequenas atitudes, movidas por empatia e solidariedade, têm o poder de gerar grandes mudanças. A C&A, empresa reconhecida por seu compromisso com a responsabilidade social, acredita na importância de promover ações que valorizem a dignidade e o bem-estar das comunidades.</p>

      <p>Para a São Martinho, parcerias como essa reforçam a missão institucional de promover o desenvolvimento integral das pessoas atendidas, cuidando não apenas das necessidades materiais, mas também do bem-estar emocional e da autoestima.</p>

      <h2>Gratidão à C&A e aos Voluntários</h2>
      <p>A São Martinho agradece imensamente à <strong>C&A</strong> pela parceria e pelo compromisso com a transformação social. Agradecemos também aos voluntários que dedicaram seu tempo, talento e carinho para tornar esse dia tão especial.</p>

      <p>Juntos, provamos que quando unimos forças em prol do bem, somos capazes de transformar vidas e construir uma sociedade mais justa, acolhedora e solidária.</p>

      <div class="bg-primary/5 p-6 rounded-lg mt-8">
        <h3 class="text-xl font-bold mb-3">Sua Empresa Pode Ser Parceira</h3>
        <p class="mb-4">Empresas comprometidas com responsabilidade social podem fazer a diferença apoiando as ações da São Martinho.</p>
        <ul class="space-y-2 mb-4">
          <li>✓ Ações de voluntariado corporativo</li>
          <li>✓ Doações e patrocínios</li>
          <li>✓ Contratação de jovens aprendizes</li>
          <li>✓ Parcerias estratégicas para projetos sociais</li>
        </ul>
        <p><a href="/empresa-parceira" class="text-primary hover:underline font-semibold">Conheça nosso programa de parcerias corporativas</a></p>
      </div>
    `,
  },
  "marta-rocha-reuniao-2024": {
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
    content: `
      <p>Na manhã do dia <strong>30 de outubro de 2024</strong>, representantes da <strong>Associação Beneficente São Martinho</strong> e da <strong>ADECERio</strong> (Associação de Dirigentes de Entidades de Crianças e Adolescentes do Estado do Rio de Janeiro) estiveram reunidos com a <strong>Secretaria Municipal de Assistência Social Marta Rocha</strong> para dialogar sobre o fortalecimento das ações voltadas à população em situação de vulnerabilidade social do município do Rio de Janeiro.</p>

      <h2>Diálogo Institucional pela Assistência Social</h2>
      <p>O encontro teve como objetivo estreitar o diálogo entre o poder público municipal e as organizações da sociedade civil que atuam na proteção e desenvolvimento de crianças, adolescentes, jovens e famílias em situação de vulnerabilidade social na cidade do Rio de Janeiro.</p>

      <p>Durante a reunião, foram apresentados os programas e projetos desenvolvidos pela São Martinho, que há mais de 40 anos atua na Lapa e em Vicente de Carvalho oferecendo educação integral, profissionalização, apoio familiar e proteção social para milhares de pessoas.</p>

      <h2>Parcerias e Estratégias de Colaboração</h2>
      <p>Durante o encontro, foram discutidas <strong>parcerias e estratégias de colaboração</strong> para ampliar o alcance dos projetos sociais desenvolvidos pela instituição. Entre os temas abordados, destacam-se:</p>
      <ul>
        <li>Ampliação do atendimento às famílias em situação de vulnerabilidade social</li>
        <li>Fortalecimento dos programas de profissionalização de jovens</li>
        <li>Integração das ações da sociedade civil com as políticas públicas municipais</li>
        <li>Melhoria da qualidade dos serviços socioassistenciais oferecidos</li>
        <li>Articulação intersetorial para garantir direitos sociais</li>
      </ul>

      <h2>ADECERio: Representação das Organizações Sociais</h2>
      <p>A presença da <strong>ADECERio</strong> na reunião reforça a importância da articulação entre as organizações da sociedade civil que atuam na defesa dos direitos de crianças e adolescentes no Rio de Janeiro. A entidade representa instituições comprometidas com a proteção integral e o desenvolvimento social, fortalecendo a voz do terceiro setor junto ao poder público.</p>

      <p>A ADECERio trabalha para promover a troca de experiências, defender os interesses coletivos das entidades associadas e contribuir para o aprimoramento das políticas públicas voltadas à infância e juventude no estado do Rio de Janeiro.</p>

      <h2>Compromisso com a Dignidade e a Justiça Social</h2>
      <p>A reunião reafirma o compromisso da <strong>São Martinho</strong> com sua missão de servir com <strong>dignidade, compromisso e justiça social</strong>, buscando sempre somar esforços com o poder público e outras entidades para a construção de uma sociedade mais solidária e inclusiva.</p>

      <p>A Secretaria Municipal de Assistência Social, sob a liderança de <strong>Marta Rocha</strong>, tem demonstrado abertura ao diálogo com as organizações da sociedade civil, reconhecendo a importância fundamental do terceiro setor na execução de políticas públicas e no atendimento às populações mais vulneráveis.</p>

      <h2>Fortalecimento da Rede de Proteção Social</h2>
      <p>Encontros como esse são fundamentais para fortalecer a rede de proteção social do município do Rio de Janeiro. A articulação entre o poder público, organizações da sociedade civil e outros atores sociais contribui para:</p>
      <ul>
        <li>Maior efetividade das políticas públicas de assistência social</li>
        <li>Melhor coordenação das ações de proteção à infância e juventude</li>
        <li>Ampliação do acesso da população vulnerável aos serviços sociais</li>
        <li>Fortalecimento do Sistema Único de Assistência Social (SUAS)</li>
        <li>Promoção da intersetorialidade entre diferentes áreas (saúde, educação, assistência social)</li>
      </ul>

      <h2>Próximos Passos</h2>
      <p>Como resultado da reunião, ficaram acordadas ações conjuntas para fortalecer os programas sociais e ampliar o atendimento às famílias em situação de vulnerabilidade no Rio de Janeiro. A São Martinho continuará atuando em parceria com o poder público municipal para garantir que mais crianças, adolescentes e jovens tenham acesso a oportunidades de desenvolvimento e proteção social.</p>

      <div class="bg-primary/5 p-6 rounded-lg mt-8">
        <h3 class="text-xl font-bold mb-3">Conheça Nossos Programas</h3>
        <p class="mb-4">A São Martinho desenvolve programas sociais completos para crianças, adolescentes, jovens e famílias em situação de vulnerabilidade.</p>
        <ul class="space-y-2 mb-4">
          <li>✓ Educação Integral e Socioeducativo</li>
          <li>✓ Programa de Aprendizagem Profissional</li>
          <li>✓ Apoio e Fortalecimento Familiar</li>
          <li>✓ Arte, Cultura e Esporte</li>
        </ul>
        <p><a href="/projetos" class="text-primary hover:underline font-semibold">Conheça todos os nossos projetos</a></p>
      </div>
    `,
  },
  "festa-dia-criancas-2024": {
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
    content: `
      <p>O <strong>Dia das Crianças</strong> foi celebrado com muita alegria, brincadeiras e carinho nas unidades da <strong>Associação São Martinho</strong>! Foi um momento especial de convivência e diversão, que trouxe sorrisos e encantamento aos pequenos atendidos pelos nossos projetos socioeducativos na Lapa e em Vicente de Carvalho, no Rio de Janeiro.</p>

      <h2>Uma Festa Preparada com Amor</h2>
      <p>A festa contou com <strong>lanche especial, atividades recreativas, presentes e muita animação</strong> — tudo preparado com muito amor e dedicação por nossos educadores, coordenadores e colaboradores. Cada detalhe refletiu o cuidado e o compromisso de tornar este dia inesquecível para nossas crianças.</p>

      <p>As mesas foram decoradas com cores vibrantes, havia brinquedos, presentes embrulhados com capricho, e um ambiente repleto de alegria e acolhimento. As crianças participaram de brincadeiras, jogos, oficinas recreativas e momentos de convivência que fortaleceram os laços de amizade e pertencimento.</p>

      <h2>Atividades Recreativas e Diversão</h2>
      <p>A programação do Dia das Crianças incluiu diversas atividades pensadas especialmente para proporcionar momentos de alegria e diversão:</p>
      <ul>
        <li>Brincadeiras tradicionais e jogos em grupo</li>
        <li>Oficinas de arte e pintura</li>
        <li>Apresentações artísticas e musicais</li>
        <li>Contação de histórias e momentos de leitura</li>
        <li>Distribuição de presentes e surpresas</li>
        <li>Lanche especial com guloseimas e comidas favoritas das crianças</li>
      </ul>

      <h2>Presentes e Sorrisos</h2>
      <p>Um dos momentos mais emocionantes da festa foi a <strong>distribuição de presentes</strong>. Cada criança recebeu um presente escolhido com cuidado, proporcionando momentos de surpresa, alegria e gratidão. Os sorrisos estampados nos rostos dos pequenos foram a maior recompensa para toda a equipe da São Martinho.</p>

      <p>Para muitas crianças atendidas, esse foi o único presente que receberão no Dia das Crianças. Por isso, cada gesto de carinho e cada momento de diversão têm um significado profundo em suas vidas.</p>

      <h2>Gratidão aos Doadores e Parceiros</h2>
      <p>Aproveitamos para expressar nossa profunda <strong>gratidão a todos que contribuíram com doações, apoio e gestos de solidariedade</strong>, tornando possível essa linda celebração. Graças à generosidade de cada pessoa, empresa parceira e apoiador, conseguimos proporcionar momentos de alegria e esperança a quem mais precisa.</p>

      <p>Agradecemos especialmente às empresas parceiras, voluntários e doadores que contribuíram com presentes, alimentos, decoração e recursos financeiros para viabilizar essa festa tão especial.</p>

      <h2>A Importância de Celebrar a Infância</h2>
      <p>Celebrar o <strong>Dia das Crianças</strong> vai muito além de entregar presentes e promover brincadeiras. É uma forma de reconhecer a importância da infância, valorizar cada criança como sujeito de direitos e reafirmar nosso compromisso em proporcionar um ambiente seguro, acolhedor e estimulante para o desenvolvimento integral.</p>

      <p>Para as crianças atendidas pela São Martinho, muitas delas em situação de vulnerabilidade social, essas celebrações representam momentos de respiro, alegria e esperança em meio às dificuldades do dia a dia.</p>

      <h2>Seguimos Transformando Vidas com Amor</h2>
      <p>Que o sorriso de cada criança continue sendo nossa <strong>maior inspiração</strong> para seguir transformando vidas com amor e dedicação! A São Martinho renova seu compromisso em oferecer educação, proteção, oportunidades e momentos de alegria para as crianças, adolescentes e jovens atendidos em nossos programas.</p>

      <p>Cada festa, cada abraço, cada sorriso conquistado nos motiva a continuar acreditando na força da solidariedade e no poder transformador do amor ao próximo.</p>

      <div class="bg-primary/5 p-6 rounded-lg mt-8">
        <h3 class="text-xl font-bold mb-3">Apoie Nossas Crianças</h3>
        <p class="mb-4">Você pode fazer a diferença na vida das crianças atendidas pela São Martinho através de doações, voluntariado ou parcerias.</p>
        <ul class="space-y-2 mb-4">
          <li>✓ Doe brinquedos, livros e materiais escolares</li>
          <li>✓ Contribua financeiramente para nossos projetos</li>
          <li>✓ Seja voluntário em nossas ações sociais</li>
          <li>✓ Apadrinhe uma criança ou família</li>
        </ul>
        <p><a href="/doacoes" class="text-primary hover:underline font-semibold">Saiba como doar e apoiar</a></p>
      </div>
    `,
  },
  "oficina-camareira-formatura-2024": {
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
    content: `
      <p>Nesta semana, celebramos um momento de grande emoção e conquista: a <strong>formatura da Oficina de Camareira</strong>, uma iniciativa transformadora fruto da parceria entre a <strong>GAVIME</strong>, a <strong>Associação São Martinho</strong> e o <strong>Radisson Rio de Janeiro Barra</strong>.</p>

      <h2>Uma Porta Aberta para o Futuro</h2>
      <p>Mais do que um curso, essa oficina representou uma <strong>porta aberta para o futuro</strong>. Ao longo da formação, as participantes foram preparadas com excelência para o mercado de trabalho na área da hotelaria, desenvolvendo não apenas habilidades técnicas essenciais para a profissão de camareira, mas também a autoestima, a confiança e a perspectiva de uma nova vida.</p>

      <p>O curso de formação abordou todos os aspectos fundamentais da profissão, incluindo técnicas de arrumação de quartos, padrões de qualidade da hotelaria, higienização, organização, atendimento ao hóspede e postura profissional.</p>

      <h2>Parceria GAVIME, São Martinho e Radisson</h2>
      <p>A <strong>Oficina de Camareira</strong> é resultado de uma parceria estratégica entre três instituições comprometidas com a inclusão social e o desenvolvimento profissional:</p>
      
      <ul>
        <li><strong>GAVIME</strong> - Grupo de Apoio à Vida com Missão Especial, organização dedicada à promoção da cidadania e inclusão social</li>
        <li><strong>Associação São Martinho</strong> - Instituição com mais de 40 anos de experiência em formação e capacitação profissional de jovens e adultos em situação de vulnerabilidade</li>
        <li><strong>Radisson Rio de Janeiro Barra</strong> - Hotel de padrão internacional que abriu suas portas para oferecer treinamento prático e oportunidades de trabalho</li>
      </ul>

      <p>Essa articulação entre organizações sociais e empresas privadas demonstra o poder da união em prol da transformação social e da geração de oportunidades.</p>

      <h2>Desenvolvimento de Habilidades Técnicas e Socioemocionais</h2>
      <p>O programa de formação foi estruturado para oferecer uma preparação completa e profissional:</p>

      <h3>Conteúdo Técnico:</h3>
      <ul>
        <li>Técnicas de arrumação e higienização de apartamentos</li>
        <li>Padrões de qualidade da hotelaria</li>
        <li>Organização e gestão do tempo de trabalho</li>
        <li>Manuseio adequado de produtos de limpeza e equipamentos</li>
        <li>Protocolos de segurança e saúde ocupacional</li>
        <li>Atendimento ao hóspede e comunicação profissional</li>
      </ul>

      <h3>Desenvolvimento Pessoal:</h3>
      <ul>
        <li>Fortalecimento da autoestima e confiança</li>
        <li>Desenvolvimento de habilidades de comunicação</li>
        <li>Postura profissional e ética no trabalho</li>
        <li>Trabalho em equipe e relacionamento interpessoal</li>
        <li>Planejamento de carreira e projeto de vida</li>
      </ul>

      <h2>Formatura: Celebrando Conquistas e Novos Começos</h2>
      <p>A cerimônia de formatura foi marcada por muita emoção, lágrimas de alegria e celebração. As formandas, vestidas com uniformes profissionais brancos, receberam seus certificados em um evento realizado no próprio Radisson Rio de Janeiro Barra, marcando simbolicamente sua entrada no mercado de trabalho da hotelaria.</p>

      <p>Familiares, amigos, educadores e representantes das instituições parceiras estiveram presentes para celebrar essa conquista tão significativa. Para muitas das formandas, esse foi o primeiro certificado profissional de suas vidas, representando uma transformação profunda em suas trajetórias.</p>

      <h2>Compromisso com a Inclusão Social</h2>
      <p>O projeto reafirma o compromisso das instituições envolvidas com a <strong>inclusão social e o desenvolvimento humano</strong>. Acreditamos que investir em pessoas é o caminho mais seguro para construir uma sociedade mais justa, com mais oportunidades para todos.</p>

      <p>A formação profissional não apenas qualifica para o mercado de trabalho, mas também promove a dignidade, a autonomia financeira e a transformação de vidas. Muitas das participantes são mulheres chefes de família, que agora têm a oportunidade de aumentar sua renda e oferecer melhores condições de vida para seus filhos.</p>

      <h2>O Início de Uma Nova Jornada</h2>
      <p>A formatura marca o encerramento de um ciclo de aprendizado, mas também <strong>o início de uma nova jornada</strong> profissional. Que cada formanda siga firme, com coragem e esperança, rumo a um futuro cheio de realizações!</p>

      <p>Muitas das formandas já estão sendo encaminhadas para oportunidades de trabalho em hotéis e estabelecimentos do setor hoteleiro no Rio de Janeiro, colocando em prática todo o conhecimento adquirido durante a formação.</p>

      <h2>Parabéns às Formandas!</h2>
      <p><strong>Parabéns a todas as formandas!</strong> Que este seja o primeiro de muitos passos rumo ao sucesso profissional e pessoal. Vocês provaram que, com dedicação, apoio e oportunidades, é possível transformar sonhos em realidade.</p>

      <p>A São Martinho, a GAVIME e o Radisson Rio de Janeiro Barra celebram cada conquista e continuam comprometidos em oferecer mais oportunidades de formação e inclusão profissional para pessoas em situação de vulnerabilidade no Rio de Janeiro.</p>

      <div class="bg-primary/5 p-6 rounded-lg mt-8">
        <h3 class="text-xl font-bold mb-3">Sua Empresa Pode Ser Parceira</h3>
        <p class="mb-4">Empresas do setor hoteleiro e outros segmentos podem fazer a diferença oferecendo oportunidades de formação e trabalho através de parcerias com a São Martinho.</p>
        <ul class="space-y-2 mb-4">
          <li>✓ Cursos de capacitação profissional customizados</li>
          <li>✓ Preparação de mão de obra qualificada para sua empresa</li>
          <li>✓ Impacto social mensurável</li>
          <li>✓ Fortalecimento da responsabilidade social empresarial</li>
        </ul>
        <p><a href="/empresa-parceira" class="text-primary hover:underline font-semibold">Conheça nosso programa de parcerias corporativas</a></p>
      </div>
    `,
  },
  "papo-responsa-jovens-aprendizes-2024": {
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
    content: `
      <p>Na última semana, os <strong>jovens aprendizes da São Martinho</strong> participaram de uma roda de conversa inspiradora e transformadora com policiais civis do projeto <strong>"Papo de Responsa"</strong>, uma iniciativa oficial da <strong>Polícia Civil do Estado do Rio de Janeiro</strong> que promove o diálogo aberto e direto entre agentes de segurança pública e adolescentes.</p>

      <h2>Um Encontro de Diálogo e Transformação</h2>
      <p>O encontro, realizado na sede da instituição na Lapa, Rio de Janeiro, foi um convite à reflexão sobre <strong>escolhas, cidadania, respeito mútuo e convivência em sociedade</strong>. Sem formalidades, os policiais compartilharam suas trajetórias de vida, experiências nas comunidades e escutaram com atenção as perguntas, preocupações e histórias dos jovens.</p>

      <img src="/blog-papo-responsa-policiais.jpg" alt="Policiais civis e equipe da São Martinho" class="w-full rounded-lg my-6" />

      <h2>O Que é o Projeto "Papo de Responsa"?</h2>
      <p>O <strong>"Papo de Responsa"</strong> é mais do que uma palestra: é um <strong>espaço de escuta, troca e construção coletiva</strong>. O projeto é uma iniciativa oficial da Polícia Civil do Estado do Rio de Janeiro que busca aproximar agentes de segurança pública de jovens e adolescentes, promovendo o diálogo franco e humanizado sobre temas fundamentais para a formação cidadã.</p>

      <p>A proposta rompe com estereótipos e promove uma nova relação entre polícia e juventude, baseada no respeito mútuo, na confiança e na compreensão das realidades sociais enfrentadas por ambos os lados.</p>

      <h2>Temas Abordados na Roda de Conversa</h2>
      <p>Os policiais civis abordaram temas essenciais para a formação cidadã dos jovens aprendizes, sempre com uma <strong>linguagem acessível e afetuosa</strong>, que despertou o interesse e a participação ativa dos presentes:</p>
      
      <ul>
        <li><strong>Prevenção à violência</strong> - Como fazer escolhas que protegem e constroem futuro</li>
        <li><strong>Combate ao racismo</strong> - Reflexões sobre igualdade racial e respeito às diferenças</li>
        <li><strong>Protagonismo juvenil</strong> - O poder dos jovens em transformar suas realidades</li>
        <li><strong>Justiça e direitos</strong> - Compreensão sobre o funcionamento do sistema de justiça</li>
        <li><strong>Empatia e respeito mútuo</strong> - Construindo pontes entre polícia e comunidade</li>
        <li><strong>Escolhas e consequências</strong> - Reflexões sobre responsabilidade pessoal</li>
        <li><strong>Convivência em sociedade</strong> - Valores de cidadania e respeito coletivo</li>
      </ul>

      <img src="/blog-papo-responsa-jovens.jpg" alt="Jovens aprendizes e equipe da São Martinho" class="w-full rounded-lg my-6" />

      <h2>Quebrando Barreiras e Construindo Pontes</h2>
      <p>Para muitos adolescentes presentes, foi a <strong>primeira vez em que puderam conversar com um agente da lei fora de um contexto de medo ou repressão</strong>. A ação faz parte da proposta educativa da São Martinho, que acredita na formação cidadã e no diálogo como caminhos de transformação social.</p>

      <p>Os jovens puderam fazer perguntas, expressar suas dúvidas, compartilhar suas experiências e ouvir histórias reais de policiais que também enfrentam desafios e trabalham diariamente para construir uma sociedade mais justa e segura.</p>

      <blockquote class="border-l-4 border-primary pl-4 italic my-6 text-lg">
        "O mais importante aqui é saber que podemos construir pontes. A gente aprende muito com cada história que escuta, e os jovens precisam saber que eles têm poder de escolha e voz ativa"
      </blockquote>

      <h2>Educação Cidadã e Formação Integral</h2>
      <p>A participação dos jovens aprendizes no projeto "Papo de Responsa" está alinhada com a proposta de <strong>formação integral</strong> da São Martinho, que vai além da capacitação técnica e profissional. Acreditamos que a educação cidadã é fundamental para que nossos jovens se tornem profissionais éticos, cidadãos conscientes e agentes de transformação em suas comunidades.</p>

      <p>O Programa de Aprendizagem Profissional da São Martinho prepara jovens não apenas para o mercado de trabalho, mas para a vida em sociedade, promovendo valores como:</p>
      <ul>
        <li>Respeito à diversidade e aos direitos humanos</li>
        <li>Responsabilidade social e cidadania ativa</li>
        <li>Ética profissional e pessoal</li>
        <li>Capacidade crítica e reflexiva</li>
        <li>Empatia e solidariedade</li>
      </ul>

      <img src="/blog-papo-responsa-grupo.jpg" alt="Foto coletiva com todos os participantes do evento" class="w-full rounded-lg my-6" />

      <h2>Participação Ativa e Engajamento</h2>
      <p>O encontro foi marcado pela <strong>participação ativa e engajada dos jovens</strong>, que fizeram perguntas, compartilharam suas percepções e demonstraram interesse genuíno pelos temas abordados. A dinâmica horizontal da roda de conversa, sem palco ou distanciamento, permitiu que o diálogo fluísse de forma natural e autêntica.</p>

      <p>Muitos jovens relataram que o encontro mudou sua percepção sobre a polícia e sobre suas próprias possibilidades de futuro, compreendendo que suas escolhas têm poder e que existem pessoas e instituições dispostas a apoiá-los.</p>

      <h2>Gratidão à Polícia Civil do Rio de Janeiro</h2>
      <p>A <strong>São Martinho agradece à equipe do "Papo de Responsa"</strong> e à Polícia Civil do Estado do Rio de Janeiro pela parceria e pelo compromisso em construir uma relação mais próxima e humanizada com a juventude das comunidades vulneráveis.</p>

      <p>Iniciativas como essa são fundamentais para desconstruir preconceitos, romper barreiras e construir uma cultura de paz baseada no diálogo, no respeito mútuo e na compreensão das realidades sociais complexas que marcam nossa cidade.</p>

      <h2>Compromisso com a Transformação Social</h2>
      <p>A São Martinho reafirma seu compromisso com <strong>ações educativas que promovam dignidade, respeito e futuro</strong> para nossos jovens. Acreditamos que a educação cidadã, aliada à formação profissional e ao desenvolvimento de habilidades socioemocionais, é o caminho mais efetivo para romper ciclos de vulnerabilidade e construir trajetórias de sucesso.</p>

      <p>Seguiremos promovendo parcerias e ações que ampliem o repertório cultural, social e cidadão dos nossos jovens aprendizes, preparando-os não apenas para serem bons profissionais, mas para serem cidadãos conscientes, éticos e transformadores.</p>

      <div class="bg-primary/5 p-6 rounded-lg mt-8">
        <h3 class="text-xl font-bold mb-3">Programa Jovem Aprendiz</h3>
        <p class="mb-4">O Programa de Aprendizagem Profissional da São Martinho prepara jovens de 14 a 24 anos para o mercado de trabalho com formação técnica e cidadã.</p>
        <ul class="space-y-2 mb-4">
          <li>✓ Formação técnica e profissional qualificada</li>
          <li>✓ Desenvolvimento de habilidades socioemocionais</li>
          <li>✓ Educação cidadã e formação integral</li>
          <li>✓ Parcerias com empresas para inserção no mercado</li>
        </ul>
        <p><a href="/projetos" class="text-primary hover:underline font-semibold">Conheça nossos programas</a></p>
      </div>
    `,
  },
  "candelaria-memoria-32-anos-2025": {
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
    content: `
      <p>Na manhã desta quinta-feira, <strong>23 de julho</strong>, a <strong>Associação São Martinho</strong> esteve presente na homenagem que marcou os <strong>32 anos da Chacina da Candelária</strong>, no Centro do Rio de Janeiro. A atividade, realizada em frente à <strong>Igreja da Candelária</strong>, reuniu diversas organizações sociais, movimentos populares, autoridades públicas, familiares das vítimas e jovens para manter viva a memória e renovar o clamor por justiça.</p>

      <h2>A Chacina da Candelária: Um Crime Que Não Pode Ser Esquecido</h2>
      <p>Em <strong>23 de julho de 1993</strong>, oito jovens em situação de rua foram assassinados enquanto dormiam nas imediações da Igreja da Candelária. O crime, cometido por policiais militares, chocou o país e o mundo, revelando a brutalidade da violência contra a juventude negra e periférica.</p>

      <p>As vítimas eram crianças e adolescentes que buscavam abrigo na região central do Rio de Janeiro. Seus nomes e histórias foram silenciados pela violência do Estado, mas permanecem vivos na memória coletiva como símbolo de luta pelos direitos das crianças e adolescentes e pelo fim da violência contra os mais vulneráveis.</p>

      <h2>Memória, Justiça e Esperança</h2>
      <p>A data se tornou um <strong>símbolo de luta pelos direitos das crianças e adolescentes</strong> e pelo fim da violência do Estado contra os mais vulneráveis. A cada ano, organizações sociais, movimentos populares, familiares e ativistas se reúnem para honrar a memória das vítimas e denunciar a impunidade que ainda persiste.</p>

      <p>Durante o ato realizado em 2025, foram realizadas <strong>intervenções culturais, rodas de conversa, manifestações de fé e momentos de silêncio</strong> em memória dos jovens assassinados. Jovens e adolescentes atendidos pela São Martinho participaram ativamente, levando cartazes, bandeiras e mensagens de paz e justiça.</p>

      <h2>São Martinho Reafirma Compromisso com a Justiça Social</h2>
      <p>A <strong>São Martinho</strong>, que há décadas atua na proteção e promoção dos direitos de crianças e adolescentes em situação de vulnerabilidade, participou reafirmando seu compromisso com a construção de uma sociedade mais justa, onde <strong>nenhuma vida seja descartável</strong>.</p>

      <blockquote class="border-l-4 border-primary pl-4 italic my-6 text-lg">
        "Preservar a memória da Candelária é um dever coletivo. É lembrar que esses jovens tinham sonhos, histórias e vidas que foram interrompidas brutalmente. Seguimos lutando para que outras vidas não sejam apagadas pela violência."
      </blockquote>

      <p>A instituição trabalha diariamente para garantir que crianças e adolescentes tenham acesso a direitos fundamentais como educação, proteção, alimentação, profissionalização e dignidade. A presença no memorial é uma forma de honrar a memória das vítimas e reforçar o compromisso com a defesa intransigente dos direitos humanos.</p>

      <h2>Violência de Estado e a Luta por Justiça</h2>
      <p>A Chacina da Candelária expôs a face mais cruel da <strong>violência institucional contra crianças e adolescentes em situação de rua</strong>, em sua maioria negros e periféricos. Mais de três décadas depois, o Brasil ainda enfrenta desafios estruturais relacionados à violência policial, ao racismo e à criminalização da pobreza.</p>

      <p>O memorial anual é um ato de resistência e denúncia contra a impunidade e a continuidade das violações de direitos humanos. Organizações da sociedade civil, incluindo a São Martinho, seguem pressionando por:</p>
      <ul>
        <li>Responsabilização dos agentes da violência de Estado</li>
        <li>Políticas públicas efetivas de proteção à infância e juventude</li>
        <li>Fim da criminalização de crianças e adolescentes em situação de rua</li>
        <li>Combate ao racismo estrutural e à violência policial</li>
        <li>Investimento em educação, saúde e assistência social</li>
      </ul>

      <h2>Juventude Presente: Transformando Dor em Luta</h2>
      <p>A participação de jovens e adolescentes no memorial é um dos aspectos mais significativos do evento. Muitos deles são atendidos por organizações como a São Martinho e compreendem a importância de manter viva a memória das vítimas.</p>

      <p>Os jovens levaram cartazes com mensagens como "Candelária Nunca Mais", "Vidas Negras Importam" e "Nenhuma Vida é Descartável". Suas vozes ecoaram nas ruas do Centro do Rio de Janeiro, reafirmando que a luta por justiça social continua viva nas novas gerações.</p>

      <h2>Presença da São Martinho: Esperança e Resistência</h2>
      <p>A presença da São Martinho nessa homenagem é também <strong>um gesto de esperança e resistência</strong>: seguimos acreditando que é possível transformar realidades com afeto, políticas públicas e justiça social.</p>

      <p>A instituição continuará participando de ações de memória, justiça e defesa dos direitos humanos, reforçando seu compromisso histórico com as causas sociais e com a construção de uma sociedade onde todas as vidas sejam valorizadas e protegidas.</p>

      <h2>O Papel da Sociedade Civil</h2>
      <p>O memorial da Chacina da Candelária é organizado por uma articulação ampla de organizações sociais, movimentos de direitos humanos, coletivos culturais e entidades de defesa da infância e juventude. Essa mobilização coletiva demonstra a força da sociedade civil na preservação da memória histórica e na luta por justiça.</p>

      <p>Participar desses atos é uma forma de resistir ao esquecimento, denunciar a impunidade e pressionar o Estado por mudanças estruturais que garantam a proteção integral de crianças e adolescentes.</p>

      <h2>Seguimos na Luta</h2>
      <p>A <strong>São Martinho</strong> reafirma seu compromisso com a memória das vítimas da Chacina da Candelária e com a luta por uma sociedade onde nenhuma criança ou adolescente seja vítima da violência, do abandono ou da indiferença.</p>

      <p>Seguiremos trabalhando incansavelmente para oferecer proteção, educação, oportunidades e dignidade para todas as crianças e jovens atendidos por nossos programas. A memória das vítimas da Candelária nos inspira e nos move a continuar lutando por justiça social e direitos humanos.</p>

      <div class="bg-primary/5 p-6 rounded-lg mt-8">
        <h3 class="text-xl font-bold mb-3">Defesa de Direitos e Justiça Social</h3>
        <p class="mb-4">A São Martinho atua há mais de 40 anos na defesa intransigente dos direitos de crianças, adolescentes e jovens em situação de vulnerabilidade.</p>
        <ul class="space-y-2 mb-4">
          <li>✓ Proteção integral de crianças e adolescentes</li>
          <li>✓ Combate à violência e ao abandono</li>
          <li>✓ Promoção de direitos humanos e cidadania</li>
          <li>✓ Educação, profissionalização e desenvolvimento integral</li>
        </ul>
        <p><a href="/sobre" class="text-primary hover:underline font-semibold">Conheça nossa história e missão</a></p>
      </div>
    `,
  },
  "petrobras-bio-visita-2024": {
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
    content: `
      <p>No dia <strong>28 de outubro</strong>, a <strong>Associação São Martinho</strong> recebeu a visita das representantes da <strong>Petrobras Bio</strong> em um encontro marcado por diálogo, cooperação e compromisso com o futuro dos jovens atendidos pela instituição.</p>

      <h2>Conhecendo a São Martinho de Perto</h2>
      <p>A visita teve como objetivo conhecer de perto o espaço físico do Centro Socioeducativo da São Martinho, localizado na Lapa, Rio de Janeiro, e entender melhor as ações desenvolvidas pelo Programa de Aprendizagem Profissional, que prepara adolescentes e jovens em situação de vulnerabilidade social para o mercado de trabalho.</p>

      <p>Durante o encontro, as representantes da Petrobras Bio tiveram a oportunidade de conversar com educadores, coordenadores e jovens aprendizes, conhecendo de perto os desafios e conquistas do programa de profissionalização que transforma vidas através da educação e do trabalho.</p>

      <div class="flex justify-center my-8">
        <img src="/placeholder.svg?height=120&width=300" alt="Petrobras Bio" class="h-24 object-contain" />
      </div>

      <h2>Fortalecendo a Parceria Institucional</h2>
      <p>A visita também teve como foco o fortalecimento da parceria entre as instituições. Durante o encontro, foram discutidas propostas concretas para a realização de <strong>palestras, rodas de conversa e outras atividades educativas</strong> voltadas aos jovens atendidos pela São Martinho.</p>

      <p>Essas iniciativas têm como objetivo ampliar as oportunidades de formação e desenvolvimento pessoal dos jovens, oferecendo-lhes acesso a conhecimentos sobre sustentabilidade, inovação, mercado de trabalho e desenvolvimento de carreira — temas fundamentais para sua inserção profissional qualificada.</p>

      <h2>Compromisso com o Futuro da Juventude</h2>
      <p>A São Martinho celebra mais esse passo importante na construção de parcerias estratégicas que contribuem para a missão institucional de promover a proteção integral e o desenvolvimento de crianças, adolescentes e jovens em situação de vulnerabilidade social no Rio de Janeiro.</p>

      <p>A parceria com a Petrobras Bio reafirma o compromisso de ambas as instituições em construir, juntas, um futuro com mais <strong>conhecimento, oportunidades e esperança</strong> para nossa juventude.</p>

      <h2>Sobre o Programa de Aprendizagem Profissional</h2>
      <p>O Programa de Aprendizagem Profissional da São Martinho prepara adolescentes e jovens de 14 a 24 anos para o mercado de trabalho, oferecendo formação técnica e desenvolvimento de competências socioemocionais. Através de parcerias com empresas comprometidas com a responsabilidade social, os jovens têm a oportunidade de vivenciar experiências profissionais reais e construir uma carreira sólida.</p>

      <div class="bg-primary/5 p-6 rounded-lg mt-8">
        <h3 class="text-xl font-bold mb-3">Sua Empresa Pode Ser Parceira</h3>
        <p class="mb-4">Empresas comprometidas com responsabilidade social podem fazer a diferença contratando jovens aprendizes através da São Martinho.</p>
        <ul class="space-y-2 mb-4">
          <li>✓ Jovens pré-qualificados e acompanhados pedagogicamente</li>
          <li>✓ Cumprimento da Lei da Aprendizagem</li>
          <li>✓ Impacto social mensurável</li>
          <li>✓ Equipe especializada em apoio às empresas parceiras</li>
        </ul>
        <p><a href="/empresa-parceira" class="text-primary hover:underline font-semibold">Conheça nosso programa de parcerias corporativas</a></p>
      </div>
    `,
  },
  "festa-natal-2024": {
    id: "festa-natal-2024",
    title: "Festa de Natal da São Martinho: um dia de alegria, partilha e esperança",
    excerpt:
      "A São Martinho está em clima de Natal — e o sorriso das nossas crianças iluminou cada cantinho dessa festa!",
    category: "Novidades",
    date: "12/12/2024",
    author: "Sao Martinho",
    image: "/blog-festa-natal-criancas-alegria.jpg",
    location: "Centro Socioeducativo - Lapa, Rio de Janeiro",
    keywords:
      "festa de natal são martinho, ação social rio de janeiro, crianças lapa rj, voluntariado rio de janeiro, doações natal",
    content: `
      <p>A São Martinho está em clima de Natal — e o sorriso das nossas crianças iluminou cada cantinho dessa festa! Neste ano, a festa reuniu nossos beneficiários para viver um dia diferente, especial e repleto de diversão. Teve música, brincadeiras, presentes, lanche caprichado e muitos abraços apertados que aqueceram o coração.</p>

      <h2>Um Dia Inesquecível de Alegria e Diversão</h2>
      <p>Nossas crianças e adolescentes aproveitaram cada momento — correram, brincaram, sorriram e viveram um Natal mais feliz, daqueles que marcam a memória e renovam a esperança. A festa aconteceu no Centro Socioeducativo da São Martinho, localizado na Lapa, Rio de Janeiro, e reuniu centenas de beneficiários dos nossos programas de educação, cultura e apoio familiar.</p>

      <h2>Solidariedade que Transforma Vidas</h2>
      <p>E tudo isso só foi possível graças às generosas doações de quem acredita na missão da São Martinho e na força da solidariedade. Cada lanche servido, cada presente entregue e cada olhar emocionado é fruto do amor de pessoas que se unem para transformar vidas.</p>

      <p>Há mais de 30 anos, a Associação Beneficente São Martinho trabalha no Rio de Janeiro promovendo o desenvolvimento integral de crianças, adolescentes e jovens em situação de vulnerabilidade social. A Festa de Natal é uma das ações especiais que realizamos para fortalecer vínculos comunitários e levar alegria às famílias atendidas.</p>

      <h2>Gratidão aos Colaboradores e Voluntários</h2>
      <p>Também deixamos um agradecimento muito especial aos colaboradores e funcionários da São Martinho, que estiveram ao nosso lado, ajudando em cada detalhe, com dedicação, carinho e compromisso. Sem vocês, nada disso seria possível.</p>

      <p>Porque quando caminhamos juntos, o Natal vai muito além da data. Ele se torna presença, cuidado e um gesto concreto de esperança.</p>

      <h2>Muito Obrigado!</h2>
      <p>A todos que contribuíram e tornaram essa festa possível: <strong>muito obrigado!</strong></p>
      
      <p>Vocês fizeram o Natal brilhar mais forte para nossas crianças.</p>

      <div class="bg-primary/5 p-6 rounded-lg mt-8">
        <h3 class="text-xl font-bold mb-3">Faça Parte Dessa Transformação</h3>
        <p class="mb-4">Você também pode fazer a diferença na vida de crianças e jovens do Rio de Janeiro. Conheça nossas formas de contribuição:</p>
        <ul class="space-y-2 mb-4">
          <li>✓ <strong>Doe:</strong> Sua contribuição fortalece nossos programas sociais</li>
          <li>✓ <strong>Seja Voluntário:</strong> Compartilhe seu tempo e talentos conosco</li>
          <li>✓ <strong>Empresa Parceira:</strong> Contrate jovens aprendizes através da São Martinho</li>
        </ul>
        <p><a href="/doacoes" class="text-primary hover:underline font-semibold">Clique aqui para doar</a> | <a href="/voluntario" class="text-primary hover:underline font-semibold">Seja voluntário</a> | <a href="/empresa-parceira" class="text-primary hover:underline font-semibold">Seja parceiro</a></p>
      </div>
    `,
  },
  "dia-de-doar-2024": {
    id: "dia-de-doar-2024",
    title: "Dia de Doar 2024 na São Martinho: Transformando Vidas no Rio de Janeiro",
    excerpt:
      "No Dia de Doar 2024, a São Martinho reforça seu compromisso com crianças, adolescentes e jovens em situação de vulnerabilidade social no Rio de Janeiro.",
    category: "Campanha de Doações",
    date: "03/12/2024",
    author: "Associação São Martinho",
    image: "/blog-dia-doar-coracao-amor.jpg",
    location: "Rio de Janeiro - Lapa e Vicente de Carvalho",
    keywords: "dia de doar, doação rio de janeiro, ong lapa, crianças vulnerabilidade social, transformação social rj",
    content: `
      <p>O <strong>Dia de Doar 2024</strong> é uma data especial que mobiliza pessoas, empresas e organizações em todo o mundo para a prática da generosidade. Na Associação Beneficente São Martinho, este dia representa muito mais do que uma campanha: é uma celebração de 41 anos de compromisso com a transformação de vidas no Rio de Janeiro.</p>

      <h2>Mais de 40 Anos Transformando Vidas</h2>
      <p>Desde 1983, a São Martinho atua nas comunidades da Lapa e Vicente de Carvalho, oferecendo educação integral, proteção social, arte, cultura, apoio familiar e profissionalização para crianças, adolescentes e jovens em situação de vulnerabilidade social. Atualmente, atendemos mais de 15 mil pessoas por ano através de cinco programas principais.</p>

      <h2>Cada Doação Transforma uma Vida</h2>
      <p>Quando você doa para a São Martinho, você não está apenas contribuindo financeiramente - está alimentando sonhos, sustentando programas socioeducativos de qualidade e rompendo ciclos de vulnerabilidade. Cada real doado é investido com transparência e responsabilidade em ações que geram impacto real e duradouro.</p>

      <h2>Como Sua Doação é Aplicada</h2>
      <ul>
        <li><strong>R$ 50:</strong> Fornece material escolar completo para uma criança por um mês</li>
        <li><strong>R$ 100:</strong> Custeia uma oficina de arte e cultura para 10 crianças</li>
        <li><strong>R$ 200:</strong> Apoia a alimentação saudável de 20 crianças por um dia</li>
        <li><strong>R$ 500:</strong> Financia capacitação profissional para um jovem aprendiz</li>
      </ul>

      <h2>Junte-se a Nós no Dia de Doar!</h2>
      <p>Neste Dia de Doar 2024, convidamos você a fazer parte dessa corrente de amor e solidariedade. Sua doação, seja qual for o valor, faz diferença na vida de milhares de crianças e jovens que sonham com um futuro melhor.</p>

      <p><strong>Doe agora e transforme vidas! Acesse nossa página de doações e contribua.</strong></p>
    `,
  },
  "aniversario-sao-martinho-2024": {
    id: "aniversario-sao-martinho-2024",
    title: "São Martinho celebra mais um ano de transformação!",
    excerpt:
      "No dia 11 de novembro, a Associação São Martinho celebrou com alegria e gratidão mais um ano de sua história.",
    category: "Novidades",
    date: "13/11/2024",
    author: "Sao Martinho",
    image: "/blog-aniversario-celebracao-equipe.jpg",
    location: "Centro Socioeducativo - Lapa, Rio de Janeiro, RJ",
    keywords:
      "aniversário são martinho, 41 anos, ong rio de janeiro, lapa, história institucional, assistência social rj",
    content: `
      <p>No dia 11 de novembro, a Associação São Martinho celebrou com alegria e gratidão mais um ano de sua história — uma trajetória construída com fé, solidariedade e dedicação à vida de milhares de crianças, adolescentes, jovens e famílias.</p>

      <h2>Uma Trajetória de Acolhida e Esperança</h2>
      <p>Há mais de quatro décadas, a São Martinho tem sido um espaço de acolhida e esperança, onde cada gesto, cada sorriso e cada aprendizado reafirmam o compromisso de transformar realidades por meio do amor e da educação. Nossa caminhada é feita de mãos que acolhem, corações que servem e olhares que acreditam na força da esperança.</p>

      <h2>Celebração de Gratidão</h2>
      <p>A celebração começou com a <strong>Missa de Aniversário</strong>, momento de profunda gratidão a Deus por todas as conquistas, desafios superados e vidas transformadas ao longo dessa jornada. Após a missa, a festa continuou com uma comemoração especial no salão paroquial, reunindo colaboradores, educadores, amigos, voluntários e beneficiários em um clima de alegria e comunhão.</p>

      <p>Foi um tempo para partilhar, celebrar e renovar os laços que unem a grande família São Martinho em sua missão de promover dignidade e oportunidades para quem mais precisa.</p>

      <h2>Gratidão a Todos que Fazem Parte Dessa História!</h2>
      <p>Agradecemos imensamente a todos os colaboradores, voluntários, doadores, parceiros e amigos que caminham conosco nessa missão de transformação. Cada um de vocês é parte essencial dessa história de amor e esperança.</p>

      <p>Que possamos continuar juntos, construindo um futuro melhor para nossas crianças, adolescentes, jovens e famílias no Rio de Janeiro!</p>

      <div class="bg-primary/5 p-6 rounded-lg mt-8">
        <h3 class="text-xl font-bold mb-3">Faça Parte Dessa História de Transformação</h3>
        <p class="mb-4">Você também pode contribuir com a missão da São Martinho:</p>
        <ul class="space-y-2 mb-4">
          <li>✓ <strong>Doe:</strong> Fortaleça nossos programas sociais</li>
          <li>✓ <strong>Seja Voluntário:</strong> Compartilhe seu tempo e talentos</li>
          <li>✓ <strong>Empresa Parceira:</strong> Contrate jovens aprendizes</li>
        </ul>
        <p><a href="/doacoes" class="text-primary hover:underline font-semibold">Clique aqui para doar</a> | <a href="/voluntario" class="text-primary hover:underline font-semibold">Seja voluntário</a> | <a href="/empresa-parceira" class="text-primary hover:underline font-semibold">Seja parceiro</a></p>
      </div>
    `,
  },
  "aprendizagem-investimento-futuro": {
    id: "aprendizagem-investimento-futuro",
    title: "Programa Jovem Aprendiz São Martinho: Capacitação Profissional no Rio de Janeiro",
    excerpt:
      "O Programa de Aprendizagem Profissional da São Martinho é referência no Rio de Janeiro. Conforme a Lei 10.097/2000, oferecemos formação técnica.",
    category: "Profissionalização",
    date: "13/11/2024",
    author: "Associação São Martinho",
    image: "/blog-aprendiz-jovem-trabalhando.jpg",
    location: "Programa Jovem Aprendiz - Lapa, Rio de Janeiro",
    keywords:
      "jovem aprendiz rio de janeiro, programa de aprendizagem rj, primeiro emprego, capacitação profissional, lei do aprendiz",
    content: `
      <p>A São Martinho é orgulhosamente uma das instituições referência no Rio de Janeiro em programas de aprendizagem profissional. Há mais de 15 anos, oferecemos capacitação técnica e inserção no mercado de trabalho para jovens de 14 a 24 anos em situação de vulnerabilidade social, cumprindo rigorosamente a <strong>Lei 10.097/2000 (Lei do Aprendiz)</strong>.</p>

      <h2>Aprendizagem Não é Custo, é Investimento</h2>
      <p>Contratar um jovem aprendiz não é apenas cumprir uma obrigação legal - é investir no futuro do Brasil. As empresas que nos escolhem como parceiras não apenas formam profissionais qualificados, mas também transformam vidas, oferecem oportunidades reais e contribuem diretamente para a redução das desigualdades sociais.</p>

      <h2>Resultados que Provam o Impacto</h2>
      <ul>
        <li>Mais de <strong>3.600 jovens capacitados</strong> desde o início do programa</li>
        <li>Parcerias com mais de <strong>45 empresas</strong> de diversos setores</li>
        <li><strong>85% de efetivação</strong> após conclusão do programa</li>
        <li>Acompanhamento pedagógico e psicossocial durante todo o período</li>
        <li>Formação técnica alinhada às demandas do mercado de trabalho</li>
      </ul>

      <h2>O que Oferecemos às Empresas Parceiras</h2>
      <p>Como entidade qualificadora, a São Martinho oferece suporte completo para empresas que desejam contratar jovens aprendizes:</p>
      <ul>
        <li>Recrutamento e seleção de candidatos alinhados ao perfil da empresa</li>
        <li>Formação técnica e comportamental de qualidade</li>
        <li>Acompanhamento pedagógico e suporte psicossocial</li>
        <li>Gestão administrativa e documental do programa</li>
        <li>Relatórios periódicos de desempenho</li>
      </ul>

      <h2>Transformando Jovens em Profissionais</h2>
      <p>Nosso programa de aprendizagem vai além da formação técnica. Trabalhamos habilidades socioemocionais, ética profissional, comunicação, trabalho em equipe e protagonismo juvenil. Acreditamos que cada jovem tem potencial imenso, e nosso papel é ajudá-lo a descobrir e desenvolver esse potencial.</p>

      <h2>Seja uma Empresa Parceira!</h2>
      <p>Se sua empresa busca jovens talentos, comprometimento com a responsabilidade social e deseja fazer parte dessa transformação, entre em contato conosco. Juntos, provamos que aprendizagem profissional é, sim, investimento no futuro do Brasil!</p>
    `,
  },
  "consciencia-negra-2024": {
    id: "consciencia-negra-2024",
    title: "Mês da Consciência Negra 2024: Ancestralidade e Pertencimento na São Martinho",
    excerpt:
      "Em novembro de 2024, o Mês da Consciência Negra foi celebrado com atividades especiais nas unidades da São Martinho no Rio de Janeiro.",
    category: "Cultura e Diversidade",
    date: "20/11/2024",
    author: "Associação São Martinho",
    image: "/blog-consciencia-negra-jovens.jpg",
    location: "Unidades São Martinho - Rio de Janeiro",
    keywords:
      "consciência negra, cultura afro-brasileira, diversidade rio de janeiro, educação antirracista, igualdade racial",
    content: `
      <p>O <strong>Mês da Consciência Negra</strong> é um período de profunda reflexão, celebração e reconhecimento da importância da cultura afro-brasileira na formação do nosso país. Na Associação Beneficente São Martinho, comemoramos este mês com uma programação especial que envolveu todas as nossas unidades no Rio de Janeiro, valorizando a ancestralidade, identidade e pertencimento das crianças e jovens negros atendidos.</p>

      <h2>Atividades e Celebrações</h2>
      <p>Durante todo o mês de novembro de 2024, realizamos diversas atividades nas unidades da Lapa e Vicente de Carvalho:</p>
      <ul>
        <li><strong>Rodas de conversa</strong> sobre racismo, representatividade e identidade racial</li>
        <li><strong>Oficinas de cultura afro-brasileira:</strong> capoeira, dança afro, percussão e culinária</li>
        <li><strong>Exposição de arte</strong> com obras criadas pelas crianças e adolescentes sobre personalidades negras inspiradoras</li>
        <li><strong>Contação de histórias</strong> com narrativas de autores negros e contos africanos</li>
        <li><strong>Apresentações culturais</strong> com música, dança e poesia</li>
      </ul>

      <h2>Educação Antirracista no Cotidiano</h2>
      <p>Para a São Martinho, a educação antirracista não se limita ao mês de novembro - é um compromisso diário. Trabalhamos durante todo o ano para promover um ambiente de respeito, igualdade e valorização da diversidade. Nossos educadores são capacitados para abordar temas relacionados a raça, identidade e pertencimento de forma sensível e pedagógica.</p>

      <h2>Vozes das Crianças e Jovens</h2>
      <p>Durante as atividades, crianças e adolescentes compartilharam suas percepções sobre identidade racial, pertencimento e sonhos. Muitos relataram que, pela primeira vez, sentiram orgulho de sua ancestralidade e compreenderam a importância de valorizar suas raízes africanas.</p>

      <h2>Compromisso com a Igualdade Racial</h2>
      <p>A São Martinho reafirma seu compromisso com a luta contra o racismo e a construção de uma sociedade verdadeiramente justa e igualitária. Acreditamos que a transformação social passa, necessariamente, pela valorização da cultura negra e pelo reconhecimento da contribuição histórica do povo negro na construção do Brasil.</p>
    `,
  },
  "princesa-diana-visita-34-anos": {
    id: "princesa-diana-visita-34-anos",
    title: "34 Anos da Visita Histórica da Princesa Diana à São Martinho no Rio de Janeiro",
    excerpt:
      "Relembramos com orgulho a visita histórica da Princesa Diana à Associação São Martinho em 1991, na Lapa, Rio de Janeiro.",
    category: "História Institucional",
    date: "03/11/2024",
    author: "Associação São Martinho",
    image: "/blog-princesa-diana-visita-historica.jpg",
    location: "Centro Socioeducativo - Lapa, Rio de Janeiro",
    keywords: "princesa diana rio de janeiro, história são martinho, visita real brasil, lapa rj, ong histórica",
    content: `
      <p>No dia 3 de novembro de 1991, a Associação Beneficente São Martinho recebeu uma visita que entraria para sempre na história da instituição: a <strong>Princesa Diana de Gales</strong> esteve em nossa sede na Lapa, Rio de Janeiro, durante sua viagem oficial ao Brasil. Este momento marcante completou 34 anos em 2024 e continua inspirando nosso trabalho até hoje.</p>

      <h2>Um Momento Histórico e Humanitário</h2>
      <p>A princesa Diana, conhecida mundialmente por seu trabalho humanitário e sua sensibilidade com causas sociais, escolheu visitar a São Martinho durante sua estadia no Rio de Janeiro. Na ocasião, ela interagiu com crianças em situação de vulnerabilidade social atendidas pela instituição, demonstrando afeto, carinho e interesse genuíno pelas histórias de cada uma.</p>

      <h2>O Legado da Visita</h2>
      <p>A visita da Princesa Diana trouxe visibilidade internacional para o trabalho da São Martinho e reforçou a importância da proteção social de crianças e adolescentes. Sua presença humanitária marcou profundamente todos que participaram daquele dia inesquecível e continua inspirando nossos valores institucionais:</p>
      <ul>
        <li><strong>Compaixão:</strong> Tratar cada criança com amor e dignidade</li>
        <li><strong>Respeito:</strong> Valorizar a história e a individualidade de cada pessoa atendida</li>
        <li><strong>Compromisso social:</strong> Trabalhar incansavelmente pela transformação de vidas</li>
        <li><strong>Transparência:</strong> Atuar com ética e responsabilidade em todas as ações</li>
      </ul>

      <h2>41 Anos de História</h2>
      <p>Hoje, 41 anos após sua fundação e 34 anos após a visita histórica da Princesa Diana, a São Martinho segue transformando vidas no Rio de Janeiro. Atendemos mais de 15 mil pessoas por ano, mantendo viva a missão de oferecer oportunidades reais de desenvolvimento para crianças, adolescentes e jovens em situação de vulnerabilidade.</p>

      <h2>Uma Inspiração Eterna</h2>
      <p>A memória da Princesa Diana continua viva em nossa instituição. Assim como ela dedicou sua vida a causas humanitárias, seguimos firmes em nosso propósito de construir uma sociedade mais justa, respeitosa, igualitária e acolhedora. Cada criança atendida pela São Martinho carrega um pouco desse legado de amor e compaixão.</p>
    `,
  },
  "carlo-acutis-reliquias-educagente": {
    id: "carlo-acutis-reliquias-educagente",
    title: "Relíquias de São Carlo Acutis no Núcleo Educagente - Vicente de Carvalho, RJ",
    excerpt:
      "O Núcleo Comunitário Educagente, em Vicente de Carvalho, Rio de Janeiro, recebeu as relíquias de São Carlo Acutis, o jovem santo padroeiro da internet.",
    category: "Espiritualidade",
    date: "31/10/2024",
    author: "Associação São Martinho",
    image: "/blog-carlo-acutis-reliquias-criancas.jpg",
    location: "Núcleo Educagente - Vicente de Carvalho, Rio de Janeiro",
    keywords: "carlo acutis rio de janeiro, educagente, vicente de carvalho rj, espiritualidade, santo jovem",
    content: `
      <p>O <strong>Núcleo Comunitário Educagente</strong>, localizado em Vicente de Carvalho, Zona Norte do Rio de Janeiro, viveu um momento emocionante e de profunda espiritualidade ao receber as relíquias de <strong>São Carlo Acutis</strong>, o jovem santo padroeiro da internet, beatificado em 2020 e canonizado em 2024.</p>

      <h2>Quem Foi Carlo Acutis?</h2>
      <p>Carlo Acutis nasceu em Londres em 1991 e faleceu prematuramente aos 15 anos, em 2006, vítima de leucemia. Durante sua curta vida, demonstrou profunda fé católica, amor aos mais necessitados e habilidade extraordinária com tecnologia. Ficou conhecido como o "influencer de Deus" por usar a internet para evangelizar e divulgar milagres eucarísticos ao redor do mundo.</p>

      <h2>A Visita das Relíquias ao Educagente</h2>
      <p>As relíquias de São Carlo Acutis percorreram diversas cidades brasileiras, e a São Martinho teve a honra de recebê-las em sua unidade de Vicente de Carvalho. Crianças, adolescentes, famílias e educadores participaram de momentos de oração, reflexão e celebração, conectando fé e esperança no cotidiano da comunidade.</p>

      <h2>Momentos de Fé e Esperança</h2>
      <p>Durante a visitação, foram realizadas:</p>
      <ul>
        <li><strong>Celebrações religiosas</strong> com momentos de oração e reflexão</li>
        <li><strong>Rodas de conversa</strong> sobre a vida e o exemplo de Carlo Acutis</li>
        <li><strong>Atividades educativas</strong> sobre uso consciente da tecnologia e valores cristãos</li>
        <li><strong>Momentos de adoração</strong> e veneração das relíquias</li>
      </ul>

      <h2>Desenvolvimento Integral: Corpo, Mente e Espírito</h2>
      <p>A São Martinho acredita no desenvolvimento integral das crianças e jovens atendidos. Isso significa cuidar não apenas da educação formal e da proteção social, mas também do aspecto espiritual. Momentos como a visita das relíquias de São Carlo Acutis fortalecem a fé, trazem esperança e conectam os jovens a valores fundamentais como amor ao próximo, solidariedade e respeito.</p>

      <h2>Inspiração para Jovens do Século XXI</h2>
      <p>Carlo Acutis é um exemplo inspirador para os jovens contemporâneos. Ele mostrou que é possível viver a fé de maneira autêntica na era digital, usar a tecnologia para o bem e fazer a diferença no mundo, independentemente da idade. Sua história ensina que pequenas ações de amor e bondade podem ter impacto transformador na vida de muitas pessoas.</p>

      <p>A São Martinho agradece a oportunidade de ter recebido as relíquias de São Carlo Acutis e reafirma seu compromisso com a formação integral de crianças, adolescentes e jovens, sempre valorizando corpo, mente e espírito.</p>
    `,
  },
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const post = blogPosts[resolvedParams.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <article className="pt-32 pb-20 lg:pt-40 lg:pb-32" itemScope itemType="https://schema.org/BlogPosting">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:underline mb-8 group">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Voltar para o blog
            </Link>

            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                <Tag className="w-3.5 h-3.5" />
                <span itemProp="articleSection">{post.category}</span>
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance leading-tight"
              itemProp="headline"
            >
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6 pb-6 border-b">
              <time className="flex items-center gap-2" itemProp="datePublished" dateTime={post.date}>
                <Calendar className="w-4 h-4" />
                {post.date}
              </time>
              <span
                className="flex items-center gap-2"
                itemProp="author"
                itemScope
                itemType="https://schema.org/Organization"
              >
                <User className="w-4 h-4" />
                <span itemProp="name">{post.author}</span>
              </span>
              {post.location && (
                <span className="flex items-center gap-2" itemProp="locationCreated">
                  <MapPin className="w-4 h-4" />
                  {post.location}
                </span>
              )}
            </div>

            {/* Featured Image */}
            <div className="relative h-96 lg:h-[500px] mb-10 rounded-lg overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={`${post.title} - Artigo do Instituto São Martinho sobre projetos sociais, atividades com crianças e desenvolvimento comunitário`}
                fill
                className="object-cover"
                priority
                itemProp="image"
              />
            </div>

            {/* Article Content */}
            <div
              className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-foreground prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground"
              itemProp="articleBody"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Call to Action */}
            <div className="mt-12 p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Faça Parte da Transformação</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                A São Martinho precisa do seu apoio para continuar transformando vidas no Rio de Janeiro. Seja através
                de doações, voluntariado ou parcerias corporativas, você pode fazer a diferença!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/doacoes">Fazer uma Doação</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/voluntario">Ser Voluntário</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/empresa-parceira">Seja Empresa Parceira</Link>
                </Button>
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-10 pt-8 border-t">
              <p className="text-sm text-muted-foreground text-center">
                Compartilhe este artigo e ajude a divulgar o trabalho da São Martinho no Rio de Janeiro
              </p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}
