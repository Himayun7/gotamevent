import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: '8 Avenue Montaigne\n75008 Paris, France',
    },
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+33 7 67 71 58 48\n+33 7 87 27 82 87',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'gotamevents@gmail.com',
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: 'Service disponible 24h/24\n7 jours sur 7',
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 lg:py-40 bg-gotam-black overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #c9a962 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`text-center mb-16 lg:mb-24 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <p className="luxury-subheading text-gotam-gold mb-6">Contact</p>
          <h2 className="luxury-heading text-display-lg text-gotam-cream mb-8">
            Réservez Votre Expérience
          </h2>
          <div className="luxury-divider mx-auto mb-8" />
          <p className="font-body font-light text-gotam-cream/70 text-lg max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour créer une prestation
            sur-mesure adaptée à vos besoins les plus exigeants
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-16 lg:gap-24">
          {/* Contact Information */}
          <div
            className={`transition-all duration-1000 delay-200 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
          >
            <div className="space-y-8">
              {contactInfo.map((item, index) => (
                <div
                  key={item.title}
                  className={`flex gap-5 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border border-gotam-gold/30">
                    <item.icon size={20} strokeWidth={1.5} className="text-gotam-gold" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-gotam-cream mb-1">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-gotam-cream/60 whitespace-pre-line leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div
              className={`mt-12 aspect-[4/3] relative overflow-hidden border border-gotam-cream/10 transition-all duration-1000 delay-600 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              <img
                src="https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=600&h=450&fit=crop"
                alt="Paris location"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gotam-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={32} strokeWidth={1} className="text-gotam-gold mx-auto mb-3" />
                  <p className="font-display text-lg text-gotam-cream">Paris, France</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-400 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
              }`}
          >
            <div className="bg-gotam-charcoal/30 backdrop-blur-sm border border-gotam-cream/5 p-8 lg:p-12">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle size={48} strokeWidth={1} className="text-gotam-gold mb-6" />
                  <h3 className="font-display text-2xl text-gotam-cream mb-4">
                    Message Envoyé
                  </h3>
                  <p className="font-body text-gotam-cream/60">
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-body text-xs uppercase tracking-[0.15em] text-gotam-cream/60 mb-3"
                      >
                        Nom Complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full bg-transparent border border-gotam-cream/20 px-5 py-4 font-body text-gotam-cream placeholder-gotam-cream/30 focus:border-gotam-gold focus:outline-none transition-colors duration-400"
                        placeholder="Votre nom"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block font-body text-xs uppercase tracking-[0.15em] text-gotam-cream/60 mb-3"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full bg-transparent border border-gotam-cream/20 px-5 py-4 font-body text-gotam-cream placeholder-gotam-cream/30 focus:border-gotam-gold focus:outline-none transition-colors duration-400"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block font-body text-xs uppercase tracking-[0.15em] text-gotam-cream/60 mb-3"
                      >
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full bg-transparent border border-gotam-cream/20 px-5 py-4 font-body text-gotam-cream placeholder-gotam-cream/30 focus:border-gotam-gold focus:outline-none transition-colors duration-400"
                        placeholder="+33 7 00 00 00 00"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label
                        htmlFor="service"
                        className="block font-body text-xs uppercase tracking-[0.15em] text-gotam-cream/60 mb-3"
                      >
                        Type de Service *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formState.service}
                        onChange={handleChange}
                        className="w-full bg-gotam-charcoal border border-gotam-cream/20 px-5 py-4 font-body text-gotam-cream focus:border-gotam-gold focus:outline-none transition-colors duration-400 appearance-none cursor-pointer"
                      >
                        <option value="">Sélectionnez un service</option>
                        <option value="wedding">Mariages</option>
                        <option value="event">Événements Privés</option>
                        <option value="shooting">Shootings & Cinéma</option>
                      </select>
                    </div>
                  </div>

                  {/* Date */}
                  <div>
                    <label
                      htmlFor="date"
                      className="block font-body text-xs uppercase tracking-[0.15em] text-gotam-cream/60 mb-3"
                    >
                      Date Souhaitée
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formState.date}
                      onChange={handleChange}
                      className="w-full bg-gotam-charcoal border border-gotam-cream/20 px-5 py-4 font-body text-gotam-cream focus:border-gotam-gold focus:outline-none transition-colors duration-400"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block font-body text-xs uppercase tracking-[0.15em] text-gotam-cream/60 mb-3"
                    >
                      Votre Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-gotam-cream/20 px-5 py-4 font-body text-gotam-cream placeholder-gotam-cream/30 focus:border-gotam-gold focus:outline-none transition-colors duration-400 resize-none"
                      placeholder="Décrivez votre projet ou vos besoins..."
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full luxury-button-primary flex items-center justify-center gap-3"
                  >
                    <span>Envoyer la Demande</span>
                    <Send size={16} strokeWidth={1.5} />
                  </button>

                  <p className="font-body text-xs text-gotam-cream/40 text-center">
                    En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
