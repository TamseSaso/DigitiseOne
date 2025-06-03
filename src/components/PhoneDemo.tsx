
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Coffee, Gift, Star, Crown } from 'lucide-react';

const PhoneDemo = () => {
  const phoneRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);

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

  return (
    <div ref={phoneRef} className="relative flex justify-center">
      {/* Phone glow effect */}
      <div className="phone-glow absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-[3rem] blur-xl opacity-50"></div>
      
      {/* Phone container */}
      <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl">
        <div className="bg-gray-900 rounded-[2.5rem] overflow-hidden w-80 h-[600px] relative">
          {/* Phone screen */}
          <div ref={screenRef} className="h-full bg-gradient-to-br from-gray-100 to-white p-6 relative overflow-hidden">
            
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
            <div className="text-center mb-8">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Coffee className="h-8 w-8 text-amber-600" />
                <h2 className="text-2xl font-bold text-gray-900">BrewPoints</h2>
              </div>
              <p className="text-gray-600">Your loyalty, our reward</p>
            </div>

            {/* Points display */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-6 mb-6 text-white relative overflow-hidden">
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
                <Gift className="h-5 w-5 text-purple-600" />
              </div>
              <div className="flex items-center space-x-2 mb-2">
                {[...Array(10)].map((_, i) => (
                  <div key={i} className={`coffee-point w-6 h-6 rounded-full flex items-center justify-center ${i < 7 ? 'bg-amber-500' : 'bg-gray-200'}`}>
                    <Coffee className={`h-3 w-3 ${i < 7 ? 'text-white' : 'text-gray-400'}`} />
                  </div>
                ))}
              </div>
              <div className="bg-gray-200 rounded-full h-2 mb-2">
                <div className="progress-fill bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full w-0"></div>
              </div>
              <p className="text-sm text-gray-600">3 more coffees until your next free one!</p>
            </div>

            {/* Recent activity */}
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900">Recent Activity</h4>
              {[
                { action: 'Purchased Latte', points: '+12', time: '2 hours ago' },
                { action: 'Purchased Cappuccino', points: '+10', time: '1 day ago' },
                { action: 'Free Coffee Redeemed', points: '-100', time: '3 days ago' }
              ].map((activity, i) => (
                <div key={i} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                  <div>
                    <p className="font-medium text-gray-900 text-sm">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                  <span className={`font-bold text-sm ${activity.points.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {activity.points}
                  </span>
                </div>
              ))}
            </div>

            {/* Floating rewards */}
            <div className="floating-reward absolute top-20 left-4">
              <div className="bg-purple-500 text-white rounded-full p-2 shadow-lg">
                <Gift className="h-4 w-4" />
              </div>
            </div>
            <div className="floating-reward absolute top-32 right-6">
              <div className="bg-green-500 text-white rounded-full p-2 shadow-lg">
                <Star className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneDemo;
