import React from 'react';
import { motion } from 'framer-motion';
import product from '../data/product';

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="bg-bg py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-display text-section text-white mb-6">O Caminho para a Equiparação Hospitalar</h2>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-4 relative">
          {/* Connector Line Desktop */}
          <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-px bg-gold/30 z-0"></div>

          {product.passos.map((passo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex-1 flex flex-col items-center text-center z-10"
            >
              <div className="w-14 h-14 rounded-none border border-gold flex items-center justify-center font-display text-gold text-xl mb-8 bg-bg relative">
                {/* Decorative cut corner */}
                <div className="absolute top-0 right-0 w-2 h-2 bg-gold/50" />
                {passo.numero}
              </div>
              <h3 className="font-display text-xl text-white mb-4">{passo.titulo}</h3>
              <p className="text-muted font-body text-sm leading-relaxed max-w-xs">{passo.descricao}</p>
              
              {/* Mobile Separator */}
              {index !== product.passos.length - 1 && (
                <div className="md:hidden w-px h-12 border-l border-gold/20 my-6"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
