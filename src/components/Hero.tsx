import { Coffee, Droplets, Leaf, Sparkles } from 'lucide-react';
import heroCoffee from '@/assets/hero-coffee.png';

const features = [
  { icon: Coffee, label: 'Premium Beans', desc: 'Single origin' },
  { icon: Droplets, label: 'Fresh Brew', desc: 'Daily roasted' },
  { icon: Leaf, label: 'Organic', desc: '100% natural' },
  { icon: Sparkles, label: 'Artisan', desc: 'Hand crafted' },
];

const Hero = () => {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen pt-28 pb-20 section-padding flex items-center relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-caramel/10 rounded-full blur-3xl dark:bg-caramel/5" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto w-full relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            {/* Accent line */}
            <div className="flex items-center gap-3 animate-fade-in">
              <div className="accent-line" />
              <span className="text-sm font-medium text-coffee-medium uppercase tracking-widest">
                Est. 2024
              </span>
            </div>

            <h1 className="heading-display animate-fade-in-delay-1">
              Coffee<br />
              <span className="text-gradient italic">The Best</span>
              <br />For You
            </h1>

            <p className="text-lg text-muted-foreground max-w-md leading-relaxed animate-fade-in-delay-2">
              Experience the perfect cup crafted with passion.
              Every sip tells a story of dedication and artisanal excellence.
            </p>

            <div className="flex items-center gap-5 animate-fade-in-delay-3">
              <button
                onClick={scrollToMenu}
                className="coffee-btn text-base px-8 py-4"
              >
                Explore Menu
              </button>
              <button
                onClick={scrollToMenu}
                className="px-6 py-4 rounded-full font-medium text-coffee-medium hover:text-coffee-dark transition-colors duration-300 border border-border hover:border-coffee-light"
              >
                Our Story
              </button>
            </div>

            {/* Feature Icons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-border/50">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group cursor-pointer"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3">
                    <div className="icon-container w-11 h-11">
                      <feature.icon className="w-5 h-5 text-caramel" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-coffee-dark">{feature.label}</p>
                      <p className="text-xs text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Coffee Cup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Multi-layer decorative circles */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-cream via-accent/30 to-transparent -z-10 animate-pulse-soft" />
              <div className="absolute -inset-12 rounded-full border border-border/30 -z-20" />
              <div className="absolute -inset-20 rounded-full border border-border/20 -z-20" />

              {/* Coffee Cup Image */}
              <img
                src={heroCoffee}
                alt="Premium coffee with latte art"
                className="w-72 md:w-96 lg:w-[440px] animate-float drop-shadow-2xl"
              />

              {/* Floating Badge - Top */}
              <div className="absolute -top-2 -right-2 glass-card px-5 py-2.5 rounded-2xl shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-semibold text-coffee-dark">100% Arabica</span>
                </div>
              </div>

              {/* Floating Badge - Bottom */}
              <div className="absolute -bottom-4 -left-4 glass-card px-4 py-3 rounded-2xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">⭐</div>
                  <div>
                    <p className="text-xs text-muted-foreground">Rating</p>
                    <p className="font-heading text-lg font-bold text-coffee-dark">4.9</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
