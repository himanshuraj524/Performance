import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const SawadHero: React.FC = () => {
  return (
    <section id="home" className="w-full flex flex-col gap-8 text-left">
      {/* 1. Mega Headline */}
      <div>
        <h2 className="text-mega font-black uppercase text-white tracking-tighter select-none">
          SOLUTION ARCHITECT
        </h2>
      </div>

      {/* 2. Sub-Hero Value Statement */}
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
          Hi, I&apos;m <span className="text-sawad-orange">Himanshu</span>. Bridging complex engineering with seamless project delivery.
        </h3>
        <p className="text-sm sm:text-base text-sawad-muted leading-relaxed max-w-3xl">
          Based in Bangalore, Karnataka. My journey began as a JavaScript &amp; front-end developer, specializing in custom Webflow platforms, bespoke CRM integrations, and advanced GSAP web animations. Today, as <strong>Head of Delivery</strong> at Lil Big Things, I oversee the complete project lifecycle from kickoff to launch.
        </p>
      </div>

      {/* 3. Bento Stats Grid (Orange, Lime, Dark Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
        {/* Card 1: Vibrant Orange */}
        <div className="p-6 sm:p-7 rounded-[24px] bg-sawad-orange text-black flex flex-col justify-between h-[180px] sm:h-[200px] shadow-xl group hover:scale-[1.02] transition-transform duration-200">
          <div className="flex items-center justify-between">
            <span className="text-4xl sm:text-5xl font-black tracking-tight">+5</span>
            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-200">
              <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
            </div>
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider">Years of Experience</div>
            <div className="text-[11px] font-medium text-black/75">Full-Stack &amp; Architecture</div>
          </div>
        </div>

        {/* Card 2: Neon Lime */}
        <div className="p-6 sm:p-7 rounded-[24px] bg-sawad-lime text-black flex flex-col justify-between h-[180px] sm:h-[200px] shadow-xl group hover:scale-[1.02] transition-transform duration-200">
          <div className="flex items-center justify-between">
            <span className="text-4xl sm:text-5xl font-black tracking-tight">10-WK</span>
            <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center group-hover:rotate-45 transition-transform duration-200">
              <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
            </div>
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider">Fast MVP Delivery</div>
            <div className="text-[11px] font-medium text-black/75">2 Wks Ahead of Schedule</div>
          </div>
        </div>

        {/* Card 3: Dark Card */}
        <div className="p-6 sm:p-7 rounded-[24px] bg-sawad-surface border border-sawad-border text-white flex flex-col justify-between h-[180px] sm:h-[200px] shadow-xl group hover:scale-[1.02] transition-transform duration-200">
          <div className="flex items-center justify-between">
            <span className="text-3xl sm:text-4xl font-black tracking-tight text-sawad-orange">1ST PL</span>
            <div className="w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center group-hover:rotate-45 group-hover:bg-sawad-orange group-hover:text-black transition-all duration-200">
              <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
            </div>
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">FastGen Hackathon</div>
            <div className="text-[11px] font-medium text-sawad-muted">AI SEO &amp; GEO Victory</div>
          </div>
        </div>
      </div>

      {/* 4. Feature Action Banners (Horizontal Split Cards) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Banner 1 */}
        <a
          href="#experience"
          className="p-6 rounded-[22px] bg-sawad-surface border border-sawad-border hover:border-sawad-borderHover flex items-center justify-between gap-4 transition-all duration-200 group hover:-translate-y-0.5"
        >
          <div className="flex flex-col">
            <span className="text-xs font-mono text-sawad-muted uppercase tracking-wider mb-1">Architecture &amp; UX</span>
            <span className="text-sm sm:text-base font-bold text-white uppercase group-hover:text-sawad-orange transition-colors">
              Enterprise Webflow, Full-Stack Systems
            </span>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] text-white flex items-center justify-center group-hover:bg-sawad-orange group-hover:text-black transition-all flex-shrink-0">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </a>

        {/* Banner 2 */}
        <a
          href="#projects"
          className="p-6 rounded-[22px] bg-sawad-surface border border-sawad-border hover:border-sawad-borderHover flex items-center justify-between gap-4 transition-all duration-200 group hover:-translate-y-0.5"
        >
          <div className="flex flex-col">
            <span className="text-xs font-mono text-sawad-muted uppercase tracking-wider mb-1">Engineering Stack</span>
            <span className="text-sm sm:text-base font-bold text-white uppercase group-hover:text-sawad-orange transition-colors">
              TypeScript, Python, Django, CRM Pipelines
            </span>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/[0.08] text-white flex items-center justify-center group-hover:bg-sawad-orange group-hover:text-black transition-all flex-shrink-0">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </a>
      </div>
    </section>
  );
};
