"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const CinematicLoader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 5) + 1;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
    >
      {/* Abstract Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]" />
      
      <div className="relative z-10 flex flex-col items-center">
        {/* Animated Logo/Icon */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mb-8"
        >
          <div className="w-16 h-16 rounded-2xl border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm">
            <div className="w-8 h-8 rounded-full border-2 border-white/40 border-t-white animate-spin" />
          </div>
        </motion.div>

        {/* Text and Progress */}
        <div className="text-center">
          <h2 className="text-white text-xs uppercase tracking-[0.4em] font-light mb-4">
            InovX Lab <span className="opacity-40">/</span> Initializing Intelligence
          </h2>
          
          <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
            <motion.div
              className="absolute inset-y-0 left-0 bg-white"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
          
          <div className="mt-2 flex justify-between text-[10px] text-white/40 font-mono">
            <span>CORE_SYSTEM</span>
            <span>{progress}%</span>
          </div>
        </div>
      </div>

      {/* Decorative Corner Lines */}
      <div className="absolute top-10 left-10 w-20 h-20 border-t border-l border-white/10" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-b border-r border-white/10" />
    </motion.div>
  );
};
