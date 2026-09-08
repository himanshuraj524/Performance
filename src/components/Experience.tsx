import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  summary: string;
  highlights: string[];
  skills: string[];
  badge?: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 'hod',
    role: 'Head of Delivery',
    company: 'Lil Big Things',
    period: '2026 – Present',
    location: 'Bangalore, India',
    type: 'Leadership & Architecture',
    badge: 'Current Role',
    summary:
      'I manage the complete lifecycle of multiple concurrent technical projects, balancing the workloads of three internal teams alongside external resources. A major part of my role is acting as the bridge between complex engineering and clients—translating advanced technical specifications into clear, easily digestible architectural blueprints.',
    highlights: [
      'Accelerated MVP Delivery: Led end-to-end architecture & development of a complex, invite-only web portal for a US-based counseling service in just 10 weeks (saving 2 weeks off the projected timeline) with zero post-launch issues.',
      'Architected a Dual-Interface System: Designed both a UX-optimized user portal (content consumption, video elements, counseling calls) and a comprehensive client admin panel for invite management and onboarding.',
      'Streamlined Company Operations: Built a centralized tracking dashboard—a single source of truth monitoring active clients, ongoing tasks, resource allocation, and time management.',
    ],
    skills: [
      'Project Lifecycle Management',
      'Dual-Interface Architecture',
      'Resource Orchestration',
      'SOP Implementation',
      'Enterprise Webflow',
      'Client Strategy',
    ],
  },
  {
    id: 'lead',
    role: 'Software Development Lead',
    company: 'Lil Big Things',
    period: '03/2025 – 2026',
    location: 'Bangalore, India',
    type: 'Team Leadership & Systems',
    badge: '🏆 Hackathon Winner',
    summary:
      'Transitioned into leadership with a primary focus on creating scalable systems and processes to optimize engineering workflows. Shifted the team’s mindset from purely technical execution to usability-focused engineering, ensuring every delivered system was intuitive and manageable for end-clients.',
    highlights: [
      'FastGen Hackathon Victory: Led a cross-functional engineering team to architect and build a proprietary AI-powered SEO optimization platform, winning 1st Place.',
      'Standardized Development Workflows: Created comprehensive Standard Operating Procedures (SOPs) for routine & complex tasks, such as foundational SEO setups and advanced event tracking.',
      'Championed Usability-First Architecture: Developed a technical evaluation framework ensuring complex features were built with client UX in mind, minimizing friction for non-technical stakeholders.',
    ],
    skills: [
      'AI / LLM Integration',
      'Technical Frameworks',
      'Engineering SOPs',
      'SEO & GEO Architecture',
      'Usability Engineering',
    ],
  },
  {
    id: 'frontend',
    role: 'Front End Developer & Webflow Expert',
    company: 'Lil Big Things',
    period: '07/2021 – 03/2025',
    location: 'Bangalore, India',
    type: 'Core Engineering',
    summary:
      'Primary Webflow expert and front-end specialist responsible for pushing the boundaries of web platforms to solve complex client problems. Utilized core JavaScript to heavily customize Webflow environments, from seamless data routing to high-end visual experiences.',
    highlights: [
      'Engineered Custom Integrations: Wrote core JavaScript solutions connecting external CRM platforms directly into Webflow, bypassing native limitations to create secure bespoke data pipelines.',
      'Advanced Analytics & Performance: Implemented granular Google Analytics tracking for specific interactive elements and deeply optimized site structures for top performance scores.',
      'Developed Complex UI Features: Built sophisticated UI elements from scratch including dynamic content filters, automated tables of contents, and custom GSAP animations.',
    ],
    skills: [
      'JavaScript (ESNext)',
      'TypeScript',
      'Webflow Custom Code',
      'CRM Data Pipelines',
      'GSAP Animations',
      'Performance / SEO',
    ],
  },
  {
    id: 'intern',
    role: 'Full Stack Software Engineer Intern',
    company: 'Search HomesIndia Pvt. Ltd',
    period: '01/2021 – 07/2021',
    location: 'India',
    type: 'Full Stack Engineering',
    summary:
      'Took full ownership of building the company’s real estate sales website entirely from scratch over a 7-month internship, deploying a modernized, database-driven sales platform on Heroku.',
    highlights: [
      'Built a Full-Stack Platform: Architected and deployed a database-driven property sales platform utilizing Python Django for the backend, PostgreSQL for data, and HTML/CSS for the UI.',
      'Engineered Dynamic Search: Developed an advanced search and filtering system allowing users to intuitively sort through real estate listings based on exact location, society type, and flat type.',
    ],
    skills: [
      'Python',
      'Django',
      'PostgreSQL',
      'HTML5 / CSS3',
      'Heroku Deployment',
      'Search & Filtering',
    ],
  },
];

export const Experience: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>('hod');
  const activeExp = experiences.find((e) => e.id === selectedId) || experiences[0];

  return (
    <section id="experience" className="py-24 bg-[#07080b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering &amp; Leadership Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            A proven track record advancing from full-stack development to software lead and Head of Delivery.
          </p>
        </div>

        {/* Interactive Master-Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Timeline Navigation */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {experiences.map((exp) => {
              const isSelected = exp.id === selectedId;
              return (
                <button
                  key={exp.id}
                  onClick={() => setSelectedId(exp.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 flex flex-col gap-2 relative ${
                    isSelected
                      ? 'bg-[#0f131f] border-primary/40 shadow-xl shadow-primary/5'
                      : 'bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.1]'
                  }`}
                >
                  {/* Left Active Accent Bar */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeBar"
                      className="absolute left-0 top-3 bottom-3 w-1 rounded-r bg-primary"
                    />
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-primary font-semibold">
                      {exp.period}
                    </span>
                    {exp.badge && (
                      <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-semibold">
                        {exp.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-white leading-snug">
                    {exp.role}
                  </h3>

                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-medium text-slate-300">{exp.company}</span>
                    <span>{exp.type}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Experience Card */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeExp.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#0c0f18] border border-white/[0.1] shadow-2xl backdrop-blur-xl flex flex-col gap-6"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {activeExp.role}
                    </h3>
                  </div>
                  <div className="text-sm font-medium text-primary">
                    {activeExp.company} • <span className="text-slate-400 font-normal">{activeExp.type}</span>
                  </div>
                </div>

                <div className="flex sm:flex-col items-end gap-1 text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{activeExp.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500" />
                    <span>{activeExp.location}</span>
                  </div>
                </div>
              </div>

              {/* Overview Summary */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-mono font-semibold text-slate-400 mb-2">
                  Role Overview
                </h4>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {activeExp.summary}
                </p>
              </div>

              {/* Key Technical Highlights */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-mono font-semibold text-slate-400 mb-3">
                  Key Engineering &amp; Architectural Accomplishments
                </h4>
                <div className="flex flex-col gap-3">
                  {activeExp.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & Frameworks */}
              <div className="pt-4 border-t border-white/[0.08]">
                <h4 className="text-xs uppercase tracking-wider font-mono font-semibold text-slate-400 mb-3">
                  Technologies &amp; Domain Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeExp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-slate-300 hover:text-white hover:border-primary/40 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
