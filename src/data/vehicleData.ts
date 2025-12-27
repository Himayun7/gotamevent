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
        name: 'Rolls-Royce Ghost',
        category: 'sedan',
        image: '/rollsroyce-ghost/rollsroyce-ghost.png',
        passengers: 4,
        features: ['Champagne Bar', 'Ciel Étoilé', 'Massage'],
        priceFrom: '1 500€',
        description: 'L\'expression ultime du raffinement. La Rolls-Royce Ghost incarne l\'élégance silencieuse avec son architecture de luxe moderne, offrant une expérience de conduite d\'une douceur incomparable. Un sanctuaire de sérénité sur roues.',
        specs: {
            engine: 'V12 6.75L Twin-Turbo',
            power: '571 ch',
            transmission: 'Automatique 8 vitesses',
            topSpeed: '250 km/h',
        },
        gallery: [
            '/rollsroyce-ghost/rollsroyce-ghost.png',
            '/rollsroyce-ghost/rollsroyce-ghost-side.png',
            '/rollsroyce-ghost/rollsroyce-ghost-top.png',
            '/rollsroyce-ghost/rollsroyce-ghost-innner.png',
        ],
    },
    {
        id: 2,
        name: 'Mercedes-Benz Maybach',
        category: 'sedan',
        image: '/mercedes-benz/maybach.png',
        passengers: 4,
        features: ['First Class', 'Burmester 4D', 'Aromathérapie'],
        priceFrom: '1 100€',
        description: 'La définition allemande du luxe ultime. La Mercedes-Benz Maybach combine technologie de pointe et confort premium pour une expérience de voyage inégalée. L\'excellence accessible à ceux qui exigent le meilleur.',
        specs: {
            engine: 'V12 6.0L Biturbo',
            power: '612 ch',
            transmission: 'Automatique 9G-TRONIC',
            topSpeed: '250 km/h',
        },
        gallery: [
            '/mercedes-benz/maybach.png',
            '/mercedes-benz/maybach-side.png',
            '/mercedes-benz/maybach-top.png',
            '/mercedes-benz/maybach-inner.png',
        ],
    },
    {
        id: 3,
        name: 'Mercedes-AMG G63',
        category: 'suv',
        image: '/g63/g63.png',
        passengers: 5,
        features: ['AMG Performance', 'Burmester Audio', 'Toit Panoramique'],
        priceFrom: '1 200€',
        description: 'L\'icône des SUV de luxe. Le Mercedes-AMG G63 allie une puissance brute à un raffinement exceptionnel. Son design emblématique et ses performances légendaires en font le choix ultime pour ceux qui veulent dominer la route avec style.',
        specs: {
            engine: 'V8 4.0L Biturbo AMG',
            power: '585 ch',
            transmission: 'AMG SPEEDSHIFT 9G',
            topSpeed: '220 km/h',
        },
        gallery: [
            '/g63/g63.png',
            '/g63/g63-side.png',
            '/g63/g63-top.png',
            '/g63/g63-inner.png',
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
    };
    return labels[category] || category;
};
