import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download } from 'lucide-react';
import { education, marqueeItems, openTo, personalInfo } from '../data/portfolioData';

const formatTime = () =>
  new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: personalInfo.timeZone,
  }).format(new Date());

const useLocalTime = () => {
  const [time, setTime] = useState(formatTime);
  useEffect(() => {
    const id = setInterval(() => setTime(formatTime()), 15_000);
    return () => clearInterval(id);
  }, []);
  return time;
};

const stampText = 'Open to remote roles ✦ Freelance projects ✦ ';

const Stamp: React.FC = () => (
  <a
    href="#contact"
    aria-label="Available for work — get in touch"
    className="group relative grid size-36 lg:size-44 place-items-center rounded-full"
  >
    <svg viewBox="0 0 200 200" className="absolute inset-0 animate-spin-slow">
      <defs>
        <path id="stamp-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
      </defs>
      <text className="fill-ink font-mono text-[15.5px] uppercase tracking-[0.2em]">
        <textPath href="#stamp-circle" textLength="486">
          {stampText}
        </textPath>
      </text>
    </svg>
    <span className="grid size-16 lg:size-20 place-items-center rounded-full bg-accent text-white transition-transform duration-300 group-hover:scale-110">
      <ArrowUpRight size={28} />
    </span>
  </a>
);

const rise = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

export const Hero: React.FC = () => {
  const time = useLocalTime();

  const meta = [
    { label: 'Based in', value: `${personalInfo.location} · ${time} ${personalInfo.utcOffset}` },
    { label: 'Studying', value: `Computer Science, ${education.institution}` },
    { label: 'Open to', value: openTo.join(' · ') },
  ];

  return (
    <section className="pt-16">
      <motion.div
        className="max-w-7xl mx-auto px-5 sm:px-8 pt-14 sm:pt-20 lg:pt-24"
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.div
          variants={rise}
          className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-muted"
        >
          <span className="size-2 rounded-full bg-accent animate-blink" />
          Available for new work
        </motion.div>

        <div className="mt-8 grid lg:grid-cols-12 gap-10 items-end">
          <motion.h1
            variants={rise}
            className="lg:col-span-10 font-display font-semibold text-[clamp(2.75rem,8.6vw,7.5rem)] leading-[0.92] tracking-[-0.04em]"
          >
            Full-stack developer building fast,{' '}
            <em className="font-serif font-normal italic tracking-[-0.01em] text-accent">
              conversion-focused
            </em>{' '}
            web products.
          </motion.h1>
          <motion.div variants={rise} className="hidden lg:flex lg:col-span-2 justify-end pb-3">
            <Stamp />
          </motion.div>
        </div>

        <motion.div variants={rise} className="mt-10 lg:mt-14 grid lg:grid-cols-12 gap-8 items-end">
          <p className="lg:col-span-6 text-lg sm:text-xl leading-relaxed text-muted">
            {personalInfo.intro}
          </p>
          <div className="lg:col-span-6 flex flex-wrap gap-3 lg:justify-end">
            <a
              href="#work"
              className="inline-flex h-13 items-center gap-2 rounded-full bg-ink px-7 font-medium text-paper hover:bg-accent hover:text-white transition-colors"
            >
              See selected work <ArrowDown size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex h-13 items-center gap-2 rounded-full border border-ink px-7 font-medium hover:bg-ink hover:text-paper transition-colors"
            >
              Email me <ArrowUpRight size={18} />
            </a>
            <a
              href="/CV_Mamy_Jean_Full-Stack_Developer.pdf"
              download
              className="inline-flex h-13 items-center gap-2 rounded-full border border-ink px-7 font-medium hover:bg-ink hover:text-paper transition-colors"
            >
              Download my CV <Download size={18} />
            </a>
          </div>
        </motion.div>

        <motion.dl
          variants={rise}
          className="mt-14 lg:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-line"
        >
          {meta.map((item) => (
            <div
              key={item.label}
              className="border-b border-line py-5 sm:pr-6 lg:border-b-0 lg:border-l lg:pl-6 lg:first:border-l-0 lg:first:pl-0"
            >
              <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">{item.label}</dt>
              <dd className="mt-2 font-medium tabular-nums">{item.value}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>

      <div className="border-y border-line overflow-hidden py-5" aria-hidden="true">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((copy) => (
            <ul key={copy} className="flex shrink-0 items-center">
              {marqueeItems.map((item) => (
                <li key={item} className="flex items-center font-display text-2xl sm:text-3xl font-medium tracking-tight">
                  <span className="px-6 sm:px-8">{item}</span>
                  <span className="text-accent">✦</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};
