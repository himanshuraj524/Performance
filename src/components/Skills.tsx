import React from 'react';
import { Terminal, Layers, Code, CheckCircle, Shield, Globe } from 'lucide-react';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Architecture & System Design',
      icon: Layers,
      color: 'text-sky-400',
      skills: [
        { name: 'MVP System Architecture', level: 'Expert' },
        { name: 'Dual-Interface Portal Design', level: 'Expert' },
        { name: 'Custom CRM Integration Pipelines', level: 'Advanced' },
        { name: 'Website Solutioning & Strategy', level: 'Expert' },
        { name: 'AWS Cloud Infrastructure', level: 'Actively Upskilling' },
        { name: 'Relational Database Schema (PostgreSQL)', level: 'Advanced' },
      ],
    },
    {
      title: 'Languages & Engineering Stack',
      icon: Code,
      color: 'text-indigo-400',
      skills: [
        { name: 'JavaScript (ESNext)', level: 'Expert' },
        { name: 'TypeScript', level: 'Advanced' },
        { name: 'Python', level: 'Advanced' },
        { name: 'Django Framework', level: 'Advanced' },
        { name: 'HTML5 Semantic Web', level: 'Expert' },
        { name: 'Tailwind CSS & Modern CSS', level: 'Expert' },
      ],
    },
    {
      title: 'Enterprise Webflow & UI Engineering',
      icon: Globe,
      color: 'text-emerald-400',
      skills: [
        { name: 'Enterprise Webflow Custom Code', level: 'Expert' },
        { name: 'GSAP Web Animations', level: 'Advanced' },
        { name: 'Granular GA4 Analytics Tracking', level: 'Expert' },
        { name: 'Dynamic Content Filtering Systems', level: 'Expert' },
        { name: 'Lighthouse & CWV Optimization', level: 'Expert' },
        { name: 'Low-Code / No-Code Systems', level: 'Expert' },
      ],
    },
    {
      title: 'Leadership, SOPs & Operations',
      icon: Shield,
      color: 'text-purple-400',
      skills: [
        { name: 'End-to-End Project Delivery Lifecycle', level: 'Expert' },
        { name: 'Standard Operating Procedures (SOPs)', level: 'Expert' },
        { name: 'Cross-Functional Team Leadership', level: 'Expert' },
        { name: 'Technical-to-Client Translation', level: 'Expert' },
        { name: 'Delivery Quality Assurance (QA)', level: 'Expert' },
        { name: 'Resource Management & Tracking', level: 'Expert' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-[#07080b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Matrix &amp; Domain Expertise
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            A comprehensive overview of architectural proficiencies, programming languages, front-end engineering, and delivery leadership frameworks.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="p-6 sm:p-8 rounded-3xl bg-[#0c0f18] border border-white/[0.08] hover:border-white/[0.15] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] ${category.color}`}>
                    <category.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-primary/30 transition-all flex flex-col justify-between gap-1 group"
                    >
                      <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white leading-snug">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono text-primary/80 font-semibold uppercase tracking-wider">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Domain Group 0{idx + 1}</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" /> Production Ready
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
