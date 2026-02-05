import latteImg from '@/assets/latte.png';
import coffeeBeansImg from '@/assets/coffee-beans.png';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* First About Block */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="relative order-2 lg:order-1">
            <img 
              src={coffeeBeansImg} 
              alt="Coffee beans" 
              className="w-64 mx-auto lg:w-80 opacity-80"
            />
          </div>
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-coffee-dark leading-tight">
              Lorem Ipsum is simply dummy text of
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <button className="coffee-btn">
              Learn More
            </button>
          </div>
        </div>

        {/* Second Info Block */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-coffee-dark leading-tight">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <button className="coffee-btn">
              Learn More
            </button>
          </div>
          <div className="relative flex justify-center">
            {/* Large Circle with Image */}
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-cream to-accent/40 flex items-center justify-center overflow-hidden">
                <img 
                  src={latteImg} 
                  alt="Latte art" 
                  className="w-4/5 animate-float"
                />
              </div>
              {/* Price Badge */}
              <div className="absolute top-4 right-4 glass-card px-4 py-2 rounded-full shadow-lg">
                <span className="font-heading font-bold text-coffee-dark">$2.50</span>
              </div>
              {/* Decorative Beans */}
              <img 
                src={coffeeBeansImg} 
                alt="" 
                className="absolute -bottom-8 -left-8 w-24 opacity-60"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
