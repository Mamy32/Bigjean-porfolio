import React from 'react';

interface BadgeProps {
  label: string;
  dotColor?: 'cyan' | 'blue' | 'violet';
}

export const Badge: React.FC<BadgeProps> = ({ label, dotColor = 'violet' }) => {
  const dotColorClass = {
    cyan: 'bg-accent-cyan shadow-[0_0_8px_#38BDF8]',
    blue: 'bg-accent-blue shadow-[0_0_8px_#3B82F6]',
    violet: 'bg-accent-violet shadow-[0_0_8px_#9250FD]',
  }[dotColor];

  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-bg-card/60 backdrop-blur-md border border-border-subtle select-none">
      <span className={`w-1.5 h-1.5 rounded-full ${dotColorClass}`} />
      <span className="text-[10px] font-mono font-semibold tracking-widest uppercase text-text-muted">
        {label}
      </span>
    </div>
  );
};
