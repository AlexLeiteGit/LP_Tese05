import React from 'react';
import product from '../data/product';

const StatsBar = () => {
  return (
    <section className="bg-gold py-10 md:py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {product.stats.map((stat, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center text-center px-4 ${
                index !== product.stats.length - 1 ? 'md:border-r border-bg/20' : ''
              }`}
            >
              <span className="font-display text-stat text-bg mb-2">
                {stat.valor}
              </span>
              <span className="font-body text-xs uppercase tracking-[0.2em] text-bg/70 font-bold">
                {stat.rotulo}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
