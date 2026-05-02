import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: 'What services does InovX Lab provide?',
    answer:
      'We provide AI automation, predictive analytics, chat systems, and data intelligence solutions.',
  },
  {
    question: 'How can AI improve my business?',
    answer:
      'AI helps automate processes, analyze data, and improve efficiency and decision-making.',
  },
  {
    question: 'Are your solutions scalable?',
    answer:
      'Yes, our systems are designed to scale with your business needs.',
  },
  {
    question: 'Do you offer custom AI solutions?',
    answer:
      'Yes, we tailor AI solutions based on your business requirements.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'We implement advanced security measures to ensure data protection and reliability.',
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Image with Motion */}
          <motion.div
            className="w-full lg:w-5/12 flex justify-center lg:justify-end lg:pr-8 mb-10 lg:mb-0"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.img
              src="/assets/images/hi_FAQ.png"
              alt="FAQ Illustration"
              className="w-4/5 sm:w-2/3 md:w-1/2 lg:w-full max-w-[250px] sm:max-w-[300px] lg:max-w-[350px] h-auto object-contain drop-shadow-2xl"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* Right Side: FAQ Content */}
          <motion.div
            className="w-full lg:w-7/12"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            {/* Header */}
            <div className="text-left mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6">
                <span className="w-2 h-2 rounded-full bg-white/40" />
                <span className="text-xs font-medium text-white/70 uppercase tracking-widest">
                  Answers
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Find answers to common questions about our AI-powered solutions and
                services.
              </p>
            </div>

            {/* Accordion List */}
            <div className="flex flex-col">
              {faqData.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="border-b border-white/10 last:border-transparent"
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                    >
                      <span className="text-white font-medium text-lg transition-colors group-hover:text-white/80 pr-4">
                        {faq.question}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="text-white/50 group-hover:text-white flex-shrink-0"
                      >
                        <ChevronDown size={20} strokeWidth={2} />
                      </motion.div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <p className="text-white/60 pb-6 pr-8 leading-relaxed text-sm md:text-base">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
