import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-bg-footer py-12 border-t border-gold/8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 border-l-4 border-gold/40 pl-3">
            <div className="flex flex-col">
              <span className="font-display text-white/60 text-lg leading-tight font-bold">
                Leite & Fontes
              </span>
              <span className="font-body text-gold/40 text-[9px] uppercase tracking-[0.2em] font-bold">
                Advogados Associados · OAB/SP 000.000
              </span>
            </div>
          </div>

          <div className="text-center md:text-right max-w-md">
            <p className="font-body text-[10px] text-muted/40 uppercase tracking-widest leading-relaxed">
              Este site tem caráter meramente informativo de acordo com o Art. 28 a 34 do Código de Ética e Disciplina da OAB. Não constitui consulta jurídica formal.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-[10px] text-muted/30 uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Leite & Fontes Advogados Associados · Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
