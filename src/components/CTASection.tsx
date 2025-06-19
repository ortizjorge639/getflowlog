
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const CTASection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card className="p-12 bg-gradient-to-br from-gaming-dark/50 to-gaming-blue/20 border-gaming-electric/30 backdrop-blur-sm text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to Clear Your Backlog?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Join thousands of gamers who've transformed their gaming habits with Flowlog. 
              Start finishing what you start.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-gaming-electric to-gaming-purple hover:from-gaming-purple hover:to-gaming-electric text-white px-8 py-4 text-lg font-semibold rounded-xl glow-effect hover:animate-glow-pulse transition-all duration-300 transform hover:scale-105"
            >
              Download Now
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-gaming-neon text-gaming-neon hover:bg-gaming-neon hover:text-gaming-dark px-8 py-4 text-lg rounded-xl transition-all duration-300"
            >
              Contact for Feedback
            </Button>
          </div>

          <div className="pt-4">
            <p className="text-sm text-gray-500">
              Interested in the development journey? 
              <button className="text-gaming-neon hover:underline ml-1">
                Follow our progress
              </button>
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;
