
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto w-full">
        {/* Wide Bento Box Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Main Hero Content - Takes up majority of space */}
          <div className="lg:col-span-8 space-y-8">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {/* App Name & Tagline */}
              <div className="space-y-4">
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white text-glow">
                  <span className="bg-gradient-to-r from-gaming-electric to-gaming-purple bg-clip-text text-transparent">
                    Flowlog
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-gaming-neon font-medium">
                  Master Your Gaming Backlog
                </p>
              </div>

              {/* Pitch */}
              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
                  Stop drowning in unfinished games. Flowlog helps you organize, track, and 
                  actually complete your gaming backlog with intelligent progress tracking 
                  and real-time insights.
                </p>

                {/* Main CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-gaming-electric to-gaming-purple hover:from-gaming-purple hover:to-gaming-electric text-white px-8 py-4 text-lg font-semibold rounded-xl glow-effect hover:animate-glow-pulse transition-all duration-300 transform hover:scale-105"
                  >
                    Download Flowlog
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-gaming-electric text-gaming-electric hover:bg-gaming-electric hover:text-white px-8 py-4 text-lg rounded-xl transition-all duration-300"
                  >
                    Watch Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Side Stats Cards */}
          <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            <StatsCard 
              number="1000+" 
              label="Games Completed" 
              delay="0.2s"
            />
            <StatsCard 
              number="50+" 
              label="Hours Saved" 
              delay="0.4s"
            />
            <StatsCard 
              number="24/7" 
              label="Progress Tracking" 
              delay="0.6s"
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-20">
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 text-gaming-electric" />
          </div>
        </div>
      </div>
    </section>
  );
};

const StatsCard = ({ number, label, delay }: { number: string; label: string; delay: string }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), parseFloat(delay) * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Card 
      className={`p-6 bg-gaming-dark/50 border-gaming-electric/20 backdrop-blur-sm transition-all duration-700 hover:border-gaming-electric/40 hover:bg-gaming-dark/70 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="text-center space-y-2">
        <div className="text-2xl font-bold text-gaming-neon">{number}</div>
        <div className="text-sm text-gray-400">{label}</div>
      </div>
    </Card>
  );
};

export default HeroSection;
