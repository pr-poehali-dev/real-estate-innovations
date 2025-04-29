import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 bg-background sticky top-0 z-50 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-forest rounded-md flex items-center justify-center">
            <span className="text-white font-bold">ЭН</span>
          </div>
          <span className="font-bold text-lg">ЭкоНедвижимость</span>
        </Link>

        {/* Десктопное меню */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="font-medium hover:text-forest-light transition-colors">
            Главная
          </Link>
          <Link to="/services" className="font-medium hover:text-forest-light transition-colors">
            Услуги
          </Link>
          <Button asChild variant="default">
            <Link to="/services#contact">Связаться с нами</Link>
          </Button>
        </div>

        {/* Мобильное меню */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Мобильное меню выпадающее */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-[72px] left-0 right-0 bg-background border-b animate-fade-in">
          <div className="container py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="px-4 py-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Главная
            </Link>
            <Link 
              to="/services" 
              className="px-4 py-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Услуги
            </Link>
            <Button asChild className="w-full" onClick={() => setIsMenuOpen(false)}>
              <Link to="/services#contact">Связаться с нами</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
