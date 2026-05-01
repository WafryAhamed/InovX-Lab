import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export const About = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-black">
      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs uppercase tracking-[0.25em] text-white/50 font-medium">
            About InovX Lab
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
        >
          <span className="text-white">Empowering Intelligent</span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white/90 via-white/70 to-white/50">
            Business Systems
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-16"
        >
          At InovX Lab, we design AI-powered systems that automate workflows,
          enhance decision-making, and transform how businesses operate in the
          digital era.
        </motion.p>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto text-left">
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm"
          >
            <h3 className="text-sm uppercase tracking-[0.2em] text-white/40 font-semibold mb-4">
              Mission —
            </h3>
            <p className="text-white/70 text-base leading-relaxed">
              To simplify complex business processes through intelligent
              automation.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm"
          >
            <h3 className="text-sm uppercase tracking-[0.2em] text-white/40 font-semibold mb-4">
              Vision —
            </h3>
            <p className="text-white/70 text-base leading-relaxed">
              To build scalable, human-centered AI solutions that shape the
              future of digital innovation.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
