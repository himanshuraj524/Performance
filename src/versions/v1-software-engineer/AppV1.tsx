import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { TerminalConsole } from './components/TerminalConsole';
import { EducationHobbies } from './components/EducationHobbies';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Layers } from 'lucide-react';

interface AppV1Props {
  onToggleVersion?: () => void;
}

export const AppV1: React.FC<AppV1Props> = ({ onToggleVersion }) => {
  return (
    <div className="w-full min-h-screen bg-[#07080b] text-slate-100 font-sans selection:bg-primary/20 selection:text-primary relative">
      {/* Floating Theme Version Switcher */}
      {onToggleVersion && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={onToggleVersion}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-sawad-orange text-black font-bold text-xs shadow-2xl hover:scale-105 transition-all"
          >
            <Layers className="w-4 h-4" />
            <span>Switch to Sawad Framer Edition</span>
          </button>
        </div>
      )}

      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <div id="about">
        <Hero />
      </div>

      {/* Experience & Career Timeline */}
      <Experience />

      {/* Featured Architecture & Projects */}
      <Projects />

      {/* Technical Matrix & Domain Skills */}
      <Skills />

      {/* Interactive Developer Terminal Shell */}
      <TerminalConsole />

      {/* Education & Personal Lifestyle */}
      <EducationHobbies />

      {/* Direct Contact & Collaboration */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AppV1;
