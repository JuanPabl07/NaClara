import { 
  Banknote, 
  ShoppingCart, 
  AlertCircle, 
  Zap, 
  Plane,
  Heart
} from 'lucide-react';

/**
 * Design Philosophy: Elegância Clássica Contemporânea
 * - Grid layout with 2-3 columns
 * - Cards with subtle shadows and gold accents
 * - Icons in burgundy with rounded backgrounds
 * - WhatsApp CTA buttons on each card
 * - Smooth hover animations
 */

const services = [
  {
    id: 1,
    title: 'Problemas com Banco',
    icon: Banknote,
    items: [
      'Cartão RMC',
      'Cartão de crédito ou débito não autorizado',
      'Empréstimos consignados fraudulentos',
      'Revisional de juros',
      'Seguro não contratado',
      'Superendividamento divida infinita',
      'Venda casada',
    ],
  },
  {
    id: 2,
    title: 'Compras de Produtos',
    icon: ShoppingCart,
    items: [
      'Compra cancelada',
      'Produto com defeito',
      'Atraso na entrega do produto',
      'Demora superior a 30 dias para solução do defeito do produto',
      'Produto não entregue',
      'Problemas com assistência técnica (atendimentos, reparo ou vistoria)',
    ],
  },
  {
    id: 3,
    title: 'Cobranças e Negativação Indevida',
    icon: AlertCircle,
    items: [
      'Cobrança de dívida paga',
      'Dívida paga e nome permanece no SPC e SERASA',
      'Não reconhece a dívida e nome foi negativado',
      'Negativação indevida',
      'Débito pago e mesmo após 5 dias do pagamento o nome permanece na SERASA',
    ],
  },
  {
    id: 4,
    title: 'Energia e Água',
    icon: Zap,
    items: [
      'Queda de aparelho',
      'Corte de luz indevido',
      'Corte de água indevido',
      'Interrupção, desligação ou queda de energia',
      'Demora na ligação nível de serviço de água e luz',
      'Atraso de mais de 24 horas na religação do serviço de água e luz',
    ],
  },
  {
    id: 5,
    title: 'Problemas com o Voo',
    icon: Plane,
    items: [
      'Cancelamento da Passagem Aérea',
      'Atraso de Passagem',
      'Mala Danificada',
      'Perda do Conexão por Atraso ou Cancelamento',
      'Overbooking',
      'Voo Atrasado',
    ],
  },
  {
    id: 6,
    title: 'Planos de Saúde',
    icon: Heart,
    items: [
      'Cancelamento indevido',
      'Negativa do home care',
      'Negativa da protese do membro',
      'Negativa de protese ou internação',
      'Negativa de cirurgia reparadora pós Bariátrica',
      'Reajuste abusivo',
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 md:py-32 bg-cream relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-20 z-0"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310419663028836532/7ZJJ4zrQDuAS4Wo5X6o3b2/services-background-PEUsdPnHEXSTUvhi8cEMNj.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block mb-4">
            <div className="w-16 h-1 [background-color:var(--gold)] rounded-full mx-auto"></div>
          </div>
          <h2 className="font-display [color:var(--burgundy)] font-bold text-4xl md:text-5xl mb-4">
            Confira nossos serviços
          </h2>
          <p className="font-body [color:var(--charcoal)] text-lg max-w-2xl mx-auto">
            Especializada em diversos tipos de demandas jurídicas relacionadas ao Direito do Consumidor
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="card-elegant p-8 hover:scale-105 transition-transform duration-300 group"
              >
                {/* Icon */}
                <div className="mb-6">
                  <Icon size={40} className="text-burgundy" />
                </div>

                {/* Title */}
                <h3 className="font-display [color:var(--burgundy)] font-bold text-xl mb-4">
                  {service.title}
                </h3>

                {/* Items List */}
                <ul className="space-y-2 mb-6">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 [color:var(--charcoal)] text-sm">
                      <span className="[color:var(--gold)] font-bold mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a
                  href="https://wa.me/5573999501328?text=Quero%20orientação%20jurídica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full btn-primary text-center text-sm font-semibold"
                >
                  Quero orientação jurídica
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
