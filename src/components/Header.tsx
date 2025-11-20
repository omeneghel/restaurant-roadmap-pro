import { useState } from "react";
import logo from "@/assets/economica-logo-horizontal.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FileText, BarChart3, TrendingUp, Calculator, Target, Briefcase, Menu } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const services = [
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Plano de Negócios",
      href: "/servicos/plano-de-negocios",
      description: "Estruture sua empresa com estratégias sólidas"
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Pesquisa e Análise de Mercado",
      href: "/servicos/pesquisa-e-analise-de-mercado",
      description: "Conheça seu mercado profundamente"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Valuation",
      href: "/servicos/valuation",
      description: "Avalie o valor real do seu negócio"
    },
    {
      icon: <Calculator className="w-5 h-5" />,
      title: "Precificação",
      href: "/servicos/precificacao",
      description: "Defina preços competitivos e lucrativos"
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Análise de Viabilidade",
      href: "/servicos/analise-de-viabilidade-do-investimento",
      description: "Avalie a viabilidade do investimento"
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: "Consultoria Empresarial",
      href: "/servicos/consultoria-empresarial",
      description: "Consultoria estratégica para o seu negócio"
    }
  ];

  return (
    <nav className="bg-white border-b border-border py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="ECONOMICA" className="h-10 md:h-12" />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className="text-foreground hover:text-primary transition-colors font-semibold px-4">
                  Home
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-semibold">Serviços</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2 bg-white">
                    {services.map((service) => (
                      <li key={service.href}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <div className="text-primary">{service.icon}</div>
                              <div className="text-sm font-medium leading-none">{service.title}</div>
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {service.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/sobre-nos" className="text-foreground hover:text-primary transition-colors font-semibold px-4">
                  Sobre Nós
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/cases-de-sucesso" className="text-foreground hover:text-primary transition-colors font-semibold px-4">
                  Cases de Sucesso
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Button>
            Solicitar atendimento
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="text-left">
                <Link to="/" onClick={() => setIsOpen(false)}>
                  <img src={logo} alt="ECONOMICA" className="h-10" />
                </Link>
              </SheetTitle>
            </SheetHeader>
            
            <nav className="flex flex-col gap-4 mt-8">
              <Link 
                to="/" 
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary transition-colors font-semibold py-2"
              >
                Home
              </Link>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="services" className="border-b-0">
                  <AccordionTrigger className="text-foreground font-semibold py-2 hover:no-underline">
                    Serviços
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-2 pl-4">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          to={service.href}
                          onClick={() => setIsOpen(false)}
                          className="flex items-start gap-3 py-2 rounded-md hover:bg-accent transition-colors"
                        >
                          <div className="text-primary mt-1">{service.icon}</div>
                          <div>
                            <div className="text-sm font-medium">{service.title}</div>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              {service.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <Link 
                to="/sobre-nos" 
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary transition-colors font-semibold py-2"
              >
                Sobre Nós
              </Link>
              
              <Link 
                to="/cases-de-sucesso" 
                onClick={() => setIsOpen(false)}
                className="text-foreground hover:text-primary transition-colors font-semibold py-2"
              >
                Cases de Sucesso
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Header;
