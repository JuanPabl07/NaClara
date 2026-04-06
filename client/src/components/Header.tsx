import { useState } from 'react';
import { Menu, X, Phone, Mail, Instagram, Facebook, MessageCircle, Star } from 'lucide-react';

/**
 * Design Philosophy: Elegância Clássica Contemporânea
 * - Sticky header with subtle shadow
 * - Logo with brand colors (Burgundy + Beige)
 * - Navigation items with smooth hover effects
 * - Mobile responsive with hamburger menu
 */

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const contactInfo = [
    { icon: Phone, label: '(73) 99950-1328', href: 'tel:+5573999501328' },
    { icon: Mail, label: 'anagonzagga.adv@hotmail.com', href: 'mailto:anagonzagga.adv@hotmail.com' },
    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/anagonzaga.adv/' },
    { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61588180258340' },
    { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/5573999501328' },
    { icon: Star, label: 'Google', href: 'https://www.google.com/search?q=ana+clara+gonzaga+advogada' },
  ];

  const navItems = [
    { label: 'Início', href: '#home' },
    { label: 'Quem Sou', href: '#about' },
    { label: 'Área de Atuação', href: '#services' },
    { label: 'Avaliações', href: '#testimonials' },
    { label: 'Contato', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Bar with Contacts */}
      <div className="bg-gradient-to-r from-beige via-cream to-beige-light py-3 px-4 hidden md:block">
        <div className="container flex items-center justify-end gap-6">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon;
            return (
              <a
                key={idx}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-2 text-charcoal hover:text-burgundy transition-colors text-sm font-body"
              >
                <Icon size={16} className="text-burgundy" />
                <span className="hidden lg:inline">{info.label}</span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/logo_simbolo.webp" 
              alt="Logo Ana Clara Gonzaga" 
              className="h-16 w-auto object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="font-display text-burgundy font-bold text-lg leading-tight">
                Ana Clara Gonzaga
              </h1>
              <p className="text-gold text-xs font-semibold tracking-widest">ADVOGADA</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-charcoal font-body font-medium hover:text-burgundy transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <a
            href="https://wa.me/5573999501328?text=Olá%2C%20gostaria%20de%20falar%20com%20a%20Dra.%20Ana%20Clara%20Gonzaga"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block btn-primary text-sm"
          >
            Falar Agora
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-burgundy hover:text-burgundy-dark transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-beige-light">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-3 text-charcoal font-body hover:bg-beige-light transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <div className="px-4 py-3">
              <a
                href="https://wa.me/5573999501328?text=Olá%2C%20gostaria%20de%20falar%20com%20a%20Dra.%20Ana%20Clara%20Gonzaga"
                target="_blank"
                rel="noopener noreferrer"
                className="block btn-primary text-center text-sm"
              >
                Falar Agora
              </a>
            </div>
          </nav>
        )}
      </div>
      </header>
    </>
  );
}
