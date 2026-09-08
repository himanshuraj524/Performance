import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

const experienceList: ExperienceEntry[] = [
  {
    company: 'Lil Big Things',
    role: 'Head of Delivery',
    period: '2026 – Present',
    description:
      'Manage complete lifecycle of multiple concurrent technical projects, balancing workloads of 3 internal teams alongside external resources.',
    highlights: [
      'Led 10-week MVP delivery of an invite-only counseling web portal with zero post-launch issues.',
      'Architected dual-interface system (user portal + comprehensive admin dashboard).',
      'Built single-source-of-truth operations tracking system.',
    ],
  },
  {
    company: 'Lil Big Things',
    role: 'Software Development Lead',
    period: '03/2025 – 2026',
    description:
      'Focused on creating scalable systems & processes to optimize engineering workflows and usability-first engineering.',
    highlights: [
      'Led team to 1st Place Victory at the FastGen AI Hackathon.',
      'Created standardized development SOPs for SEO & event tracking.',
      'Championed technical evaluation framework reducing non-technical stakeholder friction.',
    ],
  },
  {
    company: 'Lil Big Things',
    role: 'Front End Developer & Webflow Expert',
    period: '07/2021 – 03/2025',
    description:
      'Primary Webflow expert and front-end specialist heavily customizing Webflow with core JavaScript and bespoke CRM data pipelines.',
    highlights: [
      'Engineered custom integrations connecting external CRM platforms directly to Webflow.',
      'Implemented granular GA4 tracking and optimized site architectures for peak Lighthouse performance.',
      'Built dynamic content filters, automated tables of contents, and custom GSAP animations.',
    ],
  },
  {
    company: 'Search HomesIndia Pvt. Ltd',
    role: 'Full Stack Software Engineer Intern',
    period: '01/2021 – 07/2021',
    description:
      'Took full ownership of building the real estate sales website from scratch with Python Django, PostgreSQL, and Heroku deployment.',
    highlights: [
      'Architected database-driven property sales platform.',
      'Engineered dynamic search filters for location, society, and flat type.',
    ],
  },
];

export const SawadExperience: React.FC = () => {
  return (
    <section id="experience" className="w-full flex flex-col gap-10 pt-16 border-t border-sawad-border text-left">
      {/* Heading */}
      <div>
        <h2 className="text-section-title font-black uppercase text-white tracking-tighter select-none">
          CAREER EXPERIENCE
        </h2>
      </div>

      {/* Experience List */}
      <div className="flex flex-col border-t border-sawad-border">
        {experienceList.map((exp, idx) => (
          <div
            key={idx}
            className="py-8 border-b border-sawad-border flex flex-col gap-4 hover:bg-white/[0.02] -mx-4 px-4 rounded-2xl transition-all duration-200 group"
          >
            {/* Top Row: Company, Role & Duration */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex flex-col">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sawad-orange transition-colors">
                    {exp.company}
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-sawad-muted">
                    {exp.period}
                  </span>
                </div>
                <div className="text-sm font-semibold text-sawad-orange mt-0.5">
                  {exp.role}
                </div>
              </div>

              <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08] text-white flex items-center justify-center group-hover:bg-sawad-orange group-hover:text-black group-hover:rotate-45 transition-all duration-200 flex-shrink-0 self-end sm:self-center">
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-sawad-muted leading-relaxed">
              {exp.description}
            </p>

            {/* Highlights */}
            <div className="flex flex-col gap-2 pt-2">
              {exp.highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-sawad-orange flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
