import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      
      <Header />
      
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: "Home", href: "/" },
              { label: "Sobre Nós" }
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre a ECONOMICA</h1>
          <p className="text-xl opacity-90">Conhecimento UNICAMP aplicado ao mundo empresarial</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-secondary mb-6">
              Em breve
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Estamos preparando conteúdo institucional completo sobre nossa história, equipe e metodologia. 
              Entre em contato para conhecer melhor a ECONOMICA.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/">Voltar para Home</Link>
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

export default About;
