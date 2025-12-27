import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  event: string;
}

const Testimonials: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Karim',
      role: 'Client Mariage',
      content:
        'Nous avons loué une magnifique Rolls Royce pour notre mariage, et tout était absolument parfait. La voiture a ajouté une touche de glamour à notre journée. Le chauffeur était ponctuel, professionnel et très sympathique. Merci d\'avoir contribué à rendre ce moment si spécial. Je recommande à 100 % !',
      rating: 4,
      event: 'Mariage',
    },
    {
      id: 2,
      name: 'Lucas',
      role: 'Client Paris Tour',
      content:
        'J\'ai loué une voiture avec chauffeur pour visiter Paris avec ma chérie et c\'était incroyable ! La voiture était somptueuse, et nous nous sommes sentis comme des VIP tout au long de la journée. Une expérience que je referai sans hésiter pour mes prochains séjours ou événements privés. Bravo à toute l\'équipe pour ce service irréprochable !',
      rating: 5,
      event: 'Événement Privé',
    },
    {
      id: 3,
      name: 'Sara',
      role: 'Client Anniversaire',
      content:
        'Pour mon anniversaire, je voulais quelque chose de spécial, et louer une voiture de luxe était l\'idée parfaite. L\'expérience était au-delà de mes attentes : une voiture impeccable, un service premium et une vraie sensation de luxe tout au long de la soirée. J\'ai impressionné tous mes invités, et j\'ai adoré vivre ce moment. Merci pour cette expérience unique !',
      rating: 5,
      event: 'Anniversaire',
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-32 lg:py-40 bg-gotam-charcoal overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 border border-gotam-gold/5 rounded-full" />
      <div className="absolute bottom-20 right-20 w-96 h-96 border border-gotam-gold/5 rounded-full" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center mb-16 lg:mb-20 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <p className="luxury-subheading text-gotam-gold mb-6">Témoignages</p>
          <h2 className="luxury-heading text-display-lg text-gotam-cream mb-8">
            Ils Nous Font Confiance
          </h2>
          <div className="luxury-divider mx-auto" />
        </div>

        {/* Testimonial Carousel */}
        <div
          className={`relative transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {/* Main Testimonial */}
          <div className="relative bg-gotam-black/50 backdrop-blur-sm border border-gotam-cream/5 p-8 lg:p-16">
            {/* Quote Mark */}
            <div className="absolute top-8 left-8 lg:top-12 lg:left-12 text-gotam-gold/20 font-display text-[120px] lg:text-[180px] leading-none select-none">
              "
            </div>

            <div className="relative grid lg:grid-cols-[1fr,auto] gap-12 items-center">
              {/* Content */}
              <div>
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill="#c9a962"
                      strokeWidth={0}
                      className="text-gotam-gold"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-display text-xl lg:text-2xl font-light text-gotam-cream/90 italic leading-relaxed mb-8">
                  "{testimonials[activeIndex].content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div>
                    <p className="font-display text-lg text-gotam-cream">
                      {testimonials[activeIndex].name}
                    </p>
                    <p className="font-body text-sm text-gotam-cream/60">
                      {testimonials[activeIndex].role}
                    </p>
                  </div>
                  <div className="ml-auto">
                    <span className="font-body text-xs uppercase tracking-[0.15em] text-gotam-gold px-4 py-2 border border-gotam-gold/30">
                      {testimonials[activeIndex].event}
                    </span>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex lg:flex-col gap-4">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 flex items-center justify-center border border-gotam-cream/20 text-gotam-cream/60 hover:border-gotam-gold hover:text-gotam-gold transition-all duration-400"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} strokeWidth={1.5} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 flex items-center justify-center border border-gotam-cream/20 text-gotam-cream/60 hover:border-gotam-gold hover:text-gotam-gold transition-all duration-400"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-400 ${index === activeIndex
                  ? 'bg-gotam-gold w-8'
                  : 'bg-gotam-cream/30 hover:bg-gotam-cream/50'
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default Testimonials;
