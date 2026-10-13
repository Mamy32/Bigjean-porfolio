import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';
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

        <h2 className="mt-6 font-display font-semibold text-[clamp(2.75rem,9vw,8rem)] leading-[0.9] tracking-[-0.04em]">
          Got a role or a project?{' '}
          <em className="font-serif font-normal italic tracking-[-0.01em] text-accent">Let's talk.</em>
        </h2>

        <div className="mt-12 lg:mt-16 grid lg:grid-cols-12 gap-10 border-t border-line pt-10">
          <div className="lg:col-span-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Email</div>
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

          <dl className="lg:col-span-4 space-y-6">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Open to</dt>
              <dd className="mt-2 text-lg font-medium">{openTo.join(' · ')}</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Time zone</dt>
              <dd className="mt-2 text-lg font-medium">
                {personalInfo.location} · {personalInfo.utcOffset}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Elsewhere</dt>
              <dd className="mt-2 text-lg font-medium">
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
          </dl>
        </div>
      </Reveal>
    </section>
  );
};
