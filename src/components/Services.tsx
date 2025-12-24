import React from 'react';
import { useInView } from '../hooks/useInView';
import { Heart, Building2, Plane, Calendar, Camera, Crown } from 'lucide-react';

const Services: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });

  const services = [
    {
      icon: Heart,
      title: 'Mariages',
      description:
        'Sublimez le plus beau jour de votre vie avec nos véhicules d\'exception. Décoration florale, champagne et chauffeur en livrée inclus.',
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      icon: Building2,
      title: 'Corporate',
      description:
        'Impressionnez vos clients et partenaires avec un service de transport à la hauteur de votre image. Facturation entreprise disponible.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      icon: Plane,
      title: 'Transferts Aéroport',
      description:
        'Accueil personnalisé à votre arrivée, suivi des vols en temps réel et assistance bagages pour un voyage sans stress.',
      image: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      icon: Calendar,
      title: 'Événements Privés',
      description:
        'Galas, soirées de prestige, anniversaires... Nous créons l\'atmosphère parfaite pour vos moments d\'exception.',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      icon: Camera,
      title: 'Shootings & Cinéma',
      description:
        'Nos véhicules sont disponibles pour vos productions audiovisuelles, séances photos et tournages publicitaires.',
      image: 'https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
    {
      icon: Crown,
      title: 'Conciergerie VIP',
      description:
        'Un service sur-mesure pour répondre à toutes vos demandes : réservations, accès privilégiés, expériences exclusives.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-32 lg:py-40 bg-gotam-black overflow-hidden"
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center mb-16 lg:mb-24 transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="luxury-subheading text-gotam-gold mb-6">Nos Prestations</p>
          <h2 className="luxury-heading text-display-lg text-gotam-cream mb-8">
            Services d'Exception
          </h2>
          <div className="luxury-divider mx-auto mb-8" />
          <p className="font-body font-light text-gotam-cream/70 text-lg max-w-2xl mx-auto">
            Chaque prestation est pensée dans les moindres détails pour 
            transformer vos événements en souvenirs inoubliables
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative overflow-hidden transition-all duration-700 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {/* Background Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gotam-black/70 group-hover:bg-gotam-black/60 transition-colors duration-500" />
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <service.icon
                  size={36}
                  strokeWidth={1}
                  className="text-gotam-gold mb-4 transition-transform duration-500 group-hover:scale-110"
                />
                <h3 className="font-display text-2xl text-gotam-cream mb-3 group-hover:text-gotam-gold transition-colors duration-400">
                  {service.title}
                </h3>
                <p className="font-body font-light text-sm text-gotam-cream/70 leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {service.description}
                </p>
              </div>

              {/* Border Effect */}
              <div className="absolute inset-0 border border-transparent group-hover:border-gotam-gold/30 transition-colors duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-16 lg:mt-24 transition-all duration-1000 delay-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="font-body font-light text-gotam-cream/60 mb-6">
            Vous avez un projet spécifique ?
          </p>
          <a href="#contact" className="luxury-button-primary">
            Contactez-Nous
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
