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
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `Ter planos de negócios para pizzarias é o passo inicial para transformar uma ideia em decisão econômica fundamentada. O documento organiza hipóteses sobre mercado, operação e finanças, testa cenários e define prioridades, permitindo diferenciar opções de investimento com <b>clareza</b> e reduzir incertezas antes de abrir ou expandir uma pizzaria.` }} />
              
              <div className="space-y-6 mt-8">
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Financiamento e crédito</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Um plano de negócios bem estruturado detalha premissas de demanda, projeções e estrutura de custos, oferecendo transparência para potenciais financiadores. Em pizzarias, isso reduz o risco percebido e facilita a comunicação de hipóteses, prazos e necessidades de capital de giro, aumentando as chances de acesso a linhas de crédito mediante apresentação coerente de dados e cenários.` }} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Entrada de sócios</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O documento organiza visão, metas e métricas essenciais para negociação entre sócios. Em pizzarias, um plano formaliza critérios de aporte, participação e governança, descreve cenários e indicadores prioritários e permite alinhar expectativas entre parceiros, contribuindo para decisões de entrada, divisão de responsabilidades e definição de gatilhos de investimento com <b>transparência</b>.` }} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Viabilidade</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Avaliar viabilidade exige conectar premissas de demanda, capacidade produtiva, custos e precificação. Um plano de negócios para pizzarias modela ponto de equilíbrio, margens e sensibilidade a variações de preço e volume, evidenciando quais hipóteses sustentam a operação e quais alavancas podem melhorar a rentabilidade antes de comprometer capital.` }} />
                </div>
              </div>
            </Section>

            {/* Section: O que é importante na hora de construir um plano de negócios para pizzarias? */}
            <Section id="o-que-e-importante" title="O que é importante na hora de construir um plano de negócios para pizzarias?">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `O plano deve integrar mercado, marketing, operação e finanças em uma lógica única, alinhada ao posicionamento e metas. Essa visão holística conecta decisões táticas e estratégicas, prioriza investimentos e indica métricas para monitorar performance, dando suporte a escolhas de canais, mix e dimensionamento com <b>coerência</b>.` }} />

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Pesquisa e Análise de Mercado</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Análise macroeconômica</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `No plano de negócios, a análise macroeconomômica contextualiza poder de compra e tendências de consumo que impactam as pizzarias. Compreender inflação, renda disponível e ciclos de consumo ajuda a definir premissas de demanda e a construir cenários plausíveis que orientam preço, mix e investimentos.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Setor e concorrência</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Mapear concorrentes e posicionamento revela brechas e diferenciais importantes em pizzarias. Benchmarks de preço, serviço e oferta permitem calibrar estratégia de entrada, mix de produtos e canais, reduzindo incertezas e subsidiando decisões sobre como competir por conveniência, qualidade ou custo-benefício.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Público-alvo</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Segmentar e caracterizar o público-alvo orienta decisões de cardápio, formato e preço. Em pizzarias, entender comportamento, frequência de compra e ticket médio permite definir jornadas, canais preferenciais e políticas de promoção que impactam diretamente metas de aquisição e retenção.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Região</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Analisar a área de atuação é essencial para estimar fluxo de clientes, acessibilidade e competição local. No plano de negócios para pizzarias, a avaliação territorial orienta projeções de vendas, sazonalidade e mix de ofertas, além de subsidiar decisões sobre tamanho do salão, entregas e horários de operação.` }} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Plano de Marketing</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">7 Ps</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Aplicar os 7 Ps ajuda a traduzir posicionamento em ações concretas: produto, preço, praça, promoção, pessoas, processos e evidências. No plano de negócios para pizzarias, essa abordagem conecta oferta e experiência do cliente às metas financeiras e de posicionamento, garantindo consistência entre promessa e entrega.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Canais</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Identificar canais de aquisição e venda é decisivo para o fluxo de receita. O plano define mix entre atendimento presencial, delivery próprio, marketplaces e parcerias, avaliando custos de aquisição, comissões e impacto na experiência, permitindo priorizar esforços conforme retorno e capacidade operacional.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Fidelização</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Estruturar programas de retenção aumenta frequência e ticket médio. Em pizzarias, iniciativas como clubes, promoções recorrentes e comunicação segmentada fortalecem relacionamento, elevam LTV e reduzem sensibilidade a preço, quando desenhadas a partir de metas claras de retenção e satisfação do cliente.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">KPIs</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Definir KPIs orienta priorização e revisões: CAC (custo de aquisição de clientes), LTV (valor do cliente ao longo do tempo), taxa de conversão, ROI e avaliações de reputação. Esses indicadores permitem ajustar orçamento, canais e oferta com base em resultados mensuráveis para otimizar desempenho.` }} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Plano Operacional</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Layout e normas</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Planejar fluxo de atendimento e padronização é crucial para eficiência e qualidade em pizzarias. O plano operacional considera arranjo físico, estações de preparo, logística de entrega e padrões de serviço que influenciam capacidade, tempos de ciclo e custos, conectando operação à promessa de valor.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">5W2H</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O 5W2H organiza tarefas com o que, por que, quando, onde, quem, como e quanto. No plano de negócios, essa ferramenta detalha ações, responsáveis, prazos e recursos necessários para implementar iniciativas em pizzarias, aumentando previsibilidade e facilitando a execução das estratégias definidas.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Equipe</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Dimensionar equipe e responsabilidades é parte do planejamento operacional. O plano de negócios descreve cargos, jornadas, necessidades de treinamento e critérios de escala conforme demanda projetada, garantindo que a operação mantenha qualidade sem sobrecustos ou gargalos de atendimento.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Tecnologia</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Avaliar sistemas de gestão, integração de pedidos e controles é essencial. O plano define quais softwares de frente de loja, gestão de estoque, controle financeiro e integrações com plataformas de entrega são necessários para suportar crescimento e garantir rastreabilidade e eficiência operacional.` }} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Plano Financeiro</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Custos</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O plano financeiro discrimina custos fixos, variáveis e o CMV (custo de mercadorias vendidas) quando aplicável em pizzarias, conectando estrutura de custos à precificação. Essa análise permite entender alavancas de margem e identificar oportunidades de otimização sem comprometer a qualidade.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Investimento</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Mapear investimentos de abertura e capital de giro inclui equipamentos, mobiliário e preparação de ponto. O plano organiza esses itens em cenários e prazos, permitindo visualizar necessidade de capital inicial, horizonte de retorno e impacto do investimento nas projeções de caixa.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Receitas</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Modelar receitas exige premissas de volume, ticket médio e sazonalidade. No plano de negócios para pizzarias, projetar cenários conservador, provável e otimista com hipóteses rastreáveis ajuda a entender sensibilidade ao preço e a planejar mix entre balcão, entrega e eventos.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Indicadores</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Indicadores como breakeven, payback, margens e fluxo de caixa são essenciais para decisões. O plano financeiro mostra como variações de preço, custo e volume impactam esses indicadores em pizzarias, permitindo identificar alavancas e priorizar ações para melhorar viabilidade e sustentabilidade.` }} />
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            {/* Section: Plano estratégico */}
            <Section id="plano-estrategico" title="Plano estratégico">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `A síntese estratégica organiza direcionadores e prioridades que guiarão execução e investimento. Em um plano de negócios para pizzarias, essa etapa traduz análise em escolhas práticas de posicionamento, canais e metas, servindo de referência para decisões táticas e revisões futuras com <b>foco</b>.` }} />
              
              <div className="space-y-6 mt-8">
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">SWOT</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `A matriz SWOT articula forças, fraquezas, oportunidades e ameaças de forma prática. Em pizzarias, identificar esses elementos permite priorizar vantagens competitivas, mitigar riscos operacionais e explorar oportunidades de mercado, alinhando ações táticas à estratégia de diferenciação.` }} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">BSC</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O Balanced Scorecard traduz estratégia em metas por perspectivas: financeira, clientes, processos e aprendizado. No plano de negócios, estabelecer objetivos, indicadores e ciclos de revisão facilita monitorar execução, avaliar impacto e reorientar prioridades conforme desempenho em pizzarias.` }} />
                </div>
              </div>
            </Section>

            {/* Section: Análise de riscos */}
            <Section id="analise-de-riscos" title="Análise de riscos">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `A matriz de riscos organiza probabilidade e impacto para priorizar mitigação. No plano de negócios para pizzarias, essa abordagem identifica vulnerabilidades operacionais, comerciais e financeiras, propondo ações proporcionais para reduzir exposição e aumentar confiança nas decisões sem recorrer a linguagem excessivamente técnica nem a medidas legais.` }} />
            </Section>

            {/* Section: Por que contratar a ECONOMICA? */}
            <Section id="por-que-contratar" title="Por que contratar a ECONOMICA?">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `A proposta de valor da ECONOMICA foca método, clareza de escopo e suporte à decisão. Nosso trabalho prioriza diagnóstico, hipóteses e projeções que permitem escolher caminhos com responsabilidade técnica e comunicação clara entre empreendedores e investidores, sempre com <b>objetividade</b>.` }} />
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `A ECONOMICA reúne experiência acadêmica aplicada em consultoria empresarial desde 1992, com sólida trajetória em planos de negócios para diferentes portes. Nosso histórico se traduz em metodologia testada e capacidade de estruturar análises e cenários relevantes para pizzarias.` }} />
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `Somos formados por alunos da comunidade do Instituto de Economia da UNICAMP e contamos, quando pertinente, com colaboração de docentes. Essa combinação acadêmica-prática sustenta o rigor analítico e a qualidade técnica das entregas.` }} />
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `O serviço de <b>Plano de Negócios</b> é um dos pilares da ECONOMICA, sustentado por experiência em diversos nichos. Oferecemos diagnóstico, pesquisa e planejamento para que decisões em pizzarias sejam tomadas com base em análise e evidência, sem promessas de operação continuada.` }} />
            </Section>

            {/* Section: O que estará incluído no seu plano de negócios? */}
            <Section id="o-que-inclui" title="O que estará incluído no seu plano de negócios?">

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <FeatureCard icon={<Target size={24} />} title="Plano estratégico inicial" description="MVV e Canvas do negócio, com síntese das prioridades e direcionadores de valor para orientar decisões." />
                <FeatureCard icon={<Search size={24} />} title="Pesquisa e mercado" description="Tendências, público, concorrência e análise regional conectados a recomendações práticas." />
                <FeatureCard icon={<Megaphone size={24} />} title="Plano de marketing" description="7 Ps, canais e KPIs priorizados para execução e monitoramento de desempenho." />
                <FeatureCard icon={<Settings size={24} />} title="Plano operacional" description="Processos, layout, equipe e tecnologia para consistência operacional e escala." />
                <FeatureCard icon={<DollarSign size={24} />} title="Plano financeiro" description="Custos, receitas e indicadores fundamentais para avaliar viabilidade e decisões." />
                <FeatureCard icon={<PieChart size={24} />} title="Plano estratégico final" description="SWOT consolidada e plano de metas com estrutura tipo BSC para acompanhamento." />
                <FeatureCard icon={<Shield size={24} />} title="Análise de riscos" description="Matriz de riscos com ações de mitigação e priorização para reduzir exposição." />
                <FeatureCard icon={<FileText size={24} />} title="Relatório final" description="Documento consolidado e apresentação executiva para suporte a decisões e investidores." />
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