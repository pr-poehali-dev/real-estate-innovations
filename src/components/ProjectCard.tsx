import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  location: string;
}

const ProjectCard = ({ title, description, imageUrl, location }: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md group border-muted">
      <CardHeader className="p-0">
        <AspectRatio ratio={16 / 9}>
          <img 
            src={imageUrl} 
            alt={title} 
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        </AspectRatio>
      </CardHeader>
      <CardContent className="p-4">
        <div className="inline-block px-3 py-1 mb-2 text-xs font-medium text-forest-light bg-forest/10 rounded-full">
          {location}
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="line-clamp-2 mt-2">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button asChild variant="outline" className="w-full">
          <Link to="/services">Подробнее</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
