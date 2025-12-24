import React from 'react';
import { useInView } from '../hooks/useInView';
import { Quote } from 'lucide-react';

const Experience: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const stats = [
    { value: '500+', label: 'Événements par An' },
    { value: '15', label: 'Véhicules d\'Exception' },
    { value: '98%', label: 'Clients Satisfaits' },
    { value: '24/7', label: 'Disponibilité' },
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-32 lg:py-40 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Luxury experience"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gotam-black/85" />
      </div>

      <div className="relative max-w-[1800px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <p className="luxury-subheading text-gotam-gold mb-6">
              L'Expérience Gotam
            </p>
            <h2 className="luxury-heading text-display-md text-gotam-cream mb-8">
              Au-Delà du
              <br />
              <span className="text-gotam-gold italic">Transport</span>
            </h2>
            <div className="luxury-divider mb-8" />
            
            <div className="relative pl-8 border-l border-gotam-gold/30 mb-10">
              <Quote
                size={32}
                strokeWidth={1}
                className="absolute -left-4 -top-2 text-gotam-gold/30"
              />
              <p className="font-display text-xl lg:text-2xl font-light text-gotam-cream/90 italic leading-relaxed">
                "Chaque trajet est une invitation au voyage, chaque détail 
                une promesse d'excellence. Nous ne transportons pas simplement 
                nos clients, nous créons des moments d'exception."
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gotam-gold/30">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-display text-lg text-gotam-cream">
                  Alexandre Gotam
                </p>
                <p className="font-body text-sm text-gotam-gold">
                  Fondateur & Directeur
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="grid grid-cols-2 gap-8 lg:gap-12">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center p-8 border border-gotam-cream/10 hover:border-gotam-gold/30 transition-all duration-500 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${500 + index * 150}ms` }}
                >
                  <p className="font-display text-4xl lg:text-5xl font-light text-gotam-gold mb-2">
                    {stat.value}
                  </p>
                  <p className="font-body text-xs uppercase tracking-[0.15em] text-gotam-cream/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div
              className={`mt-12 p-8 bg-gotam-charcoal/50 backdrop-blur-sm border border-gotam-cream/5 transition-all duration-1000 delay-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h3 className="font-display text-xl text-gotam-cream mb-4">
                Notre Engagement
              </h3>
              <ul className="space-y-3">
                {[
                  'Véhicules impeccables et régulièrement entretenus',
                  'Chauffeurs professionnels et multilingues',
                  'Assurance tous risques incluse',
                  'Annulation gratuite jusqu\'à 48h avant',
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 font-body text-sm text-gotam-cream/70"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gotam-gold mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
