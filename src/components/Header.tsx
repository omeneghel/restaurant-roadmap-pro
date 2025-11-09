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
import { FileText, BarChart3, TrendingUp, Calculator, Target } from "lucide-react";

const Header = () => {
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
    }
  ];

  return (
    <nav className="bg-white border-b border-border py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="ECONOMICA" className="h-12" />
        </Link>
        
        <div className="flex items-center gap-8">
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
                  <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
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
      </div>
    </nav>
  );
};

export default Header;
