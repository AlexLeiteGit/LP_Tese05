import React from 'react';
import product from '../data/product';
import { WhatsAppIcon } from './Navbar';

const FinalCTA = () => {
  return (
    <section className="bg-bg py-24 relative overflow-hidden">
      {/* Radial Gradient overlay */}
      <div className="absolute inset-0 z-0 opacity-40" 
           style={{ background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.08) 0%, transparent 70%)' }} 
      />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-5xl text-white mb-8 leading-tight">
            {product.beneficioPrincipal}
          </h2>
          
          <p className="font-body text-gold-light text-xl mb-12 uppercase tracking-widest font-bold">
            Consulta gratuita e sem compromisso
          </p>

          <div className="flex flex-col items-center gap-6">
            <a
              href={product.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-wa hover:scale-105 active:scale-95 transition-all flex items-center gap-4 px-10 py-5 rounded-full text-white font-bold text-xl shadow-2xl shadow-wa/30"
            >
              <WhatsAppIcon className="w-6 h-6 fill-white" />
              <span>Desejo falar com o especialista</span>
            </a>
            
            <p className="text-xs text-muted/60 font-body tracking-wider italic">
              Consulta inicial gratuita · Sem compromisso · Atendimento 100% digital
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
