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
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `Os planos de negócios para academias orientam decisões sobre oferta, preço e capacidade, traduzindo hipóteses em números e prioridades. Um bom plano ajuda a reduzir incertezas e a comunicar a proposta de valor a investidores e parceiros, além de conectar metas operacionais e financeiras por meio de <b>análise</b> clara e metodológica.` }} />
              
              <div className="space-y-6 mt-8">
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Financiamento e crédito</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Um plano de negócios bem estruturado demonstra a viabilidade financeira da academia, explicitando premissas de demanda, projeção de receitas e custos. Isso reduz o risco percebido por financiadores e permite apresentar cenários coerentes que sustentem pedidos de crédito ou investimento, com clareza nas hipóteses e nos indicadores que importam.` }} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Entrada de sócios</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O documento organiza visão, metas e métricas, facilitando negociações entre sócios e potenciais parceiros. Ao apresentar cenários, critérios de avaliação e indicadores de performance, o plano alinha expectativas, define responsabilidades e serve como base para decisões de governança em processos de entrada de capital em academias.` }} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Viabilidade</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `A viabilidade é avaliada por meio de testes de premissas como preço médio, taxa de ocupação e custos fixos. O plano conecta esses elementos ao ponto de equilíbrio e às margens, permitindo identificar os gatilhos que tornam a academia sustentável e quais alavancas (preço, mix, retenção) têm maior impacto sobre o resultado.` }} />
                </div>
              </div>
            </Section>

            {/* Section: O que é importante na hora de construir um plano de negócios para academias? */}
            <Section id="o-que-e-importante" title="O que é importante na hora de construir um plano de negócios para academias?">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `Construir o plano exige visão integrada de mercado, marketing, operação e finanças, alinhada à estratégia da academia. A conexão entre essas áreas permite transformar análise em decisões práticas, priorizando investimentos e recursos com base em <b>evidências</b> e metas claras.` }} />

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Pesquisa e Análise de Mercado</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Análise macroeconômica</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O plano deve considerar variáveis macro que influenciam a demanda por academias, como renda disponível e consumo de serviços. Essas premissas ajudam a construir cenários e a ajustar projeções de adesão, frequência e ticket médio, permitindo estimativas mais realistas e sensíveis a mudanças de contexto.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Setor e concorrência</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Mapear concorrentes, posicionamento e diferenciais é essencial para entender oportunidades e lacunas locais. Benchmarks de preço, serviços oferecidos e mix ajudam a definir posicionamento competitivo e a calibrar a oferta da academia, reduzindo riscos de subestimação da concorrência.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Público-alvo</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Segmentar público por perfil, motivações e sensibilidade a preço permite desenhar ofertas e canais eficazes. Conhecer jornada e expectativas impacta metas de aquisição e retenção, além de permitir cálculo mais preciso do ticket e do potencial de receita recorrente por cliente.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Região</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `A análise territorial avalia fluxo, acessibilidade e características demográficas do entorno, informando a projeção de volume e sazonalidade. Entender o microambiente é determinante para dimensionar a capacidade, selecionar serviços e ajustar estratégias de preço e comunicação.` }} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Plano de Marketing</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">7 Ps</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `No plano de marketing é importante articular Produto, Preço, Praça, Promoção, Pessoas, Processos e Evidências, garantindo coerência entre oferta e posicionamento. Essa abordagem assegura que decisões de comunicação e operação suportem a proposta de valor definida para a academia.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Canais</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Definir canais de aquisição online e offline no plano de negócios ajuda a priorizar investimentos em mídia, parceiros e ações locais. A escolha de canais deve considerar custo por aquisição, alcance e aderência ao público-alvo para maximizar a eficiência do orçamento de marketing.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Fidelização</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Programas de retenção e experiências de uso aumentam recorrência e LTV. No plano devem constar estratégias de onboarding, atendimento e ofertas complementares que sustentem a retenção, além de metas de satisfação que suportem recomendações e renovação de contratos.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">KPIs</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O plano precisa definir indicadores como CAC (Custo de Aquisição de Clientes), LTV (Valor do Tempo de Vida do Cliente), taxa de conversão, ROI (Retorno sobre Investimento) e métricas de reputação. Esses KPIs orientam priorização, alocação de orçamento e ações de melhoria contínua.` }} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Plano Operacional</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Layout e normas</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Estudos de layout e fluxo de atendimento otimizam uso de espaço, capacidade e experiência do aluno. Padronização de processos e requisitos internos conectam qualidade e custo, contribuindo para maior eficiência operacional e consistência na entrega dos serviços da academia.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">5W2H</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Incluir um planejamento 5W2H (o que, por que, quem, quando, onde, como e quanto) organiza tarefas, cronogramas, responsáveis e custos. Esse instrumento aumenta previsibilidade e controle sobre a implementação de ações operacionais e de marketing na academia.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Equipe</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Dimensionar a equipe com base em demanda e jornadas de atendimento evita sobrecarga e garante padrão de serviço. O plano detalha funções, competências e escalas, alinhando custos de pessoal às metas de ocupação e à qualidade de entrega da academia.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Tecnologia</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Planejar sistemas de gestão, controle de acesso, agenda de aulas e integrações é essencial para operação escalável. A escolha de tecnologia deve priorizar simplicidade, integração de dados e suporte à tomada de decisão gerencial na academia.` }} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Plano Financeiro</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Custos</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O plano financeiro detalha custos fixos e variáveis, além de itens relacionados a manutenção e insumos. Conectar estrutura de custos a precificação e margens permite avaliar sustentabilidade e identificar oportunidades de redução de custo sem comprometer a qualidade do serviço.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Investimento</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Mapear investimentos iniciais em obras, equipamentos e capital de giro é fundamental para construir cenários realistas. Esses valores entram nos cálculos de payback e ponto de equilíbrio, orientando decisões sobre prazos e fontes de financiamento para a academia.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Receitas</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `As premissas de volume, preço e sazonalidade devem estar claramente documentadas, com cenários alternativos. O plano descreve fontes de receita (mensalidades, planos avulsos, aulas especializadas) e estima variações por estação e campanhas.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Indicadores</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Mapear breakeven, payback, margens e fluxo de caixa permite avaliar riscos e sensibilidade das premissas. Esses indicadores mostram como alterações em ocupação, preço ou custos impactam a saúde financeira da academia e quais alavancas priorizar.` }} />
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            {/* Section: Plano estratégico */}
            <Section id="plano-estrategico" title="Plano estratégico">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `A síntese estratégica prioriza diretores e iniciativas que geram maior impacto no resultado da academia. Um resumo com objetivos, alavancas e metas facilita comunicação e tomada de decisão, conectando análise a execução com <b>foco</b> nas prioridades identificadas.` }} />
              
              <div className="space-y-6 mt-8">
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">SWOT</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `A matriz SWOT organiza forças, fraquezas, oportunidades e ameaças, servindo de base para escolhas estratégicas. Em academias, essa análise identifica vantagens competitivas e riscos externos, orientando ações para explorar oportunidades e mitigar pontos críticos.` }} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">BSC</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O Balanced Scorecard traduz objetivos em metas por perspectivas (financeira, clientes, processos e aprendizado), com indicadores e frequência de revisão. Em academias, o BSC ajuda a balancear crescimento de receita com qualidade operacional e desenvolvimento da equipe.` }} />
                </div>
              </div>
            </Section>

            {/* Section: Análise de riscos */}
            <Section id="analise-de-riscos" title="Análise de riscos">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `A matriz de riscos avalia probabilidade e impacto para priorizar mitigação, transformando incertezas em plano de ações. No contexto de planos de negócios para academias, essa abordagem identifica riscos operacionais e de demanda e propõe medidas de redução e contingência com <b>praticidade</b>.` }} />
            </Section>

            {/* Section: Por que contratar a ECONOMICA? */}
            <Section id="por-que-contratar" title="Por que contratar a ECONOMICA?">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `A ECONOMICA oferece método estruturado que prioriza clareza de escopo e suporte à decisão. Nosso foco é diagnóstico e planejamento, entregando análises que tornam escolhas mais seguras e defensáveis para investidores e gestores de academias.` }} />
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `A ECONOMICA tem mais de 30 anos de atuação (desde 1992) em consultoria empresarial para empresas de diferentes portes e já concluiu mais de 100 projetos, acumulando experiência em análises, projeções e estudos de viabilidade aplicáveis a academias.` }} />
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `Formada por alunos do Instituto de Economia da UNICAMP, a ECONOMICA alia vivência acadêmica e método analítico. Quando necessário, conta com a colaboração da comunidade de professores para revisões e aportes técnico-metodológicos.` }} />
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `O serviço de <b>Plano de Negócios</b> é um dos principais braços de atuação da ECONOMICA, apoiando decisões estratégicas em inúmeros nichos, incluindo academias, com entregas focadas em diagnósticos, cenários e recomendações para tomada de decisão.` }} />
            </Section>

            {/* Section: O que estará incluído no seu plano de negócios? */}
            <Section id="o-que-inclui" title="O que estará incluído no seu plano de negócios?">

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <FeatureCard icon={<Target size={24} />} title="Plano estratégico inicial" description="Síntese do MVV e Canvas do negócio, destacando direcionadores e prioridades estratégicas para a academia." />
                <FeatureCard icon={<Search size={24} />} title="Pesquisa e mercado" description="Análise de tendências, público, concorrência e região com insights que orientam posicionamento e oferta." />
                <FeatureCard icon={<Megaphone size={24} />} title="Plano de marketing" description="Definição dos 7 Ps, canais de aquisição e KPIs para priorizar ações e orçamentos." />
                <FeatureCard icon={<Settings size={24} />} title="Plano operacional" description="Processos, layout, equipe e tecnologia para garantir consistência operacional e escala." />
                <FeatureCard icon={<DollarSign size={24} />} title="Plano financeiro" description="Detalhamento de custos, receitas e indicadores financeiros para suportar decisões." />
                <FeatureCard icon={<PieChart size={24} />} title="Plano estratégico final" description="SWOT consolidada e plano de metas (BSC) com prioridades e indicadores." />
                <FeatureCard icon={<Shield size={24} />} title="Análise de riscos" description="Matriz de riscos com medidas de mitigação e contingência aplicadas à academia." />
                <FeatureCard icon={<FileText size={24} />} title="Relatório final" description="Documento consolidado e apresentação com recomendações e cenários para a tomada de decisão." />
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