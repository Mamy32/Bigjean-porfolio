import React from 'react';

interface BorderedCardProps {
  children: React.ReactNode;
  className?: string;
  hoverGlow?: boolean;
}

export const BorderedCard: React.FC<BorderedCardProps> = ({ children, className = '', hoverGlow = true }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl bg-bg-card border border-border-subtle p-6 transition-all duration-500 group ${
      hoverGlow 
        ? 'hover:border-accent-blue/30 hover:shadow-[0_0_30px_rgba(59,130,246,0.05)] hover:-translate-y-1' 
        : ''
    } ${className}`}>
      {hoverGlow && (
        <div className="absolute inset-0 -z-10 bg-radial-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      )}
      {children}
    </div>
  );
};
