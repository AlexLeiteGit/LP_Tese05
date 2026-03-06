import React from 'react';
import GlobalStyles from './components/GlobalStyles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import TheProblem from './components/TheProblem';
import HowItWorks from './components/HowItWorks';
import Precedents from './components/Precedents';
import Requirements from './components/Requirements';
import LegalBasis from './components/LegalBasis';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="bg-bg min-h-screen selection:bg-gold selection:text-bg">
      <GlobalStyles />
      <div className="noise-overlay" />
      
      <Navbar />
      
      <main>
        <Hero />
        <StatsBar />
        <TheProblem />
        <HowItWorks />
        <Precedents />
        <Requirements />
        <LegalBasis />
        <FinalCTA />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
