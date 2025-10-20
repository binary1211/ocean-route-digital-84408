import { Anchor, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Anchor className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold">
                Ocean Route <span className="text-accent">International</span>
              </span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Your trusted partner in global agricultural trade. Excellence in
              import, export, and logistics solutions since our inception.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <span>oceanrouteinternational@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <span>+91 9427029966</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span>A - 803, apple avenue, near city center , yogichok</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/80">Fruits</li>
              <li className="text-primary-foreground/80">Vegetables</li>
              <li className="text-primary-foreground/80">Cereals</li>
              <li className="text-primary-foreground/80">Legumes & Pulses</li>
              <li className="text-primary-foreground/80">Spices</li>
              <li className="text-primary-foreground/80">Flours</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>
            © {currentYear} Ocean Route International. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
