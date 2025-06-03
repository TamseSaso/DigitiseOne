import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';
import PhoneDemo from './PhoneDemo';
const HeroSection = () => {
  return <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="hero-content">
            <div className="flex items-center space-x-2 mb-6">
              <Zap className="h-8 w-8 text-emerald-400" />
              <span className="text-emerald-400 font-semibold text-lg">TechFlow Solutions</span>
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
              <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 text-lg">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white hover:bg-white px-8 py-4 text-lg text-slate-950">
                Watch Demo
              </Button>
            </div>
          </div>
          <div className="phone-container relative">
            <PhoneDemo />
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;