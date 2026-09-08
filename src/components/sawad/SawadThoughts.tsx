import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ThoughtPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  link: string;
}

const thoughts: ThoughtPost[] = [
  {
    title: 'How We Accelerated a Complex MVP Delivery by 2 Weeks With Zero Defects',
    excerpt:
      'Meticulous system architecture and upfront onboarding flow modeling allowed us to shave 2 weeks off a projected 3-month timeline.',
    date: 'Aug 2026',
    readTime: '5 min read',
    link: '#',
  },
  {
    title: 'Architecting Dual-Interface Systems: User Portals vs. Client Admin Panels',
    excerpt:
      'Designing discrete yet tightly coupled interfaces for media consumption and client-side administrative invite orchestration.',
    date: 'Jul 2026',
    readTime: '6 min read',
    link: '#',
  },
  {
    title: 'Usability-First Engineering: Translating Technical Specs for Business Stakeholders',
    excerpt:
      'Creating evaluation frameworks that ensure technical complexity never compromises intuitive day-to-day client usability.',
    date: 'Jun 2026',
    readTime: '4 min read',
    link: '#',
  },
];

export const SawadThoughts: React.FC = () => {
  return (
    <section id="thoughts" className="w-full flex flex-col gap-10 pt-16 border-t border-sawad-border text-left">
      {/* Heading */}
      <div>
        <h2 className="text-section-title font-black uppercase text-white tracking-tighter select-none">
          DESIGN THOUGHTS
        </h2>
      </div>

      {/* Thought List */}
      <div className="flex flex-col border-t border-sawad-border">
        {thoughts.map((thought, idx) => (
          <a
            key={idx}
            href={thought.link}
            className="group py-8 border-b border-sawad-border flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:bg-white/[0.02] -mx-4 px-4 rounded-2xl transition-all duration-200"
          >
            <div className="flex flex-col gap-2 max-w-xl">
              <div className="flex items-center gap-3 text-xs font-mono text-sawad-muted">
                <span>{thought.date}</span>
                <span>•</span>
                <span className="text-sawad-orange">{thought.readTime}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-sawad-orange transition-colors leading-snug">
                {thought.title}
              </h3>
              <p className="text-xs sm:text-sm text-sawad-muted line-clamp-2 leading-relaxed">
                {thought.excerpt}
              </p>
            </div>

            <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.08] text-white flex items-center justify-center group-hover:bg-sawad-orange group-hover:text-black group-hover:rotate-45 transition-all duration-200 flex-shrink-0 self-end sm:self-center">
              <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
