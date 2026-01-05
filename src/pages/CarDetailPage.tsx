import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Users, Settings, ChevronRight, Fuel, Gauge, Zap } from 'lucide-react';
import { getVehicleById, getRecommendedVehicles, getCategoryLabel, Vehicle } from '../data/vehicleData';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CarDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [vehicle, setVehicle] = useState<Vehicle | null>(null);
    const [selectedImage, setSelectedImage] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (id) {
            const foundVehicle = getVehicleById(parseInt(id));
            setVehicle(foundVehicle || null);
            setSelectedImage(0);
            setIsLoading(false);
            window.scrollTo(0, 0);
        }
    }, [id]);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gotam-black flex items-center justify-center">
                <div className="w-12 h-12 border-2 border-gotam-gold border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    if (!vehicle) {
        return (
            <div className="min-h-screen bg-gotam-black">
                <Header />
                <div className="flex flex-col items-center justify-center min-h-[60vh] px-6">
                    <h1 className="font-display text-4xl text-gotam-cream mb-4">Véhicule non trouvé</h1>
                    <p className="text-gotam-cream/60 mb-8">Le véhicule que vous recherchez n'existe pas.</p>
                    <Link to="/" className="luxury-button-primary">
                        Retour à l'accueil
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    const recommendedVehicles = getRecommendedVehicles(vehicle.id, 3);

    return (
        <div className="min-h-screen bg-gotam-black">
            <Header />

            <main className="pt-24">
                {/* Back Navigation */}
                <div className="max-w-[1800px] mx-auto px-6 lg:px-12 py-6">
                    <Link
                        to="/#fleet"
                        className="inline-flex items-center gap-2 text-gotam-cream/60 hover:text-gotam-gold transition-colors duration-300 group"
                    >
                        <ArrowLeft size={18} className="transition-transform duration-300 group-hover:-translate-x-1" />
                        <span className="font-body text-sm uppercase tracking-[0.15em]">Retour à la collection</span>
                    </Link>
                </div>

                {/* Hero Section */}
                <section className="relative">
                    <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                            {/* Image Gallery */}
                            <div className="space-y-4">
                                {/* Main Image */}
                                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                                    <img
                                        src={vehicle.gallery[selectedImage]}
                                        alt={vehicle.name}
                                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gotam-black/30 via-transparent to-transparent pointer-events-none" />

                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4 bg-gotam-gold px-4 py-2">
                                        <span className="font-body text-xs uppercase tracking-[0.2em] text-gotam-black font-medium">
                                            {getCategoryLabel(vehicle.category)}
                                        </span>
                                    </div>
                                </div>

                                {/* Thumbnail Gallery */}
                                <div className="flex gap-3">
                                    {vehicle.gallery.map((img, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedImage(index)}
                                            className={`relative aspect-[4/3] w-24 overflow-hidden rounded-sm transition-all duration-300 ${selectedImage === index
                                                ? 'ring-2 ring-gotam-gold ring-offset-2 ring-offset-gotam-black'
                                                : 'opacity-60 hover:opacity-100'
                                                }`}
                                        >
                                            <img
                                                src={img}
                                                alt={`${vehicle.name} - Vue ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Vehicle Info */}
                            <div className="lg:sticky lg:top-32 space-y-8">
                                {/* Header */}
                                <div>
                                    <p className="luxury-subheading text-gotam-gold mb-4">
                                        {getCategoryLabel(vehicle.category)}
                                    </p>
                                    <h1 className="font-display text-4xl lg:text-5xl xl:text-6xl text-gotam-cream mb-4 font-light tracking-tight">
                                        {vehicle.name}
                                    </h1>
                                    {/* <div className="flex items-baseline gap-2">
                                        <span className="font-body text-sm text-gotam-cream/50">À partir de</span>
                                        <span className="font-display text-3xl text-gotam-gold">{vehicle.priceFrom}</span>
                                        <span className="font-body text-sm text-gotam-cream/50">/ jour</span>
                                    </div> */}
                                </div>

                                <div className="luxury-divider" />

                                {/* Description */}
                                <p className="font-body text-gotam-cream/70 text-lg leading-relaxed">
                                    {vehicle.description}
                                </p>

                                {/* Quick Specs */}
                                {/* <div className="grid grid-cols-2 gap-4">
                                    <div className="luxury-card p-4 flex items-center gap-4">
                                        <Users className="text-gotam-gold" size={24} strokeWidth={1.5} />
                                        <div>
                                            <p className="font-body text-xs text-gotam-cream/50 uppercase tracking-wider">Passagers</p>
                                            <p className="font-display text-xl text-gotam-cream">{vehicle.passengers}</p>
                                        </div>
                                    </div>
                                    <div className="luxury-card p-4 flex items-center gap-4">
                                        <Settings className="text-gotam-gold" size={24} strokeWidth={1.5} />
                                        <div>
                                            <p className="font-body text-xs text-gotam-cream/50 uppercase tracking-wider">Transmission</p>
                                            <p className="font-display text-xl text-gotam-cream">Auto</p>
                                        </div>
                                    </div>
                                </div> */}

                                {/* Features */}
                                <div>
                                    <h3 className="font-display text-lg text-gotam-cream mb-4">Équipements Premium</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {vehicle.features.map((feature) => (
                                            <span
                                                key={feature}
                                                className="font-body text-sm text-gotam-cream/80 px-4 py-2 bg-gotam-charcoal/50 border border-gotam-cream/10"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a href="/#contact" className="luxury-button-primary flex-1 text-center">
                                        Réserver Maintenant
                                    </a>
                                    <a href="/#contact" className="luxury-button-outline flex-1 text-center">
                                        Demander un Devis
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Specifications Section */}
                {/* <section className="py-20 lg:py-32">
                    <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
                        <div className="text-center mb-12">
                            <p className="luxury-subheading text-gotam-gold mb-4">Performance</p>
                            <h2 className="font-display text-3xl lg:text-4xl text-gotam-cream">Spécifications Techniques</h2>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="luxury-card p-6 text-center group hover:border-gotam-gold/50 transition-all duration-500">
                                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gotam-gold/10 flex items-center justify-center group-hover:bg-gotam-gold/20 transition-colors duration-500">
                                    <Fuel className="text-gotam-gold" size={28} strokeWidth={1.5} />
                                </div>
                                <p className="font-body text-xs text-gotam-cream/50 uppercase tracking-wider mb-2">Moteur</p>
                                <p className="font-display text-xl text-gotam-cream">{vehicle.specs.engine}</p>
                            </div>

                            <div className="luxury-card p-6 text-center group hover:border-gotam-gold/50 transition-all duration-500">
                                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gotam-gold/10 flex items-center justify-center group-hover:bg-gotam-gold/20 transition-colors duration-500">
                                    <Zap className="text-gotam-gold" size={28} strokeWidth={1.5} />
                                </div>
                                <p className="font-body text-xs text-gotam-cream/50 uppercase tracking-wider mb-2">Puissance</p>
                                <p className="font-display text-xl text-gotam-cream">{vehicle.specs.power}</p>
                            </div>

                            <div className="luxury-card p-6 text-center group hover:border-gotam-gold/50 transition-all duration-500">
                                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gotam-gold/10 flex items-center justify-center group-hover:bg-gotam-gold/20 transition-colors duration-500">
                                    <Settings className="text-gotam-gold" size={28} strokeWidth={1.5} />
                                </div>
                                <p className="font-body text-xs text-gotam-cream/50 uppercase tracking-wider mb-2">Transmission</p>
                                <p className="font-display text-xl text-gotam-cream">{vehicle.specs.transmission}</p>
                            </div>

                            <div className="luxury-card p-6 text-center group hover:border-gotam-gold/50 transition-all duration-500">
                                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gotam-gold/10 flex items-center justify-center group-hover:bg-gotam-gold/20 transition-colors duration-500">
                                    <Gauge className="text-gotam-gold" size={28} strokeWidth={1.5} />
                                </div>
                                <p className="font-body text-xs text-gotam-cream/50 uppercase tracking-wider mb-2">Vitesse Max</p>
                                <p className="font-display text-xl text-gotam-cream">{vehicle.specs.topSpeed}</p>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* Recommended Vehicles Section */}
                <section className="py-20 lg:py-32 bg-gotam-charcoal">
                    <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
                        <div className="text-center mb-12">
                            <p className="luxury-subheading text-gotam-gold mb-4">Découvrez Aussi</p>
                            <h2 className="font-display text-3xl lg:text-4xl text-gotam-cream">Véhicules Recommandés</h2>
                            <div className="luxury-divider mx-auto mt-6" />
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {recommendedVehicles.map((rec) => (
                                <Link
                                    key={rec.id}
                                    to={`/car/${rec.id}`}
                                    className="group luxury-card overflow-hidden"
                                >
                                    {/* Image */}
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <img
                                            src={rec.image}
                                            alt={rec.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-gotam-black/80 via-transparent to-transparent" />
                                        {/* Price Badge */}
                                        {/* <div className="absolute top-4 right-4 bg-gotam-black/80 backdrop-blur-sm px-4 py-2 border border-gotam-gold/30">
                                            <p className="font-body text-xs text-gotam-gold">
                                                À partir de {rec.priceFrom}
                                            </p>
                                        </div> */}
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="font-display text-2xl text-gotam-cream mb-3 group-hover:text-gotam-gold transition-colors duration-400">
                                            {rec.name}
                                        </h3>

                                        {/* Specs */}
                                        <div className="flex items-center gap-6 mb-4 text-gotam-cream/60">
                                            <div className="flex items-center gap-2">
                                                <Users size={16} strokeWidth={1.5} />
                                                <span className="font-body text-sm">{rec.passengers}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Settings size={16} strokeWidth={1.5} />
                                                <span className="font-body text-sm">Auto</span>
                                            </div>
                                        </div>

                                        {/* Features */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {rec.features.slice(0, 2).map((feature) => (
                                                <span
                                                    key={feature}
                                                    className="font-body text-xs text-gotam-cream/50 px-3 py-1 border border-gotam-cream/10"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>

                                        {/* CTA */}
                                        <span className="inline-flex items-center gap-2 font-body text-sm uppercase tracking-[0.15em] text-gotam-gold group-hover:text-gotam-gold-light transition-colors duration-400">
                                            Voir les détails
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
                        <div className="text-center mt-12">
                            <Link to="/#fleet" className="luxury-button-outline">
                                Voir Toute la Collection
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default CarDetailPage;
