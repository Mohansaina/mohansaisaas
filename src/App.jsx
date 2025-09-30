import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Demo from './components/Demo';
import Features from './components/Features';
import UseCase from './components/UseCase';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Integrations from './components/Integrations';
import TrustSignals from './components/TrustSignals';
import Team from './components/Team';
import FAQ from './components/FAQ';
import BlogTeaser from './components/BlogTeaser';
import Payment from './components/Payment';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <Hero />
        <Demo />
        <Features />
        <UseCase />
        <Testimonials />
        <Pricing />
        <Payment />
        <Integrations />
        <TrustSignals />
        <Team />
        <FAQ />
        <BlogTeaser />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}

export default App;