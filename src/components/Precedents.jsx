import React from 'react';
import { motion } from 'framer-motion';
import product from '../data/product';

const Precedents = () => {
  return (
    <section id="precedentes" className="bg-bg-dark py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-section text-white mb-4">Jurisprudência Consolidada</h2>
            <p className="text-muted font-body">
              Decisões recentes dos Tribunais Regionais Federais reafirmam o direito à equiparação com base na realidade operativa da clínica.
            </p>
          </div>
          <div className="bg-gold/10 px-4 py-2 rounded border border-gold/20">
            <span className="text-gold font-body text-xs font-bold uppercase tracking-widest">Precedentes TRF 1, 3 e 4</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {product.casos.map((caso, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="bg-bg-card p-8 rounded-none border border-gold/20 border-l-4 border-l-gold group hover:border-gold hover:-translate-y-1 transition-all duration-300 relative"
            >
              {/* Cut corner visual */}
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="mb-6 flex justify-between items-start">
                <span className="font-mono text-[10px] text-gold uppercase tracking-widest block">
                  Proc. {caso.processo}
                </span>
              </div>
              
              <div className="mb-4">
                <span className="text-white/60 text-xs font-bold uppercase tracking-wider block mb-1">{caso.tribunal}</span>
                <p className="text-white font-body text-sm leading-relaxed">{caso.resumo}</p>
              </div>
              
              <div className="pt-6 border-t border-gold/10">
                <span className="text-white/40 text-[10px] uppercase font-bold block mb-1">Resultado</span>
                <span className="font-display text-xl text-gold font-bold">{caso.resultado || "Decisão Favorável"}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Precedents;
