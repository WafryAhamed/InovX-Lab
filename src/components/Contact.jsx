import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
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

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="relative py-24 bg-black">
      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-white/[0.02] blur-[120px] rounded-full" />
      </div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={containerVariants}
      >
        {/* Badge */}
        <motion.div variants={headingVariants} className="text-center mb-4">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs uppercase tracking-[0.25em] text-white/50 font-medium">
            Get In Touch
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={headingVariants}
          className="text-4xl md:text-5xl font-bold text-center mb-5"
        >
          <span className="text-white">Let's Build Something</span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white/90 via-white/70 to-white/50">
            Intelligent
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={headingVariants}
          className="text-lg text-white/60 max-w-2xl mx-auto text-center leading-relaxed mb-16"
        >
          Have an idea or project in mind? Let's collaborate and create
          AI-powered solutions that drive innovation and efficiency.
        </motion.p>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          variants={containerVariants}
          className="max-w-xl mx-auto p-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm"
        >
          {/* Name */}
          <motion.div variants={itemVariants} className="mb-5">
            <label
              htmlFor="contact-name"
              className="block text-xs uppercase tracking-[0.2em] text-white/40 font-medium mb-2"
            >
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              required
              placeholder="Your name"
              className="w-full bg-transparent border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-white/30 focus:shadow-[0_0_12px_-4px_rgba(255,255,255,0.15)]"
            />
          </motion.div>

          {/* Email */}
          <motion.div variants={itemVariants} className="mb-5">
            <label
              htmlFor="contact-email"
              className="block text-xs uppercase tracking-[0.2em] text-white/40 font-medium mb-2"
            >
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              required
              placeholder="you@example.com"
              className="w-full bg-transparent border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-white/30 focus:shadow-[0_0_12px_-4px_rgba(255,255,255,0.15)]"
            />
          </motion.div>

          {/* Message */}
          <motion.div variants={itemVariants} className="mb-8">
            <label
              htmlFor="contact-message"
              className="block text-xs uppercase tracking-[0.2em] text-white/40 font-medium mb-2"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              required
              rows={4}
              placeholder="Tell us about your project..."
              className="w-full bg-transparent border border-white/[0.08] rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 outline-none resize-none transition-all duration-300 focus:border-white/30 focus:shadow-[0_0_12px_-4px_rgba(255,255,255,0.15)]"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={itemVariants}>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white text-black text-sm font-semibold tracking-wide transition-shadow duration-300 hover:shadow-[0_0_24px_-4px_rgba(255,255,255,0.2)]"
            >
              Send Message
              <Send className="w-4 h-4" strokeWidth={2} />
            </motion.button>
          </motion.div>

          {/* Success Message */}
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-6 text-center text-sm text-white/60"
            >
              ✓ Message sent successfully. We'll get back to you soon.
            </motion.div>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
};
