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

const BusinessPlanRestaurant = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Plano de Negócios para Restaurante | ECONOMICA"
        description="Plano de negócios completo para restaurantes pela ECONOMICA - estratégia, viabilidade e gestão para escalar seu restaurante com segurança e previsibilidade."
        canonical="https://economicajr.com.br/plano-de-negocios/restaurante"
      />
      
      <Header />
      <Hero 
        subtitle="<strong>Plano de negócios para restaurantes</strong> pela ECONOMICA — estratégia, viabilidade e gestão para escalar seu negócio com segurança e previsibilidade"
        title="Plano de Negócios para Restaurantes: uma estratégia sólida para o seu negócio"
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb 
          items={[
            { label: "Home", href: "/" },
            { label: "Plano de Negócios", href: "/plano-de-negocios" },
            { label: "Restaurante" }
          ]}
        />
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Content Column */}
          <div className="lg:col-span-2 space-y-0">
            {/* Section 1 */}
            <Section id="por-que-montar" title="Por que montar um plano de negócio para restaurantes?">
              <p className="text-foreground leading-relaxed mb-6">
                O <strong>plano de negócios para restaurantes</strong> é a ferramenta que separa empreendimentos promissores de estabelecimentos que fracassam. No mercado gastronômico competitivo, dominar estratégia de precificação, modelos de receita e <strong>gestão financeira</strong> é essencial. A <strong>ECONOMICA</strong>, com mais de 30 anos de experiência vinculada à UNICAMP, entrega análises que comprovam viabilidade e orientam decisões estratégicas.
              </p>
              
              <div className="space-y-6 mt-8">
                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Conseguir financiamentos e crédito</h3>
                  <p className="text-foreground leading-relaxed">
                    Instituições financeiras exigem planos de negócios consistentes para aprovação de empréstimos e financiamentos. Um plano bem estruturado demonstra <strong>viabilidade econômica</strong>, projeções realistas e gestão de riscos, aumentando significativamente suas chances de captação de recursos para abertura ou expansão do restaurante.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Expandir com novos sócios</h3>
                  <p className="text-foreground leading-relaxed">
                    Para atrair investidores e sócios estratégicos, é fundamental apresentar uma visão clara do negócio, incluindo análise de mercado, diferenciais competitivos e <strong>retorno sobre investimento</strong>. O plano de negócios funciona como um documento profissional que transmite confiança e seriedade ao seu empreendimento gastronômico.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-secondary mb-3">Entender a viabilidade do negócio</h3>
                  <p className="text-foreground leading-relaxed">
                    Antes de investir tempo e recursos, é crucial avaliar se o restaurante será sustentável financeiramente. O plano de negócios permite testar premissas, analisar custos operacionais, ticket médio, capacidade de atendimento e <strong>ponto de equilíbrio</strong>, evitando decisões impulsivas que podem resultar em prejuízos.
                  </p>
                </div>
              </div>
            </Section>

            {/* Section 2 */}
            <Section id="o-que-e-importante" title="O que é importante na hora de construir um plano de negócios para restaurantes?">
              <p className="text-foreground leading-relaxed mb-8">
                Um <strong>plano de negócios completo para restaurantes</strong> deve abordar todas as dimensões do empreendimento, desde a análise do mercado gastronômico até <strong>projeções financeiras</strong> detalhadas. Cada componente é essencial para garantir que seu restaurante tenha uma base sólida para crescimento sustentável.
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Pesquisa e Análise de Mercado</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Análise Macroeconômica</h4>
                      <p className="text-foreground leading-relaxed">
                        Avaliação do <strong>cenário econômico brasileiro</strong>, incluindo inflação, poder de compra da população, tendências de consumo no setor gastronômico e impacto de políticas públicas. Esses fatores influenciam diretamente a demanda por serviços de alimentação e a precificação dos pratos.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Análise do Setor</h4>
                      <p className="text-foreground leading-relaxed">
                        Estudo aprofundado do <strong>mercado de restaurantes</strong>, identificando tendências como gastronomia sustentável, delivery, experiências gastronômicas, tipos de culinária em alta e comportamento do consumidor. Análise de sazonalidade e padrões de consumo em diferentes horários e dias da semana.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Mapeamento do Público-Alvo</h4>
                      <p className="text-foreground leading-relaxed">
                        Definição precisa do <strong>perfil dos clientes</strong>: faixa etária, renda, preferências gastronômicas, frequência de visitas, ticket médio esperado e motivações de consumo. Compreender quem são seus clientes ideais permite criar uma proposta de valor alinhada com suas expectativas.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Análise da Concorrência</h4>
                      <p className="text-foreground leading-relaxed">
                        Mapeamento detalhado dos <strong>concorrentes diretos e indiretos</strong> na região, analisando cardápios, precificação, atendimento, ambiente, diferenciais e reputação. Identificação de lacunas no mercado que seu restaurante pode explorar para se posicionar de forma competitiva.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Estudo da Região</h4>
                      <p className="text-foreground leading-relaxed">
                        Análise geográfica e demográfica da <strong>localização escolhida</strong>, avaliando fluxo de pessoas, densidade populacional, perfil econômico dos moradores, acessibilidade, estacionamento, concorrência próxima e potencial de atração de clientes. A localização é um dos fatores mais críticos para o sucesso de um restaurante.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Plano de Marketing</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Análise de Metodologias de Marketing</h4>
                      <p className="text-foreground leading-relaxed">
                        Estudo dos <strong>7 P's do marketing</strong> aplicados ao setor gastronômico: Produto (cardápio), Preço (estratégia de precificação), Praça (localização e canais), Promoção (divulgação), Pessoas (equipe), Processos (atendimento) e Physical Evidence (ambiente físico). Cada elemento impacta diretamente a percepção de valor do cliente.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Estratégias de Marketing</h4>
                      <p className="text-foreground leading-relaxed">
                        Definição de <strong>canais de comunicação</strong> (redes sociais, site, aplicativos de delivery), estratégias de lançamento, campanhas promocionais, parcerias locais, eventos e degustações. Planejamento de marketing digital focado em engajamento e conversão de seguidores em clientes.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Fidelização dos Clientes</h4>
                      <p className="text-foreground leading-relaxed">
                        Criação de <strong>programas de fidelidade</strong>, cartões de pontos, promoções exclusivas para clientes recorrentes e estratégias de relacionamento pós-venda. A fidelização é mais econômica que a aquisição de novos clientes e garante receita previsível.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Painel de Indicadores do Marketing</h4>
                      <p className="text-foreground leading-relaxed">
                        Definição de <strong>KPIs (indicadores-chave de performance)</strong> como CAC (custo de aquisição de cliente), LTV (valor do tempo de vida do cliente), taxa de conversão, engajamento em redes sociais, número de avaliações positivas e retorno sobre investimento em marketing.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Plano Operacional</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Espaço Físico</h4>
                      <p className="text-foreground leading-relaxed">
                        Planejamento do <strong>layout do restaurante</strong>, incluindo cozinha, salão, banheiros, estoque e área de recebimento. Adequação às normas da vigilância sanitária, corpo de bombeiros e acessibilidade. Dimensionamento correto garante eficiência operacional e conforto aos clientes.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Metodologia 5W2H</h4>
                      <p className="text-foreground leading-relaxed">
                        Aplicação da <strong>ferramenta 5W2H</strong> (What, Why, Where, When, Who, How, How much) para planejamento detalhado de todas as atividades operacionais: cardápio, fornecedores, processos de compra, preparação de alimentos, atendimento ao cliente e gestão de estoque.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Quadro Organizacional</h4>
                      <p className="text-foreground leading-relaxed">
                        Definição da <strong>estrutura de equipe</strong> necessária: chef, cozinheiros, auxiliares de cozinha, garçons, recepcionista, gerente e equipe de limpeza. Descrição de funções, responsabilidades e hierarquia. Planejamento de contratações por fase de crescimento do negócio.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Softwares Úteis</h4>
                      <p className="text-foreground leading-relaxed">
                        Indicação de <strong>sistemas de gestão para restaurantes</strong>: PDV (ponto de venda), controle de estoque, gestão financeira, integração com delivery, reservas online e CRM. A tecnologia otimiza processos, reduz erros e melhora a experiência do cliente.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Relacionamento com Cliente</h4>
                      <p className="text-foreground leading-relaxed">
                        Estabelecimento de <strong>protocolos de atendimento</strong>, gestão de reclamações, coleta de feedback e canais de comunicação. Um bom relacionamento com o cliente gera recomendações espontâneas e fortalece a reputação do restaurante.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Mapeamento dos Processos</h4>
                      <p className="text-foreground leading-relaxed">
                        Documentação de todos os <strong>processos operacionais</strong>: recebimento de mercadorias, armazenamento, pré-preparo, preparo final, montagem de pratos, expedição e limpeza. Processos bem definidos garantem padronização de qualidade e eficiência operacional.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Plano Financeiro</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Levantamento de Custos</h4>
                      <p className="text-foreground leading-relaxed">
                        Identificação completa de <strong>custos fixos e variáveis</strong> (aluguel, energia, água, salários, impostos, alimentos, bebidas, embalagens, delivery). Cálculo do CMV (Custo de Mercadoria Vendida) para cada prato do cardápio, essencial para precificação estratégica.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Análise do Investimento Inicial</h4>
                      <p className="text-foreground leading-relaxed">
                        Detalhamento de todos os <strong>investimentos necessários para abertura</strong>: reforma do espaço, equipamentos de cozinha, mobiliário, utensílios, estoque inicial, capital de giro, licenças e alvarás. Conhecer o investimento total evita surpresas e descapitalização.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Projeção da Receita</h4>
                      <p className="text-foreground leading-relaxed">
                        Estimativa de faturamento mensal baseada em ticket médio, número de atendimentos por dia, taxa de ocupação e sazonalidade. <strong>Projeção de três cenários</strong> (otimista, moderado e pessimista) para diferentes situações de mercado, permitindo planejamento mais robusto.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Cálculo de Indicadores</h4>
                      <p className="text-foreground leading-relaxed">
                        Cálculo de <strong>indicadores financeiros críticos</strong>: ponto de equilíbrio (breakeven), payback (prazo de retorno do investimento), margem de contribuição, margem líquida e fluxo de caixa projetado. Esses indicadores são fundamentais para tomada de decisão e gestão financeira eficiente.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Plano Estratégico</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Análise SWOT</h4>
                      <p className="text-foreground leading-relaxed">
                        Mapeamento das Forças (Strengths), Fraquezas (Weaknesses), Oportunidades (Opportunities) e Ameaças (Threats) do restaurante. Esta <strong>análise estratégica</strong> identifica vantagens competitivas a explorar, pontos de melhoria internos, oportunidades de mercado e riscos externos a monitorar.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Plano de Metas</h4>
                      <p className="text-foreground leading-relaxed">
                        Definição de <strong>metas estratégicas com base no Balanced Scorecard (BSC)</strong>, conectando perspectivas financeira, de mercado, processos internos e aprendizado organizacional. Estabelecimento de objetivos mensuráveis e prazos claros para crescimento sustentável do restaurante.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Análise de Riscos</h3>
                  
                  <div className="space-y-4 ml-4">
                    <div>
                      <h4 className="text-lg font-semibold text-dark-blue mb-2">Matriz de Riscos</h4>
                      <p className="text-foreground leading-relaxed">
                        Identificação e classificação de <strong>riscos específicos do setor gastronômico</strong>: riscos operacionais (contaminação de alimentos, problemas com fornecedores), financeiros (variação de custos de insumos), mercadológicos (mudança de preferências dos consumidores) e legais (alterações na legislação sanitária). Para cada risco, são definidas probabilidade de ocorrência, impacto potencial e planos de contingência.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            {/* Section 3 */}
            <Section id="por-que-contratar" title="Por que contratar uma consultoria para construir um plano de negócios para restaurantes?">
              <p className="text-foreground leading-relaxed mb-6">
                Uma <strong>empresa especializada</strong> reúne experiência acumulada que ajuda a evitar erros comuns de empreendedores que não passaram por um processo de desenvolvimento de planos de negócios. Além de possuir <strong>metodologias consolidadas</strong> de planejamento e escopos claros de atuação.
              </p>
              <p className="text-foreground leading-relaxed">
                A <strong className="text-secondary">ECONOMICA</strong> é a empresa do Instituto de Economia da UNICAMP, atuante desde 1992 (mais de 30 anos), e entrega um <strong>Plano de Negócios "fim a fim"</strong> — da ambientação e estratégia inicial (MVV e Canvas) à Pesquisa e Análise de Mercado, Plano de Marketing (7Ps e indicadores), Plano Operacional (5W2H, processos, fornecedores), Plano Financeiro (custos, investimento, projeções e cenários, payback/breakeven), estratégia final (SWOT e BSC), <strong>matriz de riscos</strong> e relatório de apresentação. O processo é todo conduzido por uma equipe dedicada em cronograma claro, o que reduz riscos e acelera decisões.
              </p>
            </Section>

            {/* Section 4 */}
            <Section id="o-que-estara-incluido" title="O que estará incluído no seu plano de negócios?">
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <FeatureCard
                  icon={<Target size={24} />}
                  title="Plano estratégico inicial"
                  description="Definição de Missão, Visão e Valores do restaurante e construção do Business Model Canvas, descrevendo proposta de valor, recursos, canais, clientes e receitas."
                />
                <FeatureCard
                  icon={<Search size={24} />}
                  title="Pesquisa e análise de mercado"
                  description="Análise macroeconômica, setorial, mapeamento do público-alvo, análise da concorrência e estudo da região com dados demográficos e de consumo."
                />
                <FeatureCard
                  icon={<Megaphone size={24} />}
                  title="Plano de marketing"
                  description="Aplicação dos 7 P's do marketing, análise do valor da marca, definição de estratégias de fidelização e painel de indicadores analíticos."
                />
                <FeatureCard
                  icon={<Settings size={24} />}
                  title="Plano operacional"
                  description="Estruturação do espaço físico, processos operacionais, ferramenta 5W2H, quadro organizacional e indicação de softwares de gestão."
                />
                <FeatureCard
                  icon={<DollarSign size={24} />}
                  title="Plano financeiro"
                  description="Levantamento de custos, análise do investimento inicial, projeção de receitas para 5 anos com três cenários e cálculo de payback e breakeven."
                />
                <FeatureCard
                  icon={<PieChart size={24} />}
                  title="Plano estratégico final"
                  description="Análise SWOT e elaboração do Plano de Metas com Balanced Scorecard, conectando perspectivas financeira, de mercado e processos internos."
                />
                <FeatureCard
                  icon={<Shield size={24} />}
                  title="Análise de riscos"
                  description="Construção da Matriz de Riscos que identifica e classifica riscos por probabilidade e impacto, com visão clara dos desafios do empreendimento."
                />
                <FeatureCard
                  icon={<FileText size={24} />}
                  title="Relatório final"
                  description="Documento consolidado com todas as análises e recomendações, acompanhado de apresentação final garantindo compreensão total."
                />
              </div>
            </Section>
          </div>

          {/* Sidebar - Contact Form */}
          <div className="lg:col-span-1">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-secondary text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} ECONOMICA - Empresa Júnior do Instituto de Economia da UNICAMP
          </p>
          <p className="text-sm mt-2 opacity-75">
            Atuando há mais de 30 anos no mercado de consultoria empresarial
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BusinessPlanRestaurant;
