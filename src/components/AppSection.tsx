import { Smartphone, QrCode, Star } from 'lucide-react';
import latteImg from '@/assets/latte.png';
import cappuccinoImg from '@/assets/cappuccino.png';

const AppSection = () => {
  return (
    <section className="py-24 section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-caramel/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Phone Mockups */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Phone 1 - Left */}
              <div className="glass-card rounded-[2.5rem] p-3 w-52 md:w-60 transform -rotate-6 hover:rotate-0 transition-transform duration-500 shadow-xl">
                <div className="bg-card rounded-[2rem] p-4 h-[340px] md:h-[400px] overflow-hidden">
                  {/* Phone notch */}
                  <div className="w-20 h-5 bg-espresso/10 dark:bg-foreground/10 rounded-full mx-auto mb-4" />

                  <p className="font-heading text-xl text-coffee-dark mb-3">Menu</p>
                  <button className="coffee-btn text-xs px-4 py-2 mb-4">Order Now</button>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="glass-card rounded-xl p-3">
                      <img src={cappuccinoImg} alt="Coffee" className="w-full rounded-lg mb-2" />
                      <p className="text-xs font-medium text-coffee-dark">Americano</p>
                      <p className="text-xs text-caramel font-semibold">$2.50</p>
                    </div>
                    <div className="glass-card rounded-xl p-3">
                      <img src={latteImg} alt="Coffee" className="w-full rounded-lg mb-2" />
                      <p className="text-xs font-medium text-coffee-dark">Cappuccino</p>
                      <p className="text-xs text-caramel font-semibold">$2.50</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone 2 - Right */}
              <div className="absolute top-12 -right-8 md:-right-16 glass-card rounded-[2.5rem] p-3 w-52 md:w-60 transform rotate-6 hover:rotate-0 transition-transform duration-500 shadow-xl">
                <div className="bg-card rounded-[2rem] p-4 h-[340px] md:h-[400px] overflow-hidden">
                  {/* Phone notch */}
                  <div className="w-20 h-5 bg-espresso/10 dark:bg-foreground/10 rounded-full mx-auto mb-4" />

                  <img src={latteImg} alt="Latte" className="w-full rounded-2xl mb-4" />
                  <p className="font-heading text-lg text-coffee-dark">Latte Grand</p>
                  <div className="flex items-center gap-1 mt-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-caramel text-caramel" />
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">4.9</span>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-4">
                    Silky smooth espresso with perfectly steamed milk
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-xl text-caramel">$3.50</span>
                    <button className="coffee-btn text-xs px-4 py-2">Add</button>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-24 bg-gradient-to-t from-background to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="accent-line" />
              <span className="text-sm font-medium text-coffee-medium uppercase tracking-widest">
                Mobile App
              </span>
            </div>

            <h2 className="heading-section">
              Order Ahead,<br />
              <span className="text-gradient italic">Skip the Line</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Download our app for the fastest way to get your favorite coffee.
              Order ahead, earn rewards, and never wait in line again.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card rounded-xl p-4">
                <Smartphone className="w-6 h-6 text-caramel mb-2" />
                <p className="font-medium text-coffee-dark text-sm">Easy Ordering</p>
                <p className="text-xs text-muted-foreground">Order in seconds</p>
              </div>
              <div className="glass-card rounded-xl p-4">
                <QrCode className="w-6 h-6 text-caramel mb-2" />
                <p className="font-medium text-coffee-dark text-sm">Quick Pickup</p>
                <p className="text-xs text-muted-foreground">Scan & collect</p>
              </div>
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="glass-card flex items-center gap-4 px-6 py-4 rounded-xl hover:bg-accent transition-all duration-300 group">
                <svg className="w-8 h-8 text-coffee-dark" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Download on</p>
                  <p className="font-semibold text-coffee-dark -mt-0.5">App Store</p>
                </div>
              </button>

              <button className="glass-card flex items-center gap-4 px-6 py-4 rounded-xl hover:bg-accent transition-all duration-300 group">
                <svg className="w-8 h-8 text-coffee-dark" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Get it on</p>
                  <p className="font-semibold text-coffee-dark -mt-0.5">Google Play</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
