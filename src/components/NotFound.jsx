import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/assets/images/404_robot.png" 
          alt="404 System Error" 
          className="w-full h-full object-cover opacity-100 object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
      </div>

      {/* Top Left Home Button */}
      <div className="absolute top-8 left-6 md:left-12 z-30">
        <a 
          href="/"
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium hover:bg-white hover:text-black transition-all duration-300"
        >
          <ArrowLeft size={18} />
          Return to Core
        </a>
      </div>

      {/* Content (Just the subtle badge) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex items-center justify-end h-full pointer-events-none">
        <motion.div 
          className="max-w-2xl text-right"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div 
            className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white/50 text-xs font-mono tracking-widest uppercase"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            System Error 404
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Scanline Overlay */}
      <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.1)_51%)] bg-[length:100%_4px]" />
    </div>
  );
};
