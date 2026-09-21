import React from 'react';
import { Check } from 'lucide-react';

interface CheckmarkListProps {
  items: string[];
  className?: string;
}

export const CheckmarkList: React.FC<CheckmarkListProps> = ({ items, className = '' }) => {
  return (
    <ul className={`space-y-4.5 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3.5 text-text-muted hover:text-text-primary transition-colors duration-300">
          <span className="flex-shrink-0 flex items-center justify-center w-5.5 h-5.5 rounded-full bg-accent-blue/20 text-accent-cyan border border-accent-blue/30 mt-0.5 shadow-[0_0_8px_rgba(59,130,246,0.25)]">
            <Check className="w-3.5 h-3.5 stroke-[3.5px]" />
          </span>
          <span className="text-sm sm:text-[15px] leading-relaxed font-medium">{item}</span>
        </li>
      ))}
    </ul>
  );
};
