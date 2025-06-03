import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

const ContactSection = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Contact from ${firstName} ${lastName}`;
    const body = encodeURIComponent(
      `Name: ${firstName} ${lastName}\nEmail: ${email}\nCompany: ${company}\n\n${message}`
    );
    window.location.href = `mailto:saso.tamse@ulicanori.si?subject=${encodeURIComponent(
      subject
    )}&body=${body}`;
  };
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-slate-900 to-teal-900">
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-gray-300">First Name</Label>
                  <Input
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="John"
                    className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-emerald-500"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-gray-300">Last Name</Label>
                  <Input
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-emerald-500"
                />
              </div>
              <div>
                <Label htmlFor="company" className="text-gray-300">Company</Label>
                <Input
                  id="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Your Company"
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-emerald-500"
                />
              </div>
              <div>
                <Label htmlFor="message" className="text-gray-300">Message</Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-emerald-500"
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information and CTA Card container */}
          <div className="space-y-8">
            {/* CTA Card - MOVED HERE (AGAIN) */}
            <Card className="bg-slate-700/50 border-slate-600 p-6">
              <h4 className="text-xl font-semibold text-white mb-3">Ready to get started?</h4>
              <p className="text-gray-300 mb-4">Contact us to discuss your automation needs and how TechFlow Solutions can help you achieve your goals.</p>
            </Card>

            {/* Contact Information - NOW SECOND (AGAIN) */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-300">saso.tamse@ulicanori.si</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-600/20 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-gray-300">+386 51 798 567</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
