import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Coffee, Gift, Star, Crown, QrCode, Menu } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';

const PhoneDemo = ({ currentPage = 0 }) => {
  const phoneRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const pagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Phone screen glow effect
      gsap.to('.phone-glow', {
        opacity: 0.8,
        scale: 1.1,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });

      // Coffee points animation
      gsap.to('.coffee-point', {
        scale: 1.2,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: 0.1
      });

      // Progress bar animation
      gsap.to('.progress-fill', {
        width: '70%',
        duration: 3,
        delay: 1,
        ease: "power2.out"
      });

      // Floating rewards
      gsap.to('.floating-reward', {
        y: -10,
        rotation: 5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: 0.2
      });

    }, phoneRef);

    return () => ctx.revert();
  }, []);

  // Animate page transition - scroll to the right
  useEffect(() => {
    if (pagesRef.current) {
      gsap.to(pagesRef.current, {
        x: -currentPage * 320, // 320px is the width of the phone screen
        duration: 0.8,
        ease: "power2.inOut"
      });
    }
  }, [currentPage]);

  const qrValue = 'https://linktr.ee/saso_tamse';

  const menuItems = [
    { name: 'Espresso', price: '$3.50', description: 'Rich, bold shot of coffee' },
    { name: 'Americano', price: '$4.00', description: 'Espresso with hot water' },
    { name: 'Cappuccino', price: '$4.50', description: 'Espresso, steamed milk, foam' },
    { name: 'Latte', price: '$5.00', description: 'Espresso with steamed milk' },
    { name: 'Flat White', price: '$4.75', description: 'Double shot, microfoam' },
    { name: 'Mocha', price: '$5.50', description: 'Chocolate espresso drink' },
    { name: 'Caramel Macchiato', price: '$5.75', description: 'Vanilla, caramel, espresso' },
    { name: 'Cold Brew', price: '$4.25', description: '24-hour steeped coffee' },
    { name: 'Iced Latte', price: '$5.25', description: 'Chilled espresso & milk' },
    { name: 'Matcha Latte', price: '$5.50', description: 'Premium green tea latte' },
    { name: 'Chai Latte', price: '$5.00', description: 'Spiced tea with milk' },
    { name: 'Hot Chocolate', price: '$4.50', description: 'Rich chocolate drink' }
  ];

  return (
    <div ref={phoneRef} className="relative flex justify-center">
      {/* Phone glow effect */}
      <div className="phone-glow absolute top-0 bottom-0 left-28 right-28 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-[3rem] blur-xl opacity-50"></div>
      
      {/* Phone container */}
      <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl overflow-hidden">
        <div className="bg-gray-900 rounded-[2.5rem] overflow-hidden w-80 h-[600px] relative">
          {/* Phone screen */}
          <div ref={screenRef} className="h-full bg-gradient-to-br from-gray-100 to-white relative overflow-hidden" onWheel={(e) => e.preventDefault()} onTouchMove={(e) => e.preventDefault()}>
            {/* Pages container */}
            <div ref={pagesRef} className="flex absolute inset-0">
              {/* Page 1: Loyalty Points */}
              <div className="w-80 h-full flex-shrink-0 overflow-hidden">
                <div className="screen-content relative">
                  <div className="p-6">
                    {/* Status bar */}
                    <div className="flex justify-between items-center mb-6 text-black text-sm">
                      <span className="font-semibold">9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                        <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                        <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                      </div>
                    </div>

                    {/* App header */}
                    <div className="text-center mb-8 sticky top-10 bg-white/80 backdrop-blur-sm -mx-6 px-6 py-4">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <Coffee className="h-8 w-8 text-amber-600" />
                        <h2 className="text-2xl font-bold text-gray-900">BrewPoints</h2>
                      </div>
                      <p className="text-gray-600">Your loyalty, our reward</p>
                    </div>

                    {/* Points display */}
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-6 mb-6 text-white relative overflow-hidden">
                      <div className="floating-reward absolute top-2 right-2">
                        <Crown className="h-6 w-6 text-yellow-300" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">Current Points</h3>
                      <div className="text-4xl font-bold mb-4">847</div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm opacity-90">Gold Member</span>
                        <Star className="h-5 w-5 text-yellow-300" />
                      </div>
                    </div>

                    {/* Progress to free coffee */}
                    <div className="bg-white rounded-xl p-4 mb-6 shadow-lg border">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-semibold text-gray-900">Progress to Free Coffee</span>
                        <Gift className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        {[...Array(10)].map((_, i) => (
                          <div key={i} className={`coffee-point w-6 h-6 rounded-full flex items-center justify-center ${i < 7 ? 'bg-emerald-500' : 'bg-gray-200'}`}>
                            <Coffee className={`h-3 w-3 ${i < 7 ? 'text-white' : 'text-gray-400'}`} />
                          </div>
                        ))}
                      </div>
                      <div className="bg-gray-200 rounded-full h-2 mb-2">
                        <div className="progress-fill bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full w-0"></div>
                      </div>
                      <p className="text-sm text-gray-600">3 more coffees until your next free one!</p>
                    </div>

                    {/* QR Code Section */}
                    <div className="bg-white rounded-xl p-6 shadow-lg border">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-semibold text-gray-900">Your Reward Code</h4>
                        <QrCode className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div className="flex justify-center p-4 bg-white rounded-lg">
                        <QRCodeSVG 
                          value={qrValue}
                          size={200}
                          level="H"
                          includeMargin={true}
                          className="shadow-sm"
                        />
                      </div>
                      <p className="text-sm text-gray-600 text-center mt-4">
                        Scan to connect with us
                      </p>
                    </div>

                    {/* Floating rewards */}
                    <div className="floating-reward absolute top-20 left-4">
                      <div className="bg-emerald-500 text-white rounded-full p-2 shadow-lg">
                        <Gift className="h-4 w-4" />
                      </div>
                    </div>
                    <div className="floating-reward absolute top-32 right-6">
                      <div className="bg-teal-500 text-white rounded-full p-2 shadow-lg">
                        <Star className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Page 2: Coffee Menu - Simplified and color consistent */}
              <div className="w-80 h-full flex-shrink-0 overflow-hidden bg-gradient-to-br from-gray-100 to-white">
                <div className="p-6">
                  {/* Status bar */}
                  <div className="flex justify-between items-center mb-6 text-black text-sm">
                    <span className="font-semibold">9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                      <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                      <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                    </div>
                  </div>

                  {/* Menu header */}
                  <div className="text-center mb-6 sticky top-10 bg-white/80 backdrop-blur-sm -mx-6 px-6 py-4">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <Menu className="h-8 w-8 text-amber-600" />
                      <h2 className="text-2xl font-bold text-gray-900">Our Menu</h2>
                    </div>
                    <p className="text-gray-600">Crafted with love</p>
                  </div>

                  {/* Special offer banner */}
                  <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-4 mb-6 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">Double Points Today!</h3>
                        <p className="text-sm opacity-90">Earn 2x points on every purchase</p>
                      </div>
                      <div className="bg-white/20 rounded-full p-2">
                        <Star className="h-6 w-6" />
                      </div>
                    </div>
                  </div>

                  {/* Menu items - simplified */}
                  <div className="space-y-2">
                    {menuItems.map((item, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">{item.name}</h4>
                            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                          </div>
                          <span className="font-bold text-emerald-600 ml-4">{item.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom spacing */}
                  <div className="h-6"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneDemo;