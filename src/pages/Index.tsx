
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Coffee, Gift, Star, Zap, Smartphone, Users, TrendingUp } from 'lucide-react';
import PhoneDemo from '@/components/PhoneDemo';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import StatsSection from '@/components/StatsSection';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial page load animation
      gsap.from('.hero-content', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
      });

      // Phone animation entrance
      gsap.from('.phone-container', {
        opacity: 0,
        x: 100,
        rotation: 15,
        duration: 1.5,
        delay: 0.5,
        ease: "back.out(1.7)"
      });

      // Features animation on scroll
      gsap.from('.feature-card', {
        opacity: 0,
        y: 60,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.features-section',
          start: 'top 80%',
          end: 'bottom 20%',
        }
      });

      // Stats counter animation
      gsap.from('.stat-number', {
        innerText: 0,
        duration: 2,
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: '.stats-section',
          start: 'top 80%',
        }
      });

      // Floating elements animation
      gsap.to('.floating-element', {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: 0.3
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Background animated elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="floating-element absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"></div>
        <div className="floating-element absolute top-40 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
        <div className="floating-element absolute bottom-20 left-1/4 w-24 h-24 bg-indigo-500/20 rounded-full blur-xl"></div>
      </div>

      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have already revolutionized their operations with PixelFlow Automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg">
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900 px-8 py-4 text-lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold text-white mb-4">PixelFlow Automation</div>
          <p className="text-gray-400 mb-6">Transforming businesses through intelligent automation and digitalization</p>
          <div className="flex justify-center space-x-6 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-gray-500 text-sm mt-6">© 2024 PixelFlow Automation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
