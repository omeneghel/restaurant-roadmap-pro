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

const BusinessPlanSpas = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Plano de Negócios para Spas | ECONOMICA"
        description="Entenda como o plano de negócios para spas estrutura decisões de mercado, operação e finanças com base em análise e método."
        canonical="https://economicajr.com.br/plano-de-negocios/spas"
      />
      
      <Header />
      <Hero 
        subtitle="Metodologia de <b>planos de negócios para spas</b> pela ECONOMICA — estratégia, viabilidade e planejamento para iniciar ou escalar seu negócio com segurança."
        title="Plano de Negócios para Spas: como fazer um para o seu negócio"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb 
          items={[
            { label: "Home", href: "/" },
            { label: "Plano de Negócios", href: "/plano-de-negocios" },
            { label: "Spas" }
          ]}
        />
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Content Column */}
          <div className="lg:col-span-2 space-y-0">
            {/* Section: Por que montar um plano de negócios para spas? */}
            <Section id="por-que-montar" title="Por que montar um plano de negócios para spas?">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `Um plano de negócios para spas organiza hipóteses sobre mercado, operação e finanças e permite avaliar cenários antes de investir. Ao conectar pesquisa de demanda a custos e receitas, o documento reduz incertezas e orienta decisões de localização, mix de serviços e preço. A ECONOMICA prioriza método e <b>clareza</b> para subsidiar escolhas estratégicas.` }} />
              
              <div className="space-y-6 mt-8">
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Financiamento e crédito</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Um plano de negócios bem estruturado demonstra a viabilidade do spa, detalhando premissas de demanda, projeções financeiras e uso de recursos. Essa clareza facilita a comunicação com potenciais financiadores, reduz o risco percebido e mostra coerência entre receitas previstas e capacidade operacional, tornando as negociações mais objetivas.` }} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Entrada de sócios</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Ao documentar visão, cenários e indicadores, o plano organiza critérios de decisão para sócios e investidores. Ele expõe métricas compartilhadas, modelos de receita e governança proposta, permitindo alinhar expectativas, definir marcos de investimento e facilitar a negociação de participação com base em hipóteses testadas.` }} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Viabilidade</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O plano testa premissas sobre demanda, capacidade de atendimento, estrutura de custos e política de preços para estimar ponto de equilíbrio e margens. Conectar essas variáveis em cenários distintos permite identificar alavancas de rentabilidade e riscos, apoiando a decisão de abrir, ajustar ou escalar um negócio de spa.` }} />
                </div>
              </div>
            </Section>

            {/* Section: O que é importante na hora de construir um plano de negócios para spas? */}
            <Section id="o-que-e-importante" title="O que é importante na hora de construir um plano de negócios para spas?">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `Construir um plano exige visão integrada de mercado, marketing, operação e finanças, com conexões explícitas entre hipóteses e metas. A análise deve priorizar fatores que impactam o cliente e a margem, sempre com <b>método</b> para testar cenários e validar decisões antes da execução.` }} />

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Pesquisa e Análise de Mercado</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Análise macroeconômica</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `No plano de negócios é crucial contextualizar o mercado de spas no ambiente econômico mais amplo: renda disponível, tendências de consumo e variáveis que afetam o poder de compra. Essas informações ajudam a calibrar cenários de demanda e a definir premissas consistentes para projeções financeiras.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Setor e concorrência</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Mapear concorrentes, modelos de oferta e posicionamento permite identificar lacunas e diferenciais competitivos. O plano usa benchmarks para estimar preços, ocupação e mix de serviços, reduzindo incertezas e orientando decisões sobre posicionamento e escopo do spa.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Público-alvo</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Segmentar públicos com base em perfil, motivações e comportamento de compra é essencial para definir mix de serviços, precificação e canais de aquisição. O plano traduz esse mapeamento em metas de aquisição, taxa de retenção e ticket médio projetado para o spa.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Região</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `A análise territorial detalha potencial local, fluxo de pessoas, acessibilidade e concorrência próxima. Esses elementos influenciam projeções de volume, sazonalidade e mix de serviços, orientando escolhas de ponto comercial e investimentos em visibilidade local.` }} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Plano de Marketing</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">7 Ps</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Aplicar os 7 Ps (Produto, Preço, Praça, Promoção, Pessoas, Processos e Evidências) garante que oferta, experiência e comunicação estejam alinhadas ao posicionamento. No plano, cada P recebe metas e hipóteses que se refletem nas projeções de receita e na experiência do cliente.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Canais</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O plano de marketing define quais canais serão priorizados para aquisição e venda em spas: reservas próprias, marketplaces de bem-estar, redes sociais, parcerias locais e indicação. Cada canal recebe estimativas de custo e conversão para compor o orçamento de aquisição.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Fidelização</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Estruturar programas de fidelidade, planos de assinatura e rituais de atendimento aumenta a recorrência. No plano, essas iniciativas são quantificadas em metas de retenção e LTV (Lifetime Value), conectando experiência ao fluxo de receita recorrente.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">KPIs</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O Plano de Marketing define KPIs como CAC (Custo de Aquisição de Cliente), LTV (Valor do Tempo de Vida do Cliente), taxa de conversão, ticket médio, ROI de campanhas e avaliações de reputação. Esses indicadores orientam priorização de investimentos e ajustes operacionais no spa.` }} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Plano Operacional</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Layout e normas</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Projetar fluxo de atendimento, salas de tratamento, áreas de espera e logística reduz atritos e melhora eficiência. No plano operacional são definidos padrões de atendimento e parâmetros de qualidade, conectando capacidade instalada a previsões de custo e serviço.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">5W2H</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O 5W2H (o que, por que, onde, quando, quem, como, quanto) organiza ações, responsáveis e prazos. No plano de negócios ele serve para detalhar implantação de serviços, campanhas e rotinas, aumentando previsibilidade e facilitando a execução futura.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Equipe</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Dimensionar equipe por turnos e serviços, definir responsabilidades e perfil de competências é parte do plano. Essa seção liga demanda prevista a custos de pessoal, necessidade de treinamento e políticas de atendimento para manter a qualidade do serviço.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Tecnologia</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Definir sistemas de gestão de reservas, CRM, controle de estoque e integração de pagamentos é imprescindível. O plano identifica requisitos funcionais e estimativas de custo para as soluções que suportam operação, mensuração e escalabilidade do spa.` }} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Plano Financeiro</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Custos</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O plano financeiro discrimina custos fixos e variáveis, além de custos de materiais e insumos aplicáveis aos serviços. Essa visão permite conectar estrutura de custos à estratégia de preços e estimar margens operacionais do spa com transparência.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Investimento</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Identificar itens de abertura como reformas, equipamentos, mobiliário e capital de giro é essencial. O plano inclui esses valores em cenários com prazos de retorno distintos, facilitando decisões sobre financiamento e alocação de recursos.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Receitas</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Premissas de volume, mix de serviços, preços e sazonalidade são explicitadas no plano para projetar receitas. Cenários conservador, base e otimista ajudam a testar sensibilidade e a identificar quais variáveis impactam mais o resultado do spa.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Indicadores</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Mapear breakeven, payback, margens por serviço e fluxo de caixa permite acompanhar viabilidade e sustentabilidade. No plano esses indicadores ligam premissas a metas, facilitando priorização de ações para melhorar a performance financeira.` }} />
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            {/* Section: Plano estratégico */}
            <Section id="plano-estrategico" title="Plano estratégico">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `O plano estratégico sintetiza direcionadores e prioridades, definindo onde concentrar recursos e quais resultados perseguir. A ECONOMICA conecta essa síntese a metas mensuráveis e a iniciativas-chave para suportar execução e tomada de decisão com foco em <b>prioridade</b>.` }} />
              
              <div className="space-y-6 mt-8">
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">SWOT</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `A matriz SWOT organiza forças, fraquezas, oportunidades e ameaças para priorizar ações estratégicas. No plano, essa análise indica áreas de investimento e mitigação de risco, suportando decisões sobre posicionamento e diferenciação do spa.` }} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">BSC</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O Balanced Scorecard (BSC) traduz estratégia em metas por perspectivas — financeira, clientes, processos e aprendizado — com indicadores e cadência de revisão. Esse arranjo viabiliza execução focada e acompanhamento das prioridades do spa.` }} />
                </div>
              </div>
            </Section>

            {/* Section: Análise de riscos */}
            <Section id="analise-de-riscos" title="Análise de riscos">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `A matriz de riscos cruza probabilidade e impacto para priorizar respostas e controles. No plano de negócios para spas definimos ações de mitigação e gatilhos de revisão, sempre com abordagem prática e compreensível, conectando riscos às decisões financeiras e operacionais com <b>pragmatismo</b>.` }} />
            </Section>

            {/* Section: Por que contratar a ECONOMICA? */}
            <Section id="por-que-contratar" title="Por que contratar a ECONOMICA?">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `A proposta de valor da ECONOMICA combina metodologia rigorosa, escopo claro e foco em decisões acionáveis. Entregamos diagnósticos e cenários que ajudam proprietários de spas a escolher entre alternativas com base em dados e análise, garantindo maior segurança nas decisões.` }} />
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `A ECONOMICA atua desde 1992 em consultoria empresarial e já consolidou experiência em projetos diversos, aplicando método acadêmico e pragmático. Essa trajetória fornece base analítica para elaborar planos de negócios sólidos para spas, com clareza de premissas e encaminhamentos.` }} />
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `Nossa equipe é formada por alunos e ex-alunos do Instituto de Economia da UNICAMP, com acesso à comunidade acadêmica para embasamento técnico. Essa origem reforça o compromisso com análise crítica, rigor metodológico e foco em soluções que atendam às necessidades do spa.` }} />
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `O serviço de <b>Plano de Negócios</b> é um dos pilares da ECONOMICA. Por meio dele entregamos estudos, projeções e recomendações que sintetizam conhecimento acumulado em múltiplos nichos, adaptados às especificidades do seu spa, sem promessa de operacionalização contínua.` }} />
            </Section>

            {/* Section: O que estará incluído no seu plano de negócios? */}
            <Section id="o-que-inclui" title="O que estará incluído no seu plano de negócios?">

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <FeatureCard icon={<Target size={24} />} title="Plano estratégico inicial" description="Síntese de MVV e Canvas do negócio com direcionadores de valor e prioridades estratégicas para o spa." />
                <FeatureCard icon={<Search size={24} />} title="Pesquisa e mercado" description="Mapeamento de tendências, concorrência, público e análise regional que conectam insights a decisões praticáveis." />
                <FeatureCard icon={<Megaphone size={24} />} title="Plano de marketing" description="Estratégia com 7 Ps, definição de canais prioritários e KPIs para orientar aquisição e conversão." />
                <FeatureCard icon={<Settings size={24} />} title="Plano operacional" description="Processos, layout, tecnologia e dimensionamento de equipe para entregar experiência consistente." />
                <FeatureCard icon={<DollarSign size={24} />} title="Plano financeiro" description="Estimativas de custos, receitas e indicadores que suportam decisões de investimento e preços." />
                <FeatureCard icon={<PieChart size={24} />} title="Plano estratégico final" description="SWOT consolidada e plano de metas com indicadores para priorizar execução e revisão." />
                <FeatureCard icon={<Shield size={24} />} title="Análise de riscos" description="Matriz de riscos com ações de mitigação e critérios de monitoramento para reduzir incertezas." />
                <FeatureCard icon={<FileText size={24} />} title="Relatório final" description="Documento consolidado com apresentação executiva, cenários e recomendações para decisão." />
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

export default BusinessPlanSpas;