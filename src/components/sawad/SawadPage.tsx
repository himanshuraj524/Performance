import React from 'react';
import { SawadNav } from './SawadNav';
import { SawadProfileSidebar } from './SawadProfileSidebar';
import { SawadHero } from './SawadHero';
import { SawadProjects } from './SawadProjects';
import { SawadExperience } from './SawadExperience';
import { SawadTools } from './SawadTools';
import { SawadThoughts } from './SawadThoughts';
import { SawadContact } from './SawadContact';
import { SawadFooter } from './SawadFooter';

interface SawadPageProps {
  onToggleVersion?: () => void;
  activeVersion?: string;
}

export const SawadPage: React.FC<SawadPageProps> = ({ onToggleVersion, activeVersion }) => {
  return (
    <div className="w-full min-h-screen bg-[#151312] text-white font-poppins selection:bg-sawad-orange selection:text-black">
      {/* 1. Top Floating Pill Navigation */}
      <SawadNav onToggleVersion={onToggleVersion} activeVersion={activeVersion} />

      {/* 2. Main Two-Column Container */}
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          {/* Left Column: Sticky Profile Card */}
          <SawadProfileSidebar />

          {/* Right Column: Scrollable Content Stream */}
          <div className="w-full flex-1 flex flex-col gap-20">
            <SawadHero />
            <SawadProjects />
            <SawadExperience />
            <SawadTools />
            <SawadThoughts />
            <SawadContact />
            <SawadFooter />
          </div>
        </div>
      </main>
    </div>
  );
};
