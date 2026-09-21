import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Maximize2 } from 'lucide-react';
import { Badge } from '../components/Badge';
import { BrowserMockup } from '../components/BrowserMockup';
import { projects } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <>
      <section id="projects" className="py-24 relative bg-grid-pattern">
        <div className="absolute top-[30%] left-[50%] w-[600px] h-[600px] -translate-x-1/2 rounded-full bg-radial-glow opacity-30 -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <Badge label="My Work" dotColor="cyan" />

            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Projects Built for Scale and Speed
            </h2>

            <p className="text-sm sm:text-base text-text-muted max-w-xl mx-auto">
              A curated selection of applications representing my full-stack
              expertise, system architecture patterns, and design details.
            </p>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className="flex flex-col h-full bg-bg-card/40 rounded-2xl border border-border-subtle hover:border-accent-blue/35 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/5 group overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Browser Mockup Area */}
                <BrowserMockup
                  title={
                    project.liveUrl
                      ? project.liveUrl.replace('https://', '')
                      : 'localhost:3000'
                  }
                  className="border-0 rounded-b-none border-b border-border-subtle/60 flex-shrink-0"
                >
                  {/* Clickable Project Image */}
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedImage({
                        src: project.mockupData.image,
                        alt: project.mockupData.title,
                      })
                    }
                    className="relative block w-full aspect-[16/9] overflow-hidden rounded-lg cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-accent-cyan/60"
                    aria-label={`View ${project.mockupData.title} screenshot`}
                  >
                    <img
                      src={project.mockupData.image}
                      alt={project.mockupData.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 px-3 py-2 rounded-lg bg-black/60 border border-white/10 backdrop-blur-sm">
                        <Maximize2 className="w-4 h-4 text-white" />
                        <span className="text-xs text-white font-mono">
                          View Image
                        </span>
                      </div>
                    </div>
                  </button>
                </BrowserMockup>

                {/* Text Info Area */}
                <div className="flex-1 p-5 flex flex-col justify-between text-left space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-display font-bold text-text-primary group-hover:text-accent-cyan transition-colors duration-200">
                      {project.title.split(' — ')[0]}
                    </h3>

                    <p className="text-sm text-text-muted font-normal leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {/* Tech stack badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-mono font-medium tracking-wide uppercase text-accent-cyan/95 bg-accent-cyan/10 border border-accent-blue/15 px-2 py-0.5 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer Links */}
                    <div className="flex items-center gap-4 pt-3 border-t border-border-subtle/40">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-mono text-text-muted hover:text-text-primary transition-colors duration-200"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 sm:top-8 sm:right-8 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center transition-colors"
              aria-label="Close image"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Enlarged Image */}
            <motion.img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl cursor-default"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};