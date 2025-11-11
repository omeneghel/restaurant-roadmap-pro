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

const BusinessPlanPizzarias = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Plano de Negócios para Pizzarias | ECONOMICA"
        description="Entenda como o plano de negócios para pizzarias estrutura decisões de mercado, operação e finanças com base em análise e método."
        canonical="https://economicajr.com.br/plano-de-negocios/pizzarias"
      />
      
      <Header />
      <Hero 
        subtitle="Metodologia de <b>planos de negócios para pizzarias</b> pela ECONOMICA — estratégia, viabilidade e planejamento para iniciar ou escalar seu negócio com segurança."
        title="Plano de Negócios para Pizzarias: como fazer um para o seu negócio"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb 
          items={[
            { label: "Home", href: "/" },
            { label: "Plano de Negócios", href: "/plano-de-negocios" },
            { label: "Pizzarias" }
          ]}
        />
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Content Column */}
          <div className="lg:col-span-2 space-y-0">
            {/* Section: Por que montar um plano de negócios para pizzarias? */}
            <Section id="por-que-montar" title="Por que montar um plano de negócios para pizzarias?">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `Os <b>planos de negócios para pizzarias</b> organizam hipóteses, metas e métricas essenciais para abrir ou expandir uma pizzaria. Com foco em mercado, operação e finanças, o documento reduz incertezas ao transformar suposições em cenários testáveis, apoiando decisões sobre formato de loja, canais de venda e mix de oferta, sempre alinhado a custo, capacidade e demanda.` }} />
              
              <div className="space-y-6 mt-8">
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Financiamento e crédito</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Um plano de negócios bem estruturado mostra premissas claras de receita, custos e necessidade de capital, facilitando a comunicação com potenciais financiadores. Para pizzarias, isso significa detalhar ciclos de caixa, sazonalidade e capacidade de produção, evidenciando coerência entre projeções, demanda prevista e capacidade operacional para reduzir riscos percebidos.` }} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Entrada de sócios</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Ao trazer governança, cenários e indicadores, o plano organiza visão e critérios objetivos para negociação entre sócios. Para pizzarias, isso inclui cenários de participação societária, projeções de retorno e métricas operacionais que alinham expectativas sobre investimento, responsabilidades e metas de curto e médio prazo, reduzindo conflitos futuros.` }} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Viabilidade</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O plano testa premissas de demanda, capacidade produtiva, custos e estratégias de precificação, conectando essas hipóteses ao ponto de equilíbrio e às margens. Em pizzarias, esse exercício revela alavancas como alteração do mix, canais de entrega ou horário de funcionamento, permitindo avaliar viabilidade econômica em diferentes cenários e níveis de risco.` }} />
                </div>
              </div>
            </Section>

            {/* Section: O que é importante na hora de construir um plano de negócios para pizzarias? */}
            <Section id="o-que-e-importante" title="O que é importante na hora de construir um plano de negócios para pizzarias?">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `Construir um plano exige visão integrada: mercado, marketing, operação e finanças conectados à estratégia da empresa. É preciso priorizar hipóteses testáveis, definir métricas e criar cenários que permitam decidir entre formatos (delivery, salão, híbrido) com base em <b>evidência</b> e alinhamento operacional.` }} />

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Pesquisa e Análise de Mercado</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Análise macroeconômica</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O plano deve explicitar como variáveis macro afetam consumo e comportamento em pizzarias: rendimento disponível, inflação e tendências de consumo influenciam ticket médio e frequência. Essas premissas orientam cenários de demanda e ajudam a calibrar projeções de receita e sensibilidade do negócio a choques econômicos.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Setor e concorrência</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Mapear concorrentes diretos e posicionamentos permite identificar diferenciais e lacunas no mercado de pizzarias. Benchmarks sobre preço, oferta e canais ajudam a posicionar a proposta de valor, definir faixa de preço e priorizar investimentos em serviço, comunicação ou canais digitais para ganhar participação local.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Público-alvo</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Definir perfis de clientes sustenta decisões de mix, preço e canais. Em pizzarias, conhecer segmentos (famílias, jovens, corporativo), expectativas de conveniência e sensibilidade a preço orienta metas de ticket, frequência e estratégias de retenção, além de informar jornada de compra e canais prioritários.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Região</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `A análise territorial detalha potencial local, fluxo de pessoas, acessibilidade e características demográficas que influenciam volume e mix. Para pizzarias, essa informação ajusta previsão de vendas por ponto, identifica horários de maior demanda e orienta escolha de formato e presença em plataformas de delivery.` }} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Plano de Marketing</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">7 Ps</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `No plano de marketing para pizzarias, é essencial avaliar Produto, Preço, Praça, Promoção, Pessoas, Processos e Evidências para garantir coerência entre oferta e posicionamento. Esse olhar ajuda a priorizar investimentos e definir mensagens, mix de canais e formatos de atendimento que sustentem a proposta de valor.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Canais</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O plano deve mapear canais de aquisição e venda, como loja física, delivery próprio, aplicativos e parcerias B2B, com estimativas de custo e conversão por canal. Para pizzarias, escolher canais eficientes influencia custo por pedido e disponibilidade, impactando logística, embalagem e serviço ao cliente.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Fidelização</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Estruturar programas de retenção e rotinas de relacionamento aumenta recorrência e receita ao reduzir dependência de aquisição contínua. Em pizzarias, isso pode incluir clubes de desconto, programas por frequência e comunicação segmentada, com metas ligadas a LTV e satisfação do cliente.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">KPIs</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O plano deve detalhar indicadores como CAC (custo de aquisição de cliente), LTV (valor do cliente ao longo do tempo), taxa de conversão, ROI (retorno sobre investimento) e reputação para orientar priorização e orçamento. Esses KPIs permitem acompanhar eficiência de campanhas, rentabilidade por canal e necessidade de ajustes.` }} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Plano Operacional</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Layout e normas</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O planejamento operacional considera fluxo de atendimento, padronização de processos e requisitos internos para garantir qualidade e eficiência. Em pizzarias, layout de cozinha e salão, pontos de montagem e de expedição influenciam capacidade produtiva, tempo de entrega e custos operacionais.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">5W2H</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Integrar um 5W2H (o que, por que, quem, quando, onde, como, quanto) no plano organiza ações, responsabilidades, cronogramas e custos previstos. Para pizzarias, esse instrumento clarifica implantação de processos, abertura de unidades e demandas por contratação, aumentando previsibilidade operacional.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Equipe</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Dimensionar equipe e funções conforme demanda é parte do plano: definir horários, responsabilidades e critérios de capacitação. Em pizzarias, isso inclui escala de pizzaiolos, atendimento e entregadores, alinhando custos de pessoal com metas de produção e níveis de serviço.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Tecnologia</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O plano deve identificar sistemas e integrações necessários para gestão de vendas, pedidos, estoque e finanças. Em pizzarias, plataformas de gestão, controle de pedidos e integração com apps de entrega influenciam eficiência, acurácia de custo e capacidade de escalar operação sem perder controle.` }} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Plano Financeiro</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Custos</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O diagnóstico financeiro detalha custos fixos, variáveis e CMV (custo de mercadorias vendidas) aplicáveis em pizzarias, conectando estrutura de custos à formação de preço e às margens operacionais. Isso permite avaliar sensibilidade de lucro a variações de volume e preço.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Investimento</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O plano discrimina itens de abertura, equipamentos e capital de giro, integrando esses gastos a cenários financeiros e prazos de retorno. Em pizzarias, isso inclui fornos, refrigeração, mobiliário e estoque inicial, além de estimativas de desembolso e necessidades de caixa nos primeiros meses.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Receitas</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `É fundamental mapear premissas de volume por canal, ticket médio e sazonalidade, construindo cenários conservador, base e otimista. Para pizzarias, esses elementos orientam projeções de receita e ajudam a testar hipóteses sobre mix de produtos e estratégias promocionais.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Indicadores</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O plano deve explicitar breakeven (ponto de equilíbrio), payback, margens e fluxo de caixa como indicadores centrais. Em pizzarias, essas métricas mostram o impacto das premissas e das alavancas de resultado, orientando decisões sobre preço, capacidade e investimento.` }} />
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            {/* Section: Plano estratégico */}
            <Section id="plano-estrategico" title="Plano estratégico">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `A síntese estratégica prioriza diretores de ação e recursos com foco em escolhas operacionais e de mercado. Um bom plano de negócios para pizzarias destaca ações de diferenciação, segmentos-alvo e prioridades de curto e médio prazo, apoiando decisões com <b>foco</b> analítico e critérios mensuráveis.` }} />
              
              <div className="space-y-6 mt-8">
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">SWOT</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `A matriz SWOT organiza forças, fraquezas, oportunidades e ameaças para orientar foco e mitigação. Em pizzarias, essa ferramenta conecta diagnóstico competitivo e interno a estratégias concretas, como ajuste de oferta, melhoria de processos ou priorização de canais para aproveitar oportunidades locais.` }} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">BSC</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O Balanced Scorecard (BSC) traduz a estratégia em metas e indicadores por perspectivas (financeira, mercado, processos e aprendizado), viabilizando priorização e cadência de revisão. Para pizzarias, o BSC ajuda a manter alinhamento entre metas financeiras, qualidade de serviço e iniciativas de crescimento.` }} />
                </div>
              </div>
            </Section>

            {/* Section: Análise de riscos */}
            <Section id="analise-de-riscos" title="Análise de riscos">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `A análise de riscos usa uma matriz probabilidade x impacto para priorizar ameaças e medidas de mitigação sem linguagem técnica excessiva. Em planos de negócios para pizzarias, identifica riscos operacionais, de demanda e de fornecedores, propondo ações práticas de contingência e monitoramento com <b>pragmatismo</b>.` }} />
            </Section>

            {/* Section: Por que contratar a ECONOMICA? */}
            <Section id="por-que-contratar" title="Por que contratar a ECONOMICA?">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `A ECONOMICA entrega planejamento e diagnóstico com método claro, escopo definido e foco em decisão. Nosso trabalho prioriza análise quantitativa e qualitativa para que empresários de pizzarias tenham informações suficientes para escolher formato, canais e investimentos com <b>clareza</b>.` }} />
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `A ECONOMICA tem mais de 30 anos de atuação (desde 1992) em consultoria empresarial, com histórico de projetos em diferentes portes. Essa experiência estrutural permite formular cenários e modelos financeiros coerentes para quem atua em pizzarias, sem promessas de resultado pré-determinado.` }} />
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `Nossa equipe é formada por alunos e colaboradores do Instituto de Economia da UNICAMP, combinando produção acadêmica e aplicação prática. Quando pertinente, contamos com a colaboração de professores para reforçar a qualidade analítica e a robustez metodológica dos estudos entregues.` }} />
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `O serviço de <b>Plano de Negócios</b> é um dos principais braços de atuação da ECONOMICA, com processos consolidados para produzir diagnóstico, estratégia e projeções. Por isso, nossos planos priorizam utilidade prática e capacidade de embasar decisões em diversos nichos, incluindo pizzarias.` }} />
            </Section>

            {/* Section: O que estará incluído no seu plano de negócios? */}
            <Section id="o-que-inclui" title="O que estará incluído no seu plano de negócios?">

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <FeatureCard icon={<Target size={24} />} title="Plano estratégico inicial" description="Síntese de MVV (missão, visão, valores) e Canvas do negócio, com direcionadores claros e prioridades para execução." />
                <FeatureCard icon={<Search size={24} />} title="Pesquisa e mercado" description="Mapeamento de tendências, público, concorrência e análise territorial que conectam insights a decisões práticas." />
                <FeatureCard icon={<Megaphone size={24} />} title="Plano de marketing" description="Definição dos 7 Ps, canais prioritários e KPIs para aquisição, conversão e retenção com foco em priorização." />
                <FeatureCard icon={<Settings size={24} />} title="Plano operacional" description="Processos, layout, dimensionamento de equipe e necessidades tecnológicas para consistência e escala operacional." />
                <FeatureCard icon={<DollarSign size={24} />} title="Plano financeiro" description="Projeções de receitas, custos, investimentos e indicadores para suportar decisões de viabilidade e alocação." />
                <FeatureCard icon={<PieChart size={24} />} title="Plano estratégico final" description="Matriz SWOT consolidada e plano de metas com indicação de indicadores e prioridades (BSC)." />
                <FeatureCard icon={<Shield size={24} />} title="Análise de riscos" description="Matriz de riscos com probabilidades, impactos e ações de mitigação práticas e rastreáveis." />
                <FeatureCard icon={<FileText size={24} />} title="Relatório final" description="Documento consolidado e apresentação executiva com hipóteses, cenários e recomendações para decisão." />
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

export default BusinessPlanPizzarias;