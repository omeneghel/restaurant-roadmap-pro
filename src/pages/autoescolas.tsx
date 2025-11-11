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

const BusinessPlanAutoescolas = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Plano de Negócios para Autoescolas | ECONOMICA"
        description="Entenda como o plano de negócios para autoescolas estrutura decisões de mercado, operação e finanças com base em análise e método."
        canonical="https://economicajr.com.br/plano-de-negocios/autoescolas"
      />
      
      <Header />
      <Hero 
        subtitle="Metodologia de <b>planos de negócios para autoescolas</b> pela ECONOMICA — estratégia, viabilidade e planejamento para iniciar ou escalar seu negócio com segurança."
        title="Plano de Negócios para Autoescolas: como fazer um para o seu negócio"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb 
          items={[
            { label: "Home", href: "/" },
            { label: "Plano de Negócios", href: "/plano-de-negocios" },
            { label: "Autoescolas" }
          ]}
        />
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Content Column */}
          <div className="lg:col-span-2 space-y-0">
            {/* Section: Por que montar um plano de negócios para autoescolas? */}
            <Section id="por-que-montar" title="Por que montar um plano de negócios para autoescolas?">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `Ter um documento bem estruturado é essencial para quem pensa em abrir ou expandir autoescolas. Os <b>planos de negócios para autoescolas</b> organizam hipóteses sobre mercado, operação e finanças, permitindo comparar cenários, avaliar riscos e tomar decisões baseadas em evidência, não em suposições, com foco em clareza e prioridade.` }} />
              
              <div className="space-y-6 mt-8">
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Financiamento e crédito</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Um plano de negócios formaliza premissas e projeções que instituições financeiras e investidores avaliam. Para autoescolas, demonstrar coerência entre demanda projetada, capacidade de atendimento e fluxo de caixa reduz a incerteza percebida, facilitando a exposição dos riscos e das necessidades de capital de giro ou investimentos em frota e infraestrutura.` }} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Entrada de sócios</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Ao receber potenciais sócios, o plano organiza visão, metas e métricas de desempenho, servindo como base para negociação de participação e governança. Em autoescolas, documentar cenários, indicadores e critérios de decisão ajuda a alinhar expectativas, calcular retornos esperados e definir gatilhos de investimento e responsabilidades entre os parceiros.` }} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Viabilidade</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O processo de elaborar o plano testa hipóteses de demanda, capacidade, custos e precificação. Para autoescolas, isso inclui estimar turmas, utilização de veículos, horas-aula e margens por serviço; cruzar essas variáveis com custos fixos e variáveis clarifica o ponto de equilíbrio e as alavancas que tornam a operação sustentável.` }} />
                </div>
              </div>
            </Section>

            {/* Section: O que é importante na hora de construir um plano de negócios para autoescolas? */}
            <Section id="o-que-e-importante" title="O que é importante na hora de construir um plano de negócios para autoescolas?">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `Um plano eficaz conecta mercado, marketing, operação e finanças a objetivos estratégicos, garantindo que cada hipótese seja rastreável e testável. A construção deve priorizar clareza de premissas, cenários e indicadores para orientar decisões e permitir revisões rápidas conforme a realidade do mercado de autoescolas evolui; foque em <b>metodologia</b>.` }} />

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Pesquisa e Análise de Mercado</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Análise macroeconômica</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `No plano, a análise macro ajuda a contextualizar demanda por serviços de autoescolas, considerando renda disponível, emprego e mobilidade urbana. Para autoescolas, traduzir essas variáveis em premissas de volume e preço permite construir cenários conservador, base e otimista que orientam projeções financeiras e testes de sensibilidade.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Setor e concorrência</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Mapear concorrentes, posicionamento e diferenciais é essencial para definir oferta e preço. Em autoescolas, identificar segmentos pouco servidos, benchmarks de rendimento por aluno e práticas comerciais revela oportunidades de posicionamento, estratégias de preço e propostas de valor que reduzam a exposição a competição direta.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Público-alvo</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Segmentar público por perfil, motivação e sensibilidade a preço ou horário permite desenhar pacotes e canais de aquisição adequados. No plano, vincule perfil do aluno e jornada de compra a taxas de conversão esperadas, ticket médio e estratégias de retenção para transformar o entendimento de público em metas operacionais e de receita.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Região</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `A análise territorial informa capacidade potencial e sazonalidade de matrículas. Para autoescolas, avaliar fluxo local, acessibilidade e oferta de transporte define expectativas de volume por unidade, necessidade de turmas noturnas ou fins de semana e orienta decisões de ponto comercial e alocação de frota.` }} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Plano de Marketing</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">7 Ps</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Ao aplicar os 7 Ps — Produto, Preço, Praça, Promoção, Pessoas, Processos e Evidências — o plano de marketing do plano de negócios alinha oferta e experiência. Para autoescolas, isso significa definir pacotes de aulas, política de preço, pontos de atendimento, comunicação, perfil de instrutores e evidências que sustentem a reputação.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Canais</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Definir canais de aquisição é parte central do plano de marketing: presencial, digital, parcerias locais e indicações. Em um plano de negócios para autoescolas, priorize canais com maior custo-benefício, estabeleça hipóteses de conversão por canal e estime investimento inicial e recorrente para cada fonte de alunos.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Fidelização</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Fidelizar alunos e responsáveis aumenta LTV e reduz CAC no médio prazo. Estruture programas de retenção, pós-venda, avaliações de satisfação e rituais de relacionamento que promovam indicações e repetição de serviços em autoescolas, conectando metas de retenção a metas financeiras e operacionais.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">KPIs</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `No plano, defina métricas como CAC (Custo de Aquisição do Cliente), LTV (Valor do Tempo de Vida do Cliente), taxa de conversão de interessados em alunos, ROI das campanhas e índice de satisfação. Esses indicadores orientam priorização de canais, orçamento e ajustes operacionais para melhorar eficiência em autoescolas.` }} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Plano Operacional</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Layout e normas</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Planejar fluxo de atendimento, salas e pontos de embarque reduz atritos e custos. No plano operacional de autoescolas, estabeleça padrões de atendimento, inspeções de frota, checklists e procedimentos que assegurem qualidade, aumentem produtividade e permitam dimensionar capacidade com base em turmas e horas-aula.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">5W2H</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O 5W2H organiza tarefas com clareza: o quê, por que, quem, quando, onde, como e quanto custa. Incorporá-lo ao plano de negócios garante responsabilidades e prazos para implantação de processos, treinamento e compra de equipamentos, aumentando previsibilidade operacional em autoescolas.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Equipe</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Dimensionar equipe por função e carga horária conecta demanda a custos trabalhistas e à qualidade do serviço. No plano, detalhe perfis de instrutores, coordenação e atendimento, definindo turnos, capacitação mínima e critérios de produtividade para alinhar custos e metas de atendimento em autoescolas.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Tecnologia</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Defina sistemas de gestão, agendamento, controle de horas-aula e integração financeira no plano de negócios. Para autoescolas, mapear necessidades tecnológicas permite estimar custos de implantação, ganhos de eficiência e requisitos de treinamento, articulando tecnologia como alavanca operacional.` }} />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Plano Financeiro</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Custos</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `No plano, detalhe custos fixos e variáveis relacionados a aluguel, salários, manutenção de veículos, combustível e materiais de escritório. Entender esses componentes possibilita calcular margens por turma e por serviço, e avaliar quais custos são sensíveis à escala em autoescolas.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Investimento</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Mapeie itens de abertura como frota, sinalização, equipamentos e capital de giro. No plano de negócios, projete cenários de investimento com prazos e fontes, relacionando desembolsos a marcos operacionais e estimativas de retorno para que decisões de compra e financiamento sejam racionais.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Receitas</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Projete receitas por pacote, aulas avulsas, simulados e serviços complementares, considerando sazonalidade e mix de produtos. No plano, hipóteses de preço e volume devem ser rastreáveis e justificadas por pesquisa de mercado, permitindo comparar cenários e testar elasticidade de preço em autoescolas.` }} />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Indicadores</h4>
                      <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `Inclua breakeven (ponto de equilíbrio), payback e margens operacionais, além de fluxo de caixa projetado. Esses indicadores mostram como premissas impactam sustentabilidade financeira e quais alavancas (preço, volume, custo) geram maior efeito para melhorar resultado em autoescolas.` }} />
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            {/* Section: Plano estratégico */}
            <Section id="plano-estrategico" title="Plano estratégico">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `O plano estratégico consolida direcionadores e prioridades com metas e iniciativas vinculadas a recursos. Em planos de negócios para autoescolas, sintetize foco de crescimento, diferenciação e eficiência operacional, priorizando iniciativas que maximizem retorno e reduzam riscos operacionais com <b>clareza</b>.` }} />
              
              <div className="space-y-6 mt-8">
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">SWOT</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `A matriz SWOT organiza forças, fraquezas, oportunidades e ameaças para orientar escolhas estratégicas. No contexto de autoescolas, ela ajuda a priorizar ações que protejam diferenciais e explorem nichos ou lacunas de mercado, conectando análise a iniciativas mensuráveis.` }} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">BSC</h3>
                  <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: `O Balanced Scorecard traduz estratégia em metas por perspectiva: financeira, mercado, processos e aprendizado. Para autoescolas, defina indicadores claros e prazos de revisão que permitam acompanhar execução, priorizar projetos e ajustar alocação de recursos conforme desempenho.` }} />
                </div>
              </div>
            </Section>

            {/* Section: Análise de riscos */}
            <Section id="analise-de-riscos" title="Análise de riscos">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `A matriz de riscos (probabilidade x impacto) permite priorizar ações de mitigação sem abordar questões regulatórias. Em planos de negócios para autoescolas, identifique riscos comerciais, operacionais e financeiros, atribua responsáveis e ações mitigadoras, além de cenários de contingência para proteger a viabilidade do projeto com <b>racionalidade</b>.` }} />
            </Section>

            {/* Section: Por que contratar a ECONOMICA? */}
            <Section id="por-que-contratar" title="Por que contratar a ECONOMICA?">
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `A ECONOMICA entrega planos com método claro, escopo definido e foco em decisões. Nosso trabalho prioriza hipóteses rastreáveis, cenários e indicadores que tornam escolhas estratégicas mais seguras e apresentáveis a investidores e parceiros, com foco em <b>análise</b> e utilidade prática.` }} />
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `A ECONOMICA tem mais de 30 anos de atuação (desde 1992) em consultoria empresarial para pequenas, médias e grandes empresas, com mais de 100 projetos concluídos. Essa trajetória consolida práticas metodológicas e experiência na elaboração de planos de negócios aplicáveis a diferentes nichos.` }} />
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `Nossa equipe é formada por alunos e ex-alunos do Instituto de Economia da UNICAMP, com metodologia acadêmica aplicada ao mercado. Quando apropriado, contamos com colaboração de professores para aprofundar análises e enriquecer estudos com rigor técnico e relevância prática.` }} />
              <p className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: `O serviço de <b>Plano de Negócios</b> é um dos braços principais da ECONOMICA, resultado da maturidade técnica e experiência em consultorias para diversos nichos. Entregamos diagnósticos e planejamento que facilitam a tomada de decisão e a execução das fases iniciais do projeto.` }} />
            </Section>

            {/* Section: O que estará incluído no seu plano de negócios? */}
            <Section id="o-que-inclui" title="O que estará incluído no seu plano de negócios?">

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <FeatureCard icon={<Target size={24} />} title="Plano estratégico inicial" description="MVV e Canvas condensados em uma síntese de direcionadores e hipóteses prioritárias, apoiando decisões iniciais do negócio." />
                <FeatureCard icon={<Search size={24} />} title="Pesquisa e mercado" description="Mapeamento de tendências, público, concorrência e análise territorial para fundamentar premissas e cenários." />
                <FeatureCard icon={<Megaphone size={24} />} title="Plano de marketing" description="Estratégia com 7 Ps, canais priorizados e KPIs para aquisição, conversão e fidelização de alunos." />
                <FeatureCard icon={<Settings size={24} />} title="Plano operacional" description="Processos, layout, dimensionamento de equipe e recomendações tecnológicas para operação eficiente." />
                <FeatureCard icon={<DollarSign size={24} />} title="Plano financeiro" description="Projeções de custos, receitas, investimento e indicadores que suportam decisões financeiras." />
                <FeatureCard icon={<PieChart size={24} />} title="Plano estratégico final" description="SWOT consolidada e plano de metas com indicadores para guiar execução e priorização." />
                <FeatureCard icon={<Shield size={24} />} title="Análise de riscos" description="Matriz de riscos com ações mitigadoras e critérios para monitoramento de ameaças críticas." />
                <FeatureCard icon={<FileText size={24} />} title="Relatório final" description="Documento consolidado com apresentação executiva e anexos de suporte às premissas e projeções." />
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

export default BusinessPlanAutoescolas;