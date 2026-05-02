import React from 'react';
import { ArrowLeft } from 'lucide-react';

export const NotAvailable = () => {
  return (
    <div className="relative min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/assets/images/404_robot_pet.png" 
          alt="Page Not Found" 
          className="w-full h-full object-cover opacity-100 object-center"
        />
        {/* Subtle gradient so the top left corner is readable for the button */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent h-40" />
      </div>

      {/* Top Left Home Button */}
      <div className="absolute top-8 left-6 md:left-12 z-30">
        <a 
          href="/"
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium hover:bg-white hover:text-black transition-all duration-300"
        >
          <ArrowLeft size={18} />
          Return to Home
        </a>
      </div>
    </div>
  );
};
