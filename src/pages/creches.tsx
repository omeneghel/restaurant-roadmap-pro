import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import ContactForm from "@/components/ContactForm";
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

const BusinessPlanCreches = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Plano de Negócios para Creches | ECONOMICA"
        description="Entenda como o plano de negócios para creches estrutura decisões de mercado, operação e finanças com base em análise e método."
        canonical="https://economicajr.com.br/plano-de-negocios/creches"
      />
      
      <Header />
      <Hero 
        subtitle="Metodologia de <b>planos de negócios para creches</b> pela ECONOMICA — estratégia, viabilidade e planejamento para iniciar ou escalar seu negócio com segurança."
        title="Plano de Negócios para Creches: como fazer um para o seu negócio"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Content Column */}
          <div className="lg:col-span-2 space-y-0">
            {/* Section: Por que montar um plano de negócios para creches? */}
            <Section id="por-que-montar" title="Por que montar um plano de negócios para creches?">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `Elaborar planos de negócios para creches garante que decisões sobre público, oferta e finanças sejam tomadas com base em análise clara e cenários plausíveis. O documento organiza premissas de demanda, capacidade e custo, permitindo testar hipóteses antes de investimentos. Com foco em pesquisa e projeções, o plano reduz incertezas e apoia escolhas estratégicas, trazendo <b>clareza</b> ao projeto e facilitando a comunicação entre sócios e investidores.` }} />
              
              <div className="space-y-6 mt-8">
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Financiamento e crédito</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Um plano de negócios para creches demonstra a consistência das premissas financeiras, mostrando projeções de receita, investimento inicial e fluxo de caixa. Esse detalhamento reduz o risco percebido por fontes de financiamento e facilita a negociação de condições, pois torna explícita a lógica por trás das estimativas de demanda e a capacidade operacional para atingir metas.` }} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Entrada de sócios</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Ao estruturar cenários, indicadores e critérios de decisão, o plano de negócios organiza governança e expectativas entre os sócios. Ele apresenta métricas para avaliação de performance, projeções e premissas de valuation, permitindo que novos parceiros entendam riscos, oportunidades e os compromissos necessários para levar adiante o projeto em creches.` }} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Viabilidade</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O plano conecta premissas de demanda, capacidade de atendimento, custos fixos e variáveis e política de preços para estimar ponto de equilíbrio e margens. A partir de cenários com hipóteses claras, é possível identificar alavancas de resultado e testar alternativas antes de executar, reduzindo a probabilidade de surpresas operacionais e financeiras.` }} />
                </div>
              </div>
            </Section>

            {/* Section: O que é importante na hora de construir um plano de negócios para creches? */}
            <Section id="o-que-e-importante" title="O que é importante na hora de construir um plano de negócios para creches?">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `Um plano eficaz integra mercado, marketing, operação e finanças em torno de uma estratégia clara. Ao articular esses elementos, o documento transforma dados em decisões, prioriza iniciativas e permite monitorar resultados com <b>indicadores</b> acionáveis, suportando escolhas de posicionamento e investimento em creches.` }} />

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Pesquisa e Análise de Mercado</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Análise macroeconômica</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Incluir variáveis macro ajuda a situar premissas de demanda e poder de compra que impactam creches. O plano apresenta cenários que consideram variações de renda e emprego, integrando essas tendências às projeções de matrícula e preço, o que melhora a precisão das estimativas e a robustez das recomendações estratégicas.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Setor e concorrência</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Mapear concorrentes locais e modelos de oferta permite identificar diferenciais e lacunas de mercado. Benchmarking e análise comparativa informam decisões de posicionamento, mix de serviços e faixa de preço, além de orientar ações que aumentem competitividade e reduzam a exposição a segmentos já saturados.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Público-alvo</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Definir perfis de família, motivações e jornada de escolha é essencial para calibrar oferta e preço. O plano descreve segmentos prioritários, sensibilidade a preço e canais preferidos, traduzindo essas informações em metas de aquisição, retenção e ticket médio para o modelo de creches.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Região</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `A análise territorial avalia potencial local, fluxo de pessoas e acessibilidade, fatores que influenciam volume e sazonalidade. O plano usa dados de catchment area para projetar demanda por área, orientar escolha de localização e dimensionar a oferta para a realidade da comunidade atendida.` }} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Plano de Marketing</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">7 Ps</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `No contexto de creches, olhar os 7 Ps — Produto, Preço, Praça, Promoção, Pessoas, Processos e Evidências — ajuda a alinhar experiência, comunicação e modelo de operação ao posicionamento desejado. Essa visão conecta proposição de valor à execução diária e às metas de receita.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Canais</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O plano detalha quais canais de aquisição serão priorizados, combinando presença local, indicações, redes sociais e parcerias. Cada canal recebe estimativa de custo e taxa de conversão para orientar alocação de recursos e medir eficiência na captação de famílias para as creches.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Fidelização</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Fidelizar pais passa por rotinas de comunicação, qualidade percebida e programas de relacionamento. O plano estabelece metas de retenção, práticas de engajamento e indicadores de satisfação que sustentam receita recorrente e reduzem churn em creches.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">KPIs</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `É fundamental definir CAC (Custo de Aquisição de Cliente), LTV (Valor do Tempo de Vida do Cliente), taxa de conversão, ROI e métricas de reputação para priorizar ações. Esses indicadores orientam orçamento, avaliação de canais e ajustes de oferta no plano de negócios de creches.` }} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Plano Operacional</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Layout e normas</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Planejar fluxo de atendimento, áreas de convivência e procedimentos operacionais assegura eficiência e qualidade. O plano conecta capacidade física a processos de acolhimento e custos operacionais, contribuindo para padronização do serviço e melhor aproveitamento de recursos em creches.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">5W2H</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O 5W2H organiza tarefas por o que, por que, onde, quando, quem, quanto e como, trazendo clareza sobre responsabilidades, prazos e custos. Inserido no plano de negócios, melhora previsibilidade e facilita a implementação das ações prioritárias em creches.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Equipe</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Dimensionar equipe por turno, funções e competências é parte essencial do planejamento. O plano descreve perfis, níveis de contratação e indicadores de produtividade, alinhando capacidade de atendimento às metas de qualidade e custo das creches.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Tecnologia</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Definir sistema de gestão, controles financeiros e ferramentas de comunicação permite reduzir retrabalho e melhorar acompanhamento de indicadores. O plano avalia necessidades de integração e automação para suportar escalabilidade e consistência operacional em creches.` }} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Plano Financeiro</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Custos</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O plano discrimina custos fixos e variáveis, além de itens específicos como materiais e insumos, ligando estrutura de custos à política de preços. Essa visão permite calcular margens praticáveis e testar cenários que impactam a sustentabilidade financeira das creches.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Investimento</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `São listados itens de abertura, equipamentos e capital de giro, e esses valores entram em cenários com prazos de retorno. O plano mostra como diferentes níveis de investimento afetam payback e necessidades de financiamento para iniciar ou expandir creches.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Receitas</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `As premissas de volume, preço e sazonalidade são detalhadas com cenários base, otimista e conservador. O plano mapeia mix de serviços e fontes de receita, garantindo rastreabilidade das suposições usadas nas projeções para creches.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Indicadores</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Mapear breakeven, payback, margens e fluxo de caixa é essencial para avaliar viabilidade. O plano mostra como variações nas premissas afetam esses indicadores e indica as principais alavancas para melhorar resultados nas creches.` }} />
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            {/* Section: Plano estratégico */}
            <Section id="plano-estrategico" title="Plano estratégico">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `A síntese estratégica prioriza direcionadores e metas que guiam decisões táticas e financeiras. Em um plano de negócios para creches, essa fase traduz análise em ações prioritárias, estabelecendo objetivos de crescimento, posicionamento e eficiência operacional com <b>foco</b> em execução.` }} />
              
              <div className="space-y-6 mt-8">
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">SWOT</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `A matriz SWOT organiza forças, fraquezas, oportunidades e ameaças para orientar escolhas estratégicas. No contexto de creches, essa análise identifica vantagens competitivas, pontos a melhorar e riscos externos que precisam de ações específicas de mitigação.` }} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">BSC</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O Balanced Scorecard traduz estratégia em metas por perspectivas — financeira, clientes, processos e aprendizado — com indicadores e cadência de revisão. Esse arranjo facilita priorização, acompanhamento e ajuste de iniciativas em creches.` }} />
                </div>
              </div>
            </Section>

            {/* Section: Análise de riscos */}
            <Section id="analise-de-riscos" title="Análise de riscos">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `A matriz de riscos classifica probabilidade e impacto para identificar prioridades de mitigação. No plano de negócios para creches, a abordagem propõe ações concretas para reduzir exposição a eventos operacionais e financeiros, sem entrar em questões regulatórias, e com ênfase em controles e contingências.` }} />
            </Section>

            {/* Section: Por que contratar a ECONOMICA? */}
            <Section id="por-que-contratar" title="Por que contratar a ECONOMICA?">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `A ECONOMICA oferece metodologia estruturada e foco em diagnóstico para clarear decisões. Nosso trabalho prioriza hipóteses rastreáveis e entregáveis que apoiam a tomada de decisão estratégica e financeira com precisão e <b>metodologia</b> clara.` }} />
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `A ECONOMICA tem mais de 30 anos de atuação (desde 1992) em consultoria empresarial e realiza projetos voltados a pequenos, médios e grandes negócios. Nossa experiência traz repertório técnico e pragmático para elaborar planos de negócios para creches com base em evidências.` }} />
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `Somos formados por alunos e membros da comunidade acadêmica do Instituto de Economia da UNICAMP, com acesso a conhecimento técnico e apoio conceitual de docentes quando necessário, combinando teoria e prática no desenvolvimento do plano.` }} />
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `O serviço de <b>Plano de Negócios</b> é um dos principais braços da ECONOMICA e concentra nossa experiência em diagnóstico e planejamento, entregando documentos que orientam decisões estratégicas em diversos nichos, incluindo creches.` }} />
            </Section>

            {/* Section: O que estará incluído no seu plano de negócios? */}
            <Section id="o-que-inclui" title="O que estará incluído no seu plano de negócios?">

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <FeatureCard icon={<Target size={24} />} title="Plano estratégico inicial" description="Síntese do MVV e Canvas do negócio com direcionadores de valor para orientar prioridades e decisões iniciais." />
                <FeatureCard icon={<Search size={24} />} title="Pesquisa e mercado" description="Mapeamento de tendências, público, concorrência e análise regional que oferecem insumos para projeções." />
                <FeatureCard icon={<Megaphone size={24} />} title="Plano de marketing" description="Definição dos 7 Ps, canais prioritários e KPIs para aquisição e retenção em creches." />
                <FeatureCard icon={<Settings size={24} />} title="Plano operacional" description="Processos, layout, dimensionamento de equipe e tecnologia para garantir consistência operacional." />
                <FeatureCard icon={<DollarSign size={24} />} title="Plano financeiro" description="Projeções de custos, receitas e indicadores financeiros para decisões embasadas sobre investimento." />
                <FeatureCard icon={<PieChart size={24} />} title="Plano estratégico final" description="SWOT e plano de metas (BSC) com indicadores e prioridades para execução." />
                <FeatureCard icon={<Shield size={24} />} title="Análise de riscos" description="Matriz de riscos com probabilidades, impactos e ações de mitigação priorizadas." />
                <FeatureCard icon={<FileText size={24} />} title="Relatório final" description="Documento consolidado com apresentação executiva e mapas de decisão para implementação." />
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

export default BusinessPlanCreches;