import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './Button';
import { personalInfo } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Stack", href: "#stack" },
    { label: "Experience", href: "#experience" },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-bg-base/70 backdrop-blur-md border-b border-border-subtle/40 py-3.5' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Wordmark */}
          <a href="#" className="flex items-center gap-1.5 group">
            <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-text-primary">
              Mamy<span className="text-accent-cyan">.Jean</span>
            </span>
            <span className="w-2 h-2 rounded-full bg-accent-violet animate-breathing-dot" />
          </a>

          {/* Desktop Nav links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="text-sm font-medium text-text-muted hover:text-text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden md:block">
            <a href={`mailto:${personalInfo.email}`}>
              <Button variant="primary" className="text-xs px-5 py-2 sm:px-6 sm:py-2.5">
                Contact Me
              </Button>
            </a>
          </div>

          {/* Hamburger toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1.5 text-text-muted hover:text-text-primary transition-colors duration-200 cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-bg-card border-b border-border-subtle px-4 py-6 flex flex-col gap-5 shadow-2xl transition-all duration-300">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-text-muted hover:text-text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="border-t border-border-subtle/50 pt-4">
            <a href={`mailto:${personalInfo.email}`} onClick={() => setIsOpen(false)}>
              <Button variant="primary" className="w-full">
                Contact Me
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
