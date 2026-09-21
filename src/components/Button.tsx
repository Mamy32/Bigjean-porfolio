import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseClass = "inline-flex items-center justify-center font-display font-semibold transition-all duration-300 rounded-full select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-blue focus:ring-offset-2 focus:ring-offset-bg-base text-sm px-6 py-2.5 sm:px-8 sm:py-3";
  
  let variantClass = "";
  if (variant === 'primary') {
    variantClass = "bg-gradient-button text-white hover:scale-[1.02] active:scale-[0.98] border border-transparent shadow-[0_0_15px_rgba(37,99,235,0.15)] hover:shadow-[0_0_25px_rgba(56,189,248,0.3)]";
  } else if (variant === 'secondary') {
    variantClass = "bg-bg-card text-text-primary border border-border-subtle hover:bg-white/5 hover:border-accent-blue/40 hover:scale-[1.02] active:scale-[0.98]";
  } else {
    variantClass = "bg-transparent text-text-muted hover:text-text-primary hover:bg-white/5 active:scale-[0.98]";
  }
  
  return (
    <button className={`${baseClass} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
};
