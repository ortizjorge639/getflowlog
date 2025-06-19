
import { Card } from '@/components/ui/card';
import { useState, useEffect } from 'react';

const features = [
  {
    title: "Smart Backlog Management",
    description: "Organize your games by priority, genre, and completion time. Never lose track of what to play next.",
    icon: "🎯"
  },
  {
    title: "Progress Tracking",
    description: "Visual progress bars, completion percentages, and detailed session logs keep you motivated.",
    icon: "📊"
  },
  {
    title: "Real-time Analytics",
    description: "See your gaming patterns, completion rates, and time invested across all your games.",
    icon: "⚡"
  },
  {
    title: "Achievement System",
    description: "Unlock milestones as you clear your backlog and build consistent gaming habits.",
    icon: "🏆"
  },
  {
    title: "Cross-Platform Sync",
    description: "Your data syncs seamlessly across all devices, so your progress is always up to date.",
    icon: "🔄"
  },
  {
    title: "Community Features",
    description: "Share your progress, get recommendations, and stay motivated with fellow gamers.",
    icon: "👥"
  }
];

const FeaturesSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll('.feature-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Everything You Need to
            <span className="bg-gradient-to-r from-gaming-electric to-gaming-purple bg-clip-text text-transparent"> Conquer</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Built by gamers, for gamers. Every feature designed to help you finish what you start.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              data-index={index}
              className={`feature-card p-8 bg-gaming-dark/30 border-gaming-electric/20 backdrop-blur-sm hover:border-gaming-electric/40 hover:bg-gaming-dark/50 transition-all duration-700 group cursor-pointer ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div className="text-4xl mb-4 group-hover:animate-float">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white group-hover:text-gaming-neon transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
