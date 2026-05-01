"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Brain, LineChart, MessageSquare, BarChart3, Settings, Lock, Rocket, Users } from "lucide-react";
import { cn } from "../../lib/utils";
import { GooeyText } from "./gooey-text-morphing";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const INJECTED_STYLES = `
  .gsap-reveal { visibility: hidden; }

  /* Environment Overlays */
  .film-grain {
      position: absolute; inset: 0; width: 100%; height: 100%;
      pointer-events: none; z-index: 50; opacity: 0.05; mix-blend-mode: overlay;
      background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)"/></svg>');
  }

  .bg-grid-theme {
      background-size: 60px 60px;
      background-image: 
          linear-gradient(to right, color-mix(in srgb, var(--color-foreground) 5%, transparent) 1px, transparent 1px),
          linear-gradient(to bottom, color-mix(in srgb, var(--color-foreground) 5%, transparent) 1px, transparent 1px);
      mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
      -webkit-mask-image: radial-gradient(ellipse at center, black 0%, transparent 70%);
  }

  /* OUTSIDE THE CARD: Theme-aware text (Shadow in Light Mode, Glow in Dark Mode) */
  .text-3d-matte {
      color: var(--color-foreground);
      text-shadow: 
          0 10px 30px color-mix(in srgb, var(--color-foreground) 20%, transparent), 
          0 2px 4px color-mix(in srgb, var(--color-foreground) 10%, transparent);
  }

  .text-silver-matte {
      background: linear-gradient(180deg, var(--color-foreground) 0%, color-mix(in srgb, var(--color-foreground) 40%, transparent) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateZ(0);
      filter: 
          drop-shadow(0px 10px 20px color-mix(in srgb, var(--color-foreground) 15%, transparent)) 
          drop-shadow(0px 2px 4px color-mix(in srgb, var(--color-foreground) 10%, transparent));
  }

  /* INSIDE THE CARD: Hardcoded Silver/White for the dark background, deep rich shadows */
  .text-card-silver-matte {
      background: linear-gradient(180deg, #FFFFFF 0%, #A1A1AA 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      transform: translateZ(0);
      filter: 
          drop-shadow(0px 12px 24px rgba(0,0,0,0.8)) 
          drop-shadow(0px 4px 8px rgba(0,0,0,0.6));
  }

  /* Deep Physical Card with Dynamic Mouse Lighting */
  .premium-depth-card {
      background: linear-gradient(145deg, #0A0A0A 0%, #000000 100%);
      box-shadow: 
          0 40px 100px -20px rgba(0, 0, 0, 1),
          0 20px 40px -20px rgba(0, 0, 0, 0.9),
          inset 0 1px 2px rgba(255, 255, 255, 0.08),
          inset 0 -2px 4px rgba(0, 0, 0, 0.9);
      border: 1px solid rgba(255, 255, 255, 0.05);
      position: relative;
  }

  .card-sheen {
      position: absolute; inset: 0; border-radius: inherit; pointer-events: none; z-index: 50;
      background: radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.06) 0%, transparent 40%);
      mix-blend-mode: screen; transition: opacity 0.3s ease;
  }

  /* Realistic iPhone Mockup Hardware */
  .iphone-bezel {
      background-color: #111;
      box-shadow: 
          inset 0 0 0 2px #52525B, 
          inset 0 0 0 7px #000, 
          0 40px 80px -15px rgba(0,0,0,0.9),
          0 15px 25px -5px rgba(0,0,0,0.7);
      transform-style: preserve-3d;
  }

  .hardware-btn {
      background: linear-gradient(90deg, #404040 0%, #171717 100%);
      box-shadow: 
          -2px 0 5px rgba(0,0,0,0.8),
          inset -1px 0 1px rgba(255,255,255,0.15),
          inset 1px 0 2px rgba(0,0,0,0.8);
      border-left: 1px solid rgba(255,255,255,0.05);
  }
  
  .screen-glare {
      background: linear-gradient(110deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 45%);
  }

  .widget-depth {
      background: linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%);
      box-shadow: 
          0 10px 20px rgba(0,0,0,0.3),
          inset 0 1px 1px rgba(255,255,255,0.05),
          inset 0 -1px 1px rgba(0,0,0,0.5);
      border: 1px solid rgba(255,255,255,0.03);
  }

  .floating-ui-badge {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.01) 100%);
      backdrop-filter: blur(24px); 
      -webkit-backdrop-filter: blur(24px);
      box-shadow: 
          0 0 0 1px rgba(255, 255, 255, 0.1),
          0 25px 50px -12px rgba(0, 0, 0, 0.8),
          inset 0 1px 1px rgba(255,255,255,0.2),
          inset 0 -1px 1px rgba(0,0,0,0.5);
  }

  /* Physical Tactile Buttons */
  .btn-modern-light, .btn-modern-dark {
      transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  }
  .btn-modern-light {
      background: linear-gradient(180deg, #FFFFFF 0%, #F1F5F9 100%);
      color: #0F172A;
      box-shadow: 0 0 0 1px rgba(0,0,0,0.05), 0 2px 4px rgba(0,0,0,0.1), 0 12px 24px -4px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,1), inset 0 -3px 6px rgba(0,0,0,0.06);
  }
  .btn-modern-light:hover {
      transform: translateY(-3px);
      box-shadow: 0 0 0 1px rgba(0,0,0,0.05), 0 6px 12px -2px rgba(0,0,0,0.15), 0 20px 32px -6px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,1), inset 0 -3px 6px rgba(0,0,0,0.06);
  }
  .btn-modern-light:active {
      transform: translateY(1px);
      background: linear-gradient(180deg, #F1F5F9 0%, #E2E8F0 100%);
      box-shadow: 0 0 0 1px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1), inset 0 3px 6px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(0,0,0,0.02);
  }
  .btn-modern-dark {
      background: linear-gradient(180deg, #27272A 0%, #18181B 100%);
      color: #FFFFFF;
      box-shadow: 0 0 0 1px rgba(255,255,255,0.1), 0 2px 4px rgba(0,0,0,0.6), 0 12px 24px -4px rgba(0,0,0,0.9), inset 0 1px 1px rgba(255,255,255,0.15), inset 0 -3px 6px rgba(0,0,0,0.8);
  }
  .btn-modern-dark:hover {
      transform: translateY(-3px);
      background: linear-gradient(180deg, #3F3F46 0%, #27272A 100%);
      box-shadow: 0 0 0 1px rgba(255,255,255,0.15), 0 6px 12px -2px rgba(0,0,0,0.7), 0 20px 32px -6px rgba(0,0,0,1), inset 0 1px 1px rgba(255,255,255,0.2), inset 0 -3px 6px rgba(0,0,0,0.8);
  }
  .btn-modern-dark:active {
      transform: translateY(1px);
      background: #18181B;
      box-shadow: 0 0 0 1px rgba(255,255,255,0.05), inset 0 3px 8px rgba(0,0,0,0.9), inset 0 0 0 1px rgba(0,0,0,0.5);
  }

  .progress-ring {
      transform: rotate(-90deg);
      transform-origin: center;
      stroke-dasharray: 402;
      stroke-dashoffset: 402;
      stroke-linecap: round;
  }
`;

