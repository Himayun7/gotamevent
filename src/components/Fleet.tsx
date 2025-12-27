import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import { ChevronRight, Users, Settings } from 'lucide-react';
import { vehicles } from '../data/vehicleData';

const Fleet: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Toute la Collection' },
    { id: 'sedan', name: 'Berlines' },
    { id: 'suv', name: 'SUV' },
  ];

  const filteredVehicles =
    activeCategory === 'all'
      ? vehicles
      : vehicles.filter((v) => v.category === activeCategory);

  return (
    <section
      id="fleet"
      ref={ref}
      className="relative py-32 lg:py-40 bg-gotam-charcoal overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a962' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center mb-16 lg:mb-24 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <p className="luxury-subheading text-gotam-gold mb-6">Notre Flotte</p>
          <h2 className="luxury-heading text-display-lg text-gotam-cream mb-8">
            La Collection
          </h2>
          <div className="luxury-divider mx-auto mb-8" />
          <p className="font-body font-light text-gotam-cream/70 text-lg max-w-2xl mx-auto">
            Une sélection exclusive des plus prestigieux véhicules,
            entretenus avec le plus grand soin pour votre confort absolu
          </p>
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap justify-center gap-4 lg:gap-8 mb-16 transition-all duration-1000 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`font-body text-xs uppercase tracking-[0.2em] px-6 py-3 transition-all duration-400 ${activeCategory === category.id
                ? 'text-gotam-gold border-b-2 border-gotam-gold'
                : 'text-gotam-cream/60 hover:text-gotam-cream border-b-2 border-transparent'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Vehicles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredVehicles.map((vehicle, index) => (
            <Link
              key={vehicle.id}
              to={`/car/${vehicle.id}`}
              className={`group luxury-card overflow-hidden transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gotam-black/80 via-transparent to-transparent" />
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-gotam-black/80 backdrop-blur-sm px-4 py-2 border border-gotam-gold/30">
                  <p className="font-body text-xs text-gotam-gold">
                    À partir de {vehicle.priceFrom}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3 className="font-display text-2xl text-gotam-cream mb-4 group-hover:text-gotam-gold transition-colors duration-400">
                  {vehicle.name}
                </h3>

                {/* Specs */}
                <div className="flex items-center gap-6 mb-6 text-gotam-cream/60">
                  <div className="flex items-center gap-2">
                    <Users size={16} strokeWidth={1.5} />
                    <span className="font-body text-sm">{vehicle.passengers}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Settings size={16} strokeWidth={1.5} />
                    <span className="font-body text-sm">Auto</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {vehicle.features.map((feature) => (
                    <span
                      key={feature}
                      className="font-body text-xs text-gotam-cream/50 px-3 py-1 border border-gotam-cream/10"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <span
                  className="inline-flex items-center gap-2 font-body text-sm uppercase tracking-[0.15em] text-gotam-gold hover:text-gotam-gold-light transition-colors duration-400 group/link"
                >
                  Voir les Détails
                  <ChevronRight
                    size={16}
                    strokeWidth={1.5}
                    className="transition-transform duration-400 group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <a href="#contact" className="luxury-button-outline">
            Demander une Réservation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Fleet;

