import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Twitter, ArrowUp } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Twitter, href: '/not-available', label: 'Twitter' },
];

export const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-white/[0.06]">
      <motion.div
        className="max-w-6xl mx-auto px-6 py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
              InovX Lab
            </h3>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              Building intelligent AI systems that transform modern businesses.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold mb-4">
              Navigation
            </h4>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/50 transition-colors duration-200 hover:text-white w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </motion.div>

          {/* Social */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/40 font-semibold mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className="w-9 h-9 rounded-lg border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-white/50 transition-colors duration-200 hover:text-white hover:border-white/20"
                  >
                    <Icon className="w-4 h-4" strokeWidth={1.5} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider + Copyright */}
        <motion.div
          variants={itemVariants}
          className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-white/30">
            &copy; 2026 InovX Lab. All rights reserved.
          </p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ duration: 0.2 }}
            className="w-9 h-9 rounded-lg border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-white/40 transition-colors duration-200 hover:text-white hover:border-white/20"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" strokeWidth={2} />
          </motion.button>
        </motion.div>
      </motion.div>
    </footer>
  );
};
