/**
 * Design Philosophy: Elegância Clássica Contemporânea
 * - Asymmetric layout with image on left, content on right
 * - Gold decorative line above title
 * - Professional typography and spacing
 * - FIEL AO DOCUMENTO: Texto exato sobre a Dra. Ana Clara
 */

export default function About() {
  return (
    <section
      id="specialist"
      className="py-20 md:py-32 bg-cream relative overflow-hidden"
    >
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              {/* Decorative Background */}
              <div className="absolute -top-8 -left-8 w-32 h-32 [background-color:var(--gold)] rounded-full opacity-20"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 [background-color:var(--burgundy)] rounded-full opacity-10"></div>

              {/* Image Container */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028836532/7ZJJ4zrQDuAS4Wo5X6o3b2/IMG-20260311-WA0121_92dc73e8.jpg"
                  alt="Dra. Ana Clara Gonzaga"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Decorative Line */}
            <div className="w-16 h-1 [background-color:var(--gold)] rounded-full"></div>

            {/* Title */}
            <div>
              <h2 className="font-display [color:var(--burgundy)] font-bold text-4xl md:text-5xl mb-2">
                Conheça a Especialista
              </h2>
              <p className="font-body [color:var(--gold)] font-semibold text-lg">
                em Direito do Consumidor
              </p>
            </div>

            {/* Specialist Info */}
            <div className="space-y-2">
              <h3 className="font-display [color:var(--burgundy)] font-bold text-3xl">
                Dra. Ana Clara Gonzaga de Almeida
              </h3>
              <p className="font-body [color:var(--charcoal)] font-semibold text-lg">
                OAB-BA 85.787
              </p>
            </div>

            {/* Credentials */}
            <div className="bg-white rounded-lg p-6 border-l-4" style={{ borderColor: 'var(--gold)' }}>
              <p className="font-body [color:var(--charcoal)] text-base leading-relaxed">
                Graduada pela Faculdade de Ciências Sociais Aplicadas – FACISA e especialista em Direito do Consumidor.
              </p>
            </div>

            {/* Main Text - TEXTO EXATO DO DOCUMENTO */}
            <div className="space-y-6 font-body [color:var(--charcoal)] text-base leading-relaxed">
              <p>
                A Dra. Ana Clara atua na defesa dos consumidores que tiveram seus direitos violados, ajudando pessoas a encontrarem soluções jurídicas claras, eficientes e responsáveis. Seu trabalho é pautado em uma abordagem moderna, transparente e totalmente centrada no cliente, oferecendo atendimento humanizado, acompanhamento próximo e orientação completa em todas as etapas do processo.
              </p>

              <p>
                Seu compromisso é simplificar o Direito e transformar problemas em soluções, com atuação em todo o Brasil, de forma online e presencial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
