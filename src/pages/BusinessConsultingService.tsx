import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { Briefcase, Target, TrendingUp, Users, BarChart3, Lightbulb, CheckCircle2 } from "lucide-react";
import SEOHead from "@/components/SEOHead";

const BusinessConsultingService = () => {
  const features = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Planejamento Estratégico",
      description: "Desenvolvimento de estratégias customizadas alinhadas aos objetivos e realidade do seu negócio"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Análise de Desempenho",
      description: "Avaliação completa dos indicadores de performance e identificação de oportunidades de melhoria"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Gestão Organizacional",
      description: "Otimização de processos e estrutura organizacional para maior eficiência operacional"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Análise de Mercado",
      description: "Estudo detalhado do mercado, concorrência e posicionamento estratégico da empresa"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Inovação e Crescimento",
      description: "Identificação de oportunidades de inovação e estratégias de expansão sustentável"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Implementação Acompanhada",
      description: "Suporte na implementação das soluções propostas com acompanhamento de resultados"
    }
  ];

  return (
    <>
      <SEOHead
        title="Consultoria Empresarial | ECONOMICA"
        description="Consultoria empresarial estratégica com metodologia UNICAMP. Planejamento, análise de desempenho, gestão organizacional e estratégias de crescimento para seu negócio."
        canonical="https://www.economica.com.br/servicos/consultoria-empresarial"
      />
      
      <Header />
      
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: "Home", href: "/" },
              { label: "Serviços", href: "/servicos" },
              { label: "Consultoria Empresarial" }
            ]}
          />
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
              <Briefcase className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Consultoria Empresarial</h1>
          </div>
          <p className="text-xl opacity-90 max-w-3xl">
            Consultoria estratégica personalizada com metodologia UNICAMP para impulsionar o crescimento e competitividade do seu negócio
          </p>
        </div>
      </section>

      <Section 
        id="o-que-e"
        title="O que é Consultoria Empresarial?"
      >
        <div className="space-y-4 text-lg text-muted-foreground">
          <p>
            A Consultoria Empresarial da ECONOMICA oferece suporte estratégico completo para empresas que buscam 
            crescimento sustentável, otimização de processos e maior competitividade no mercado.
          </p>
          <p>
            Nossa abordagem combina conhecimento acadêmico da UNICAMP com experiência prática no mercado, 
            proporcionando soluções personalizadas que atendem às necessidades específicas de cada negócio.
          </p>
          <p>
            Trabalhamos em parceria com empresários e gestores para identificar desafios, desenvolver estratégias 
            e implementar soluções que geram resultados tangíveis e duradouros.
          </p>
        </div>
      </Section>

      <Section 
        id="o-que-inclui"
        title="O que nossa Consultoria Inclui"
        variant="accent"
      >
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Section>

      <Section 
        id="metodologia"
        title="Nossa Metodologia"
      >
        <div className="space-y-6 text-lg text-muted-foreground">
          <div className="bg-white rounded-lg p-6 border-l-4 border-primary">
            <h3 className="font-bold text-secondary text-xl mb-3">1. Diagnóstico Empresarial</h3>
            <p>Análise completa da situação atual da empresa, identificando pontos fortes, fracos, oportunidades e ameaças.</p>
          </div>

          <div className="bg-white rounded-lg p-6 border-l-4 border-primary">
            <h3 className="font-bold text-secondary text-xl mb-3">2. Planejamento Estratégico</h3>
            <p>Desenvolvimento de estratégias customizadas alinhadas aos objetivos do negócio e realidade do mercado.</p>
          </div>

          <div className="bg-white rounded-lg p-6 border-l-4 border-primary">
            <h3 className="font-bold text-secondary text-xl mb-3">3. Plano de Ação</h3>
            <p>Elaboração de plano detalhado com metas, prazos, responsáveis e indicadores de acompanhamento.</p>
          </div>

          <div className="bg-white rounded-lg p-6 border-l-4 border-primary">
            <h3 className="font-bold text-secondary text-xl mb-3">4. Implementação e Acompanhamento</h3>
            <p>Suporte na implementação das soluções com monitoramento contínuo dos resultados e ajustes necessários.</p>
          </div>
        </div>
      </Section>

      <Section 
        id="beneficios"
        title="Benefícios da Consultoria"
        variant="accent"
      >
        <div className="grid md:grid-cols-2 gap-6 text-lg">
          <div className="flex gap-3">
            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <strong className="text-secondary">Visão Estratégica:</strong>
              <span className="text-muted-foreground"> Perspectiva externa e imparcial sobre o negócio</span>
            </div>
          </div>

          <div className="flex gap-3">
            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <strong className="text-secondary">Crescimento Acelerado:</strong>
              <span className="text-muted-foreground"> Estratégias comprovadas para expansão sustentável</span>
            </div>
          </div>

          <div className="flex gap-3">
            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <strong className="text-secondary">Otimização de Recursos:</strong>
              <span className="text-muted-foreground"> Melhor aproveitamento de tempo e investimentos</span>
            </div>
          </div>

          <div className="flex gap-3">
            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <strong className="text-secondary">Competitividade:</strong>
              <span className="text-muted-foreground"> Diferenciação estratégica no mercado</span>
            </div>
          </div>

          <div className="flex gap-3">
            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <strong className="text-secondary">Tomada de Decisão:</strong>
              <span className="text-muted-foreground"> Decisões baseadas em dados e análises aprofundadas</span>
            </div>
          </div>

          <div className="flex gap-3">
            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <strong className="text-secondary">Resultados Mensuráveis:</strong>
              <span className="text-muted-foreground"> KPIs claros e acompanhamento de performance</span>
            </div>
          </div>
        </div>
      </Section>

      <Section 
        id="para-quem"
        title="Para quem é indicado?"
      >
        <div className="space-y-4 text-lg text-muted-foreground">
          <p className="font-semibold text-secondary">Nossa Consultoria Empresarial é ideal para:</p>
          
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Empresas que buscam crescimento e expansão no mercado</li>
            <li>Negócios enfrentando desafios de gestão ou operacionais</li>
            <li>Empreendedores que desejam profissionalizar a gestão</li>
            <li>Empresas em processo de reestruturação ou mudança estratégica</li>
            <li>Organizações buscando maior competitividade e diferenciação</li>
            <li>Negócios que precisam otimizar processos e recursos</li>
          </ul>
        </div>
      </Section>

      <section className="py-16 bg-gradient-to-r from-secondary to-dark-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para transformar seu negócio?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Entre em contato conosco e descubra como nossa consultoria pode impulsionar o crescimento da sua empresa
          </p>
          <Button size="lg" variant="secondary" className="text-lg">
            Solicitar Consultoria
          </Button>
        </div>
      </section>

      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} ECONOMICA. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
};

export default BusinessConsultingService;
