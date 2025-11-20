import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  return (
    <>
      
      <Header />
      
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: "Home", href: "/" },
              { label: "Cases de Sucesso" }
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cases de Sucesso</h1>
          <p className="text-xl opacity-90">Histórias de transformação e crescimento empresarial</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-secondary mb-6">
              Em breve
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Estamos preparando cases detalhados dos nossos projetos de sucesso. 
              Entre em contato para conhecer nossas histórias de transformação empresarial.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/servicos">Ver nossos serviços</Link>
              </Button>
              <Button size="lg" variant="outline">
                Solicitar atendimento
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CaseStudies;
