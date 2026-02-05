import { MapPin, Phone, Clock } from 'lucide-react';

const ReserveSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-[2rem] p-10 md:p-14 lg:p-16">
          {/* Background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-espresso via-espresso to-coffee-light/20 dark:from-card dark:via-card dark:to-accent/30" />

          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-caramel/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-caramel/5 rounded-full blur-2xl" />

          {/* Decorative pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-8 right-12 w-24 h-24 border-2 border-white rounded-full" />
            <div className="absolute bottom-12 left-20 w-16 h-16 border border-white rounded-full" />
          </div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <div className="h-1 w-10 rounded-full bg-caramel" />
                <span className="text-sm font-medium text-cream/80 uppercase tracking-widest">
                  Visit Us
                </span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-cream leading-tight mb-4">
                Reserve Your Table<br />
                <span className="text-caramel italic">Today</span>
              </h2>
              <p className="text-cream/70 max-w-md">
                Experience the perfect ambiance for your coffee moments.
                Book ahead and skip the wait.
              </p>
            </div>

            {/* Info cards & CTA */}
            <div className="flex flex-col items-center lg:items-end gap-6">
              {/* Mini info cards */}
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                  <Clock className="w-5 h-5 text-caramel" />
                  <div>
                    <p className="text-xs text-cream/60">Open Daily</p>
                    <p className="text-sm font-medium text-cream">7AM - 10PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3">
                  <MapPin className="w-5 h-5 text-caramel" />
                  <div>
                    <p className="text-xs text-cream/60">Location</p>
                    <p className="text-sm font-medium text-cream">123 Coffee St</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex items-center gap-4">
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 backdrop-blur-sm text-cream hover:bg-white/20 transition-colors duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">Call Now</span>
                </a>
                <button
                  onClick={scrollToContact}
                  className="px-8 py-4 rounded-full font-semibold transition-all duration-300 bg-caramel text-espresso hover:bg-caramel/90 hover:scale-105 shadow-lg"
                >
                  Reserve Table
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReserveSection;
