import React from 'react';
import { Reveal } from '../components/Reveal';
import { Em, SectionHeading } from '../components/SectionHeading';
import { education, personalInfo, skillGroups } from '../data/portfolioData';

export const About: React.FC = () => {
  const [lead, ...rest] = personalInfo.about;

  return (
    <section id="about" className="max-w-7xl mx-auto px-5 sm:px-8 pt-24 lg:pt-32">
      <SectionHeading index="04" label="About">
        Madagascar to Indonesia, <Em>backend to full stack.</Em>
      </SectionHeading>

      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 border-b border-line py-12 lg:py-16">
        <Reveal className="lg:col-span-7">
          <p className="font-display text-2xl sm:text-3xl font-medium leading-snug tracking-[-0.02em]">
            {lead}
          </p>
          {rest.map((paragraph) => (
            <p key={paragraph} className="mt-6 text-lg leading-relaxed text-muted max-w-2xl">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-5">
          <div className="rounded-xl border border-line bg-paper-2 p-7">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Education</div>
            <div className="mt-4 font-display font-semibold text-3xl tracking-[-0.02em]">
              {education.institution}
            </div>
            <div className="mt-1 font-serif italic text-xl text-accent">{education.degree}</div>
            <div className="mt-6 flex justify-between border-t border-line pt-4 font-mono text-xs uppercase tracking-[0.14em] text-muted">
              <span>{education.status}</span>
              <span>{education.period}</span>
            </div>
          </div>
        </Reveal>
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
              {group.items.map((item) => (
                <li key={item} className="font-display text-xl font-medium tracking-tight">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
