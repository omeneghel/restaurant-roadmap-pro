import { Phone, MessageSquare } from "lucide-react";
import logo from "@/assets/economica-logo-horizontal.png";

const Header = () => {
  return (
    <>
      <header className="bg-secondary text-white py-3">
        <div className="container mx-auto px-4 flex justify-end items-center gap-6 text-sm">
          <a href="tel:+5519999999999" className="flex items-center gap-2 hover:text-primary transition-colors">
            <Phone size={16} />
            Clique para Ligar
          </a>
          <a href="https://wa.me/5519999999999" className="flex items-center gap-2 hover:text-primary transition-colors">
            <MessageSquare size={16} />
            Fale por WhatsApp
          </a>
        </div>
      </header>
      <nav className="bg-white border-b border-border py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <a href="/" className="flex items-center">
            <img src={logo} alt="ECONOMICA" className="h-12" />
          </a>
          <div className="flex gap-8">
            <a href="#servicos" className="text-foreground hover:text-primary transition-colors font-semibold">
              Serviços
            </a>
            <a href="#institucional" className="text-foreground hover:text-primary transition-colors font-semibold">
              Institucional
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
