import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';
import FeaturesSection from '@/components/FeaturesSection';
import ContactSection from '@/components/ContactSection';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import PhoneDemo from '@/components/PhoneDemo';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPhonePage, setCurrentPhonePage] = useState(0);
  const phonePageRef = useRef(0);

  const handleScrollToContact = () => {
    gsap.to(window, { duration: 1, scrollTo: "#contact-section", ease: "power2.inOut" });
  };

  useEffect(() => {
    phonePageRef.current = currentPhonePage;
  }, [currentPhonePage]);

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

      // Phone animation entrance (initial appearance)
      gsap.set('.phone-container', {
        opacity: 0,
        x: 100,
        rotation: 20
      });
      gsap.to('.phone-container', {
        opacity: 1,
        x: 0,
        rotation: 10,
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

      // Floating elements animation
      gsap.to('.floating-element', {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: 0.3
      });

      // Main Phone scroll animation timeline
      const phoneScrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero-section-component",
          start: "top top",
          endTrigger: ".cta-section",
          end: "bottom bottom",
          scrub: 1,
          pin: ".phone-container",
          pinSpacing: false,
          onUpdate: (self) => {
            // Switch pages based on scroll progress
            const progress = self.progress;
            
            // Switch to menu page when transitioning from features to CTA (around 60-70% of scroll)
            if (progress > 0.65 && progress < 0.75 && phonePageRef.current === 0) {
              setCurrentPhonePage(1);
            }
            // Switch back to loyalty page when scrolling back
            else if (progress < 0.65 && phonePageRef.current === 1) {
              setCurrentPhonePage(0);
            }
          }
        }
      });

      // Calculate final scroll position for phone screen content
      const phoneScreenViewport = document.querySelector('.phone-container .bg-gray-900') as HTMLElement;
      const screenContentElement = document.querySelector('.phone-container .screen-content') as HTMLElement;
      let finalScrollY = -600;

      if (phoneScreenViewport && screenContentElement) {
        const viewportHeight = phoneScreenViewport.offsetHeight;
        const fullContentHeight = screenContentElement.offsetHeight;
        if (fullContentHeight > viewportHeight) {
          finalScrollY = -(fullContentHeight - viewportHeight);
        } else {
          finalScrollY = 0;
        }
      }

      // Phone movement animation
      phoneScrollTl
        .to(".phone-container", {
          xPercent: -130,
          yPercent: 15,
          rotation: -15,
          duration: 0.5,
          ease: "power1.inOut"
        })
        .to(".phone-container", {
          xPercent: 0,
          yPercent: 20,
          rotation: 10,
          duration: 0.5,
          ease: "power1.inOut"
        });

      // Loyalty page content scroll (only affects first page, scrolls during first part of journey)
      gsap.to(".screen-content", {
        scrollTrigger: {
          trigger: ".hero-section-component",
          start: "top top",
          endTrigger: ".cta-section",
          end: "top center",
          scrub: 1,
          onUpdate: (self) => {
            // Only apply scroll if we're on the loyalty page
            if (phonePageRef.current === 0) {
              gsap.set(".screen-content", { y: self.progress * finalScrollY });
            }
          }
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-900 to-teal-900 relative">
      {/* Hero Section */}
      <section className="hero-section-component relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-teal-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="hero-content">
              <div className="flex items-center space-x-2 mb-6">
                <Zap className="h-8 w-8 text-emerald-400" />
                <span className="text-emerald-400 font-semibold text-lg">Digitiseone Solutions</span>
              </div>
              <h1 className="hero-content text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
                Automate.<br />
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Digitalize.
                </span><br />
                Dominate.
              </h1>
              <p className="hero-content text-xl text-gray-300 mb-8 max-w-lg">
                Transform your business with cutting-edge automation solutions. From loyalty systems to workflow optimization, we make technology work for you.
              </p>
              <div className="hero-content flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 text-lg"
                  onClick={handleScrollToContact}
                >
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            {/* Phone container with currentPage prop */}
            <div className="phone-container hidden lg:block relative z-10 mt-6 lg:mt-2">
              <PhoneDemo currentPage={currentPhonePage} />
            </div>
          </div>
        </div>
      </section>

      <FeaturesSection />

      {/* CTA Section */}
      <section className="cta-section py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-slate-900 to-teal-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content - Left Column */}
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                Join thousands of businesses that have already revolutionized their operations with Digitiseone Solutions.
              </p>
              <div className="flex">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 text-lg"
                  onClick={handleScrollToContact}
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
            {/* Right Column - Space for the pinned phone */}
            <div className="hidden lg:block relative min-h-[600px]">
              {/* The pinned phone from Hero section will animate into this space */}
            </div>
          </div>
        </div>
      </section>

      <div id="contact-section">
        <ContactSection />
      </div>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-700/50 bg-gradient-to-br from-slate-900 to-teal-900">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold text-white mb-4">Digitiseone Solutions</div>
          <p className="text-gray-400 mb-6">Transforming businesses through intelligent automation and digitalization</p>
          <div className="flex justify-center space-x-6 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-gray-500 text-sm mt-6">© 2025 Digitiseone Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;