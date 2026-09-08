import React from 'react';
import { ArrowUp } from 'lucide-react';

export const SawadFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full pt-16 pb-12 border-t border-sawad-border text-xs text-sawad-muted flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
      <div>
        © 2026 <strong className="text-white font-sans">Himanshu Verma</strong>. All rights reserved.
      </div>

      <div className="flex items-center gap-6">
        <a
          href="https://linkedin.com/in/himanshu-raj-verma"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sawad-orange transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="mailto:himanshurajverma549@gmail.com"
          className="hover:text-sawad-orange transition-colors"
        >
          Email
        </a>
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1 hover:text-white transition-colors"
        >
          <span>Top</span>
          <ArrowUp className="w-3 h-3" />
        </button>
      </div>
    </footer>
  );
};
