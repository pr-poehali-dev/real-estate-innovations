import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="border border-muted transition-all hover:border-forest/50 hover:shadow-sm group">
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-forest/10 flex items-center justify-center text-forest group-hover:bg-forest group-hover:text-white transition-colors">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="mb-2">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
