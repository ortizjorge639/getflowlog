
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const HowItWorksSection = () => {
  const [confetti, setConfetti] = useState(false);

  const steps = [
    {
      id: 1,
      title: "Discover Your Next Game",
      description: "Let Flowlog find the best matched game based on your preferences.",
      image: "/lovable-uploads/step1-discover.png"
    },
    {
      id: 2,
      title: "Add to Your Queue",
      description: "Add game to your backlog or now playing queue.",
      image: "/lovable-uploads/step2-add-game.png"
    },
    {
      id: 3,
      title: "Organize Your Backlog",
      description: "Organize your games backlog as you please, and complete them to add to Completed Deck.",
      image: "/lovable-uploads/step3-organize.png"
    },
    {
      id: 4,
      title: "Track & Celebrate",
      description: "Track your backlog and completion stats on your profile, and find your next gaming journey. Celebrate!",
      image: "/lovable-uploads/step4-profile.png"
    }
  ];

  const triggerConfetti = () => {
    setConfetti(true);
    setTimeout(() => setConfetti(false), 3000);
  };

  useEffect(() => {
    if (confetti) {
      const confettiContainer = document.createElement('div');
      confettiContainer.className = 'fixed inset-0 pointer-events-none z-50';
      document.body.appendChild(confettiContainer);

      for (let i = 0; i < 50; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.className = 'absolute w-2 h-2 bg-seafoam animate-ping';
        confettiPiece.style.left = Math.random() * 100 + '%';
        confettiPiece.style.top = Math.random() * 100 + '%';
        confettiPiece.style.animationDelay = Math.random() * 2 + 's';
        confettiContainer.appendChild(confettiPiece);
      }

      setTimeout(() => {
        document.body.removeChild(confettiContainer);
      }, 3000);
    }
  }, [confetti]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            How <span className="bg-gradient-to-r from-seafoam to-seafoam-light bg-clip-text text-transparent">Flowlog</span> Works
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Master your gaming backlog in 4 simple steps. From discovering games to celebrating completions.
          </p>
        </div>

        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {steps.map((step) => (
              <CarouselItem key={step.id} className="md:basis-1/2 lg:basis-1/2">
                <div className="p-4">
                  <Card 
                    className="bg-gaming-dark/50 border border-seafoam/20 backdrop-blur-sm hover:border-seafoam/40 transition-all duration-300 group cursor-pointer overflow-hidden"
                    onClick={() => step.id === 4 && triggerConfetti()}
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-seafoam to-seafoam-light flex items-center justify-center text-gaming-dark font-bold">
                          {step.id}
                        </div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-seafoam transition-colors">
                          {step.title}
                        </h3>
                      </div>
                      
                      <div className="mb-6">
                        <img 
                          src={step.image} 
                          alt={step.title}
                          className="w-full h-auto object-contain rounded-lg border border-seafoam/10 group-hover:border-seafoam/30 transition-all duration-300"
                        />
                      </div>
                      
                      <p className="text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                      
                      {step.id === 4 && (
                        <div className="mt-4">
                          <Button 
                            size="sm"
                            className="bg-gradient-to-r from-seafoam to-seafoam-light hover:from-seafoam-light hover:to-seafoam text-gaming-dark font-semibold"
                            onClick={(e) => {
                              e.stopPropagation();
                              triggerConfetti();
                            }}
                          >
                            🎉 Celebrate!
                          </Button>
                        </div>
                      )}
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-seafoam/30 text-seafoam hover:bg-seafoam hover:text-gaming-dark" />
          <CarouselNext className="border-seafoam/30 text-seafoam hover:bg-seafoam hover:text-gaming-dark" />
        </Carousel>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            Ready to take control of your gaming backlog?
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-seafoam to-seafoam-light hover:from-seafoam-light hover:to-seafoam text-gaming-dark px-8 py-4 text-lg font-semibold rounded-xl glow-effect hover:animate-glow-pulse transition-all duration-300 transform hover:scale-105"
            onClick={() => window.location.href = '/waitlist'}
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
