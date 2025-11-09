interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero = ({ title, subtitle }: HeroProps) => {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl">
          <p className="text-sm mb-4 opacity-90" dangerouslySetInnerHTML={{ __html: subtitle }} />
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">{title}</h1>
          <nav className="flex gap-2 mt-6 text-sm opacity-75">
            <a href="/" className="hover:opacity-100">Home</a>
            <span>/</span>
            <a href="#servicos" className="hover:opacity-100">Serviços</a>
            <span>/</span>
            <span>Plano de Negócios para Restaurantes</span>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Hero;
