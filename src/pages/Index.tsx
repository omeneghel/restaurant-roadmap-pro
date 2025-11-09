import Header from "@/components/Header";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, BarChart3, TrendingUp, Calculator, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Plano de Negócios",
      description: "Estruture sua empresa com estratégias sólidas e análises detalhadas",
      href: "/servicos/plano-de-negocios"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Pesquisa e Análise de Mercado",
      description: "Conheça seu mercado e identifique oportunidades estratégicas",
      href: "/servicos/pesquisa-e-analise-de-mercado"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Valuation",
      description: "Avalie o valor real do seu negócio com precisão e metodologia",
      href: "/servicos/valuation"
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Precificação",
      description: "Defina preços competitivos e lucrativos para seus produtos",
      href: "/servicos/precificacao"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Análise de Viabilidade",
      description: "Avalie a viabilidade econômica do seu investimento",
      href: "/servicos/analise-de-viabilidade-do-investimento"
    }
  ];

  return (
    <>
      <SEOHead
        title="ECONOMICA | Consultoria Empresarial Unicamp"
        description="A ECONOMICA direciona empresários a estruturar seus negócios através do conhecimento do maior centro de ensino e pesquisa do país (UNICAMP). Consultoria especializada em plano de negócios, valuation e análise de mercado."
        canonical="https://economicajr.com.br/"
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Estruture seu negócio com conhecimento UNICAMP
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              A ECONOMICA direciona empresários a como estruturar seus negócios, através do conhecimento do maior centro de ensino e pesquisa do país.
            </p>
            <Button size="lg" variant="secondary" asChild className="text-lg">
              <Link to="/servicos">Conheça nossos serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sobre a ECONOMICA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Sobre a ECONOMICA
            </h2>
            <div className="border-l-4 border-primary pl-6">
              <p className="text-lg text-muted-foreground mb-4">
                Somos discentes do Instituto de Economia da UNICAMP, 3ª melhor universidade da América Latina. 
                Nossa missão é aplicar o conhecimento acadêmico de excelência para resolver desafios reais das empresas brasileiras.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Com metodologia baseada em pesquisa científica e experiência prática, oferecemos consultoria empresarial 
                que transforma dados em decisões estratégicas e crescimento sustentável.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">3ª</div>
                  <div className="text-sm text-muted-foreground">Melhor universidade da América Latina</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Projetos realizados</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Satisfação dos clientes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços em Destaque */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4 text-center">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            Soluções empresariais completas para estruturar, avaliar e expandir seu negócio
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Link key={index} to={service.href}>
                <Card className="h-full border-2 hover:border-primary transition-all duration-300 hover:shadow-lg cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-secondary mb-2">{service.title}</h3>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/servicos">Ver todos os serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
            Por que escolher a ECONOMICA?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Users className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary mb-2">Conhecimento UNICAMP</h3>
                <p className="text-muted-foreground">
                  Consultores formados no Instituto de Economia da UNICAMP, aplicando metodologia científica em cada projeto
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Target className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary mb-2">Soluções Personalizadas</h3>
                <p className="text-muted-foreground">
                  Cada negócio é único. Desenvolvemos estratégias sob medida para o seu mercado e objetivos
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <BarChart3 className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary mb-2">Análises Aprofundadas</h3>
                <p className="text-muted-foreground">
                  Dados precisos e insights estratégicos para tomada de decisão informada e resultados mensuráveis
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <TrendingUp className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary mb-2">Crescimento Sustentável</h3>
                <p className="text-muted-foreground">
                  Estratégias focadas em resultados de longo prazo, construindo bases sólidas para seu negócio
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-secondary to-dark-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para estruturar seu negócio?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Entre em contato conosco e descubra como podemos ajudar sua empresa a crescer de forma sustentável
          </p>
          <Button size="lg" variant="secondary" className="text-lg">
            Solicitar atendimento
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} ECONOMICA. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  );
};

export default Index;
