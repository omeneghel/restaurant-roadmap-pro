import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import ContactForm from "@/components/ContactForm";
import Breadcrumb from "@/components/Breadcrumb";
import SEOHead from "@/components/SEOHead";
import { 
  TrendingUp, 
  Target, 
  Users, 
  DollarSign, 
  PieChart, 
  BarChart3, 
  FileText, 
  Search,
  Megaphone,
  Settings,
  Shield,
  CheckCircle2
} from "lucide-react";

const BusinessPlanFarmacias = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Plano de Negócios para Farmácias | ECONOMICA"
        description="Entenda como o plano de negócios para farmácias estrutura decisões de mercado, operação e finanças com base em análise e método."
        canonical="https://economicajr.com.br/plano-de-negocios/farmacias"
      />
      
      <Header />
      <Hero 
        subtitle="Metodologia de <strong>planos de negócios para farmácias</strong> pela ECONOMICA — estratégia, viabilidade e planejamento para iniciar ou escalar seu negócio com segurança."
        title="Plano de Negócios para Farmácias: como fazer um para o seu negócio"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb 
          items={[
            { label: "Home", href: "/" },
            { label: "Plano de Negócios", href: "/plano-de-negocios" },
            { label: "Farmácias" }
          ]}
        />
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Content Column */}
          <div className="lg:col-span-2 space-y-0">
            {/* Section: Por que montar um plano de negócios para farmácias? */}
            <Section id="por-que-montar" title="Por que montar um plano de negócios para farmácias?">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `A elaboração de planos de negócios para farmácias organiza hipóteses de mercado, operação e finanças para avaliar viabilidade e orientar decisões de investimento. Com base em pesquisa, o documento reduz incertezas ao clarificar público, canais, mix e projeções, permitindo decisões mais consistentes e estratégias alinhadas ao objetivo do negócio. Use o plano para comparar cenários e priorizar ações.` }} />
              
              <div className="space-y-6 mt-8">
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Financiamento e crédito</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Um plano de negócios para farmácias sistematiza premissas e projeções que instituições exigem para avaliar risco. Ao explicitar demanda, capacidade operacional e fluxo de caixa, o documento demonstra coerência entre metas e números, facilitando diálogos com potenciais fontes de capital e demonstrando <strong>transparência</strong> nas hipóteses financeiras.` }} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Entrada de sócios</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O plano organiza visão, metas e métricas, tornando explícitos critérios de governança e cenários para tomada de decisão. Isso facilita negociações com sócios e investidores ao apresentar indicadores, fontes de receita e premissas de crescimento, alinhando expectativas e reduzindo assimetrias de informação entre os envolvidos na operação da farmácia.` }} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Viabilidade</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `A avaliação de viabilidade conecta premissas de demanda, custos e precificação com ponto de equilíbrio e margens operacionais. O plano testa hipóteses em cenários diversos, identificando alavancas de resultado e riscos críticos, permitindo priorizar ações e ajustar o modelo de negócio antes de investimentos significativos na farmácia.` }} />
                </div>
              </div>
            </Section>

            {/* Section: O que é importante na hora de construir um plano de negócios para farmácias? */}
            <Section id="o-que-e-importante" title="O que é importante na hora de construir um plano de negócios para farmácias?">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `Um bom plano integra mercado, marketing, operação e finanças, conectando esses elementos à estratégia. A síntese facilita decisões táticas e priorização, e destaca ações de curto e médio prazo para alcançar objetivos financeiros e de atendimento com <strong>clareza</strong>.` }} />

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Pesquisa e Análise de Mercado</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Análise macroeconômica</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O plano deve contextualizar tendências macro que influenciam consumo em farmácias, como variação do poder de compra e comportamento de gasto. Essas variáveis informam premissas de demanda e cenários, permitindo ajustar projeções e definir prioridades estratégicas diante de mudanças econômicas.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Setor e concorrência</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Mapear concorrentes e posicionamentos revela lacunas de oferta e diferenciais competitivos. O plano usa benchmarks para definir preço, mix de produtos e serviços, e orientar ofertas que reduzam a exposição competitiva e aproveitem oportunidades locais no mercado de farmácias.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Público-alvo</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Identificar perfis, motivações e ticket médio do público é essencial para definir mix, comunicação e canais. O mapeamento da jornada do cliente orienta decisões sobre assortimento, serviços e políticas de preço com impacto direto em aquisição, retenção e receita recorrente.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Região</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `A análise territorial considera fluxo local, acessibilidade e concorrência próxima para estimar potencial de demanda. No plano, esses dados orientam projeções de volume, sazonalidade e mix, e influenciam decisões sobre modelo de loja, horários e presença em canais digitais.` }} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Plano de Marketing</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">7 Ps</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Ao adaptar os 7 Ps (Produto, Preço, Praça, Promoção, Pessoas, Processos e Evidências) ao contexto de uma farmácia, o plano de marketing define posicionamento, oferta e experiência. Essa visão integrada alinha comunicação e operação com metas comerciais e de margem.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Canais</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O plano detalha canais de venda e aquisição: loja física, vendas por telefone, canais digitais e parcerias locais. Para farmácias é fundamental equilibrar atendimento presencial com opções remotas, priorizando canais conforme custo de aquisição e potencial de retenção.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Fidelização</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Programas de relacionamento e rotinas de atendimento aumentam recorrência e elevam LTV. O plano define ações de pós-venda, indicadores de satisfação e iniciativas de retenção, traduzindo metas de fidelização em fluxos e metas mensuráveis.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">KPIs</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O plano de marketing identifica métricas-chave como CAC (custo de aquisição de clientes), LTV (lifetime value), taxa de conversão, ROI e reputação. Esses KPIs orientam alocação de orçamento, priorização de canais e ciclos de otimização focados em rentabilidade e crescimento.` }} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Plano Operacional</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Layout e normas</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Planejar fluxo de atendimento, pontos de contato e padronização de serviços impacta eficiência e custo. O plano operacional define padrões de arranjo de loja, processos de atendimento e controles que asseguram qualidade, produtividade e experiência do cliente.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">5W2H</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O 5W2H organiza tarefas com o que, por que, quem, quando, onde, como e quanto (What, Why, Who, When, Where, How, How much). No plano ele traduz iniciativas em entregáveis, responsáveis e custos, aumentando previsibilidade operacional da farmácia.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Equipe</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Dimensionar equipe e funções conforme demanda e turnos é parte do plano. Descrições de cargo, responsabilidades e critérios de alocação ajudam a alinhar desempenho com metas de atendimento, vendas e conformidade interna, otimizando custos e qualidade do serviço.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Tecnologia</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O plano descreve sistemas necessários: gestão de estoque, faturamento, controle de preços e integrações com canais digitais. Avaliar requisitos tecnológicos na fase de planejamento evita gaps operacionais e facilita escalabilidade e controle de margem.` }} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Plano Financeiro</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Custos</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Mapear custos fixos e variáveis, além do CMV quando aplicável, é essencial para precificação e margem. O plano conecta estrutura de custos à estratégia de preços, permitindo simular impactos de mix e volume sobre rentabilidade.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Investimento</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O planejamento financeiro detalha itens de abertura, equipamentos e capital de giro, distribuindo valores em cenários e horizontes temporais. Essa visão permite avaliar prazos de retorno e necessidades de financiamento para abrir ou expandir uma farmácia.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Receitas</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Definir premissas de volume, ticket e sazonalidade e projetar receitas por canal e categoria ajuda a construir cenários plausíveis. O plano deve tornar essas premissas rastreáveis, com fontes e comparáveis que sustentem as projeções.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Indicadores</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Mapear breakeven, payback, margens e fluxo de caixa mostra como premissas afetam resultado. O plano transforma indicadores em alavancas de decisão, indicando quais variáveis agir para melhorar rentabilidade e reduzir riscos financeiros.` }} />
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            {/* Section: Plano estratégico */}
            <Section id="plano-estrategico" title="Plano estratégico">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `A síntese estratégica prioriza direcionadores e iniciativas que trarão maior impacto no curto e médio prazo. Um resumo claro facilita comunicação interna e garante que ações operacionais e financeiras sigam as mesmas prioridades definidas no plano de negócios para farmácias.` }} />
              
              <div className="space-y-6 mt-8">
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">SWOT</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `A matriz SWOT organiza forças, fraquezas, oportunidades e ameaças para guiar escolhas estratégicas. Em farmácias, essa análise identifica vantagens competitivas, pontos a melhorar e cenários externos que influenciam posicionamento e decisões de investimento.` }} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">BSC</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O Balanced Scorecard traduz a estratégia em metas por perspectiva (financeira, clientes, processos e aprendizado) com indicadores e prazos de revisão. Para farmácias, o BSC ajuda a monitorar execução e alinhar prioridades entre operação e metas comerciais.` }} />
                </div>
              </div>
            </Section>

            {/* Section: Análise de riscos */}
            <Section id="analise-de-riscos" title="Análise de riscos">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `A matriz de riscos (probabilidade x impacto) classifica eventos críticos e define ações de mitigação e responsabilidade. No contexto de planos de negócios para farmácias, essa análise destaca riscos operacionais e comerciais, orientando prioridades de ação com <strong>foco</strong> na redução de exposição.` }} />
            </Section>

            {/* Section: Por que contratar a ECONOMICA? */}
            <Section id="por-que-contratar" title="Por que contratar a ECONOMICA?">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `A ECONOMICA oferece método estruturado e clareza de escopo para tomada de decisão, entregando diagnósticos que conectam pesquisa, projeções e cenários. Nosso foco é fornecer subsídios analíticos para que gestores possam optar com segurança por investimentos e estratégias.` }} />
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `A ECONOMICA soma mais de 30 anos de atuação (desde 1992) em consultoria empresarial para empresas de variados portes e registra mais de 100 projetos concluídos. Essa trajetória confere experiência prática na elaboração de planos de negócios aplicáveis a farmácias.` }} />
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `Somos formados por alunos e ex-alunos do Instituto de Economia da UNICAMP e, quando adequado, contamos com a colaboração da comunidade acadêmica e de professores para fortalecer pesquisas e análises utilizadas no plano de negócios.` }} />
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `O serviço de <strong>Plano de Negócios</strong> é um dos pilares da ECONOMICA. Por isso estruturamos metodologias próprias que sintetizam análise de mercado, operação e finanças, entregando um documento que apoia decisões estratégicas em diversos nichos, inclusive farmácias.` }} />
            </Section>

            {/* Section: O que estará incluído no seu plano de negócios? */}
            <Section id="o-que-inclui" title="O que estará incluído no seu plano de negócios?">

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <FeatureCard icon={<Target size={24} />} title="Plano estratégico inicial" description="MVV e Canvas sintetizados para orientar posicionamento e direcionadores de valor do negócio." />
                <FeatureCard icon={<Search size={24} />} title="Pesquisa e mercado" description="Mapeamento de tendências, público, concorrência e análise regional com implicações estratégicas." />
                <FeatureCard icon={<Megaphone size={24} />} title="Plano de marketing" description="7 Ps, canais priorizados e KPIs para orientar aquisição, retenção e alocação de orçamento." />
                <FeatureCard icon={<Settings size={24} />} title="Plano operacional" description="Processos, layout, equipes e tecnologia definidos para garantir consistência operacional." />
                <FeatureCard icon={<DollarSign size={24} />} title="Plano financeiro" description="Custos, receitas e indicadores consolidados para avaliar cenários e decisões de investimento." />
                <FeatureCard icon={<PieChart size={24} />} title="Plano estratégico final" description="SWOT e plano de metas com indicadores e prioridades para execução prática." />
                <FeatureCard icon={<Shield size={24} />} title="Análise de riscos" description="Matriz de riscos com ações de mitigação e responsáveis para reduzir exposição." />
                <FeatureCard icon={<FileText size={24} />} title="Relatório final" description="Documento consolidado e apresentação executiva para apoiar decisões e comunicação a stakeholders." />
              </div>
            </Section>
          </div>
          <div className="lg:col-span-1">
            <ContactForm />
          </div>
        </div>
      </div>
      <footer className="bg-secondary text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© {new Date().getFullYear()} ECONOMICA - Empresa Júnior do Instituto de Economia da UNICAMP</p>
          <p className="text-sm mt-2 opacity-75">Atuando há mais de 30 anos no mercado de consultoria empresarial</p>
        </div>
      </footer>
    </div>
  );
};

export default BusinessPlanFarmacias;