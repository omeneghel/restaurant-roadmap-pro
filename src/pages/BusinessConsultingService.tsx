import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Briefcase, Target, TrendingUp, DollarSign, BarChart3, FileText, CheckCircle2, Award, Users, TrendingDown } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { Link } from "react-router-dom";

const BusinessConsultingService = () => {
  const stats = [
    { value: "150", label: "Projetos Realizados" },
    { value: "35", label: "Anos de Experiência" },
    { value: "95%", label: "Satisfação de Clientes" },
    { value: "UNICAMP", label: "Respaldo Acadêmico" }
  ];

  const differentials = [
    {
      title: "Qualidade Acadêmica",
      description: "Respaldo da UNICAMP com metodologias atualizadas e rigor científico"
    },
    {
      title: "Preço Acessível",
      description: "Custos até 30% menores que outras consultorias tradicionais"
    },
    {
      title: "Soluções Personalizadas",
      description: "Projetos adaptados às necessidades específicas da sua empresa"
    },
    {
      title: "Portfólio Completo",
      description: "Portfólio amplo e validado por clientes de diferentes setores do mercado"
    }
  ];

  const services = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Pesquisa e Análise de Mercado",
      problem: "Falta de clareza sobre o mercado, os concorrentes e o público-alvo",
      solution: "Análise macroeconômica completa, estudo setorial detalhado e mapeamento estratégico da concorrência",
      benefits: [
        "Base sólida para decisões estratégicas",
        "Redução significativa de riscos",
        "Identificação de oportunidades"
      ],
      href: "/servicos/pesquisa-e-analise-de-mercado"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Plano de Negócios",
      problem: "Ideias de negócio sem estruturação adequada",
      solution: "Plano completo abrangendo aspectos estratégicos, marketing, operacionais e financeiros",
      benefits: [
        "Definição da viabilidade do negócio",
        "Apoio para captação de recursos",
        "Roadmap estruturado para crescimento"
      ],
      href: "/servicos/plano-de-negocios"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Valuation",
      problem: "Desconhecimento do valor real da empresa no mercado",
      solution: "Projeção detalhada de fluxos de caixa, cálculo do WACC e análise de cenários múltiplos",
      benefits: [
        "Suporte para investidores e sócios",
        "Base para fusões e aquisições",
        "Valorização estratégica do negócio"
      ],
      href: "/servicos/valuation"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Análise de Viabilidade",
      problem: "Investimentos realizados sem base sólida em dados",
      solution: "Análise completa de contexto, pesquisa de mercado e projeções financeiras detalhadas",
      benefits: [
        "Redução de riscos de investimento",
        "Tempo de payback claro",
        "ROI projetado com precisão"
      ],
      href: "/servicos/analise-de-viabilidade-do-investimento"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Precificação Estratégica",
      problem: "Preços inadequados que prejudicam a competitividade",
      solution: "Análise competitiva, levantamento de custos e ferramenta personalizada de precificação",
      benefits: [
        "Preço ótimo para maximizar lucros",
        "Melhor posicionamento competitivo",
        "Estratégia de pricing sustentável"
      ],
      href: "/servicos/precificacao"
    }
  ];

  const process = [
    {
      number: "01",
      title: "Diagnóstico",
      subtitle: "Gratuito",
      description: "Análise inicial das necessidades da sua empresa",
      detail: "Reunião de descoberta para entender seus desafios e objetivos"
    },
    {
      number: "02",
      title: "Proposta",
      subtitle: "Personalizada",
      description: "Escopo detalhado e orçamento transparente",
      detail: "Detalhes de metodologia, cronograma e valores"
    },
    {
      number: "03",
      title: "Start",
      subtitle: "do Projeto",
      description: "Definição de todas as etapas usando objetivos claros",
      detail: "Alinhamento de expectativas e início oficial do projeto"
    },
    {
      number: "04",
      title: "Execução",
      subtitle: "das Etapas",
      description: "Implementação com acompanhamento em tempo real",
      detail: "Com atualizações constantes e execução transparente"
    },
    {
      number: "05",
      title: "Conclusão",
      subtitle: "da Consultoria",
      description: "Relatório final e apresentação de resultados",
      detail: "Documento executivo e sessão de apresentação dos insights"
    }
  ];

  const faqs = [
    {
      question: "Como funciona a consultoria da ECONOMICA?",
      answer: "Nossa consultoria funciona em 5 etapas: Diagnóstico gratuito inicial, elaboração de proposta personalizada, kick-off com definição do roadmap, execução com acompanhamento em tempo real e entrega com relatório final e apresentação dos resultados."
    },
    {
      question: "Quais áreas vocês atendem?",
      answer: "Atendemos empresas de todos os portes e setores com nossos 5 serviços principais: Pesquisa e Análise de Mercado, Valuation, Análise de Viabilidade de Investimento, Precificação e Plano de Negócios."
    },
    {
      question: "Qual o prazo de entrega dos projetos?",
      answer: "O prazo varia conforme a complexidade do projeto, geralmente entre 6 a 12 semanas. Definimos prazos realistas no começo e mantemos comunicação constante sobre o andamento."
    },
    {
      question: "Quanto custa uma consultoria?",
      answer: "Como empresa júnior, oferecemos preços até 50% menores que consultorias tradicionais, mantendo a mesma qualidade acadêmica da UNICAMP. O investimento varia conforme o escopo do projeto. Entre em contato para um orçamento personalizado."
    }
  ];

  return (
    <>
      <SEOHead
        title="Consultoria Empresarial | ECONOMICA"
        description="Consultoria empresarial especializada com metodologia UNICAMP. Transforme sua empresa com diagnóstico gratuito, planejamento estratégico e soluções personalizadas."
        canonical="https://www.economica.com.br/servicos/consultoria-empresarial"
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: "Home", href: "/" },
              { label: "Serviços", href: "/servicos" },
              { label: "Consultoria Empresarial" }
            ]}
          />
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <div className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm mb-4">
                Consultoria Empresarial
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Transforme Sua Empresa com Nossa <span className="text-cyan-300">Consultoria Especializada</span>
              </h1>
              <p className="text-xl mb-6 opacity-90">
                A ECONOMICA combina dados, experiência e visão de futuro para uma consultoria <strong>completa e personalizada</strong>.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Diagnóstico Gratuito</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Consultores Online</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-8 text-secondary">
              <h3 className="text-2xl font-bold mb-2">Diagnóstico Gratuito</h3>
              <p className="text-muted-foreground mb-6">
                Receba uma análise personalizada das necessidades da sua empresa
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg" asChild>
              <a href="#form">Falar com Consultor</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm mb-4">
              Nossos Diferenciais
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Por que escolher a ECONOMICA?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Para pequenas, médias e grandes empresas, temos a fórmula que combina excelência acadêmica e experiência mercadológica
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {differentials.map((differential, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-secondary mb-3">{differential.title}</h3>
                  <p className="text-muted-foreground">{differential.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center mb-8">
            Nossos clientes de sucesso: <br className="hidden md:block" />empresas que evoluíram conosco
          </h2>
          <div className="text-center">
            <Button asChild>
              <a href="#form">Agendar Diagnóstico</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Soluções Completas para sua Empresa
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-2">
              Oferecemos um portfólio abrangente de serviços para impulsionar o crescimento e sucesso do seu negócio.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-secondary">{service.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-red-600 mb-2">Problema</h4>
                      <p className="text-muted-foreground">{service.problem}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-secondary mb-2">Nossa Solução</h4>
                      <p className="text-muted-foreground">{service.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-green-600 mb-2">Benefícios</h4>
                      <ul className="space-y-1">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button asChild className="w-full mt-6" variant="outline">
                    <Link to={service.href}>Saiba Mais</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 bg-gradient-to-r from-secondary to-dark-blue text-white border-0">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Projeto Personalizado?</h3>
              <p className="text-lg mb-6 opacity-90">Conte-nos suas necessidades específicas</p>
              <Button size="lg" variant="secondary">
                <a href="#form">Fale Conosco</a>
              </Button>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <Button size="lg" asChild>
              <a href="#form">Fale Agora com um Consultor</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Nosso Processo
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Como Trabalhamos
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-2">
              Um processo estruturado e transparente que garante os melhores resultados para sua empresa
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {process.map((step, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="mb-2">
                        <h3 className="text-2xl font-bold text-secondary inline">{step.title}</h3>
                        <span className="text-lg text-muted-foreground ml-2">{step.subtitle}</span>
                      </div>
                      <p className="text-lg font-semibold text-secondary mb-2">{step.description}</p>
                      <p className="text-muted-foreground">{step.detail}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Transformar seu Negócio?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Agende um diagnóstico sem custos e descubra como a ECONOMICA pode impulsionar o crescimento do seu negócio.
          </p>
          <Button size="lg" variant="secondary" className="text-lg mb-6">
            <a href="#form">Receber Diagnóstico Gratuito</a>
          </Button>
          <p className="text-sm opacity-75">
            Resposta em até 24 horas • Sem compromisso • Totalmente gratuito
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Tire suas dúvidas sobre nossos serviços de consultoria
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="form" className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                Solicite seu Diagnóstico Gratuito
              </h2>
              <p className="text-lg text-muted-foreground">
                Preencha o formulário e nossa equipe entrará em contato em até 24 horas
              </p>
            </div>
            <Card>
              <CardContent className="p-8">
                <ContactForm />
              </CardContent>
            </Card>
          </div>
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
