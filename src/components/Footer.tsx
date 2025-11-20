import { Facebook, Globe, Instagram, Phone, Mail, MapPin, Clock } from "lucide-react";
import economicaLogoWhite from "@/assets/economica-logo-white.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="text-center md:text-left">
            <img 
              src={economicaLogoWhite} 
              alt="ECONOMICA Logo" 
              className="h-16 md:h-20 mb-4 mx-auto md:mx-0"
            />
            <p className="text-sm md:text-base max-w-md mx-auto md:mx-0">
              Empresa Júnior de Economia da UNICAMP especializada em consultoria empresarial.
            </p>
          </div>
          
          <div className="space-y-3 text-center md:text-left">
            <a href="tel:+5519956909147" className="flex items-center gap-3 hover:text-primary transition-colors justify-center md:justify-start">
              <Phone className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm md:text-base">(11) 9 5690-9147</span>
            </a>
            <a href="mailto:contato@economica.org.br" className="flex items-center gap-3 hover:text-primary transition-colors justify-center md:justify-start">
              <Mail className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm md:text-base break-all">contato@economica.org.br</span>
            </a>
            <div className="flex items-start gap-3 justify-center md:justify-start">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
              <span className="text-sm md:text-base text-left">Rua Pitágoras, 353 - Instituto de Economia, Sala 35 UNICAMP</span>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Clock className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm md:text-base">SEGUNDA À SEXTA 08:00 às 12:00 e 14:00 às 18h</span>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center md:justify-start gap-6 mb-8">
          <a href="https://www.facebook.com/economicajr" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Facebook className="w-8 h-8" />
          </a>
          <a href="https://economica.org.br" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Globe className="w-8 h-8" />
          </a>
          <a href="https://www.instagram.com/economicajr" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Instagram className="w-8 h-8" />
          </a>
        </div>
        
        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-xs md:text-sm">
            © {new Date().getFullYear()} ECONOMICA - Consultoria Empresarial Júnior. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
