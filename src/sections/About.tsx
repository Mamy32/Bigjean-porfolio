import React from 'react';
import { Reveal } from '../components/Reveal';
import { Em, SectionHeading } from '../components/SectionHeading';
import { highlights, personalInfo } from '../data/portfolioData';

export const About: React.FC = () => (
  <section id="about" className="max-w-7xl mx-auto px-5 sm:px-8 pt-24 lg:pt-32">
    <SectionHeading index="01" label="About">
      Madagascar to Indonesia, <Em>backend to full stack.</Em>
    </SectionHeading>

    <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 py-12 lg:py-16">
      <Reveal className="lg:col-span-7 order-2 lg:order-1">
        <p className="font-display text-2xl sm:text-3xl font-medium leading-snug tracking-[-0.02em]">
          {personalInfo.aboutLead}
        </p>
        {personalInfo.about.map((paragraph) => (
          <p key={paragraph} className="mt-6 text-lg leading-relaxed text-muted max-w-2xl">
            {paragraph}
          </p>
        ))}
      </Reveal>

      <Reveal delay={0.1} className="lg:col-span-5 order-1 lg:order-2">
        <figure className="relative mx-auto max-w-sm lg:max-w-none">
          <div className="overflow-hidden rounded-2xl border border-line bg-paper-2">
            <img
              src={personalInfo.photo}
              alt={`Portrait of ${personalInfo.name}`}
              width={605}
              height={807}
              loading="lazy"
              className="block w-full h-auto"
            />
          </div>
          <figcaption className="absolute -bottom-4 left-5 rounded-full border border-line bg-paper px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] shadow-sm">
            <span className="mr-2 inline-block size-2 rounded-full bg-accent align-middle" />
            Jakarta, Indonesia · {personalInfo.utcOffset}
          </figcaption>
        </figure>
      </Reveal>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 border-b border-line pb-12 lg:pb-16">
      {highlights.map((item, index) => (
        <Reveal key={item.title} delay={index * 0.06} className="h-full">
          <div className="flex h-full flex-col rounded-xl border border-line bg-paper-2 p-6">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">{item.label}</span>
            <span className="mt-3 font-display font-semibold text-xl tracking-[-0.02em] leading-tight">
              {item.title}
            </span>
            <span className="mt-2 font-serif italic text-lg leading-snug text-accent">{item.detail}</span>
            {item.period && (
              <span className="mt-auto pt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted">
                {item.period}
              </span>
            )}
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);
