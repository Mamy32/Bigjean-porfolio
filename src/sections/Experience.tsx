import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { Em, SectionHeading } from '../components/SectionHeading';
import { experience, facts } from '../data/portfolioData';

export const Experience: React.FC = () => (
  <section id="experience" className="max-w-7xl mx-auto px-5 sm:px-8 pt-24 lg:pt-32">
    <SectionHeading index="03" label="Experience">
      Where I've done <Em>the work.</Em>
    </SectionHeading>

    <Reveal className="grid sm:grid-cols-3 border-b border-line">
      {facts.map((fact) => (
        <div
          key={fact.label}
          className="py-8 border-b border-line last:border-b-0 sm:border-b-0 sm:border-l sm:pl-8 sm:first:border-l-0 sm:first:pl-0"
        >
          <div className="font-display font-semibold text-6xl lg:text-7xl tracking-[-0.04em] leading-none">
            {fact.value}
          </div>
          <div className="mt-3 text-muted">{fact.label}</div>
        </div>
      ))}
    </Reveal>

    {experience.map((item) => (
      <Reveal key={item.id}>
        <article className="grid lg:grid-cols-12 gap-4 lg:gap-10 border-b border-line py-10 lg:py-14">
          <div className="lg:col-span-3 font-mono text-xs uppercase tracking-[0.18em] text-muted pt-2">
            {item.period}
          </div>

          <div className="lg:col-span-9">
            <h3 className="font-display font-semibold text-2xl sm:text-3xl tracking-[-0.02em] leading-tight">
              {item.role}
            </h3>
            <p className="mt-1 font-serif italic text-xl text-accent">{item.company}</p>

            <ul className="mt-6 space-y-2.5 max-w-3xl">
              {item.description.map((line) => (
                <li key={line} className="flex gap-3 leading-relaxed text-muted">
                  <span className="mt-[0.75em] h-px w-4 shrink-0 bg-ink/40" />
                  {line}
                </li>
              ))}
            </ul>

            {item.websites && (
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  Client sites
                </span>
                {item.websites.map((site) => (
                  <a
                    key={site.url}
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium link-line"
                  >
                    {site.name}
                    <ArrowUpRight size={15} className="text-accent" />
                  </a>
                ))}
              </div>
            )}

            <p className="mt-7 font-mono text-[11px] uppercase tracking-wider text-muted leading-relaxed">
              {item.tags.join('  /  ')}
            </p>
          </div>
        </article>
      </Reveal>
    ))}
  </section>
);
