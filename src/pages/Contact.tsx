
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Header from '@/components/Header';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Feedback Sent!",
        description: "Thank you for your feedback. We'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gaming-dark">
      {/* Animated background */}
      <div className="fixed inset-0 bg-gradient-to-br from-gaming-dark via-slate-900 to-gaming-dark">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,255,165,0.1),transparent_50%)]" />
      </div>

      <Header />
      
      <div className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Contact <span className="bg-gradient-to-r from-seafoam to-seafoam-light bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="text-xl text-gray-400">
              We'd love to hear your feedback about Flowlog
            </p>
          </div>

          <Card className="p-8 bg-gaming-dark/50 border-seafoam/20 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-white">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-gaming-dark/50 border-seafoam/30 text-white placeholder:text-gray-500 focus:border-seafoam"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gaming-dark/50 border-seafoam/30 text-white placeholder:text-gray-500 focus:border-seafoam"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-white">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="bg-gaming-dark/50 border-seafoam/30 text-white placeholder:text-gray-500 focus:border-seafoam"
                  placeholder="What's this about?"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-gaming-dark/50 border-seafoam/30 text-white placeholder:text-gray-500 focus:border-seafoam resize-none"
                  placeholder="Tell us about your experience with Flowlog, feature requests, bug reports, or any other feedback..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-seafoam to-seafoam-light hover:from-seafoam-light hover:to-seafoam text-gaming-dark font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Feedback'}
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-seafoam/20 text-center">
              <p className="text-gray-400 text-sm">
                Your feedback will be sent to <span className="text-seafoam">ortizjorge639@gmail.com</span>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
