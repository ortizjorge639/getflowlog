
import { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Play, Pause } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';

const HowItWorksSection = () => {
  const [confetti, setConfetti] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState({ src: '', alt: '' });
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const steps = [
    {
      id: 1,
      title: "Connect Your Steam Library",
      description: "Link your Steam account and we'll import your owned games and wishlist automatically.",
      image: "/lovable-uploads/step1-discover.png"
    },
    {
      id: 2,
      title: "Organize Into Decks",
      description: "Sort games into themed decks — by genre, mood, or play style. Your backlog, your rules.",
      image: "/lovable-uploads/step2-add-game.png"
    },
    {
      id: 3,
      title: "Flow Through Your Backlog",
      description: "Swipe through cards to decide: play now, save for later, or move on.",
      image: "/lovable-uploads/step3-organize.png"
    },
    {
      id: 4,
      title: "Earn Stamps & Celebrate",
      description: "Complete games to earn collectible stamps and track your progress.",
      image: "/lovable-uploads/step4-profile.png"
    }
  ];

  const triggerConfetti = () => {
    setConfetti(true);
    setTimeout(() => setConfetti(false), 3000);
  };

  const openLightbox = (image: string, title: string) => {
    setLightboxImage({ src: image, alt: title });
    setLightboxOpen(true);
  };

  // Auto-play with progress bar
  useEffect(() => {
    if (!api) return;

    const startProgress = () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      setProgress(0);
      
      progressIntervalRef.current = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) return 100;
          return prev + 2; // 50 intervals over 5 seconds (100ms each)
        });
      }, 100);
    };

    const startAutoPlay = () => {
      if (autoPlayIntervalRef.current) clearInterval(autoPlayIntervalRef.current);
      startProgress();
      
      autoPlayIntervalRef.current = setInterval(() => {
        api.scrollNext();
        startProgress();
      }, 5000);
    };

    if (isPlaying) {
      startAutoPlay();
    } else {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      if (autoPlayIntervalRef.current) clearInterval(autoPlayIntervalRef.current);
    }

    return () => {
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      if (autoPlayIntervalRef.current) clearInterval(autoPlayIntervalRef.current);
    };
  }, [api, isPlaying]);

  // Track current slide
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on('select', onSelect);
    onSelect();

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

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
            Go from a cluttered Steam library to an organized backlog in 4 simple steps.
          </p>
        </div>

        <Carousel 
          className="w-full max-w-4xl mx-auto"
          setApi={setApi}
          opts={{ loop: true }}
        >
          <CarouselContent>
            {steps.map((step) => (
              <CarouselItem key={step.id} className="basis-full">
                <div className="p-4">
                  <Card 
                    className="bg-gaming-dark/50 border border-seafoam/20 backdrop-blur-sm hover:border-seafoam/40 transition-all duration-300 group overflow-hidden"
                  >
                    <div className="p-6 sm:p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-seafoam to-seafoam-light flex items-center justify-center text-gaming-dark font-bold text-lg">
                          {step.id}
                        </div>
                        <h3 className="text-2xl font-semibold text-white group-hover:text-seafoam transition-colors">
                          {step.title}
                        </h3>
                      </div>
                      
                      <div 
                        className="mb-6 cursor-zoom-in"
                        onClick={() => openLightbox(step.image, step.title)}
                      >
                        <img 
                          src={step.image} 
                          alt={step.title}
                          className="w-full h-auto object-contain rounded-lg border border-seafoam/10 group-hover:border-seafoam/30 transition-all duration-300 hover:scale-[1.02]"
                        />
                        <p className="text-xs text-gray-500 mt-2 text-center">Click image to enlarge</p>
                      </div>
                      
                      <p className="text-gray-400 leading-relaxed text-lg text-center">
                        {step.description}
                      </p>
                      
                      {step.id === 4 && (
                        <div className="mt-6 text-center">
                          <Button
                            size="lg"
                            className="bg-gradient-to-r from-seafoam to-seafoam-light hover:from-seafoam-light hover:to-seafoam text-gaming-dark font-semibold"
                            onClick={(e) => {
                              e.stopPropagation();
                              triggerConfetti();
                            }}
                          >
                            🏆 Celebrate!
                          </Button>
                        </div>
                      )}
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="border-seafoam/30 text-seafoam hover:bg-seafoam hover:text-gaming-dark -left-4 sm:-left-12" />
          <CarouselNext className="border-seafoam/30 text-seafoam hover:bg-seafoam hover:text-gaming-dark -right-4 sm:-right-12" />
        </Carousel>

        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mt-6 px-4">
          <div className="h-1 bg-seafoam/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-seafoam to-seafoam-light transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Slide Indicators & Play/Pause */}
        <div className="flex justify-center items-center gap-4 mt-4">
          <div className="flex gap-2">
            {steps.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  current === index ? 'bg-seafoam w-6' : 'bg-seafoam/30'
                }`}
                onClick={() => {
                  api?.scrollTo(index);
                  setProgress(0);
                }}
              />
            ))}
          </div>
          
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-8 h-8 rounded-full border border-seafoam/30 flex items-center justify-center text-seafoam hover:bg-seafoam hover:text-gaming-dark transition-all duration-300"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">
            Ready to take control of your gaming backlog?
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-seafoam to-seafoam-light hover:from-seafoam-light hover:to-seafoam text-gaming-dark px-8 py-4 text-lg font-semibold rounded-xl glow-effect hover:animate-glow-pulse transition-all duration-300 transform hover:scale-105"
            onClick={() => window.location.href = '/waitlist'}
          >
            Join the Interest Group
          </Button>
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-5xl bg-gaming-dark/95 border-seafoam/20 p-2">
          <img 
            src={lightboxImage.src} 
            alt={lightboxImage.alt}
            className="w-full h-auto rounded-lg"
          />
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default HowItWorksSection;
