import React from 'react';
import { motion } from 'framer-motion';
import { Code, Rocket, GitCommit, Cpu, ArrowRight, Mail } from 'lucide-react';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { BrowserMockup } from '../components/BrowserMockup';
import { StatsWidget } from '../components/StatsWidget';
import { personalInfo, trustStats } from '../data/portfolioData';

const iconMap: Record<string, React.ComponentType<any>> = {
  Code,
  Rocket,
  GitCommit,
  Cpu,
};

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Background glowing circles */}
      <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] rounded-full bg-radial-glow opacity-60 -z-10 animate-pulse-slow" />
      <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-radial-glow-violet opacity-50 -z-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div 
            className="lg:col-span-7 space-y-6 sm:space-y-8 text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Pill Badge */}
            <Badge label={personalInfo.availabilityStatus} dotColor="cyan" />

            {/* Gradient Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.1] sm:leading-[1.05]">
              Hi, I'm <span className="bg-gradient-text bg-clip-text text-transparent">{personalInfo.name}</span>. <br className="hidden sm:inline" />
              I build scalable software solutions.
            </h1>

            {/* One-line Subtext */}
            <p className="text-base sm:text-lg text-text-muted max-w-xl font-normal leading-relaxed">
              {personalInfo.tagline}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a href="#projects">
                <Button variant="primary" className="gap-2 group">
                  View My Work
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
              </a>
              <a href={`mailto:${personalInfo.email}`}>
                <Button variant="secondary" className="gap-2">
                  <Mail className="w-4 h-4" />
                  Contact Me
                </Button>
              </a>
            </div>

            {/* Stat/Trust Row */}
            <div className="pt-6 border-t border-border-subtle/50 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {trustStats.map((stat, index) => {
                const IconComponent = iconMap[stat.icon] || Code;
                return (
                  <div key={index} className="space-y-1">
                    <div className="flex items-center gap-2 text-accent-cyan">
                      <IconComponent className="w-4 h-4" />
                      <span className="text-xl sm:text-2xl font-bold font-display text-text-primary tracking-tight">
                        {stat.value}
                      </span>
                    </div>
                    <p className="text-[10px] font-mono tracking-widest text-text-muted uppercase">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Floating Mockup */}
          <motion.div 
            className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <BrowserMockup title="github.com/alexrivera/activity">
              <StatsWidget />
            </BrowserMockup>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
