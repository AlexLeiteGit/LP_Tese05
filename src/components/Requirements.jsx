import React from 'react';
import product from '../data/product';

const Requirements = () => {
  return (
    <section id="requisitos" className="bg-bg py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display text-section text-white mb-6">Critérios de Elegibilidade</h2>
            <p className="text-muted font-body">Verifique se sua clínica atende aos requisitos necessários para o ajuizamento.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Requisitos */}
            <div>
              <h3 className="font-display text-xl text-gold mb-8 flex items-center gap-3">
                <span className="w-8 h-px bg-gold"></span>
                Requisitos Técnicos
              </h3>
              <ul className="space-y-6">
                {product.requisitos.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="mt-1 w-5 h-5 rounded-none border border-gold flex items-center justify-center flex-shrink-0 bg-transparent group hover:bg-gold/10 transition-colors">
                      <svg className="w-3 h-3 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-white font-body text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Documentos */}
            <div>
              <h3 className="font-display text-xl text-gold mb-8 flex items-center gap-3">
                <span className="w-8 h-px bg-gold"></span>
                Documentação Inicial
              </h3>
              <ul className="space-y-6">
                {product.documentos.map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="text-gold font-bold mt-1">—</span>
                    <span className="text-white font-body text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Requirements;
