import React from 'react';
import { Linkedin, Mail, MapPin, ArrowUpRight, Github, Twitter } from 'lucide-react';

export const SawadProfileSidebar: React.FC = () => {
  return (
    <aside className="w-full lg:w-[344px] flex-shrink-0">
      <div className="lg:sticky lg:top-24 rounded-[28px] bg-sawad-surface border border-sawad-border p-6 shadow-2xl flex flex-col gap-6">
        {/* Profile Portrait Container */}
        <div className="relative w-full aspect-[4/5] max-h-[340px] rounded-2xl overflow-hidden bg-[#242120] border border-white/[0.08] shadow-inner group">
          <img
            src="profile.jpg"
            alt="Himanshu Verma — Solution Architect & Head of Delivery"
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          {/* Subtle bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-sawad-surface/70 via-transparent to-transparent"></div>
        </div>

        {/* User Identity & Info */}
        <div className="flex flex-col gap-1.5 text-left">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-white tracking-tight">
              Himanshu Verma
            </h1>
            <span className="w-2.5 h-2.5 rounded-full bg-sawad-lime shadow-lg shadow-sawad-lime/50" title="Active"></span>
          </div>

          <div className="text-sm font-semibold text-sawad-orange">
            Head of Delivery &amp; Solution Architect
          </div>

          <div className="flex items-center gap-1.5 text-xs text-sawad-muted mt-1 font-mono">
            <MapPin className="w-3.5 h-3.5 text-sawad-muted" />
            <span>Bangalore (BTM Layout), India</span>
          </div>

          <p className="text-xs text-sawad-muted leading-relaxed mt-3">
            A solution-driven technical leader bridging complex software engineering with seamless client delivery. Overseeing full project lifecycles at Lil Big Things.
          </p>
        </div>

        {/* Social Links Row */}
        <div className="flex items-center justify-between pt-2 border-t border-sawad-border">
          <a
            href="https://linkedin.com/in/himanshu-raj-verma"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-white/[0.03] hover:bg-sawad-orange hover:text-black border border-white/[0.08] text-white flex items-center justify-center transition-all duration-200"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:himanshurajverma549@gmail.com"
            className="w-11 h-11 rounded-full bg-white/[0.03] hover:bg-sawad-orange hover:text-black border border-white/[0.08] text-white flex items-center justify-center transition-all duration-200"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-white/[0.03] hover:bg-sawad-orange hover:text-black border border-white/[0.08] text-white flex items-center justify-center transition-all duration-200"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-white/[0.03] hover:bg-sawad-orange hover:text-black border border-white/[0.08] text-white flex items-center justify-center transition-all duration-200"
            title="Twitter / X"
          >
            <Twitter className="w-4 h-4" />
          </a>
        </div>

        {/* Direct Contact Button */}
        <a
          href="#contact"
          className="w-full py-3.5 px-6 rounded-2xl bg-sawad-orange hover:bg-sawad-orangeHover text-black font-bold text-sm tracking-wide uppercase transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-sawad-orange/20 hover:shadow-sawad-orange/40 hover:-translate-y-0.5"
        >
          <span>Contact Me</span>
          <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
        </a>
      </div>
    </aside>
  );
};
