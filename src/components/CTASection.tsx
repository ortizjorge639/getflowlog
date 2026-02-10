
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card className="p-12 bg-gradient-to-br from-gaming-dark/50 to-seafoam/20 border-seafoam/30 backdrop-blur-sm text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to Tame Your Steam Backlog?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Stop scrolling through your library wondering what to play. Import your games, organize your backlog, and start flowing through your collection today.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-seafoam to-seafoam-light hover:from-seafoam-light hover:to-seafoam text-gaming-dark px-8 py-4 text-lg font-semibold rounded-xl glow-effect hover:animate-glow-pulse transition-all duration-300 transform hover:scale-105"
              onClick={() => navigate('/waitlist')}
            >
              Join Waitlist
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-seafoam text-seafoam hover:bg-seafoam hover:text-gaming-dark px-8 py-4 text-lg rounded-xl transition-all duration-300"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </Button>
          </div>

          <div className="pt-4">
            <p className="text-sm text-gray-500">
              Interested in the development journey?
              <a
                href="https://x.com/jojiguy639"
                target="_blank"
                rel="noopener noreferrer"
                className="text-seafoam hover:underline ml-1"
              >
                Follow our progress
              </a>
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;
