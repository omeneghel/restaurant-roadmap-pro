import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, BarChart3, TrendingUp, Calculator, Target, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Plano de Negócios",
      description: "Estruture sua empresa com estratégias sólidas e análises detalhadas para crescimento sustentável",
      href: "/servicos/plano-de-negocios"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Pesquisa e Análise de Mercado",
      description: "Conheça profundamente seu mercado e identifique oportunidades estratégicas com dados precisos",
      href: "/servicos/pesquisa-e-analise-de-mercado"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Valuation",
      description: "Avalie o valor real do seu negócio com precisão e metodologia reconhecida internacionalmente",
      href: "/servicos/valuation"
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Precificação",
      description: "Defina preços competitivos e lucrativos baseados em análise de custos e posicionamento de mercado",
      href: "/servicos/precificacao"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Análise de Viabilidade do Investimento",
      description: "Avalie a viabilidade econômica e financeira do seu investimento antes de comprometer recursos",
      href: "/servicos/analise-de-viabilidade-do-investimento"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Consultoria Empresarial",
      description: "Consultoria estratégica personalizada para impulsionar o crescimento e competitividade do seu negócio",
      href: "/servicos/consultoria-empresarial"
    }
  ];

  return (
    <>
      
      <Header />
      
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: "Home", href: "/" },
              { label: "Serviços" }
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nossos Serviços</h1>
          <p className="text-xl opacity-90 max-w-3xl">
            Soluções empresariais completas desenvolvidas com metodologia UNICAMP para estruturar, avaliar e expandir seu negócio
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Link key={index} to={service.href}>
                <Card className="h-full border-2 hover:border-primary transition-all duration-300 hover:shadow-lg cursor-pointer">
                  <CardContent className="p-8">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        {service.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-secondary mb-3">{service.title}</h2>
                        <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Services;
