import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => (
  <footer className="border-t border-line">
    <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between font-mono text-xs uppercase tracking-[0.14em] text-muted">
      <span>
        © {new Date().getFullYear()} {personalInfo.name}
      </span>
      <span>Built with React, TypeScript & Tailwind CSS</span>
      <a href="#" className="hover:text-ink transition-colors">
        Back to top ↑
      </a>
    </div>
  </footer>
);
