
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-gaming-dark/95 backdrop-blur-md border-b border-seafoam/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/db486e4c-259d-41de-8f9f-cf578307b467.png" 
              alt="Flowlog Logo" 
              className="w-8 h-8"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-seafoam to-seafoam-light bg-clip-text text-transparent">
              Flowlog
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-gray-300 hover:text-seafoam transition-colors hidden sm:inline-flex"
              onClick={() => navigate('/')}
            >
              Home
            </Button>
            <Button 
              variant="ghost" 
              className="text-gray-300 hover:text-seafoam transition-colors hidden sm:inline-flex"
              onClick={() => window.open('https://x.com/jojiguy639', '_blank')}
            >
              Contact
            </Button>
            <a 
              href="https://flowlog-gg.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-5 py-2 rounded-full bg-gaming-dark border border-seafoam/30 shadow-[0_0_20px_rgba(6,255,165,0.3)] hover:shadow-[0_0_30px_rgba(6,255,165,0.5)] hover:scale-105 transition-all duration-300"
            >
              <span className="text-sm font-bold bg-gradient-to-r from-rose-400 via-fuchsia-500 via-violet-500 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                🚀 Try MVP
              </span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
