
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
          <nav className="flex items-center space-x-6">
            <Button 
              variant="ghost" 
              className="text-gray-300 hover:text-seafoam transition-colors"
              onClick={() => navigate('/')}
            >
              Home
            </Button>
            <Button 
              variant="ghost" 
              className="text-gray-300 hover:text-seafoam transition-colors"
              onClick={() => navigate('/contact')}
            >
              Contact
            </Button>
            <Button 
              className="bg-gradient-to-r from-seafoam to-seafoam-light hover:from-seafoam-light hover:to-seafoam text-gaming-dark font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => navigate('/waitlist')}
            >
              Join Waitlist
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
