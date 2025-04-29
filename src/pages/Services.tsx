import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Check, Home, Mountain, Landmark, Factory, Wifi, Leaf } from "lucide-react";

// Все услуги
const allServices = [
  {
    id: "houses",
    name: "Дома",
    icon: <Home className="h-5 w-5" />,
    services: [
      {
        title: "Экодом",
        price: "от 5 000 000 ₽",
        description: "Экологичный дом из натуральных материалов с минимальным воздействием на окружающую среду",
        features: ["Экологичные материалы", "Энергоэффективность", "Интеграция в ландшафт"]
      },
      {
        title: "Горный шале",
        price: "от 8 000 000 ₽",
        description: "Уютный и прочный дом, адаптированный для горной местности",
        features: ["Устойчивость к суровым условиям", "Панорамные виды", "Прочный фундамент"]
      },
      {
        title: "Дом на воде",
        price: "от 6 500 000 ₽",
        description: "Плавучий дом на озере или реке с полной автономией",
        features: ["Стабильная плавучая платформа", "Автономные системы", "Защита от влаги"]
      }
    ]
  },
  {
    id: "stations",
    name: "Станции",
    icon: <Mountain className="h-5 w-5" />,
    services: [
      {
        title: "Исследовательская станция",
        price: "от 10 000 000 ₽",
        description: "Полностью оборудованная станция для научных исследований в отдаленных районах",
        features: ["Лабораторные помещения", "Жилые модули", "Устойчивость к экстремальным условиям"]
      },
      {
        title: "Метеостанция",
        price: "от 4 500 000 ₽",
        description: "Специализированное здание для метеорологических наблюдений",
        features: ["Интеграция оборудования", "Защита от молний", "Передача данных"]
      }
    ]
  },
  {
    id: "commercial",
    name: "Коммерческие",
    icon: <Landmark className="h-5 w-5" />,
    services: [
      {
        title: "Эко-отель",
        price: "от 15 000 000 ₽",
        description: "Гостиничный комплекс, интегрированный в природную среду",
        features: ["Индивидуальные домики", "Общая инфраструктура", "Минимальное воздействие"]
      },
      {
        title: "Глэмпинг",
        price: "от 8 000 000 ₽",
        description: "Комфортабельный кемпинг с элементами роскоши в природной среде",
        features: ["Модульные конструкции", "Комфортабельные условия", "Быстрая установка"]
      }
    ]
  }
];

// Дополнительные услуги
const additionalServices = [
  {
    icon: <Factory size={40} className="text-forest mb-4" />,
    title: "Инженерные коммуникации",
    description: "Установка и подключение всех необходимых коммуникаций в труднодоступных местах"
  },
  {
    icon: <Wifi size={40} className="text-forest mb-4" />,
    title: "Автономные системы",
    description: "Проектирование и установка систем автономного энергоснабжения и жизнеобеспечения"
  },
  {
    icon: <Leaf size={40} className="text-forest mb-4" />,
    title: "Ландшафтный дизайн",
    description: "Интеграция объекта в окружающий ландшафт с минимальным воздействием на природу"
  }
];

// Схема формы
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Имя должно содержать минимум 2 символа",
  }),
  phone: z.string().min(6, {
    message: "Введите корректный номер телефона",
  }),
  email: z.string().email({
    message: "Введите корректный email",
  }),
  message: z.string().min(10, {
    message: "Сообщение должно содержать минимум 10 символов",
  }),
});

const Services = () => {
  const [activeTab, setActiveTab] = useState("houses");
  
  // Настройка формы
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  // Отправка формы
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    
    console.log(values);
    form.reset();
  };

  return (
    <div>
      {/* Hero секция */}
      <section className="bg-forest/10 py-16">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Наши услуги</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Мы специализируемся на строительстве нестандартных объектов в труднодоступных местах, 
            адаптируя каждый проект под уникальные потребности заказчика.
          </p>
        </div>
      </section>

      {/* Основные услуги */}
      <section className="py-16">
        <div className="container mx-auto">
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-8 grid grid-cols-3 w-full max-w-md mx-auto">
              {allServices.map(category => (
                <TabsTrigger key={category.id} value={category.id} className="flex gap-2 items-center">
                  {category.icon} {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {allServices.map(category => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, index) => (
                    <Card key={index} className="flex flex-col">
                      <CardHeader>
                        <h3 className="text-xl font-bold">{service.title}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check size={16} className="text-forest mt-1 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center border-t pt-4">
                        <span className="font-bold text-lg">{service.price}</span>
                        <Button variant="outline" onClick={() => {
                          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}>
                          Заказать
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Дополнительные услуги */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Дополнительные услуги</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            Мы предоставляем комплексные решения для обеспечения полной функциональности вашего объекта
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-background p-6 rounded-lg text-center shadow-sm">
                {service.icon}
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Форма контакта */}
      <section id="contact" className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-2 text-center">Связаться с нами</h2>
          <p className="text-center text-muted-foreground max-w-xl mx-auto mb-8">
            Оставьте заявку, и наш специалист свяжется с вами для обсуждения вашего проекта
          </p>
          
          <div className="max-w-xl mx-auto bg-card rounded-lg shadow-sm border p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ваше имя</FormLabel>
                      <FormControl>
                        <Input placeholder="Иван Иванов" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Телефон</FormLabel>
                        <FormControl>
                          <Input placeholder="+7 (XXX) XXX-XX-XX" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="example@mail.ru" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ваше сообщение</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Опишите ваш проект или задайте вопрос..." 
                          className="min-h-[120px]"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full">Отправить заявку</Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
