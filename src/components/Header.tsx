import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collection', href: '#fleet' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Témoignages', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? 'bg-gotam-black/95 backdrop-blur-md py-4'
          : 'bg-transparent py-6 lg:py-8'
      }`}
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="relative z-50 group">
            <div className="flex flex-col items-start">
              <span className="font-display text-2xl lg:text-3xl font-light text-gotam-cream tracking-wide group-hover:text-gotam-gold transition-colors duration-500">
                GOTAM
              </span>
              <span className="font-body text-[10px] lg:text-xs uppercase tracking-[0.4em] text-gotam-gold mt-0.5">
                Events
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-body text-xs uppercase tracking-[0.2em] text-gotam-cream/80 hover:text-gotam-gold transition-colors duration-400 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gotam-gold transition-all duration-400 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-8">
            <a
              href="tel:+33123456789"
              className="flex items-center gap-2 text-gotam-cream/80 hover:text-gotam-gold transition-colors duration-400"
            >
              <Phone size={16} strokeWidth={1.5} />
              <span className="font-body text-xs tracking-wider">+33 1 23 45 67 89</span>
            </a>
            <a
              href="#contact"
              className="luxury-button-primary text-xs py-3 px-8"
            >
              Réserver
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-50 p-2 text-gotam-cream hover:text-gotam-gold transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} strokeWidth={1} /> : <Menu size={24} strokeWidth={1} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-gotam-black z-40 transition-all duration-700 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`font-display text-3xl font-light text-gotam-cream hover:text-gotam-gold transition-all duration-500 ${
                isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
          <div className="mt-8 pt-8 border-t border-gotam-cream/10">
            <a
              href="tel:+33123456789"
              className="flex items-center gap-3 text-gotam-gold"
            >
              <Phone size={18} strokeWidth={1.5} />
              <span className="font-body text-sm tracking-wider">+33 1 23 45 67 89</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
