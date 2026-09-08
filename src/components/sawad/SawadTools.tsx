import React from 'react';
import { Globe, Code2, Layers, Database, Sparkles, Cloud, BarChart2, Workflow, BookOpen } from 'lucide-react';

interface ToolItem {
  name: string;
  category: string;
  icon: React.ElementType;
  color: string;
}

const tools: ToolItem[] = [
  { name: 'Webflow', category: 'Enterprise Architecture', icon: Globe, color: 'text-blue-400' },
  { name: 'TypeScript', category: 'Typed Frontend & Logic', icon: Code2, color: 'text-sky-400' },
  { name: 'JavaScript (ESNext)', category: 'Custom Integrations', icon: Code2, color: 'text-yellow-400' },
  { name: 'Python & Django', category: 'Backend & Data APIs', icon: Layers, color: 'text-emerald-400' },
  { name: 'PostgreSQL', category: 'Relational Database', icon: Database, color: 'text-indigo-400' },
  { name: 'GSAP Animation', category: 'Web Motion Graphics', icon: Sparkles, color: 'text-green-400' },
  { name: 'AWS Cloud', category: 'Cloud Infrastructure', icon: Cloud, color: 'text-amber-400' },
  { name: 'Google Analytics 4', category: 'Event & Conversion Tracking', icon: BarChart2, color: 'text-orange-400' },
  { name: 'Make & Zapier', category: 'Pipeline Automations', icon: Workflow, color: 'text-purple-400' },
  { name: 'Notion & SOPs', category: 'Operations & Dashboards', icon: BookOpen, color: 'text-slate-300' },
];

export const SawadTools: React.FC = () => {
  return (
    <section id="tools" className="w-full flex flex-col gap-10 pt-16 border-t border-sawad-border text-left">
      {/* Heading */}
      <div>
        <h2 className="text-section-title font-black uppercase text-white tracking-tighter select-none">
          PREMIUM TOOLS
        </h2>
      </div>

      {/* 2-Column Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="p-5 rounded-2xl bg-sawad-surface border border-sawad-border hover:border-sawad-borderHover flex items-center justify-between gap-4 transition-all duration-200 group hover:-translate-y-0.5"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-110 transition-transform">
                <tool.icon className={`w-6 h-6 ${tool.color}`} />
              </div>
              <div className="flex flex-col">
                <h3 className="text-base font-bold text-white group-hover:text-sawad-orange transition-colors">
                  {tool.name}
                </h3>
                <span className="text-xs text-sawad-muted font-mono">{tool.category}</span>
              </div>
            </div>

            <span className="text-[10px] font-mono uppercase tracking-wider text-sawad-muted group-hover:text-sawad-lime transition-colors">
              Expert
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
