import React from 'react';
import { Reveal } from '../components/Reveal';
import { Em, SectionHeading } from '../components/SectionHeading';
import { services } from '../data/portfolioData';

export const Services: React.FC = () => (
  <section id="services" className="max-w-7xl mx-auto px-5 sm:px-8 pt-24 lg:pt-32">
    <SectionHeading index="02" label="Services">
      What you can <Em>hire me</Em> for.
    </SectionHeading>

    <div className="grid md:grid-cols-2">
      {services.map((service, index) => (
        <Reveal
          key={service.title}
          delay={(index % 2) * 0.08}
          className="group border-b border-line py-10 md:odd:border-r md:odd:pr-10 md:even:pl-10"
        >
          <div className="flex items-start justify-between gap-6">
            <h3 className="font-display font-semibold text-2xl sm:text-3xl tracking-[-0.02em] leading-tight">
              {service.title}
            </h3>
            <span className="font-mono text-xs text-muted transition-colors group-hover:text-accent">
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
          <p className="mt-4 text-lg leading-relaxed text-muted">{service.description}</p>
          <p className="mt-6 flex gap-3 text-sm leading-relaxed">
            <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.18em] text-accent pt-0.5">
              Done before
            </span>
            <span>{service.proof}</span>
          </p>
        </Reveal>
      ))}
    </div>
  </section>
);
