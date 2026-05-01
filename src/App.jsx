import React from 'react';
import { Navbar } from './components/Navbar';
import { SplineSceneBasic } from './components/SplineSceneBasic';
import { About } from './components/About';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { Projects } from './components/Projects';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';

export function App() {
  return (
    <div className="bg-black text-neutral-50 min-h-screen w-full overflow-x-hidden">
      <Navbar />

      <main>
        <section id="hero" className="min-h-screen w-full flex items-center justify-center p-6 pt-20">
          <div className="w-full max-w-6xl">
            <SplineSceneBasic />
          </div>
        </section>

        <About />

        {/* Services Section */}
        <Services />

        {/* Features Section */}
        <Features />

        {/* Projects Section */}
        <Projects />

        {/* FAQ Section */}
        <FAQ />

        {/* Contact Section */}
        <Contact />
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
}
