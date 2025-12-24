import React from 'react';
import { useInView } from '../hooks/useInView';
import { Award, Shield, Clock, Star } from 'lucide-react';

const Introduction: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const features = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Une sélection rigoureuse des plus beaux véhicules',
    },
    {
      icon: Shield,
      title: 'Discrétion',
      description: 'Confidentialité absolue pour chaque prestation',
    },
    {
      icon: Clock,
      title: 'Disponibilité',
      description: 'Service 24h/24, 7j/7 à votre disposition',
    },
    {
      icon: Star,
      title: 'Sur-Mesure',
      description: 'Chaque détail personnalisé selon vos souhaits',
    },
  ];

  return (
    <section
      id="introduction"
      ref={ref}
      className="relative py-32 lg:py-40 bg-gotam-black overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-px h-40 bg-gradient-to-b from-transparent via-gotam-gold/30 to-transparent" />
      <div className="absolute bottom-0 right-0 w-px h-40 bg-gradient-to-t from-transparent via-gotam-gold/30 to-transparent" />

      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          {/* Text Content */}
          <div
            className={`transition-all duration-1000 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <p className="luxury-subheading text-gotam-gold mb-6">
              Depuis 2010
            </p>
            <h2 className="luxury-heading text-display-md text-gotam-cream mb-8">
              L'Art du Voyage
              <br />
              <span className="text-gotam-gold italic">Réinventé</span>
            </h2>
            <div className="luxury-divider mb-8" />
            <p className="font-body font-light text-gotam-cream/70 text-lg leading-relaxed mb-6">
              Gotam Events incarne l'excellence du transport de luxe parisien. 
              Notre passion pour l'automobile d'exception et notre engagement 
              envers un service irréprochable font de chaque trajet une 
              expérience mémorable.
            </p>
            <p className="font-body font-light text-gotam-cream/70 text-lg leading-relaxed mb-10">
              Des mariages somptueux aux événements corporate prestigieux, 
              nous accompagnons les moments les plus précieux de votre vie 
              avec élégance et raffinement.
            </p>
            <a href="#services" className="luxury-button-outline">
              Nos Services
            </a>
          </div>

          {/* Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop"
                alt="Luxury chauffeur service"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gotam-black/40 to-transparent" />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -top-4 -right-4 w-full h-full border border-gotam-gold/20 -z-10" />
            {/* Stats Overlay */}
            <div className="absolute -bottom-8 -left-8 bg-gotam-charcoal p-8 border border-gotam-gold/20">
              <p className="font-display text-5xl font-light text-gotam-gold mb-2">15+</p>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-gotam-cream/60">
                Années d'Excellence
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`text-center lg:text-left transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${600 + index * 150}ms` }}
            >
              <feature.icon
                size={32}
                strokeWidth={1}
                className="text-gotam-gold mx-auto lg:mx-0 mb-4"
              />
              <h3 className="font-display text-xl text-gotam-cream mb-2">
                {feature.title}
              </h3>
              <p className="font-body font-light text-sm text-gotam-cream/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introduction;
