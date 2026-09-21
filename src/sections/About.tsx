import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '../components/Badge';
import { BorderedCard } from '../components/BorderedCard';
import { CheckmarkList } from '../components/CheckmarkList';
import { personalInfo, coreStrengths } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 border-y border-border-subtle/30 bg-bg-base/30 relative">
      <div className="absolute inset-0 bg-radial-glow opacity-30 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio */}
          <motion.div 
            className="lg:col-span-6 space-y-6 text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Badge label="About Me" dotColor="blue" />
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Driven by Quality,<br />
              Guided by Performance.
            </h2>
            <p className="text-base text-text-muted leading-relaxed font-normal">
              {personalInfo.bio}
            </p>
            <p className="text-sm text-text-muted/80 leading-relaxed font-normal">
              I believe that beautiful design and solid code should work in perfect harmony. During my studies, I have focused on understanding how web applications perform under the hood, ensuring my interfaces not only look modern but also render instantly.
            </p>
          </motion.div>

          {/* Right Column: Strengths Card */}
          <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <BorderedCard hoverGlow={true} className="p-6 sm:p-8">
              <h3 className="text-lg font-display font-bold text-white mb-6 text-left">
                What I Bring to the Table
              </h3>
              <CheckmarkList items={coreStrengths} />
            </BorderedCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
