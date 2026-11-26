import React, { useState } from 'react';
import { ArrowUpRight, Check, Clock, Copy, Github, Laptop, Mail } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { openTo, personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${personalInfo.email}`;
    }
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-5 sm:px-8 py-24 lg:py-36">
      <Reveal>
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted">
          <span className="text-accent">05</span>
          <span className="h-px w-8 bg-line" />
          <span>Contact</span>
        </div>

        <h2 className="mt-6 font-display font-semibold text-[clamp(2.75rem,8vw,7rem)] leading-[0.92] tracking-[-0.04em]">
          Got a role or a project?{' '}
          <em className="block font-serif font-normal italic tracking-[-0.01em] text-accent">Let's talk.</em>
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
          I'm open to full-time remote roles, internships and freelance projects. I usually reply within a day.
        </p>

        <div className="mt-12 lg:mt-16 grid lg:grid-cols-12 gap-10 border-t border-line pt-10">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              <span className="grid size-9 place-items-center rounded-full bg-paper-2 text-accent">
                <Mail size={16} />
              </span>
              Email
            </div>
            <a
              href={`mailto:${personalInfo.email}`}
              className="mt-3 inline-block font-display font-medium text-[clamp(1.15rem,3.4vw,2.5rem)] tracking-[-0.02em] break-all link-line pb-1"
            >
              {personalInfo.email}
            </a>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex h-13 items-center gap-2 rounded-full bg-accent px-7 font-medium text-white hover:bg-ink hover:text-paper transition-colors"
              >
                Write to me <ArrowUpRight size={18} />
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex h-13 items-center gap-2 rounded-full border border-ink px-7 font-medium hover:bg-ink hover:text-paper transition-colors cursor-pointer"
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
                {copied ? 'Copied' : 'Copy address'}
              </button>
            </div>
          </div>

          <dl className="lg:col-span-4 space-y-6 lg:border-l lg:border-line lg:pl-10">
            {[
              { icon: Laptop, label: 'Open to', value: openTo.join(' · ') },
              { icon: Clock, label: 'Time zone', value: `${personalInfo.location} · ${personalInfo.utcOffset}` },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-paper-2 text-accent">
                  <Icon size={18} />
                </span>
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">{label}</dt>
                  <dd className="mt-1 font-medium">{value}</dd>
                </div>
              </div>
            ))}
            <div className="flex gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-paper-2">
                <Github size={18} />
              </span>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Elsewhere</dt>
                <dd className="mt-1 font-medium">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 link-line"
                  >
                    GitHub <ArrowUpRight size={16} className="text-accent" />
                  </a>
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </Reveal>
    </section>
  );
};
