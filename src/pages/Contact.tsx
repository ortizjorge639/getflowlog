
import Header from '@/components/Header';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gaming-dark">
      {/* Animated background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gaming-dark via-slate-900 to-gaming-dark">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,255,165,0.1),transparent_50%)]" />
      </div>

      <Header />
      
      <div className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Contact <span className="bg-gradient-to-r from-seafoam to-seafoam-light bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-xl text-gray-400">
              We'd love to hear your feedback about Flowlog
            </p>
          </div>

          <div className="bg-gaming-dark/50 border border-seafoam/20 backdrop-blur-sm rounded-lg overflow-hidden">
            <iframe 
              src="https://jorgeortizflores.notion.site/ebd/21803911f10380ca9564c859c4e0e93b" 
              width="100%" 
              height="600" 
              frameBorder="0" 
              allowFullScreen
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
