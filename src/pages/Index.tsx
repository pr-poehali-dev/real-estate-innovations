
import { useState, useRef } from 'react';
import { ArrowLeft, ArrowRight, MapPin, Star, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Index = () => {
  // Для плавного скролла к разделу
  const contactRef = useRef<HTMLDivElement>(null);
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Для формы обратной связи
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном проекте здесь будет отправка данных на сервер
    alert('Форма отправлена успешно!');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  // Проекты
  const projects = [
    {
      id: 1,
      title: 'Горное шале',
      description: 'Уединенный дом для IT-предпринимателя с панорамными окнами и солнечными батареями',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      client: 'Алексей, 35 лет',
      features: ['Автономное энергоснабжение', 'Домашний офис', 'Панорамные окна']
    },
    {
      id: 2,
      title: 'Лесная резиденция',
      description: 'Современный дом среди леса для дизайнера с мастерской и большой террасой',
      image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      client: 'Мария, 29 лет',
      features: ['Творческая мастерская', 'Естественное освещение', 'Эко-материалы']
    },
    {
      id: 3,
      title: 'Озерная станция',
      description: 'Исследовательская станция на берегу горного озера для ученого-биолога',
      image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      client: 'Дмитрий, 42 года',
      features: ['Лаборатория', 'Системы наблюдения', 'Причал']
    }
  ];

  // Услуги
  const services = [
    {
      id: 1,
      title: 'Индивидуальное проектирование',
      description: 'Создаем уникальный проект, учитывая ваш образ жизни, предпочтения и окружающую среду',
      icon: <Users className="h-10 w-10 text-forest" />,
      price: 'от 150 000 ₽'
    },
    {
      id: 2,
      title: 'Строительство эко-домов',
      description: 'Возводим дома из экологичных материалов с минимальным воздействием на природу',
      icon: <MapPin className="h-10 w-10 text-forest" />,
      price: 'от 3 500 000 ₽'
    },
    {
      id: 3,
      title: 'Автономные коммуникации',
      description: 'Устанавливаем системы альтернативной энергетики и водоснабжения для полной независимости',
      icon: <Zap className="h-10 w-10 text-forest" />,
      price: 'от 800 000 ₽'
    },
    {
      id: 4,
      title: 'Реализация нестандартных проектов',
      description: 'Исследовательские станции, творческие резиденции, стеклянные дома на склонах',
      icon: <Star className="h-10 w-10 text-forest" />,
      price: 'по запросу'
    }
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Героический раздел */}
      <section className="relative pt-16 pb-20 overflow-hidden">
        {/* Фоновые фигуры */}
        <div className="hero-shape bg-forest w-96 h-96 top-20 -right-48 opacity-10"></div>
        <div className="hero-shape bg-sunlight w-80 h-80 top-40 -left-40 opacity-10"></div>
        <div className="hero-shape bg-earth w-60 h-60 bottom-0 right-20 opacity-10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Нестандартная недвижимость для выдающихся людей
            </h1>
            <p className="text-xl mb-8 text-muted-foreground">
              Создаем уникальные постройки в труднодоступных местах для тех, 
              кто ищет гармонию с природой и собственным призванием
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onClick={scrollToContact}>
                Воплотить мечту
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#projects">Наши работы</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Наши проекты */}
      <section id="projects" className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Уникальные проекты</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-2">{project.description}</p>
                <div className="mb-4">
                  <span className="inline-block bg-forest/10 text-forest rounded-full px-3 py-1 text-sm">
                    {project.client}
                  </span>
                </div>
                <ul className="space-y-1">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 bg-sunlight rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Наши услуги */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Наши услуги</h2>
        <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
          Полный цикл от разработки концепции до обслуживания готового объекта
        </p>

        <Carousel className="w-full">
          <CarouselContent>
            {services.map((service) => (
              <CarouselItem key={service.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-4 flex justify-center">
                      {service.icon}
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-center">{service.title}</h3>
                    <p className="text-muted-foreground text-center flex-grow">{service.description}</p>
                    <div className="mt-4 text-center font-semibold text-forest">
                      {service.price}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2">
            <CarouselPrevious />
          </div>
          <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2">
            <CarouselNext />
          </div>
        </Carousel>

        <div className="flex md:hidden justify-center mt-6 gap-2">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* О нас */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">О нашей компании</h2>
              <p className="mb-4">
                Мы создаем нестандартные постройки в труднодоступных местах для людей, 
                которые ценят связь с природой и индивидуальность.
              </p>
              <p className="mb-4">
                Наша команда состоит из архитекторов, инженеров и строителей, которые 
                разделяют страсть к необычным проектам и инновационным решениям.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-sunlight rounded-full"></span>
                  <span>10+ лет опыта в нестандартном строительстве</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-sunlight rounded-full"></span>
                  <span>Более 50 реализованных проектов по всей России</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-sunlight rounded-full"></span>
                  <span>Экологичные и энергоэффективные решения</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute w-40 h-40 bg-sunlight rounded-full top-0 -left-5 opacity-20"></div>
              <div className="absolute w-60 h-60 bg-forest rounded-full bottom-10 right-10 opacity-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Уникальный дом" 
                className="w-full h-80 md:h-96 object-cover rounded-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Форма связи */}
      <section ref={contactRef} id="contact" className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">Связаться с нами</h2>
          <p className="text-center text-muted-foreground mb-8">
            Расскажите нам о своей мечте, и мы поможем воплотить её в реальность
          </p>

          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                      Ваше имя
                    </label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="Иван Иванов" 
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium">
                      Телефон
                    </label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      placeholder="+7 (900) 123-45-67" 
                      value={formData.phone}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="ivanov@example.com" 
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 text-sm font-medium">
                    Сообщение
                  </label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Расскажите о своем проекте..." 
                    rows={5}
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
