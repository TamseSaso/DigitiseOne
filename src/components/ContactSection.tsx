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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          company,
          message,
        }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Optionally clear form fields on success:
      setFirstName('');
      setLastName('');
      setEmail('');
      setCompany('');
      setMessage('');
      alert('Your message has been sent successfully.');
    } catch (error) {
      console.error('Error sending message:', error);
      alert('There was an error sending your message. Please try again later.');
    }
  };
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-br from-slate-900 to-teal-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss how Digitiseone Solutions can help you achieve your goals.
          </p>
        </div>
        
        <div className="flex flex-col items-center space-y-12">

          {/* Contact Information and CTA Card container */}
          <div className="space-y-8">
            {/* CTA Card - MOVED HERE (AGAIN) */}
            <Card className="bg-slate-700/50 border-slate-600 p-6">
              <h4 className="text-xl font-semibold text-white mb-3">Ready to get started?</h4>
              <p className="text-gray-300 mb-4">Contact us to discuss your automation needs and how Digitiseone Solutions can help you achieve your goals.</p>
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
