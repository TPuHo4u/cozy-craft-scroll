import { Coffee, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="pt-20 pb-8 section-padding relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-caramel/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-caramel to-copper flex items-center justify-center shadow-lg">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-heading text-2xl text-coffee-dark">Flavored</span>
                <p className="text-xs text-muted-foreground tracking-wider uppercase">Coffee House</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Crafting exceptional coffee experiences since 2014.
              Every cup tells our story of passion and dedication.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-coffee-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg text-coffee-dark mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Menu', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '')}`}
                    className="text-muted-foreground hover:text-caramel transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-caramel group-hover:w-3 transition-all duration-200" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg text-coffee-dark mb-6">Services</h4>
            <ul className="space-y-4">
              {['Coffee Subscription', 'Catering', 'Private Events', 'Gift Cards'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-caramel transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-caramel group-hover:w-3 transition-all duration-200" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg text-coffee-dark mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="flex items-start gap-3 text-muted-foreground hover:text-caramel transition-colors group">
                  <MapPin className="w-5 h-5 mt-0.5 text-caramel" />
                  <span>123 Coffee Street,<br />Brewville, BC 12345</span>
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="flex items-center gap-3 text-muted-foreground hover:text-caramel transition-colors group">
                  <Phone className="w-5 h-5 text-caramel" />
                  <span>+1 (234) 567-890</span>
                </a>
              </li>
              <li>
                <a href="mailto:hello@flavored.coffee" className="flex items-center gap-3 text-muted-foreground hover:text-caramel transition-colors group">
                  <Mail className="w-5 h-5 text-caramel" />
                  <span>hello@flavored.coffee</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="glass-card rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-heading text-xl text-coffee-dark mb-1">Stay in the Loop</h4>
              <p className="text-muted-foreground">Get updates on new blends and exclusive offers.</p>
            </div>
            <div className="flex w-full md:w-auto gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 md:w-64 px-5 py-3 rounded-xl bg-background border border-border focus:border-caramel focus:outline-none transition-colors"
              />
              <button className="coffee-btn whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>&copy; {currentYear} Flavored Coffee. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-caramel transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-caramel transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
