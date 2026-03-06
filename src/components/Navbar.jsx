import React, { useState, useEffect } from 'react';
import product from '../data/product';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['o-problema', 'como-funciona', 'precedentes', 'requisitos', 'base-legal'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'O Problema', id: 'o-problema' },
    { name: 'Como Funciona', id: 'como-funciona' },
    { name: 'Precedentes', id: 'precedentes' },
    { name: 'Requisitos', id: 'requisitos' },
    { name: 'Base Legal', id: 'base-legal' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-bg-footer shadow-[0_4px_32px_rgba(0,0,0,0.5)] border-b border-gold/30 py-3' 
        : 'bg-bg-footer border-b border-gold/14 py-5'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logomarca */}
        <div className="flex items-center gap-3 border-l-4 border-gold pl-3">
          <div className="flex flex-col">
            <span className="font-display text-white text-xl leading-tight font-bold">
              Leite & Fontes
            </span>
            <span className="font-body text-gold text-[10px] uppercase tracking-[0.2em] font-bold">
              Advogados Associados
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`font-body text-sm uppercase tracking-wider transition-colors hover:text-gold ${
                activeSection === link.id ? 'text-gold' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          
          <a
            href={product.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-wa hover:scale-105 transition-transform flex items-center gap-2 px-6 py-2 rounded-full text-white font-bold text-sm"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
            <span>Consultar Agora</span>
          </a>
        </div>

        {/* Mobile Hamburger (Simulated for this implementation) */}
        <div className="lg:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

const WhatsAppIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default Navbar;
export { WhatsAppIcon };
