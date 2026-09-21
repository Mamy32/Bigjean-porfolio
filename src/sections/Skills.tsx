import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../components/Badge';
import { BorderedCard } from '../components/BorderedCard';
import { skillGroups } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="stack" className="py-24 border-y border-border-subtle/30 bg-bg-base/30 relative">
      <div className="absolute inset-0 bg-radial-glow-violet opacity-35 -z-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge label="Tech Stack" dotColor="violet" />
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Tools of the Trade
          </h2>
          <p className="text-sm sm:text-base text-text-muted max-w-xl mx-auto">
            A comprehensive set of languages, frameworks, and cloud utilities that I use to bring ideas to life.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <BorderedCard hoverGlow={true} className="h-full flex flex-col justify-start p-6 text-left">
                <h3 className="text-base sm:text-lg font-display font-bold text-text-primary mb-5 border-b border-border-subtle pb-3">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <div 
                      key={item.name}
                      className="px-3 py-1.5 rounded-lg bg-bg-base/60 border border-border-subtle text-xs font-mono font-medium text-text-primary hover:text-accent-cyan hover:border-accent-cyan/40 transition-all duration-300 select-none"
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              </BorderedCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
