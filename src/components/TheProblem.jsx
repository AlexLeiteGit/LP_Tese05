import React from 'react';
import { motion } from 'framer-motion';
import product from '../data/product';

const TheProblem = () => {
  return (
    <section id="o-problema" className="bg-bg-dark py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16 px-4 border-l-4 border-gold">
          <h2 className="font-display text-section text-white mb-4">
            O alto custo da passividade tributária
          </h2>
          <p className="text-muted font-body leading-relaxed">
            Muitas clínicas médicas estão operando com margens reduzidas simplesmente por não questionarem o enquadramento imposto pelo Fisco.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {product.dores.map((dor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: [0.23, 1, 0.32, 1] }}
              className="bg-bg-card p-8 rounded-none border border-gold/20 relative overflow-hidden group hover:border-gold transition-colors duration-500"
            >
              <div className="text-4xl mb-6">{dor.emoji}</div>
              <h3 className="font-display text-xl text-white mb-4 transition-colors group-hover:text-gold">
                {dor.titulo}
              </h3>
              <p className="text-muted font-body text-sm leading-relaxed" 
                 dangerouslySetInnerHTML={{ 
                   __html: dor.texto.replace(/(\d+%|\d+\s+anos|retroativo)/g, '<span class="text-gold-light font-bold">$1</span>') 
                 }} 
              />
              
              {/* Decorative brutalist accent */}
              <div className="absolute top-0 right-0 p-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                 <div className="w-16 h-16 border-l border-b border-gold bg-gold/10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheProblem;