export function CinematicAbout({ 
  companyName = "InovX Lab",
  tagline1 = "Empowering Through",
  tagline2 = ["Automation.", "Analytics.", "AI Chat.", "Intelligence.", "Scalability.", "Security."],
  cardHeading = "What InovX Lab Offers",
  cardDescription = (
    <>
      We deliver a range of <span className="text-white font-semibold">AI-powered solutions</span> designed to help businesses operate smarter, faster, and more efficiently. From intelligent automation to secure architecture, we build the core of your digital future.
    </>
  ),
  metricValue = 250,
  metricLabel = "Systems Deployed",
  secondaryMetricValue = 100,
  secondaryMetricLabel = "Reliability %",
  ctaHeading = "Scale your vision.",
  ctaDescription = "Our suite of intelligent tools is ready to transform your complex workflows into seamless competitive advantages.",
  badge1Icon = <Rocket className="w-4 h-4 lg:w-5 lg:h-5 text-neutral-300" />,
  badge1Title = "Smart Automation",
  badge1Desc = "Eliminate manual effort",
  badge2Icon = <Users className="w-4 h-4 lg:w-5 lg:h-5 text-neutral-300" />,
  badge2Title = "Secure Systems",
  badge2Desc = "Robust & protected",
  className, 
  ...props 
}) {
  
  const containerRef = useRef(null);
  const mainCardRef = useRef(null);
  const mockupRef = useRef(null);
  const requestRef = useRef(0);

  // 1. High-Performance Mouse Interaction Logic
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.scrollY > window.innerHeight * 2) return;

      cancelAnimationFrame(requestRef.current);
      
      requestRef.current = requestAnimationFrame(() => {
        if (mainCardRef.current && mockupRef.current) {
          const rect = mainCardRef.current.getBoundingClientRect();
          const mouseX = e.clientX - rect.left;
          const mouseY = e.clientY - rect.top;
          
          mainCardRef.current.style.setProperty("--mouse-x", `${mouseX}px`);
          mainCardRef.current.style.setProperty("--mouse-y", `${mouseY}px`);

          const xVal = (e.clientX / window.innerWidth - 0.5) * 2;
          const yVal = (e.clientY / window.innerHeight - 0.5) * 2;

          gsap.to(mockupRef.current, {
            rotationY: xVal * 12,
            rotationX: -yVal * 12,
            ease: "power3.out",
            duration: 1.2,
          });
        }
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // 2. Complex Cinematic Scroll Timeline (About-focused)
  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      // Initial states
      gsap.set(".main-card", { y: window.innerHeight + 200, autoAlpha: 1 });
      gsap.set([".card-left-text", ".card-right-text", ".mockup-scroll-wrapper", ".floating-badge", ".phone-widget"], { autoAlpha: 0 });

      // Scroll-triggered timeline
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1200",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      scrollTl
        // 1. OPTICAL DEPTH ENTRANCE: Heading (3D Perspective + Snap Focus)
        .fromTo(".text-track", 
          { autoAlpha: 0, z: -500, rotationX: 45, filter: "blur(20px)", scale: 0.9 },
          { autoAlpha: 1, z: 0, rotationX: 0, filter: "blur(0px)", scale: 1, duration: 2, ease: "power3.out" }
        )
        // 2. Subtext "Fluid" Reveal
        .fromTo(".text-days-p",
          { autoAlpha: 0, y: 30, filter: "blur(10px)" },
          { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 1.5, ease: "expo.out" },
          "-=1.5"
        )
        
        // 3. Parallax background fade (Transition into Card)
        .to([".hero-text-wrapper", ".bg-grid-theme"], { scale: 1.1, filter: "blur(30px)", opacity: 0.2, ease: "power2.inOut", duration: 2 })
        
        // 4. Card entrance
        .to(".main-card", { y: 0, ease: "expo.inOut", duration: 2 }, "-=1.0")
        .to(".main-card", { width: "100%", height: "100%", borderRadius: "0px", ease: "power3.inOut", duration: 1.5 })
        
        // Mockup 3D reveal
        .fromTo(".mockup-scroll-wrapper",
          { y: 300, z: -500, rotationX: 50, rotationY: -30, autoAlpha: 0, scale: 0.6 },
          { y: 0, z: 0, rotationX: 0, rotationY: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 2.5 }, "-=0.8"
        )
        
        // Widget animations (stats/cards inside mockup)
        .fromTo(".phone-widget", { y: 40, autoAlpha: 0, scale: 0.95 }, { y: 0, autoAlpha: 1, scale: 1, stagger: 0.15, ease: "back.out(1.2)", duration: 1.5 }, "-=1.5")
        
        // Animated metrics
        .to(".progress-ring", { strokeDashoffset: 60, duration: 2, ease: "power3.inOut" }, "-=1.2")
        .to(".counter-val", { innerHTML: metricValue, snap: { innerHTML: 1 }, duration: 2, ease: "expo.out" }, "-=2.0")
        
        // Floating value badges
        .fromTo(".floating-badge", { y: 100, autoAlpha: 0, scale: 0.7, rotationZ: -10 }, { y: 0, autoAlpha: 1, scale: 1, rotationZ: 0, ease: "back.out(1.5)", duration: 1.5, stagger: 0.2 }, "-=2.0")
        
        // Side text reveals
        .fromTo(".card-left-text", { x: -50, autoAlpha: 0 }, { x: 0, autoAlpha: 1, ease: "power4.out", duration: 1.5 }, "-=1.5")
        .fromTo(".card-right-text", { x: 50, autoAlpha: 0, scale: 0.8 }, { x: 0, autoAlpha: 1, scale: 1, ease: "expo.out", duration: 1.5 }, "<")
        
        // Final pause for content reading
        .to({}, { duration: 3 })
        
        // Final scroll out
        .to(".main-card", { y: -window.innerHeight - 300, ease: "power3.in", duration: 1.5 });

    }, containerRef);

    return () => ctx.revert();
  }, [metricValue, secondaryMetricValue]); 

  return (
    <div
      ref={containerRef}
      className={cn("relative w-screen h-screen overflow-hidden flex items-center justify-center bg-black text-foreground font-sans antialiased", className)}
      style={{ perspective: "1500px" }}
      {...props}
    >
      <style dangerouslySetInnerHTML={{ __html: INJECTED_STYLES }} />
      <div className="film-grain" aria-hidden="true" />
      <div className="bg-grid-theme absolute inset-0 z-0 pointer-events-none opacity-50" aria-hidden="true" />

      {/* BACKGROUND LAYER: About Taglines */}
      <div className="hero-text-wrapper absolute z-10 flex flex-col items-center justify-center text-center w-screen px-4 -mt-12 will-change-transform transform-style-3d">
        <h1 className="text-track text-3d-matte text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight mb-6 text-white whitespace-nowrap opacity-0">
          Empowering Intelligent Innovation
        </h1>
        <div className="text-days w-full max-w-4xl mx-auto flex items-center justify-center">
           <p className="text-days-p text-xl md:text-2xl lg:text-3xl text-white/60 leading-relaxed font-light tracking-wide px-4 opacity-0">
             We design AI-driven systems that transform workflows, unlock insights, and elevate digital experiences.
           </p>
        </div>
      </div>

      {/* FOREGROUND LAYER: The Physical Deep Blue Card */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none" style={{ perspective: "1500px" }}>
        <div
          ref={mainCardRef}
          className="main-card premium-depth-card relative overflow-hidden gsap-reveal flex items-center justify-center pointer-events-auto w-[92vw] md:w-[85vw] h-[75vh] md:h-[70vh] rounded-[32px] md:rounded-[40px]"
        >
          <div className="card-sheen" aria-hidden="true" />

          {/* CLEAN 2-COLUMN LAYOUT */}
          <div className="relative w-full h-full max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 z-10 py-8 lg:py-0">
            
            {/* LEFT: Clean Content */}
            <div className="card-left-text gsap-reveal relative flex flex-col items-center lg:items-start text-center lg:text-left z-20 w-full lg:w-1/2">
              
              {/* Glow background spotlight */}
              <div className="absolute top-1/2 left-1/2 lg:left-0 -translate-x-1/2 lg:-translate-x-1/4 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-white/10 blur-[80px] md:blur-[120px] rounded-full opacity-30 animate-pulse pointer-events-none" aria-hidden="true" />

              <h3 className="relative text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 tracking-tight whitespace-nowrap">
                {cardHeading}
              </h3>
              <p className="relative text-white/60 text-base md:text-lg lg:text-xl font-normal leading-relaxed mx-auto lg:mx-0 max-w-md">
                AI solutions built to automate, optimize, and scale.
              </p>
            </div>

            {/* RIGHT: Phone Mockup + Watermark */}
            <div className="relative flex items-center justify-center z-10 w-full lg:w-1/2">
              
              {/* Large Faded Watermark Brand Text */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
                <span className="text-[5rem] md:text-[7rem] lg:text-[9rem] font-black uppercase tracking-tighter text-neutral-500/10 whitespace-nowrap">
                  INOVX LAB
                </span>
              </div>

              {/* Device Mockup */}
              <div className="mockup-scroll-wrapper relative w-full h-[340px] lg:h-[520px] flex items-center justify-center" style={{ perspective: "1000px" }}>
                <div className="relative w-full h-full flex items-center justify-center transform scale-[0.6] md:scale-75 lg:scale-90">
                  
                  {/* The iPhone Bezel */}
                  <div
                    ref={mockupRef}
                    className="relative w-[250px] h-[520px] rounded-[2.8rem] iphone-bezel flex flex-col will-change-transform transform-style-3d"
                  >
                    {/* Physical Hardware Buttons */}
                    <div className="absolute top-[120px] -left-[3px] w-[3px] h-[25px] hardware-btn rounded-l-md z-0" aria-hidden="true" />
                    <div className="absolute top-[160px] -left-[3px] w-[3px] h-[45px] hardware-btn rounded-l-md z-0" aria-hidden="true" />
                    <div className="absolute top-[220px] -left-[3px] w-[3px] h-[45px] hardware-btn rounded-l-md z-0" aria-hidden="true" />
                    <div className="absolute top-[170px] -right-[3px] w-[3px] h-[70px] hardware-btn rounded-r-md z-0 scale-x-[-1]" aria-hidden="true" />

                    {/* Inner Screen Container */}
                    <div className="absolute inset-[7px] bg-[#050914] rounded-[2.5rem] overflow-hidden shadow-[inset_0_0_15px_rgba(0,0,0,1)] text-white z-10">
                      <div className="absolute inset-0 screen-glare z-40 pointer-events-none" aria-hidden="true" />

                      {/* Dynamic Island Notch */}
                      <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full z-50 flex items-center justify-end px-3 shadow-[inset_0_-1px_2px_rgba(255,255,255,0.1)]">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)] animate-pulse" />
                      </div>

                      {/* App Interface - About/Portfolio Preview */}
                      <div className="relative w-full h-full pt-12 px-5 pb-8 flex flex-col">
                        <div className="phone-widget flex justify-between items-center mb-6">
                          <div className="flex flex-col">
                            <span className="text-[10px] text-neutral-400 uppercase tracking-widest font-bold mb-1">Offerings</span>
                            <span className="text-lg font-bold tracking-tight text-white drop-shadow-md">Core AI</span>
                          </div>
                          <div className="w-8 h-8 rounded-full bg-white/5 text-neutral-200 flex items-center justify-center font-bold text-xs border border-white/10 shadow-lg shadow-black/50">
                            {companyName.charAt(0)}
                          </div>
                        </div>

                        {/* Animated Metric Ring */}
                        <div className="phone-widget relative w-36 h-36 mx-auto flex items-center justify-center mb-6 drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]">
                          <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
                            <circle cx="72" cy="72" r="54" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="10" />
                            <circle className="progress-ring" style={{ strokeDasharray: 340, strokeDashoffset: 340 }} cx="72" cy="72" r="54" fill="none" stroke="#FFFFFF" strokeWidth="10" />
                          </svg>
                          <div className="text-center z-10 flex flex-col items-center">
                            <span className="counter-val text-3xl font-extrabold tracking-tighter text-white">0</span>
                            <span className="text-[7px] text-neutral-400 uppercase tracking-[0.1em] font-bold mt-0.5">{metricLabel}</span>
                          </div>
                        </div>

                        {/* Feature Cards */}
                        <div className="space-y-3">
                          <div className="phone-widget widget-depth rounded-2xl p-3 flex items-center">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mr-3 border border-white/20 shadow-inner">
                              <svg className="w-4 h-4 text-white/80 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <div className="h-2 w-24 bg-neutral-300 rounded-full mb-2 shadow-inner" />
                              <div className="h-1.5 w-16 bg-neutral-600 rounded-full shadow-inner" />
                            </div>
                          </div>
                          <div className="phone-widget widget-depth rounded-2xl p-3 flex items-center">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neutral-500/20 to-neutral-600/5 flex items-center justify-center mr-3 border border-neutral-400/20 shadow-inner">
                              <svg className="w-4 h-4 text-neutral-300 drop-shadow-md" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            </div>
                            <div className="flex-1">
                              <div className="h-2 w-20 bg-neutral-300 rounded-full mb-2 shadow-inner" />
                              <div className="h-1.5 w-20 bg-neutral-600 rounded-full shadow-inner" />
                            </div>
                          </div>
                        </div>

                        {/* Home Indicator */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[120px] h-[4px] bg-white/20 rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.5)]" />
                      </div>
                    </div>
                  </div>

                  {/* Floating Notification Badges — tight to phone */}
                  <div className="floating-badge absolute flex top-4 left-[-20px] lg:left-[-60px] floating-ui-badge rounded-xl lg:rounded-2xl p-2.5 lg:p-3 items-center gap-2.5 lg:gap-3 z-30">
                    <div className="w-7 h-7 lg:w-9 lg:h-9 rounded-full bg-gradient-to-b from-neutral-500/20 to-neutral-900/10 flex items-center justify-center border border-neutral-400/30 shadow-inner">
                      <Brain className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-white/80" />
                    </div>
                    <div>
                      <p className="text-white text-[11px] lg:text-xs font-bold tracking-tight">Smart Automation</p>
                      <p className="text-neutral-400 text-[9px] lg:text-[10px] font-medium">Eliminate manual effort</p>
                    </div>
                  </div>

                  <div className="floating-badge absolute flex top-1/2 -translate-y-1/2 right-[-20px] lg:right-[-60px] floating-ui-badge rounded-xl lg:rounded-2xl p-2.5 lg:p-3 items-center gap-2.5 lg:gap-3 z-30">
                    <div className="w-7 h-7 lg:w-9 lg:h-9 rounded-full bg-gradient-to-b from-neutral-500/20 to-neutral-900/10 flex items-center justify-center border border-neutral-400/30 shadow-inner">
                      <Lock className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-white/80" />
                    </div>
                    <div>
                      <p className="text-white text-[11px] lg:text-xs font-bold tracking-tight">Data Privacy</p>
                      <p className="text-neutral-400 text-[9px] lg:text-[10px] font-medium">End-to-end protection</p>
                    </div>
                  </div>

                  <div className="floating-badge absolute flex bottom-4 left-[-10px] lg:left-[-50px] floating-ui-badge rounded-xl lg:rounded-2xl p-2.5 lg:p-3 items-center gap-2.5 lg:gap-3 z-30">
                    <div className="w-7 h-7 lg:w-9 lg:h-9 rounded-full bg-gradient-to-b from-neutral-500/20 to-neutral-900/10 flex items-center justify-center border border-neutral-400/30 shadow-inner">
                      <Settings className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-white/80" />
                    </div>
                    <div>
                      <p className="text-white text-[11px] lg:text-xs font-bold tracking-tight">Secure Systems</p>
                      <p className="text-neutral-400 text-[9px] lg:text-[10px] font-medium">Robust & protected</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
