import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Layers,
  Award,
  Clock,
  ArrowRight,
  Linkedin,
  Mail,
  Copy,
  Check,
  Sparkles,
  MapPin,
} from 'lucide-react';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState<'profile' | 'stack' | 'delivery'>('profile');

  const copyEmail = () => {
    navigator.clipboard.writeText('himanshurajverma549@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeSnippets = {
    profile: `const engineer = {
  name: "Himanshu Verma",
  role: "Head of Delivery & Solution Architect",
  company: "Lil Big Things",
  location: "Bangalore, Karnataka, IN",
  specialization: [
    "Enterprise Webflow Architecture",
    "Dual-Interface Portal Systems",
    "Full-Stack JS/TS & Python Solutions",
    "Performance Optimization (SEO/GEO)"
  ],
  awards: ["1st Place @ FastGen AI Hackathon"]
};`,
    stack: `const techStack = {
  frontend: ["TypeScript", "JavaScript", "React", "Next.js", "GSAP"],
  architecture: ["MVP Architecture", "CRM Pipelines", "REST APIs"],
  backend: ["Python", "Django", "PostgreSQL"],
  platforms: ["Webflow Enterprise", "AWS Cloud", "Make / Zapier"],
  methodologies: ["SOP Implementation", "Resource Orchestration"]
};`,
    delivery: `class ProjectDeliveryPipeline {
  async execute(clientRequirement) {
    const architecture = await this.designDualInterfaceSystem();
    const performanceScore = await this.optimizeLighthouse(100);
    const timeline = this.accelerateDelivery({ savedWeeks: 2 });
    
    return { status: "Delivered Ahead of Schedule", issues: 0 };
  }
}`,
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono text-slate-300 mb-6 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span className="text-primary font-semibold">Solution Architect</span>
              <span className="text-slate-500">•</span>
              <span>Head of Delivery @ Lil Big Things</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6"
            >
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-300 to-cyan-400">scalable systems</span>, high-performance web architectures &amp; intuitive platforms.
            </motion.h1>

            {/* Subtitle / Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mb-8"
            >
              I am a solution-driven technical leader and Webflow Expert who bridges the gap between complex software engineering and seamless client delivery. From architecting dual-interface portals and CRM data pipelines to leading multi-team project lifecycles.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary hover:bg-primary-hover text-dark-900 font-semibold text-sm transition-all duration-200 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5"
              >
                <span>Explore Architecture &amp; Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] text-slate-200 font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <div className="flex items-center gap-2.5 ml-0 sm:ml-2">
                <a
                  href="https://linkedin.com/in/himanshu-raj-verma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-slate-300 hover:text-white transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:himanshurajverma549@gmail.com"
                  className="p-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-slate-300 hover:text-white transition-all"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>

            {/* Quick Metrics Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-6 border-t border-white/[0.08]"
            >
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-center gap-1.5 text-primary text-xs font-mono mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Timeline</span>
                </div>
                <div className="text-xl font-bold text-white">10 Wks</div>
                <div className="text-xs text-slate-400">Fast MVP Delivery</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-mono mb-1">
                  <Award className="w-3.5 h-3.5" />
                  <span>Hackathon</span>
                </div>
                <div className="text-xl font-bold text-white">1st Place</div>
                <div className="text-xs text-slate-400">FastGen AI SEO</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-center gap-1.5 text-indigo-400 text-xs font-mono mb-1">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Leadership</span>
                </div>
                <div className="text-xl font-bold text-white">3 Teams</div>
                <div className="text-xs text-slate-400">Balanced Lifecycles</div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <div className="flex items-center gap-1.5 text-sky-400 text-xs font-mono mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Location</span>
                </div>
                <div className="text-xl font-bold text-white">Bangalore</div>
                <div className="text-xs text-slate-400">BTM Layout, IN</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Developer Profile & Terminal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex flex-col gap-5"
          >
            {/* Developer Card with Profile Image */}
            <div className="relative rounded-2xl bg-[#0e111a]/90 border border-white/[0.12] p-5 shadow-2xl backdrop-blur-xl overflow-hidden group">
              {/* Subtle top sheen */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-white/20 shadow-lg flex-shrink-0 bg-dark-800">
                  <img
                    src="profile.jpg"
                    alt="Himanshu Verma"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent"></div>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg sm:text-xl font-bold text-white">Himanshu Verma</h2>
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" title="Active"></span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium text-primary">
                    Solution Architect &amp; Head of Delivery
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Lil Big Things • Bangalore, Karnataka
                  </p>
                </div>
              </div>

              {/* Code Snippet Tabs */}
              <div className="rounded-xl bg-[#07080b] border border-white/[0.08] overflow-hidden">
                <div className="flex items-center justify-between px-3 py-2 bg-white/[0.02] border-b border-white/[0.06] text-xs font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                    <span className="text-slate-500 text-[11px] ml-2">architecture.ts</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setActiveCodeTab('profile')}
                      className={`px-2 py-0.5 rounded text-[11px] transition-colors ${
                        activeCodeTab === 'profile'
                          ? 'bg-primary/20 text-primary font-semibold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      profile.json
                    </button>
                    <button
                      onClick={() => setActiveCodeTab('stack')}
                      className={`px-2 py-0.5 rounded text-[11px] transition-colors ${
                        activeCodeTab === 'stack'
                          ? 'bg-primary/20 text-primary font-semibold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      stack.ts
                    </button>
                    <button
                      onClick={() => setActiveCodeTab('delivery')}
                      className={`px-2 py-0.5 rounded text-[11px] transition-colors ${
                        activeCodeTab === 'delivery'
                          ? 'bg-primary/20 text-primary font-semibold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      delivery.ts
                    </button>
                  </div>
                </div>

                <div className="p-3.5 font-mono text-[11px] sm:text-xs text-slate-300 overflow-x-auto leading-relaxed max-h-[220px]">
                  <pre>
                    <code>{codeSnippets[activeCodeTab]}</code>
                  </pre>
                </div>
              </div>

              {/* Bottom Quick Badges */}
              <div className="flex flex-wrap items-center gap-1.5 mt-3 pt-3 border-t border-white/[0.06] text-[11px] font-mono text-slate-400">
                <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-slate-300">
                  ⚡ Webflow Enterprise
                </span>
                <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-slate-300">
                  🛠️ Custom JS Pipelines
                </span>
                <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-slate-300">
                  🐍 Python/Django
                </span>
                <span className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-slate-300">
                  🚀 MVP Architecture
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
