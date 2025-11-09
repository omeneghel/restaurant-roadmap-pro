import { useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";
import ContactForm from "@/components/ContactForm";
import Breadcrumb from "@/components/Breadcrumb";
import {
  TrendingUp,
  Target,
  Users,
  DollarSign,
  PieChart,
  BarChart3,
  FileText,
  Search,
  Megaphone,
  Settings,
  Shield,
  CheckCircle2
} from "lucide-react";

type Bullet = { label: string; text: string };
type Item = { label: string; text: string };
type Subsection = { title: string; items: Item[] };
type SectionType = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: Bullet[];
  subsections?: Subsection[];
  featureCards?: { icon: string; title: string; description: string }[];
};
type PageData = {
  slug: string;
  urlPath: string;
  meta: {
    title: string;
    description: string;
    canonical: string;
    ogTitle: string;
    ogDescription: string;
  };
  breadcrumb: { label: string; href?: string }[];
  hero: { title: string; subtitle: string };
  sections: SectionType[];
  cta: { label: string; href: string };
};

const iconMap: Record<string, JSX.Element> = {
  TrendingUp: <TrendingUp size={24} />,
  Target: <Target size={24} />,
  Users: <Users size={24} />,
  DollarSign: <DollarSign size={24} />,
  PieChart: <PieChart size={24} />,
  BarChart3: <BarChart3 size={24} />,
  FileText: <FileText size={24} />,
  Search: <Search size={24} />,
  Megaphone: <Megaphone size={24} />,
  Settings: <Settings size={24} />,
  Shield: <Shield size={24} />,
  CheckCircle2: <CheckCircle2 size={24} />
};

export default function BusinessPlanRoute() {
  const { slug } = useParams();
  const [data, setData] = useState<PageData | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const contentUrl = useMemo(
    () => `/content/plano-de-negocios/${slug}.json`,
    [slug]
  );

  useEffect(() => {
    setErr(null);
    setData(null);
    fetch(contentUrl, { cache: "no-store" })
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((j) => setData(j as PageData))
      .catch((e) => setErr(String(e)));
  }, [contentUrl]);

  if (err) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-2xl font-bold">Conteúdo não encontrado</h1>
          <p className="mt-2 opacity-80">Verifique o slug: {slug}</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-16">Carregando…</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{data.meta.title}</title>
        <meta name="description" content={data.meta.description} />
        <link rel="canonical" href={data.meta.canonical} />
        <meta property="og:title" content={data.meta.ogTitle} />
        <meta property="og:description" content={data.meta.ogDescription} />
        <meta property="og:url" content={data.meta.canonical} />
      </Helmet>

      <Header />
      <Hero subtitle={data.hero.subtitle} title={data.hero.title} />

      <div className="container mx-auto px-4 py-12">
        <Breadcrumb items={data.breadcrumb} />

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-10">
            {data.sections.map((sec) => (
              <Section key={sec.id} id={sec.id} title={sec.title}>
                {sec.paragraphs?.map((p, i) => (
                  <p key={i} className="text-foreground leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: p }} />
                ))}

                {sec.bullets && (
                  <div className="space-y-6 mt-4">
                    {sec.bullets.map((b, i) => (
                      <div key={i}>
                        <h3 className="text-xl font-bold text-secondary mb-2">{b.label}</h3>
                        <p className="text-foreground leading-relaxed">{b.text}</p>
                      </div>
                    ))}
                  </div>
                )}

                {sec.subsections && (
                  <div className="space-y-8 mt-4">
                    {sec.subsections.map((sub, i) => (
                      <div key={i}>
                        <h3 className="text-2xl font-bold text-secondary mb-3">{sub.title}</h3>
                        <div className="space-y-3 ml-4">
                          {sub.items.map((it, j) => (
                            <div key={j}>
                              <h4 className="text-lg font-semibold mb-1">{it.label}</h4>
                              <p className="text-foreground leading-relaxed">{it.text}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {sec.featureCards && (
                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    {sec.featureCards.map((fc, i) => (
                      <FeatureCard
                        key={i}
                        icon={iconMap[fc.icon] ?? <FileText size={24} />}
                        title={fc.title}
                        description={fc.description}
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
          <p className="text-sm">© {new Date().getFullYear()} ECONOMICA - Empresa Júnior do Instituto de Economia da UNICAMP</p>
          <p className="text-sm mt-2 opacity-75">Atuando há mais de 30 anos no mercado de consultoria empresarial</p>
        </div>
      </footer>
    </div>
  );
}
