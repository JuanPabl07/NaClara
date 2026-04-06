import { Star } from 'lucide-react';

/**
 * Design Philosophy: Elegância Clássica Contemporânea
 * - Elegant testimonials section with Google ratings
 * - Gold decorative line above title
 * - Star ratings prominently displayed
 * - Subtle background pattern
 */

const testimonials = [
  {
    id: 1,
    name: 'André Júnior',
    time: '1 ano atrás',
    rating: 5,
    text: 'Fui muito bem atendido. Meu processo foi muito rápido e melhor de tudo, ganhamos a ação. Impressionantes durante todo o processo...',
  },
  {
    id: 2,
    name: 'Leandro Brigadeiro',
    time: '1 ano atrás',
    rating: 5,
    text: 'Outro profissional, meu processo foi muito rápido e o melhor de tudo, ganhamos a causa!',
  },
  {
    id: 3,
    name: 'Gabriela Zamol',
    time: '1 ano atrás',
    rating: 5,
    text: 'Eu tinha dúvida. Muito rápido e prestativo. Fizemos tudo de forma online pois sou de outro Estado.',
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-15 z-0"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310419663028836532/7ZJJ4zrQDuAS4Wo5X6o3b2/testimonials-background-cc2Yx6VSiw4mYBKX49ZNyB.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <div className="w-16 h-1 bg-gold rounded-full mx-auto"></div>
          </div>

          {/* Google Rating Badge */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="fill-gold text-gold" />
              ))}
            </div>
            <span className="font-body font-bold text-charcoal">Google</span>
          </div>

          <h2 className="font-display text-burgundy font-bold text-4xl md:text-5xl mb-4">
            O que nossos clientes dizem:
          </h2>

          <p className="font-body text-charcoal text-lg max-w-2xl mx-auto">
            Confira abaixo alguns relatos de experiências compartilhadas por clientes que já foram atendidos pelo nosso escritório.
          </p>

          <p className="font-body text-charcoal text-sm mt-6 font-semibold">
            Avaliação totalizada Google 5.0 de 5, com base em 95 avaliações
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="card-elegant p-6 hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-gold text-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="font-body text-charcoal text-sm leading-relaxed mb-4">
                {testimonial.text}
              </p>

              {/* Author */}
              <div className="border-t border-beige-light pt-4">
                <p className="font-display text-burgundy font-bold text-sm">
                  {testimonial.name}
                </p>
                <p className="font-body text-muted text-xs">
                  {testimonial.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Link */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?q=ana+clara+gonzaga+advogada"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-gold font-semibold hover:text-gold-dark transition-colors inline-flex items-center gap-2"
          >
            Ver todas as avaliações no Google →
          </a>
        </div>
      </div>
    </section>
  );
}
