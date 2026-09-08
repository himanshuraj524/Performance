import React from 'react';
import { GraduationCap, Heart, CheckCircle2 } from 'lucide-react';

export const EducationHobbies: React.FC = () => {
  const hobbies = [
    { icon: '🍳', name: 'Cooking', desc: 'Culinary experiments' },
    { icon: '🚴', name: 'Biking', desc: 'Urban & trail rides' },
    { icon: '💻', name: 'Coding', desc: 'Side projects & tools' },
    { icon: '🏋️', name: 'Gyming', desc: 'Fitness & discipline' },
    { icon: '🛍️', name: 'Shopping', desc: 'Tech & apparel' },
    { icon: '✈️', name: 'Travel', desc: 'Exploring new cities' },
  ];

  return (
    <section className="py-20 bg-[#07080b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Education & Soft Skills */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-[#0c0f18] border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-primary">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Education &amp; Qualifications</h3>
                  <p className="text-xs text-slate-400">Formal Computer Science Foundation</p>
                </div>
              </div>

              {/* Degree Card */}
              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] mb-6">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h4 className="text-base font-bold text-white">
                    Bachelor of Computer Applications (BCA)
                  </h4>
                  <span className="text-xs font-mono text-primary font-semibold">2016 – 2019</span>
                </div>
                <p className="text-xs text-slate-400">Awadhesh Pratap Singh Vishwavidyalaya</p>
              </div>

              {/* Soft Skills & Delivery Strengths */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-mono font-semibold text-slate-400 mb-3">
                  Leadership &amp; Operational Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {[
                    'End-to-End Project Delivery',
                    'Process & SOP Implementation',
                    'Client Communication & Strategy',
                    'Cross-Functional Team Management',
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] flex items-center gap-2.5 text-xs text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Hobbies & Personal Interests */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-3xl bg-[#0c0f18] border border-white/[0.08] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-indigo-400">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Interests &amp; Lifestyle</h3>
                  <p className="text-xs text-slate-400">Life beyond the code editor</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.name}
                    className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-indigo-400/30 transition-all flex flex-col items-center text-center gap-2 group"
                  >
                    <span className="text-3xl group-hover:scale-110 transition-transform">
                      {hobby.icon}
                    </span>
                    <span className="text-sm font-semibold text-white">{hobby.name}</span>
                    <span className="text-[11px] text-slate-400">{hobby.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs text-slate-400 flex items-center justify-between font-mono">
              <span>Work-Life Synergy</span>
              <span className="text-primary">Continuous Growth</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
