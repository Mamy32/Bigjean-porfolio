import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, ExternalLink } from 'lucide-react';
import { Badge } from '../components/Badge';
import { BorderedCard } from '../components/BorderedCard';
import { experience, education } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-grid-pattern">
      <div className="absolute top-[40%] right-[10%] w-[450px] h-[450px] rounded-full bg-radial-glow opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge label="Journey" dotColor="cyan" />

          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Education & Work Experience
          </h2>

          <p className="text-sm sm:text-base text-text-muted max-w-xl mx-auto">
            A history of my academic qualifications and software engineering
            internships.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">

          {/* Work Experience */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <Briefcase className="w-5 h-5 text-accent-cyan" />
              <h3 className="text-xl font-display font-bold text-white">
                Experience
              </h3>
            </div>

            <div className="space-y-6 relative border-l border-border-subtle/50 pl-6 ml-2.5">
              {experience.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="relative group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  {/* Bullet indicator */}
                  <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-accent-blue border-2 border-bg-base shadow-[0_0_8px_#3B82F6] transition-transform duration-300 group-hover:scale-125" />

                  <BorderedCard hoverGlow={true} className="p-5 sm:p-6">

                    {/* Role + Period */}
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                      <h4 className="text-base sm:text-lg font-display font-bold text-text-primary group-hover:text-accent-cyan transition-colors duration-200">
                        {item.role}
                      </h4>

                      <span className="text-[10px] font-mono font-semibold tracking-widest text-accent-violet uppercase">
                        {item.period}
                      </span>
                    </div>

                    {/* Company */}
                    <p className="text-sm font-medium text-text-muted mb-4 font-display">
                      {item.company}
                    </p>

                    {/* Description */}
                    <ul className="space-y-2 mb-5 list-disc list-outside pl-4 text-text-muted text-xs sm:text-sm font-normal leading-relaxed">
                      {item.description.map((desc, dIdx) => (
                        <li key={dIdx}>{desc}</li>
                      ))}
                    </ul>

                    {/* Websites Optimized */}
                    {item.websites && item.websites.length > 0 && (
                      <div className="mb-5 pt-4 border-t border-border-subtle/30">
                        <div className="flex items-center gap-2 mb-3">
                          <ExternalLink className="w-3.5 h-3.5 text-accent-cyan" />

                          <span className="text-[10px] font-mono font-semibold tracking-widest uppercase text-text-primary">
                            Websites Optimized
                          </span>
                        </div>

                        <div className="space-y-2">
                          {item.websites.map((website) => (
                            <a
                              key={website.url}
                              href={website.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 group/website w-fit max-w-full"
                            >
                              <span className="text-xs sm:text-sm font-mono text-text-muted group-hover/website:text-accent-cyan transition-colors duration-200 truncate">
                                {website.name}
                              </span>

                              <ExternalLink className="w-3 h-3 flex-shrink-0 text-text-muted group-hover/website:text-accent-cyan transition-colors duration-200" />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border-subtle/30">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-mono tracking-wider uppercase text-text-muted bg-bg-base/80 px-2 py-0.5 rounded border border-border-subtle/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                  </BorderedCard>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="w-5 h-5 text-accent-violet" />

              <h3 className="text-xl font-display font-bold text-white">
                Education
              </h3>
            </div>

            <div className="space-y-6 relative border-l border-border-subtle/50 pl-6 ml-2.5">
              {education.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="relative group"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  {/* Bullet indicator */}
                  <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-accent-violet border-2 border-bg-base shadow-[0_0_8px_#9250FD] transition-transform duration-300 group-hover:scale-125" />

                  <BorderedCard hoverGlow={true} className="p-5 sm:p-6">

                    {/* Degree + Period */}
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                      <h4 className="text-base sm:text-lg font-display font-bold text-text-primary group-hover:text-accent-violet transition-colors duration-200">
                        {item.degree}
                      </h4>

                      <span className="text-[10px] font-mono font-semibold tracking-widest text-accent-cyan uppercase">
                        {item.period}
                      </span>
                    </div>

                    {/* Institution */}
                    <p className="text-sm font-medium text-text-muted mb-4 font-display">
                      {item.institution}
                    </p>

                    {/* Education Description */}
                    <ul className="space-y-2 list-disc list-outside pl-4 text-text-muted text-xs sm:text-sm font-normal leading-relaxed">
                      {item.description.map((desc, dIdx) => (
                        <li key={dIdx}>{desc}</li>
                      ))}
                    </ul>

                  </BorderedCard>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};