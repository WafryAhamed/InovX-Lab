import React from 'react';
import { motion } from 'framer-motion';
import { Bot, BarChart3, MessageSquare, Database } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
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

const headingVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const services = [
  {
    icon: Bot,
    title: 'AI Automation',
    description:
      'Automate repetitive workflows and optimize operations with intelligent systems.',
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics',
    description:
      'Use data-driven insights to forecast trends and make smarter decisions.',
  },
  {
    icon: MessageSquare,
    title: 'AI Chat Systems',
    description:
      'Build conversational AI tools that enhance customer interaction.',
  },
  {
    icon: Database,
    title: 'Data Intelligence',
    description:
      'Transform complex data into actionable business insights.',
  },
];

export const Services = () => {
  return (
    <section className="relative py-24 bg-black">
      <motion.div
        className="max-w-6xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={containerVariants}
      >
        {/* Badge */}
        <motion.div variants={headingVariants} className="text-center mb-4">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs uppercase tracking-[0.25em] text-white/50 font-medium">
            What We Do
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={headingVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-5"
        >
          <span className="text-white">Our AI</span>{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white/90 via-white/70 to-white/50">
            Services
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={headingVariants}
          className="text-lg text-white/60 max-w-2xl mx-auto text-center leading-relaxed mb-16"
        >
          We provide intelligent solutions that help businesses automate
          processes, analyze data, and scale efficiently using cutting-edge AI
          technologies.
        </motion.p>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.3, ease: 'easeOut' },
                }}
                className="group relative p-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm transition-shadow duration-300 hover:border-white/[0.12] hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.06)]"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-white/[0.08]">
                  <Icon className="w-5 h-5 text-white/60" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-white/50 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};
