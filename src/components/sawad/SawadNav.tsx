import React from 'react';
import { Home, Briefcase, Cpu, Wrench, BookOpen, Mail, Layers } from 'lucide-react';

interface SawadNavProps {
  onToggleVersion?: () => void;
  activeVersion?: string;
}

export const SawadNav: React.FC<SawadNavProps> = ({ onToggleVersion, activeVersion = 'sawad' }) => {
  const navLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Projects', href: '#projects', icon: Cpu },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Tools', href: '#tools', icon: Wrench },
    { name: 'Thoughts', href: '#thoughts', icon: BookOpen },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[95vw]">
      <div className="flex items-center gap-3">
        {/* Glass Floating Navigation Dock */}
        <nav className="flex items-center gap-1 sm:gap-1.5 p-1.5 sm:p-2 rounded-full bg-[#1b1918]/85 backdrop-blur-xl border border-white/10 shadow-2xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium text-sawad-muted hover:text-white hover:bg-white/[0.08] transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Version Switcher Pill */}
        {onToggleVersion && (
          <button
            onClick={onToggleVersion}
            className="hidden md:flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-sawad-orange/15 hover:bg-sawad-orange/25 border border-sawad-orange/30 text-sawad-orange font-medium text-xs backdrop-blur-xl transition-all shadow-lg hover:scale-105"
            title="Switch Portfolio Theme / Version"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{activeVersion === 'sawad' ? 'Switch to V1 (Terminal)' : 'Switch to Sawad Framer'}</span>
          </button>
        )}
      </div>
    </header>
  );
};
