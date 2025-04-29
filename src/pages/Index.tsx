import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Home, Mountain, Landmark, User } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";

const projects = [
  {
    id: "1",
    title: "Дом у горного озера",
    description: "Экологичный дом с панорамными окнами, построенный из натуральных материалов в труднодоступном районе горного озера.",
    imageUrl: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=800&auto=format&fit=crop",
    location: "Алтайский край"
  },
  {
    id: "2",
    title: "Автономная исследовательская станция",
    description: "Станция с полным комплексом жизнеобеспечения для ученых, работающих вдали от цивилизации.",
    imageUrl: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=800&auto=format&fit=crop",
    location: "Карелия"
  },
  {
    id: "3",
    title: "Резиденция в лесу",
    description: "Современный дом, интегрированный в лесной ландшафт, с минимальным воздействием на экосистему.",
    imageUrl: "https://images.unsplash.com/photo-1520608760-eff2c44a1d49?q=80&w=800&auto=format&fit=crop",
    location: "Ленинградская область"
  }
];

const services = [
  {
    icon: <Home size={24} />,
    title: "Строительство домов",
    description: "Проектирование и строительство уникальных домов в отдаленных и труднодоступных местах."
  },
  {
    icon: <Mountain size={24} />,
    title: "Автономные здания",
    description: "Создание полностью автономных построек с независимыми системами энергоснабжения и жизнеобеспечения."
  },
  {
    icon: <Landmark size={24} />,
    title: "Коммерческие объекты",
    description: "Строительство нестандартных коммерческих объектов вдали от городской черты."
  }
];

const Index = () => {
  return (
    <div>
      {/* Секция герой */}
      <section className="relative py-20 overflow-hidden">
        {/* Декоративные фигуры */}
        <div className="hero-shape bg-forest/30 w-96 h-96 left-[-100px] top-[-50px]"></div>
        <div className="hero-shape bg-sunlight/30 w-64 h-64 right-[-30px] bottom-[20%]"></div>
        <div className="hero-shape bg-earth/30 w-80 h-80 left-[30%] bottom-[-100px]"></div>
        
        <div className="container mx-auto text-center relative">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto">
            Нестандартная недвижимость в уникальных местах
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Строим особенные дома для особенных людей в самых живописных и труднодоступных уголках природы
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/services">Наши услуги</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services#contact">Связаться с нами</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Секция с проектами */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold">Наши проекты</h2>
              <p className="text-muted-foreground">Уникальные объекты, которыми мы гордимся</p>
            </div>
            <Button asChild variant="ghost" className="hidden sm:flex">
              <Link to="/services" className="flex items-center gap-1">
                Все проекты <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
          
          <div className="mt-8 flex justify-center sm:hidden">
            <Button asChild>
              <Link to="/services">Все проекты</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Секция с услугами */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Мы предлагаем комплексный подход к созданию уникальных объектов недвижимости, адаптированных под ваши потребности
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Button asChild size="lg">
              <Link to="/services">Подробнее об услугах</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Секция о нас */}
      <section className="py-16 bg-earth/10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Для кого мы строим</h2>
              <p className="text-muted-foreground mb-4">
                Наши заказчики — нестандартные люди в возрасте 25-45 лет, ценящие индивидуальность, 
                свободу и жизнь вдали от городской суеты.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-forest rounded-full p-3 text-white">
                  <User size={24} />
                </div>
                <div>
                  <h3 className="font-medium">Индивидуальный подход</h3>
                  <p className="text-sm text-muted-foreground">Мы вкладываем в каждый проект индивидуальные черты заказчика</p>
                </div>
              </div>
              <Button asChild>
                <Link to="/services#contact">Стать нашим клиентом</Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop" 
                alt="Современный дом в лесу" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
