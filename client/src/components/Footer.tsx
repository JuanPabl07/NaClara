import { Mail, Phone, MapPin, Instagram, Facebook, MessageCircle, Music } from 'lucide-react';

/**
 * Design Philosophy: Elegância Clássica Contemporânea
 * - Dark burgundy background with cream text
 * - Logo on left side
 * - Contact information organized in columns
 * - Social media icons with hover effects
 * - Gold accent lines
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="bg-burgundy text-cream py-16 md:py-20 relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full opacity-5"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-beige rounded-full opacity-5"></div>

      <div className="container relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/logo_com_nome.webp" 
                alt="Logo Ana Clara Gonzaga" 
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="font-body text-cream/80 text-sm leading-relaxed">
              Advocacia especializada em Direito do Consumidor com atendimento 100% digital.
            </p>
          </div>

          {/* Pages Column */}
          <div className="space-y-4">
            <h4 className="font-display text-gold font-bold text-lg">Páginas</h4>
            <div className="space-y-2 border-l-2 border-gold pl-4">
              <a href="#home" className="block font-body text-cream hover:text-gold transition-colors text-sm">
                Início
              </a>
              <a href="#about" className="block font-body text-cream hover:text-gold transition-colors text-sm">
                Quem Sou
              </a>
              <a href="#services" className="block font-body text-cream hover:text-gold transition-colors text-sm">
                Área de Atuação
              </a>
              <a href="#testimonials" className="block font-body text-cream hover:text-gold transition-colors text-sm">
                Avaliações
              </a>
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="font-display text-gold font-bold text-lg">Contatos</h4>
            <div className="space-y-3">
              <a
                href="tel:+5573999501328"
                className="flex items-center gap-3 font-body text-cream hover:text-gold transition-colors text-sm"
              >
                <Phone size={18} className="text-gold flex-shrink-0" />
                <span>(73) 99950-1328</span>
              </a>
              <a
                href="mailto:anagonzagga.adv@hotmail.com"
                className="flex items-center gap-3 font-body text-cream hover:text-gold transition-colors text-sm"
              >
                <Mail size={18} className="text-gold flex-shrink-0" />
                <span>anagonzagga.adv@hotmail.com</span>
              </a>
              <div className="flex items-start gap-3 font-body text-cream text-sm">
                <MapPin size={18} className="text-gold flex-shrink-0 mt-0.5" />
                <span>
                  Praça Nações Unidas, nº 05, Sala D<br />
                  Centro, Itamaraju – BA<br />
                  CEP 45.836-000
                </span>
              </div>
            </div>
          </div>

          {/* Social Media Column */}
          <div className="space-y-4">
            <h4 className="font-display text-gold font-bold text-lg">Redes Sociais</h4>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/5573999501328"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gold/20 hover:bg-gold/40 rounded-lg flex items-center justify-center transition-colors"
                title="WhatsApp"
              >
                <MessageCircle size={20} className="text-gold" />
              </a>
              <a
                href="https://www.instagram.com/anagonzaga.adv/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gold/20 hover:bg-gold/40 rounded-lg flex items-center justify-center transition-colors"
                title="Instagram"
              >
                <Instagram size={20} className="text-gold" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61588180258340"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gold/20 hover:bg-gold/40 rounded-lg flex items-center justify-center transition-colors"
                title="Facebook"
              >
                <Facebook size={20} className="text-gold" />
              </a>
              <a
                href="https://www.tiktok.com/@anagonzaga.adv"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gold/20 hover:bg-gold/40 rounded-lg flex items-center justify-center transition-colors"
                title="TikTok"
              >
                <Music size={20} className="text-gold" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-0.5 bg-gold/30 mb-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-body text-cream/70">
          <p>
            © {currentYear} Dra. Ana Clara Gonzaga. Todos os direitos reservados.
          </p>
          <p>
            OAB-BA 85.787
          </p>
        </div>
      </div>
    </footer>
  );
}
