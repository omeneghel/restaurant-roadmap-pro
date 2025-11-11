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

const BusinessPlanDistribuidorasdeBebidas = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Plano de Negócios para Distribuidoras de Bebidas | ECONOMICA"
        description="Entenda como o plano de negócios para distribuidoras de bebidas estrutura decisões de mercado, operação e finanças com base em análise e método."
        canonical="https://economicajr.com.br/plano-de-negocios/distribuidoras-de-bebidas"
      />
      
      <Header />
      <Hero 
        subtitle="Metodologia de <b>planos de negócios para distribuidoras de bebidas</b> pela ECONOMICA — estratégia, viabilidade e planejamento para iniciar ou escalar seu negócio com segurança."
        title="Plano de Negócios para Distribuidoras de Bebidas: como fazer um para o seu negócio"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Plano de Negócios", href: "/plano-de-negocios" }, { label: "Distribuidoras de Bebidas" }]}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb 
          items={[
            { label: "Home", href: "/" },
            { label: "Plano de Negócios", href: "/plano-de-negocios" },
            { label: "Distribuidoras de Bebidas" }
          ]}
        />
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Content Column */}
          <div className="lg:col-span-2 space-y-0">
            {/* Section: Por que montar um plano de negócios para distribuidoras de bebidas? */}
            <Section id="por-que-montar" title="Por que montar um plano de negócios para distribuidoras de bebidas?">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `Os <b>planos de negócios para distribuidoras de bebidas</b> orientam decisões sobre mix de produtos, canais e investimento inicial, conectando pesquisa de mercado a premissas financeiras. Este documento reduz incertezas ao estruturar demanda, custos e cenários, permitindo escolhas estratégicas para abrir ou ampliar uma distribuidora com informação e foco.` }} />
              
              <div className="space-y-6 mt-8">
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Financiamento e crédito</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Um plano bem estruturado demonstra <b>coerência</b> entre projeções e operações, facilitando o diálogo com fontes de financiamento. Para distribuidoras de bebidas, ele explicita premissas de receita, sazonalidade e capacidade logística, reduzindo o risco percebido por credores ao mostrar cenários e indicadores claros que sustentam pedidos de capital.` }} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Entrada de sócios</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O documento organiza visão, métricas e governança, criando um quadro objetivo para negociação entre sócios. Em distribuidoras de bebidas, o plano descreve cenários, critérios de valuation e indicadores operacionais que alinham expectativas, facilitando acordos sobre aportes, participação e responsabilidades com base em dados e premissas explícitas.` }} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Viabilidade</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O plano testa hipóteses de demanda, capacidade e precificação, conectando custos fixos e variáveis ao ponto de equilíbrio. Para distribuidoras de bebidas, isso significa verificar margens por categoria, impacto da sazonalidade e sensibilidade ao preço, fornecendo uma visão prática sobre quais alavancas operacionais e comerciais geram viabilidade.` }} />
                </div>
              </div>
            </Section>

            {/* Section: O que é importante na hora de construir um plano de negócios para distribuidoras de bebidas? */}
            <Section id="o-que-e-importante" title="O que é importante na hora de construir um plano de negócios para distribuidoras de bebidas?">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `Um plano eficaz integra mercado, marketing, operação e finanças em torno de prioridades estratégicas. A partir da pesquisa e de indicadores, cria-se um roteiro pragmático para oferta, canais e capacidade logística, garantindo que decisões comerciais tenham base em <b>dados</b> e metas mensuráveis.` }} />

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Pesquisa e Análise de Mercado</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Análise macroeconômica</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `No plano, a análise macro mostra tendências de consumo e poder de compra que afetam a demanda por bebidas. Para distribuidoras de bebidas, é crucial traduzir variáveis econômicas em premissas de volume e ticket, usando cenários que informem projeções e reduzam vieses nas decisões de investimento.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Setor e concorrência</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Mapear concorrentes e posicionamento revela lacunas de oferta e oportunidades de diferenciação. Em distribuidoras de bebidas, benchmarks ajudam a calibrar preços, mix e serviços, apontando onde competir por preço, atendimento ou especialização por categoria, com base em comparáveis do mercado.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Público-alvo</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Identificar perfis, motivações e ticket médio orienta mix e canais de vendas. No plano para distribuidoras de bebidas, esse mapeamento define prioridades de aquisição e retenção, além de clarificar sensibilidade a preço e canais preferidos por consumidores finais e clientes B2B.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Região</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `A análise territorial avalia potencial local, fluxo e acessibilidade, essenciais para projeções de volume e sazonalidade. Para distribuidoras de bebidas, entender a dinâmica da região orienta decisões sobre cobertura de entrega, estoques estratégicos e mix de produtos adaptado às preferências locais.` }} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Plano de Marketing</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">7 Ps</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `No plano de marketing, os 7 Ps (Produto, Preço, Praça, Promoção, Pessoas, Processos e Evidências) articulam oferta e posicionamento. Para distribuidoras de bebidas, essa visão integra sortimento, política de preços, canais de venda e nível de serviço, alinhando execução ao objetivo estratégico da empresa.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Canais</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Definir canais de aquisição e venda é central para o desempenho. Em distribuidoras de bebidas, o plano avalia atacado, varejo, e-commerce e parcerias comerciais, priorizando canais por custo de aquisição, cobertura geográfica e capacidade logística para maximizar receita e eficiência.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Fidelização</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Estruturar programas de retenção aumenta recorrência e ticket médio. No contexto de distribuidoras de bebidas, o plano detalha ações de relacionamento, promoções e contratos que promovem <b>recorrência</b>, vinculando metas de LTV (valor do cliente ao longo do tempo) e satisfação a táticas concretas.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">KPIs</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O plano define KPIs como CAC (Custo de Aquisição de Cliente), LTV (Lifetime Value), taxa de conversão, ROI e reputação, orientando priorização e orçamento. Para distribuidoras de bebidas, esses indicadores ajudam a ajustar canais, promoções e mix, permitindo decisões iterativas e mensuráveis.` }} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Plano Operacional</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Layout e normas</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Planejar fluxo de atendimento, estoques e padronização aumenta eficiência e reduz custo. Em distribuidoras de bebidas, detalhar áreas de armazenamento, separação e expedição conecta capacidade física ao volume esperado, garantindo qualidade e custo compatível com metas de serviço.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">5W2H</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O 5W2H organiza ações por O quê, Por quê, Quem, Quando, Onde, Como e Quanto. No plano de negócios, essa ferramenta torna tarefas e prazos transparentes, aumentando previsibilidade operacional em distribuidoras de bebidas e facilitando a execução do projeto inicial.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Equipe</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Dimensionar equipe e responsabilidades é parte do plano operacional, ligado à demanda e processos. Para distribuidoras de bebidas, definir papéis em compras, logística, vendas e atendimento permite alinhar custos de pessoal às metas de serviço e ao volume projetado.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Tecnologia</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Planejar sistemas de gestão, integrações e controles é essencial para operação escalável. Em distribuidoras de bebidas, o plano indica ERPs, soluções de roteirização e controle de estoque necessários para acoplar vendas, logística e financeiro com <b>visibilidade</b> e rastreabilidade.` }} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Plano Financeiro</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Custos</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O plano detalha custos fixos, variáveis e CMV quando aplicável, conectando estrutura de custos a precificação e margens pretendidas. Para distribuidoras de bebidas, é fundamental discriminar fretes, armazenagem e perdas para definir preços e políticas comerciais consistentes.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Investimento</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Mapear itens de abertura, equipamentos e capital de giro permite testar cenários e prazos de retorno. No plano financeiro, esses elementos são incorporados em projeções que mostram necessidades de caixa e alternativas de financiamento para a operação inicial da distribuidora.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Receitas</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Estimar receitas envolve premissas de volume, preço e sazonalidade, com cenários pessimista, base e otimista. Para distribuidoras de bebidas, essa modelagem rastreável permite entender sensibilidade ao mix de produtos e ajustar metas comerciais e de estoque.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Indicadores</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Mapear breakeven, payback, margens e fluxo de caixa mostra impactos de premissas e identifica alavancas de resultado. No plano de negócios para distribuidoras de bebidas, esses indicadores orientam decisões sobre preços, escala operacional e timing de investimentos.` }} />
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            {/* Section: Plano estratégico */}
            <Section id="plano-estrategico" title="Plano estratégico">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `A síntese estratégica prioriza direcionadores e iniciativas que geram valor, conectando análise a execução. Em um plano de negócios para distribuidoras de bebidas, a estratégia define foco competitivo, metas e projetos críticos, traduzindo análise em um roadmap claro e com <b>prioridades</b> bem definidas.` }} />
              
              <div className="space-y-6 mt-8">
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">SWOT</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `A matriz SWOT organiza forças, fraquezas, oportunidades e ameaças para orientar escolhas e mitigação. Para distribuidoras de bebidas, essa análise conecta diagnóstico a ações estratégicas, destacando alavancas competitivas e áreas que exigem atenção para suportar a execução.` }} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">BSC</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O Balanced Scorecard traduz metas em perspectivas financeiras, mercado, processos e aprendizado, com indicadores e cadência de revisão. No contexto de distribuidoras de bebidas, o BSC viabiliza a priorização de iniciativas e monitora execução em indicadores alinhados às metas estratégicas.` }} />
                </div>
              </div>
            </Section>

            {/* Section: Análise de riscos */}
            <Section id="analise-de-riscos" title="Análise de riscos">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `A matriz de riscos cruza probabilidade e impacto para priorizar mitigação e contingência. Em planos de negócios para distribuidoras de bebidas, essa avaliação aponta riscos operacionais, comerciais e financeiros, propondo ações práticas de redução de exposição e monitoramento com <b>controles</b> claros.` }} />
            </Section>

            {/* Section: Por que contratar a ECONOMICA? */}
            <Section id="por-que-contratar" title="Por que contratar a ECONOMICA?">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `A ECONOMICA entrega metodologia estruturada, clareza de escopo e insumos para tomada de decisão, com foco em diagnóstico e planejamento prático. Nosso trabalho prioriza premissas rastreáveis e cenários que apoiem escolhas de investimento e estratégia para distribuidoras de bebidas.` }} />
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `A ECONOMICA tem mais de 30 anos de atuação (desde 1992) em consultoria empresarial e experiência em projetos para empresas de variados portes, somando mais de 100 projetos concluídos. Essa trajetória garante conhecimento metodológico e aplicação prática em planos de negócios.` }} />
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `Somos formados por alunos da comunidade acadêmica do Instituto de Economia da UNICAMP e, quando aplicável, contamos com a colaboração de professores da instituição, integrando pesquisa e método acadêmico à prática consultiva em projetos para distribuidoras de bebidas.` }} />
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `O serviço de <b>Plano de Negócios</b> é um dos principais braços de atuação da ECONOMICA, apoiado por experiência em consultorias para diversos nichos, o que permite oferecer diagnósticos e projeções alinhadas às necessidades estratégicas de cada distribuidora.` }} />
            </Section>

            {/* Section: O que estará incluído no seu plano de negócios? */}
            <Section id="o-que-inclui" title="O que estará incluído no seu plano de negócios?">

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <FeatureCard icon={<Target size={24} />} title="Plano estratégico inicial" description="MVV e Canvas do negócio, com síntese das prioridades estratégicas e direcionadores de valor para a distribuidora." />
                <FeatureCard icon={<Search size={24} />} title="Pesquisa e mercado" description="Mapeamento de tendências, público, concorrência e análise regional que conectam insights a decisões práticas." />
                <FeatureCard icon={<Megaphone size={24} />} title="Plano de marketing" description="Adoção dos 7 Ps, definição de canais prioritários e KPIs para orientar execução e alocação de recursos." />
                <FeatureCard icon={<Settings size={24} />} title="Plano operacional" description="Descrição de processos, layout, equipe e tecnologia para operação consistente e escalável." />
                <FeatureCard icon={<DollarSign size={24} />} title="Plano financeiro" description="Projeções de custos, receitas e indicadores que suportam decisões de investimento e pricing." />
                <FeatureCard icon={<PieChart size={24} />} title="Plano estratégico final" description="SWOT consolidada e plano de metas com BSC para monitorar execução e priorização." />
                <FeatureCard icon={<Shield size={24} />} title="Análise de riscos" description="Matriz de riscos com ações de mitigação e controles para reduzir exposição dos principais vetores." />
                <FeatureCard icon={<FileText size={24} />} title="Relatório final" description="Documento consolidado e apresentação executiva com insumos para tomada de decisão." />
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

export default BusinessPlanDistribuidorasdeBebidas;