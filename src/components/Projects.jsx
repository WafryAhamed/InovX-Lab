import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  {
    title: 'AI Chatbot System',
    description:
      'Smart conversational AI for automating customer interactions.',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'Business Analytics Dashboard',
    description:
      'Real-time data visualization platform for insights and performance tracking.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'Automation Engine',
    description:
      'AI-powered system to streamline repetitive processes and workflows.',
    image:
      'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=400&fit=crop&q=80',
  },
  {
    title: 'Recommendation System',
    description:
      'Intelligent system that delivers personalized user experiences.',
    image:
      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop&q=80',
  },
];

import { staggerContainer, fadeUpVariant, alternateSlideIn, cardHover } from '../utils/motion';

const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);

  const isEven = index % 2 === 0;

  const itemVariants = alternateSlideIn(isEven ? 'left' : 'right');

  return (
    <motion.div
      ref={cardRef}
      variants={itemVariants}
      style={{ y }}
      whileHover={cardHover}
      className="group rounded-2xl border border-white/[0.06] bg-[#111] overflow-hidden backdrop-blur-sm transition-shadow duration-300 hover:border-white/[0.12] hover:shadow-[0_0_40px_-8px_rgba(255,255,255,0.06)]"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5, ease: 'easeOut' },
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-white/50 leading-relaxed mb-5">
          {project.description}
        </p>
        <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/[0.08] bg-white/[0.03] text-xs uppercase tracking-[0.15em] text-white/60 font-medium transition-colors duration-300 hover:bg-white/[0.08] hover:text-white/80">
          View Project
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="relative py-24 bg-black">
      <motion.div
        className="max-w-6xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
      >
        {/* Badge */}
        <motion.div variants={fadeUpVariant} className="text-center mb-4">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs uppercase tracking-[0.25em] text-white/50 font-medium">
            Portfolio
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeUpVariant}
          className="text-4xl md:text-5xl font-bold text-center mb-5"
        >
          <span className="text-white">Our</span>{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white/90 via-white/70 to-white/50">
            Projects
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeUpVariant}
          className="text-lg text-white/60 max-w-2xl mx-auto text-center leading-relaxed mb-16"
        >
          Explore how we build intelligent AI-powered systems that solve
          real-world business challenges.
        </motion.p>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
