import React from 'react';
import product from '../data/product';

const LegalBasis = () => {
  return (
    <section id="base-legal" className="bg-bg-dark py-24">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-section text-white mb-16 text-center italic">
          Fundamentação Profunda e <span className="text-gold">Segurança Jurídica</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {product.baseLegal.map((base, index) => (
            <div 
              key={index} 
              className="bg-bg-card p-8 rounded-none border border-gold/20 flex flex-col h-full hover:border-gold hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Decorative brutalist edge */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gold/5" />
              <div className="mb-6 relative z-10">
                 <span className="font-display text-gold text-lg font-bold block mb-2">{base.norma}</span>
                 <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.2em]">{base.artigo}</span>
              </div>
              <p className="text-muted font-body text-sm leading-relaxed flex-grow">
                {base.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegalBasis;
