import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import Breadcrumb from "@/components/Breadcrumb";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, TrendingUp, Target } from "lucide-react";
import { Link } from "react-router-dom";

const BusinessPlan = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Plano de Negócios | ECONOMICA"
        description="Desenvolvimento de planos de negócios completos pela ECONOMICA. Consultoria especializada para estruturar sua empresa com metodologia UNICAMP."
        canonical="https://economicajr.com.br/plano-de-negocios"
      />
      
      <Header />
      <Hero 
        subtitle="Estruture seu negócio com um <strong>plano de negócios completo</strong> desenvolvido pela ECONOMICA"
        title="Plano de Negócios: Estratégia e Viabilidade para seu Empreendimento"
      />

      <div className="container mx-auto px-4 py-12">
        <Breadcrumb 
          items={[
            { label: "Home", href: "/" },
            { label: "Plano de Negócios" }
          ]}
        />

        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Plano de Negócios Personalizado para o Seu Setor
              </h2>
              
              <p className="text-foreground leading-relaxed mb-6">
                A <strong>ECONOMICA</strong>, empresa júnior do Instituto de Economia da UNICAMP com mais de 30 anos de experiência, desenvolve <strong>planos de negócios completos e personalizados</strong> para diferentes setores da economia.
              </p>

              <p className="text-foreground leading-relaxed mb-6">
                Nossos planos de negócios abrangem desde a <strong>análise de mercado</strong> até <strong>projeções financeiras detalhadas</strong>, passando por estratégias de marketing, estruturação operacional e análise de riscos.
              </p>

              <div className="bg-muted p-6 rounded-lg mt-8">
                <h3 className="text-xl font-bold text-secondary mb-4">O que incluímos:</h3>
                <ul className="space-y-3 text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Pesquisa e Análise de Mercado</strong>: análise macroeconômica, setorial e da concorrência</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Plano de Marketing</strong>: estratégias de posicionamento, canais e fidelização</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Plano Operacional</strong>: processos, estrutura organizacional e tecnologias</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Plano Financeiro</strong>: investimento inicial, projeções e indicadores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Análise Estratégica</strong>: SWOT, metas e Balanced Scorecard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Análise de Riscos</strong>: matriz de riscos e planos de contingência</span>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Planos de Negócios por Setor
              </h2>
              
              <p className="text-foreground leading-relaxed mb-6">
                Desenvolvemos planos de negócios especializados para diferentes nichos de mercado, com análises setoriais aprofundadas e estratégias adaptadas às características específicas de cada negócio.
              </p>

              <div className="grid gap-4">
                <Link to="/plano-de-negocios/restaurante">
                  <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                          <FileText className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-secondary mb-1">Plano de Negócios para Restaurante</h3>
                          <p className="text-muted-foreground">
                            Plano completo para o setor gastronômico: análise de mercado, cardápio, precificação, operação e viabilidade financeira
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>

                <Card className="border-2 border-muted bg-muted/30">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center text-muted-foreground flex-shrink-0">
                        <TrendingUp className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">Outros Setores</h3>
                        <p className="text-muted-foreground">
                          Em breve: planos de negócios para varejo, serviços, tecnologia e mais
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Por que escolher a ECONOMICA?</h2>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>Mais de 30 anos de experiência vinculada à UNICAMP</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>Metodologia científica aplicada a problemas reais</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>Equipe especializada e dedicada ao seu projeto</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✓</span>
                  <span>Análises aprofundadas e projeções realistas</span>
                </li>
              </ul>
              <Button variant="secondary" size="lg">
                Solicitar Orçamento
              </Button>
            </section>
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
          <p className="text-sm mt-2 opacity-75">
            Atuando há mais de 30 anos no mercado de consultoria empresarial
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BusinessPlan;
