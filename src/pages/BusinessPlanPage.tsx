import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import ContactForm from "@/components/ContactForm";
import Breadcrumb from "@/components/Breadcrumb";
import { Target, Search, Megaphone, Settings, DollarSign, PieChart, Shield, FileText } from "lucide-react";

type Bullet = { label: string; text: string };
type Item = { label: string; text: string };
type Subsection = { title: string; items: Item[] };
type Feature = { icon: string; title: string; description: string };
type SectionData = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: Bullet[];
  subsections?: Subsection[];
  featureCards?: Feature[];
};
type PageData = {
  slug: string;
  urlPath: string;
  meta: { title: string; description: string; canonical: string; ogTitle: string; ogDescription: string };
  breadcrumb: { label: string; href?: string }[];
  hero: { title: string; subtitle: string };
  sections: SectionData[];
  cta: { label: string; href: string };
};

const iconMap: Record<string, JSX.Element> = {
  Target: <Target size={24} />,
  Search: <Search size={24} />,
  Megaphone: <Megaphone size={24} />,
  Settings: <Settings size={24} />,
  DollarSign: <DollarSign size={24} />,
  PieChart: <PieChart size={24} />,
  Shield: <Shield size={24} />,
  FileText: <FileText size={24} />,
};

export default function BusinessPlanPage() {
  const { slug = "" } = useParams();
  const [data, setData] = useState<PageData | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const path = `/content/plano-de-negocios/${slug}.json`;
    fetch(path)
      .then((r) => {
        if (!r.ok) throw new Error(String(r.status));
        return r.json();
      })
      .then(setData)
      .catch(() => setErr(`Conteúdo não encontrado para ${slug}`));
  }, [slug]);

  if (err)
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold">{err}</h1>
      </div>
    );
  if (!data) return null;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero title={data.hero.title} subtitle={data.hero.subtitle} />
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb items={data.breadcrumb} />
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-0">
            {data.sections.map((s) => (
              <Section key={s.id} id={s.id} title={s.title}>
                {s.paragraphs?.map((p, i) => (
                  <p key={i} className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: p }} />
                ))}
                {s.bullets && (
                  <div className="space-y-6 mt-8">
                    {s.bullets.map((b, i) => (
                      <div key={i}>
                        <h3 className="text-xl font-bold text-secondary mb-3">{b.label}</h3>
                        <p className="text-foreground leading-relaxed">{b.text}</p>
                      </div>
                    ))}
                  </div>
                )}
                {s.subsections && (
                  <div className="space-y-8">
                    {s.subsections.map((sub, i) => (
                      <div key={i}>
                        <h3 className="text-2xl font-bold text-secondary mb-4">{sub.title}</h3>
                        <div className="space-y-4 ml-4">
                          {sub.items.map((it, j) => (
                            <div key={j}>
                              <h4 className="text-lg font-semibold text-dark-blue mb-2">{it.label}</h4>
                              <p className="text-foreground leading-relaxed">{it.text}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {s.featureCards && (
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    {s.featureCards.map((f, i) => (
                      <FeatureCard
                        key={i}
                        icon={iconMap[f.icon] ?? <FileText size={24} />}
                        title={f.title}
                        description={f.description}
                      />
                    ))}
                  </div>
                )}
              </Section>
            ))}
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
          <p className="text-sm mt-2 opacity-75">Atuando há mais de 30 anos no mercado de consultoria empresarial</p>
        </div>
      </footer>
    </div>
  );
}
