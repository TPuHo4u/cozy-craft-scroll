import { Link } from 'react-router-dom';
import { Award, Clock, Users } from 'lucide-react';
import latteImg from '@/assets/latte.png';
import coffeeBeansImg from '@/assets/coffee-beans.png';

const stats = [
  { icon: Clock, value: '10+', label: 'Years Experience' },
  { icon: Users, value: '50K+', label: 'Happy Customers' },
  { icon: Award, value: '25+', label: 'Awards Won' },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* First About Block */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full border-2 border-dashed border-caramel/30" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-caramel/10" />

              <img
                src={coffeeBeansImg}
                alt="Coffee beans"
                className="w-72 lg:w-80 mx-auto relative z-10 drop-shadow-2xl"
              />
            </div>
          </div>

          {/* Content side */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="flex items-center gap-3">
              <div className="accent-line" />
              <span className="text-sm font-medium text-coffee-medium uppercase tracking-widest">
                Our Story
              </span>
            </div>

            <h2 className="heading-section">
              Crafting Perfect Coffee Since 2014
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              What started as a small passion project has grown into a beloved destination
              for coffee enthusiasts. We source the finest beans from sustainable farms around
              the world and roast them to perfection in our local roastery.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Every cup we serve tells a story of dedication, from bean to brew. Our skilled
              baristas are artists who pour their heart into every creation, ensuring you
              experience coffee at its absolute finest.
            </p>

            <Link
              to="/learn-more"
              className="inline-flex items-center gap-2 text-caramel font-medium hover:gap-3 transition-all duration-300 group"
            >
              Discover Our Journey
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mb-32">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center glass-card rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
            >
              <div className="icon-container w-14 h-14 mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-caramel" />
              </div>
              <p className="font-heading text-4xl lg:text-5xl text-coffee-dark mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Second Info Block */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content side */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="accent-line" />
              <span className="text-sm font-medium text-coffee-medium uppercase tracking-widest">
                Our Philosophy
              </span>
            </div>

            <h2 className="heading-section">
              Where Quality Meets Passion
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe that great coffee is more than just a beverage — it's an experience.
              From the moment you step through our doors, you're welcomed into a world where
              every detail matters.
            </p>

            <ul className="space-y-4">
              {['Single-origin beans from ethical sources', 'Daily fresh roasted in small batches', 'Crafted by certified baristas'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-coffee-medium">
                  <div className="w-2 h-2 rounded-full bg-caramel" />
                  {item}
                </li>
              ))}
            </ul>

            <Link to="/learn-more" className="coffee-btn inline-block">
              Learn More
            </Link>
          </div>

          {/* Image side */}
          <div className="relative flex justify-center">
            <div className="relative">
              {/* Large Circle with Image */}
              <div className="w-80 h-80 md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-br from-cream via-accent/30 to-transparent flex items-center justify-center overflow-hidden">
                <img
                  src={latteImg}
                  alt="Latte art"
                  className="w-4/5 animate-float drop-shadow-xl"
                />
              </div>

              {/* Price Badge */}
              <div className="absolute top-8 right-0 glass-card px-5 py-3 rounded-2xl shadow-lg">
                <p className="text-xs text-muted-foreground mb-0.5">Starting from</p>
                <span className="font-heading text-2xl text-coffee-dark">$2.50</span>
              </div>

              {/* Decorative circles */}
              <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full border border-border/50" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full border border-border/30" />

              {/* Decorative Beans */}
              <img
                src={coffeeBeansImg}
                alt=""
                className="absolute -bottom-12 left-8 w-28 opacity-50"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
