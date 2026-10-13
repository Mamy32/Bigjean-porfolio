import React from 'react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  index: string;
  label: string;
  children: React.ReactNode;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ index, label, children }) => (
  <Reveal className="border-b border-line pb-8">
    <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted">
      <span className="text-accent">{index}</span>
      <span className="h-px w-8 bg-line" />
      <span>{label}</span>
    </div>
    <h2 className="mt-5 font-display font-semibold text-[clamp(2.25rem,6vw,4.75rem)] leading-[0.95] tracking-[-0.03em]">
      {children}
    </h2>
  </Reveal>
);

export const Em: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <em className="font-serif font-normal italic tracking-normal text-accent">{children}</em>
);
