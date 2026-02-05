import { Coffee, Droplets, Leaf, Wind } from 'lucide-react';
import heroCoffee from '@/assets/hero-coffee.png';

const features = [
  { icon: Coffee, label: 'Premium Beans' },
  { icon: Droplets, label: 'Fresh Brew' },
  { icon: Leaf, label: 'Organic' },
  { icon: Wind, label: 'Aromatic' },
];

const Hero = () => {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen pt-24 pb-16 section-padding flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="heading-display">
              Coffee<br />
              <span className="text-primary">The Best</span> For You
            </h1>
            
            <button 
              onClick={scrollToMenu}
              className="coffee-btn text-base px-8 py-4"
            >
              View Menu
            </button>

            {/* Feature Icons */}
            <div className="flex gap-6 pt-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex flex-col items-center gap-2 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-5 h-5 text-coffee-medium" />
                  </div>
                  <span className="text-xs text-muted-foreground hidden sm:block">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Coffee Cup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative Circle */}
              <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-cream to-accent/30 -z-10" />
              
              {/* Coffee Cup Image */}
              <img
                src={heroCoffee}
                alt="Premium coffee with latte art"
                className="w-72 md:w-96 lg:w-[420px] animate-float drop-shadow-2xl"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 glass-card px-4 py-2 rounded-full">
                <span className="text-sm font-medium text-coffee-dark">100% Arabica</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
