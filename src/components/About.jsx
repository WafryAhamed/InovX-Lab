import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '../utils/motion';
import Antigravity from './Antigravity';

/* ── Animated SVG Visuals ── */

const NodesVisual = () => (
  <div className="relative w-full h-full min-h-[280px] flex items-center justify-center">
    <svg viewBox="0 0 200 200" className="w-48 h-48 md:w-56 md:h-56">
      {/* Connecting lines */}
      <motion.line x1="100" y1="60" x2="50" y2="140" stroke="white" strokeOpacity="0.1" strokeWidth="1"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }} viewport={{ once: true }}
      />
      <motion.line x1="100" y1="60" x2="150" y2="140" stroke="white" strokeOpacity="0.1" strokeWidth="1"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }} viewport={{ once: true }}
      />
      <motion.line x1="50" y1="140" x2="150" y2="140" stroke="white" strokeOpacity="0.1" strokeWidth="1"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        transition={{ duration: 1.2, delay: 0.7 }} viewport={{ once: true }}
      />
      <motion.line x1="100" y1="60" x2="100" y2="140" stroke="white" strokeOpacity="0.06" strokeWidth="1"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        transition={{ duration: 1, delay: 0.9 }} viewport={{ once: true }}
      />
      {/* Nodes */}
      {[
        { cx: 100, cy: 60, delay: 0.2 },
        { cx: 50, cy: 140, delay: 0.4 },
        { cx: 150, cy: 140, delay: 0.6 },
        { cx: 100, cy: 140, delay: 0.8 },
        { cx: 75, cy: 100, delay: 1.0 },
        { cx: 125, cy: 100, delay: 1.0 },
      ].map((node, i) => (
        <motion.circle key={i} cx={node.cx} cy={node.cy} r="5" fill="white" fillOpacity="0.15"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: node.delay }}
          viewport={{ once: true }}
        />
      ))}
      {/* Center glow node */}
      <motion.circle cx="100" cy="60" r="12" fill="white" fillOpacity="0.06"
        style={{ originX: '100px', originY: '60px' }}
        animate={{ scale: [1, 1.6, 1], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
    </svg>
  </div>
);

const DataFlowVisual = () => (
  <div className="relative w-full h-full min-h-[280px] flex items-center justify-center">
    <svg viewBox="0 0 200 160" className="w-48 h-48 md:w-56 md:h-56">
      {/* Data flow lines */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.line key={i} x1="20" y1={30 + i * 25} x2="180" y2={30 + i * 25}
          stroke="white" strokeOpacity="0.06" strokeWidth="1"
        />
      ))}
      {/* Flowing pulse dots */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.circle key={`dot-${i}`} cx="20" cy={30 + i * 25} r="3" fill="white" fillOpacity="0.2"
          animate={{ x: [0, 160] }}
          transition={{
            duration: 3 + i * 0.4,
            repeat: Infinity,
            ease: 'linear',
            delay: i * 0.6,
          }}
        />
      ))}
      {/* Graph bars */}
      {[
        { x: 40, h: 40, delay: 0.2 },
        { x: 70, h: 60, delay: 0.4 },
        { x: 100, h: 35, delay: 0.6 },
        { x: 130, h: 55, delay: 0.8 },
        { x: 160, h: 45, delay: 1.0 },
      ].map((bar, i) => (
        <motion.rect key={i} x={bar.x - 8} width="16" rx="3"
          y={150 - bar.h} height={bar.h}
          fill="white" fillOpacity="0.08"
          initial={{ height: 0, y: 150 }}
          whileInView={{ height: bar.h, y: 150 - bar.h }}
          transition={{ duration: 0.6, delay: bar.delay, ease: 'easeOut' }}
          viewport={{ once: true }}
        />
      ))}
      {/* Pulse ring */}
      <motion.circle cx="100" cy="80" r="25" fill="none" stroke="white" strokeOpacity="0.08" strokeWidth="1"
        style={{ originX: '100px', originY: '80px' }}
        animate={{ scale: [1, 1.5, 1], opacity: [0.08, 0.02, 0.08] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </svg>
  </div>
);

const ScaleVisual = () => (
  <div className="relative w-full h-full min-h-[280px] flex items-center justify-center">
    <svg viewBox="0 0 200 200" className="w-48 h-48 md:w-56 md:h-56">
      {/* Expanding grid */}
      {[0, 1, 2].map((row) =>
        [0, 1, 2].map((col) => (
          <motion.rect key={`${row}-${col}`}
            x={40 + col * 45} y={40 + row * 45} width="35" height="35" rx="6"
            fill="white" fillOpacity="0.04" stroke="white" strokeOpacity="0.08" strokeWidth="0.5"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: (row * 3 + col) * 0.1 + 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          />
        ))
      )}
      {/* Expanding rings */}
      {[30, 50, 70].map((r, i) => (
        <circle key={`ring-static-${i}`} cx="100" cy="100" r={r} fill="none"
          stroke="white" strokeOpacity="0.04" strokeWidth="0.5"
        />
      ))}
      {[30, 50, 70].map((r, i) => (
        <motion.circle key={`ring-${i}`} cx="100" cy="100" r={r} fill="none"
          stroke="white" strokeOpacity="0.04" strokeWidth="0.5"
          style={{ originX: '100px', originY: '100px' }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 }}
        />
      ))}
    </svg>
  </div>
);

