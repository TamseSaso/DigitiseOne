
import { Card } from '@/components/ui/card';
import { Smartphone, Users, TrendingUp, Zap, Shield, Clock } from 'lucide-react';

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

  return (
    <section className="features-section py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose TechFlow?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine cutting-edge technology with deep industry expertise to deliver solutions that transform how you do business.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="feature-card bg-slate-800/50 backdrop-blur-sm border-slate-700/50 p-6 hover:bg-slate-700/50 transition-all duration-300">
              <feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
