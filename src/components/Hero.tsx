import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 transition-all duration-[2000ms] ${isLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
            }`}
        >
          <img
            src="https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Luxury car in Paris"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gotam-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-gotam-black via-transparent to-gotam-black/30" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
        <div className="max-w-5xl mx-auto">
          {/* Subtitle */}
          <p
            className={`luxury-subheading text-gotam-gold mb-6 lg:mb-8 opacity-0 ${isLoaded ? 'animate-fade-in-down' : ''
              }`}
            style={{ animationDelay: '500ms' }}
          >
            Paris Île-de-France
          </p>

          {/* Main Heading */}
          <h1
            className={`luxury-heading text-display-xl text-gotam-cream mb-8 opacity-0 ${isLoaded ? 'animate-fade-in-up' : ''
              }`}
            style={{ animationDelay: '700ms' }}
          >
            L'Excellence du
            <br />
            <span className="text-gotam-gold italic">Transport Privé</span>
          </h1>

          {/* Divider */}
          <div
            className={`flex justify-center mb-8 opacity-0 ${isLoaded ? 'animate-fade-in' : ''
              }`}
            style={{ animationDelay: '1000ms' }}
          >
            <div className="luxury-divider" />
          </div>

          {/* Description */}
          <p
            className={`font-body font-light text-lg lg:text-xl text-gotam-cream/80 max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 ${isLoaded ? 'animate-fade-in-up' : ''
              }`}
            style={{ animationDelay: '1200ms' }}
          >
            Location de véhicules de prestige et services de transport exclusifs
            pour vos événements les plus raffinés
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 opacity-0 ${isLoaded ? 'animate-fade-in-up' : ''
              }`}
            style={{ animationDelay: '1400ms' }}
          >
            <a href="#fleet" className="luxury-button-primary">
              Découvrir la Collection
            </a>
            <a href="#contact" className="luxury-button-outline">
              Demander un Devis
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 ${isLoaded ? 'animate-fade-in' : ''
          }`}
        style={{ animationDelay: '2000ms' }}
      >
        <a
          href="#introduction"
          className="flex flex-col items-center gap-2 text-gotam-cream/50 hover:text-gotam-gold transition-colors duration-500 group"
        >
          <span className="font-body text-xs uppercase tracking-[0.2em]">Défiler</span>
          <ChevronDown
            size={20}
            strokeWidth={1}
            className="animate-bounce"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
