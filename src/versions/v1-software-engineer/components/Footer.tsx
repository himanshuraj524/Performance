import React from 'react';
import { ArrowUp, Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#06070a] border-t border-white/[0.08] text-xs font-mono text-slate-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-slate-400">
          <Code2 className="w-4 h-4 text-primary" />
          <span>Designed &amp; Architected by <strong className="text-white">Himanshu Verma</strong></span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://linkedin.com/in/himanshu-raj-verma"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:himanshurajverma549@gmail.com"
            className="hover:text-primary transition-colors"
          >
            Email
          </a>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
