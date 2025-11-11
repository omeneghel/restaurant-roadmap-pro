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
  CheckCircle2,
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
        subtitle="Metodologia de <strong>planos de negócios para pizzarias</strong> pela ECONOMICA — estratégia, viabilidade e planejamento para iniciar ou escalar seu negócio com segurança."
        title="Plano de Negócios para Pizzarias: como fazer um para o seu negócio"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Plano de Negócios", href: "/plano-de-negocios" },
            { label: "Pizzarias" },
          ]}
        />
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Content Column */}
          <div className="lg:col-span-2 space-y-0">
            {/* Section: Por que montar um plano de negócios para pizzarias? */}
            <Section id="por-que-montar" title="Por que montar um plano de negócios para pizzarias?">
              <p
                className="text-foreground leading-relaxed mb-6"
                dangerouslySetInnerHTML={{
                  __html: `Os <strong>planos de negócios para pizzarias</strong> organizam informações essenciais para decisões sobre localização, formato de atendimento e mix de canais. Um plano bem estruturado traduz hipóteses de demanda em projeções financeiras e operacionais, permitindo avaliar cenários, identificar alavancas de resultado e reduzir incertezas antes do investimento. Com ele, proprietários e investidores têm um diagnóstico claro sobre viabilidade e prioridades estratégicas.`,
                }}
              />

              <div className="space-y-6 mt-8">
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Financiamento e crédito</h3>
                  <p
                    className="text-foreground leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: `Um plano de negócios para pizzarias demonstra coerência entre premissas de demanda, capacidade produtiva e projeções financeiras, facilitando a apresentação para financiadores. Ele descreve suposições, estimativas de fluxo de caixa e necessidades de capital, reduzindo o risco percebido pelo credor e mostrando onde estão as principais alavancas de retorno e mitigação.`,
                    }}
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Entrada de sócios</h3>
                  <p
                    className="text-foreground leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: `Ao estruturar visão, metas e métricas, o plano organiza critérios para atração e negociação com sócios. Ele define cenários, indicadores e governança proposta, deixando explícitos papéis, aportes e expectativas de retorno, o que facilita acordos e evita desalinhamentos em negócios de pizzarias.`,
                    }}
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Viabilidade</h3>
                  <p
                    className="text-foreground leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: `O plano testa hipóteses sobre demanda, mix de vendas, capacidade de produção e estrutura de custos, conectando precificação a margens e ponto de equilíbrio. Com cenários sensíveis a volume e sazonalidade, o documento mostra onde estão os riscos e quais mudanças impactam viabilidade em pizzarias.`,
                    }}
                  />
                </div>
              </div>
            </Section>

            {/* Section: O que é importante na hora de construir um plano de negócios para pizzarias? */}
            <Section
              id="o-que-e-importante"
              title="O que é importante na hora de construir um plano de negócios para pizzarias?"
            >
              <p
                className="text-foreground leading-relaxed mb-6"
                dangerouslySetInnerHTML={{
                  __html: `O plano deve integrar mercado, marketing, operação e finanças em torno de uma estratégia clara, destacando prioridades e trade-offs. A visão holística permite alinhar investimento, capacidade e posicionamento com metas de crescimento e rentabilidade, trazendo <strong>clareza</strong> para decisões.`,
                }}
              />

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Pesquisa e Análise de Mercado</h3>

                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Análise macroeconômica</h4>
                      <p
                        className="text-foreground leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: `A análise macro contextualiza decisões de preço e volume em pizzarias ao considerar renda, emprego e comportamento de consumo. No plano, essas variáveis orientam cenários e premissas de demanda, mostrando como mudanças no poder de compra e nas tendências de alimentação impactam vendas e estratégias.`,
                        }}
                      />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Setor e concorrência</h4>
                      <p
                        className="text-foreground leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: `Mapear o setor e os concorrentes identifica posicionamentos e lacunas exploráveis em pizzarias. Benchmarks de preço, formatos e diferenciais ajudam a definir ofertas e canais, reduzindo incertezas e orientando decisões sobre mix, atendimento e vantagem competitiva.`,
                        }}
                      />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Público-alvo</h4>
                      <p
                        className="text-foreground leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: `Definir público-alvo permite conectar jornadas, ticket médio e sensibilidade a preço/canais. No plano, segmentação orienta comunicação, mix de produtos e metas de aquisição e retenção, além de calibrar expectativas sobre frequência e ticket por cliente.`,
                        }}
                      />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Região</h4>
                      <p
                        className="text-foreground leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: `A análise territorial detalha fluxo de pedestres, acesso por delivery e perfil de consumo local. No plano de negócios, essa informação suporta projeções de volume, define mix e horários operacionais e aponta necessidades de adaptação ao comportamento da região.`,
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Plano de Marketing</h3>

                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">7 Ps</h4>
                      <p
                        className="text-foreground leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: `No plano de marketing do plano de negócios, os 7 Ps (Produto, Preço, Praça, Promoção, Pessoas, Processos e Evidências) orientam decisões sobre posicionamento, oferta e experiência em pizzarias, alinhando as ações ao público e às metas financeiras.`,
                        }}
                      />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Canais</h4>
                      <p
                        className="text-foreground leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: `O plano define os canais de venda e aquisição mais adequados para pizzarias, como salão, delivery próprio, marketplaces e eventos locais, indicando alocação de orçamento e prioridades para cada canal conforme custo e retorno esperado.`,
                        }}
                      />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Fidelização</h4>
                      <p
                        className="text-foreground leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: `Estruturar programas de fidelização e iniciativas de retenção no plano conecta experiência e recorrência, definindo métricas de satisfação e metas de LTV (lifetime value) para aumentar frequência e receita por cliente.`,
                        }}
                      />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">KPIs</h4>
                      <p
                        className="text-foreground leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: `Incluir CAC (custo de aquisição de cliente), LTV (valor do cliente ao longo do tempo), taxa de conversão, ROI (retorno sobre investimento) e reputação permite priorizar ações e ajustar orçamento. Esses indicadores orientam otimizações contínuas do mix e dos canais em pizzarias.`,
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Plano Operacional</h3>

                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Layout e normas</h4>
                      <p
                        className="text-foreground leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: `Planejar fluxo de atendimento e padronização reduz tempo de serviço e custo por pedido em pizzarias. O plano operacional articula capacidade, tempos de preparo e requisitos internos para garantir qualidade e consistência com eficiência de custo.`,
                        }}
                      />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">5W2H</h4>
                      <p
                        className="text-foreground leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: `O 5W2H (o que, por que, quem, quando, onde, quanto e como) organiza tarefas, cronogramas, responsáveis e custos no plano de negócios, aumentando previsibilidade operacional e facilitando a implementação de processos em pizzarias.`,
                        }}
                      />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Equipe</h4>
                      <p
                        className="text-foreground leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: `Dimensionar equipe e responsabilidades é essencial para atender demanda prevista. O plano define cargos, cargas horárias e critérios de performance, alinhando número de profissionais à demanda por turnos e à complexidade do cardápio em pizzarias.`,
                        }}
                      />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Tecnologia</h4>
                      <p
                        className="text-foreground leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: `Planejar sistemas de gestão, integrações com plataformas de delivery e controles de estoque no plano garante rastreabilidade e eficiência. A escolha tecnológica impacta custos, velocidade de atendimento e qualidade do controle operacional em pizzarias.`,
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Plano Financeiro</h3>

                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Custos</h4>
                      <p
                        className="text-foreground leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: `O plano detalha custos fixos, variáveis e o custo de mercadoria vendida (CMV) quando aplicável, conectando estruturas de custo à formação de preço e à margem. Esse mapeamento permite identificar oportunidades de redução e otimização.`,
                        }}
                      />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Investimento</h4>
                      <p
                        className="text-foreground leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: `São listados itens de abertura, equipamentos e capital de giro, além de prazos de desembolso. No plano de negócios, esses valores entram em cenários que mostram necessidade de financiamento e horizonte de retorno do investimento em pizzarias.`,
                        }}
                      />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Receitas</h4>
                      <p
                        className="text-foreground leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: `Premissas de volume, preço e sazonalidade são detalhadas com cenários conservador, base e otimista, permitindo rastreabilidade das hipóteses e entendimento de como variações de demanda afetam receitas em pizzarias.`,
                        }}
                      />
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Indicadores</h4>
                      <p
                        className="text-foreground leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: `Mapear breakeven, payback, margens e fluxo de caixa demonstra sensibilidade das premissas. Esses indicadores mostram quais alavancas — preço, mix ou volume — terão maior impacto nos resultados financeiros de pizzarias.`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            {/* Section: Plano estratégico */}
            <Section id="plano-estrategico" title="Plano estratégico">
              <p
                className="text-foreground leading-relaxed mb-6"
                dangerouslySetInnerHTML={{
                  __html: `A síntese estratégica prioriza direcionadores e metas que guiarão investimento e operação no curto e médio prazo. Um resumo com objetivos claros e iniciativas prioritárias oferece <strong>foco</strong> para execução e revisão das hipóteses do plano de negócios para pizzarias.`,
                }}
              />

              <div className="space-y-6 mt-8">
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">SWOT</h3>
                  <p
                    className="text-foreground leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: `A matriz SWOT organiza forças, fraquezas, oportunidades e ameaças para apontar onde concentrar recursos e mitigação. Em pizzarias, ela ajuda a transformar análise de mercado em escolhas práticas sobre posicionamento, canais e diferenciação competitiva.`,
                    }}
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">BSC</h3>
                  <p
                    className="text-foreground leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: `O Balanced Scorecard (BSC) traduz estratégia em metas por perspectivas (financeira, mercado, processos e aprendizado), com indicadores e frequência de revisão, viabilizando priorização e acompanhamento das iniciativas definidas no plano.`,
                    }}
                  />
                </div>
              </div>
            </Section>

            {/* Section: Análise de riscos */}
            <Section id="analise-de-riscos" title="Análise de riscos">
              <p
                className="text-foreground leading-relaxed mb-6"
                dangerouslySetInnerHTML={{
                  __html: `A matriz de riscos cruza probabilidade e impacto para priorizar ações de mitigação e contingência no plano. Em planos de negócios para pizzarias, essa abordagem identifica riscos operacionais, de demanda e financeiros e propõe medidas práticas de redução de exposição sem recorrer a jargões técnicos.`,
                }}
              />
            </Section>

            {/* Section: Por que contratar a ECONOMICA? */}
            <Section id="por-que-contratar" title="Por que contratar a ECONOMICA?">
              <p
                className="text-foreground leading-relaxed mb-6"
                dangerouslySetInnerHTML={{
                  __html: `A ECONOMICA entrega plano de negócios com método e clareza de escopo, oferecendo diagnóstico e cenários que facilitam a tomada de decisão. Nosso foco é apresentar informações acionáveis e premissas transparentes para orientar investimentos em pizzarias.`,
                }}
              />
              <p
                className="text-foreground leading-relaxed mb-6"
                dangerouslySetInnerHTML={{
                  __html: `A ECONOMICA tem mais de 30 anos de atuação (desde 1992) em consultoria empresarial e traz experiência prática em projetos para empresas de diferentes portes, com histórico de mais de 100 projetos concluídos, aplicando método acadêmico e análise rigorosa.`,
                }}
              />
              <p
                className="text-foreground leading-relaxed mb-6"
                dangerouslySetInnerHTML={{
                  __html: `Somos formados por alunos da comunidade do Instituto de Economia da UNICAMP, o que garante fundamentação analítica e acesso a revisões acadêmicas. Quando adequado, contamos com contribuições de professores e especialistas ligados à instituição.`,
                }}
              />
              <p
                className="text-foreground leading-relaxed mb-6"
                dangerouslySetInnerHTML={{
                  __html: `O serviço de <strong>Plano de Negócios</strong> é um dos principais produtos da ECONOMICA, apoiado pela experiência acumulada em consultorias a diversos nichos, incluindo o desenvolvimento de planejamentos e diagnósticos voltados para pizzarias.`,
                }}
              />
            </Section>

            {/* Section: O que estará incluído no seu plano de negócios? */}
            <Section id="o-que-inclui" title="O que estará incluído no seu plano de negócios?">
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <FeatureCard
                  icon={<Target size={24} />}
                  title="Plano estratégico inicial"
                  description="MVV e Canvas do negócio em síntese, com direcionadores de valor e prioridades estratégicas para orientar decisões."
                />
                <FeatureCard
                  icon={<Search size={24} />}
                  title="Pesquisa e mercado"
                  description="Análise de tendências, público, concorrência e região, conectando insights de mercado a decisões práticas."
                />
                <FeatureCard
                  icon={<Megaphone size={24} />}
                  title="Plano de marketing"
                  description="Estrutura dos 7 Ps, canais prioritários e KPIs para aquisição, conversão e retenção em pizzarias."
                />
                <FeatureCard
                  icon={<Settings size={24} />}
                  title="Plano operacional"
                  description="Descrição de processos, dimensionamento de equipe e tecnologias necessárias para operação consistente."
                />
                <FeatureCard
                  icon={<DollarSign size={24} />}
                  title="Plano financeiro"
                  description="Mapeamento de custos, receitas e indicadores essenciais para avaliação de viabilidade e cenários."
                />
                <FeatureCard
                  icon={<PieChart size={24} />}
                  title="Plano estratégico final"
                  description="SWOT consolidada e plano de metas no formato BSC para facilitar execução e acompanhamento."
                />
                <FeatureCard
                  icon={<Shield size={24} />}
                  title="Análise de riscos"
                  description="Matriz de riscos com ações de mitigação e prioridades para reduzir exposição a eventos adversos."
                />
                <FeatureCard
                  icon={<FileText size={24} />}
                  title="Relatório final"
                  description="Documento consolidado com apresentação executiva e anexos de suporte às premissas e projeções."
                />
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
          <p className="text-sm">
            © {new Date().getFullYear()} ECONOMICA - Empresa Júnior do Instituto de Economia da UNICAMP
          </p>
          <p className="text-sm mt-2 opacity-75">Atuando há mais de 30 anos no mercado de consultoria empresarial</p>
        </div>
      </footer>
    </div>
  );
};

export default BusinessPlanPizzarias;
