
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
                  <span className="bg-gradient-to-r from-seafoam to-seafoam-light bg-clip-text text-transparent">
                    Flowlog
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-seafoam font-medium">
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
                    className="bg-gradient-to-r from-seafoam to-seafoam-light hover:from-seafoam-light hover:to-seafoam text-gaming-dark px-8 py-4 text-lg font-semibold rounded-xl glow-effect hover:animate-glow-pulse transition-all duration-300 transform hover:scale-105"
                  >
                    Download Flowlog
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-seafoam text-seafoam hover:bg-seafoam hover:text-gaming-dark px-8 py-4 text-lg rounded-xl transition-all duration-300"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* App Screenshots */}
          <div className="lg:col-span-4 flex justify-center items-center">
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <img 
                src="/lovable-uploads/b4f49c9a-fa6d-4477-bfd8-0680e471dce5.png" 
                alt="Flowlog App Screenshot" 
                className="max-w-full h-auto rounded-2xl shadow-2xl border border-seafoam/20"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-20">
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 text-seafoam" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
