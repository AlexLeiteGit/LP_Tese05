import React from 'react';

const GlobalStyles = () => {
  return (
    <style dangerouslySetInnerHTML={{ __html: `
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Lato:wght@300;400;700&family=Courier+Prime:wght@400;700&display=swap');

      :root {
        --color-bg: #003554;
        --color-bg-dark: #002236;
        --color-bg-card: #144565;
        --color-bg-footer: #001726;
        --color-text: #ffffff;
        --color-muted: #a3c2d6;
        --color-gold: #c9a84c;
        --color-gold-light: #e2c47a;
        --color-wa: #25d366;
      }

      body {
        margin: 0;
        padding: 0;
        background-color: var(--color-bg);
        color: var(--color-text);
        font-family: 'Lato', sans-serif;
        overflow-x: hidden;
      }

      .font-display { font-family: 'Playfair Display', serif; }
      .font-body { font-family: 'Lato', sans-serif; }
      .font-mono { font-family: 'Courier Prime', monospace; }

      /* Noise Overlay */
      .noise-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
        opacity: 0.04;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
      }

      /* Custom scrollbar */
      ::-webkit-scrollbar {
        width: 8px;
      }
      ::-webkit-scrollbar-track {
        background: var(--color-bg-dark);
      }
      ::-webkit-scrollbar-thumb {
        background: var(--color-gold);
        border-radius: 4px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: var(--color-gold-light);
      }
    `}} />
  );
};

export default GlobalStyles;
