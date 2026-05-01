import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function TimelineContent({ as = "div", children, animationNum, customVariants, timelineRef, className }) {
  const isInView = useInView(timelineRef, { once: true, margin: "-100px" });
  const MotionComponent = motion[as];

  return (
    <MotionComponent
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={animationNum}
      variants={customVariants}
      className={className}
    >
      {children}
    </MotionComponent>
  );
}

export const Testimonials = () => {
    const testimonialRef = useRef(null);
  
    const revealVariants = {
      visible: (i) => ({
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: {
          delay: i * 0.15,
          duration: 0.6,
          ease: "easeOut"
        },
      }),
      hidden: {
        filter: "blur(10px)",
        y: 30,
        opacity: 0,
      },
    };
  
  return (
    <section id="testimonials" className="relative w-full bg-black py-24" ref={testimonialRef}>
      <div className="container mx-auto px-6 max-w-6xl">
        <article className="max-w-screen-md mx-auto text-center space-y-4 mb-16">
          <TimelineContent as="div" animationNum={0} customVariants={revealVariants} timelineRef={testimonialRef}>
            <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs uppercase tracking-[0.25em] text-white/50 font-medium mb-4">
              Client Feedback
            </div>
          </TimelineContent>
          <TimelineContent as="h2" className="text-4xl md:text-5xl font-bold text-white tracking-tight" animationNum={1} customVariants={revealVariants} timelineRef={testimonialRef}>
            Trusted by Startups and the world's largest companies
          </TimelineContent>
          <TimelineContent as="p" className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto" animationNum={2} customVariants={revealVariants} timelineRef={testimonialRef}>
            Let's hear how InovX Lab clients feel about our AI automation and intelligent solutions.
          </TimelineContent>
        </article>

        {/* Bento Grid Layout */}
        <div className="lg:grid lg:grid-cols-3 gap-4 flex flex-col w-full">
          
          {/* Column 1 */}
          <div className="md:flex lg:flex-col lg:space-y-4 h-full lg:gap-0 gap-4">
            <TimelineContent animationNum={3} customVariants={revealVariants} timelineRef={testimonialRef} className="lg:flex-[7] flex-[6] flex flex-col justify-between relative bg-[#0a0a0a] text-white overflow-hidden rounded-3xl border border-white/10 p-8 group transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_40px_rgba(255,255,255,0.03)]">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(255,255,255,0.05)_0%,transparent_100%)] pointer-events-none"></div>
              <article className="mt-auto relative z-10">
                <p className="text-lg text-white/90 leading-relaxed mb-8 font-medium">
                  "InovX Lab has been a game-changer for us. Their intelligent automation platform is top-notch and their engineering team is incredibly responsive."
                </p>
                <div className="flex justify-between items-end">
                  <div>
                    <h2 className="font-semibold text-lg text-white tracking-tight">Guillermo Rauch</h2>
                    <p className="text-white/50 text-sm font-medium">CEO of Vercel</p>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop"
                    alt="Guillermo"
                    className="w-14 h-14 rounded-full object-cover border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </article>
            </TimelineContent>

            <TimelineContent animationNum={4} customVariants={revealVariants} timelineRef={testimonialRef} className="lg:flex-[3] flex-[4] lg:h-fit lg:shrink-0 flex flex-col justify-between relative bg-white text-black overflow-hidden rounded-3xl border border-white/20 p-8 group transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
              <article className="mt-auto">
                <p className="font-semibold text-black/90 leading-relaxed mb-8">
                  "We've seen incredible scaling results with their predictive AI models. True expertise and dedication."
                </p>
                <div className="flex justify-between items-end">
                  <div>
                    <h2 className="font-bold text-lg tracking-tight">Rika Shinoda</h2>
                    <p className="text-black/60 text-sm font-medium">CTO of Kintsugi AI</p>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?q=80&w=200&auto=format&fit=crop"
                    alt="Rika"
                    className="w-12 h-12 rounded-full object-cover border border-black/10 grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </article>
            </TimelineContent>
          </div>

          {/* Column 2 */}
          <div className="lg:h-full md:flex lg:flex-col h-fit lg:space-y-4 lg:gap-0 gap-4">
            <TimelineContent animationNum={5} customVariants={revealVariants} timelineRef={testimonialRef} className="flex flex-col justify-between relative bg-[#0a0a0a] text-white overflow-hidden rounded-3xl border border-white/10 p-8 group transition-all duration-300 hover:border-white/20 hover:bg-[#111]">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
              <article className="mt-auto relative z-10">
                <p className="text-base text-white/80 leading-relaxed mb-6 font-medium">
                  "Their team is highly professional, and their custom-trained LLMs have truly transformed the way we operate internally."
                </p>
                <div className="flex justify-between items-end pt-2">
                  <div>
                    <h2 className="font-semibold text-lg text-white tracking-tight">Alex Reacher</h2>
                    <p className="text-white/50 text-sm font-medium">Founder of OdeaoLabs</p>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=200&auto=format&fit=crop"
                    alt="Alex"
                    className="w-12 h-12 rounded-full object-cover border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </article>
            </TimelineContent>

            <TimelineContent animationNum={6} customVariants={revealVariants} timelineRef={testimonialRef} className="flex flex-col justify-between relative bg-[#0a0a0a] text-white overflow-hidden rounded-3xl border border-white/10 p-8 group transition-all duration-300 hover:border-white/20 hover:bg-[#111]">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
              <article className="mt-auto relative z-10">
                <p className="text-base text-white/80 leading-relaxed mb-6 font-medium">
                  "We're extremely satisfied with the seamless integration process. Their architecture exceeded our security expectations."
                </p>
                <div className="flex justify-between items-end pt-2">
                  <div>
                    <h2 className="font-semibold text-lg text-white tracking-tight">John Davis</h2>
                    <p className="text-white/50 text-sm font-medium">CISO of SecureNode</p>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=200&auto=format&fit=crop"
                    alt="John"
                    className="w-12 h-12 rounded-full object-cover border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </article>
            </TimelineContent>

            <TimelineContent animationNum={7} customVariants={revealVariants} timelineRef={testimonialRef} className="flex flex-col justify-between relative bg-[#0a0a0a] text-white overflow-hidden rounded-3xl border border-white/10 p-8 group transition-all duration-300 hover:border-white/20 hover:bg-[#111]">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
              <article className="mt-auto relative z-10">
                <p className="text-base text-white/80 leading-relaxed mb-6 font-medium">
                  "Their real-time data processing engines are absolutely exceptional. Incredibly helpful for our analytics."
                </p>
                <div className="flex justify-between items-end pt-2">
                  <div>
                    <h2 className="font-semibold text-lg text-white tracking-tight">Steven Sunny</h2>
                    <p className="text-white/50 text-sm font-medium">Lead Data Scientist</p>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1740102074295-c13fae3e4f8a?q=80&w=200&auto=format&fit=crop"
                    alt="Steven"
                    className="w-12 h-12 rounded-full object-cover border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </article>
            </TimelineContent>
          </div>

          {/* Column 3 */}
          <div className="h-full md:flex lg:flex-col lg:space-y-4 lg:gap-0 gap-4">
            <TimelineContent animationNum={8} customVariants={revealVariants} timelineRef={testimonialRef} className="lg:flex-[3] flex-[4] flex flex-col justify-between relative bg-[#1a1a1a] text-white overflow-hidden rounded-3xl border border-white/10 p-8 group transition-all duration-300 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
              <article className="mt-auto relative z-10">
                <p className="font-medium text-white/90 leading-relaxed mb-8">
                  "InovX Lab has been a key strategic partner in our autonomous driving journey."
                </p>
                <div className="flex justify-between items-end">
                  <div>
                    <h2 className="font-semibold text-lg text-white tracking-tight">Elena Carter</h2>
                    <p className="text-white/50 text-sm font-medium">VP Eng at DriveAI</p>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1563237023-b1e970526dcb?q=80&w=200&auto=format&fit=crop"
                    alt="Elena"
                    className="w-12 h-12 rounded-full object-cover border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </article>
            </TimelineContent>

            <TimelineContent animationNum={9} customVariants={revealVariants} timelineRef={testimonialRef} className="lg:flex-[7] flex-[6] flex flex-col justify-between relative bg-[#050505] text-white overflow-hidden rounded-3xl border border-white/10 p-8 group transition-all duration-300 hover:border-white/20">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.03] rounded-full blur-[40px] pointer-events-none"></div>
              <article className="mt-auto relative z-10">
                <p className="text-lg text-white/80 leading-relaxed mb-8 font-medium">
                  "Partnering with them was a true game-changer. Their exceptional cloud architecture, combined with their deep AI expertise, has made a significant impact on our business margins."
                </p>
                <div className="flex justify-between items-end">
                  <div>
                    <h2 className="font-semibold text-lg text-white tracking-tight">Paul Brauch</h2>
                    <p className="text-white/50 text-sm font-medium">CTO of Spectrum</p>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1590086782957-93c06ef21604?q=80&w=200&auto=format&fit=crop"
                    alt="Paul"
                    className="w-14 h-14 rounded-full object-cover border border-white/10 grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </article>
            </TimelineContent>
          </div>
        </div>
      </div>
    </section>
  );
};
