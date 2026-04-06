import { ChevronDown } from 'lucide-react';

/**
 * Design Philosophy: Elegância Clássica Contemporânea
 * - Full viewport height with background image
 * - Asymmetric layout with content on left
 * - Gold decorative line separating content
 * - Smooth scroll indicator at bottom
 * - Dark text on light background for readability
 * - FIEL AO DOCUMENTO: Texto exato sobre defender consumidores
 */

export default function Hero() {
  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(212, 196, 176, 0.4) 0%, rgba(212, 196, 176, 0.2) 50%, rgba(245, 240, 235, 0.3) 100%)',
      }}
    >
      {/* Subtle Decorative Background */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(212, 196, 176, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(212, 196, 176, 0.1) 0%, transparent 50%)',
        }}
      ></div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-screen flex items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Card with Inverse Gradient */}
            <div
              className="p-8 md:p-10 rounded-2xl shadow-xl backdrop-blur-sm"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(245, 240, 235, 0.9) 100%)',
                border: '1px solid rgba(212, 196, 176, 0.3)',
              }}
            >
              {/* Decorative Line */}
              <div className="w-16 h-1 [background-color:var(--gold)] rounded-full mb-6"></div>

              {/* Main Title */}
              <div className="space-y-4 mb-6">
                <h1 className="font-display [color:var(--burgundy)] font-bold text-4xl md:text-5xl lg:text-6xl leading-tight">
                  Advogada Especialista em Direito do Consumidor
                </h1>
              </div>

              {/* Subtitle - TEXTO EXATO DO DOCUMENTO */}
              <p className="font-body [color:var(--charcoal)] text-base md:text-lg leading-relaxed">
                Defendemos os consumidores contra práticas abusivas, com atendimento de forma totalmente online em TODO BRASIL, tiramos suas dúvidas e resolvemos o seu problema sem você sair de casa.
              </p>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <a
                  href="https://wa.me/5573999501328?text=Olá%2C%20gostaria%20de%20falar%20com%20a%20Dra.%20Ana%20Clara%20Gonzaga%20agora"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2 text-base"
                >
                  FALAR COM ADVOGADA AGORA
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="hidden md:flex items-center justify-center relative">
            {/* Decorative Circles */}
            <div className="absolute -top-20 -right-20 w-80 h-80 [background-color:var(--gold)] rounded-full opacity-5"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 [background-color:var(--burgundy)] rounded-full opacity-3"></div>
            
            {/* Image Container */}
            <div className="relative z-10 w-full max-w-md">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028836532/7ZJJ4zrQDuAS4Wo5X6o3b2/DSC09348_58a09664.jpg"
                alt="Dra. Ana Clara Gonzaga"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce text-burgundy hover:text-burgundy-dark transition-colors"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
