import React from 'react';
import { Instagram, Facebook, Linkedin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      { name: 'Mariages', href: '#services' },
      { name: 'Corporate', href: '#services' },
      { name: 'Transferts Aéroport', href: '#services' },
      { name: 'Événements Privés', href: '#services' },
      { name: 'Conciergerie VIP', href: '#services' },
    ],
    fleet: [
      { name: 'Rolls-Royce', href: '#fleet' },
      { name: 'Bentley', href: '#fleet' },
      { name: 'Mercedes-Maybach', href: '#fleet' },
      { name: 'Range Rover', href: '#fleet' },
      { name: 'Véhicules Classiques', href: '#fleet' },
    ],
    company: [
      { name: 'À Propos', href: '#introduction' },
      { name: 'Notre Équipe', href: '#experience' },
      { name: 'Témoignages', href: '#testimonials' },
      { name: 'Contact', href: '#contact' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="relative bg-gotam-charcoal border-t border-gotam-cream/5">
      {/* Main Footer */}
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12 py-20 lg:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-6">
              <div className="flex flex-col items-start">
                <span className="font-display text-3xl font-light text-gotam-cream tracking-wide">
                  GOTAM
                </span>
                <span className="font-body text-xs uppercase tracking-[0.4em] text-gotam-gold mt-0.5">
                  Events
                </span>
              </div>
            </a>
            <p className="font-body font-light text-gotam-cream/60 leading-relaxed mb-8 max-w-sm">
              L'excellence du transport de luxe parisien depuis 2010. 
              Nous transformons chaque trajet en une expérience d'exception.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center border border-gotam-cream/20 text-gotam-cream/60 hover:border-gotam-gold hover:text-gotam-gold transition-all duration-400"
                >
                  <social.icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display text-lg text-gotam-cream mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-gotam-cream/50 hover:text-gotam-gold transition-colors duration-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Fleet Links */}
          <div>
            <h4 className="font-display text-lg text-gotam-cream mb-6">Collection</h4>
            <ul className="space-y-3">
              {footerLinks.fleet.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-gotam-cream/50 hover:text-gotam-gold transition-colors duration-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display text-lg text-gotam-cream mb-6">Entreprise</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-body text-sm text-gotam-cream/50 hover:text-gotam-gold transition-colors duration-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gotam-cream/5">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs text-gotam-cream/40">
              © {new Date().getFullYear()} Gotam Events. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="font-body text-xs text-gotam-cream/40 hover:text-gotam-gold transition-colors duration-400"
              >
                Mentions Légales
              </a>
              <a
                href="#"
                className="font-body text-xs text-gotam-cream/40 hover:text-gotam-gold transition-colors duration-400"
              >
                Politique de Confidentialité
              </a>
              <a
                href="#"
                className="font-body text-xs text-gotam-cream/40 hover:text-gotam-gold transition-colors duration-400"
              >
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 flex items-center justify-center bg-gotam-gold text-gotam-black hover:bg-gotam-gold-light transition-all duration-400 z-40 opacity-0 pointer-events-none group"
        style={{
          opacity: 1,
          pointerEvents: 'auto',
        }}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} strokeWidth={1.5} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
      </button>
    </footer>
  );
};

export default Footer;
