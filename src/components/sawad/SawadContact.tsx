import React, { useState } from 'react';
import { ArrowUpRight, Check, Mail, Copy } from 'lucide-react';

export const SawadContact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('himanshurajverma549@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="w-full flex flex-col gap-10 pt-16 border-t border-sawad-border text-left">
      {/* Heading */}
      <div>
        <h2 className="text-section-title font-black uppercase text-white tracking-tighter select-none">
          LET&apos;S WORK TOGETHER
        </h2>
      </div>

      <div className="flex flex-col gap-8">
        <p className="text-sm sm:text-base text-sawad-muted leading-relaxed max-w-2xl">
          Have a project in mind, need technical architecture leadership, or want to build high-performance Webflow platforms? Reach out directly.
        </p>

        {/* Quick Email & Copy Bar */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="mailto:himanshurajverma549@gmail.com"
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-sawad-surface border border-sawad-border hover:border-sawad-borderHover text-white text-xs sm:text-sm font-semibold transition-colors"
          >
            <Mail className="w-4 h-4 text-sawad-orange" />
            <span>himanshurajverma549@gmail.com</span>
          </a>

          <button
            onClick={copyEmail}
            className="flex items-center gap-2 px-4 py-3 rounded-xl bg-sawad-surface border border-sawad-border hover:border-sawad-borderHover text-sawad-muted hover:text-white text-xs font-mono transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-sawad-lime" />
                <span className="text-sawad-lime">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>

        {/* Contact Form */}
        {submitted ? (
          <div className="p-8 rounded-[24px] bg-sawad-lime/10 border border-sawad-lime/30 text-sawad-lime text-center space-y-2">
            <h3 className="text-xl font-bold">Message Dispatched! 🚀</h3>
            <p className="text-xs text-sawad-muted">
              Thank you for reaching out. I will respond to your transmission shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your Name"
                className="w-full p-4 rounded-xl bg-sawad-surface border border-sawad-border focus:border-sawad-orange text-white placeholder:text-sawad-muted text-sm outline-none transition-colors"
              />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Email Address"
                className="w-full p-4 rounded-xl bg-sawad-surface border border-sawad-border focus:border-sawad-orange text-white placeholder:text-sawad-muted text-sm outline-none transition-colors"
              />
            </div>

            <textarea
              rows={5}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell me about your project or architecture requirements..."
              className="w-full p-4 rounded-xl bg-sawad-surface border border-sawad-border focus:border-sawad-orange text-white placeholder:text-sawad-muted text-sm outline-none transition-colors resize-none"
            />

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-sawad-orange hover:bg-sawad-orangeHover text-black font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-sawad-orange/20 hover:shadow-sawad-orange/40 hover:-translate-y-0.5"
            >
              <span>Submit Transmission</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
