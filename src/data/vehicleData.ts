export interface Vehicle {
    id: number;
    name: string;
    category: string;
    image: string;
    passengers: number;
    features: string[];
    priceFrom: string;
    description: string;
    specs: {
        engine: string;
        power: string;
        transmission: string;
        topSpeed: string;
    };
    gallery: string[];
}

export const vehicles: Vehicle[] = [
    {
        id: 1,
        name: 'Rolls-Royce Phantom',
        category: 'sedan',
        image: 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        passengers: 4,
        features: ['Champagne Bar', 'Ciel Étoilé', 'Massage'],
        priceFrom: '1 500€',
        description: 'Le summum du luxe automobile. La Rolls-Royce Phantom incarne l\'excellence britannique avec son intérieur somptueux, son silence de conduite légendaire et ses finitions artisanales incomparables. Chaque voyage devient une expérience d\'exception.',
        specs: {
            engine: 'V12 6.75L Twin-Turbo',
            power: '563 ch',
            transmission: 'Automatique 8 vitesses',
            topSpeed: '250 km/h',
        },
        gallery: [
            'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1200',
            'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200',
            'https://images.pexels.com/photos/3786091/pexels-photo-3786091.jpeg?auto=compress&cs=tinysrgb&w=1200',
        ],
    },
    {
        id: 2,
        name: 'Bentley Flying Spur',
        category: 'sedan',
        image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        passengers: 4,
        features: ['Cuir Mulliner', 'Audio Naim', 'WiFi'],
        priceFrom: '1 200€',
        description: 'L\'alliance parfaite entre performance et raffinement. La Bentley Flying Spur offre une expérience de conduite dynamique tout en préservant le confort absolu de ses passagers. Un chef-d\'œuvre d\'ingénierie et d\'artisanat.',
        specs: {
            engine: 'W12 6.0L Twin-Turbo',
            power: '635 ch',
            transmission: 'Automatique 8 vitesses',
            topSpeed: '333 km/h',
        },
        gallery: [
            'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200',
            'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1200',
            'https://images.pexels.com/photos/3786091/pexels-photo-3786091.jpeg?auto=compress&cs=tinysrgb&w=1200',
        ],
    },
    {
        id: 3,
        name: 'Mercedes-Maybach S680',
        category: 'sedan',
        image: 'https://images.pexels.com/photos/3786091/pexels-photo-3786091.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        passengers: 4,
        features: ['First Class', 'Burmester 4D', 'Aromathérapie'],
        priceFrom: '1 100€',
        description: 'La définition allemande du luxe ultime. La Mercedes-Maybach S680 combine technologie de pointe et confort premium pour une expérience de voyage inégalée. L\'excellence accessible à ceux qui exigent le meilleur.',
        specs: {
            engine: 'V12 6.0L Biturbo',
            power: '612 ch',
            transmission: 'Automatique 9G-TRONIC',
            topSpeed: '250 km/h',
        },
        gallery: [
            'https://images.pexels.com/photos/3786091/pexels-photo-3786091.jpeg?auto=compress&cs=tinysrgb&w=1200',
            'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1200',
            'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200',
        ],
    },
    {
        id: 4,
        name: 'Range Rover Autobiography',
        category: 'suv',
        image: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        passengers: 5,
        features: ['Executive Class', 'Meridian', 'Toit Panoramique'],
        priceFrom: '900€',
        description: 'Le SUV de luxe par excellence. Le Range Rover Autobiography allie capacités tout-terrain légendaires et raffinement intérieur exceptionnel. Dominez la route avec élégance et puissance.',
        specs: {
            engine: 'V8 4.4L Twin-Turbo',
            power: '530 ch',
            transmission: 'Automatique 8 vitesses',
            topSpeed: '250 km/h',
        },
        gallery: [
            'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1200',
            'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=1200',
            'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1200',
        ],
    },
    {
        id: 5,
        name: 'Bentley Bentayga',
        category: 'suv',
        image: 'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        passengers: 5,
        features: ['Mulliner Spec', 'Naim Audio', 'Rear Entertainment'],
        priceFrom: '1 000€',
        description: 'Le SUV le plus luxueux au monde. La Bentley Bentayga redéfinit les standards du segment avec son artisanat exceptionnel, ses performances impressionnantes et son confort inégalé.',
        specs: {
            engine: 'W12 6.0L Twin-Turbo',
            power: '635 ch',
            transmission: 'Automatique 8 vitesses',
            topSpeed: '306 km/h',
        },
        gallery: [
            'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=1200',
            'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=1200',
            'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200',
        ],
    },
    {
        id: 6,
        name: 'Rolls-Royce Silver Cloud',
        category: 'classic',
        image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        passengers: 4,
        features: ['Restauration Complète', 'Intérieur Cuir', 'Iconique'],
        priceFrom: '2 000€',
        description: 'Une icône intemporelle de l\'élégance automobile. La Rolls-Royce Silver Cloud représente l\'âge d\'or du luxe britannique, parfaitement restaurée pour offrir une expérience authentique et mémorable.',
        specs: {
            engine: 'L6 4.9L',
            power: '178 ch',
            transmission: 'Automatique 4 vitesses',
            topSpeed: '166 km/h',
        },
        gallery: [
            'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1200',
            'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1200',
            'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200',
        ],
    },
];

export const getVehicleById = (id: number): Vehicle | undefined => {
    return vehicles.find((v) => v.id === id);
};

export const getRecommendedVehicles = (currentId: number, limit: number = 3): Vehicle[] => {
    return vehicles.filter((v) => v.id !== currentId).slice(0, limit);
};

export const getCategoryLabel = (category: string): string => {
    const labels: Record<string, string> = {
        sedan: 'Berline',
        suv: 'SUV',
        classic: 'Classique',
    };
    return labels[category] || category;
};
