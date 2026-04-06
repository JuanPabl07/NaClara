import { Headphones, Zap, Trophy } from 'lucide-react';

/**
 * Design Philosophy: Elegância Clássica Contemporânea
 * - Asymmetric layout with content on left, image on right
 * - Gold decorative line above title
 * - Icons with burgundy backgrounds
 * - FIEL AO DOCUMENTO: Texto exato sobre o escritório
 */

const differentials = [
  {
    id: 1,
    icon: Headphones,
    title: 'Atendimento 100% Digital e Nacional',
    description:
      'Atendemos de forma totalmente online, o que nos permite atender clientes em qualquer estado do Brasil com praticidade e economia de tempo.',
  },
  {
    id: 2,
    icon: Zap,
    title: 'Agilidade e Transparência em Cada etapa',
    description:
      'Mantemos nossos clientes informados sobre cada movimento do processo, garantindo confiança, clareza e tranquilidade.',
  },
  {
    id: 3,
    icon: Trophy,
    title: 'Resultados Reconhecidos e Comprovados',
    description:
      'Com mais de 100 avaliações 5 estrelas, nosso histórico demonstra eficiência, ética e comprometimento em cada caso assumido.',
  },
];

export default function Differentials() {
  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 opacity-15 z-0"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310419663028836532/7ZJJ4zrQDuAS4Wo5X6o3b2/testimonials-background-cc2Yx6VSiw4mYBKX49ZNyB.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Decorative Line */}
            <div className="w-16 h-1 [background-color:var(--gold)] rounded-full"></div>

            {/* Title */}
            <div>
              <h2 className="font-display [color:var(--burgundy)] font-bold text-4xl md:text-5xl mb-2">
                Conheça nosso escritório
              </h2>
            </div>

            {/* Main Text - TEXTO EXATO DO DOCUMENTO */}
            <div className="space-y-6 font-body [color:var(--charcoal)] text-base leading-relaxed">
              <p>
                Nosso escritório oferece atendimento 100% digital, permitindo que clientes de qualquer lugar do Brasil resolvam seus problemas jurídicos com praticidade, agilidade e segurança, sem precisar sair de casa.
              </p>

              <p>
                Somos especialistas em Direito do Consumidor e atuamos diariamente contra abusos cometidos por bancos, concessionárias de energia e água, bem como por empresas prestadoras de serviços. Nosso objetivo é garantir que o consumidor não fique no prejuízo, buscando soluções jurídicas eficientes, com qualidade técnica e absoluto comprometimento ético.
              </p>

              <p>
                Contamos com uma equipe preparada para analisar sua situação, esclarecer suas dúvidas e conduzir seu caso com responsabilidade, estratégia e atenção em cada detalhe.
              </p>
            </div>

            {/* Differentials List */}
            <div className="space-y-6 pt-4">
              {differentials.map((diff) => {
                const Icon = diff.icon;
                return (
                  <div key={diff.id} className="flex gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 pt-1">
                      <Icon size={28} className="text-burgundy" />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="font-display [color:var(--burgundy)] font-bold text-lg mb-2">
                        {diff.title}
                      </h3>
                      <p className="font-body [color:var(--charcoal)] text-sm leading-relaxed">
                        {diff.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="hidden md:flex items-center justify-center relative">
            {/* Decorative Shapes */}
            <div className="absolute -top-10 -left-10 w-40 h-40 [background-color:var(--beige)] rounded-full opacity-20"></div>
            <div className="absolute -bottom-10 -right-10 w-56 h-56 [background-color:var(--gold)] rounded-full opacity-10"></div>

            {/* Image Container */}
            <div className="relative z-10 w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028836532/7ZJJ4zrQDuAS4Wo5X6o3b2/DSC09469_6b3b1adb.jpg"
                alt="Dra. Ana Clara Gonzaga - Especialista em Direito do Consumidor"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
