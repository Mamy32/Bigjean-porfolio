import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, ArrowUpRight } from 'lucide-react';
import { Badge } from '../components/Badge';
import { Button } from '../components/Button';
import { BorderedCard } from '../components/BorderedCard';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const socials = [
    { label: "GitHub", href: personalInfo.github, icon: Github },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-grid-pattern border-t border-border-subtle/30">
      <div className="absolute bottom-0 left-[50%] -translate-x-1/2 w-[700px] h-[350px] rounded-t-full bg-radial-glow opacity-30 -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Badge label="Connect" dotColor="violet" />
          
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
            Ready to Build <br />
            Something Amazing?
          </h2>
          
          <p className="text-sm sm:text-base text-text-muted max-w-lg mx-auto leading-relaxed">
            I am currently looking for remote opportunities or freelance software engineering roles. Whether you have a project in mind or just want to chat engineering, feel free to reach out!
          </p>

          {/* Contact Box */}
          <div className="max-w-md mx-auto pt-4">
            <BorderedCard hoverGlow={true} className="p-6 sm:p-8 space-y-6">
              <p className="text-xs font-mono tracking-widest text-text-muted uppercase">
                Direct Channel
              </p>
              
              <div className="flex flex-col items-center gap-4">
                <a href={`mailto:${personalInfo.email}`} className="w-full">
                  <Button variant="primary" className="w-full gap-2 text-sm sm:text-base py-3 sm:py-3.5 shadow-[0_0_30px_rgba(37,99,235,0.15)] cursor-pointer">
                    <Mail className="w-5 h-5" />
                    {personalInfo.email}
                  </Button>
                </a>
              </div>

              <div className="flex items-center justify-center gap-6 pt-6 border-t border-border-subtle/40">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-1 text-[11px] font-mono font-medium text-text-muted hover:text-text-primary transition-colors duration-200 cursor-pointer"
                    >
                      <Icon className="w-3.5 h-3.5 text-text-muted group-hover:text-accent-cyan transition-colors" />
                      {social.label}
                      <ArrowUpRight className="w-2.5 h-2.5 text-text-muted/40 group-hover:text-text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </a>
                  );
                })}
              </div>
            </BorderedCard>
          </div>

          <div className="pt-12 text-[10px] font-mono text-text-muted select-none">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
        </motion.div>
      </div>
    </section>
  );
};
