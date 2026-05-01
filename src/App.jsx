import React from 'react';
import { Navbar } from './components/Navbar';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { FAQ } from './components/FAQ';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { CinematicFooter } from './components/ui/motion-footer';
import { Chatbot } from './components/Chatbot';
import { CinematicAbout } from './components/ui/cinematic-about';
import SplineSceneBasic from './components/SplineSceneBasic';

export function App() {
  return (
    <div className="bg-black text-neutral-50 min-h-screen w-full overflow-x-hidden">
      <Navbar />

      {/* Main wrapper must be relative with a high z-index and background to scroll over the fixed footer */}
      <main className="relative z-10 bg-black rounded-b-[40px] shadow-2xl border-b border-white/10">
        <section id="hero" className="h-[75vh] w-full flex items-center justify-center pt-20">
          <div className="w-full max-w-6xl">
            <SplineSceneBasic />
          </div>
        </section>

        <section id="cinematic-about" className="w-full">
          <CinematicAbout />
        </section>

        <About />

        {/* Services Section */}
        <Services />

        {/* Projects Section */}
        <Projects />

        <FAQ />
        
        <Testimonials />

        <Contact />
      </main>

      <CinematicFooter />
      <Chatbot />
    </div>
  );
}

export default App;
