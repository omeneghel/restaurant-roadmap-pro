import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BusinessPlanContactForm from "@/components/BusinessPlanContactForm";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  AlertCircle, 
  TrendingUp, 
  Lightbulb, 
  PiggyBank, 
  Calculator, 
  Target,
  PieChart,
  Network,
  DollarSign,
  BarChart3,
  Eye
} from "lucide-react";
import m1 from "@/assets/m1.png";
import m2 from "@/assets/m2.png";
import m3 from "@/assets/m3.png";
import boschLogo from "@/assets/clients/bosch.png";
import cleanMedicalLogo from "@/assets/clients/clean-medical.png";
import cliente4Logo from "@/assets/clients/cliente4.png";
import cliente5Logo from "@/assets/clients/cliente5.png";
import fejespLogo from "@/assets/clients/fejesp.png";
import refriplayLogo from "@/assets/clients/refriplay.png";
import tetrapakLogo from "@/assets/clients/tetrapak.png";
import ulivingLogo from "@/assets/clients/uliving.png";

const BusinessPlanService = () => {
  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  const clientLogos = [
    { src: boschLogo, alt: "Bosch" },
    { src: cleanMedicalLogo, alt: "Clean Medical" },
    { src: cliente4Logo, alt: "Cliente 4" },
    { src: cliente5Logo, alt: "Cliente 5" },
    { src: fejespLogo, alt: "FEJESP" },
    { src: refriplayLogo, alt: "Refriplay" },
    { src: tetrapakLogo, alt: "Tetrapak" },
    { src: ulivingLogo, alt: "Uliving" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Plano de Negócios | ECONOMICA Consultoria Jr"
        description="Tenha o seu Plano de Negócios feito por consultores da UNICAMP. Mais de 30 anos de experiência ajudando empresas a crescer."
        canonical="https://economicajr.com.br/servicos/plano-de-negocios"
      />
      <Header />
      
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight break-words text-white">
                  Tenha o Seu Plano de Negócios Feito por consultores da UNICAMP
                </h1>
                <p className="text-base sm:text-lg md:text-xl opacity-90 leading-relaxed break-words">
                  A ECONOMICA tem mais de 30 anos de experiência e vai te ajudar a aprimorar o seu negócio, seja ele grande, pequeno, ou ainda só uma ideia!
                </p>
                <Button 
                  onClick={scrollToForm}
                  size="lg" 
                  className="w-full sm:w-auto bg-white text-primary hover:bg-white/90 font-bold text-sm sm:text-base md:text-lg px-6 py-3 sm:px-8 sm:py-4"
                >
                  AGENDAR DIAGNÓSTICO GRATUITO
                </Button>
              </div>
              <div className="w-full max-w-sm lg:max-w-md mx-auto">
                <BusinessPlanContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO RISCOS */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
            Conheça os Riscos de Começar um Negócio sem um Plano
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-center mb-4">
                  <img src={m1} alt="Estatística IBGE" className="w-48 h-48 object-contain" />
                </div>
                <h3 className="text-xl font-bold text-secondary text-center">
                  Seu Negócio Pode Fechar
                </h3>
                <p className="text-foreground leading-relaxed text-center">
                  Sem o conhecimento necessário, é fácil subestimar custos, superestimar receitas e ignorar fatores críticos para o sucesso do seu empreendimento, podendo levar o fechamento deste uma realidade.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-center mb-4">
                  <img src={m2} alt="Estatística SEBRAE" className="w-48 h-48 object-contain" />
                </div>
                <h3 className="text-xl font-bold text-secondary text-center">
                  Você Pode Perder Dinheiro
                </h3>
                <p className="text-foreground leading-relaxed text-center">
                  Uma análise financeira pouco detalhada é muito mais comum do que você imagina, podendo resultar em problemas de caixa, capital de giro e a dificuldade ao acesso a investimentos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-center mb-4">
                  <img src={m3} alt="Estatística CB Insights" className="w-48 h-48 object-contain" />
                </div>
                <h3 className="text-xl font-bold text-secondary text-center">
                  O Mercado Pode Rejeitar Sua Ideia
                </h3>
                <p className="text-foreground leading-relaxed text-center">
                  Sem uma análise de mercado correta pode-se ignorar concorrentes, não identificar o seu cliente ideal e até o lançamento de produtos/serviços que o mercado não possui interesse.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button 
              onClick={scrollToForm}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-bold"
            >
              AGENDAR DIAGNÓSTICO GRATUITO
            </Button>
          </div>
        </div>
      </section>

      {/* SEÇÃO DORES */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Você Se Identifica com Alguma Dessas Dores?
            </h2>
            <p className="text-lg text-foreground">
              O Plano de Negócios é para empreendedores que têm as seguintes dores:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-3">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <AlertCircle className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-secondary text-center md:text-left">
                  Insegurança na hora de empreender?
                </h3>
                <p className="text-foreground leading-relaxed text-center md:text-left">
                  O receio de fracassar impede muitos empreendedores de dar o primeiro passo. A dúvida em relação ao êxito do empreendimento e a possibilidade de perder o que foi investido pode ser esmagadora.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-3">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-secondary text-center md:text-left">
                  Dificuldade para expandir?
                </h3>
                <p className="text-foreground leading-relaxed text-center md:text-left">
                  Expandir um negócio pode ser um desafio significativo para muitos empreendedores. A falta de planejamento estratégico e conhecimento de mercado pode dificultar a expansão e impedir o crescimento desejado.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-3">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Lightbulb className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-secondary text-center md:text-left">
                  Não sabe como começar?
                </h3>
                <p className="text-foreground leading-relaxed text-center md:text-left">
                  A falta de clareza sobre os primeiros passos a serem dados impede muitos empreendedores de avançar. A insegurança sobre qual direção tomar pode tornar o início do negócio uma tarefa assustadora.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-3">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <PiggyBank className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-secondary text-center md:text-left">
                  Dificuldade em adquirir investimento?
                </h3>
                <p className="text-foreground leading-relaxed text-center md:text-left">
                  Obter investimento pode ser uma tarefa árdua para muitos empreendedores. A ausência de um plano de negócios sólido e a competitividade do mercado podem tornar o processo de captação de recursos extremamente desafiador.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-3">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Calculator className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-secondary text-center md:text-left">
                  Bagunça nas contas?
                </h3>
                <p className="text-foreground leading-relaxed text-center md:text-left">
                  Muitos empreendedores enfrentam dificuldades na gestão financeira, o que pode levar a uma desorganização nas contas. Sem um controle adequado, a confusão financeira pode comprometer a saúde do negócio e dificultar o crescimento sustentável.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-3">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-secondary text-center md:text-left">
                  Não sabe a viabilidade do seu negócio?
                </h3>
                <p className="text-foreground leading-relaxed text-center md:text-left">
                  A incerteza sobre a viabilidade do negócio pode ser um grande obstáculo para muitos empreendedores. Sem uma análise detalhada do mercado e uma avaliação cuidadosa dos riscos e oportunidades, pode ser difícil determinar se o negócio tem potencial para ser bem-sucedido.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button 
              onClick={scrollToForm}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-bold"
            >
              AGENDAR DIAGNÓSTICO GRATUITO
            </Button>
          </div>
        </div>
      </section>

      {/* SEÇÃO PLANO ESTRATÉGICO */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
            Conheça o Plano Estratégico de Negócios que Já Ajudou Mais de 150 Empresas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-3">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <PieChart className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-secondary text-center md:text-left">
                  Análise do mercado e setor
                </h3>
                <p className="text-foreground leading-relaxed text-center md:text-left">
                  Visualize estrategicamente as tendências e potencialidades do mercado, bem como os riscos atrelados.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-3">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Network className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-secondary text-center md:text-left">
                  Mapeamento de processos e recursos
                </h3>
                <p className="text-foreground leading-relaxed text-center md:text-left">
                  Uma visão completa de todas operações e necessidade de pessoal que pode estar envolvido na atuação da empresa.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-3">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <DollarSign className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-secondary text-center md:text-left">
                  Definição de investimento, custos e despesas
                </h3>
                <p className="text-foreground leading-relaxed text-center md:text-left">
                  Compreenda todos os gastos essenciais à abertura e funcionamento do seu empreendimento.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-3">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <BarChart3 className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-secondary text-center md:text-left">
                  Determinação de indicadores financeiros
                </h3>
                <p className="text-foreground leading-relaxed text-center md:text-left">
                  Traçamos projeções utilizando uma série de indicadores que demonstram a viabilidade e segurança da implementação do negócio.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <CardContent className="p-6 space-y-3">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Eye className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-secondary text-center md:text-left">
                  Visualização da concorrência
                </h3>
                <p className="text-foreground leading-relaxed text-center md:text-left">
                  Compreenda quem são os principais players envolvidos no mercado que deseja entrar e como se posicionar para obter os melhores resultados em vendas.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button 
              onClick={scrollToForm}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-bold"
            >
              AGENDAR DIAGNÓSTICO GRATUITO
            </Button>
          </div>
        </div>
      </section>

      {/* SEÇÃO VANTAGENS */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
            Por Que Contratar a ECONOMICA?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-2">
              <h3 className="text-5xl md:text-6xl font-bold text-primary">92</h3>
              <p className="text-lg font-semibold text-secondary">Net Promoter Score</p>
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-5xl md:text-6xl font-bold text-primary">+32</h3>
              <p className="text-lg font-semibold text-secondary">Anos de Mercado</p>
            </div>
            <div className="text-center space-y-2">
              <h3 className="text-5xl md:text-6xl font-bold text-primary">+150</h3>
              <p className="text-lg font-semibold text-secondary">Projetos Realizados</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button 
              onClick={scrollToForm}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-bold"
            >
              AGENDAR DIAGNÓSTICO GRATUITO
            </Button>
          </div>
        </div>
      </section>

      {/* SEÇÃO CLIENTES */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-12 text-center">
            Nossos Clientes de Sucesso
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto items-center">
            {clientLogos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO FORMULÁRIO */}
      <section id="formulario" className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8 text-center max-w-4xl mx-auto">
            Agende um diagnóstico gratuito e torne-se também um case de sucesso da ECONOMICA!
          </h2>
          <div className="max-w-2xl mx-auto">
            <BusinessPlanContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessPlanService;
