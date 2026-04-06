/**
 * Design Philosophy: Elegância Clássica Contemporânea
 * - Full-width CTA section with pattern background
 * - Centered content with strong messaging
 * - Prominent WhatsApp button
 * - Art Deco inspired design elements
 */

export default function CTAFinal() {
  return (
    <section
      id="cta"
      className="py-20 md:py-32 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(212, 196, 176, 0.3) 0%, rgba(212, 196, 176, 0.15) 50%, rgba(245, 240, 235, 0.25) 100%)',
      }}
    >
      {/* Subtle Decorative Background */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(212, 196, 176, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(212, 196, 176, 0.1) 0%, transparent 50%)',
        }}
      ></div>

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Card Container with Inverse Gradient */}
          <div
            className="p-10 md:p-12 rounded-2xl shadow-xl backdrop-blur-sm"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(245, 240, 235, 0.9) 100%)',
              border: '1px solid rgba(212, 196, 176, 0.3)',
            }}
          >
            {/* Decorative Line */}
            <div className="w-16 h-1 [background-color:var(--gold)] rounded-full mx-auto mb-6"></div>

            {/* Main Message */}
            <div className="space-y-6 mb-8">
              <h2 className="font-display [color:var(--burgundy)] font-bold text-3xl md:text-4xl lg:text-5xl leading-tight">
                Defenda seus direitos com quem entende do assunto.
              </h2>
              <p className="font-body [color:var(--charcoal)] text-base md:text-lg leading-relaxed">
                Seus direitos merecem atenção especializada. Entre em contato com nossa equipe e saiba como podemos resolver seu caso com segurança e eficiência.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="https://wa.me/5573999501328?text=Olá%2C%20gostaria%20de%20falar%20com%20a%20Dra.%20Ana%20Clara%20Gonzaga%20agora"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-burgundy text-cream px-8 py-4 rounded-lg font-display font-bold text-lg hover:bg-burgundy-dark transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                FALAR COM ESPECIALISTA AGORA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
