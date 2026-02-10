
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-seafoam/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">
              <span className="bg-gradient-to-r from-seafoam to-seafoam-light bg-clip-text text-transparent">
                Flowlog
              </span>
            </h3>
            <p className="text-gray-400 max-w-xs">
              Turn your Steam library into an organized backlog. Import, deck, flow, and finally finish your games.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get Started</h4>
            <div className="space-y-2">
              <Button 
                variant="ghost" 
                className="w-full justify-start text-gray-400 hover:text-seafoam hover:bg-gaming-dark/50 p-0"
                onClick={() => navigate('/waitlist')}
              >
                Join Waitlist
              </Button>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="space-y-2">
              <a
                href="https://flowlog.lovable.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left text-gray-400 hover:text-seafoam transition-colors"
              >
                Try the MVP
              </a>
              <a
                href="https://x.com/jojiguy639"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-left text-gray-400 hover:text-seafoam transition-colors"
              >
                Follow on X
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-seafoam/10 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-gray-500 text-sm">
            © 2025 Flowlog. Built with passion for gamers.
          </p>
          <div className="flex space-x-6">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-gray-500 hover:text-seafoam p-0"
            >
              Privacy
            </Button>
            <Button 
              variant="ghost" 
              size="sm"
              className="text-gray-500 hover:text-seafoam p-0"
            >
              Terms
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
