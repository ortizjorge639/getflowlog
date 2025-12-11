
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-12 overflow-hidden">
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center text-center">
        
        {/* Text Content - Above Image */}
        <div className={`space-y-6 mb-12 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          {/* App Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-seafoam to-seafoam-light bg-clip-text text-transparent text-glow">
              Flowlog
            </span>
          </h1>
          
          {/* Tagline */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-medium max-w-2xl mx-auto leading-relaxed">
            Master Your Gaming Backlog
          </p>
          
          {/* Description */}
          <p className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto">
            Stop drowning in unfinished games. Organize, track, and actually complete your backlog.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            {/* MVP Launch CTA - Limited Time */}
            <a 
              href="https://flowlog-gg.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-8 py-4 rounded-full bg-gaming-dark border-2 border-seafoam/40 shadow-[0_0_25px_rgba(6,255,165,0.3)] hover:shadow-[0_0_40px_rgba(6,255,165,0.5)] hover:scale-105 transition-all duration-300 group"
            >
              <span className="text-lg font-bold bg-gradient-to-r from-rose-400 via-fuchsia-500 via-violet-500 via-cyan-400 to-emerald-400 bg-clip-text text-transparent flex items-center gap-2">
                🚀 Try the MVP Now
                <span className="text-xs px-2 py-0.5 bg-gradient-to-r from-fuchsia-500/20 to-cyan-400/20 rounded-full text-cyan-300">Limited</span>
              </span>
            </a>
            <Button 
              variant="outline" 
              size="lg"
              className="border-seafoam/50 text-seafoam hover:bg-seafoam/10 hover:border-seafoam px-8 py-4 text-lg rounded-full transition-all duration-500"
              onClick={() => navigate('/waitlist')}
            >
              Join Waitlist
            </Button>
          </div>
        </div>

        {/* Hero Image - Center Stage */}
        <div className={`w-full max-w-4xl mx-auto transition-all duration-1200 delay-500 ease-out ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'}`}>
          <div className="relative">
            {/* Glow Effect Behind Image */}
            <div className="absolute inset-0 bg-gradient-to-t from-seafoam/20 via-seafoam/5 to-transparent blur-3xl scale-110 -z-10" />
            
            <img 
              src="/lovable-uploads/hero-mockup.png" 
              alt="Flowlog App Dashboard on MacBook" 
              className="w-full h-auto rounded-2xl drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`mt-12 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="animate-bounce">
            <ArrowDown className="w-6 h-6 text-seafoam/60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
