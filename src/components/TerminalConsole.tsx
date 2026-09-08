import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft, Trash2 } from 'lucide-react';

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

export const TerminalConsole: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'welcome',
      output: (
        <div className="text-slate-300 space-y-1">
          <p className="text-primary font-bold">
            ⚡ Himanshu Verma — Interactive CLI [Version 2.6.0]
          </p>
          <p className="text-slate-400">
            Type <span className="text-emerald-400 font-bold">&apos;help&apos;</span> to see available commands or click the command badges below.
          </p>
        </div>
      ),
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const cleanCmd = cmdStr.trim().toLowerCase();
    let response: React.ReactNode;

    switch (cleanCmd) {
      case 'help':
        response = (
          <div className="space-y-1 text-slate-300">
            <p className="text-primary font-semibold">Available Commands:</p>
            <p><span className="text-emerald-400 w-24 inline-block font-mono">about</span> : Summary &amp; background</p>
            <p><span className="text-emerald-400 w-24 inline-block font-mono">exp</span> : Career timeline &amp; roles</p>
            <p><span className="text-emerald-400 w-24 inline-block font-mono">projects</span> : Key architecture projects</p>
            <p><span className="text-emerald-400 w-24 inline-block font-mono">skills</span> : Core tech stack &amp; tools</p>
            <p><span className="text-emerald-400 w-24 inline-block font-mono">contact</span> : Email &amp; LinkedIn details</p>
            <p><span className="text-emerald-400 w-24 inline-block font-mono">sudo hire</span> : Send offer invitation</p>
            <p><span className="text-emerald-400 w-24 inline-block font-mono">clear</span> : Clear console</p>
          </div>
        );
        break;

      case 'about':
      case 'bio':
        response = (
          <div className="space-y-1 text-slate-300">
            <p className="font-semibold text-white">Himanshu Verma</p>
            <p>Head of Delivery &amp; Solution Architect at Lil Big Things, Bangalore, India.</p>
            <p className="text-slate-400 text-xs">
              Specialized in enterprise Webflow architectures, full-stack systems (JS/TS, Python/Django), CRM pipelines, and leading cross-functional teams.
            </p>
          </div>
        );
        break;

      case 'exp':
      case 'experience':
        response = (
          <div className="space-y-1.5 text-slate-300">
            <p className="text-primary font-semibold">Career Milestones:</p>
            <p>• <strong className="text-white">Lil Big Things</strong> — Head of Delivery (2026 – Present)</p>
            <p>• <strong className="text-white">Lil Big Things</strong> — Software Development Lead (03/2025 – 2026)</p>
            <p>• <strong className="text-white">Lil Big Things</strong> — Front End Developer &amp; Webflow Expert (07/2021 – 03/2025)</p>
            <p>• <strong className="text-white">Search HomesIndia</strong> — Full Stack SWE Intern (01/2021 – 07/2021)</p>
          </div>
        );
        break;

      case 'projects':
        response = (
          <div className="space-y-1 text-slate-300">
            <p className="text-primary font-semibold">Featured Architectures:</p>
            <p>1. <strong className="text-white">US Counseling Dual-Interface Portal</strong> (10-Week MVP delivery)</p>
            <p>2. <strong className="text-white">FastGen AI SEO Platform</strong> (🏆 1st Place Hackathon Winner)</p>
            <p>3. <strong className="text-white">Company Operations Tracking Dashboard</strong> (3 Teams Orchestrated)</p>
            <p>4. <strong className="text-white">Search HomesIndia Real Estate Engine</strong> (Django + PostgreSQL)</p>
          </div>
        );
        break;

      case 'skills':
      case 'stack':
        response = (
          <div className="space-y-1 text-slate-300">
            <p className="text-primary font-semibold">Core Stack:</p>
            <p><span className="text-slate-400">Languages:</span> TypeScript, JavaScript (ESNext), Python, HTML5, CSS3/Tailwind</p>
            <p><span className="text-slate-400">Frameworks:</span> Django, React, Next.js, Webflow Enterprise, GSAP</p>
            <p><span className="text-slate-400">Databases &amp; Cloud:</span> PostgreSQL, AWS Cloud, Heroku, REST APIs</p>
          </div>
        );
        break;

      case 'contact':
        response = (
          <div className="space-y-1 text-slate-300">
            <p>Email: <a href="mailto:himanshurajverma549@gmail.com" className="text-primary underline">himanshurajverma549@gmail.com</a></p>
            <p>LinkedIn: <a href="https://linkedin.com/in/himanshu-raj-verma" target="_blank" rel="noopener noreferrer" className="text-primary underline">linkedin.com/in/himanshu-raj-verma</a></p>
            <p>Location: Bangalore (BTM Layout), Karnataka, India</p>
          </div>
        );
        break;

      case 'sudo hire':
      case 'hire':
        response = (
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 space-y-1">
            <p className="font-bold">🎉 Access Granted! Let&apos;s build together.</p>
            <p className="text-xs">
              Sending transmission to Himanshu Verma. Please reach out directly at <span className="font-mono text-white underline">himanshurajverma549@gmail.com</span>
            </p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        return;

      case '':
        return;

      default:
        response = (
          <p className="text-red-400">
            Command not recognized: &apos;{cleanCmd}&apos;. Type &apos;help&apos; for available commands.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: cmdStr, output: response }]);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    handleCommand(input);
    setInput('');
  };

  return (
    <section id="terminal" className="py-20 bg-[#0a0c12] relative border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <TerminalIcon className="w-4 h-4 text-primary" />
            <span>Interactive Developer Shell</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setHistory([])}
              className="flex items-center gap-1 px-2.5 py-1 rounded bg-white/[0.04] hover:bg-white/[0.08] text-slate-400 text-xs font-mono transition-colors"
              title="Clear Terminal"
            >
              <Trash2 className="w-3 h-3" />
              <span>Clear</span>
            </button>
          </div>
        </div>

        {/* Terminal Container */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="rounded-2xl bg-[#06070a] border border-white/[0.12] shadow-2xl overflow-hidden font-mono text-xs sm:text-sm cursor-text"
        >
          {/* Titlebar */}
          <div className="px-4 py-3 bg-[#0d1017] border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
              <span className="text-slate-400 text-xs ml-2">himanshu@macbook-pro:~</span>
            </div>
            <span className="text-[11px] text-slate-500">zsh</span>
          </div>

          {/* Body / Scroll Content */}
          <div className="p-4 sm:p-6 max-h-[360px] overflow-y-auto space-y-4">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-primary font-bold">&gt;</span>
                  <span className="text-slate-200">{item.command}</span>
                </div>
                <div className="pl-4">{item.output}</div>
              </div>
            ))}

            {/* Input Line */}
            <form onSubmit={onSubmit} className="flex items-center gap-2 pt-2">
              <span className="text-primary font-bold">&gt;</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="type a command (e.g. 'help', 'about', 'skills', 'hire')..."
                className="flex-1 bg-transparent border-none outline-none text-white font-mono placeholder:text-slate-600 text-xs sm:text-sm"
              />
              <button type="submit" className="text-slate-500 hover:text-white" aria-label="Run command">
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>
            <div ref={bottomRef} />
          </div>

          {/* Preset Command Buttons */}
          <div className="p-3 bg-[#0d1017] border-t border-white/[0.08] flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-500 text-[11px]">Quick click:</span>
            {['help', 'about', 'exp', 'projects', 'skills', 'contact', 'sudo hire'].map((cmd) => (
              <button
                key={cmd}
                onClick={(e) => {
                  e.stopPropagation();
                  handleCommand(cmd);
                }}
                className="px-2 py-0.5 rounded bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.06] text-slate-300 hover:text-primary text-[11px] font-mono transition-colors"
              >
                {cmd}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
