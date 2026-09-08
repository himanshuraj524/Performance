import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface SawadProjectItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  link: string;
  tags: string[];
}

const projects: SawadProjectItem[] = [
  {
    id: 'counseling-platform',
    title: 'US Counseling Dual-Interface Web Portal',
    category: 'System Architecture & Webflow',
    summary:
      'Delivered a 10-week MVP saving 2 weeks off timeline with zero post-launch issues. Designed user portal & client admin system.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&auto=format&fit=crop&q=80',
    link: '#',
    tags: ['Architecture', 'Dual-Interface', 'Webflow', 'JavaScript'],
  },
  {
    id: 'fastgen-ai-seo',
    title: 'FastGen AI SEO Optimization Platform',
    category: '🏆 1st Place Hackathon Winner',
    summary:
      'Led cross-functional engineering team to build proprietary AI-powered automated SEO & GEO analyzer for modern web engines.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80',
    link: '#',
    tags: ['AI / LLMs', 'TypeScript', 'SEO / GEO', 'React'],
  },
  {
    id: 'ops-dashboard',
    title: 'Company Operations & Resource Control Dashboard',
    category: 'Single Source of Truth Tooling',
    summary:
      'Centralized tracking dashboard monitoring active clients, tasks, and cross-team resource allocation across 3 teams.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
    link: '#',
    tags: ['Operations', 'SOPs', 'Resource Matrix', 'JavaScript'],
  },
  {
    id: 'real-estate-platform',
    title: 'Search HomesIndia Full-Stack Property Engine',
    category: 'Python Django & PostgreSQL',
    summary:
      'Architected and deployed a database-driven property sales platform with dynamic multi-parameter search filters on Heroku.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop&q=80',
    link: '#',
    tags: ['Python', 'Django', 'PostgreSQL', 'Heroku'],
  },
  {
    id: 'crm-middleware-integration',
    title: 'Bespoke CRM Pipeline & Webflow Middleware',
    category: 'Custom Data Routing',
    summary:
      'Wrote core JavaScript solutions connecting external CRM platforms directly to Webflow, creating bespoke secure data pipelines.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
    link: '#',
    tags: ['JavaScript', 'CRM APIs', 'GA4 Analytics', 'GSAP'],
  },
];

export const SawadProjects: React.FC = () => {
  return (
    <section id="projects" className="w-full flex flex-col gap-10 pt-16 border-t border-sawad-border text-left">
      {/* Section Heading */}
      <div>
        <h2 className="text-section-title font-black uppercase text-white tracking-tighter select-none">
          RECENT PROJECTS
        </h2>
      </div>

      {/* Project Cards List */}
      <div className="flex flex-col border-t border-sawad-border">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            className="group py-8 border-b border-sawad-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:bg-white/[0.02] -mx-4 px-4 rounded-2xl transition-all duration-200"
          >
            {/* Left Thumbnail + Meta */}
            <div className="flex items-start sm:items-center gap-5">
              <div className="w-[110px] sm:w-[130px] h-[95px] sm:h-[110px] rounded-xl overflow-hidden bg-[#242120] border border-white/[0.08] flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-xs font-mono text-sawad-orange font-medium uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-sawad-orange transition-colors leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-sawad-muted line-clamp-2 max-w-xl">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-white/[0.04] text-[10px] font-mono text-sawad-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Arrow Icon */}
            <div className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.08] text-white flex items-center justify-center group-hover:bg-sawad-orange group-hover:text-black group-hover:rotate-45 transition-all duration-200 flex-shrink-0 self-end sm:self-center">
              <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
