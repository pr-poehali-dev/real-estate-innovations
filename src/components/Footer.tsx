import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-forest text-white pt-12 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Компания */}
          <div>
            <h3 className="text-xl font-bold mb-4">ЭкоНедвижимость</h3>
            <p className="text-white/80 mb-4">
              Создаем нестандартные постройки в труднодоступных местах, 
              учитывая индивидуальные черты каждого заказчика.
            </p>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-sunlight" />
                <span>ул. Лесная, 42, г. Екатеринбург</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-sunlight" />
                <a href="tel:+78001234567" className="hover:text-sunlight transition-colors">
                  +7 (800) 123-45-67
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-sunlight" />
                <a href="mailto:info@econedv.ru" className="hover:text-sunlight transition-colors">
                  info@econedv.ru
                </a>
              </li>
            </ul>
          </div>

          {/* Ссылки */}
          <div>
            <h3 className="text-xl font-bold mb-4">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-sunlight transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-sunlight transition-colors">
                  Услуги
                </Link>
              </li>
              <li>
                <Link to="/services#contact" className="hover:text-sunlight transition-colors">
                  Связаться с нами
                </Link>
              </li>
            </ul>
            <div className="mt-6 flex space-x-4">
              <a 
                href="https://t.me/econedvizhimost" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-sunlight transition-colors"
                aria-label="Telegram"
              >
                TG
              </a>
              <a 
                href="https://vk.com/econedvizhimost" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-sunlight transition-colors"
                aria-label="VKontakte"
              >
                VK
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} ЭкоНедвижимость. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
