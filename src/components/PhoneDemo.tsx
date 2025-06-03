
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Coffee, Gift, Star, Crown, Calendar, MapPin, Clock, Plus, Minus } from 'lucide-react';

interface PhoneDemoProps {
  isPlaying?: boolean;
  onDemoEnd?: () => void;
}

const PhoneDemo = ({ isPlaying = false, onDemoEnd }: PhoneDemoProps) => {
  const phoneRef = useRef<HTMLDivElement>(null);
  const [currentScreen, setCurrentScreen] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);

  const screens = [
    'landing',
    'loyalty',
    'reservation',
    'menu'
  ];

  useEffect(() => {
    if (isPlaying && !autoPlay) {
      setAutoPlay(true);
      setCurrentScreen(0);
    }
  }, [isPlaying, autoPlay]);

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        setCurrentScreen((prev) => {
          const next = (prev + 1) % screens.length;
          if (next === 0 && onDemoEnd) {
            setAutoPlay(false);
            onDemoEnd();
          }
          return next;
        });
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [autoPlay, onDemoEnd, screens.length]);

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

      // Screen transition animation
      gsap.fromTo('.screen-content', {
        opacity: 0,
        y: 20
      }, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out"
      });

      // Coffee points animation for loyalty screen
      if (currentScreen === 1) {
        gsap.to('.coffee-point', {
          scale: 1.2,
          duration: 0.8,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          stagger: 0.1
        });

        gsap.to('.progress-fill', {
          width: '70%',
          duration: 2,
          ease: "power2.out"
        });
      }

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
  }, [currentScreen]);

  const renderLandingScreen = () => (
    <div className="screen-content h-full bg-gradient-to-br from-amber-50 to-orange-50 p-6 relative overflow-hidden">
      {/* Background coffee beans pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(8)].map((_, i) => (
          <Coffee key={i} className={`absolute h-8 w-8 text-amber-600 floating-reward`} 
            style={{
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 80}%`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>

      {/* Logo and branding */}
      <div className="text-center mb-8 relative z-10">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-amber-600 rounded-full p-4 shadow-lg">
            <Coffee className="h-12 w-12 text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-amber-900 mb-2">BrewPoints</h1>
        <p className="text-amber-700">Your loyalty, our reward</p>
      </div>

      {/* Welcome message */}
      <div className="bg-white/80 backdrop-blur rounded-2xl p-6 mb-6 shadow-lg">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Welcome Back!</h2>
        <p className="text-gray-700 mb-4">Discover amazing rewards and exclusive offers just for you.</p>
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Your Points</p>
              <p className="text-2xl font-bold">847</p>
            </div>
            <Star className="h-8 w-8" />
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-2 gap-3">
        <button className="bg-amber-600 text-white rounded-xl p-4 flex flex-col items-center shadow-lg">
          <Gift className="h-6 w-6 mb-2" />
          <span className="text-sm font-medium">Rewards</span>
        </button>
        <button className="bg-orange-600 text-white rounded-xl p-4 flex flex-col items-center shadow-lg">
          <Calendar className="h-6 w-6 mb-2" />
          <span className="text-sm font-medium">Reserve</span>
        </button>
      </div>
    </div>
  );

  const renderLoyaltyScreen = () => (
    <div className="screen-content h-full bg-gradient-to-br from-gray-100 to-white p-6 relative overflow-hidden">
      {/* Header */}
      <div className="text-center mb-6">
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
      <div className="bg-white rounded-xl p-4 mb-4 shadow-lg border">
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

      {/* Floating rewards */}
      <div className="floating-reward absolute top-20 left-4">
        <div className="bg-emerald-500 text-white rounded-full p-2 shadow-lg">
          <Gift className="h-4 w-4" />
        </div>
      </div>
    </div>
  );

  const renderReservationScreen = () => (
    <div className="screen-content h-full bg-gradient-to-br from-blue-50 to-indigo-50 p-6 relative overflow-hidden">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Table Reservation</h2>
        <p className="text-gray-600">Book your perfect spot</p>
      </div>

      {/* Date and time selection */}
      <div className="bg-white rounded-xl p-4 mb-4 shadow-lg">
        <h3 className="font-semibold text-gray-900 mb-3">Select Date & Time</h3>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="border rounded-lg p-3 text-center bg-blue-50">
            <Calendar className="h-5 w-5 mx-auto mb-1 text-blue-600" />
            <p className="text-sm font-medium">Today</p>
            <p className="text-xs text-gray-600">Dec 15</p>
          </div>
          <div className="border rounded-lg p-3 text-center">
            <Clock className="h-5 w-5 mx-auto mb-1 text-gray-400" />
            <p className="text-sm font-medium">7:30 PM</p>
            <p className="text-xs text-gray-600">Available</p>
          </div>
        </div>
      </div>

      {/* Party size */}
      <div className="bg-white rounded-xl p-4 mb-4 shadow-lg">
        <h3 className="font-semibold text-gray-900 mb-3">Party Size</h3>
        <div className="flex items-center justify-center space-x-4">
          <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
            <Minus className="h-4 w-4" />
          </button>
          <span className="text-2xl font-bold">4</span>
          <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Location */}
      <div className="bg-white rounded-xl p-4 mb-4 shadow-lg">
        <div className="flex items-center space-x-3">
          <MapPin className="h-5 w-5 text-blue-600" />
          <div>
            <p className="font-medium text-gray-900">Downtown Location</p>
            <p className="text-sm text-gray-600">123 Coffee Street</p>
          </div>
        </div>
      </div>

      {/* Confirm button */}
      <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl p-4 font-semibold">
        Confirm Reservation
      </button>
    </div>
  );

  const renderMenuScreen = () => (
    <div className="screen-content h-full bg-gradient-to-br from-green-50 to-emerald-50 p-6 relative overflow-hidden">
      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">Menu</h2>
        <p className="text-gray-600">Fresh brewed daily</p>
      </div>

      {/* Menu categories */}
      <div className="flex space-x-2 mb-4">
        <button className="px-4 py-2 bg-green-600 text-white rounded-full text-sm font-medium">
          Coffee
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">
          Pastries
        </button>
        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-medium">
          Drinks
        </button>
      </div>

      {/* Menu items */}
      <div className="space-y-3">
        {[
          { name: 'Espresso', price: '$3.50', description: 'Rich and bold', points: '+15' },
          { name: 'Cappuccino', price: '$4.25', description: 'Creamy and smooth', points: '+18' },
          { name: 'Latte', price: '$4.75', description: 'Perfectly balanced', points: '+20' },
          { name: 'Cold Brew', price: '$3.95', description: 'Refreshing and strong', points: '+16' }
        ].map((item, i) => (
          <div key={i} className="bg-white rounded-xl p-4 shadow-lg border">
            <div className="flex justify-between items-start mb-2">
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-green-600">{item.price}</p>
                <p className="text-xs text-emerald-600">{item.points} pts</p>
              </div>
            </div>
            <button className="w-full bg-green-600 text-white rounded-lg py-2 text-sm font-medium">
              Add to Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCurrentScreen = () => {
    switch (screens[currentScreen]) {
      case 'landing':
        return renderLandingScreen();
      case 'loyalty':
        return renderLoyaltyScreen();
      case 'reservation':
        return renderReservationScreen();
      case 'menu':
        return renderMenuScreen();
      default:
        return renderLandingScreen();
    }
  };

  return (
    <div ref={phoneRef} className="relative flex justify-center">
      {/* Phone glow effect */}
      <div className="phone-glow absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-[3rem] blur-xl opacity-50"></div>
      
      {/* Phone container */}
      <div className="relative bg-black rounded-[3rem] p-2 shadow-2xl">
        <div className="bg-gray-900 rounded-[2.5rem] overflow-hidden w-80 h-[600px] relative">
          {/* Status bar */}
          <div className="absolute top-0 left-0 right-0 z-10 bg-black/10 backdrop-blur-sm">
            <div className="flex justify-between items-center px-6 py-2 text-white text-sm">
              <span className="font-semibold">9:41</span>
              <div className="flex space-x-1">
                <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
              </div>
            </div>
          </div>

          {/* Phone screen content */}
          <div className="h-full pt-10">
            {renderCurrentScreen()}
          </div>

          {/* Screen indicator dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {screens.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentScreen ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneDemo;
