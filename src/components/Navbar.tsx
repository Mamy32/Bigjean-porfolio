import React, { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
];

type Theme = 'light' | 'dark';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(
    () => (document.documentElement.dataset.theme as Theme) || 'light',
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // storage unavailable — theme still applies for this visit
    }
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-line bg-paper/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display font-semibold text-lg tracking-tight">
          {personalInfo.name}
          <span className="size-2 rounded-full bg-accent" />
        </a>

        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-[0.14em]">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-muted hover:text-ink transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            className="size-10 grid place-items-center rounded-full border border-line hover:border-ink transition-colors cursor-pointer"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href="#contact"
            className="hidden sm:inline-flex h-10 items-center rounded-full bg-ink px-5 text-sm font-medium text-paper hover:bg-accent hover:text-white transition-colors"
          >
            Get in touch
          </a>
          <button
            type="button"
            onClick={() => setIsOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="md:hidden size-10 grid place-items-center rounded-full border border-line cursor-pointer"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden border-t border-line bg-paper px-5 pb-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block border-b border-line py-4 font-display text-2xl font-semibold tracking-tight"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-5 flex h-12 items-center justify-center rounded-full bg-ink text-paper font-medium"
          >
            Get in touch
          </a>
        </nav>
      )}
    </header>
  );
};