/* ── Features Data ── */

const features = [
  {
    title: 'Adaptive Automation',
    description:
      'Systems that learn from behavior and continuously optimize workflows without manual intervention.',
    videoSrc: '/assets/videos/01-adaptive-automation.mp4',
  },
  {
    title: 'Real-Time Intelligence',
    description:
      'Instant insights powered by live data streams, enabling faster and smarter decision-making.',
    videoSrc: '/assets/videos/02-real-time-intelligence.mp4',
  },
  {
    title: 'Scalable Architecture',
    description:
      'Built to grow with your business, handling complexity and scale with ease.',
    videoSrc: '/assets/videos/03-scalable-architecture.mp4',
  },
];

/* ── Feature Row Component ── */

const FeatureRow = ({ feature, index, rowRef }) => {
  const isReversed = index % 2 !== 0;

  return (
    <div
      ref={rowRef}
      className="relative w-full h-[80vh] md:h-screen flex items-center overflow-hidden border-t border-white/[0.05]"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0 feature-media bg-black">
        <video
          src={feature.videoSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
        <div className={`absolute inset-0 bg-gradient-to-r ${isReversed ? 'from-transparent via-transparent to-black/80' : 'from-black/80 via-transparent to-transparent'}`} />
      </div>

      {/* Text */}
      <div 
        className={`relative z-10 w-full max-w-6xl mx-auto px-6 flex ${isReversed ? 'justify-end' : 'justify-start'} feature-text`}
        style={{ perspective: "1000px" }}
      >
        <div className="max-w-2xl">
          <div className="inline-block px-4 py-2 rounded-md border border-white/[0.15] bg-white/[0.1] backdrop-blur-sm text-sm md:text-base uppercase tracking-[0.2em] text-white/90 font-semibold mb-6 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            0{index + 1}
          </div>
          <h3 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            {feature.title}
          </h3>
          <p className="text-lg md:text-2xl text-white/80 leading-relaxed drop-shadow-lg font-light">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
};

/* ── About Section ── */

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const About = () => {
  const wrapperRef = useRef(null);
  const bgRef = useRef(null);
  const headerRef = useRef(null);
  const rowsRef = useRef([]);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      // Background Parallax
      gsap.fromTo(
        bgRef.current,
        { y: "15%", scale: 1.1 },
        {
          y: "-15%",
          scale: 1,
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

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

      // Feature Rows Staggered Reveal
      rowsRef.current.forEach((row, i) => {
        const text = row.querySelector('.feature-text');
        const media = row.querySelector('.feature-media video');
        
        if (text) {
          gsap.fromTo(
            text.children[0],
            { y: 120, opacity: 0, scale: 0.8, rotateX: 20 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              rotateX: 0,
              duration: 1.4,
              ease: "expo.out",
              scrollTrigger: {
                trigger: row,
                start: "top 65%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }

        if (media) {
          gsap.fromTo(
            media,
            { scale: 1.25, filter: "blur(12px) brightness(0.3)" },
            {
              scale: 1,
              filter: "blur(0px) brightness(1)",
              scrollTrigger: {
                trigger: row,
                start: "top bottom",
                end: "center center",
                scrub: 2.5, // Increased for buttery-smooth "lazy" catch-up
              },
            }
          );
        }
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      id="about" 
      ref={wrapperRef}
      className="relative pt-0 pb-32 bg-black"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      {/* Antigravity Background */}
      <div ref={bgRef} className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <Antigravity
          count={600}
          magnetRadius={8}
          ringRadius={7}
          waveSpeed={0}
          waveAmplitude={0}
          particleSize={0.3}
          lerpSpeed={0.04}
          color="#ffffff"
          autoAnimate={false}
          particleVariance={0.8}
          rotationSpeed={0}
          depthFactor={0.7}
          pulseSpeed={1}
          particleShape="capsule"
          fieldStrength={14}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        {/* Header */}
        <div className="max-w-6xl mx-auto px-6">
          <div ref={headerRef} className="text-center mb-12 md:mb-16">
            {/* Badge */}
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs uppercase tracking-[0.25em] text-white/50 font-medium">
                What We Do
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-white">Designing Intelligent Systems</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white/90 via-white/70 to-white/50">
                That Think, Learn, and Scale
              </span>
            </h2>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              We create AI-powered systems that adapt in real time, automate complex
              workflows, and turn data into meaningful business outcomes.
            </p>
          </div>
        </div>

        {/* Feature Rows */}
        <div className="flex flex-col w-full relative z-10">
          {features.map((feature, index) => (
            <FeatureRow 
              key={feature.title} 
              feature={feature} 
              index={index} 
              rowRef={(el) => (rowsRef.current[index] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
