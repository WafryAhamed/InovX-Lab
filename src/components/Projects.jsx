import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const projects = [
  {
    id: '01',
    title: 'AI Customer Support Platform',
    client: 'for a leading E-commerce Company',
    description: 'Built an intelligent support system that automated customer queries and reduced support workload by 70%, allowing human agents to focus on high-value interactions.',
    tags: 'NLP • Automation • Real-time Processing',
    image: '/assets/project/Case%20Study%2001.png',
  },
  {
    id: '02',
    title: 'Smart Analytics Dashboard',
    client: 'for a global FinTech Platform',
    description: 'Developed a real-time analytics system enabling 3x faster decision-making with live data visualization and predictive modeling for financial forecasting.',
    tags: 'Data Visualization • Predictive Analytics • Cloud Architecture',
    image: '/assets/project/Case%20Study%2002.png',
  },
  {
    id: '03',
    title: 'Workflow Automation System',
    client: 'for Enterprise Logistics Operations',
    description: 'Streamlined complex internal supply chain processes, reducing manual operations by 85% and significantly increasing overall operational efficiency.',
    tags: 'Process Automation • Machine Learning • Cloud Integration',
    image: '/assets/project/Case%20Study%2003.png',
  },
  {
    id: '04',
    title: 'Recommendation Engine',
    client: 'for a Digital Retail Platform',
    description: 'Delivered tailored user experiences using behavior-based intelligence, driving a 40% increase in user engagement and sales conversions.',
    tags: 'Behavior Tracking • AI Models • Personalization',
    image: '/assets/project/Case%20Study%2004.png',
  },
];

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const Projects = () => {
  const wrapperRef = useRef(null);
  const headerRef = useRef(null);
  const rowsRef = useRef([]);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      // Header Reveal
      gsap.fromTo(
        headerRef.current,
        { y: 120, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 80%",
            end: "top 40%",
            scrub: 1,
          },
        }
      );

      // Project Rows Staggered Reveal
      rowsRef.current.forEach((row, i) => {
        if (!row) return;
        gsap.fromTo(
          row,
          { y: 120, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            scrollTrigger: {
              trigger: row,
              start: "top 85%",
              end: "top 40%",
              scrub: 1,
            },
          }
        );
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={wrapperRef}
      className="relative py-24 bg-black overflow-hidden"
    >
      {/* Top Wave Separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none -translate-y-[1px]">
        <motion.svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-[60px] md:h-[80px] lg:h-[100px]"
        >
          <motion.path
            fill="white"
            fillOpacity="0.04"
            animate={{
              d: [
                'M0,80 C360,120 720,40 1080,80 C1260,100 1380,60 1440,80 L1440,0 L0,0 Z',
                'M0,60 C360,40 720,100 1080,60 C1260,40 1380,80 1440,60 L1440,0 L0,0 Z',
                'M0,80 C360,120 720,40 1080,80 C1260,100 1380,60 1440,80 L1440,0 L0,0 Z',
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.path
            fill="white"
            fillOpacity="0.02"
            animate={{
              d: [
                'M0,90 C400,50 800,110 1200,70 C1350,55 1400,85 1440,70 L1440,0 L0,0 Z',
                'M0,70 C400,110 800,50 1200,90 C1350,105 1400,65 1440,90 L1440,0 L0,0 Z',
                'M0,90 C400,50 800,110 1200,70 C1350,55 1400,85 1440,70 L1440,0 L0,0 Z',
              ],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.svg>
      </div>

      <div ref={headerRef} className="max-w-7xl mx-auto px-6">
        {/* Badge */}
        <div className="text-center mb-4">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs uppercase tracking-[0.25em] text-white/50 font-medium">
            Case Studies
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-5 tracking-tight">
          <span className="text-white">Our</span>{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white/90 via-white/70 to-white/50">
            Impact
          </span>
        </h2>

        {/* Description */}
        <p className="text-lg text-white/60 max-w-2xl mx-auto text-center leading-relaxed mb-8 md:mb-12">
          Explore how we build intelligent AI-powered systems that solve
          real-world business challenges and drive exponential growth.
        </p>
      </div>

      {/* Case Studies Container */}
      <div className="flex flex-col relative z-10">
        {projects.map((project, index) => (
          <section
            key={project.id}
            ref={(el) => (rowsRef.current[index] = el)}
            className={`${index === 0 ? 'pt-8 md:pt-12 pb-20 md:pb-32' : 'py-20 md:py-32'} ${index !== projects.length - 1 ? 'border-b border-white/10' : ''}`}
          >
            <div className={`max-w-7xl mx-auto px-6 flex flex-col gap-12 md:gap-20 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
              
              {/* Image Side */}
              <div className="w-full md:w-1/2 perspective-[2000px]">
                <motion.div 
                  className="relative group rounded-2xl"
                  whileHover={{ 
                    rotateY: index % 2 !== 0 ? -8 : 8, 
                    rotateX: 5, 
                    scale: 1.05 
                  }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* 2026 Glow effect behind image */}
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 blur-[60px] transition-opacity duration-700 -z-10 rounded-2xl" />
                  
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto object-contain rounded-2xl border border-white/10 shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out" 
                  />
                  
                  {/* Subtle overlay that fades out */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 rounded-2xl pointer-events-none" />
                </motion.div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-1/2 space-y-6 md:space-y-8">
                <div>
                  <p className="text-white/40 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                    Case Study {project.id}
                  </p>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-2">
                    {project.title}
                  </h3>
                  <p className="text-lg md:text-xl font-medium text-white/80">
                    {project.client}
                  </p>
                </div>

                <p className="text-base md:text-lg text-white/60 leading-relaxed max-w-lg">
                  {project.description}
                </p>

                <p className="text-xs md:text-sm text-white/40 font-mono tracking-wide uppercase">
                  {project.tags}
                </p>

                <button className="mt-4 inline-flex items-center gap-2 px-6 py-3 border border-white/20 bg-white/[0.02] rounded-full text-sm text-white font-medium hover:bg-white/10 hover:border-white/40 transition-all duration-300 group">
                  View Case Study
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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

            </div>
          </section>
        ))}
      </div>
    </section>
  );
};
