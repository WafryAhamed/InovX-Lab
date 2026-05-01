import React from 'react';
import { SplineSceneBasic } from './components/SplineSceneBasic';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

export function App() {
  return (
    <div className="bg-black text-neutral-50 min-h-screen w-full overflow-x-hidden">
      {/* Logo - Top Left Corner */}
      <div className="fixed top-6 left-6 z-50">
        <img
          src="/assets/logo.png"
          alt="InovX-Lab"
          className="h-12 w-auto object-contain"
        />
      </div>

      <main>
        <section className="min-h-screen w-full flex items-center justify-center p-6">
          <div className="w-full max-w-6xl">
            <SplineSceneBasic />
          </div>
        </section>

        <About />

        {/* Services Section */}
        <Services />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </main>
    </div>
  );
}
