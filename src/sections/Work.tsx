import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { Em, SectionHeading } from '../components/SectionHeading';
import { projects, type Project } from '../data/portfolioData';

const domainOf = (url: string) => new URL(url).hostname.replace(/^www\./, '');

const ProjectRow: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const flip = index % 2 === 1;

  return (
    <Reveal>
      <article className="group grid lg:grid-cols-12 gap-8 lg:gap-14 border-b border-line py-12 lg:py-20">
        <div className={`lg:col-span-5 flex flex-col ${flip ? 'lg:order-2' : ''}`}>
          <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.18em] text-muted">
            <span className="text-accent">{String(index + 1).padStart(2, '0')}</span>
            <span>{project.type}</span>
          </div>

          <h3 className="mt-5 font-display font-semibold text-4xl sm:text-5xl tracking-[-0.03em] leading-none">
            {project.name}
          </h3>
          <p className="mt-5 text-lg leading-relaxed text-muted">{project.description}</p>

          <ul className="mt-6 space-y-2.5">
            {project.highlights.map((item) => (
              <li key={item} className="flex gap-3 leading-snug">
                <span className="mt-[0.6em] h-px w-4 shrink-0 bg-accent" />
                {item}
              </li>
            ))}
          </ul>

          <ul className="mt-7 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-8">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-medium link-line pb-1"
            >
              Visit live site
              <ArrowUpRight size={18} className="text-accent" />
            </a>
          </div>
        </div>

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.name} live site`}
          className="lg:col-span-7 block self-start"
        >
          <div className="overflow-hidden rounded-xl border border-line bg-paper-2 transition-shadow duration-500 group-hover:shadow-[10px_10px_0_0_var(--accent)]">
            <div className="flex h-9 items-center gap-3 border-b border-line px-4">
              <span className="flex gap-1.5">
                <span className="size-2 rounded-full bg-line" />
                <span className="size-2 rounded-full bg-line" />
                <span className="size-2 rounded-full bg-line" />
              </span>
              <span className="font-mono text-[11px] text-muted truncate">{domainOf(project.liveUrl)}</span>
            </div>
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={`${project.name} screenshot`}
                width={1891}
                height={954}
                loading="lazy"
                className="block w-full h-auto transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </a>
      </article>
    </Reveal>
  );
};

export const Work: React.FC = () => (
  <section id="work" className="max-w-7xl mx-auto px-5 sm:px-8 pt-24 lg:pt-32">
    <SectionHeading index="01" label={`Selected work — ${String(projects.length).padStart(2, '0')} projects`}>
      Shipped, live and <Em>in use.</Em>
    </SectionHeading>
    {projects.map((project, index) => (
      <ProjectRow key={project.id} project={project} index={index} />
    ))}
  </section>
);
