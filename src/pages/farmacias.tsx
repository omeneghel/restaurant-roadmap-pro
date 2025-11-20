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
        subtitle="Metodologia de <b>planos de negócios para farmácias</b> pela ECONOMICA — estratégia, viabilidade e planejamento para iniciar ou escalar seu negócio com segurança."
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
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `Um plano de negócios para farmácias organiza premissas de mercado, operação e finanças desde o início. Ao priorizar pesquisa e projeções, o documento revela riscos e oportunidades, apoiando decisões informadas e a definição de metas claras por meio de <b>análise</b> estruturada e linguagem acessível.` }} />
              
              <div className="space-y-6 mt-8">
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Financiamento e crédito</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Um plano de negócios para farmácias produz projeções e hipóteses claras sobre demanda, margens e caixa, reduzindo incertezas percebidas por potenciais financiadores. O documento conecta premissas de vendas ao investimento necessário, apresentando cenários e sensibilidade que sustentam pedidos de capital sem promessas ou garantias.` }} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Entrada de sócios</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Para atrair parceiros, o plano organiza visão, métricas e governança, expondo critérios de decisão, cenários e indicadores que baseiam negociações. Isso permite alinhar expectativas entre sócios sobre retorno, responsabilidades e prioridades, facilitando a discussão sobre aportes e participação sem comprometer a operação.` }} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Viabilidade</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `A viabilidade reúne premissas de demanda, capacidade de atendimento, estrutura de custos e política de preços para estimar ponto de equilíbrio e margens. O plano testa hipóteses com cenários e sensibilidade, conectando riscos a alavancas operacionais e financeiras que orientam decisões sobre continuidade ou ajustes no negócio.` }} />
                </div>
              </div>
            </Section>

            {/* Section: O que é importante na hora de construir um plano de negócios para farmácias? */}
            <Section id="o-que-e-importante" title="O que é importante na hora de construir um plano de negócios para farmácias?">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `Um plano eficiente integra mercado, marketing, operação e finanças com foco em execução e metas. Essa visão holística garante coerência entre oferta, canais e custos, facilitando priorizações. Use <b>método</b> para conectar hipóteses a indicadores e planos de ação rastreáveis.` }} />

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Pesquisa e Análise de Mercado</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Análise macroeconômica</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `No plano de negócios deve-se mapear o contexto macro que afeta consumo e poder de compra, identificando tendências que influenciam a demanda por produtos e serviços em farmácias. Essas variáveis alimentam cenários e premissas das projeções, permitindo testar alternativas frente a mudanças no ambiente econômico.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Setor e concorrência</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Mapear o setor de farmácias inclui identificar concorrentes, modelos de negócio e posicionamento para detectar diferenciais e lacunas. Benchmarks e comparáveis operacionais geram insights sobre preço, sortimento e serviços, apoiando decisões de posicionamento e mix que reduzem incertezas do investimento.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Público-alvo</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Definir público-alvo no plano permite compreender perfil, motivações e ticket médio esperado dos clientes de farmácias. Esse mapeamento conecta jornada de compra, critérios de escolha e sensibilidade a preço e canais, orientando metas de aquisição, retenção e segmentação de ofertas.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Região</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `A análise territorial detalha potencial local, fluxo de pessoas e acessibilidade, fatores cruciais para farmácias. No plano de negócios, essa avaliação orienta projeções de volume, sazonalidade e mix de produtos e serviços, além de apoiar a escolha do ponto e o dimensionamento da operação.` }} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Plano de Marketing</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">7 Ps</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Aplicar os 7 Ps (Produto, Preço, Praça, Promoção, Pessoas, Processos e Evidências) no plano de marketing ajuda a alinhar oferta e posicionamento à proposta de valor da farmácia. Cada dimensão deve refletir escolhas táticas e orçamentárias coerentes com o objetivo estratégico.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Canais</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O plano de negócios deve especificar canais de venda e aquisição para farmácias, incluindo loja física, atendimento local, parcerias e canais digitais. A estratégia de canais define como atrair, converter e reter clientes, equilibrando custo e alcance conforme o posicionamento.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Fidelização</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Estruturar programas de fidelização no plano de negócios conecta experiência, recorrência e relacionamento. Metas ligadas a LTV (lifetime value) e satisfação orientam iniciativas de retenção, frequência de compra e ofertas personalizadas para aumentar receita recorrente.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">KPIs</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `No plano de marketing do plano de negócios é essencial definir KPIs como CAC (custo de aquisição de cliente), LTV (valor do cliente ao longo do tempo), taxa de conversão, ROI (retorno sobre investimento) e indicadores de reputação. Esses indicadores orientam priorização e alocação de orçamento.` }} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Plano Operacional</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Layout e normas</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O plano operacional deve contemplar estudos de fluxo de atendimento, padronização de processos e requisitos internos que garantam eficiência. Para farmácias, atenção ao layout, exposição de produtos e logística interna impactam capacidade, custo e qualidade do serviço prestado.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">5W2H</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Incluir um 5W2H no plano de negócios organiza o que será feito, por que, quando, onde, por quem, quanto custa e como será medido. Essa ferramenta facilita cronogramas, responsáveis e estimativas de custo, aumentando previsibilidade da implementação das ações em farmácias.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Equipe</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Planejar composição e dimensionamento da equipe no plano conecta responsabilidades à demanda prevista e aos processos. Em farmácias, definir papéis de atendimento, gestão de estoque e administração assegura cobertura de turnos e qualidade no serviço sem sobrecarga de custo.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Tecnologia</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O plano deve mapear sistemas de gestão, integração de vendas e controles essenciais para uma operação eficiente. Para farmácias, soluções de PDV, gestão de estoque, compras e relatórios financeiros suportam tomada de decisão e ajudam a monitorar indicadores-chave.` }} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Plano Financeiro</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Custos</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O plano financeiro distingue custos fixos e variáveis e aborda CMV quando aplicável, conectando estrutura de custos a política de preços e margens. Essa análise permite entender alavancas de resultado e oportunidades de otimização na operação da farmácia.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Investimento</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O plano detalha itens de abertura, equipamentos e capital de giro, explicando como esses investimentos entram em cenários e prazos. Para farmácias, listar necessidades iniciais e cronograma de desembolso torna as projeções financeiras mais consistentes e rastreáveis.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Receitas</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Mapear receitas no plano de negócios envolve premissas de volume, preço e sazonalidade, além de segmentação por categorias de produtos e serviços. Cenários e premissas claras ajudam a modelar fluxo de caixa e testar sensibilidade a variações de demanda.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Indicadores</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `É fundamental projetar indicadores como breakeven (ponto de equilíbrio), payback (retorno do investimento), margens e fluxo de caixa no plano. Esses indicadores mostram impactos das premissas e identificam alavancas para melhorar a performance financeira da farmácia.` }} />
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            {/* Section: Plano estratégico */}
            <Section id="plano-estrategico" title="Plano estratégico">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `A síntese estratégica prioriza direcionadores e ações críticas a partir das análises do plano de negócios para farmácias, traduzindo dados em prioridades operacionais e financeiras. Esse resumo orienta decisões de curto e médio prazo com foco em execução e monitoramento de <b>resultados</b>.` }} />
              
              <div className="space-y-6 mt-8">
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">SWOT</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `A matriz SWOT organiza forças, fraquezas, oportunidades e ameaças para definir foco e mitigação em farmácias. No plano de negócios, essa ferramenta conecta diagnóstico a iniciativas estratégicas, indicando prioridades táticas e áreas que requerem atenção operacional ou de mercado.` }} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">BSC</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O BSC (Balanced Scorecard) reúne metas por perspectivas — financeira, clientes, processos internos e aprendizado — com indicadores e rotina de revisão. No plano de negócios, o BSC operacionaliza objetivos estratégicos, viabilizando execução e priorização com métricas claras.` }} />
                </div>
              </div>
            </Section>

            {/* Section: Análise de riscos */}
            <Section id="analise-de-riscos" title="Análise de riscos">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `A matriz de riscos combina probabilidade e impacto para priorizar ações de mitigação sem recorrer a termos regulatórios. No plano de negócios para farmácias, a avaliação qualitativa e as medidas propostas visam reduzir vulnerabilidades operacionais e financeiras por meio de <b>ações</b> práticas e monitoráveis.` }} />
            </Section>

            {/* Section: Por que contratar a ECONOMICA? */}
            <Section id="por-que-contratar" title="Por que contratar a ECONOMICA?">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `A ECONOMICA oferece metodologia clara e foco em diagnóstico para apoiar decisões estratégicas em farmácias, priorizando análise de dados e apresentação de cenários coerentes que facilitam escolha entre alternativas e promovem transparência no processo decisório.` }} />
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `Nossa experiência consolidada em consultoria empresarial atende negócios de diferentes portes, com histórico técnico e prática acadêmica integrada para projetos de planejamento e diagnóstico, sempre com abordagem metódica e orientada à tomada de decisão.` }} />
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `Somos formados por alunos da comunidade acadêmica do Instituto de Economia da UNICAMP e costumamos articular, quando apropriado, a colaboração de professores e especialistas para reforçar a qualidade analítica do trabalho.` }} />
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `O serviço de <b>Plano de Negócios</b> é um dos principais braços de atuação da ECONOMICA, reunindo experiência em elaboração de diagnósticos setoriais e planejamento que suportam decisões estratégicas em diversos nichos, incluindo farmácias.` }} />
            </Section>

            {/* Section: O que estará incluído no seu plano de negócios? */}
            <Section id="o-que-inclui" title="O que estará incluído no seu plano de negócios?">

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <FeatureCard icon={<Target size={24} />} title="Plano estratégico inicial" description="MVV e Canvas do negócio, com síntese dos direcionadores e proposições de valor essenciais." />
                <FeatureCard icon={<Search size={24} />} title="Pesquisa e mercado" description="Análise de tendências, público, concorrência e região, conectando insights a decisões práticas." />
                <FeatureCard icon={<Megaphone size={24} />} title="Plano de marketing" description="Definição dos 7 Ps, canais prioritários e KPIs para orientar execução e investimentos." />
                <FeatureCard icon={<Settings size={24} />} title="Plano operacional" description="Processos, equipe e tecnologia planejados para consistência operacional e escalabilidade." />
                <FeatureCard icon={<DollarSign size={24} />} title="Plano financeiro" description="Modelagem de custos, receitas e indicadores para subsidiar decisões de investimento." />
                <FeatureCard icon={<PieChart size={24} />} title="Plano estratégico final" description="SWOT e plano de metas com indicadores para orientar priorização e execução." />
                <FeatureCard icon={<Shield size={24} />} title="Análise de riscos" description="Matriz de riscos com medidas de mitigação e monitoramento prático." />
                <FeatureCard icon={<FileText size={24} />} title="Relatório final" description="Documento consolidado e apresentação executiva com recomendações e cenários." />
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