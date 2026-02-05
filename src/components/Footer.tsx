import { Coffee } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="py-16 section-padding border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Coffee className="w-5 h-5 text-primary" />
              </div>
              <span className="font-heading font-bold text-lg text-coffee-dark">Flavored</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Wake up to something special.
            </p>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-heading font-semibold text-coffee-dark mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Tracking</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Report a Bug</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Services</a></li>
            </ul>
          </div>

          {/* Our Company */}
          <div>
            <h4 className="font-heading font-semibold text-coffee-dark mb-4">Our Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Tracking</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Report a Bug</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Services</a></li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-heading font-semibold text-coffee-dark mb-4">Address</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Lorem Ipsum is<br />
              simply dummy<br />
              text of the<br />
              printing and
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Flavored Coffee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
