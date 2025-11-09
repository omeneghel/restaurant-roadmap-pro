import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title: string;
  children: ReactNode;
  variant?: "default" | "accent";
}

const Section = ({ id, title, children, variant = "default" }: SectionProps) => {
  return (
    <section 
      id={id} 
      className={`py-16 ${variant === "accent" ? "bg-muted" : "bg-white"}`}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">{title}</h2>
        <div className="border-l-4 border-primary pl-6">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
