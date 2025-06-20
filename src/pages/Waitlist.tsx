
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Waitlist = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Load the waitlister script
    const script = document.createElement('script');
    script.src = 'https://waitlister.me/js/embed.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gaming-dark">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gaming-dark via-slate-900 to-gaming-dark">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,255,165,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto w-full">
          {/* Back Button */}
          <div className="mb-8">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="text-seafoam hover:text-seafoam-light hover:bg-seafoam/10"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>

          <Card className="p-8 bg-gaming-dark/50 border border-seafoam/20 backdrop-blur-sm">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-white mb-4">
                Join the <span className="bg-gradient-to-r from-seafoam to-seafoam-light bg-clip-text text-transparent">Flowlog</span> Waitlist
              </h1>
              <p className="text-lg text-gray-300">
                Lock in your early access to the Flowlog Beta launch today!
              </p>
            </div>

            {/* Waitlister Form */}
            <div className="waitlister-form" data-waitlist-key="4JjwFaXRFJQm" data-height="230px"></div>

            <div className="text-center mt-8 pt-6 border-t border-seafoam/20">
              <p className="text-sm text-gray-400">
                Questions? <button 
                  onClick={() => navigate('/contact')}
                  className="text-seafoam hover:underline"
                >
                  Contact us
                </button>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
