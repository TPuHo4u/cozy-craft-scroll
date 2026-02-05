import { useState, useEffect } from 'react';
import { Coffee, Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Coffee Menu', href: '#menu' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact us', href: '#contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'menu', 'about', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card py-3' : 'py-5 bg-transparent'
      }`}
    >
      <div className="section-padding flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Coffee className="w-5 h-5 text-primary" />
          </div>
          <div>
            <span className="font-heading font-bold text-lg text-coffee-dark">Flavored</span>
            <p className="text-xs text-muted-foreground -mt-1">Wake up to something special.</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className={`text-sm font-medium transition-colors duration-200 ${
                activeSection === item.href.replace('#', '')
                  ? 'text-primary'
                  : 'text-coffee-medium hover:text-primary'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <button 
          onClick={() => scrollToSection('#menu')}
          className="hidden md:block coffee-btn text-sm"
        >
          Coffee Shop
        </button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-coffee-dark" />
          ) : (
            <Menu className="w-6 h-6 text-coffee-dark" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden glass-card mt-2 mx-4 rounded-2xl p-4 animate-fade-in-up">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className={`block w-full text-left py-3 px-4 rounded-xl text-sm font-medium transition-colors ${
                activeSection === item.href.replace('#', '')
                  ? 'bg-primary text-primary-foreground'
                  : 'text-coffee-medium hover:bg-accent'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('#menu')}
            className="coffee-btn w-full mt-3 text-sm"
          >
            Coffee Shop
          </button>
        </nav>
      )}
    </header>
  );
};

export default Header;
