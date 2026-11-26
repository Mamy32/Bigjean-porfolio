import React from 'react';
import { Reveal } from '../components/Reveal';
import { Em, SectionHeading } from '../components/SectionHeading';
import { skillGroups } from '../data/portfolioData';

export const Skills: React.FC = () => (
  <section id="skills" className="max-w-7xl mx-auto px-5 sm:px-8 pt-24 lg:pt-32">
    <SectionHeading index="04" label="Skills">
      The tools I <Em>build with.</Em>
    </SectionHeading>

    <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted">
      <span className="inline-flex items-center gap-2">
        <span className="size-2 rounded-full bg-accent" /> Used in live, production projects
      </span>
      <span className="inline-flex items-center gap-2">
        <span className="size-2 rounded-full border border-muted" /> Coursework, hackathons &amp; personal projects
      </span>
    </div>

    <div className="grid md:grid-cols-3">
      {skillGroups.map((group, index) => (
        <Reveal
          key={group.category}
          delay={index * 0.08}
          className="border-b border-line py-10 md:border-l md:pl-8 md:first:border-l-0 md:first:pl-0"
        >
          <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">{group.category}</h3>
          <ul className="mt-5 space-y-2">
            {group.production.map((item) => (
              <li key={item} className="flex items-center gap-3 font-display text-xl font-medium tracking-tight">
                <span className="size-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
          <ul className="mt-5 flex flex-wrap gap-2">
            {group.familiar.map((item) => (
              <li
                key={item}
                className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  </section>
);
