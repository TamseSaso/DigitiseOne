
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss how TechFlow Solutions can help you achieve your goals.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-gray-300">First Name</Label>
                  <Input 
                    id="firstName" 
                    placeholder="John" 
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-gray-300">Last Name</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Doe" 
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-emerald-500"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email" className="text-gray-300">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john@example.com" 
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-emerald-500"
                />
              </div>
              <div>
                <Label htmlFor="company" className="text-gray-300">Company</Label>
                <Input 
                  id="company" 
                  placeholder="Your Company" 
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-emerald-500"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-gray-300">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your project..." 
                  rows={4}
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-emerald-500"
                />
              </div>
              <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-300">hello@techflowsolutions.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Address</p>
                    <p className="text-gray-300">123 Business Ave, Suite 100<br />San Francisco, CA 94105</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Business Hours</p>
                    <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat - Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <Card className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 backdrop-blur-sm border-emerald-500/30 p-6">
              <h4 className="text-xl font-semibold text-white mb-3">Ready to get started?</h4>
              <p className="text-gray-300 mb-4">Schedule a free consultation to discuss your automation needs.</p>
              <Button variant="outline" className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900">
                Schedule Consultation
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
