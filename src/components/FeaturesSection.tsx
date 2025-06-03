import { Card } from '@/components/ui/card';
import { Smartphone, Users, TrendingUp, Zap, Shield, Clock, BarChart, Settings, Lock, Users2 } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Mobile-First Solutions',
      description: 'Responsive, intuitive apps that work seamlessly across all devices and platforms.'
    },
    {
      icon: Users,
      title: 'Customer Engagement',
      description: 'Boost loyalty with personalized rewards, points systems, and targeted campaigns.'
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Insights',
      description: 'Real-time data visualization and actionable insights to drive business growth.'
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Streamline operations with intelligent automation that saves time and reduces errors.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption and compliance standards.'
    },
    {
      icon: Clock,
      title: 'Rapid Deployment',
      description: 'Get up and running in days, not months, with our proven implementation process.'
    }
  ];

  const benefits = [
    {
      icon: Users2,
      title: 'Enhanced User Engagement',
      description: 'Captivate your audience with interactive reward programs and personalized experiences that foster loyalty.'
    },
    {
      icon: Lock,
      title: 'Robust Security',
      description: 'Protect your valuable data and customer information with state-of-the-art security measures and compliance.'
    },
    {
      icon: BarChart,
      title: 'Data-Driven Insights',
      description: 'Leverage powerful analytics to understand customer behavior and make informed business decisions for growth.'
    },
    {
      icon: Settings,
      title: 'Streamlined Operations',
      description: 'Automate manual tasks and optimize workflows to increase efficiency and reduce operational costs.'
    }
  ];

  return (
    <section className="features-section py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-slate-900 to-teal-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-end space-y-16">
          <div className="text-right max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-8">Why Choose Digitiseone?</h2>
            <div className="space-y-4">
              <p className="text-2xl md:text-3xl text-emerald-400 font-medium tracking-wide">
                Easy to scan, easier to earn rewards
              </p>
              <p className="text-lg md:text-xl text-gray-400/90 leading-relaxed max-w-xl ml-auto">
                Simply scan the QR code at any location to start collecting points and unlock exclusive benefits
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className="benefit-card bg-slate-800/70 backdrop-blur-lg border border-slate-700/80 p-6 
                           hover:bg-slate-700/70 hover:border-emerald-500/60 
                           transition-all duration-300 ease-in-out 
                           flex flex-col items-center text-center rounded-xl shadow-lg hover:shadow-emerald-500/30"
              >
                <benefit.icon className="h-12 w-12 text-emerald-400 mb-4" />
                <h4 className="text-lg font-semibold text-white mb-3">{benefit.title}</h4>
                <p className="text-gray-300 leading-relaxed text-sm">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
