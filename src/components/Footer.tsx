import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

// Custom Snapchat icon component since Lucide doesn't have one
const SnapchatIcon: React.FC<{ size?: number; strokeWidth?: number }> = ({ size = 24 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.166 3c.796 0 3.495.223 4.769 3.073.426.953.323 2.582.239 3.83l-.012.191c-.008.128-.016.256-.022.377a.48.48 0 00.27.478c.312.156.627.234.937.234.199 0 .394-.031.584-.094.142-.046.287-.07.431-.07.261 0 .478.074.646.22.226.195.34.481.34.849 0 .639-.522 1.14-1.552 1.489-.156.052-.32.099-.489.147-.46.128-.979.273-1.12.541-.076.145-.06.35.05.609l.016.036c.59 1.29.841 1.784 1.636 2.478.267.233.576.432.918.59.21.097.425.175.64.235.338.094.497.293.5.528v.002c-.02.24-.265.483-.69.681-.51.238-1.216.404-2.096.494-.066.094-.11.318-.142.48-.032.163-.066.332-.133.518-.071.197-.236.435-.65.435-.13 0-.27-.019-.42-.057-.271-.07-.548-.104-.825-.104-.207 0-.394.017-.557.052-.28.06-.547.181-.841.313-.48.215-.975.437-1.656.437-.03 0-.06-.001-.09-.002-.03.001-.06.002-.09.002-.681 0-1.176-.222-1.656-.437-.294-.132-.561-.253-.84-.313a3.322 3.322 0 00-.558-.052c-.277 0-.554.035-.825.104-.15.038-.29.057-.42.057-.414 0-.579-.238-.65-.435-.067-.186-.1-.355-.133-.518-.032-.162-.076-.386-.142-.48-.88-.09-1.586-.256-2.096-.494-.425-.198-.67-.44-.69-.681v-.002c.003-.235.162-.434.5-.528.215-.06.43-.138.64-.235.342-.158.651-.357.918-.59.795-.694 1.046-1.188 1.636-2.478l.016-.036c.11-.26.126-.464.05-.609-.141-.268-.66-.413-1.12-.541-.169-.048-.333-.095-.489-.147-1.03-.349-1.552-.85-1.552-1.489 0-.368.114-.654.34-.849.168-.146.385-.22.646-.22.144 0 .289.024.431.07.19.063.385.094.584.094.31 0 .625-.078.937-.234a.48.48 0 00.27-.478c-.006-.121-.014-.249-.022-.377l-.012-.191c-.084-1.248-.187-2.877.239-3.83C8.505 3.223 11.204 3 12 3h.166z" />
  </svg>
);

const Footer: React.FC = () => {

  const footerLinks = {
    services: [
      { name: 'Mariages', href: '#services' },
      { name: 'Événements Privés', href: '#services' },
      { name: 'Shootings & Cinéma', href: '#services' },
    ],
    fleet: [
      { name: 'Rolls-Royce Ghost', href: '#fleet' },
      { name: 'Mercedes-Benz Maybach', href: '#fleet' },
      { name: 'Mercedes-AMG G63', href: '#fleet' },
    ],
    company: [
      { name: 'À Propos', href: '#introduction' },
      { name: 'Notre Équipe', href: '#experience' },
      { name: 'Témoignages', href: '#testimonials' },
      { name: 'Contact', href: '#contact' },
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/gotam.events/', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/gotamevents', label: 'Facebook' },
    { icon: SnapchatIcon, href: 'https://www.snapchat.com/@gotam.goks', label: 'Snapchat' },
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

    </footer>
  );
};

export default Footer;
