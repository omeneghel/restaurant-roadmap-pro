import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-bold text-secondary mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
