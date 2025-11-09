import logo from "@/assets/economica-logo-horizontal.png";

const Header = () => {
  return (
    <>
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
