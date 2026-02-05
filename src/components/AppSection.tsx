import { Apple, Play } from 'lucide-react';
import latteImg from '@/assets/latte.png';
import cappuccinoImg from '@/assets/cappuccino.png';

const AppSection = () => {
  return (
    <section className="py-20 section-padding bg-gradient-to-b from-transparent via-cream/30 to-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Phone Mockups */}
          <div className="relative flex justify-center gap-4">
            {/* Phone 1 */}
            <div className="glass-card rounded-3xl p-3 w-48 md:w-56 transform -rotate-6">
              <div className="bg-warm-white rounded-2xl p-4 h-80 md:h-96">
                <p className="font-heading font-bold text-coffee-dark mb-2">Coffee</p>
                <button className="coffee-btn text-xs px-3 py-1.5 mb-4">View Menu</button>
                <div className="grid grid-cols-2 gap-2">
                  <div className="glass-card rounded-xl p-2">
                    <img src={cappuccinoImg} alt="Coffee" className="w-full rounded-lg mb-1" />
                    <p className="text-xs font-medium text-coffee-dark">Americano</p>
                  </div>
                  <div className="glass-card rounded-xl p-2">
                    <img src={latteImg} alt="Coffee" className="w-full rounded-lg mb-1" />
                    <p className="text-xs font-medium text-coffee-dark">Cappuccino</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone 2 */}
            <div className="glass-card rounded-3xl p-3 w-48 md:w-56 transform rotate-6 mt-8">
              <div className="bg-warm-white rounded-2xl p-4 h-80 md:h-96">
                <img src={latteImg} alt="Latte" className="w-full rounded-2xl mb-3" />
                <p className="font-heading font-bold text-coffee-dark">Latte Grand</p>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-3">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <span className="font-heading font-bold text-primary">$3.50</span>
                  <button className="coffee-btn text-xs px-3 py-1.5">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-coffee-dark">
              App is Available
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            
            {/* App Store Buttons */}
            <div className="flex gap-4 pt-4">
              <button className="glass-card flex items-center gap-3 px-5 py-3 rounded-xl hover:bg-accent transition-colors">
                <Apple className="w-8 h-8 text-coffee-dark" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Download on</p>
                  <p className="font-medium text-coffee-dark">App Store</p>
                </div>
              </button>
              <button className="glass-card flex items-center gap-3 px-5 py-3 rounded-xl hover:bg-accent transition-colors">
                <Play className="w-8 h-8 text-coffee-dark fill-coffee-dark" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Get it on</p>
                  <p className="font-medium text-coffee-dark">Google Play</p>
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
