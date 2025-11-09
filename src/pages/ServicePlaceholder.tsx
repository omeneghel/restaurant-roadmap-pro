import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface ServicePlaceholderProps {
  title: string;
  description: string;
  canonical: string;
}

const ServicePlaceholder = ({ title, description, canonical }: ServicePlaceholderProps) => {
  return (
    <>
      
      <Header />
      
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <Breadcrumb 
            items={[
              { label: "Home", href: "/" },
              { label: "Serviços", href: "/servicos" },
              { label: title }
            ]}
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl opacity-90">{description}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-secondary mb-6">
              Em breve
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Estamos preparando conteúdo detalhado sobre este serviço. 
              Entre em contato para saber mais sobre como podemos ajudar seu negócio.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/servicos">Ver todos os serviços</Link>
              </Button>
              <Button size="lg" variant="outline">
                Solicitar atendimento
              </Button>
            </div>
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

export default ServicePlaceholder;
