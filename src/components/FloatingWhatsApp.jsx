import React from 'react';
import product from '../data/product';
import { WhatsAppIcon } from './Navbar';

const FloatingWhatsApp = () => {
  return (
    <a
      href={product.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-wa px-4 py-3 md:px-6 md:py-4 rounded-full shadow-2xl animate-pulse-wa hover:scale-110 active:scale-95 transition-all group"
    >
      <WhatsAppIcon className="w-6 h-6 md:w-7 md:h-7 fill-white" />
      <span className="hidden md:block text-white font-bold text-sm tracking-wide">
        Falar com Jurídico
      </span>
      
      {/* Notification Dot */}
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 border-2 border-white rounded-full"></span>
    </a>
  );
};

export default FloatingWhatsApp;
