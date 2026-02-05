import { useState, useEffect } from "react";
import { Coffee, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 glass-card border-b border-border/30'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="section-padding flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-caramel to-copper flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
            <Coffee className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="font-heading text-xl text-coffee-dark">Flavored</span>
            <p className="text-[10px] text-muted-foreground tracking-wider uppercase -mt-0.5">Coffee House</p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <div className="flex items-center gap-1 p-1.5 rounded-full glass-card">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === item.href.replace("#", "")
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-coffee-medium hover:text-coffee-dark hover:bg-accent/50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>

        <div className="flex items-center gap-3">
          {/* Theme toggle desktop */}
          <ThemeToggle className="hidden md:flex" />

          {/* CTA Button */}
          <button
            onClick={() => scrollToSection("#menu")}
            className="hidden md:block coffee-btn text-sm px-5 py-2.5"
          >
            Order Now
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2.5 rounded-xl glass-card"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-5 h-5 text-coffee-dark" />
            ) : (
              <Menu className="w-5 h-5 text-coffee-dark" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 transition-all duration-300 ${
          isOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <nav className="glass-card mx-4 mt-3 rounded-2xl p-4 border border-border/30">
          <div className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`block w-full text-left py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeSection === item.href.replace('#', '')
                    ? 'bg-primary text-primary-foreground'
                    : 'text-coffee-medium hover:bg-accent/50 hover:text-coffee-dark'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-border/50 flex items-center justify-between">
            <ThemeToggle />
            <button
              onClick={() => scrollToSection('#menu')}
              className="coffee-btn text-sm px-5 py-2.5"
            >
              Order Now
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
