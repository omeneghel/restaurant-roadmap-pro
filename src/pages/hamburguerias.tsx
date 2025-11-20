import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

const BusinessPlanHamburguerias = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Plano de Negócios para Hamburguerias | ECONOMICA"
        description="Entenda como o plano de negócios para hamburguerias estrutura decisões de mercado, operação e finanças com base em análise e método."
        canonical="https://economicajr.com.br/plano-de-negocios/hamburguerias"
      />
      
      <Header />
      <Hero 
        subtitle="Metodologia de <b>planos de negócios para hamburguerias</b> pela ECONOMICA — estratégia, viabilidade e planejamento para iniciar ou escalar seu negócio com segurança."
        title="Plano de Negócios para Hamburguerias: como fazer um para o seu negócio"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb 
          items={[
            { label: "Home", href: "/" },
            { label: "Plano de Negócios", href: "/plano-de-negocios" },
            { label: "Hamburguerias" }
          ]}
        />
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Content Column */}
          <div className="lg:col-span-2 space-y-0">
            {/* Section: Por que montar um plano de negócios para hamburguerias? */}
            <Section id="por-que-montar" title="Por que montar um plano de negócios para hamburguerias?">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `Os <b>planos de negócios para hamburguerias</b> organizam hipóteses sobre mercado, operação e finanças, permitindo avaliar cenários antes de investir. Um documento estruturado reduz incertezas ao definir público, canais de venda e projeções de receita e custos, facilitando decisões sobre formato, escala e prioridades operacionais sem promessas irreais.` }} />
              
              <div className="space-y-6 mt-8">
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Financiamento e crédito</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Um plano bem elaborado demonstra coerência entre projeções, premissas e capacidade operacional, reduzindo o risco percebido por financiadores. Para hamburguerias, isso significa detalhar volume de vendas por canal, custos por prato e fluxo de caixa projetado, facilitando a comunicação com investidores e apoiando decisões de prazo e volume de capital necessário.` }} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Entrada de sócios</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O documento organiza visão, métricas e governança, servindo como base para negociações entre sócios. Em hamburguerias, apresentar cenários, indicadores e critérios de avaliação ajuda a alinhar expectativas sobre investimento, participação e responsabilidades, além de definir gatilhos para expansão ou revisão de participação.` }} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Viabilidade</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O plano testa hipóteses de demanda, capacidade instalada, estrutura de custos e precificação para identificar o ponto de equilíbrio e margens esperadas. Para hamburguerias, conectar essas premissas a cenários de volume e mix de vendas permite priorizar alavancas, entender sensibilidade a preço e custo e tomar decisões mais embasadas sobre abertura e escala.` }} />
                </div>
              </div>
            </Section>

            {/* Section: O que é importante na hora de construir um plano de negócios para hamburguerias? */}
            <Section id="o-que-e-importante" title="O que é importante na hora de construir um plano de negócios para hamburguerias?">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `Um bom plano integra mercado, marketing, operação e finanças em torno de uma estratégia clara, conectando metas e recursos. A construção deve priorizar hipóteses testáveis, indicadores acionáveis e cenários alternativos para que o gestor tenha <b>clareza</b> e possa tomar decisões informadas sobre presença física, delivery e parcerias.` }} />

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Pesquisa e Análise de Mercado</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Análise macroeconômica</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `No plano, a análise macro ajuda a projetar demanda e comportamento do consumidor para hamburguerias, considerando renda disponível, tendência de consumo fora de casa e fatores econômicos que afetam ticket médio. Essas variáveis orientam premissas e cenários, permitindo ajustar expectativas diante de ciclos e choques no consumo.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Setor e concorrência</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Mapear concorrentes e posicionamento permite identificar lacunas e diferenciais competitivos no mercado de hamburguerias. Benchmarks de preço, oferta e canais ajudam a estimar participação possível e calibrar estratégia de entrada, promoção e mix de produtos, reduzindo incerteza sobre viabilidade e posicionamento.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Público-alvo</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Detalhar perfis de clientes e suas motivações é essencial para definir oferta, precificação e canais. No plano, segmentar por comportamento de compra, frequência e sensibilidade a preço permite projetar ticket médio, definir metas de aquisição e retenção e construir ações de marketing mais eficazes para hamburguerias.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Região</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Analisar potencial local, fluxo de pessoas e acessibilidade orienta projeções de volume e sazonalidade. Para hamburguerias, entender a dinâmica territorial — comércio, trabalho e lazer — permite calibrar mix de serviços, horários de operação e estimativas de tráfego para projeções realistas de vendas por canal.` }} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Plano de Marketing</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">7 Ps</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Aplicar os 7 Ps (Produto, Preço, Praça, Promoção, Pessoas, Processos e Evidências) ajuda a conectar posicionamento e execução no plano de negócios. Em hamburguerias, isso orienta oferta e diferenciação, definindo atributos do produto, estratégia de preço e canais que suportam a proposta de valor diante de concorrentes e clientes.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Canais</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O plano deve mapear quais canais serão prioritários — salão, delivery próprio, plataformas de entrega e atacado ocasional — e como cada canal impacta preço, custo e experiência. Em hamburguerias, escolher e dimensionar canais é vital para projetar receitas, custos de comissionamento e logística de atendimento.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Fidelização</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Estruturar estratégias de retenção e relacionamento no plano permite aumentar recorrência e LTV. Em hamburguerias, isso envolve programar ofertas, programas de fidelidade e ações de pós-venda que incentivem visitas repetidas e aumentem ticket médio, sempre conectando metas a métricas mensuráveis.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">KPIs</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Definir indicadores como CAC (custo de aquisição de cliente), LTV (valor do cliente no tempo), taxa de conversão, ROI e reputação é essencial no plano. Para hamburguerias, esses KPIs orientam alocação de orçamento, priorização de canais e iniciativas de melhoria contínua, permitindo avaliar eficiência de ações de marketing.` }} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Plano Operacional</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Layout e normas</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Planejar fluxo de atendimento, padronização e requisitos internos influencia capacidade, qualidade e custo operacional. No plano de negócios para hamburguerias é importante conectar layout, pontos de contato com cliente e tempos padrão para dimensionar mão de obra e estimar produtividade e custos por venda.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">5W2H</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O 5W2H organiza o que será feito (What), por que (Why), quem (Who), quando (When), onde (Where), como (How) e quanto custa (How much). Inserido no plano, esse formato traz previsibilidade e clareza sobre tarefas, cronogramas e responsáveis, aumentando controle operacional em hamburguerias.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Equipe</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O dimensionamento e as responsabilidades da equipe devem alinhar-se à demanda projetada e aos processos descritos no plano. Para hamburguerias, definir cargos, responsabilidades e curvas de aprendizagem ajuda a estimar custos de pessoal, escalabilidade e necessidade de treinamento para manter padrões de atendimento.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Tecnologia</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Detalhar sistemas de gestão, integrações e controles necessários no plano reduz riscos operacionais. Em hamburguerias, planejar PDV, gestão de estoque, integrações com plataformas de entrega e controles de caixa é essencial para previsibilidade, redução de perdas e eficiência nas operações.` }} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Plano Financeiro</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Custos</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O plano precisa discriminar custos fixos e variáveis, além de considerar CMV quando aplicável, conectando estrutura de custos a precificação e margens. Para hamburguerias, entender composição de custos por venda permite avaliar rentabilidade por produto e identificar oportunidades de ganho de eficiência.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Investimento</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Mapear itens de abertura, equipamentos e capital de giro é essencial para formar cenários financeiros. No plano de negócios para hamburguerias esses valores entram em diferentes cenários e horizontes, permitindo avaliar prazos de retorno e necessidades de caixa durante a fase inicial.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Receitas</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Projetar receitas exige premissas claras sobre volume, preço médio e sazonalidade, com cenários pessimista, base e otimista. Em hamburguarias, definir mix de vendas por canal e horários críticos ajuda a tornar as projeções rastreáveis e reproduzíveis para análises de sensibilidade.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Indicadores</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Mapear breakeven, payback, margens e fluxo de caixa é fundamental para decisões. No plano, esses indicadores mostram impactos de premissas e alavancas de resultado, permitindo ajustar estratégia comercial e operacional para melhorar rentabilidade de uma hamburgueria.` }} />
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            {/* Section: Plano estratégico */}
            <Section id="plano-estrategico" title="Plano estratégico">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `Síntese de direcionadores e prioridades organiza escolhas estratégicas a serem implementadas. Um plano de negócios para hamburguerias deve traduzir análises em prioridades operacionais e financeiras, com metas claras e indicadores que direcionam decisões de expansão, canais e mix de oferta, sempre com foco em <b>priorização</b>.` }} />
              
              <div className="space-y-6 mt-8">
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">SWOT</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `A matriz SWOT organiza forças, fraquezas, oportunidades e ameaças para orientar foco e mitigação. Em hamburguerias, essa análise ajuda a identificar vantagens competitivas a preservar, vulnerabilidades a corrigir e oportunidades de mercado que podem ser exploradas com menor risco.` }} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">BSC</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O Balanced Scorecard desdobra metas por perspectivas (financeira, mercado, processos e aprendizado), com indicadores e ritmo de revisão que viabilizam execução. Para hamburguerias, o BSC ajuda a conectar ações táticas a resultados financeiros e métricas operacionais relevantes.` }} />
                </div>
              </div>
            </Section>

            {/* Section: Análise de riscos */}
            <Section id="analise-de-riscos" title="Análise de riscos">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `A matriz de riscos (probabilidade x impacto) classifica eventos e define ações de mitigação e monitoramento. No plano de negócios para hamburguerias, essa abordagem permite priorizar riscos operacionais e de mercado, com medidas práticas para reduzir impacto e adaptar cenários sem recorrer a linguagem excessivamente técnica.` }} />
            </Section>

            {/* Section: Por que contratar a ECONOMICA? */}
            <Section id="por-que-contratar" title="Por que contratar a ECONOMICA?">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `A ECONOMICA entrega método e clareza de escopo, traduzindo análise em decisões práticas. Nosso foco é estruturar hipóteses, cenários e indicadores que auxiliem gestores a tomar decisões com base em informação e não em suposições, garantindo entendimento compartilhado entre stakeholders.` }} />
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `Nossa atuação combina formação acadêmica e experiência em consultoria, com histórico consistente de projetos voltados a pequenas e médias empresas. Essa trajetória permite à ECONOMICA oferecer diagnóstico e planejamento alinhados à realidade de empreendedores de hamburguerias.` }} />
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `A ECONOMICA é formada por alunos e colaboradores do Instituto de Economia da UNICAMP, contando com proximidade acadêmica que enriquece metodologias de pesquisa e análise. Essa ligação amplia capacidade técnica sem prometer serviços fora do escopo de planejamento.` }} />
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `O serviço de <b>Plano de Negócios</b> é um dos pilares da ECONOMICA, com foco em planejamento e diagnóstico. Por isso estruturamos entregas que reúnem pesquisa, estratégia e projeções para apoiar decisões de investimento e operação em diversos nichos, incluindo hamburguerias.` }} />
            </Section>

            {/* Section: O que estará incluído no seu plano de negócios? */}
            <Section id="o-que-inclui" title="O que estará incluído no seu plano de negócios?">

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <FeatureCard icon={<Target size={24} />} title="Plano estratégico inicial" description="MVV e Canvas do negócio com síntese dos direcionadores e proposta de valor, auxiliando na priorização estratégica." />
                <FeatureCard icon={<Search size={24} />} title="Pesquisa e mercado" description="Levantamento de tendências, perfil de público, concorrência e análise regional com implicações estratégicas claras." />
                <FeatureCard icon={<Megaphone size={24} />} title="Plano de marketing" description="Definição dos 7 Ps, canais prioritários e KPIs para orientar aquisição, retenção e alocação de orçamento." />
                <FeatureCard icon={<Settings size={24} />} title="Plano operacional" description="Mapeamento de processos, layout, equipe e tecnologia para garantir consistência e escala operacional." />
                <FeatureCard icon={<DollarSign size={24} />} title="Plano financeiro" description="Projeções de custos, receitas e indicadores financeiros para suportar decisões de investimento e precificação." />
                <FeatureCard icon={<PieChart size={24} />} title="Plano estratégico final" description="SWOT consolidada e plano de metas com indicadores para acompanhamento e priorização de iniciativas." />
                <FeatureCard icon={<Shield size={24} />} title="Análise de riscos" description="Matriz de riscos com ações de mitigação e monitoramento focadas nos principais vetores de incerteza." />
                <FeatureCard icon={<FileText size={24} />} title="Relatório final" description="Documento consolidado com apresentação executiva e anexos analíticos que sustentam as recomendações." />
              </div>
            </Section>
          </div>
          <div className="lg:col-span-1">
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BusinessPlanHamburguerias;