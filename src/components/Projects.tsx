import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  category: 'architecture' | 'fullstack' | 'ai' | 'integrations';
  categoryLabel: string;
  badge: string;
  description: string;
  architectureHighlights: string[];
  tags: string[];
  metrics: string;
}

const projectList: Project[] = [
  {
    id: 'counseling-portal',
    title: 'Dual-Interface Counseling Service Platform',
    category: 'architecture',
    categoryLabel: 'System Architecture',
    badge: '10-Week MVP Delivery',
    description:
      'Engineered an invite-only dual-interface web ecosystem for a US-based counseling service. Delivered two weeks ahead of schedule with zero post-launch issues.',
    architectureHighlights: [
      'UX-optimized user portal for video counseling sessions, content library, and scheduling.',
      'Comprehensive administrative portal for invite generation, client intake, and onboarding workflows.',
      'Secure data isolation with custom authentication pipelines.',
    ],
    tags: ['Architecture', 'Dual-Interface', 'Webflow', 'JavaScript', 'REST APIs', 'Video Integration'],
    metrics: 'Delivered in 10 Wks (-2 Wks Ahead)',
  },
  {
    id: 'fastgen-ai',
    title: 'FastGen AI SEO & GEO Optimization Platform',
    category: 'ai',
    categoryLabel: 'AI & Automation',
    badge: '🏆 1st Place Hackathon Winner',
    description:
      'Led an engineering squad to architect and build a proprietary AI-powered SEO and GEO structural analyzer for high-performance websites.',
    architectureHighlights: [
      'Automated semantic code analysis and schema generation for modern AI search engines.',
      'Instant Lighthouse and Core Web Vitals diagnostic recommendations.',
      'Cross-functional team coordination resulting in 1st place hackathon victory.',
    ],
    tags: ['AI / LLMs', 'TypeScript', 'Node.js', 'SEO / GEO Architecture', 'React'],
    metrics: '1st Place @ FastGen Hackathon',
  },
  {
    id: 'operations-dashboard',
    title: 'Centralized Operations & Resource Tracking Dashboard',
    category: 'architecture',
    categoryLabel: 'System Architecture',
    badge: 'Internal Tooling',
    description:
      'Built a single-source-of-truth operational control system to orchestrate concurrent project lifecycles across 3 internal engineering teams and external partners.',
    architectureHighlights: [
      'Real-time task tracking, milestone forecast modeling, and bottleneck detection.',
      'Automated SOP adherence and resource allocation matrix.',
      'Integrated cross-platform workflow connectors.',
    ],
    tags: ['Operations Architecture', 'Resource Management', 'SOPs', 'JavaScript', 'Zapier/Make'],
    metrics: '3 Teams Coordinated Daily',
  },
  {
    id: 'real-estate-engine',
    title: 'Search HomesIndia Full-Stack Property Engine',
    category: 'fullstack',
    categoryLabel: 'Full-Stack',
    badge: 'Production Web App',
    description:
      'Took end-to-end ownership of architecting and deploying a database-driven property sales platform entirely from scratch using Django and PostgreSQL.',
    architectureHighlights: [
      'Engineered dynamic search filters for multi-parameter real estate lookup (society, location, price, flat type).',
      'Normalized relational database schema deployed and scaled on Heroku.',
      'Fast server-rendered pages optimized for high conversion.',
    ],
    tags: ['Python', 'Django', 'PostgreSQL', 'HTML5/CSS3', 'Heroku'],
    metrics: '100% Custom Database-Driven Stack',
  },
  {
    id: 'crm-middleware',
    title: 'Bespoke CRM Pipeline & Webflow Middleware',
    category: 'integrations',
    categoryLabel: 'Integrations',
    badge: 'Custom Middleware',
    description:
      'Engineered secure client-side JavaScript data routing pipelines connecting external CRM and marketing APIs directly with Webflow forms, bypassing platform boundaries.',
    architectureHighlights: [
      'Custom webhook event listeners with fallback failover queuing.',
      'Granular Google Analytics element tracking for user conversion funnels.',
      'GSAP micro-interactions and dynamic content filtering.',
    ],
    tags: ['JavaScript', 'CRM APIs', 'Webflow Custom Code', 'GSAP', 'Google Analytics'],
    metrics: 'Zero Data Loss Pipeline',
  },
];

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'architecture' | 'fullstack' | 'ai' | 'integrations'>('all');

  const filteredProjects =
    filter === 'all' ? projectList : projectList.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 bg-[#0a0c12] relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono mb-3">
              <Cpu className="w-3.5 h-3.5" />
              <span>Architectural Deliverables</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Systems &amp; Case Studies
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Architecting dual-interface portals, AI optimization engines, full-stack backends, and custom CRM pipelines.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 p-1.5 bg-white/[0.03] border border-white/[0.08] rounded-xl self-start md:self-auto">
            {[
              { id: 'all', label: 'All Work' },
              { id: 'architecture', label: 'Architecture' },
              { id: 'fullstack', label: 'Full-Stack' },
              { id: 'ai', label: 'AI & Tools' },
              { id: 'integrations', label: 'Integrations' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  filter === tab.id
                    ? 'bg-primary text-dark-900 font-semibold shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl bg-[#0e111a] border border-white/[0.08] hover:border-primary/40 p-6 flex flex-col justify-between gap-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-primary/5 group"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono font-semibold text-primary">
                      {project.categoryLabel}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-[11px] font-semibold text-slate-300">
                      {project.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-primary transition-colors leading-snug mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Architecture Highlights */}
                  <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex flex-col gap-2 mb-4">
                    <div className="text-[11px] font-mono font-semibold text-slate-400 uppercase tracking-wider">
                      Technical Highlights
                    </div>
                    {project.architectureHighlights.map((hl, i) => (
                      <div key={i} className="text-xs text-slate-400 flex items-start gap-2">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Tags & Metrics */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-[11px] font-mono text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400 font-mono">
                    <span>{project.metrics}</span>
                    <span className="text-primary font-semibold flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                      Inspect &rarr;
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
