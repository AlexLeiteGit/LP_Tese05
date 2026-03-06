import React from 'react';
import { motion } from 'framer-motion';
import product from '../data/product';
import { WhatsAppIcon } from './Navbar';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] }
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-5xl"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.span 
            variants={itemVariants}
            className="inline-block px-4 py-1.5 rounded-none bg-gold/10 border border-gold/40 text-gold text-xs font-bold uppercase tracking-[0.2em] mb-8"
          >
            {product.area}
          </motion.span>
          
          <motion.h1 
            variants={itemVariants}
            className="font-display text-hero text-white mb-8"
          >
            {product.headline}
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="font-body text-lg md:text-xl text-muted max-w-2xl mb-10 leading-relaxed"
          >
            {product.subheadline}
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mt-12">
            <a
              href={product.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-wa hover:bg-wa/90 transition-all flex items-center gap-4 px-8 py-5 rounded-none border-b-4 border-r-4 border-black text-white font-bold text-lg uppercase tracking-wider shadow-lg hover:translate-y-1 hover:border-b-2 hover:border-r-2 active:translate-y-2 active:border-b-0 active:border-r-0"
            >
              <WhatsAppIcon className="w-6 h-6 fill-white" />
              <span>Verificar meu direito agora</span>
            </a>
            
            <a 
              href="#como-funciona" 
              className="text-white/60 hover:text-gold transition-colors font-body text-sm flex items-center gap-2 group"
            >
              <span className="group-hover:translate-y-1 transition-transform inline-block">↓</span>
              <span>Entenda como funciona</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative radial gradient */}
      <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
    </section>
  );
};

export default Hero;
