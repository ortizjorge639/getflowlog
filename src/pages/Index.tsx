
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gaming-dark overflow-x-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gaming-dark via-slate-900 to-gaming-dark">
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,255,165,0.1),transparent_50%)]"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
      </div>

      <Header />
      
      <div className="relative z-10 pt-16">
        <HeroSection />
        <FeaturesSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
