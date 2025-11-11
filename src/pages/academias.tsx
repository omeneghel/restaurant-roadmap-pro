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

const BusinessPlanAcademias = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Plano de Negócios para Academias | ECONOMICA"
        description="Entenda como o plano de negócios para academias estrutura decisões de mercado, operação e finanças com base em análise e método."
        canonical="https://economicajr.com.br/plano-de-negocios/academias"
      />
      
      <Header />
      <Hero 
        subtitle="Metodologia de <b>planos de negócios para academias</b> pela ECONOMICA — estratégia, viabilidade e planejamento para iniciar ou escalar seu negócio com segurança."
        title="Plano de Negócios para Academias: como fazer um para o seu negócio"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb 
          items={[
            { label: "Home", href: "/" },
            { label: "Plano de Negócios", href: "/plano-de-negocios" },
            { label: "Academias" }
          ]}
        />
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Content Column */}
          <div className="lg:col-span-2 space-y-0">
            {/* Section: Por que montar um plano de negócios para academias? */}
            <Section id="por-que-montar" title="Por que montar um plano de negócios para academias?">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `Um plano de negócios para academias é a base para decisões bem fundamentadas ao abrir ou expandir um empreendimento do setor. Ele organiza hipóteses de demanda, modelos de receita, estrutura de custos e canais de aquisição, conectando projeções financeiras a metas operacionais. Com esse documento é possível comparar cenários, avaliar riscos e priorizar investimentos com <b>clareza</b> para reduzir incertezas e alinhar sócios e parceiros.` }} />
              
              <div className="space-y-6 mt-8">
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Financiamento e crédito</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O plano de negócios atua como uma demonstração estruturada de viabilidade, traduzindo premissas de demanda, projeções de receita e modelos de custo em cenários coerentes. Isso reduz a assimetria de informação com potenciais financiadores, facilita a avaliação de risco e mostra de forma transparente a origem das hipóteses usadas para estimar fluxos e necessidades de capital em academias.` }} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Entrada de sócios</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Ao organizar visão, metas, métricas e cenários, o plano de negócios oferece um quadro objetivo para negociações com sócios e investidores. Ele esclarece participações esperadas, pontos de decisão, premissas financeiras e indicadores de desempenho, permitindo alinhar expectativas, demonstrar potenciais retornos e estabelecer critérios claros para governança em negócios de academias.` }} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Viabilidade</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Uma avaliação de viabilidade conecta estimativas de público, capacidade, custos e precificação, apontando o ponto de equilíbrio e margens esperadas. No plano de negócios essas hipóteses são testadas em cenários, com sensibilidade a variáveis-chave, o que ajuda a identificar as alavancas que mais impactam o resultado e orientar decisões de preço, mix de serviços e investimentos em academias.` }} />
                </div>
              </div>
            </Section>

            {/* Section: O que é importante na hora de construir um plano de negócios para academias? */}
            <Section id="o-que-e-importante" title="O que é importante na hora de construir um plano de negócios para academias?">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `Construir um plano exige visão integrada de mercado, marketing, operação e finanças, conectando estratégia e execução. O documento deve traduzir posicionamento e público em ações concretas, projetar resultados e priorizar alavancas de crescimento com <b>metodologia</b> e senso prático.` }} />

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Pesquisa e Análise de Mercado</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Análise macroeconômica</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `No plano de negócios é essencial avaliar fatores macro que afetam o consumo e o comportamento dos clientes de academias, como tendência de renda disponível e ciclos econômicos. Essa análise orienta premissas de demanda e elasticidade de preço, permitindo construir cenários plausíveis para projeções e decisões estratégicas.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Setor e concorrência</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Mapear concorrentes, propostas de valor e posicionamentos ajuda a identificar lacunas e oportunidades no mercado de academias. O plano usa benchmarks e comparáveis para calibrar preços, serviços e diferenciais, reduzindo a incerteza na definição do mix de ofertas e na escolha de canais de venda e comunicação.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Público-alvo</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Segmentar clientes e mapear jornadas é fundamental para definir ofertas, preços e canais de aquisição. O plano de negócios analisa perfis demográficos, motivações e ticket médio esperado, alinhando metas de aquisição e retenção a estratégias de comunicação e estruturação de serviços nas academias.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Região</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Analisar o potencial local, fluxo de pessoas, acessibilidade e concorrência por região permite estimar volumes e sazonalidade com maior precisão. O plano de negócios utiliza essa análise territorial para orientar dimensionamento de unidade, mix de horários, campanhas locais e projeções de receita para academias.` }} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Plano de Marketing</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">7 Ps</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Aplicar os 7 Ps (Produto, Preço, Praça, Promoção, Pessoas, Processos e Evidências) no plano de marketing garante coerência entre oferta e posicionamento da academia. Cada elemento influencia experiência, custo e percepção de valor, sendo essencial alinhá-los às metas financeiras e ao público alvo.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Canais</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Definir canais de aquisição e venda é parte central do plano de negócios: presença digital, parcerias locais, vendas diretas e promoções sazonais devem ser avaliadas segundo custo e eficácia. O plano prioriza canais com base em CAC esperado e capacidade de conversão para academias.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Fidelização</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Estruturar programas de retenção e experiências recorrentes impacta diretamente receita e LTV. O plano de negócios detalha rituais de relacionamento, metas de satisfação e iniciativas de retenção que aumentam recorrência de uso e reduzem churn em academias.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">KPIs</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Incluir CAC (Custo de Aquisição de Cliente), LTV (Valor do Tempo de Vida do Cliente), taxa de conversão, ROI e indicadores de reputação no plano de marketing permite priorizar investimentos e ajustar ações. Esses KPIs orientam orçamento, canais e ciclos de otimização para academias.` }} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Plano Operacional</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Layout e normas</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Planejar fluxo de atendimento, zonas de treinamento e padrões de operação impacta capacidade e custo. O plano de negócios descreve padronizações, requisitos internos e políticas de uso, conectando layout e processos à experiência do cliente e à eficiência operacional das academias.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">5W2H</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O 5W2H (What, Why, Where, When, Who, How, How much) organiza tarefas, cronogramas, responsáveis e custos dentro do plano de negócios. Aplicado a projetos de abertura ou melhorias, aumenta previsibilidade e facilita a execução de ações operacionais em academias.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Equipe</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Dimensionar equipe, funções e responsabilidades é parte do planejamento operacional. O plano de negócios define perfis, jornadas de trabalho e critérios de capacitação, alinhando headcount à demanda projetada e às metas de serviço e retenção em academias.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Tecnologia</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `É importante mapear sistemas de gestão, controle de acesso, CRM e integrações necessárias para operações e vendas. O plano de negócios descreve requisitos tecnológicos, custos e impactos na eficiência e na experiência do cliente nas academias.` }} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Plano Financeiro</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Custos</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O plano financeiro separa custos fixos e variáveis, além de itens específicos como manutenção de equipamentos e contratos de serviços, relacionando-os à precificação. Essa visão permite calcular margens reais e identificar oportunidades de redução de custo em academias.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Investimento</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Projetar itens de abertura, compra de equipamentos e capital de giro é essencial para estimar o desembolso inicial. O plano de negócios detalha esses elementos em cenários, informando prazos de retorno e necessidades de financiamento para academias.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Receitas</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Mapear fontes de receita — mensalidades, aulas avulsas, personal training e venda de produtos — ajuda a construir premissas de volume, preço e sazonalidade. O plano traz cenários rastreáveis para receitas e permite testar sensibilidade a variações de demanda nas academias.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Indicadores</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Calcular breakeven, payback, margens e fluxo de caixa é fundamental para decisões financeiras. O plano de negócios usa esses indicadores para mostrar como premissas e mudanças operacionais afetam resultados e onde estão as principais alavancas de desempenho em academias.` }} />
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            {/* Section: Plano estratégico */}
            <Section id="plano-estrategico" title="Plano estratégico">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `A síntese estratégica em um plano de negócios para academias reúne direcionadores, prioridades e metas para orientar execução e alocação de recursos. Esse resumo torna decisões mais transparentes e facilita a priorização de iniciativas com base em valor e impacto, mantendo foco nas alavancas que geram resultado com <b>objetividade</b>.` }} />
              
              <div className="space-y-6 mt-8">
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">SWOT</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `A matriz SWOT organiza forças, fraquezas, oportunidades e ameaças para orientar escolhas estratégicas. No contexto de academias, essa análise permite identificar diferenciais competitivos, riscos de mercado e oportunidades de expansão ou segmentação que devem orientar ações de curto e médio prazo.` }} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">BSC</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O Balanced Scorecard (BSC) traduz a estratégia em metas por perspectiva — financeira, clientes, processos e aprendizado — com indicadores e revisão periódica. No plano de negócios, o BSC viabiliza execução alinhada e priorização de iniciativas em academias.` }} />
                </div>
              </div>
            </Section>

            {/* Section: Análise de riscos */}
            <Section id="analise-de-riscos" title="Análise de riscos">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `A matriz de riscos (probabilidade x impacto) sistematiza ameaças e controles para planos de negócios para academias, apontando ações de mitigação e responsáveis. A avaliação busca priorizar riscos que mais afetam receita e operação, propondo medidas práticas e proporcionalidade na alocação de recursos para reduzir exposição com <b>pragmatismo</b>.` }} />
            </Section>

            {/* Section: Por que contratar a ECONOMICA? */}
            <Section id="por-que-contratar" title="Por que contratar a ECONOMICA?">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `A ECONOMICA entrega planos de negócios com método claro, escopo definido e foco em decisão. Nosso trabalho prioriza diagnóstico, cenários e recomendações práticas que permitem ao empreendedor entender trade-offs e escolher caminhos com <b>segurança</b>.` }} />
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `Com atuação contínua desde 1992, a ECONOMICA acumula ampla experiência em projetos de consultoria empresarial para diferentes portes. Nossa trajetória proporciona repertório técnico e metodológico para abordar desafios típicos do setor, com foco em qualidade analítica e viabilidade prática.` }} />
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `Formada por alunos do Instituto de Economia da UNICAMP, a ECONOMICA alia conhecimento acadêmico e prática consultiva. Quando pertinente, contamos com colaboração da comunidade docente para fortalecer análises e validar premissas, ampliando rigor e consistência técnica.` }} />
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `O serviço de <b>Plano de Negócios</b> é um dos pilares da ECONOMICA e reúne nossa experiência em diagnóstico, pesquisa e modelagem financeira aplicada a diversos nichos. Por isso entregamos documentos estruturados para apoiar decisões estratégicas e financeiras.` }} />
            </Section>

            {/* Section: O que estará incluído no seu plano de negócios? */}
            <Section id="o-que-inclui" title="O que estará incluído no seu plano de negócios?">

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <FeatureCard icon={<Target size={24} />} title="Plano estratégico inicial" description="Síntese de MVV (Missão, Visão, Valores) e Canvas do negócio, com direcionadores e foco nas opções estratégicas prioritárias." />
                <FeatureCard icon={<Search size={24} />} title="Pesquisa e mercado" description="Análise de tendências, público-alvo, concorrência e potencial regional, conectando insights a decisões operacionais e comerciais." />
                <FeatureCard icon={<Megaphone size={24} />} title="Plano de marketing" description="Definição dos 7 Ps, canais prioritários e KPIs para aquisição e retenção, com recomendações práticas de implementação." />
                <FeatureCard icon={<Settings size={24} />} title="Plano operacional" description="Descrição de processos, layout, equipe e tecnologia, com ações para garantir consistência e escalabilidade operacional." />
                <FeatureCard icon={<DollarSign size={24} />} title="Plano financeiro" description="Projeções de custos, receitas e indicadores-chave para suportar decisões de investimento e preços." />
                <FeatureCard icon={<PieChart size={24} />} title="Plano estratégico final" description="SWOT consolidada e plano de metas com indicadores, alinhando prioridades e métricas de desempenho." />
                <FeatureCard icon={<Shield size={24} />} title="Análise de riscos" description="Matriz de riscos com probabilidade e impacto, e medidas práticas de mitigação e monitoramento." />
                <FeatureCard icon={<FileText size={24} />} title="Relatório final" description="Documento consolidado com diagnóstico, cenários, recomendações e apresentação executiva para stakeholders." />
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

export default BusinessPlanAcademias;